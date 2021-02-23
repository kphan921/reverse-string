function reverseString(str) {
  let reversedString = '';
  for (i = str.length - 1; i >= 0; i--) {
    reversedString += str[i];
  }
  return reversedString;

}

if (require.main === module) {
  console.log(reverseString('hi'))
  console.log("Expecting: 'ih'");
  console.log("=>", reverseString('ih'));

  console.log("");
  console.log(reverseString("catbaby"));
  console.log("Expecting: 'ybabtac'");
  console.log("=>", reverseString('catbaby'));
}

module.exports = reverseString;

// Please add your pseudocode to this file
// create empty string
// iterate str backward
// add the charater at i to the empty string
