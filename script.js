cy.on("window:alert", str => {
  expect(Number(str)).to.equal(byteSizeValue);
});




const byteSize = (str) => {
  return new Blob([str]).size;
};

// Do not change the code below
const str = prompt("Enter some string.");
alert(String(byteSize(str))); 
