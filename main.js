let left = null,
  oper = null,
  right = null;

// 숫자 입력
const inputNum = (num) => {
  const clearEl = document.querySelector(".clear");
  clearEl.textContent = "C";

  if (oper === null) {
    if (left === null) {
      left = `${num}`;
    } else left += num;
  } else {
    if (right === null) {
      right = `${num}`;
    } else right += num;
  }
  console.log("left:", left);
  console.log("right:", right);
  render();
};

const render = () => {
  const inpEl = document.querySelector(".inp");
  if (oper === null) {
    inpEl.value = left;
  } else {
    inpEl.value = right;
  }
};

const inputOper = (op) => {
  oper = op;
};

// 초기화 버튼
const clearBtn = () => {
  const clearEl = document.querySelector(".clear");
  const inpEl = document.querySelector(".inp");

  clearEl.textContent = "AC";
  inpEl.value = "";
  (left = null), (oper = null), (right = null);
};
