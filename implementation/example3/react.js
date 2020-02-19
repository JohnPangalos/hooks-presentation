module.exports = (() => {
  let _val;
  return {
    render: Component => {
      const Comp = Component();
      // Component must have a render function just like react
      Comp.render();
      return Comp;
    },
    useState(initialValue) {
      _val = _val || initialValue;
      const setState = newVal => {
        _val = newVal;
      };
      return [_val, setState];
    }
  };
})()
