export default (actionType, ...argNames) => (...args) => {
  const action = { type: actionType };
  args.forEach((arg, index) => { action[argNames[index]] = arg; });
  return action;
};
