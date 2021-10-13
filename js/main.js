
"use strict"

let food = [{
    name: "food",
    foodImg: "img/1.jpg",
    price:20,

},

{
    name: "food",
    foodImg: "img/2.jpg",
    price:20,
    
},

{
    name: "food",
    foodImg: "img/3.jpg",
    price:20,
    
},

{
    name: "food",
    foodImg: "img/4.jpg",
    price:20,
    
},

{
    name: "food",
    foodImg: "img/5.jpg",
    price:20,
    
},
{
    name: "food",
    foodImg: "./img/6.jpg",
    price:20,
    
},
{
    name: "food",
    foodImg: "./img/7.jpg",
    price:20,
    
},
{
    name: "food",
    foodImg: "./img/8.jpg",
    price:20,
    
},
{
    name: "food",
    foodImg: "./img/9.jpg",
    price:20,
    
},
{
    name: "food",
    foodImg: "./img/10.jpg",
    price:20,
    
},
{
    name: "food",
    foodImg: "./img/11.jpg",
    price:20,
    
},

{
    name: "food",
    foodImg: "./img/12.jpg",
    price:20,
    
}]



let thegallery = document.getElementById("gallery");
let html = "";
food.forEach(i => {
    html += `
    
    <div class="col">
    <div class="card shadow-sm rounded-3">
      <img src="${i.foodImg}" class="card-img-top" alt="food image">

      <div class="card-body">
        <p class="card-text text-primary h1"> ${i.name}</p>
        <p class="card-text pricing-card-title text-success h1"> ${"$" + i.price}</p>
        <button type="button" class="btn btn-lg btn-outline-info">View</button>
        <button type="button" class="btn btn-lg btn-outline-success">Add to Cart</button>
          
        </div>
      </div>
    </div>
  </div>
  
  `
  console.log(i)
  thegallery.innerHTML  =html
});


 