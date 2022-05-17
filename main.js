let left = null,
  oper = null,
  right = null;

const inputNum = (num) => {
  const clearEl = document.querySelector(".clear");
  clearEl.textContent = "C";
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

const inputOper = (op) => {};

const clearBtn = () => {
  const clearEl = document.querySelector(".clear");
  const inpEl = document.querySelector(".inp");

  clearEl.textContent = "AC";
  inpEl.value = "";
  (left = null), (oper = null), (right = null);
};
