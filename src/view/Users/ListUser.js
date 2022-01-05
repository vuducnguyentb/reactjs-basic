import React from "react";
import axios from "axios";
import "./ListUser.scss";
import { withRouter } from "react-router-dom";

class ListUser extends React.Component {
  state = {
    listUser: [],
  };
  async componentDidMount() {
    // axios.get("https://reqres.in/api/users").then((res) => {
    //   console.log(">>>>Res", res);
    // });

    let res = await axios.get("https://reqres.in/api/users");
    this.setState({
      listUser: res && res.data && res.data.data ? res.data.data : [],
    });
    console.log(res.data.data);
  }
  handeViewDetailUser(user) {
    this.props.history.push(`/user/${user.id}`);
  }
  render() {
    let { listUser } = this.state;
    return (
      <div className="list-user-container">
        <div className="title">All user get server</div>
        <div className="list-user-content">
          {listUser &&
            listUser.length > 0 &&
            listUser.map((item, index) => {
              return (
                <>
                  <div
                    className="child"
                    key={item.id}
                    onClick={() => this.handeViewDetailUser(item)}
                  >
                    {index + 1}- {item.first_name}
                  </div>
                </>
              );
            })}
        </div>
      </div>
    );
  }
}

export default withRouter(ListUser);
