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

dialog.addEventListener('close', (e) => {
  if (dialog.returnValue == 'cancel') {
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
// 4. User rating score card

const rating = {
  "header": "User rating",
  "maxvalue": 254,
  "data": [
    {
      "title": "5 stars",
      "value": 150
    },
    {
      "title": "4 stars",
      "value": 63
    },
    {
      "title": "3 stars",
      "value": 15
    },
    {
      "title": "2 stars",
      "value": 6
    },
    {
      "title": "1 star",
      "value": 20
    }
  ]
}

const ratingDiv = document.querySelector('.userRating') as HTMLDivElement

function renderRating() {
  ratingDiv.innerHTML = ''
  ratingDiv.innerHTML += `<span class="heading">${rating.header}</span>`
  ratingDiv.innerHTML += `<hr style="border: 3px solid #f1f1f1">`
  rating.data.forEach(el=>{
    ratingDiv.innerHTML += `<div class="side">
    <div>${el.title}</div>
  </div>
  <div class="middle">
    <div class="bar-container">
      <div style="width:${el.value/rating.maxvalue*100}%" class="bar-${el.title[0]}"></div>
    </div>
  </div>
    <div class="side right">
      <div>${el.value}</div>
    </div>`
  })
}

renderRating()