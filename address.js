let address = {
  street: "Idoji",
  city: "Okene",
  zipcode: "No 24f",
};

function showAddress(address) {
  for (let key in address) console.log(key, address[key]);
}

showAddress(address);
