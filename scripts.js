/* numOfArms= number of arms lmao
    numOfLegs= bro. take a guess
    bodyHeight affects bottom value of legs
    bodyWidth affects spacing of leg
    bodyPlan = 1, 2, or 3
        > 1=biped
        > 2=quadruped: change arms to display:none
*/
var numOfArms=1   
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

// function adjustArms(){
//     numOfArms=parseInt($("#armHandle").val())
//     var armClone=$("#arms").clone(true)
//     var armTop=parseInt($("#arms").css("top").slice(0,-2))
    
//     var arms = armClone.find(".arm")

//     for (i = 0; i < arms.length; i++) {
//         arms[i].top = (armTop-100)+"px"
//     }

//     // armClone.children[0].css("top", (armTop-0)+"px")
//     armClone.appendTo("#body")
// }

//SLIDERS
$(function(){
    adjustWidth()
    adjustHeight()
    $("#height").change(function(){
        adjustHeight()
    })
    
    $("#width").change(function(){
        adjustWidth()
    })
    
    // $("#armHandle").change(function(){
    //     adjustArms()
    // })
})
