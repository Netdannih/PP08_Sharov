let html = document.querySelector("html"),
nav=document.querySelector("nav");

//Делегирование (клик)
html.addEventListener("click", (event) => {
    let target = event.target;
    if (!target.matches("a") && !target.matches("a *")) event.preventDefault();
    if (!target.matches("nav") & document.body.clientWidth<800) nav.style.display="none";
    if (!target.matches(".btn")) return;
    //menu
    else if (target.matches("#header-button")){
        nav.style.display = nav.style.display == "none"? "flex":"none";
    };
});