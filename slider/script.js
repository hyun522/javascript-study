const leftBtn = document.querySelector('.left');
const rightBtn = document.querySelector('.right');
const images = document.querySelectorAll('.images .image');
const imagesWrap = document.querySelector('.images');
const imgContainer = document.querySelector('.img-container');
const pager = document.querySelector('.pager-container');

let slideCount = images.length;
let imgWidth = 640;
let curIdx = 0;
let timer = undefined;
let pagerHTML = '';

// 슬라이드 가로로 만들기 + 페이저 자동 생성
for (let i = 0; i < slideCount; i++) {     
    images[i].style.left = (imgWidth * i) + 'px';
    pagerHTML += `<span class="pager-${i+1} pager" data-idx="${i}">${i+1}</span>`;
    pager.innerHTML = pagerHTML;
}
const pagerBtn = document.querySelectorAll('.pager-container span');

// pager로 슬라이드 이동하기
for (let k = 0; k < pagerBtn.length; k++) {
    pagerBtn[k].addEventListener('click', function (e) { 
        let pagerNum = e.target.getAttribute('data-idx');        
        goToSlide(pagerNum);
    })
}


// 슬라이드 이동 함수
function goToSlide(idx) { 
    imagesWrap.style.left = (-imgWidth * idx) + 'px';
    curIdx = idx;

    // pager 클릭한 요소에 active 추가
    for (let l = 0; l < pagerBtn.length; l++) { 
        pagerBtn[l].classList.remove('active');
    }
    pagerBtn[idx].classList.add('active');
}

goToSlide(0); // 처음에 0번째를 보여줘

// 버튼 클릭하면 슬라이드 이동
rightBtn.addEventListener('click', function () { 
    if (curIdx < slideCount - 1) {
        goToSlide(curIdx + 1);
    } else { 
        goToSlide(0)
    }
})

leftBtn.addEventListener('click', function () { 
    if (curIdx > 0) {
        goToSlide(curIdx - 1);
    } else { 
        goToSlide(slideCount - 1)
    }
})


// 오토 슬라이드
function autoSlide() { 
    timer = setInterval(function () {
        //let nexIdx = (curIdx + 1) % slideCount 
        let nextIdx = curIdx + 1;
        if (nextIdx < slideCount) {
            goToSlide(nextIdx)
        } else {
            goToSlide(0)
        }
    }, 2000);
}
autoSlide()

// 마우스오버 시 멈춤
imagesWrap.addEventListener('mouseenter', function () { 
    clearInterval(timer);
});
imagesWrap.addEventListener('mouseleave', function () { 
    autoSlide();
})



/*
const left = document.querySelector(".left");
const right = document.querySelector(".right");

const pager1 = document.querySelector(".pager-01");
const pager2 = document.querySelector(".pager-02");
const pager3 = document.querySelector(".pager-03");
let pagerCont = document.querySelector(".pager-container");
// const pagers = document.querySelectorAll(".pager")
let pagersHtml = '';

const images = document.querySelector('.images');
const image = document.querySelectorAll('.images .image');
const imgContainer = document.querySelector('.img-container');

let imageCount = image.length; // 이미지의 길이 3
let curPos = 0; // 현재 보여주는 이미지의 인덱스 번호 0, 1, 2
let position = 0; // 이미지 태그의 위치 값 지정할 변수
let IMAGE_WIDTH = 640; // 이미지 사이즈
let timer = undefined; // 이름만 있고 아직 지정안됨

images.style.width = (IMAGE_WIDTH * imageCount) + 'px'; 

// 슬라이드가 있으면 가로로 배열하기
for (let a = 0; a < imageCount; a++) { 
    image[a].style.left = a * 100 + '%';

    // 슬라이드가 늘어도 자동으로 pager 생성
    pagersHtml += `<span class="pager-0${a+1} pager" data-idx="${a}">${a+1}</span>`;
    pagerCont.innerHTML = pagersHtml;
}

let pagers = document.querySelectorAll(".pager");

// 슬라이드 이동 함수
function moveImages(num) { 
    images.style.left = (-num * IMAGE_WIDTH) + 'px';
    curPos = num;

     //클릭된 요소에 active 추가
    for (let j = 0; j < pagers.length; j++) { 
        pagers[j].classList.remove('active');
    }
    pagers[num].classList.add('active');
}

moveImages(0);

right.addEventListener('click', function () { 
    if (curPos < imageCount - 1) { 
        moveImages(curPos + 1);
    } else { 
        moveImages(0);
    }        
})

left.addEventListener('click', function () { 
    if (curPos > 0) {
        moveImages(curPos - 1);
    } else { 
        moveImages(imageCount - 1);
    }
})

// 자동슬라이드
function autoSlide() { 
    timer = setInterval(function () { 
        let nextPos = (curPos + 1) % imageCount;
        moveImages(nextPos);
    }, 3000);
}

autoSlide();

// img-container에 마우스가 들어왔을때 멈추기, 나갔을때 다시 자동슬라이드
imgContainer.addEventListener('mouseenter', function () { 
    clearInterval(timer)
})
imgContainer.addEventListener('mouseleave', autoSlide)



// pager로 슬라이드 이동하기
for (let i = 0; i < pagers.length; i++) {
    pagers[i].addEventListener('click', function (event) { 
        let pagerNum = event.target.getAttribute('data-idx');
        // event.target.innerText - 1을 쓰면 span안의 숫자를 가져옴.
        moveImages(pagerNum);       
    })
}

*/