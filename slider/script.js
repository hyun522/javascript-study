const left = document.querySelector(".left");
const right = document.querySelector(".right");

const btn1 = document.querySelector(".btn-01");
const btn2 = document.querySelector(".btn-02");
const btn3 = document.querySelector(".btn-03");

const images = document.querySelector('.images');
const image = document.querySelectorAll('.images .image');

let imageCount = image.length;
let curPos = 0; // 현재 보여주는 이미지의 인덱스 번호 0, 1, 2
let position = 0; // 이미지 태그의 위치 값 지정할 변수
let IMAGE_WIDTH = 640; // 이미지 사이즈

images.style.width = (IMAGE_WIDTH * imageCount) + 'px'; 

function init() { 
    left.setAttribute('disabled', 'true');
    btn2.setAttribute('disabled', 'true');
    btn3.setAttribute('disabled', 'true');
}

init();

function moveImages(num) { 
    images.style.left = (-num * IMAGE_WIDTH) + 'px';
    curPos = num;
}

right.addEventListener('click', function () { 
    if (curPos < imageCount - 1) { 
        moveImages(curPos + 1);
    }
        
})

// function next() { 
//     if (curPos < 2) { 
//         left.removeAttribute('disabled');
//         position -= IMAGE_WIDTH;
//         images.style.transform = `translateX(${position}px)`
//         if (curPos === 0) { 
//             btn1.setAttribute('disabled', 'true');
//             btn2.removeAttribute('disabled')
//         }        
//         if (curPos === 1) { 
//             btn2.setAttribute('disabled', 'true');
//             btn3.removeAttribute('disabled');
//             right.setAttribute('disabled', 'true');
//         }
//         curPos++;
//     }
// }

// function prev() { 
//     if (curPos > 0) { 
//         right.removeAttribute('disabled');
//         position += IMAGE_WIDTH;
//         images.style.transform = `translateX(${position}px)`
//         curPos--;
//         if (curPos === 1) { 
//             btn3.setAttribute('disabled', 'true');
//             btn2.removeAttribute('disabled')
//         }        
//         if (curPos === 0) { 
//             btn2.setAttribute('disabled', 'true');
//             btn1.removeAttribute('disabled');
//             left.setAttribute('disabled', 'true');
//         }
//     }
// }



// right.addEventListener('click', next);
// left.addEventListener('click', prev);
// btn1.addEventListener('click', function () { 
//     images.style.transform = `translateX(0px)`
// });
// btn2.addEventListener('click', function () { 
//     images.style.transform = `translateX(-640px)`
// });
// btn3.addEventListener('click', function () { 
//     images.style.transform = `translateX(-1280px)`
// });