/* numOfArms= number of arms lmao
    numOfLegs= bro. take a guess
    bodyHeight affects bottom value of legs
    bodyWidth affects spacing of leg
    bodyPlan = 1, 2, or 3
        > 1=biped
        > 2=quadruped: change arms to display:none
*/
var numOfArms   
var bodyHeight=250
var bodyWidth=150
var limbWidth=45
let bodyPlan;

function adjustHeight(){
    bodyHeight=($("#height").val()) + "px"
    $("#body").css("height", bodyHeight)
    console.log($("#body").css("top"))
}

function adjustWidth(){
    bodyWidth=parseInt($("#width").val())
    armPos=(bodyWidth)+"px"
    legPos=(bodyWidth-limbWidth)+"px"
    $("#body").css("width", bodyWidth+"px")
    $("#arm2").css("left",armPos)
    $("#leg2").css("left",legPos)
    $("#head").css("left", (bodyWidth/2)-50)
    console.log(armPos)
}

//HEIGHT/WIDTH SLIDERS
$(function(){
    adjustWidth()
    adjustHeight()
    $("#height").change(function(){
        adjustHeight()
    })
    
    $("#width").change(function(){
        adjustWidth()
    })
})


$(function(){
    
    
})