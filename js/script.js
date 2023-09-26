// class list Name 

var allProduct = document.querySelectorAll(".box .card-box h2")
var showProduct = document.querySelector(".showProduct")
var btn = document.querySelector("#btn")
var elPrice = document.querySelector(".price")

var Totalprice = 0;

allProduct.forEach(function (item) {
    item.addEventListener("click" , function(){
        showProduct.innerHTML += `<p>${item.textContent}</p>`
        showProduct.style.color = "#eee"
        showProduct.style.fontSize = "20px"
        Totalprice += +(item.getAttribute("price"))
        if(showProduct.innerHTML != ""){
            btn.style.display = "block"
            btn.style.width = "250px"
            btn.style.height = "40px"
            btn.style.fontSize = "20px"
            btn.style.backgroundColor = "#213555"
            btn.style.border = "none"
            btn.style.color = "#eee"
            btn.style.borderRadius = "3px"
        }
    })
})

btn.addEventListener("click" , function(){
    elPrice.innerHTML = Totalprice
})

