function openBar(){
    const sidebar = document.querySelector(".sidebar");
    sidebar.style.display = "flex";
}

function closeBar(){
    const sidebar = document.querySelector(".sidebar");
    sidebar.style.display = "none";
}

quote2 = document.querySelector(".quote2");
quote1 = document.querySelector(".quote1");
dot1 = document.querySelector(".dot1");
dot2 = document.querySelector(".dot2");

function showQuote1(){
    quote1.style.display = "block";
    quote2.style.display = "none";
    dot1.style.backgroundColor = "deepskyblue";
    dot2.style.backgroundColor = "#bbb";
}

function showQuote2(){
    quote2.style.display = "block";
    quote1.style.display = "none";
    dot2.style.backgroundColor = "deepskyblue";
    dot1.style.backgroundColor = "#bbb";
}