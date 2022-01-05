import React from "react";
import "./ListTodo.scss";
import AddTodo from "./AddTodo";
import { toast } from "react-toastify";

class ListTodo extends React.Component {
  state = {
    listTodos: [
      { id: "todo1", title: "Doing homework" },
      { id: "todo2", title: "Making video" },
      { id: "todo3", title: "Call customer" },
    ],
    editTodo: {},
  };

  addNewTodo = (todo) => {
    this.setState({
      listTodos: [...this.state.listTodos, todo],
    });
  };

  handDeleteTodo = (todo) => {
    let currentListTodo = this.state.listTodos.filter(
      (item) => item.id !== todo.id
    );
    this.setState({
      listTodos: currentListTodo,
    });
    toast.success(`Deleted item of todolist!`);
  };

  handleEditTodo = (todo) => {
    let { editTodo, listTodos } = this.state;
    // console.log(">>>> editTodo", editTodo);
    let isEmptyObj = Object.keys(editTodo).length === 0;
    //save
    if (isEmptyObj === false && editTodo.id === todo.id) {
      let listTodosCopy = [...listTodos];
      //tìm index của phần tử đầu tiên trung id
      let objIndex = listTodosCopy.findIndex((item) => item.id === todo.id);
      //gán title vào
      listTodosCopy[objIndex].title = editTodo.title;

      this.setState({
        ListTodo: listTodosCopy,
        editTodo: {},
      });
      toast.success(`Update item of todolist success!`);

      return;
    }

    //edit
    this.setState({
      editTodo: todo,
    });
  };

  handleChangeEditTodo = (event) => {
    let editTodoCopy = { ...this.state.editTodo };
    editTodoCopy.title = event.target.value;
    this.setState({
      editTodo: editTodoCopy,
    });
  };
  render() {
    let { listTodos, editTodo } = this.state;
    // console.log(">>>>editTodo", editTodo);
    // tạo ra biến trả về true false sau mỗi lần edit
    let isEmptyObj = Object.keys(editTodo).length === 0;
    console.log(">>isEmptyObj", isEmptyObj);
    return (
      <>
        <h1>Helo World</h1>
        <div className="list-todo-container">
          <h2>Example Todo List</h2>
          <AddTodo addNewTodo={this.addNewTodo} />
          <div className="list-todo-content">
            {listTodos &&
              listTodos.length > 0 &&
              listTodos.map((item, index) => {
                return (
                  <div className="todo-child" key={item.id}>
                    {/* ban dau hien ra thang text sau khi an hien ra thang input */}
                    {isEmptyObj === true ? (
                      <span>
                        {index + 1} - {item.title}
                      </span>
                    ) : (
                      <>
                        {item.id === editTodo.id ? (
                          <span>
                            {index + 1}{" "}
                            <input
                              value={editTodo.title}
                              onChange={(event) =>
                                this.handleChangeEditTodo(event)
                              }
                            />
                          </span>
                        ) : (
                          <span>
                            {index + 1} - {item.title}
                          </span>
                        )}
                      </>
                    )}

                    <button
                      className="edit"
                      onClick={() => this.handleEditTodo(item)}
                    >
                      {isEmptyObj === false && editTodo.id === item.id
                        ? "Save"
                        : "Edit"}
                    </button>
                    <button onClick={() => this.handDeleteTodo(item)}>
                      Delete
                    </button>
                  </div>
                );
              })}
          </div>
        </div>
      </>
    );
  }
}

export default ListTodo;
