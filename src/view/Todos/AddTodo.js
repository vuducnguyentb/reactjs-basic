import React from "react";
import { toast } from "react-toastify";

class AddTodo extends React.Component {
  state = {
    title: "",
  };
  handleChangeTitle = (event) => {
    this.setState({
      title: event.target.value,
    });
    // console.log(event.target.value);
  };
  handleClick = (event) => {
    if (!this.state.title) {
      toast.error(`Please touch title's job`);
      //   alert("Please touch input title");
      return;
    }
    let todo = {
      id: Math.floor(Math.random() * 1000),
      title: this.state.title,
    };
    this.props.addNewTodo(todo);
    toast.success(`Success!`);

    this.setState({
      title: "",
    });
  };
  render() {
    return (
      <div className="add-todo">
        <input
          type="text"
          value={this.state.title}
          onChange={(event) => this.handleChangeTitle(event)}
        />
        <button onClick={(event) => this.handleClick(event)}>Add</button>
      </div>
    );
  }
}

export default AddTodo;
