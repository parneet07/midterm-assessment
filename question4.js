   let name='parneet'
   let gradesObtained=function(score){
        if(score<50){
            // function used to calculate the grade of student
            return"Fail"
        }
        if(score>50&&score<=59){
            return"D"
        }
        if (score>60&&score<=69){
            return"C"
        }
        if (score>=70&&score<=79){
            return"B"
        }
        if (score>=80&&score<=100){
            return"A"
        }
    }
    let score=74;
    console.log(name + gradesObtained(score));
    
