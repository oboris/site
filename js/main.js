const area = document.getElementById('area');
let isCrossOrder = true;
let dim = 3;
var field = [];

area.addEventListener('click', e => {
    if(e.target.className == 'box' && e.target.innerHTML == ''){
        if (isCrossOrder) {
            e.target.innerHTML = 'X';
        } else {
            e.target.innerHTML = '0';
        }
        isCrossOrder = !isCrossOrder;
        checkWinner();
    }
})

function checkWinner() {
    const boxes = document.getElementsByClassName('box');
    field = new Array(dim);
    let ind = 0;
    let winner = "";
    
    for (let i = 0; i < dim; i++) {
        field[i] = new Array(dim);
        for (let j = 0; j < dim; j++){
            field[i][j] = boxes[ind].innerHTML;
            ind++;
        }
    }

    // if (checkVertical('X') || checkHorisontal('X') || checkDiahonal('X')){
    //     winner = 'X';
    // } else  if (checkVertical('0') || checkHorisontal('0') || checkDiahonal('0')){
    //     winner = '0';
    // }

    if (checkLines('X')){
        winner = 'X';
    } else  if (checkLines('0')){
        winner = '0';
    }

    if (winner != ''){
        document.getElementById('tit').innerHTML = winner;
    }
}

function checkLines(sign){
    let countMain = 0;
    let countOther = 0;
    for (let i = 0; i < dim; i++) {
        let countVertival = 0;
        let countHorisontal = 0;
        for (let j = 0; j < dim; j++){
            if (field[i][j] == sign){
                countVertival++;
            }
            if (field[j][i] == sign){
                countHorisontal++;
            }
        }
        if (countVertival == dim || countHorisontal == dim){
            return true;
        }
        if (field[i][i] == sign) {
            countMain++;
        }
        if (field[i][dim - i - 1] == sign) {
            countOther++;
        }
    } 
    if (countMain == dim || countOther == dim) {
        return true;
    }
    return false;
}

// function checkVertical(sign){
//     for (let i = 0; i < dim; i++) {
//         let count = 0;
//         for (let j = 0; j < dim; j++){
//             if (field[i][j] == sign){
//                 count++;
//             }
//         }
//         if (count == dim){
//             return true;
//         }
//     } 
//     return false;
// }

// function checkHorisontal(sign) {
//     for (let j = 0; j < dim; j++) {
//         let count = 0;
//         for (let i = 0; i < dim; i++){
//             if (field[i][j] == sign){
//                 count++;
//             }
//         }
//         if (count == dim){
//             return true;
//         }
//     } 
//     return false;
// }

// function checkDiahonal(sign) {
//     let countMain = 0;
//     let countOther = 0;
//     for (let i = 0; i < dim; i++) {
//         if (field[i][i] == sign) {
//             countMain++;
//         }
//         if (field[i][dim - i - 1] == sign) {
//             countOther++;
//         }
//     }
//     if (countMain == dim || countOther == dim) {
//         return true;
//     }
//     return false;
// }
