import React, { Component } from "react";

export default class UserList extends Component {
    constructor(props) {
        super(props)
    }

    componentWillMount() {

    }
  render() {
    const list = this.props.users;
    console.log(list);
    return (
      <div>
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Age</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {
              list.map((x,i) => 
              <tr>
                <th scope="row">{i+1}</th>
                <td>{x.name}</td>
                <td>{x.age}</td>
                <td>
                  <button className="btn btn-info mr-2">update</button>
                  <button className="btn btn-danger">delete</button>
                </td>
              </tr>)
            }
          </tbody>
        </table>
      </div>
    );
  }
}
