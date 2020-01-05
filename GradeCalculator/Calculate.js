
function buttonClick(){
        var total=0,totalCredit=0,i;
        console.log("Clicked");
        for(i=1;i<=10;i++)
        {
                if(document.getElementById("Credit"+i).value && document.getElementById("Grade"+i).value)
                { totalCredit=+totalCredit+ +document.getElementById("Credit"+i).value
                  total=total+document.getElementById("Credit"+i).value * checkGradeGPA(document.getElementById("Grade"+i).value)
                }

        }
        console.log(total)
        console.log(totalCredit)
        console.log(total/totalCredit)

document.getElementById("Result").innerHTML ="Your Grade:"+(total/totalCredit).toFixed(2);
document.getElementById("TotalCredits").innerHTML="Total Credits : "+totalCredit;
}

function checkGradeGPA(grade)
{
  if(grade==='S Grade')
    return 10
  else if(grade==='A Grade')
    return 9  
  else if(grade==='B Grade')
    return 8 
  else if(grade==='C Grade')
    return 7  
  else if(grade==='D Grade')
    return 6 
  else if(grade==='E Grade')
    return 5 
  else if(grade==='F Grade')
    return 4 
}

function clr(){
  console.log("Called")
  var i;
  for(i=1;i<=10;i++)
  {
    document.getElementById("Credit"+i).value=null;
    document.getElementById("Grade"+i).value="";
  }

}