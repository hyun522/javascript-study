document.addEventListener('DOMContentLoaded', function () {
    let inputElement01 = document.querySelector('input[name="numberInput01"]');
    let inputElement02 = document.querySelector('input[name="numberInput02"]');
    let inputElement03 = document.querySelector('input[name="numberInput03"]');
    
    function inputFunktion(event) {
        // 소수점 두 번째 자리까지 입력 허용
        let value = this.value;
        value = value.replace(/[^0-9.]/g, ''); // 숫자와 점(.)만 허용
        let parts = value.split('.');
        
        if (parts.length > 2) {
            value = parts[0] + '.' + parts.slice(1).join(''); // 두 개 이상의 점(.)이 입력되는 경우 첫 번째 점(.)만 유지
        }

        if (parts[1] && parts[1].length > 2) {
            value = parts[0] + '.' + parts[1].substring(0, 2); // 소수점 두 번째 자리까지만 유지
        }

        this.value = value;
    }

    function validateInputs() {
        let value1 = parseFloat(inputElement01.value);
        let value2 = parseFloat(inputElement02.value);
        let value3 = parseFloat(inputElement03.value);
        let isValid = true;

        if (!isNaN(value1) && !isNaN(value2) && value2 >= value1) {
            alert('두 번째 숫자는 첫 번째 숫자보다 작아야 합니다.');
            isValid = false;
        }

        if (!isNaN(value2) && !isNaN(value3) && value3 >= value2) {
            alert('세 번째 숫자는 두 번째 숫자보다 작아야 합니다.');
            isValid = false;
        }

        return isValid;
    }

    document.getElementById('myForm').addEventListener('submit', function (event) {
        let value1 = parseFloat(inputElement01.value);
        let value2 = parseFloat(inputElement02.value);
        let value3 = parseFloat(inputElement03.value);
        let isValid = true;

        if (isNaN(value1) || isNaN(value2) || isNaN(value3)) {
            isValid = false;
        }

        if (value2 >= value1 || value3 >= value2) {
            isValid = false;
        }

        if (!isValid) {
            alert('유효한 숫자를 입력하세요. 두 번째 숫자는 첫 번째 숫자보다 작아야 하며, 세 번째 숫자는 두 번째 숫자보다 작아야 합니다.');
            event.preventDefault(); // 폼 제출 중지
        }
    });

    inputElement01.addEventListener('change', validateInputs);
    inputElement02.addEventListener('change', validateInputs);
    inputElement03.addEventListener('change', validateInputs);

    inputElement01.addEventListener('input', inputFunktion);
    inputElement02.addEventListener('input', inputFunktion);
    inputElement03.addEventListener('input', inputFunktion);
});
