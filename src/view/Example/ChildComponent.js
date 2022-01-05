import React from "react";
import "./Demo.scss";

class ChildComponent extends React.Component {
  state = {
    showJobs: false,
  };
  render() {
    // console.log("Call render>>>", this.state);
    // console.log("Props is", this.props);
    // let name = this.props.name;
    // let age = this.props.age;
    let { arrJobs } = this.props;
    let showJobs = this.state.showJobs;
    let a = "";
    let handleHidden = () => {
      this.setState({
        showJobs: !this.state.showJobs,
      });
    };

    let handleOnClickDelete = (job) => {
      console.log(">>>>handleDelete", job);
      this.props.deleteJobs(job);
    };
    let check = showJobs === false ? "showJobs = false" : "showJobs = true";
    return (
      <>
        <div>
          {showJobs === true ? (
            <>
              <button onClick={() => handleHidden()}>Hidden</button>
              {showJobs && (
                <div className="jobList">
                  {
                    (a = arrJobs.map((item, index) => {
                      if (item.salary >= 500) {
                        return (
                          <div key={item.id}>
                            {item.title} - {item.salary} $ <></>{" "}
                            <span
                              style={{ color: "red" }}
                              onClick={() => handleOnClickDelete(item)}
                            >
                              x
                            </span>
                          </div>
                        );
                      }
                    }))
                  }
                </div>
              )}
            </>
          ) : (
            <div>
              <button onClick={() => handleHidden()} className="btn-succes">
                Show
              </button>
            </div>
          )}
        </div>
      </>
    );
  }
}

// const ChildComponent = (props) => {
//   console.log("Props is", props);
//   let { arrJobs } = props;
//   let a = "";
//   return (
//     <>
//       <div className="jobList">
//         {
//           (a = arrJobs.map((item, index) => {
//             return (
//               <div key={item.id}>
//                 {item.title} - {item.salary}
//               </div>
//             );
//           }))
//         }
//       </div>
//     </>
//   );
// };

export default ChildComponent;
