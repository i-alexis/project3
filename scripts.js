/* numOfArms= number of arms lmao no shit
    numOfLegs= take a guess.
    bodyHeight affects bottom value of legs
    bodyWidth affects spacing of leg
    bodyPlan = 1, 2, or 3
        > 1=biped
        > 2=quadruped: change arms to display:none
*/



$(function(){
    var bodyHeight=250
    var bodyWidth=100
    var limbWidth=50
    $("#height").change(function(){
        bodyHeight=($("#height").val()) + "px"
        $("#body").css("height", bodyHeight)
    })
    
    $("#width").change(function(){
        bodyWidth=parseInt($("#width").val())
        armPos=(bodyWidth)+"px"
        legPos=(bodyWidth-limbWidth)+"px"
        $("#body").css("width", bodyWidth+"px")
        $("#arm2").css("left",armPos)
        $("#leg2").css("left",legPos)
        console.log(armPos)
        // armPos=(bodyWidth+limbWidth)+"px"
        // $("#body").css("width", bodyWidth+"px")
        // $("#arm2").css("left",armPos)
        // console.log(armPos)
    })
})
