import React from "react";
import Play from "./play/play.js";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      app: [],
      search: "",
      sort: "",
      error: null
    };
  }
  setSearch(search) {
    this.setState({
      search
    });
  }

  setSort(sort) {
    this.setState({
      sort
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const baseUrl = "http://localhost:8000/app";
    const params = [];
    if (this.state.search) {
      params.push(`search=${this.state.search}`);
    }
    if (this.state.sort) {
      params.push(`sort=${this.state.sort}`);
    }
    const query = params.join("&");
    const url = `${baseUrl}?${query}`;

    fetch(url)
      .then(res => {
        if (!res.ok) {
          throw new Error(res.statusText);
        }
        return res.json();
      })
      .then(data => {
        this.setState({
          app: data,
          error: null
        });
      })
      .catch(err => {
        this.setState({
          error: "sorry! no games for you!"
        });
      });
  }

  render() {
    const app = this.state.app.map((play, i) => {
      return <Play {...play} key={i} />;
    });
    return (
      <main className="App">
        <h1>Apps from Google Play</h1>
        <div className="search">
          <form onSubmit={e => this.handleSubmit(e)}>
            <label htmlFor="search">Search:</label>
            <input
              type="text"
              id="search"
              name="search"
              value={this.state.search}
              onChange={e => this.setSearch(e.target.value)}
            />
            <label htmlFor="sort">Sort:</label>
            <select
              id="sort"
              name="sort"
              onChange={e => this.setSort(e.target.value)}
            >
              <option value="">None</option>
              <option value="genre">Genre</option>
              <option value="rating">Rating</option>
              <option value="name">Name</option>
            </select>
            <button type="submit">Search</button>
          </form>
          <div className="App_error">{this.state.error}</div>
        </div>
        {app}
      </main>
    );
  }
}
export default App;
