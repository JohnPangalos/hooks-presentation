module.exports = initialValue => {
  let _val = initialValue;
  const state = () => {
    return _val;
  };

  const setState = newVal => {
    _val = newVal;
  };

  return [state, setState];
};
