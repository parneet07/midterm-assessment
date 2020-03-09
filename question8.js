var string=process.argv[2]
function removeDuplicates(array) {
    var newarray=[];
    for(i=0;i<array.length;i++){
        if (newarray.indexOf(array[i])===-1){
            newarray.push(array[i]);
        }
    }
    return array.filter((a, b) => array.indexOf(a) === b)
    
  };
  var newarray=removeDuplicates(string);
  console.log(string);
  console.log(removeDuplicates);
  
  

