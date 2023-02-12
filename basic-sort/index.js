const OPERATOR = {
  email: (a) => a?.toUpperCase(),
  date: (a) => new Date(a),
  price: parseInt,
};

// sort array object
const sort_by = (field, reverse, primer) => {
  const key = primer
    ? function (x) {
        return primer(x[field]);
      }
    : function (x) {
        return x[field];
      };
  reverse = !reverse ? 1 : -1;
  return function (a, b) {
    return (a = key(a)), (b = key(b)), reverse * ((a > b) - (b > a));
  };
};

const arr = [
    { email: "tienkim@gmail.com", date: new Date(), price: 50, },
    { email: "tienkim@gmail.com", date: new Date(), price: 90, },
    { email: "tienkim@gmail.com", date: new Date(), price: 40, },
    { email: "tienkim@gmail.com", date: new Date(), price: 75, },
];

console.log([...arr].sort(sort_by('price', false, OPERATOR['price'])));