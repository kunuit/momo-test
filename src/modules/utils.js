export const convertDataSuccess = data => {
  const newData = data.reduce((obj, res, index) => {
    return {
      ...obj,
      [res.id]: res,
    };
  }, {});

  return newData;
};
