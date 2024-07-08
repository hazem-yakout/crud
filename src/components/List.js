import React, { Component, Fragment } from "react";
import index from "../index.css";
class List extends Component {
  state = {
    edit: false,
  };
  // render course item
  rendercourse = () => {
    return (
      <li>
        <span> {this.props.details.name} </span>
        <button
          onClick={() => {
            this.toggle();
          }}
        >
          {" "}
          Edit Course{" "}
        </button>

        <button
          onClick={() => {
            this.props.delete(this.props.index);
          }}
        >
          X Delete Course{" "}
        </button>
      </li>
    );
  };
  //toggle
  toggle = () => {
    let { edit } = this.state;
    this.setState({
      edit: !edit,
    });
  };
  updatecourse = (e) => {
    e.preventDefault();
    this.props.edit(this.props.index, this.input.value);
    this.toggle();
  };
  //renderupdate
  renderupdate = () => {
    return (
      <form onSubmit={this.updatecourse}>
        <input
          type="text"
          ref={(v) => {
            this.input = v;
          }}
          defaultValue={this.props.details.name}
        />
        <button>Update Course</button>
      </form>
    );
  };
  render() {
    let { edit } = this.state;
    return (
      <Fragment>{edit ? this.renderupdate() : this.rendercourse()}</Fragment>
    );
  }
}

export default List;
