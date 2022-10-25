// # need to have a array of inputs
// # need to have the number which to find
// # need a function itarate the inputs and outputs
// # if return is -1 then its not there
// # if other wise send back the index

const findIndex = (arr, n, niddle) => {
  for (let i = 0; i < n; i++) {
    if (arr[i] === niddle) {
      return i;
    }
  }
  return -1;
};

const inputs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const find = 5;
const length = inputs.length;

const result = findIndex(inputs, length, find);

if (result === -1) {
  console.log("Not found");
} else {
  console.log("Found at index : ", result);
}
