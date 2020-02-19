const useState = require("./hooks");

const Counter = () => {
  const [count, setCount] = useState(0);
  return {
    click: () => setCount(count() + 1),
    render: () => console.log(`Count: ${count()}`)
  };
};

const C = Counter();

C.render();
C.click();
C.render();
