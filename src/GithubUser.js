import React, { Component } from 'react'

class GithubUser extends Component {
  render() {
    return (
      <div className="GithubUser">
        <h1>GitHub user: {this.props.match.params.username}</h1>
      </div>
    )
  }
}

export default GithubUser
