const arrayList=process.argv[2];
let newArray=arrayList.split('');

console.log(newArray);
function  sumeven(newArray){
    let sum =0 ;
    for(let i=0;i<newArray.length;i++){
        if(newArray[i] % 1 === 0){
            sum +=Number(newArray[i])
        }
    }
    return sum;
}
console.log(sumeven(newArray));

    

