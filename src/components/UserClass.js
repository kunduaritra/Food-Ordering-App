import React from "react";
import { FaFacebook, FaLinkedin, FaGithubSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import UserContext from "../utils/UserContext";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   count: 0,

    // };
    this.state = {
      userProfile: {},
    };
  }
  async componentDidMount() {
    // API Calls
    const data = await fetch("https://api.github.com/users/kunduaritra");
    const jsonData = await data.json();
    this.setState({
      userProfile: jsonData,
    });
  }

  componentDidUpdate() {
    // Render at the time of updating phase
  }

  componentWillUnmount() {
    // Render when we will unmount this component from the browser
  }

  render() {
    // const { name } = this.props;
    // const { count } = this.state;
    // const updateCount = () => {
    //   this.setState({
    //     count: this.state.count + 1,
    //   });
    // };
    const { name, login, avatar_url } = this.state.userProfile;

    return (
      <>
        <div className="flex items-center justify-center">
          <div className="usercard bg-white rounded-lg h-96 w-80 drop-shadow-lg p-5 m-5 flex flex-col items-center text-lg">
            <img
              src={avatar_url}
              alt="avatar"
              width="150px"
              className="rounded-full mb-4"
            />
            <h4>
              Name: <span className="font-bold">{name}</span>
            </h4>
            <h4>Username: {login}</h4>
            <h4>Address: Basirhat</h4>
            <h4>Role: Frontend Developer</h4>
            <div className="mt-4 flex justify-center items-center space-x-3 cursor-pointer">
              <a href="https://github.com/kunduaritra" target="_blank">
                <FaGithubSquare className="h-9 w-9 text-black" />
              </a>
              <a
                href="https://www.facebook.com/aritra.kundu.587"
                target="_blank"
              >
                <FaFacebook className="h-9 w-9 text-blue-800" />
              </a>
              <a
                href="https://www.linkedin.com/in/aritra-kundu/"
                target="_blank"
              >
                <FaLinkedin className="h-9 w-9 text-blue-600" />
              </a>
              <a href="https://x.com/iaritrakundu" target="_blank">
                <FaSquareXTwitter className="h-9 w-9 text-black" />
              </a>
            </div>
            <UserContext.Consumer>
              {(data) => (
                <h1 className="text-sm text-green-500 mt-8">
                  Logged User: {data.loggedInUser}
                </h1>
              )}
            </UserContext.Consumer>
          </div>

          {/* <h1>Count: {count}</h1>
        <button onClick={updateCount}>Increase</button> */}
        </div>
      </>
    );
  }
}

export default UserClass;
