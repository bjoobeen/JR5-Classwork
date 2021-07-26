// I.O.C.E

//I = Input
//O = Output
//C = Constraints
//E = Edge Case

//? Define function with 2 params
function tipFunction(totalPrice, tip) {
    var percentage = (tip / totalPrice)*100;
    console.log(percentage)

    if (percentage <= 5) {
        return "You are an awful tipper"
    } else if (percentage > 5 && percentage <= 10) {
        return "You are an ok tipper"
    } else if (percentage <= 20) {
        return "You are a good tipper"
    } else {
        return "You are a great tipper!"
    }
}

var check = tipFunction(200, 10);