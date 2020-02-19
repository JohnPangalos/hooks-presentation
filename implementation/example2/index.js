const useState = require("./hooks");

const [foo, setFoo] = useState("foo");
console.log(foo);
setFoo("bar");
console.log(foo);
