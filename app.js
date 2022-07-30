const arrows = document.querySelectorAll(".arrow"); /*Truy vấn tất cả mũi tên có trong web*/
const movieLists = document.querySelectorAll(".movie-list"); /*Truy vấn tất cả mũi tên có trong web*/

/*Di chuyển click sang phải button */
arrows.forEach((arrow,i) => {
    const ratio = Math.floor(window.innerWidth / 270); /*Reponsive*/
    /*Giới hạn đến mục 4 và quay lại từ đầu (*)*/
        const itemNumber = movieLists[i].querySelectorAll("img").length; /*(*)*/
        let clickCounter = 0;   /*(*)*/
    arrow.addEventListener("click", () => { 
        clickCounter++;              /*(*)*/
        if(itemNumber - (4 + clickCounter) + (4 - ratio) >= 0) {   /*(4 - ratio): reposive   (*)*/
    movieLists[i].style.transform = `translateX(${     
    movieLists[i].computedStyleMap().get("transform")[0].x.value
    -400}px)`;

    } else {
        movieLists[i].style.transform = "translateX(0)"; /*(*)*/
        clickCounter = 0; /*return */
    } 

    }); 

console.log(Math.floor(window.innerWidth / 270)); /*Math.floor: hàm tính lấy số dương reponsive for  point movie  */
});


/*While and Dark Toggle */
const ball = document.querySelector(".toggle-ball");
const items = document.querySelectorAll(".container,.movie-list-title,.navbar-container,.sidebar,.left-menu-icon,.toggle");
ball.addEventListener("click",()=>{
    items.forEach(item=>{
        item.classList.toggle("active")
    })
    ball.classList.toggle("active")
})