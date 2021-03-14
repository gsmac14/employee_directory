import React, { Component } from "react";
import API from "../utils/API";
import Header from "../components/Header";
import Search from "../components/Search";
// import Card from "../components/Card";
import Table from "../components/Table";

export default class Home extends Component {
  state = {
    results: [],
    order: "descend",
    filterResults: [],
  };

  componentDidMount() {
    API.getRandomUser()
      .then((res) => this.setState({ results: res.data.results }))
      .catch((err) => console.log(err));
  }

  handleSearch = (event) => {
    const filter = event.target.value;
    console.log(filter);
    const filteredList = this.state.results.filter((item) => {
      let values = Object.values(item).join("").toLowerCase();
      return values.indexOf(filter.toLowerCase()) !== -1;
    });
    this.setState({ filterResults: filteredList });
  };

  handleSort = (event) => {
    if (this.state.order === "descend") {
      this.setState({ order: "ascend" });
    } else {
      this.setState({ order: "descend" });
    }
    console.log(event);
    const compareFunc = (a, b) => {
      if (this.state.order === "ascend") {
        if (a[event] === undefined) {
          return 1;
        } else if (b[event] === undefined) {
          return -1;
        } else if (event === "name") {
          return a[event].first.localeCompare(b[event].first);
        } else if (event === "email") {
          return a[event].first.localeCompare(b[event].first);
        } else if (event === "location") {
          return a[event].first.localeCompare(b[event].first);
        } else {
          return a[event] - b[event];
        }
      } else {
        if (a[event] === undefined) {
          return 1;
        } else if (b[event] === undefined) {
          return -1;
        } else if (event === "name") {
          return b[event].first.localeCompare(a[event].first);
        } else {
          return b[event] - a[event];
        }
      }
    };
    console.log(this.state.results);
    const sortedUsers = this.state.results.sort(compareFunc);
    console.log(sortedUsers);
    this.setState({ filterResults: sortedUsers });
  };
  render() {
    return (
      <>
        <Header />
        <Search handleSearch={this.handleSearch} />
        <Table
          handleSort={this.handleSort}
          results={this.state.results}
          filterResults={this.state.filterResults}
        />
      </>
    );
  }
}
