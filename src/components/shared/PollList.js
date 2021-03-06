import React, { Component } from 'react';
import Poll from './Poll';

class PollList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      polls: [],
      isLoaded: false
    };
    this.updatePolls = this.updatePolls.bind(this);
    this.deletePoll = this.deletePoll.bind(this);
  }

  componentDidMount() {
    this.props.fetchData(this.props.path, this.props.options, this.updatePolls)
  }

  updatePolls(polls) {
    this.setState({ polls: polls, isLoaded: true })
  }

  deletePoll(pollId) {
    this.setState({
      polls: this.state.polls.filter(poll => poll.id !== pollId)
    })
  }

  render() {
    return this.state.isLoaded
    ? (
      <table className="table table-light">
        <tbody>
          {
            this.state.polls.map((poll, index) => <Poll
              key={poll.title + index}
              deletePoll={this.deletePoll}

              index={index}
              id={poll.id}
              title={poll.title}
              question={poll.question}
              createdBy={poll.created_by}
              votes={poll.votes.length}
              username={this.props.username}
            />)
          }
        </tbody>
      </table>
    )
    : <h3>Loading...</h3>
  }
}

export default PollList;
