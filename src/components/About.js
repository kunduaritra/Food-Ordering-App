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
      <div>
        <h1>About Page</h1>
        <UserClass name={"Aritra Kundu (classbase)"} />
      </div>
    );
  }
}

export default About;
