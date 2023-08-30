function showProducts(){
    let menu = document.querySelector("#products-dropdown-menu");
    if(menu.style.display === "none"){
        menu.style.display = "flex";
    } else {
        menu.style.display = "none";
    }
}

function showLangMenu(){
    let menu = document.querySelector("#lang-option");
    if(menu.style.display === "none"){
        menu.style.display = "block";
    } else{
        menu.style.display = "none";
    }
}

function showEn(){
    window.location.href = "https://developers.google.com/";
}

function showZhTw(){
    window.location.href = "https://developers.google.com/?hl=zh-tw";
}

function showZhCn(){
    window.location.href = "https://developers.google.com/?hl=zh-cn";
}

function showCreateProfileWindow(){
    let window = document.querySelector("#create-profile-window");
    if(window.style.display === "none"){
        window.style.display = "block";
    } else{
        window.style.display = "none";
    }
}

function dismiss(){
    let window = document.querySelector("#create-profile-window");
    window.style.display = "none";
}

function start(){
    window.location.href = "https://developers.google.com/profile/u/new?hl=en";
}