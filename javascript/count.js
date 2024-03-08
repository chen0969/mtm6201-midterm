function pickSize(size){
    const tSize = document.getElementById("burgerPic");
    if (size == 0){
        tSize.style.transform = "scale(0.5)";
    }
    else if(size == 1){
        tSize.style.transform = "scale(1)";
    }
    else if(size == 2){
        tSize.style.transform = "scale(1.5)";
    }
    else{
        tSize.style.transform = "scale(1)";
    }
}

function amountCount(count){
    const number = document.getElementById("number");
    const price = document.getElementById("totalPrice");
    let initialNumber = parseInt(number.textContent);
    if (count == -1){
        initialNumber--; 
        newNumber = initialNumber; 
    }
    else if(count == 1){
        initialNumber++; 
        newNumber = initialNumber; 
    }
    number.textContent = newNumber;
    const newPrice = newNumber * 20.95;
    const formattedPrice = newPrice.toFixed(2);
    price.textContent = formattedPrice;
}