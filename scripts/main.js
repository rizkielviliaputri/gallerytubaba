/*========== Carousel ==========*/
$(document).ready(function () {
    // Activate Carousel
    $("#myCarousel").carousel({
        interval: 5000,
        touch: true,
    })

    // Enable Carousel Indicators
    $(".item1").click(function () {
        $("#myCarousel").carousel(0)
    })
    $(".item2").click(function () {
        $("#myCarousel").carousel(1)
    })
    $(".item3").click(function () {
        $("#myCarousel").carousel(2)
    })
    $(".item4").click(function () {
        $("#myCarousel").carousel(3)
    })

    $('#video').bind('contextmenu', function (e) {
        return false
    })

    // // Enable Carousel Controls
    // $(".left").click(function () {
    //     $("#myCarousel").carousel("prev")
    // })
    // $(".right").click(function () {
    //     $("#myCarousel").carousel("next")
    // })

    // Animated on Scroll
    function aos_init() {
        AOS.init({
            duration: 1000,
            once: true,
            mirror: true
        });
    }
    aos_init();
})





/*========== Tab Sambutan ==========*/
function openCity(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}
// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();