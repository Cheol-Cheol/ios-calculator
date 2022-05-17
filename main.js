// [o] 기본 사칙 연산 구현
// [o] = 기능 구현
// [] +/- 기능 구현
// [] % 기능 구현
// [] . 기능 구현

let left = null,
  oper = null,
  right = null,
  result = null;

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
  render();
};

const render = () => {
  const inpEl = document.querySelector(".inp");
  if (oper === null) {
    inpEl.value = left;
  } else {
    inpEl.value = right;
  }
  if (result !== null) {
    inpEl.value = result;
    left = result;
    oper = null;
    right = null;
    result = null;
  }
};

const inputEqu = () => {
  switch (oper) {
    case "+":
      result = parseInt(left) + parseInt(right);
      break;
    case "-":
      result = parseInt(left) - parseInt(right);
      break;
    case "*":
      result = parseInt(left) * parseInt(right);
      break;
    case "/":
      result = parseInt(left) / parseInt(right);
      break;
  }
  render();
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
