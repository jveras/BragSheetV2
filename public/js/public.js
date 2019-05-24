
//Register JavaScipt
$(".main").hide();
$(".logo").hide();



function schoolSelectionFunction (){
   var schooling =  document.querySelector('#selectSchool');
   //var schoolOpt = 
}


$("#dvStudent").hide();
var data = {
    studentSchool: "",
    studentEmail: "",
    studentOsis: "",
    studentFirstName: "",
    studentMiddleName: "",
    studentLastName: "",
    studentGrade: "",
    studentGPA: "",
    studentGender: ""
};


function part2() {
    var errors = [];
    var studentSchool = $(".selectSchool").val();
    var partOneStatus = true;
    if (studentSchool > 0) {
        
    } else {
        partOneStatus = false;
        errors.push("School is not selected");
        console.log(studentSchool + " Part 1");
    }
    var studentEmail = $(".email").val();
    if (studentEmail.length > 0) {
        
    } else {
        partOneStatus = false;
        errors.push("Email is empty");
        console.log(studentEmail + " Part 2");
    }
    var studentOsis = $(".osis").val();
    var studentConfirmOsis = $(".confirmOsis").val();
    if (studentOsis.length === 9) {
        if (studentConfirmOsis === studentOsis) {
            
        }else {
            errors.push("Osis Does not match");
            partOneStatus=false;
        }
    } else {
        partOneStatus = false;
        errors.push("Osis is not the correct length");
        console.log(studentOsis + " " + studentConfirmOsis + " Part 3")
    }
    if (partOneStatus) {
        $("#dvStudent").show();
        $("#basicInfo").hide();
        data["studentSchool"] = studentSchool;
        data["studentEmail"] = studentEmail;
        data["studentOsis"] = studentOsis;
    } else {
        var errorMsg = "";
        for(var i = 0;i<errors.length; i++){
            
            var errorNum= i+1;
            errorMsg += "Error "+errorNum+": "+errors[i]+ '\r\n';
        }
        alert('Fix the following errors: \r\n'+errorMsg);
    }

};

function submit(){
    var errors = [];
    var partTwoStatus = true;
    var studentFirstName = $(".fname").val();
        if(studentFirstName.length > 0){

        }else{
            partTwoStatus = false;
            errors.push("Fill in first name");
        }
    var studentMiddleName = $(".mname").val();
        
    var studentLastName = $(".lname").val();
    if(studentLastName.length > 0){
        
    }else{
        partTwoStatus = false;
        errors.push("Fill in last name");
    }
    var studentGrade = $(".grade").val();
    if(studentGrade > 0){
        
    }else{
        partTwoStatus = false;
        errors.push("Fill in your Grade level");
    }
    var studentGPA = $(".gpa").val();
if(studentGPA.length > 0 ){
    if(studentGPA >= 0&& studentGPA <=4){
       
    }else{
        partTwoStatus = false;
        errors.push("Make sure it is in 4.0 scale ");
    }
}else{
    partTwoStatus = false;
    errors.push("Fill in GPA ");
}
    var studentGender = $(".gender").val();
    var StudentWritesGender = false;
    if(studentGender > 0){
        if(studentGender == 3){
            StudentWritesGender = true;
            var studentGenderWritten = $(".writeGender").val();
            if(studentGenderWritten.length > 0 ){

            }else{
                partTwoStatus = false;
                errors.push("Fill in your written Gender");
            }
        }else{
            
        }
    }else{
        partTwoStatus = false;
        errors.push("Select a gender");
    }

    if(partTwoStatus){
        alert("Finished")
        data["studentFirstName"] = studentFirstName;
            if(studentMiddleName !== undefined){
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
        

            fetch("http://localhost:8081/Account/Register", {
                method: 'POST', // or 'PUT'
                body: JSON.stringify(data), // data can be `string` or {object}!
                headers:{
                  'Content-Type': 'application/json'
                }
            }).then(res => { 
                  return res.json(); 
            }).then(response => 
                console.log('Success:', JSON.stringify(response)
            )).catch(error => console.error('Error:', error));



    }else{
        var errorMsg = "";
        for(var i = 0;i<errors.length; i++){
            
            var errorNum= i+1;
            errorMsg += "Error "+errorNum+": "+errors[i]+ '\r\n';
        }
        alert('Fix the following errors: \r\n'+errorMsg);
    }

}

//Profile JavaScript
$(".genderDiv").hide();

$("#gender").on("change", function() {

    if (this.value === "3") {
        $(".genderDiv").show();
        
    } else {
        $(".genderDiv").hide();
    }
});

var table = document.getElementById("table");

var count = $("#table tr").length;

function add(){

  var row = table.insertRow(table.length);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  cell1.innerHTML = '<input id="word" type="text" placeholder="Word" class="form-control" />';
  cell2.innerHTML = '<textarea id="des" cols="30" rows="2" placeholder="Description" class="form-control"></textarea>';
  
  console.log(count);
  
}


function remove() {
  
    document.getElementById("table").deleteRow(count);
    
    console.log(table.length);
    
  }
  
  $('#myModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
  })

  