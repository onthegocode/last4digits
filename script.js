
const lastDigits = function(str) {
  return +str.match(/\d{4}$/g)[0];
};

console.log(lastDigits('4534534534535'));
