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
var inseam=280;
var bodyColor=10;
var eyeColor=0;
let bodyPlan;


//ATTRIBUTE FUNCTIONS
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
    $(".armCopy").children("#arm2").css("left",armPos)
    $("#leg2").css("left",legPos)
    $("#head").css("left", (bodyWidth/2)-50)
    console.log(armPos)
}

function adjustArms(){
   // while ($("#armCopy"))
        $(".armCopy").remove()
    // $("#armCopy").each(function(){
    //     this.remove()
    // });

    numOfArms=parseInt($("#armHandle").val())
    console.log(numOfArms)            
    var armInt = parseInt(bodyHeight.slice(0,-2))/5
    var actualArms=$(".armPair").length
    console.log(actualArms)
    
    if(numOfArms>1){    
        var armRaise = parseInt(11*numOfArms)       
        $(".armPair").children("#arm2").css({ "transform": "rotate(-"+ parseInt(armRaise) +"deg)"})
        $(".armPair").children("#arm1").css({ "transform": "rotate("+ parseInt(armRaise) +"deg)"})

        for (i=1; i < numOfArms; i++) {
            var $armClone = $("#arms").clone(true)
            $armClone.prop("class", "armCopy")
            console.log(bodyHeight)
            console.log(armInt)
            numOfArms=parseInt($("#armHandle").val())
            var armRaise = parseInt(10*numOfArms)
            console.log(armRaise)
            $armClone.children(".arm").css({ "top": (armInt*i)+"px" })
            console.log("rotate("+ parseInt(armRaise-(15*(i-1))) +"deg)")
            $armClone.children("#arm1").css({ "transform": "rotate("+ parseInt(armRaise-(10*(i-1))) +"deg)"})
            $armClone.children("#arm2").css({ "transform": "rotate(-"+ parseInt(armRaise-(10*(i-1))) +"deg)"})
            $armClone.appendTo("#body")
        }
    } else if(numOfArms==1){
        var armRaise = 10      
        $(".armPair").children("#arm2").css({ "transform": "rotate(-"+ parseInt(armRaise) +"deg)"})
        $(".armPair").children("#arm1").css({ "transform": "rotate("+ parseInt(armRaise) +"deg)"})
    }



    // var $armClone=$("#arms").clone(true))
    // $armClone.prop("class","armPair")
    // var armTop=parseInt($("#arms").css("top").slice(0,-2))
    // $(".armPair").children(".arm").css({"top":(armInt*numOfArms)+"px)"})
    // console.log(armInt*numOfArms)
    // var arms = $armClone.children() //.find(".arm")
    // console.log(arms)
    

    // arms.each(
    //     function() {
    //         console.log(this)
    //         console.log($(this).top)
    //     }
    // )
    // for (i = 0; i < arms.length; i++) {
    //     armTop=armTop-100
    //     thisArm = arms[i]
    //     console.log(thisArm)
    //     console.log(thisArm.top)
    //     arms[i].css("top", "-100px") //= (armTop)+"px"
    // }

    // $armClone.children[0].css("top", (armTop-0)+"px")
   
}

function adjustColor(){
    bodyColor=parseInt($("#colorHandle").val())+"deg"
    $("#body").css("filter", "hue-rotate("+bodyColor+")")
    console.log(bodyColor)
}

function adjustEyeColor(){
    eyeColor=parseInt($("#eyeHandle").val())+"deg"
    $(".eyes").css("filter", "hue-rotate("+eyeColor+")")
}

//SLIDERS
$(function(){
    adjustWidth()
    adjustHeight()
    adjustColor()
    $("#height").change(function(){
        adjustHeight()
        adjustArms()
    })
    
    $("#width").change(function(){
        adjustWidth()
    })
    
    $("#armHandle").change(function(){
        adjustArms()
    })
    $("#colorHandle").change(function(){
        adjustColor()
    })
})

