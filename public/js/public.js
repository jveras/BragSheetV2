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