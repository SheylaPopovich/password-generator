
//SOLVED ACTIVITES 
console.log(process.argv);

var myArgs= process.argv

function letGo(){
    if (myArgs[2] == myArgs[3]){

    console.log(true);
}else{

    console.log(false);
}
}
letGo() 


//********* how to get numbers to show by index
// argv.forEach((val, index) => {
//     console.log(`${index}: ${val}`);
//   });
