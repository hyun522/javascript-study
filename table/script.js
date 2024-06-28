
// const addBtn = document.getElementById("add");
// const editBtn = document.getElementById("edit");
// const removeBtn = document.getElementById("remove");

let rIndex; // 선택
let table = document.getElementById("table");

// 데이터 추가하기
let tests = [
    {'id': 1, '제목':'해리포터와 마법사의 돌', '가격':'10,000원', '수량':'140'},
    {'id': 2, '제목':'세종대왕의 눈물', '가격':'12,000원', '수량':'160'},
    {'id': 3, '제목':'습관의 힘', '가격':'11,000원', '수량':'240'},
]

for (let i in tests){
    addRow(tests[i])
}
function addRow(obj) {
    let table = document.getElementById('tests-table');
    
    // 줄 추가
    let row = document.createElement('tr');
    row.setAttribute('scope', 'row');
    row.className = `test-row-${obj.id}`;
    
    // 제목 셀 추가
    let titleCell = document.createElement('td');
    titleCell.id = `title-${obj.id}`;
    titleCell.setAttribute('data-testid', obj.id);
    titleCell.textContent = obj.제목;
    row.appendChild(titleCell);
    
    // 가격 셀 추가
    let priceCell = document.createElement('td');
    priceCell.id = `price-${obj.id}`;
    priceCell.setAttribute('data-testid', obj.id);
    priceCell.textContent = obj.가격;
    row.appendChild(priceCell);
    
    // 수량 셀 추가
    let quantityCell = document.createElement('td');
    quantityCell.id = `quantity-${obj.id}`;
    quantityCell.setAttribute('data-testid', obj.id);
    quantityCell.textContent = obj.수량;
    row.appendChild(quantityCell);
    
    // 수정 버튼
    let editCell = document.createElement('td');
    let editButton = document.createElement('button');
    editButton.className = 'btn btn-sm btn-danger';
    editButton.id = `edit-${obj.id}`;
    editButton.setAttribute('data-testid', obj.id);
    editButton.textContent = '수정';
    editCell.appendChild(editButton);
    row.appendChild(editCell);

    // 삭제 버튼
    let deleteCell = document.createElement('td');
    let deleteButton = document.createElement('button');
    deleteButton.className = 'btn btn-sm btn-danger';
    deleteButton.id = `delete-${obj.id}`;
    deleteButton.setAttribute('data-testid', obj.id);
    deleteButton.textContent = '삭제';
    deleteButton.addEventListener('click', deleteTest);
    deleteCell.appendChild(deleteButton);
    row.appendChild(deleteCell);   

    table.appendChild(row);

    // 제목 셀 클릭 수정
    let titleCellId = document.getElementById(`title-${obj.id}`);
    titleCellId.addEventListener('click', editResult)

    // 가격 셀 클릭 수정
    let priceCellId = document.getElementById(`price-${obj.id}`);
    priceCellId.addEventListener('click', editResult)

    // 수량 셀 클릭 수정
    let quantityCellId = document.getElementById(`quantity-${obj.id}`);
    quantityCellId.addEventListener('click', editResult)

    // 수정 버튼으로 내용 수정
    let editBtn = document.getElementById(`edit-${obj.id}`);
    editBtn.addEventListener('click', saveUpdate);
}

// 수정버튼으로 내용 수정
function saveUpdate() { 
    console.log('saved!');

    let testid = this.getAttribute('data-testid');
    let editBtn = document.getElementById(`edit-${testid}`);
    let row = document.querySelector(`.test-row-${testid}`);

    // 인풋 가져오기
    let titleInput = row.querySelector(`#title-${testid}-input`);
    let priceInput = row.querySelector(`#price-${testid}-input`);
    let quantityInput = row.querySelector(`#quantity-${testid}-input`);

    if (titleInput && priceInput && quantityInput) {
        // 셀의 텍스트를 인풋의 값으로 대체
        let titleCell = row.querySelector(`#title-${testid}`);
        let priceCell = row.querySelector(`#price-${testid}`);
        let quantityCell = row.querySelector(`#quantity-${testid}`);

        titleCell.textContent = titleInput.value;
        priceCell.textContent = priceInput.value;
        quantityCell.textContent = quantityInput.value;

        // 클릭 이벤트 다시 추가
        titleCell.addEventListener('click', editResult);
        priceCell.addEventListener('click', editResult);
        quantityCell.addEventListener('click', editResult);

        // 인풋 제거
        titleInput.remove();
        priceInput.remove();
        quantityInput.remove();
    
        editBtn.disabled = true;
        row.style.opacity = '0.5';

        setTimeout(function () {
            row.style.opacity = '1';
        }, 1000);
    }
}

