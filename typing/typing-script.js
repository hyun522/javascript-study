const content = "Hi. I'm Somi, \n front-end developer.";
const text = document.querySelector("#text");
let index = 0;

function typing(){
    let txt = content[index++];
    text.innerHTML += txt === "\n" ? "<br/>": txt;
    if (index > content.length) {
        text.textContent = "";
        index = 0;
    }
}
setInterval(typing, 200)


/*
const contents = "Hi I'm Somi, \n front-end developer.";
const $text = document.querySelector("#text");
const speed = 100;
let index = 0;

const changeLine = (content) => { 
    return content.map(text => text === "\n" ? "<br/>" : text);
}

const typing = async () => { 
    const content = changeLine(contents[index].split(""));

    while (content.length) { 
        await wait(speed);
        $text.innerHTML += content.shift();
    }

    await wat(300);
}

function wait(ms) {
    return new Promise(res => setTimeout(res, ms))
  }

setInterval(typing, 200);
*/

/*


const content = "I'm Somi, \n Front - End Developer";
const $h1 = document.getElementById('typing');
let index = 0;

function typing() { 
    let alphabet = content[i++];
    $h1.innerHTML += alphabet === "\n" ? "<br/>" : alphabet;
    if ($h1.innerHTML > content.length) { 
        $h1.textContent = '';
        index = 0;
    }
}

setInterval(typing, 300)
*/