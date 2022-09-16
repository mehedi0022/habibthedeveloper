/*----------Skills Tab----------*/
const tabs = document.querySelectorAll('[data-target]'),
    tabContent = document.querySelectorAll('[data-content]');
    
    tabs.forEach(tab => {
        tab.addEventListener("click", () => {
            const target = document.querySelector(tab.dataset.target)
            
            tabContent.forEach(tabContents => {
                tabContents.classList.remove("skills_active")
            })
            target.classList.add('skills_active')


            tabs.forEach(tab => {
                tab.classList.remove("skills_active")
            })
            tab.classList.add('skills_active')
        })
    })
 


document.addEventListener("click", (e) =>  {
    if(e.target.classList.contains("work_button")) {
        togglePortfolioPopup();
        portfolioItemDetaisl(e.target.parentElement);
    }
})
function togglePortfolioPopup() {
    document.querySelector(".portfolio_popup").classList.toggle("open");
}
document.querySelector(".portfolio_popup-close").addEventListener('click', togglePortfolioPopup);

function portfolioItemDetaisl(portfolioItem){
    document.querySelector(".pp_thumbline img").src = portfolioItem.querySelector(".work_img").src;
    document.querySelector(".fortfolio_popup-subtitle span").innerHTML = portfolioItem.querySelector(".work_title").innerHTML;
    document.querySelector(".portfolio_popup-body").innerHTML = portfolioItem.querySelector(".portfolio_item-details").innerHTML;
}

const modalViews = document.querySelectorAll('.services_modal'),
      modalBtns = document.querySelectorAll('.services_button'),
      modalClose = document.querySelectorAll('.services_modal-close');


let modal = function(modalclick) {
    modalViews[modalclick].classList.add('active-modal')
}
modalBtns.forEach((modalBtn, i) => {
    modalBtn.addEventListener('click', () => {
        modal(i);
    })
})
modalClose.forEach((modalClose) => {
    modalClose.addEventListener("click", () => {
        modalViews.forEach((modalView) => {
            modalView.classList.remove('active-modal');
        })
    })
})

/*------Input-----*/
const inputs = document.querySelectorAll(".input");

function focusFunc(){
    let parent = this.parentNode;
    parent.classList.add("focus");
}
function blurFunc(){
    let parent = this.parentNode;
    if(this.value == ""){
        parent.classList.remove("focus");
    }
}

inputs.forEach((input) => {
    input.addEventListener("focus", focusFunc);
    input.addEventListener("blur", blurFunc);
})
