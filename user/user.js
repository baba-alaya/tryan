let sideNav = document.querySelector(".sidenav");
let closeBtn = document.getElementById("close");
let open = document.getElementById("ham");
const transactionContainer = document.querySelector(".content-container");

const allTransaction = []

// console.log(sideNav);
// console.log("hello");
open.addEventListener("click", () => {
  sideNav.classList.toggle("side");
});

closeBtn.addEventListener("click", () => {
  sideNav.classList.remove("side");
});


const uName = document.querySelector(".UName");
const bigname = document.querySelector(".big-name");

const parsedtwo = JSON.parse(localStorage.getItem('eachUser'))
const parsed = JSON.parse(localStorage.getItem('eachUser'))



window.addEventListener('DOMContentLoaded', function () {
  // console.log(parsed)
  uName.innerHTML = parsed.name;
  bigname.innerHTML = parsed.name
  // console.log(uName);
})




const getResult = async () => {
  const res = await fetch('https://authbills-ded0b-default-rtdb.firebaseio.com/purchase.json')
  const data = await res.json();
  console.log(data)


  for (const key in data) {
    const eachTransaction = { ...data[key], id: key };
    // console.log(eachTransaction)

    allTransaction.push(eachTransaction)
  }
  // console.log(allTransaction)

  let transactionHTML = ' '
  allTransaction.forEach(function(value){
    // console.log(value)
    transactionHTML +=    ` <div>
                            <p class="title">
                                <span class="verbs">${value.typeData}</span>
                                <span>${value.time} <span>-${value.amountData}#</span></span>
                            </p>
                            <p>
                                <span>
                                  ${value.typeData} of #${value.amountData} is ongoing, ${value.numberData} will be credited within 5min ,if not contact 09014553432
                                </span>
                                <span>${value.status}</span>
                            </p>
                                  </div>`
  })
  transactionContainer.innerHTML = transactionHTML




}

getResult()
// console.log(transactionContainer)







