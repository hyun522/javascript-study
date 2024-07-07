// 데이터 추가하기
let newResult = { id: "null", 제목: "null", 가격: "null", 수량: "null" };

let addBtn = document.getElementById("add-btn");
let addResult = document.getElementById("add-result");
let inputTitle = document.getElementById("title");
let inputPrice = document.getElementById("price");
let inputAmount = document.getElementById("amount");

function priceInputFunktion(event) {
  // 소수점 두 번째 자리까지 입력 허용
  let value = this.value; //입력 필드의 현재 값을 변수 value에 저장합니다.
  value = value.replace(/\./g, ",").replace(/[^0-9,]/g, ""); // 점을 콤마로 변환, 숫자와 콤마(,)만 허용
  let parts = value.split(","); // 점을 기준으로 두개로 나눔 ['12','34]

  if (parts.length > 2) {
    // parts배열의 길이가 2보다 크다면
    value = parts[0] + "," + parts.slice(1).join(""); // 두 개 이상의 점(.)이 입력되는 경우 첫 번째 점(.)만 유지
  }

  this.value = value; // 수정된 값을 다시 입력 필드에 할당
  validateInputs(); // 유효성 검사
}

function amountInputFunktion(event) {
  // 소수점 두 번째 자리까지 입력 허용
  let value = this.value; //입력 필드의 현재 값을 변수 value에 저장합니다.
  value = value.replace(/[^0-9]/g, ""); // 숫자만 허용

  this.value = value; // 수정된 값을 다시 입력 필드에 할당
  validateInputs(); // 유효성 검사
}

function validateInputs() {
  // 유효성 검사 함수
  let title = inputTitle.value;
  let price = inputPrice.value;
  let amount = inputAmount.value;

  let priceValue = parseFloat(price.replace(/,/g, "."));
  let amountValue = parseFloat(amount);

  let isValid = true; // 유효성 검사 초기화

  // 입력 필드가 비어 있는지 확인
  if (title === "" || price === "" || amount === "" || isNaN(priceValue) || isNaN(amountValue)) {
    isValid = false;
  }

  // 테두리 제거
  inputTitle.style.borderColor = "";
  inputPrice.style.borderColor = "";
  inputAmount.style.borderColor = "";

  return isValid; // 유효성 검사 반환
}

// 추가 버튼 클릭 시 처리
addBtn.addEventListener("click", function () {
  // 유효성 검사 실행
  let isValid = validateInputs();

  if (isValid) {
    let newId = tests.length ? tests[tests.length - 1].id + 1 : 1;

    // 새로운 데이터 객체 생성
    let newObj = {
      id: newId,
      제목: inputTitle.value,
      가격: inputPrice.value,
      수량: inputAmount.value,
    };

    // 배열에 추가하기
    tests.push(newObj);

    // 테이블에 추가 (추가 함수가 없으므로 구현 필요)
    addRow(newObj);

    // 입력 필드 초기화
    inputTitle.value = "";
    inputPrice.value = "";
    inputAmount.value = "";
  } else {
    // 유효성 검사 실패 시 알림
    alert("모든 필드를 입력하세요.");

    // 비어 있는 인풋 필드에 테두리를 표시
    if (!inputTitle.value) {
      inputTitle.style.borderColor = "red";
    }
    if (!inputPrice.value || isNaN(parseFloat(inputPrice.value.replace(/,/g, ".")))) {
      inputPrice.style.borderColor = "red";
    }
    if (!inputAmount.value || isNaN(parseFloat(inputAmount.value))) {
      inputAmount.style.borderColor = "red";
    }
  }
});

// 인풋 필드 입력 시 테두리 초기화
inputTitle.addEventListener("input", function () {
  inputTitle.style.borderColor = "";
});
inputPrice.addEventListener("input", function () {
  inputPrice.style.borderColor = "";
});
inputAmount.addEventListener("input", function () {
  inputAmount.style.borderColor = "";
});

// 가격 입력 필드에 대한 이벤트 리스너 등록
inputPrice.addEventListener("input", priceInputFunktion);
// 수량 입력 필드에 대한 이벤트 리스너 등록
inputAmount.addEventListener("input", amountInputFunktion);

let rIndex; // 선택
let table = document.getElementById("table");

let tests = [
  { id: 1, 제목: "해리포터와 마법사의 돌", 가격: "10,000", 수량: "140" },
  { id: 2, 제목: "세종대왕의 눈물", 가격: "12,000", 수량: "160" },
  { id: 3, 제목: "습관의 힘", 가격: "11,000", 수량: "240" },
];

