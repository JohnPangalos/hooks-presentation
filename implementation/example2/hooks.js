module.exports = initialValue => {
  var _val = initialValue;

  const setState = newVal => {
    _val = newVal;
  };

  return [_val, setState];
};
