import React, { Component } from "react";
import API from "../utils/API"
import Header from "../components/Header";
import Card from "../components/Card";


class Home extends Component{
    state = {
        search: "",
        name: [],
        results: [],
        error: ""
    }

    componentDidMount() {
        API.getRandomUser() 
            .then(res => this.setState({name: res.data}))
            .catch(err => console.log(err));
        };
    
    handleInputChange = event => {
        this.setState({ search: event.target.value });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        API.getRandomUser(this.state.search)
          .then(res => {
            if (res.data.status === "error") {
              throw new Error(res.data.message);
            }
            this.setState({ results: res.data.message, error: "" });
          })
          .catch(err => this.setState({ error: err.message }));
      };
      render(){
          return(
              <div>
              <Header />
              <Card/>
              </div>
          )
      }
}

export default Home;
