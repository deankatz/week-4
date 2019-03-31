// spotcheck

$("#smallDiv").css("height", "100px")
$("#smallDiv").css("width", "100px")
$("#smallDiv").css("background-color", "#f39c12")
$("#smallDiv").on("click", function(){
    $(this).css("background-color", "red")
    $.get("http://data.nba.net/10s/prod/v1/2016/players.json", function(result){
        console.log(result)
    })
})
