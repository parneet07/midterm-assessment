function reverse(string){

    var newstring="";
    for(var x=string.length-1;x>=0;x--){
        newstring +=string[x];
    }
    console.log(newstring);
    
};
reverse([4,5,6,7,8,9,0])

//the above function will reverse the string as we used length-1 as an alternative for .reverse