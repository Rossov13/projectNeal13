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
