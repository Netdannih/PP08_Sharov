const playSlider = () =>{
    let html = document.querySelector("html"),
    gallery = document.querySelector(".middle-front"),
    ourTeam = document.querySelector(".our-team"),
    reviews = document.querySelector(".reviews"),
    galleryMenu = document.querySelectorAll(".gallery .menu .menu-item"),
    workerProfile = [ourTeam.querySelector(".taemmate-pic"), ourTeam.querySelector("#teammate-name"), ourTeam.querySelector("#teammate-post"), ourTeam.querySelector("#teammate-cite")],
    customerProfile = [reviews.querySelector(".taemmate-pic"),reviews.querySelector(".customer-name"),reviews.querySelector(".introduce"),reviews.querySelector(".cite")],
    worksLists = [
        ["tuning1","tuning2","tuning3"],
        ["exp1","exp2","exp3"],
        ["bp1","bp2","bp3"]
    ],
    workers = [
        ["workers/mechanic1","Иван Иванов","Автомеханик","Я работаю тут уже 5 лет и всё время совершенствую свои навыки, чтобы не отставать от развития автопрома"],
        ["workers/mechanic2","Пётр Петров","Автомеханик", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis accusamus, iure eligendi pariatur deleniti expedita explicabo eveniet impedit natus hic numquam nemo quas cumque et aliquid nobis nesciunt laborum iste aliquam porro culpa maxime? Illum, ullam hic cum suscipit ex adipisci pariatur quia labore dolorem dicta, dolores neque fuga est."]
    ],
    customers = [
        ["customers/customer1","Андрей Вясников", "24 мая 2018", "Моя 'Буханка' превратилась в настоящий внедорожник, да ещё и внушительно выглядящий. Спасибо за эту чудесную модернизацию!"],
        ["customers/customer2","Дмитрий Смирнов", "16 июня 2019","Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis accusamus, iure eligendi pariatur deleniti expedita explicabo eveniet impedit natus hic numquam nemo quas cumque et aliquid nobis nesciunt laborum iste aliquam porro culpa maxime? Illum, ullam hic cum suscipit ex adipisci pariatur quia labore dolorem dicta, dolores neque fuga est."]
    ],
    nav=document.querySelector("nav"),
    changeSlide = () => {
        gallery.src = "img/content/"+String(worksLists[currentWorksList][currentWorksSlideIndex])+".jpg";
    },
    changeWorker = (profile,list,index) => {
        profile[0].src="img/"+list[index][0]+".jpg";
        for(let i = 1; i<4; i++){
            profile[i].textContent = list[index][i];
        }
    },
    currentWorksList = 0,
    currentWorksSlideIndex=0,
    currentWorkerIndex=0,
    currentCustomerIndex=0;
    //Анимация
    const animateWorksSlide = () => {
    currentWorksSlideIndex++;
    if (currentWorksSlideIndex===worksLists[currentWorksList].length) currentWorksSlideIndex=0;
    changeSlide();
    };
    changeSlide();
    let idWorksAnimate = setInterval(animateWorksSlide, 7000);
    setTimeout(()=>{
        if (localStorage.modal!="1"){
            window.open("#openModal", "_top");
            localStorage.modal = "1";
        }
    }, 3000);

    //Делегирование (клик)
    html.addEventListener("click", (event) => {
        let target = event.target;
        if (!target.matches("nav") & document.body.clientWidth<800) nav.style.display="none";
        if (!target.matches(".arrow, .gallery .menu-item, .btn")) return;
        //Обработка клика по стрелкам
        if (target.matches(".arrow")){
            if(target.matches(".gallery .arrow")){
                if (target.matches(".left")) {
                    currentWorksSlideIndex--; if(currentWorksSlideIndex===-1) currentWorksSlideIndex=worksLists[currentWorksList].length-1;
                }else{
                    currentWorksSlideIndex++; if(currentWorksSlideIndex===worksLists[currentWorksList].length) currentWorksSlideIndex=0;
                };
                changeSlide();
            }
            else if(target.matches(".our-team .arrow")){
                if (target.matches(".left")) {
                    currentWorkerIndex--; if(currentWorkerIndex===-1) currentWorkerIndex=workers.length-1;
                }else{
                    currentWorkerIndex++; if(currentWorkerIndex===workers.length) currentWorkerIndex=0;
                };
                changeWorker(workerProfile,workers,currentWorkerIndex)
            }
            else if(target.matches(".reviews .arrow")){
                if (target.matches(".left")) {
                    currentCustomerIndex--; if(currentCustomerIndex===-1) currentCustomerIndex=customers.length-1;
                }else{
                    currentCustomerIndex++; if(currentCustomerIndex===customers.length) currentCustomerIndex=0;
                };
                changeWorker(customerProfile,customers,currentCustomerIndex)
            }
        }
        // Смена галереи
        else if (target.matches(".gallery .menu-item")){
            for(let i = 0; i < galleryMenu.length; i++){
                if(target===galleryMenu[i]){
                    currentWorksList=i;
                    currentWorksSlideIndex=0
                    changeSlide();
                    break;
                }
            }
        }
        //menu
        else if (target.matches("#header-button")){
            nav.style.display = nav.style.display == "none"? "flex":"none";
        };
    });
    
    };
    playSlider();
