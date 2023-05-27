let form = document.querySelector("form");
let text1 = document.querySelector("#input1");
let text2 = document.querySelector("#input2");
let text3 = document.querySelector("#input3");
let popup = document.querySelector("#popup");
let load = document.querySelector(".buttonload");
let close = document.getElementById("close");



api = 'https://vtu.com.ng/API/DATA/'



text1.addEventListener("change", (e) => {
  user_datas.network = e.target.value;
  new_datas.nameData = user_datas.network
});

text2.addEventListener("change", (e) => {
  user_datas.productcode = e.target.value;
  new_datas.amountData = e.target.value;

});
text3.addEventListener("change", (e) => {
  user_datas.number = e.target.value;
  new_datas.numberData = e.target.value;
});

const apiKey = '41926ccc5b5ff454106b676b3ade21'
const user_datas = {
  key: apiKey,
  network: '',
  productcode: '',
  number: '',
}
const purchaseTime = new Date().toLocaleTimeString()
console.log(purchaseTime)
const new_datas = {
  nameData: '',
  numberData: '',
  amountData: '',
  typeData: 'DATA SUBSCRIPTION',
  status: '',
  time : purchaseTime ,
}
// console.log(new_datas.time)
console.log(new_datas)

// form
form.addEventListener("submit", async (event) => {
  event.preventDefault();

  try {
    const res = await fetch(`https://vtu.com.ng/API/DATA/?api_key=${apiKey}&network=${user_datas.network}&phone=${user_datas.number}&product_code=${user_datas.productcode}`, {
      method: 'POST',
    })
    const data = await res.json();
    // alert('insufficient balace from wallet to complete this transaction')
    console.log(data);
    new_datas.status = data.response
    alert(data.response);
    postDatas();


    // console.log(user_datas)
  } catch (error) {
    console.log()
  }
  form.reset();
  // setTimeout(popupInterval, 3000);

  // } catch (error) {
  //   console.log('rice')
  //   console.log(error);
  // }

  // // loader
  // if (load.classList.contains("loading")) {
  //   load.classList.add("loading");
  //   // console.log('true')
  // } else {
  //   // console.log('false')
  //   load.classList.add("loading");
  // }
  // setTimeout(popupInterval, 3000);


});





const postDatas = async () => {
  console.log(new_datas);
  const res = await fetch('https://authbills-ded0b-default-rtdb.firebaseio.com/purchase.json', {
    method: 'POST',
    body: JSON.stringify(new_datas),
    headers: {
      "content-type": 'application/json'
    }
  })
  const data = await res.json();
  console.log(data)
}

// // popup
// function popupInterval() {
//   if (popup.classList.contains("open-popup")) {
//     // console.log('true')
//     popup.classList.remove("open-popup");
//   } else {
//     // console.log('false')
//     popup.classList.add("open-popup");
//   }
//   load.classList.remove("loading");
// }

// close button
// close.addEventListener("click", () => {
//   popup.classList.remove("open-popup");
//   text1.value = "";
//   text2.value = "";
//   text3.value = "";
// });



