const React = require("./react");

const Counter = () => {
  const [count, setCount] = React.useState(0);
  return {
    click: () => setCount(count + 1),
    render: () => console.log(`Count: ${count}`)
  };
};

let App;

App = React.render(Counter);
App.click();
App = React.render(Counter);
