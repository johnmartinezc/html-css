let button = document.getElementById('button');
let add = document.getElementById('add');
let subtract = document.getElementById('subtract');
let emoticon = document.getElementById('emoticon');
let c = 0; 

count.innerText = c;

add.addEventListener('click', () => {
    c++; 
    count.innerText = c;
    updateCountDisplay();
    
    if (c === 0) {
        button.style.display = 'none';
    }
});

subtract.addEventListener('click', () => {
    if (c > 0) {
        c--; 
        count.innerText = c;
        updateCountDisplay();
    }
    
    if (c === 0) {
        button.style.display = 'none';
    }
});

function updateCountDisplay() {
    count.innerText = c;
    emoticon.innerText = getEmoticon(c);
    
    if (c === 0) {
        button.style.display = 'none';
    } else {
        button.style.display = 'block';
    }
}

function getEmoticon(count) {
    let emoticonString = '';
    
    for (let i = 0; i < count; i++) {
        emoticonString += ':)';
    }
    
    return emoticonString;
}
