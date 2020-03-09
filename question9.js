const str="Avengers"
const whetherPalindrome = (inStr)=> {
    //inStr is used to find the position of function
    inStr=inStr.toLowerCase()
for(let z=0; z<inStr.length;z++){
    if(inStr[z]!==inStr[inStr.length -1 -z]){
        return false
    }
}
return true
}
console.log(whetherPalindrome(str));