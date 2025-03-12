const byteSize = (str) => {
  return new Blob([str]).size;
};

// Do not change the code below
const str = prompt("Enter some string.");
alert(String(byteSize(str))); // Convert output to a string
