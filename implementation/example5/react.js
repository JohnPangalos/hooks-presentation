module.exports = (() => {
  let hooks = [],
    currentHook = 0;
  return {
    render: Component => {
      const Comp = Component();
      // Component must have a render function just like react
      Comp.render();
      currentHook = 0;
      return Comp;
    },

    useState: initialValue => {
      hooks[currentHook] = hooks[currentHook] || initialValue;
      const setStateHookIndex = currentHook;
      const setState = newState => (hooks[setStateHookIndex] = newState);
      return [hooks[currentHook++], setState];
    },

    useEffect: (callback, depArray) => {
      const hasNoDeps = !depArray;
      const deps = hooks[currentHook];
      const hasChangedDeps = deps
        ? !depArray.every((el, i) => el === deps[i])
        : true;
      if (hasNoDeps || hasChangedDeps) {
        callback();
        hooks[currentHook] = depArray;
      }
      currentHook++
    }
  };
})();
