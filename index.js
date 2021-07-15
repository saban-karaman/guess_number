var pcNumb = Math.floor(Math.random()*100);
document.write(pcNumb);
var inputUser =document.querySelector("#number");
console.log(inputUser);
var check = document.querySelector("#check");


function guess() {
    let counter = 0;
    x =parseInt(inputUser.value);
    if (x < pcNumb) {
        document.querySelector("#result").innerHTML = "your guess is lower"
        counter += 1;
        document.querySelector("#attempt").innerHTML = `${counter}`
        if (counter === 5) {
            alert("You Lose!!!");
        }
    } else if(x > pcNumb){
        document.querySelector("#result").innerHTML = "your guess is higher"
        counter += 1;
        document.querySelector("#attempt").innerHTML = `${counter}`
        if (counter === 5) {
            alert("You Lose!!!");
        }
    } else {
        document.querySelector("#result").innerHTML = "Congrat!"
        alert("You win!!!");
    }
    
}




   

