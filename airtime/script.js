let form = document.querySelector("form");
let select = document.querySelector("select");
let text2 = document.querySelector("#input2");
let text3 = document.querySelector("#input3");
let popup = document.querySelector("#popup");
let load = document.querySelector(".buttonload");
let close = document.getElementById("close");

const purchaseTime = new Date().toLocaleTimeString()
const new_data = {
  nameData: '',
  numberData: '',
  amountData: '',
  typeData: 'AIRTIME PURCHASE',
  status: "",
  time : purchaseTime ,
}
// console.log(new_data)
api = 'https://vtu.com.ng/API/VTU/'

// console.log(form ,text , email , tel , btn)
form?.addEventListener('submit', async (e) => {
  // loader
  // if (load.classList.contains("loading")) {
  //   load.classList.add("loading");
  // } else {
  //   load.classList.add("loading");
  // }

  e.preventDefault()
  // console.log(user_data)
  try {
    const res = await fetch(`https://vtu.com.ng/API/DATA/?api_key=${apiKey}&network=${user_data.name}&phone=${user_data.number}&amount=${user_data.amount}`, {
      method: 'POST',
    })
    const data = await res.json();
    console.log(data)
    alert(data.response)
    new_data.status = data.response
    postData();
    // setTimeout(popupInterval, 3000);

  } catch (error) {
    console.log(error);
    // console.log('rice')
  }
  form?.reset()

})



// popup
// function popupInterval() {
//   if (popup?.classList.contains("open-popup")) {
//     // console.log('true')
//     popup.classList.remove("open-popup");
//   } else {
//     // console.log('false')
//     popup.classList.add("open-popup");
//   }
//   load.classList.remove("loading");
// }

// close button
// close.?addEventListener("click", () => {
//   popup.classList.remove("open-popup");
//   text1.value = "";
//   text2.value = "";
//   text3.value = "";
// });

const apiKey = 'dfd28d88a49adcc3f3c85110035cbe'
const user_data = {
  key: apiKey,
  name: '',
  number: '',
  amount: '',
}

select?.addEventListener("change", (e) => {
  user_data.name = e.target.value
  new_data.nameData = e.target.value
  // nameData
});

text2?.addEventListener("change", (e) => {
  user_data.number = e.target.value
  new_data.numberData = e.target.value
});

text3?.addEventListener("change", (e) => {
  user_data.amount = e.target.value
  new_data.amountData = e.target.value
});
// console.log(user_data)




const postData = async () => {
  // console.log(new_data);
  const res = await fetch('https://authbills-ded0b-default-rtdb.firebaseio.com/purchase.json', {
    method: 'POST',
    body: JSON.stringify(new_data),
    headers: {
      "content-type": 'application/json'
    }
  })
  const data = await res.json();
  // console.log(data)
}







