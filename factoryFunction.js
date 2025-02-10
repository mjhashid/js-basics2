// factory function...

const address = createAddress("Idoji", "Okene", "No28");
console.log(address);

function createAddress(street, city, zipcode) {
  return {
    street,
    city,
    zipcode,
  };
}
