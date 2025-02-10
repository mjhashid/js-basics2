// Constructor Function...

const address = new Address("Samaru", "Zaria", "1001POB");
console.log(address);

function Address(street, city, zipcode) {
  this.street = street;
  this.city = city;
  this.zipcode = zipcode;
}
