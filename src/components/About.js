import { Component } from "react";
import UserClass from "./UserClass";

class About extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log("Parent Component Mount");
  }

  render() {
    return (
      <div className="bg-slate-100 h-[80vh]">
        <h1 className="py-5 text-center text-2xl font-bold">About</h1>
        <UserClass />
      </div>
    );
  }
}

export default About;
