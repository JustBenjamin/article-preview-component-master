

const author = document.getElementById("author")
const share = document.getElementById("share")
const icon = document.getElementById("icon")

icon.addEventListener("click", function() {
    if (window.matchMedia("(max-width: 991px)").matches) {
        author.style.display = "none";
        share.style.display = "flex";
    } else if (window.matchMedia("(min-width: 992px)").matches) {
        author.style.display = "flex";
        share.style.display = "flex"; 
    }  else {
            author.style.display = "flex";
            share.style.display = "none";
        }
    
})


