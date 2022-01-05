import React from "react";
import ChildComponent from "./ChildComponent";
import AddComponent from "./AddComponent";

class MyComponent extends React.Component {
  state = {
    arrJobs: [
      { id: "arr1", title: "Deverloper", salary: 500 },
      { id: "arr2", title: "Tester", salary: 300 },
      { id: "arr3", title: "Project managers", salary: 1500 },
    ],
  };

  addNewJobs = (job) => {
    this.setState({
      arrJobs: [...this.state.arrJobs, job],
    });
  };

  deleteJobs = (job) => {
    let currentJobs = this.state.arrJobs;
    currentJobs = currentJobs.filter((item) => item.id !== job.id);
    console.log(">>>currentJOb", currentJobs);
    this.setState({
      arrJobs: currentJobs,
    });
  };
  render() {
    console.log("Call render>>>", this.state);
    return (
      <>
        <AddComponent addNewJobs={this.addNewJobs} />
        <ChildComponent
          firstName={this.state.firstName}
          arrJobs={this.state.arrJobs}
          deleteJobs={this.deleteJobs}
        />
      </>
    );
  }
}

export default MyComponent;
