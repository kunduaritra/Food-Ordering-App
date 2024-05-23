/*
<div id="parent">
    <div id="child">
    </div>
<div>
*/

// const heading = React.createElement(
//   "div",
//   { id: "parent" },
//   React.createElement("div", { id: "child" }, "I'm in child element")
// );

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);
// *******************************************************

/*
<div id="parent">
    <div id="child">
    <h1>I'm h1 tag</h1>
    </div>
<div>
*/

// const heading = React.createElement(
//   "div",
//   { id: "parent" },
//   React.createElement(
//     "div",
//     { id: "child" },
//     React.createElement("h1", {}, "I'm h1 tag")
//   )
// );

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);

/*
<div id="parent">
    <div id="child">
    <h1>I'm h1 tag</h1>
    <h2>I'm h2 tag</h2>
    </div>
<div>
*/

// const heading = React.createElement(
//   "div",
//   { id: "parent" },
//   React.createElement("div", { id: "child" }, [
//     React.createElement("h1", {}, "I'm h1 tag"),
//     React.createElement("h2", {}, "I'm h2 tag"),
//   ])
// );

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);

/*
<div id="parent">
    <div id="child">
    <h1>I'm h1 tag</h1>
    <h2>I'm h2 tag</h2>
    </div>
    <div id="child2">
    <h3>I'm h1 tag</h3>
    <h4>I'm h2 tag</h4>
    </div>
<div>
*/

// createElement (  element,  { attribute },  things to print or another element to create  )

// import React from "react";
// import ReactDOM from "react-dom/client";
// const heading = React.createElement("div", { id: "parent" }, [
//   React.createElement("div", { id: "child" }, [
//     React.createElement("h1", {}, "I'm in H1 tag"),
//     React.createElement("h2", {}, "I'm in H2 tag"),
//   ]),
//   React.createElement("div", { id: "child2" }, [
//     React.createElement("h1", {}, "I'm in H1 tag"),
//     React.createElement("h2", {}, "I'm in H2 tag"),
//   ]),
// ]);

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);
