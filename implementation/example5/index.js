const React = require("./react");

const Counter = () => {
  const [count, setCount] = React.useState(0);
  const [text, setText] = React.useState("foo");

  React.useEffect(() => {
    console.log("Effect count: ", count);
    console.log("Effect text: ", text);
  }, [count, text]);

  return {
    click: () => setCount(count + 1),
    type: txt => setText(txt),
    noop: () => setCount(count),
    render: () => console.log(`Count: ${count}, Text: ${text}`)
  };
};

let App;

App = React.render(Counter);

App.click();
App = React.render(Counter);

App.type("bar");
App = React.render(Counter);

App.noop();
App = React.render(Counter);

App.click();
App = React.render(Counter);
