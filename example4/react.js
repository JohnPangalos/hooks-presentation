module.exports = (() => {
  let _val, _deps;
  return {
    render: Component => {
      const Comp = Component();
      // Component must have a render function just like react
      Comp.render();
      return Comp;
    },

    useState: initialValue => {
      _val = _val || initialValue;
      const setState = newVal => {
        _val = newVal;
      };
      return [_val, setState];
    },

    useEffect: (callback, depArray) => {
      const hasNoDeps = !depArray;
      const hasChangedDeps = _deps
        ? !depArray.every((el, i) => el === _deps[i])
        : true;
      if (hasNoDeps || hasChangedDeps) {
        callback();
        _deps = depArray;
      }
    }
  };
})();
