// Code your solution in this file!
const headQ = 42
const feet = 264

function distanceFromHqInBlocks(num){
    if (num > 42){
        return num - headQ;
    }else if (num < 42){
        return headQ - num;
    }
}
function distanceFromHqInFeet (num){
    return distanceFromHqInBlocks(num) * feet;
}
function distanceTravelledInFeet (headQ, num2){
    if (num2 > headQ){
        return (num2 - headQ)*feet;
    }else{
        return (headQ - num2)*feet;
    }
}
function calculatesFarePrice(start, destination){
    let calculatesFeet = distanceTravelledInFeet(start, destination);
    if (calculatesFeet < 400 ){
        return calculatesFarePrice = 0;
   } else if (calculatesFeet > 400 && calculatesFeet < 2000){
       calculatesFarePrice = calculatesFeet - 400;
       return (calculatesFarePrice * 0.02);
   }
   else if (calculatesFeet > 2000 && calculatesFeet < 2499){
       calculatesFarePrice = 25;
       return calculatesFarePrice;
   }
   else if (calculatesFeet > 2500){
       return 'cannot travel that far';
   }
}
