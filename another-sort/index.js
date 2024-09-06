export const sortValueDownToUpByField = (arr, field, value) => {
  arr.forEach((item, i) => {
    if (item[field] === value) {
      arr.splice(i, 1);
      arr.unshift(item);
    }
  });
  return arr;
};

export const sortValueDownToUpByList = (arr, field, value) => {
  const vn30List = [];
  const othersList = [];

  arr.forEach(item => {
    if (item[field] === value) {
      vn30List.push(item);
    } else {
      othersList.push(item);
    }
  });
  return [...vn30List, ...othersList];
};