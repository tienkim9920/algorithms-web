//format date "dd/MM/yyyy" | "MM/dd/yyyy" | "yyyy/MM/dd" | "dd-MM-yyyy" | 'MM-dd-yyyy' | 'yyyy-MM-dd'
export const formatDate = (date, format) => {
  let separate = "/";
  let sliceStr = format.split("/");
  if (sliceStr.length < 3) {
    sliceStr = format.split("-");
    separate = "-";

    if (sliceStr.length < 3) {
      sliceStr = format.split(".");
      separate = ".";
    }
  }
  let dateFormat = "";
  sliceStr.forEach((item, index) => {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    if (item.toLowerCase() === "dd") {
      dateFormat += `${day < 10 ? `0${day}` : day}${
        index === sliceStr.length - 1 ? "" : separate
      }`;
    } else if (item.toLowerCase() === "mm") {
      dateFormat += `${month < 10 ? `0${month}` : month}${
        index === sliceStr.length - 1 ? "" : separate
      }`;
    } else {
      dateFormat += `${year}${index === sliceStr.length - 1 ? "" : separate}`;
    }
  });
  return dateFormat;
};

//Count total day
export const getTotalDay = (startDate, endDate) => {
  const calcTime = new Date(startDate).getTime() - new Date(endDate).getTime();
  return Math.round(calcTime / (1000 * 3600 * 24));
};

//format size file
const units = ["bytes", "kb", "mb", "gb", "tb", "pb", "eb", "zb", "yb"];
export const formatFileSize = (x) => {
  let l = 0,
    n = parseInt(x, 10) || 0;
  while (n >= 1024 && ++l) {
    n = n / 1024;
  }
  return {
    numberSize: n.toFixed(n < 10 && l > 0 ? 1 : 0),
    units: units[l],
  };
};

// query-string
export const formatQuery = (dataQuery) => {
  let query = "?";
  Object.keys(dataQuery).forEach((key, index) => {
    if (index === Object.keys(dataQuery).length - 1) {
      query += `${key}=${dataQuery[key]}`;
    } else {
      query += `${key}=${dataQuery[key]}&`;
    }
  });
  return query;
};
