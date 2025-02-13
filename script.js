const popButton = document.querySelector(".button1");
const popWindow = document.querySelector(".popup");

console.log(popButton);

popButton.addEventListener(
    "click", (e) => {
        setTimeout(() => {
            popWindow.classList.add("show");
            
        }, 1000);


    console.log("I am here and I am working!!")
} );


