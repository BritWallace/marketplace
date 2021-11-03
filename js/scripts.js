$(document).ready(function() {
  $("#formOne").submit(function() {
    $(".fullName").append("input#fullName");
    $(".address").append("#address");
    $(".animal").append("blah blah");
    $(".exclamation").append("blah blah");
    $(".verb").append("blah blah");
    $(".noun").append("blah blah");

    $("#story").show();
    event.preventDefault();
  });
});
  