// 삭제 기능
function deleteTest() {
    let testid = this.getAttribute('data-testid');
    let row = document.querySelector(`.test-row-${testid}`);
    row.remove();
}

//줄 수정하기
function editResult() { 
    let testid = this.getAttribute('data-testid');
    let value = this.textContent;

    // 클릭 이벤트 삭제(클릭하면 인풋 태그가 뜨기 때문에)
    this.removeEventListener('click', editResult);

    // 인풋 엘리먼트 추가
    let input = document.createElement('input');
    input.className = 'input form-control';
    input.setAttribute('type', 'text');
    input.setAttribute('data-testid', testid);
    input.id = `${this.id}-input`; // 각 셀의 ID에 '-input'을 추가하여 구분
    input.value = value;

    // 내용대체
    this.innerHTML = ''; 
    this.appendChild(input);

    // 키업 이벤트 인풋에 추가
    input.addEventListener('keyup', function () { 
        let testid = this.getAttribute('data-testid');
        let editBtn = document.getElementById(`edit-${testid}`);
        editBtn.disabled = false;
    })
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

// 빈 인풋 체크
function checkEmptyInput() { 
    let isEmpty = false;
    let title = document.getElementById("title").value;
    let price = document.getElementById("price").value;
    let amount = document.getElementById("amount").value;

    if (title === "") { 
        alert("First Name Connot Be Empty");
        isEmpty = true;
    }else if (price === "") { 
        alert("Last Name Connot Be Empty");
        isEmpty = true;
    }else if (amount === "") { 
        alert("amount Connot Be Empty");
        isEmpty = true;
    }
    return isEmpty;
}

// 줄 추가하기
function addHTMLTableRow() { 
    if (!checkEmptyInput()) { 
        let newRow = table.insertRow(table.length);
        let cell1 = newRow.insertCell(0);
        let cell2 = newRow.insertCell(1);
        let cell3 = newRow.insertCell(2);
        let cell4 = newRow.insertCell(3);
        let cell5 = newRow.insertCell(4);
        
        let title = document.getElementById("title").value;
        let price = document.getElementById("price").value;
        let amount = document.getElementById("amount").value;
        
        document.querySelectorAll("tr input").innerHTML = "";
        cell1.innerHTML = title;
        cell2.innerHTML = price;
        cell3.innerHTML = amount;

    }
}

// addBtn.addEventListener('click', function () { 
//     addHTMLTableRow()
// })

// // 줄 선택하고 인풋창에 보여주기
// function selectedRowToInput() { 
//     for (let i = 1; i < table.rows.length; i++) { 
//         table.rows[i].onclick = function () { 
//             rIndex = this.rowIndex;
//             document.getElementById("title").value = this.cells[0].innerHTML;
//             document.getElementById("price").value = this.cells[1].innerHTML;
//             document.getElementById("amount").value = this.cells[2].innerHTML;
//         }
//     }
// }
// selectedRowToInput();

// 선택한 줄 수정하기
function editHtmlTableSelectedRow() { 
    let title = document.getElementById("title").value;
    let price = document.getElementById("price").value;
    let amount = document.getElementById("amount").value;
    if (!checkEmptyInput()) { 
        table.rows[rIndex].cells[0].innerHTML = title;
        table.rows[rIndex].cells[1].innerHTML = price;
        table.rows[rIndex].cells[2].innerHTML = amount;
    }
}

// editBtn.addEventListener('click', function () { 
//     editHtmlTableSelectedRow()
// })

// 선택한 줄 지우기
function removeSelectedRow() { 
    table.deleteRow(rIndex);
}

// removeBtn.addEventListener('click', function () { 
//     removeSelectedRow()
// })