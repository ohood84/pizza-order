var smallPrice=6;medPrice=8;largePrice=10;
function  PizzaOrders() {
  this.pizzas=[];
  this.totalCost=0;
  this.name;
}



PizzaOrders.prototype.addPizza=function(pizza){
  this.pizzas.push(pizza);

}

var userPizzaOrders= new PizzaOrders();
function Pizza(){
  this.toppingSauce=[];
  this.toppingVeggi=[];
  this.toppingMeat=[];
  this.size;
  this.cost;
}


Pizza.prototype.addToppingandSize=function(userMeatTopping ,userSauceTopping,userVeggiTopping,size,quantity){
  this.toppingSauce=userSauceTopping;
  this.toppingVeggi=userVeggiTopping;
  this.toppingMeat=userMeatTopping;
  this.size=size;
  this.cost;
  this.quantity=quantity;
}

Pizza.prototype.finalCost=function(){
  // var cost;
  switch (this.size) {
    case"Large":
      return this.cost=this.quantity*largePrice;
      break;
    case"Medium":
      return this.cost=this.quantity*medPrice;
      break;
    case"Small":
      return this.cost=this.quantity*smallPrice;
      break;

  }
  alert(this.cost)
   // $("#pizza-orders").append("cost is :"+ this.cost);
 }
var textOrder=function(pizza){
  $("#pizza-orders").append("Order Contents :<hr>"+
     pizza.quantity+"x"+pizza.size+" Your Own Pizza<br>"+pizza.name+"<hr>"+"Total is "+"$"+(pizza.finalCost()).toFixed(2));

}


 var textTopping=function(pizza){

   $("#pizza-orders").append("<ul>your Sauce topping:");
      pizza.toppingSauce.forEach(function(topp){
        $("#pizza-orders").append("<li>"+topp+"</li>");
      });
   $("#pizza-orders").append("</ul>");


    $("#pizza-orders").append("<ul>your Meat topping:");
      pizza.toppingMeat.forEach(function(topp){
             $("#pizza-orders").append("<li>"+topp+"</li>");
      });
    $("#pizza-orders").append("</ul>");


     $("#pizza-orders").append("<ul>your Veggies topping:");
        pizza.toppingVeggi.forEach(function(topp){
          $("#pizza-orders").append("<li>"+topp+"</li>");
        });
      $("#pizza-orders").append("</ul>");

 }


$(document).ready(function(){
     $("form#pizza-top").submit(function(event){
         var userSauceTopping=[];
         var userVeggiTopping=[];
         var userMeatTopping=[];
         var name,size;

          $("input:checkbox[name=sauce]:checked").each(function(){
            var sauce1 = $(this).val();
            userSauceTopping.push(sauce1);
          });

          $("input:checkbox[name=meat]:checked").each(function(){
            var meat1= $(this).val();
            userMeatTopping.push(meat1);
          });

          $("input:checkbox[name=Veggies]:checked").each(function(){
            var veggi = $(this).val();
            userVeggiTopping.push(veggi);
          });

          name=$("input#name").val();
          size=$("input:radio[name=size]:checked").val();
           var quantity=parseInt($("input#quantity").val());


          var userPizza=new Pizza();
           userPizza.addToppingandSize(userMeatTopping ,userSauceTopping,userVeggiTopping,size,quantity);
            textTopping(userPizza);
            textOrder(userPizza);
            userPizza.finalCost();

         userPizzaOrders.addPizza(userPizza);
          event.preventDefault();
          resetFields();
    });

   $("#order-more").click(function(){


   })

    function resetFields(){
      $("#pizza-top")[0].reset();
      // $("#pizza-orders").empty();
    }



    // $("#result").slideDown();
   });
