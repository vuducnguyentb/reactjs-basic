import React from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";

class DetailUser extends React.Component {
  state = {
    user: {},
  };
  async componentDidMount() {
    if (this.props.match && this.props.match.params) {
      let id = this.props.match.params.id;
      let res = await axios.get(`https://reqres.in/api/users/${id}`);
      //   console.log("res", res);
      this.setState({
        user: res && res.data && res.data.data ? res.data.data : {},
      });
    }
  }
  handBackUser() {
    this.props.history.push("/user");
  }
  render() {
    // console.log(">>>props", this.props);
    let { user } = this.state;
    let isEmpty = Object.keys(user).length === 0;

    return (
      <>
        <div>Detail id user : {this.props.params} </div>
        {isEmpty === false && (
          <>
            <div>
              User Name: {user.first_name} -- {user.last_name}
            </div>
            <div>Email : {user.email}</div>
            <div>
              <img src={user.avatar} />
            </div>
          </>
        )}
        <button type="button" onClick={() => this.handBackUser()}>
          Back
        </button>
      </>
    );
  }
}

export default withRouter(DetailUser);
