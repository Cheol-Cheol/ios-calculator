let left = null,
  oper = null,
  right = null;

const inputNum = (num) => {
  const inpEl = document.querySelector(".inp");
  if (oper === null) {
    if (left === null) {
      left = `${num}`;
    } else left += num;
    inpEl.value = left;
  } else {
    if (right === null) {
      right = `${num}`;
    } else right += num;
    inpEl.value = right;
  }
  console.log("left:", left);
  console.log("right:", right);
};
