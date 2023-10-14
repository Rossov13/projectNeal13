import './style.css'

// JS_PZ_Module_15_16_Week_21_1548323208.pdf

// 1.


const tabs = document.querySelectorAll('[data-tab-value]') as NodeListOf<HTMLElement>
const tabInfos = document.querySelectorAll('[data-tab-info]')

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        if (tab.dataset.tabValue) {
            const target = document.getElementById(tab.dataset.tabValue)
            tabInfos.forEach(tabInfo => {
                tabInfo.classList.remove('active')
            })
            if (target) target.classList.add('active')
        }
    })
})


// 2.
let modal = document.getElementById("myModal")
let btn = document.getElementById("myBtn")
let span = document.getElementsByClassName('btn')[0] as HTMLElement;

if (btn?.onclick) (
btn.onclick = function () {
    if (modal?.style.display) {
    modal.style.display = "block";
    }
})
 
    span.onclick = function() {
        if(modal?.style.display)
        modal.style.display = "none"
    }

window.onclick = function(event) {
    if (event.target == modal) { 
        if(modal?.style.display) {
        modal.style.display = "none"
    }
}
}
