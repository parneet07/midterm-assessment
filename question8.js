var string="pparnneeett"
function removeDuplicates(array) {
    var newarray=[];
    for(i=0;i<array.length;i++){
        if (newarray.indexOf(array[i])===-1){
            newarray.push(array[i]);
        }
    }
    return newarray;
    
  };
  var newarray=removeDuplicates(string);
  console.log(string);
  console.log(newarray);
  
  

