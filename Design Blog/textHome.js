$(document).ready(function () {
    function createHtmlServices() {
        var textHtml = "";
        for (var i = 0; i < textHome.length; i++) {
            textHtml += '<div class="services">';
            textHtml += '<div class="servicesHeader">';
            textHtml += '<i class="'+ textHome[i].icon +'"></i>';
            textHtml += '<h2 class="textTitle">' + textHome[i].title + '</h2>';
            textHtml += '</div>';
            textHtml += '<p class="descript">' + textHome[i].shortDesc + '</p>';
            textHtml += '</div>';
        }
        $(".serviceContainer").html(textHtml)
    }
    createHtmlServices();
});

