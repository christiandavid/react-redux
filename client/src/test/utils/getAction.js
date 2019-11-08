const findAction = (store, type) =>
  store.getActions().find(action => action.type === type);

const getAction = (store, type) => {
  let action = findAction(store, type);
  if (action) return Promise.resolve(action);

  return new Promise(resolve => {
    store.subscribe(() => {
      action = findAction(store, type);
      if (action) resolve(action);
    });
  });
};

export default getAction;
