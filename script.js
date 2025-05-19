cy.on("window:alert", str => {
  expect(Number(str)).to.equal(byteSizeValue);
});




function byteSize(str) {
  return new Blob([str]).size;
}

const input = prompt("Enter a string:");
const result = byteSize(input);
alert(result);
