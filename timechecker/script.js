
var isNumber = (number) => {
    return !isNaN(number);
}

var checkInputNumber = (day, month, year) => {
    if(!isNumber(day)){
        alert("Input data for Day is incorrect format!");
        return false;        
    }

    if(!isNumber(month)){
        alert("Input data of Month is incorrect format");
        return false;        
    }

    if(!isNumber(year)){
        alert("Input data of Year is incorrect format");
        return false;        
    }   
    return true; 
}

var isInRangeDay = (day)=>{
    if ( day < 1 || day > 31) {
        return false;
    }
    return true;
}

var isInRangeMonth = (month) =>{
    if (month < 1 || month > 12) {
        return false;
    }
    return true;
}

var isInRangeYear = (year) =>{
    if (year < 1000 || year >3000) {
        return false;
    }
    return true;
}

var isLeapYear = (year) => {
    return (year%4==0)?true:false;
}

var isValidDayInFebruary = (day, year) =>{
    var limitDay = 28;
    if(isLeapYear(year)){
        limitDay = 29; 
    }
    return day>limitDay?false:true;
}

var announceMessage = (messageErr)=>{
    alert(messageErr);
}

function validateInput(day, month, year) {
    if(day==null || month==null || year==null || day=="" || month=="" || year==""){
        announceMessage("dd/mm/yyyy is NOT correct date time!");  
        return;              
    }

    if(!checkInputNumber(day,month,year)){
        return;
    }
   // alert(day+" "+month+" " + year);
    if(!isInRangeDay(day)){
        announceMessage("Input data for Day is out of range!");
        return;
    }

    if(!isInRangeMonth(month)){
        announceMessage("Input data for Month is out of range!");
        return;
    }    
    
    if(!isInRangeYear(year)){
        announceMessage("Input data for Year is out of range!");
        return;
    } 
    
    if(month==2){
        if(!isValidDayInFebruary(day,year)){
            announceMessage("dd/mm/yyyy is NOT correct date time!");  
            return;         
        }
    }
    
    announceMessage("dd/mm/yyyy is correct date time!");
}


module.exports = {isInRangeDay, isInRangeYear};
// document.getElementById("checkBtn").addEventListener("click", function() {
//     var day = document.getElementById("day").value;
//     var month = document.getElementById("month").value;
//     var year = document.getElementById("year").value;
//     validateInput(day,month,year);
// });

// document.getElementById("clearBtn").addEventListener("click", function() {
//     document.getElementById("day").value = "";
//     document.getElementById("month").value = "";
//     document.getElementById("year").value = "";
// });
