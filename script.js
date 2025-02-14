const popButton = document.querySelector(".button1");
const popWindow = document.querySelector(".popup");
let no = document.querySelector(".no");
const yes = document.querySelector(".yes"); 

let baseCount = 0;

console.log(popButton);

popButton.addEventListener(
    "click", (e) => {
        setTimeout(() => {
            popWindow.classList.add("show");
            
        }, .900);


    console.log("I am here and I am working!!")
} );

function getRandomInt() {
    return Math.floor(Math.random() * (250 - (-250)) + -250);
  }

  function clickChangeClr() {

    let randomColor = Math.floor(Math.random()*16777215).toString(16);
    let rgbValue = "#" + randomColor;
    yes.style.backgroundColor = rgbValue;

}

yes.addEventListener(
    "click", (e) => {
        
    }
)


no.addEventListener(
    "click", (e) => {
        console.log("I am no!");

        let plusCount = baseCount++;

        if(
            baseCount > 6
        ){
            no.style.visibility = "hidden";
            console.log (plusCount);
            yes.style.width = "7.5rem"; 
            yes.style.height ="3rem";
            yes.style.marginLeft = "4rem";
            yes.style.position = "fixed";
            yes.textContent = "YES!!!"
            yes.style.letterSpacing = "0.7rem"
            yes.style.color = "white";
            yes.style.fontWeight = "bold";
         
        }

        if (
            baseCount> 4 
        ){
            setInterval(() => {
                clickChangeClr();
            }, 500
            );
        }


        let randomLeft = getRandomInt();
        let randomTop = getRandomInt();
        let randomRight = getRandomInt();
        let randomBottom = getRandomInt();

        no.style.position = "absolute";
        
        no.style.left = randomLeft+"px";
        no.style.top = randomTop+"px";
        no.style.right = randomRight+"px";
        no.style.bottom = randomBottom+"px";
        
    }
)
