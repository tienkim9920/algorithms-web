const getFirstName = (name) => {
  let POC = name.split(' ');
  if (POC.length > 0) {
    return POC[0];
  }
}

const getLastName = (name) => {
  const POC = name.split(' ');
  if (POC.length > 1) {
    return POC[1];
  }
}

const isObjectEmpty = (object) => {
  return Object.keys(object).length === 0;
}

const pagination = (arr, pageIndex) => {
  if (arr && arr.length > 0) {
    return arr.slice(pageIndex * LIMIT, (pageIndex + 1) * LIMIT);
  }
  return [];
}