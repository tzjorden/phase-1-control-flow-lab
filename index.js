function scuberGreetingForFeet(distance){
    if(distance <= 400){
      return "This one is on me!";
    }
    if(distance >= 2000 && distance <=2499){
        return "I will gladly take your thirty bucks.";
      }
    if(distance > 2500){
          return "No can do.";
        }
}
  
function ternaryCheckCity(){
    // Write your code here!
    
    let city = "NYC";
    
    console.log((city = "NYC") ? "Ok, sounds good." : "No go.");
    
    




}
  
function switchOnCharmFromTip(){
    // Write your code here!
    //let generous;
    //let notGenerous;

    switch(tip){
        case 'generous' :
            return "Thank you so much.";
            break;
        case 'notGenerous' :
            return "Thank you.";
            break;
        default :
            return "Bye.";
    }

  
}

