import React from "react";
import index from "../index.css";
const Form = (props) => {
  return (
    <form onSubmit={props.add}>
      <input type="text" value={props.current} onChange={props.updatecourse} />{" "}
      <button type="submit"> Add Course</button>{" "}
    </form>
  );
};
export default Form;
