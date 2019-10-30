$(document).ready(function () {
    $(".buttons").click(function () {
        //todo: indentify common code DONE
        //todo: indentify what params are different the "common" code DONE
        var value = $(this).attr("data-filter");
         var dataFilterArray = ["all", "invitation", "logos", "posters", "advertisements"];
         var serviceDivClassName = [".imageTextBox", ".invi", ".logo", ".poster", ".advert"];
        function sortServices(commonValue, dataFilterArray, serviceDivClassName) {
 if (commonValue === dataFilterArray) {
        $(serviceDivClassName).show("1000")
} else {
        $(serviceDivClassName).not("." + commonValue).hide("1000");
        $(serviceDivClassName).filter("." + commonValue).show("1000");
    }
}
sortServices(value, dataFilterArray[0], serviceDivClassName[0]);
sortServices(value, dataFilterArray[1], serviceDivClassName[1]);
sortServices(value, dataFilterArray[2], serviceDivClassName[2]);
sortServices(value, dataFilterArray[3], serviceDivClassName[3]);
sortServices(value, dataFilterArray[4], serviceDivClassName[4]);
    })
});


//         if (value === "all"){
//             $(".imageTextBox").show("1000")
//         }else{
//             $(".imageTextBox").not("."+value).hide("1000");
//             $(".imageTextBox").filter("."+value).show("1000");
//         }
//         if (value === "invitation"){
//             $(".invi").show("1000")
//         }else{
//             $(".invi").not("."+value).hide("1000");
//             $(".invi").filter("."+value).show("1000");
//         }
//         if (value === "logos"){
//             $(".logo").show("1000")
//         }else{
//             $(".logo").not("."+value).hide("1000");
//             $(".logo").filter("."+value).show("1000");
//         }
//         if (value === "posters"){
//             $(".poster").show("1000")
//         }else{
//             $(".poster").not("."+value).hide("1000");
//             $(".poster").filter("."+value).show("1000");
//         }
//         if (value === "advertisements"){
//             $(".advert").show("1000")
//         }else{
//             $(".advert").not("."+value).hide("1000");
//             $(".advert").filter("."+value).show("1000");
//         }
//             $(this).addClass('active').siblings().removeClass('active');
