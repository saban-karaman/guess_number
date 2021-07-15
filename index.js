var pcNumb = Math.floor(Math.random()*100);
// document.write(pcNumb);
var inputUser =document.querySelector("#number");
// console.log(inputUser);
var check = document.querySelector("#check");

let counter = 0;
function guess() {
    
    x =parseInt(inputUser.value);
    if (x < pcNumb) {
        document.querySelector("#result").innerHTML = "your guess is lower"
        counter ++;
        document.querySelector("#attempt").innerHTML = `${counter}`
        if (counter === 5) {
            alert("You Lose!!!");
        }
    } else if(x > pcNumb){
        document.querySelector("#result").innerHTML = "your guess is higher"
        counter ++;
        document.querySelector("#attempt").innerHTML = `${counter}`
        if (counter === 5) {
            alert("You Lose!!!");
        }
    } else if (x === pcNumb){
        document.querySelector("#attempt").innerHTML = `${counter}`
        document.querySelector("#result").innerHTML = "Congrat!"
        alert("You win!!!");
        
    }
    console.log(counter);
}




   

