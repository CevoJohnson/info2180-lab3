window.onload = function(){

/*----- constants -----*/
var squares = document.querySelectorAll("#board div");
/*----- app"s state (variables) -----*/

var turn = 1;
var state = ["","","","","","","","",""];
var dict = {};
var status = document.getElementById("status");


/*----- cached element references -----*/


for(var i = 0; i<squares.length; i++){
    squares[i].classList.add("square");
    dict[i] = squares[i];
    squares[i].addEventListener("click", function(){
        /*for(var key in dict){
            if(this == squares[key]){
                state[key] = turn;
                console.log(dict);
            }
        }*/
        console.log(dict);
        console.log(state);
            if( state[0] == turn && state[1] == turn && state[2] == turn ||
                state[3] == turn && state[4] == turn && state[5] == turn ||
                state[6] == turn && state[7] == turn && state[8] == turn ||
                state[0] == turn && state[3] == turn && state[6] == turn ||
                state[1] == turn && state[4] == turn && state[7] == turn ||
                state[2] == turn && state[5] == turn && state[8] == turn ||
                state[0] == turn && state[4] == turn && state[8] == turn ||
                state[2] == turn && state[4] == turn && state[6] == turn){
                this.classList.add("you-won");
                    if(turn==1){
                        status.textContent = "Congratulations! X is the Winner!";
                    }else{
                        status.textContent = "Congratulations! O is the Winner!";
                    }
            }
        if(turn == 1 && this.innerHTML == ""){
        this.innerHTML = "X";
        this.classList.add("X")
        state[i] = turn;
        turn = 2;
        }else if(turn == 2 && this.innerHTML == ""){
        this.innerHTML = "O";
        this.classList.add("O")
        state[i] = turn;
        turn = 1;
        }
    
    });
    squares[i].addEventListener("mouseover", function(){
        this.classList.add("hover");
    });
    squares[i].addEventListener("mouseout",function(){
        this.classList.remove("hover");
    });
    document.querySelector("button").addEventListener("click", function(){
        for(var square of squares){
            square.classList.remove("X");
            square.classList.remove("O");
            square.innerHTML = "";
            square.innerHTML = "";
        }
        turn = 1;
        state = ["","","","","","","","",""];
        status.textContent = "Move your mouse over a square and click to play an X or an O.";
    });
}

}