for (let i in tests) {
  addRow(tests[i]);
}
function addRow(obj) {
  let table = document.getElementById("tests-table");

  // 줄 추가
  let row = document.createElement("tr");
  row.setAttribute("scope", "row");
  row.className = `test-row-${obj.id}`;

  // 제목 셀 추가
  let titleCell = document.createElement("td");
  titleCell.id = `title-${obj.id}`;
  titleCell.setAttribute("data-testid", obj.id);
  titleCell.textContent = obj.제목;
  row.appendChild(titleCell);

  // 가격 셀 추가
  let priceCell = document.createElement("td");
  priceCell.id = `price-${obj.id}`;
  priceCell.setAttribute("data-testid", obj.id);
  priceCell.textContent = obj.가격;
  row.appendChild(priceCell);

  // 수량 셀 추가
  let amountCell = document.createElement("td");
  amountCell.id = `amount-${obj.id}`;
  amountCell.setAttribute("data-testid", obj.id);
  amountCell.textContent = obj.수량;
  row.appendChild(amountCell);

  // 수정 버튼
  let editCell = document.createElement("td");
  let editButton = document.createElement("button");
  editButton.className = "btn btn-sm btn-success";
  editButton.id = `edit-${obj.id}`;
  editButton.setAttribute("data-testid", obj.id);
  editButton.textContent = "수정";
  editCell.appendChild(editButton);
  row.appendChild(editCell);

  // 삭제 버튼
  let deleteCell = document.createElement("td");
  let deleteButton = document.createElement("button");
  deleteButton.className = "btn btn-sm btn-danger";
  deleteButton.id = `delete-${obj.id}`;
  deleteButton.setAttribute("data-testid", obj.id);
  deleteButton.textContent = "삭제";
  deleteButton.addEventListener("click", deleteTest);
  deleteCell.appendChild(deleteButton);
  row.appendChild(deleteCell);

  table.appendChild(row);

  // 제목 셀 클릭 수정
  let titleCellId = document.getElementById(`title-${obj.id}`);
  titleCellId.addEventListener("click", editResult);

  // 가격 셀 클릭 수정
  let priceCellId = document.getElementById(`price-${obj.id}`);
  priceCellId.addEventListener("click", editResult);

  // 수량 셀 클릭 수정
  let amountCellId = document.getElementById(`amount-${obj.id}`);
  amountCellId.addEventListener("click", editResult);

  // 수정 버튼으로 내용 수정
  document.addEventListener("DOMContentLoaded", function () {
    let editBtn = document.getElementById(`edit-${obj.id}`);
    if (!editBtn) {
      console.error(`Element with id 'edit-${obj.id}' not found.`);
      return;
    }

    editBtn.addEventListener("click", function () {
      let titleInputValue = document.getElementById(`title-${obj.id}-input`);
      let priceInputValue = document.getElementById(`price-${obj.id}-input`);
      let amountInputValue = document.getElementById(`amount-${obj.id}-input`);

      // 요소가 정상적으로 찾아졌는지 확인
      if (!titleInputValue) {
        console.error(`Element with id 'title-${obj.id}-input' not found.`);
        return;
      }
      if (!priceInputValue) {
        console.error(`Element with id 'price-${obj.id}-input' not found.`);
        return;
      }
      if (!amountInputValue) {
        console.error(`Element with id 'amount-${obj.id}-input' not found.`);
        return;
      }

      // 입력값이 비어있는지 확인
      if (titleInputValue.value.trim() === "" || priceInputValue.value.trim() === "" || amountInputValue.value.trim() === "") {
        // 인풋에 공백이 있을 경우
        alert("내용을 입력하세요.");
        // 비어 있는 인풋 필드에 테두리를 표시
        if (titleInputValue.value.trim() === "") {
          titleInputValue.style.borderColor = "red";
        }
        if (priceInputValue.value.trim() === "") {
          priceInputValue.style.borderColor = "red";
        }
        if (amountInputValue.value.trim() === "") {
          amountInputValue.style.borderColor = "red";
        }

        // 인풋 필드 입력 시 테두리 초기화
        titleInputValue.addEventListener("input", function () {
          titleInputValue.style.borderColor = "";
        });
        priceInputValue.addEventListener("input", function () {
          priceInputValue.style.borderColor = "";
        });
        amountInputValue.addEventListener("input", function () {
          amountInputValue.style.borderColor = "";
        });

        return;
      }

      saveUpdate.call(this);
    });
  });
}

