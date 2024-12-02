const list = document.querySelectorAll(".ulgroup ul li");
const display = document.querySelector(".display")


if(window.localStorage.getItem('color')){
    display.style.backgroundColor = window.localStorage.getItem('color');
    //active
    list.forEach((re)=>{
        re.classList.remove('active')
    })
    document.querySelector(`[data-color="${window.localStorage.getItem('color')}"]`)
}else{
    console.log('nooooo')
}



list.forEach((li)=>{
li.addEventListener("click",(e)=>{


    //1 add class color display in background
    window.localStorage.setItem('color',e.target.dataset.color);
    display.style.backgroundColor = e.target.dataset.color;
    
    //2-active class
        //sheel
    list.forEach((re)=>{
        re.classList.remove('active')
    })

    e.target.classList.add('active')


    })

})