let btn = document.querySelector(".btn")

function togglemode(){
    document.body.classList.toggle("darkmode")
}

btn.addEventListener("click", togglemode )