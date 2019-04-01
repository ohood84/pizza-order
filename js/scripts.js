var smallPrice=6;medPrice=8;largePrice=10,finalTotal=0,pizzacounter=0;
function PizzaOrders() {
  this.pizzas=[];
  this.totalCost=0;
  this.name;
}



PizzaOrders.prototype.addPizza=function(pizza){
  this.pizzas.push(pizza);
  pizzacounter++;
 alert("pizza number"+pizzacounter)
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
  alert("hello")
   // $("#pizza-orders").append("cost is :"+ this.cost);
 }

var textOrder=function(pizza){
  $("#pizza-orders").append("Order Contents :<hr>"+
     pizza.quantity+"x"+pizza.size+" Your Own Pizza<br>"+pizza.name+"<hr>"+"Sub Total is "+"$"+
     (pizza.finalCost()).toFixed(2));
     finalTotal+=pizza.finalCost();

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
     $("#addpizza").click(function(event){
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
             textOrder(userPizza);
             textTopping(userPizza);

             userPizza.finalCost();

         userPizzaOrders.addPizza(userPizza);
         //
         // $("ul#pizzashow").append("<li><span class='pizza1'>" + userPizza.size + "</span></li>");
         //  $(".pizza1").last().click(function() {
         //    $("#pizza-topping").show();
            // $("#show-contact h2").text(newContact.fullName());
            // $(".first-name").text(newContact.firstName);
            // $(".last-name").text(newContact.lastName);
            // $("ul#addresses").text("");
            // newContact.addresses.forEach(function(address) {
            //   $("ul#addresses").append("<li>" + address.street + ", " + address.city + " " + address.state + "</li>");
            // });
          // });

          event.preventDefault();
          resetFields();
    });



   $("#checkout").click(function(event){
     $("#pizza-orders").show();
     $("#pizza-orders").append("Total is $:<br>"+(finalTotal).toFixed(2));

     // $("ul#Orders Contents").text("");
     // userPizzaOrders.pizzas.forEach(function(pizza) {
     //    $("ul#").append("<li>" + pizza.cost+ "</li>");
     //    // debugger;
     // }
     //
     event.preventDefault();
       });

   // // })
   // $("#pizza-orders").hover(
   //   function(){
   //     $("#pizza-topping").slideDown();
   //   },
   //   function(){
   //      $("#pizza-topping").slideUp();
   //
   //   }
   // );

    function resetFields(){
      $("#pizza-top")[0].reset();
      // $("#pizza-orders").empty();
    }



    // $("#result").slideDown();
   });
