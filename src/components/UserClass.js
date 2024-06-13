import React from "react";
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
    console.log(jsonData);
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
        <h1>Team</h1>
        <div className="usercard">
          <img src={avatar_url} alt="avatar" width="100px" />
          <h4>Name: {name}</h4>
          <h4>Username: {login}</h4>
          <h4>Social: @iaritrakundu</h4>
          <h4>Address: Basirhat</h4>
        </div>
        {/* <h1>Count: {count}</h1>
        <button onClick={updateCount}>Increase</button> */}
      </>
    );
  }
}

export default UserClass;
