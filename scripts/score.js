document.getElementById('record').innerText = localStorage.getItem('record');
let score_inc = 0;
let line_score = 0;
export default function score(scr){

    switch(scr){
        case 1: line_score = 100; break;
        case 2: line_score = 300; break;
        case 3: line_score = 700; break;
        case 4: line_score = 1500; break;
        default: line_score = 0;return;
    }
    score_inc += line_score;
    document.getElementById('score').innerText = score_inc;
    if(score_inc > localStorage.getItem('record')){
        localStorage.setItem('record',score_inc);
        
    }

    // alert(shape)
}