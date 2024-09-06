export const getFloatToFixed = (number) => {
  let formattedNumber = String(Number(number).toFixed(2));

  if (formattedNumber.endsWith("0")) {
    formattedNumber = Number(number).toFixed(1);
  } else {
    formattedNumber = Number(formattedNumber);
  }
  return formattedNumber;
}

export const getDecimalToFixed = (number) => {
  let formattedNumber = String(Number(number).toFixed(2));

  if (formattedNumber.endsWith("0")) return 1;
  else return 2;
}