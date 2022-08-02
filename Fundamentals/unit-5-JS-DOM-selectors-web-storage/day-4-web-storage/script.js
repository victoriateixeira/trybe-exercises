function changesBackgroundColor () {

let button = document.getElementById("btn-add");
button.addEventListener("click",function() {
    let background = document.body;
    let input = document.getElementById("bg-color");
    background.style.backgroundColor = input.value;
})
};
 changesBackgroundColor ();

 function changesTextColor () {

    let button = document.getElementById("btn-add");
    button.addEventListener("click",function() {
        let paragraph = document.querySelector("#paragraphs");
        let input = document.getElementById("text-color");
        paragraph.style.color = input.value;
    })
    };
    
     changesTextColor ();

     function changesFontSize () {

        let button = document.getElementById("btn-add");
        button.addEventListener("click",function() {
            let paragraph = document.querySelector("#paragraphs");
            let selectBox = document.getElementById("font-size");
            let selectedOption = selectBox.options[selectBox.selectedIndex];
            let selectedValue = selectedOption.value;
            paragraph.style.fontSize = selectedValue;
        })
        };
         changesFontSize ();