import React from "react";

class AddComponent extends React.Component {
  state = {
    title: "",
    salary: "",
  };

  handleChangeTitle = (event) => {
    this.setState({
      title: event.target.value,
    });
  };

  handleChangeSalary = (event) => {
    this.setState({
      salary: event.target.value,
    });
  };

  handleClick = (event) => {
    event.preventDefault();
    console.log("data:", this.state);
    if (!this.state.salary || !this.state.title) {
      alert("Missing required param");
      return;
    }
    this.props.addNewJobs({
      id: Math.floor(Math.random() * 1000),
      title: this.state.title,
      salary: this.state.salary,
    });
    this.setState({
      title: "",
      salary: "",
    });
  };

  render() {
    return (
      <>
        <form>
          <label htmlFor="fname">Title JOB:</label>
          <br />
          <input
            type="text"
            value={this.state.title}
            onChange={(event) => this.handleChangeTitle(event)}
          />
          <br />
          <label htmlFor="lname">Salary:</label>
          <br />
          <input
            type="text"
            value={this.state.salary}
            onChange={(event) => this.handleChangeSalary(event)}
          />
          <br />
          <br />
          <input type="submit" onClick={(event) => this.handleClick(event)} />
        </form>
      </>
    );
  }
}

export default AddComponent;
