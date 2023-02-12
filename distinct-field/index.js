const setDistinctFieldObject = (data, field) => {
  return [...new Set(data?.map((item) => item[field]))];
};

const setDistinctFieldEnum = (data) => {
  return [...new Set(data?.map((item) => item))];
};

const arr_object = [
  { email: "dat", date: new Date(), price: 50 },
  { email: "dat", date: new Date(), price: 50 },
  { email: "con", date: new Date(), price: 90 },
  { email: "con", date: new Date(), price: 90 },
  { email: "anh", date: new Date(), price: -40 },
  { email: "ban", date: new Date(), price: 75 },
];

const arr_enum = [4, 8, 8, 4, -6, 20, -2];

console.log(setDistinctFieldObject(arr_object, 'email'));
console.log(setDistinctFieldEnum(arr_enum));