// 수정버튼으로 내용 수정 function
function saveUpdate() {
  console.log("saved!");

  let testid = this.getAttribute("data-testid");
  let editBtn = document.getElementById(`edit-${testid}`);
  let row = document.querySelector(`.test-row-${testid}`);

  // 인풋 가져오기
  let titleInput = row.querySelector(`#title-${testid}-input`);
  let priceInput = row.querySelector(`#price-${testid}-input`);
  let amountInput = row.querySelector(`#amount-${testid}-input`);

  if (titleInput) {
    // 셀의 텍스트를 인풋의 값으로 대체
    let titleCell = row.querySelector(`#title-${testid}`);
    titleCell.textContent = titleInput.value;
    titleInput.remove();
    titleCell.addEventListener("click", editResult);
  }
  if (priceInput) {
    let priceCell = row.querySelector(`#price-${testid}`);
    priceCell.textContent = priceInput.value;
    priceInput.remove();
    priceCell.addEventListener("click", editResult);
  }
  if (amountInput) {
    let amountCell = row.querySelector(`#amount-${testid}`);
    amountCell.textContent = amountInput.value;
    amountInput.remove();
    amountCell.addEventListener("click", editResult);
  }

  editBtn.disabled = true;
  row.style.opacity = "0.5";

  setTimeout(function () {
    row.style.opacity = "1";
  }, 300);
}

// 삭제 기능
function deleteTest() {
  let testid = this.getAttribute("data-testid");
  let row = document.querySelector(`.test-row-${testid}`);
  row.remove();
}

//줄 수정하기
function editResult() {
  let testid = this.getAttribute("data-testid");
  let value = this.textContent.trim();

  // 클릭 이벤트 삭제(클릭하면 인풋 태그가 뜨기 때문에)
  this.removeEventListener("click", editResult);

  // 인풋 엘리먼트 추가
  let input = document.createElement("input");
  input.className = "input form-control";
  input.setAttribute("type", "text");
  input.setAttribute("data-testid", testid);
  input.id = `${this.id}-input`; // 각 셀의 ID에 '-input'을 추가하여 구분
  input.value = value;

  // 내용대체
  this.innerHTML = "";
  this.appendChild(input);

  // 입력 이벤트 핸들러 추가
  input.addEventListener("input", function () {
    let testid = this.getAttribute("data-testid");
    let editBtn = document.getElementById(`edit-${testid}`);
    let inputId = this.id; // 입력 필드의 id 속성 가져오기
    let value = this.value.trim(); // 입력 필드의 값(value)를 가져와서 공백을 제거한 후 변수에 할당

    // 가격과 수량 입력 필드에 숫자만 입력할 수 있도록 제한
    if (inputId === `price-${testid}-input`) {
      value = value.replace(/\./g, ",").replace(/[^0-9,]/g, ""); // 점을 콤마로 변환, 숫자와 콤마(,)만 허용
      let parts = value.split(","); // 점을 기준으로 나누기
      if (parts.length > 2) {
        value = parts[0] + "," + parts.slice(1).join(""); // 두 개 이상의 점(.)이 입력되는 경우 첫 번째 점(.)만 유지
      }
    } else if (inputId === `amount-${testid}-input`) {
      // 수량 입력 필드인 경우
      value = value.replace(/[^0-9]/g, ""); // 숫자만 허용
    }
    // 입력 필드에 수정된 값(value) 적용
    this.value = value;

    // 가격 필드와 수량 필드에서만 유효성 검사
    if (inputId === `price-${testid}-input` || inputId === `amount-{testid}-input`) {
      // 문자가 포함되어있는지 검사
      if (/\D/.test(value) && input === `price-${testid}-input`) {
        // 가격 필드에서만 검사
        this.value = value.replace(/[^\d,]/g, ""); // 숫자와 쉼표 이외의 문자는 제거
      }
    }

    // Edit 버튼 활성화
    editBtn.disabled = false;

    // 포커스 설정
    input.focus();
  });
}

// 검색하기
// const searchInput = document.getElementById("search");
// const rows = document.querySelectorAll("tbody tr")
// searchInput.addEventListener('keyup', function (event) {
//     const q = event.target.value.toLowerCase();
//     rows.forEach((row) => {
//         row.querySelector('td').textContent.toLowerCase().startsWith(q) ? (row.style.display = '') : (row.style.display = 'none')
//     })
// })
