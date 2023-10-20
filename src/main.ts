import './style.css'

// JS_PZ_Module_15_16_Week_21_1548323208.pdf

// 1. HTML page with tabs.


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


// 2. Modal window.
const updateButton = document.getElementById('updateDetails') as HTMLElement;
const dialog = document.getElementById("favDialog") as HTMLDialogElement;
// const cancelButton = dialog.querySelector("[type=reset]") as HTMLElement;
// const confirm = dialog.querySelector("[type=submit]") as HTMLElement;
const select = dialog.querySelector("#favAnimal") as HTMLSelectElement

dialog.addEventListener('close', (e)=>{
    if (dialog.returnValue=='cancel') {
        console.log("Canceled");
    } else {
        console.log(select.value)
    }
})


// function openCheck(dialog: any) {
//     if (dialog.open) {
//         console.log("Dialog open");
//     } else {
//         console.log("Dialog closed");
//     }
// }

updateButton.addEventListener("click", () => {
    dialog.showModal();
});


// cancelButton.addEventListener("click", () => {
//     dialog.close();
//     console.log("animalNotChosen")
//     openCheck(dialog);
// });

// confirm.addEventListener("click", () => {
//     dialog.close();
//     const 
//     openCheck(dialog);
// });

// return.value = "favDialog"

// 3. Text field with autocomplete.

 
