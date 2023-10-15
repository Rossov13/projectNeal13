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
const updateButton = document.getElementById('updateDetails') as HTMLElement;
const cancelButton = document.getElementById("cancel") as HTMLElement;
const dialog = document.getElementById("favDialog") as HTMLElement

// dialog.returnValue = "favDialog" ;

function openCheck(dialog: any)  {
    if (dialog.open) {
      console.log("Dialog open");
    } else {
      console.log("Dialog closed");
    }
  }
  
  updateButton.addEventListener("click", () => {
    dialog.showModal();
    openCheck(dialog);
  });
  
  
  cancelButton.addEventListener("click", () => {
    dialog.close("animalNotChosen");
    openCheck(dialog);
  });

  