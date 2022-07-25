let actualTemp = 77;
let desireTemp = 80;

if(actualTemp < desireTemp){
    console.log("Run heat");
} else if (actualTemp === desireTemp){
    console.log("Standby");
} else {
    console.log("Run A/C");
}