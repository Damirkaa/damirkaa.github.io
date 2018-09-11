window.onload = function (){

var click_num,
    matrix = matrixArray(3,3),
    start = document.getElementById('start'),
    krest = document.createElement("img"),
    nol = document.createElement("img"),
    game = document.getElementById('game'),
    current_stroke = document.getElementById('current-stroke'),
    restart = document.getElementById('restart');
    

    nol.setAttribute('src', "nulll.png");
    krest.setAttribute('src', "krest.png");


start.onclick = function() {
    if(this.hasAttribute('disabled')){
        return false
    }
    tableCreate(); 
  };

restart.onclick = function() {
    game.innerText = ' ';
    tableCreate();
};

function matrixArray(rows,columns){
  var arr = new Array();
  for(var i=0; i<rows; i++){
    arr[i] = new Array();
    for(var j=0; j<columns; j++){
      arr[i][j] = null;
    }
  }
  return arr;
}


function tableCreate(){
    let tbl  = document.createElement('table');
    start.setAttribute('disabled','')
    for(let i = 0; i < 3; i++){
        let tr = tbl.insertRow();
        for(let j = 0; j < 3; j++){
            let td = tr.insertCell()
            td.setAttribute('data-row', i);
            td.setAttribute('data-col', j);
            td.addEventListener("click", OnClickFunction);  
            matrix[i][j] = null;
        }
    }
    game.appendChild(tbl);
    click_num=0;
    current_stroke.innerText = "Ход игрока №1";
}


function OnClickFunction(){
    var kr= krest.cloneNode(true);
    var nu= nol.cloneNode(true);
    let row = this.getAttribute('data-row');
    let col= this.getAttribute('data-col');
    if(this.hasAttribute('disabled')){
        return false;
    } else if (click_num % 2 == 1){
        this.appendChild(nu);
        this.setAttribute('disabled','')
        matrix[row][col] = 1;
        current_stroke.innerText = "Ход игрока №1";
    } else if (click_num % 2 == 0){
        this.appendChild(kr);
        this.setAttribute('disabled','')
        matrix[row][col] = 0;
        current_stroke.innerText  = "Ход игрока №2";
    }
    click_num++;
    if ((click_num > 4)){
        if( check_diag(matrix,1) || check_lines(matrix,1)){
            alert('Нолики победили');
            start.removeAttribute('disabled');
            game.innerText = ' ';
            return false;
        } 
        if( check_diag(matrix,0) ||check_lines(matrix,0)){
            alert('Крестики победили');
            start.removeAttribute('disabled');
            game.innerText = ' ';
            return false;
        }
    } 
    if (click_num == 9){
        alert('Ничья');
        start.removeAttribute('disabled');
        game.innerText = ' ';
        return false;
    }
    
};

function check_lines(matrix,num){
    for(let i = 0; i < 3; i++){
        for(let j = 0; j < 3; j++){
            if (((matrix[i][0] == num) && (matrix[i][1] == num) && (matrix[i][2] == num)) || ((matrix[0][j] == num) && (matrix[1][j] == num) &&(matrix[2][j] == num)) ) {
                return true; 
            }
        }
    }
    return false; 
}

function check_diag(matrix,num){
    let chek_main = 0,
        chek_secondary = 0;
    for(let i = 0; i < 3; i++){
        for(let j = 0; j < 3; j++){
            if (i == j){
                if (matrix[i][j] == num) {
                    chek_main++;
                }
            }
            if (i + j == 2){
                if (matrix[i][j] == num) {
                    chek_secondary++;
                }
            }
        }
        if ((chek_main == 3) || (chek_secondary == 3)) {
            return true;
        }
    }
    return false; 
}

};

