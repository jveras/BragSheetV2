//Register JavaScipt
$(".main").hide();
$(".logo").hide();
var logo = ["aoit.png", "urban.png", "brooklyn.png", "CH.png", "multi.png"];

$("#selectSchool").on("change", function() {
    console.log(this.value);
    if (this.value == 0) {
        $(".main").hide();
        $(".logo").hide();
    } else if (this.value == 1) {
        $(".selectSchoolCounselors").val(this.value);
        $(".main").show();
        $(".logo").attr("src", "/img/" + logo[this.value - 1]);
        $(".logo").css("height", "200px", );
        $(".logo").show();
    } else if (this.value == 2) {
        $(".selectSchoolCounselors").val(this.value);
        $(".main").show();
        $(".logo").attr("src", "/img/" + logo[this.value - 1]);
        $(".logo").css("height", "200px", );
        $(".logo").show();
    } else if (this.value == 3) {
        $(".selectSchoolCounselors").val(this.value);
        $(".main").show();
        $(".logo").attr("src", "/img/" + logo[this.value - 1]);
        $(".logo").css("height", "200px", );
        $(".logo").show();
    } else if (this.value == 4) {
        $(".selectSchoolCounselors").val(this.value);
        $(".main").show();
        $(".logo").attr("src", "/img/" + logo[this.value - 1]);
        $(".logo").css("height", "200px", );
        $(".logo").show();
    } else if (this.value == 5) {
        $(".selectSchoolCounselors").val(this.value);
        $(".main").show();
        $(".logo").attr("src", "/img/" + logo[this.value - 1]);
        $(".logo").css("height", "200px", );
        $(".logo").show();
    }
});

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
    var studentSchool = $(".selectSchool").val();
    var partOneStatus = false;
    if (studentSchool > 0) {
        partOneStatus = true;
    } else {
        partOneStatus = false;
        console.log(studentSchool + " Part 1");
    }
    var studentEmail = $(".email").val();
    if (studentEmail.length > 0) {
        partOneStatus = true;
    } else {
        partOneStatus = false;
        console.log(studentEmail + " Part 2");
    }
    var studentOsis = $(".osis").val();
    var studentConfirmOsis = $(".confirmOsis").val();
    if (studentOsis.length === 9) {
        if (studentConfirmOsis === studentOsis) {
            partOneStatus = true;
        }
    } else {
        partOneStatus = false;
        console.log(studentOsis + " " + studentConfirmOsis + " Part 3")
    }
    if (partOneStatus) {
        $("#dvStudent").show();
        $("#basicInfo").hide();
        data["studentSchool"] = studentSchool;
        data["studentEmail"] = studentEmail;
        data["studentOsis"] = studentOsis;
    } else {
        alert("Missing information");
    }

};

//Profile JavaScript
$(".writeGender").hide();
console.log("Hit");
$("#gender").on("change", function() {

    if (this.value === "3") {
        $(".writeGender").show();
        console.log("testing");
    } else {
        $(".writeGender").hide();
    }
});