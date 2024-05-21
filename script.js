function myfun() {

    var nowdate = Date.now();
    var val = document.getElementById("dob").value;
    var dob = new Date(val);
    var currentdate = new Date(nowdate);
    var pics= document.getElementById("pic");
    if (dob > currentdate) {
        document.getElementById("warning").innerHTML = "* Please Enter a valid Date Of Birth....!"
        document.getElementById("age").innerHTML = "";
        document.getElementById("level").innerHTML = "";
        
        pics.setAttribute('src','oops.png');

    }
    else if(val=="")
        {
            document.getElementById("warning").innerHTML = "* Please Enter your Date Of Birth in input field first....."
        document.getElementById("age").innerHTML = "";
        document.getElementById("level").innerHTML = "";
        pics.setAttribute('src','oops.png');
        }
    else {


        var nowyear = currentdate.getFullYear();
        var nowmonth = currentdate.getMonth();
        var nowdate = currentdate.getDate();
        var dobyear = dob.getFullYear();
        var dobmonth = dob.getMonth();
        var dobdate = dob.getDate();
        var ageinyears = nowyear - dobyear;
        if (nowmonth < dobmonth) {
            ageinyears -= 1;
            var ageinmonths = nowmonth + 12 - dobmonth;
        }
        else {
            ageinmonths = nowmonth - dobmonth;
        }
        if (nowdate < dobdate) {
            ageinmonths -= 1;
            var ageindays = 31 + nowdate - dobdate;
        }
        else {
            var ageindays = nowdate - dobdate;
        }
        if (ageinmonths < 0) {
            ageinmonths = 11;
            ageinyears -= 1;
        }
        document.getElementById("warning").innerHTML = "";
        document.getElementById("age").innerHTML = "You are " + ageinyears + " years, " + ageinmonths + " months and " + ageindays + " days old";
        if (ageinyears == 0 && ageinmonths == 0 && ageindays > 0) {
            if (ageindays == 1) {
                document.getElementById("age").innerHTML = "You are " + ageindays + " day old";
            }
            else
                document.getElementById("age").innerHTML = "You are " + ageindays + " days old";
        }
        else if (ageinyears == 0 && ageinmonths > 0 && ageindays > 0) {
            if (ageinmonths == 1) {
                if (ageindays == 1) {
                    document.getElementById("age").innerHTML = "You are " + ageinmonths + " month and " + ageindays + " day old";
                } else
                    document.getElementById("age").innerHTML = "You are " + ageinmonths + " month and " + ageindays + " days old";
            }
            else
            {
                if (ageindays == 1) {
                    document.getElementById("age").innerHTML = "You are " + ageinmonths + " months and " + ageindays + " day old";
                } else
                    document.getElementById("age").innerHTML = "You are " + ageinmonths + " months and " + ageindays + " days old";
            }
                
        }
        else if (ageinyears > 0 && ageinmonths > 0 && ageindays > 0) {
            if (ageinyears == 1) {
                if (ageinmonths == 1) {
                    if (ageindays == 1) {
                        document.getElementById("age").innerHTML = "You are " + ageinyears + " year, " + ageinmonths + " month and " + ageindays + " day old";
                    }
                    else
                        document.getElementById("age").innerHTML = "You are " + ageinyears + " year, " + ageinmonths + " month and " + ageindays + " days old";
                } else {
                    if (ageindays == 1) {
                        document.getElementById("age").innerHTML = "You are " + ageinyears + " year, " + ageinmonths + " months and " + ageindays + " day old";
                    }
                    else
                        document.getElementById("age").innerHTML = "You are " + ageinyears + " year, " + ageinmonths + " months and " + ageindays + " days old";
                }
            }
            else {
                if (ageinmonths == 1) {
                    if (ageindays == 1) {
                        document.getElementById("age").innerHTML = "You are " + ageinyears + " years, " + ageinmonths + " month and " + ageindays + " day old";
                    }
                    else
                        document.getElementById("age").innerHTML = "You are " + ageinyears + " years, " + ageinmonths + " month and " + ageindays + " days old";
                } else {
                    if (ageindays == 1) {
                        document.getElementById("age").innerHTML = "You are " + ageinyears + " years, " + ageinmonths + " months and " + ageindays + " day old";
                    }
                    else
                        document.getElementById("age").innerHTML = "You are " + ageinyears + " years, " + ageinmonths + " months and " + ageindays + " days old";
                }
            }
        }
        else if (ageinyears > 0 && ageinmonths > 0 && ageindays == 0) {
            if (ageinyears == 1) {
                if (ageinmonths == 1) {
                    document.getElementById("age").innerHTML = "You are " + ageinyears + " year and " + ageinmonths + " month old";
                } else
                document.getElementById("age").innerHTML = "You are " + ageinyears + " year and " + ageinmonths + " months old";
            }
            else 
            {
                if (ageinmonths == 1) {
                    document.getElementById("age").innerHTML = "You are " + ageinyears + " years and " + ageinmonths + " month old";
                } else
                document.getElementById("age").innerHTML = "You are " + ageinyears + " years and " + ageinmonths + " months old";
            }
            
            
        }
        else if (ageinyears > 0 && ageinmonths == 0 && ageindays > 0) {
            if (ageinyears == 1) {
                if (ageindays == 1) {
                    document.getElementById("age").innerHTML = "You are " + ageinyears + " year and " + ageindays + " day old";
                } else
                document.getElementById("age").innerHTML = "You are " + ageinyears + " year and " + ageindays + " days old";
            }
            else 
            {
                if (ageindays == 1) {
                    document.getElementById("age").innerHTML = "You are " + ageinyears + " years and " + ageindays + " day old";
                } else
                document.getElementById("age").innerHTML = "You are " + ageinyears + " years and " + ageindays + " days old";
            }
            
        }
        else if (ageinyears > 0 && ageinmonths == 0 && ageindays == 0) {
            if(ageinyears==1)
                {
                    document.getElementById("age").innerHTML = "You are " + ageinyears + " year old";
                }
                else
            document.getElementById("age").innerHTML = "You are " + ageinyears + " years old";
        }
        else if (ageinyears == 0 && ageinmonths == 0 && ageindays == 0) {
            document.getElementById("age").innerHTML = " Hey..! You born today ......hurray....!";
        }
        if(ageinyears==0)
            {
                pics.setAttribute('src','baby.png');
                document.getElementById("level").innerHTML = "Age level : Baby Child";
            }
            else if(ageinyears>0&&ageinyears<=12)
                {
                    pics.setAttribute('src','child.png');
                    document.getElementById("level").innerHTML = "Age level : Child";
                }
            else if(ageinyears>13&&ageinyears<=20)
                {
                    pics.setAttribute('src','adulscent.png');
                    document.getElementById("level").innerHTML = "Age level : Teenager";
                }
            else if(ageinyears>20&&ageinyears<=60)
                {
                    pics.setAttribute('src','adult.png');
                    document.getElementById("level").innerHTML = "Age level : Adulthood";
                }
            else if(ageinyears>60)
                {
                    pics.setAttribute('src','senior.png');
                    document.getElementById("level").innerHTML = "Age level : Senior citizen";
                }
               

    }
    let pos=0;
    let id=null;
    clearInterval(id);
    id=setInterval(frame,20);
    function frame(){
        if(pos==100)
            {
                clearInterval(id);
            }
        else{
            pos++;
            pics.style.opacity=pos+"%";
        }
    }

}