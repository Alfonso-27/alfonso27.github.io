function myFunction(){
    let randomNumberOne = Math.floor(Math.random()*6) + 1;

    let randomDiceImage = `dice${randomNumberOne}.png`;
    
    let randomImageSrc1 = `images/${randomDiceImage}`;
    
    let image1 = document.getElementsByClassName("img1")[0];
    image1.setAttribute("src", randomImageSrc1);
    
    let randomNumberTwo = Math.floor(Math.random()*6) + 1;
    
    let randomDiceImage2 = `dice${randomNumberTwo}.png`;
    
    let randomImageSrc2 = `images/${randomDiceImage2}`;
    
    let image2 = document.getElementsByClassName("img2")[0];
    image2.setAttribute("src", randomImageSrc2);
    
    if(randomNumberOne > randomNumberTwo){
        document.getElementsByTagName("h1")[0].innerHTML = "Congratulation Player 1 Win!";
    }
    else if(randomNumberTwo > randomNumberOne){
        document.getElementsByTagName("h1")[0].innerHTML = "Congratulation Player 2 Win!"
    }
    else{
        document.getElementsByTagName("h1")[0].innerHTML = "Sorry, There are no Winner!"
    }
}