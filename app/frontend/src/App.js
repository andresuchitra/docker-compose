import React, {Component} from 'react'
import './App.css'
import Header from './components/Header'
import UserList from './components/UserList'
import Axios from 'axios';

const api = Axios.create({
    baseURL: "http://localhost:3001"
})

class App extends Component {
  state = {
    message: "React via Docker Compose",
    users: []
  }

  fetchUsers = async () => {
    let users = []

    api.get('/users')
      .then(({data}) => {
        this.setState({
          users: data
        })
      })
      .catch(err => {
        console.log("Error -> ", err.toString())
      })
  }

  componentWillMount() {
    this.fetchUsers();
  }

  render() {
    return (
      <>
        <Header></Header>
        <div className="container py-3" id="app">
          <h2>{this.state.message}</h2>
          <UserList users={this.state.users}></UserList>
        </div>
      </>
    )
  }
}

export default App
