import logo from "../logo.svg";
import "./App.scss";
import "../view/Example/MyComponent";
import MyComponent from "../view/Example/MyComponent";
import ListTodo from "./Todos/ListTodo";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Nav from "./Nav/Nav";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ListUser from "./Users/ListUser";
import DetailUser from "./Users/DetailUser";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Nav />
          <img src={logo} className="App-logo" alt="logo" />
          {/* <ListTodo /> */}
          {/* <MyComponent/> */}

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/todo">
              <ListTodo />
            </Route>
            <Route path="/about">
              <MyComponent />
            </Route>
            <Route path="/user" exact>
              <ListUser />
            </Route>
            <Route path="/user/:id">
              <DetailUser />
            </Route>
          </Switch>
        </header>

        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </div>
    </Router>
  );
}

export default App;
