//Register JavaScipt
$(".main").hide();
$(".logo").hide();
var logo = ["aoit.png", "urban.png", "brooklyn.png", "CH.png", "multi.png"];

    $("#selectSchool").on("change", function(){
        console.log(this.value);
            if(this.value==0){
                $(".main").hide();
                $(".logo").hide();  
            }else if(this.value==1){
                $(".selectSchoolCounselors").val(this.value);
                $(".main").show();
                $(".logo").attr("src", "/img/" + logo[this.value - 1]);
                $(".logo").css("height", "200px" ,);
                $(".logo").show();
            }else if(this.value==2){
                $(".selectSchoolCounselors").val(this.value);
                $(".main").show();
                $(".logo").attr("src", "/img/" + logo[this.value - 1]);
                $(".logo").css("height", "200px" ,);
                $(".logo").show();
            }else if(this.value==3){
                $(".selectSchoolCounselors").val(this.value);
                $(".main").show();
                $(".logo").attr("src", "/img/" + logo[this.value - 1]);
                $(".logo").css("height", "200px" ,);
                $(".logo").show();
            }else if(this.value==4){
                $(".selectSchoolCounselors").val(this.value);
                $(".main").show();
                $(".logo").attr("src", "/img/" + logo[this.value - 1]);
                $(".logo").css("height", "200px" ,);
                $(".logo").show();
            }else if(this.value==5){
                $(".selectSchoolCounselors").val(this.value);
                $(".main").show();
                $(".logo").attr("src", "/img/" + logo[this.value - 1]);
                $(".logo").css("height", "200px" ,);
                $(".logo").show();
            }
    });

$("#dvStudent").hide();
var data = {
    studentSchool: "",
    studentEmail:"",
    studentOsis:"",
    studentFirstName:"",
    studentMiddleName:"",
    studentLastName:"",
    studentGrade:"",
    studentGPA:"",
    studentGender:""
};

function part2(){
    var studentSchool = $(".selectSchool").val();
    var partOneStatus = false;
        if(studentSchool>0){
            partOneStatus = true;
        }else{
            partOneStatus=false;
            console.log(studentSchool + " Part 1");
        }
    var studentEmail = $(".email").val();
        if(studentEmail.length > 0){
            partOneStatus = true;
        }else{
            partOneStatus=false;
            console.log(studentEmail + " Part 2");
        }
    var studentOsis = $(".osis").val();
    var studentConfirmOsis = $(".confirmOsis").val();
        if(studentOsis.length===9){
            if(studentConfirmOsis === studentOsis){
                partOneStatus = true;
            }
        }else{
            partOneStatus=false;
            console.log(studentOsis + " "+ studentConfirmOsis +" Part 3")
        }
        if(partOneStatus){
            $("#dvStudent").show();
            $("#basicInfo").hide();
            data["studentSchool"] = studentSchool;
            data["studentEmail"] = studentEmail;
            data["studentOsis"] = studentOsis; 
        }else{
            alert("Missing information");
        }
        
};

function submit(){
    var partTwoStatus = false;
    var studentFirstName = $(".fname").val();
        if(studentFirstName.length > 0){
            partTwoStatus = true;
        }else{
            partTwoStatus = false;
            console.log("part1");
        }
    var studentMiddletName = $(".mname").val();
        
    var studentLastName = $(".lname").val();
    if(studentLastName.length > 0){
        partTwoStatus = true;
    }else{
        partTwoStatus = false;
        console.log("part2");
    }
    var studentGrade = $(".grade").val();
    if(studentGrade > 0){
        partTwoStatus = true;
    }else{
        partTwoStatus = false;
        console.log("part3");
    }
    var studentGPA = $(".gpa").val();
    if(studentGPA > 0){
        partTwoStatus = true;
    }else{
        partTwoStatus = false;
        console.log("part4");
    }
    var studentGender = $(".gender").val();
    var StudentWritesGender = false;
    if(studentGender > 0){
        if(studentGender===3){
            StudentWritesGender = true;
            var studentGenderWritten = $(".writeGender").val();
            if(studentGenderWritten.length > 0 ){
                partTwoStatus = true;
            }else{
                partTwoStatus = false;
                console.log("part5");
            }
        }else{
            partTwoStatus = true;
        }
    }else{
        partTwoStatus = false;
        console.log("part6");
    }

    if(partTwoStatus){
        alert("Finished")
        data["studentFirstName"] = studentFirstName;
        if(studentMiddletName.length>0){
            data["studentMiddleName"] = studentMiddleName;
        }else{
            data["studentMiddleName"] = "";
        }
        data["studentLastName"] = studentLastName;
        data["studentGrade"] = studentGrade;
        data["studentGPA"] = studentGPA; 
        if(StudentWritesGender){
        data["studentGender"] = studentGender;
        data["StudentWritesGender"] = studentGenderWritten;
        }else{
            data["studentGender"] = studentGender;
        }
    }else{
        alert("Missing Info");
    }

}

//Profile JavaScript
$(".writeGender").hide();
console.log("Hit");
$("#gender").on("change", function(){
        
    if( this.value === "3") {  
        $(".writeGender").show();
        console.log("testing");
      }  else {
        $(".writeGender").hide();
  }
      });