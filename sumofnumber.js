/** WOD 1 E26: sum of numers puzzles
 * Created by cepugh on 2/5/17.
 */


function sumFor(myList) {
  let count = 0;
  for (let i = 0; i < myList.length; i++) {
    count += myList[i];
  }
  return count;
}

function sumWhile(myList) {
  let count = 0;
  let i = 0;
  while (i < myList.length) {
    count += myList[i];
    i++;
  }
  return count;
}

function sumRecursion(myList) {
  if (myList.length === 1) {
    return myList[0];
  }
  return myList.pop() + sumRecursion(myList);
}

function sumTheSimpleWay(myList) {
  return _.reduce(myList, function count(memo, num) { return memo + num; }, 0);
}

console.log(sumFor([1, 2, 3]));
console.log(sumWhile([1, 2, 3]));
console.log(sumRecursion([1, 2, 3]));
console.log(sumTheSimpleWay([1, 2, 3]));
