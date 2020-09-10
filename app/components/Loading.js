import React from "react";

export default class Loading extends React.Component {
  state = {
    message: "Loading",
    timer: "",
  };

  componentDidMount() {
    const timer = setInterval(() => {
      console.log("Loading timer is active");
      this.setState(({ message }) =>
        message === "Loading..."
          ? { message: "Loading" }
          : { message: message + "." }
      );
    }, 500);
    this.setState({ timer });
  }

  componentWillUnmount() {
    clearInterval(this.state.timer);
  }

  render() {
    return <div className="loading-widget">{this.state.message}</div>;
  }
}
