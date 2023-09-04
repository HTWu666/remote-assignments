const headerTitle = document.querySelector("#headerTitle");
const clickHeaderTitle = () => {
    headerTitle.innerText = "Have a Good Time!";
}

const loadMoreBtn = document.querySelector(".loadMoreBtn");
const part2 = document.querySelector("#part2");
const loadMore = () => {
    part2.style.display = "grid";
}