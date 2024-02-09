function ordenar(array) {
  return [...array].sort((a, b) => a - b);
}
// const nums = Object.freeze([3, 1, 7, 9, 4, 6]);
const nums = [3, 1, 7, 9, 4, 6];
const numeroOrdenados = ordenar(nums);
const parteNums = nums.slice(1);
console.log(nums, numeroOrdenados);
console.log(parteNums);
