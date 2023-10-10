// Code your solution in this file!
let distanceFromHqInBlocks = function(someValue){
    if (someValue > 42){
        return someValue - 42;
    }else{
        return Math.abs(someValue - 42);
    }


}
function distanceFromHqInFeet(someValue){
    console.log (distanceFromHqInBlocks(someValue));
    return distanceFromHqInBlocks(someValue)*264
}
function distanceTravelledInFeet(start, destination){
    if(destination>42){
        let feet=((destination-start)*264)
        return feet
    }else{
        let feet =((start-destination)*264)
        return Math.abs(feet)
    }
}
function calculatesFarePrice(start, destination) {
    let distance = distanceFromHqInFeet(start, destination)
    let fare =0
    if(distance <=400){
        return fare
    }
    else if(distance > 400 && distance<=2000) {
        distance = distance-400;
        fare= distance * 0.02;
        return fare

    }
            
        
    else if (distance>2000 && distance<=2499){
        let fare =25
        return fare
    }
            
        
    else if (distance>=2500){
        //let fare = 0; 
        let destination=25
        //et location=destination+1
        return "cannot travel that far"

    }
            
        
    
}
console.log(calculatesFarePrice(4,11))