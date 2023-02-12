//check validate email
const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

// check validate number
const validateNumber = (number) => {
  return String(number).toLowerCase().match(/^\d+$/);
};

// check validate http
const isValidHttpUrl = (string) => {
  let url;
  try {
    url = new URL(string);
  } catch (_) {
    return false;
  }
  return url.protocol === "http:" || url.protocol === "https:";
};

// check validate field empty
const handleIsValid = (personal) => {
  let flag = false;
  Object.keys(personal).map((key) => {
    if (!personal[key]) {
      flag = true;
    }
  })
  return flag;
}