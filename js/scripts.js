$(document).ready(function(){

  var counter1=0,counter2=10,number;
  var pingpongarray=[];
   $(".rules").hover(
     function(){
       $(".rulesshow").slideDown();
     },
     function(){
        $(".rulesshow").slideUp();

     }
   );


    $("#pingpong").click(function(event){
      counter1=0,counter2=10;
      pingpongarray=[];
      $("#result").empty();
      $("#next").hide();
      $("#prev").hide();

      number=parseInt($("input#number").val());

      pingpong(number);

      if(number>10){
        $("#next").show();
        printarray();
        counter1+=10;

      }
      else{
        counter2=number;
        printarray();
      }

     event.preventDefault();

    });



    $("#next").click(function(){

        if((number-counter2)>=10){
          counter1=counter2;
          counter2+=10;
          $("#next").show();
          $("#prev").show();

          }
        else{
          counter1=counter2;
          counter2+=(number-counter2);
          $("#next").hide();
          $("#prev").show();
         }

        printarray();


    });

    $("#prev").click(function(){

     if((counter2-counter1)>=10){
          counter1-=10;
          counter2-=10;
          $("#next").show();
          if(counter1===0)
          {
            $("#prev").hide();
          }
           else{

               $("#prev").show();}
           }
     else{

          counter2-=(counter2-counter1);
           counter1-=10;
          $("#next").show();

           $("#prev").show();

        }
      printarray();
    });

    $("#result").slideDown();



      var pingpong=function(number){
        for(var index=1;index<=number;index++){
          findpingpong(index);
        }
      };



       var findpingpong =function(num){
            if((num%3===0)&&(num%5===0)){
             $("pingpongclass").show();
             pingpongarray[num]="pingpong";
               }
             else if (((num%3)===0)){

               pingpongarray[num] ="ping";
             }
              else if (((num%5)===0)){

                   pingpongarray[num]="pong";
                }
               else{

                   pingpongarray[num]=num;
               }
      };

      var printarray=function(){
        $("#result").empty();
        for (var i=counter1+1;i<=counter2;i++){
          $("ul#result").append("<li>"+pingpongarray[i]+"</li>");
          if(pingpongarray[i]==="ping"){
              $("li").last().addClass("ping");
          }
          else if(pingpongarray[i]==="pong"){
              $("li").last().addClass("pong");
          }
          else if(pingpongarray[i]==="pingpong"){
               $("li").last().addClass("pingpong");
               
          }

        }
      }


    });
