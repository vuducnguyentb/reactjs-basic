import React from "react";
import { withRouter } from "react-router";
import Color from "./HOC/Color";
import { connect } from "react-redux";
import logo from "../assets/images/logo_nguyenkye.png";

class Home extends React.Component {
  componentDidMount() {
    // setTimeout(() => {
    //   this.props.history.push("/todo");
    // }, 3000);
  }
  handleDeleteUser = (user) => {
    // console.log("User check", user);
    this.props.deleteUserRedux(user);
  };
  handleCreateUsser = () => {
    this.props.addUserRedux();
  };
  render() {
    console.log(">>>check props", this.props.dataRedux);
    let listUser = this.props.dataRedux;

    return (
      <>
        <div>
          <img
            src={logo}
            style={{ width: "50px", height: "50px", marginTop: "20px" }}
          />
        </div>
        <div>
          {listUser &&
            listUser.length > 0 &&
            listUser.map((item, index) => {
              return (
                <div key={item.id}>
                  {index + 1} - {item.name} &nbsp;
                  <span onClick={() => this.handleDeleteUser(item)}>x</span>
                </div>
              );
            })}
        </div>
        <button onClick={() => this.handleCreateUsser()}>Add new</button>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    dataRedux: state.users,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    deleteUserRedux: (userDelete) =>
      dispatch({ type: "DELETE_USER", payload: userDelete }),
    addUserRedux: () => dispatch({ type: "CREATE_USER" }),
  };
};
// export default withRouter(Home);
export default connect(mapStateToProps, mapDispatchToProps)(Color(Home));
