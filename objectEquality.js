const address1 = new Address("Samaru", "Zaria", "1001POB");
const address2 = new Address("Samaru", "Zaria", "1001POB");

console.log(areEqual(address1, address2));
console.log(areSame(address1, address2));

function Address(street, city, zipcode) {
  this.street = street;
  this.city = city;
  this.zipcode = zipcode;
}

// Function to check for equality..

function areEqual(address1, address2) {
  return (
    address1.street === address2.street &&
    address1.city === address2.city &&
    address1.zipcode === address2.zipcode
  );
}

// Function to check for Same...

function areSame(address1, address2) {
  return address1 === address2;
}
