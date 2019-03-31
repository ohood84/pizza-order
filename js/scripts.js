
// function  PizzaOrders(){
//   var pizzas=[];
//   var name;
// }
//
// PizzaOrders.prototype.addPizza=function(pizza){
//   this.pizzas.push(pizza);
//
// }

function Pizza(){
  var toppingSauce=[];
  var toppingVeggi=[];
  var toppingMeat=[];
  var size;

}


Pizza.prototype.addToppingandSize=function(userMeatTopping ,userSauceTopping,userVeggiTopping,size){
  this.toppingSauce=userSauceTopping;
  this.toppingVeggi=userVeggiTopping;
  this.toppingMeat=userMeatTopping;
  this.size;
}

// Pizza.prototype.textTopping=function(){
  // $("#pizza-order").append("topping your pizza");
  // $("this.toppingMeat").each(function(meat){
  //   var meat = $(this).vals();
  //   userMeatTopping.push(meat);
  // });

// }

$(document).ready(function(){
  var userSauceTopping=[];
  var userVeggiTopping=[];
  var userMeatTopping=[];
  var name,size;

 // var userPizzaOrders= new PizzaOrders();
$("#pizza-orders").append("topping your pizza");

     $("form#pizza-top").submit(function(event){
        // $("#pizza-orders").append("hello");
        // alert("hello");
      $("input:checkbox[name=sauce]:checked").each(function(){
        var sauce1 = $(this).val();
        userSauceTopping.push(sauce1);
        $("#pizza-orders").append(sauce1+"<br>");
      });

      $("input:checkbox[name=meat]:checked").each(function(){
        var meat1= $(this).val();
        userMeatTopping.push(meat1);
        $("#pizza-orders").append(meat1+"<br>");
      });

      $("input:checkbox[name=Veggies]:checked").each(function(){
        var veggi = $(this).val();
        userVeggiTopping.push(veggi);
        $("#pizza-orders").append(veggi+"<br>");
      });

      name=$("input#name").val();
      size=$("input:radio[name=size]:checked").val();


      var userPizza=new Pizza();
       userPizza.addToppingandSize(userMeatTopping ,userSauceTopping,userVeggiTopping,size);

      // userPizzaOrders.addPizza(userPizza);
      event.preventDefault();

    });






    // $("#result").slideDown();
   });
