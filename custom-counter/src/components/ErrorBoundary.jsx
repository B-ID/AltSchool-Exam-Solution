import React, { Component } from "react";
import { Helmet } from "react-helmet-async";

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: true,
    };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.log("Logging", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <>
          <Helmet>
            <title>Error boundary page</title>
            <meta
              name="description"
              content="Error boundary page on the situation for when React App breaks"
            />
            <link rel="canonical" href="/errorBoundary" />
          </Helmet>
          <div className=" text-7xl text-red-500 flex items-center justify-center h-screen bg-red-100">
            <h1 className="animate-pulse">Something went wrong!!</h1>
          </div>
        </>
      );
    }

    return this.props.children;
  }
}
