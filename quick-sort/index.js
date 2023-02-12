function quickSort_enum(arr) {
  if (arr.length < 2) return arr;
  let pivot = arr[arr.length - 1];
  let left = [];
  let right = [];
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return [...quickSort_enum(left), pivot, ...quickSort_enum(right)];
}

function quickSort_object(arr, field) {
  if (arr.length < 2) return arr;
  let pivot = arr[arr.length - 1];
  let left = [];
  let right = [];
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i][field] < pivot[field]) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return [...quickSort_object(left), pivot, ...quickSort_object(right)];
}

const arr_enum = [4, 8, -6, 20, -2];

const arr_object = [
  { email: "dat", date: new Date(), price: 50 },
  { email: "con", date: new Date(), price: 90 },
  { email: "anh", date: new Date(), price: -40 },
  { email: "ban", date: new Date(), price: 75 },
];

console.log(quickSort_enum(arr_enum)); // [-6, -2, 4, 8, 20]
console.log(quickSort_object(arr_object, 'email'));
