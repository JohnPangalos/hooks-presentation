const React = require("./react");

const Counter = () => {
  const [count, setCount] = React.useState(0);
  React.useEffect(() => {
    console.log('Effect count: ', count)
  }, [count])
  return {
    click: () => setCount(count + 1),
    noop: () => setCount(count),
    render: () => console.log(`Count: ${count}`)
  };
};

let App

App = React.render(Counter)

App.click()
App = React.render(Counter)

App.noop()
App = React.render(Counter)

App.click()
App = React.render(Counter)
