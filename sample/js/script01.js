$(function(){

  let students = ["田中","山田","松本","山本","沢田"]

  $("#button00").on("click",function(){
    console.log(students)
  })

  $("#button01").on("click",function(){
    $("#content").text("最初は" + students[0] + "で全員で" + students.length + "人です");
  })

  $("#button02").on("click",function(){
    $("#content").text(students[2]);
  })
 
  $("#button03").on(click,function(){
    $("#content").text(student[student.length-1]);
  })

  $("#button04").on(click,function(){
    $("#content")
  })

})