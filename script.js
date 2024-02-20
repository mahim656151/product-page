let imageTag = document.querySelector(".imageTag");
let btn = document.getElementsByClassName("btn");
let submit =  document.querySelector(".submit");


submit.addEventListener("click", (e)=>{
    let sizes = document.querySelectorAll("input[name=size]");
 let colors =  document.querySelectorAll("input[name=color]");
 let quantites =  document.querySelector("#count").value;

    e.preventDefault();


    for(let i=0; i < sizes.length; i++){

        if (sizes[i].checked) {
            var values = sizes[i].value;

        }

    }

    for(let i=0; i < colors.length; i++){

        if (colors[i].checked) {
            var colorValues = colors[i].value;
        }

    }
    const userInfo={
        size: values,
        color : colorValues,
        Quantity: quantites,

    }
    console.log(userInfo);






});


   




btn[0].addEventListener("click", ()=>{
    imageTag.src = "images/image1.png";
    if(btn[0].click){
        btn[0].classList.add("active");
        btn[1].classList.remove("active");
        btn[2].classList.remove("active");
    }

})

btn[1].addEventListener("click", ()=>{
    imageTag.src = "images/image2.png";
    if(btn[1].click){
        btn[1].classList.add("active");
        btn[0].classList.remove("active");
        btn[2].classList.remove("active");
    }

})
btn[2].addEventListener("click", ()=>{

    imageTag.src = "images/image3.png";
    if(btn[2].click){
        btn[2].classList.add("active");
        btn[0].classList.remove("active");
        btn[1].classList.remove("active");
    }

})
