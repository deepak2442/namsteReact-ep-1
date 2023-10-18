// const heading= React.createElement("h1",{id":"title"},"Namaste Everyone from React!");
const root= ReactDOM.createRoot(document.getElementById("root"));
const h1= React.createElement("h1",{},"Heading One!");
const h2= React.createElement("h2",{},"Heading two!");
const container= React.createElement("div",{id:"container"},[h1,h2])
root.render(container);