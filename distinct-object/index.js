const setDistinctArrayObjectField = (data, field) => {
  return [...new Map(data?.map((item) => [item[field], item])).values()];
};

const setDistinctArrayFullObject = (data) => {
  return [...new Set(data.map(JSON.stringify))].map(JSON.parse);
}

const arr_object = [
  { email: "dat", date: new Date(), price: 50 },
  { email: "dat", date: new Date(), price: 50 },
  { email: "con", date: new Date(), price: 90 },
  { email: "con", date: new Date(), price: 90 },
  { email: "anh", date: new Date(), price: -40 },
  { email: "ban", date: new Date(), price: 75 },
];

console.log(setDistinctArrayObjectField(arr_object, 'email'));