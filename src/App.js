import React, { Component } from "react";
import index from "./index.css";
import Form from "./components/Form";
import List from "./components/List";
class App extends Component {
  state = {
    courses: [],
    current: "",
  };
  //update course
  update = (e) => {
    this.setState({
      current: e.target.value,
    });
  };

  //add course
  add = (e) => {
    e.preventDefault();
    let current = this.state.current;
    let courses = this.state.courses;
    if (current) {
      courses.push({ name: current });
      this.setState({
        courses: courses,
      });
    }
  };
  //delte course
  delete = (index) => {
    let courses = this.state.courses;
    courses.splice(index, 1);
    this.setState({
      courses: courses,
    });
  };
  //edit course
  edit = (index, value) => {
    let courses = this.state.courses;
    let course = courses[index];
    course["name"] = value;
    this.setState({
      courses: courses,
    });
  };
  render() {
    const { courses } = this.state;
    const courselist = courses.map((course, index) => {
      return (
        <List
          details={course}
          key={index}
          index={index}
          update={this.handleChange}
          delete={this.delete}
          edit={this.edit}
        />
      );
    });
    return (
      <section className="App">
        <h2> Add Courses </h2>{" "}
        <Form
          current={this.state.current}
          updatecourse={this.update}
          add={this.add}
        />
        <ul>
          {this.state.courses.length ? (
            courselist
          ) : (
            <h3>No Courses To Show ! Please Enter a New Courses</h3>
          )}
        </ul>
      </section>
    );
  }
}

export default App;
