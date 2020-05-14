// JavaScript file for Musician's Den
// Author: Tim Reckseen

// This function manages the thumbnail images of students
// These are organized in "rows" of 4, so turn on/off in 4 image increments
// Initially display 8 images
// This function will dynamically account for additional images added on teh home page as long as the images are assocaited to the md-thumbnail class
// This function does use JQuery
$(function () {
    $(".md-thumbnail").slice(0, 12).show();
    $("#loadMore").on('click', function (e) {
        e.preventDefault();
        $(".md-thumbnail:hidden").slice(0, 4).slideDown();
        if ($(".md-thumbnail:hidden").length == 0) {
            $("#loadMore").fadeOut('slow');
        }
        // disable scrolling for now
        //$('html,body').animate({
            //scrollTop: $(this).offset().top
        //}, 1500);
    });
});

// Modal Image Gallery
function onClick(element) {
    document.getElementById("img01").src = element.src;
    document.getElementById("modal01").style.display = "block";
    var captionText = document.getElementById("caption");
    captionText.innerHTML = element.alt;
}
    
// Change style of navbar on scroll
window.onscroll = function() {myFunction()};
function myFunction() {
    var navbar = document.getElementById("myNavbar");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        navbar.className = "w3-bar" + " w3-card" + " w3-animate-top" + " w3-white";
    } else {
        navbar.className = navbar.className.replace(" w3-card w3-animate-top w3-white", "");
    }

    var navbarMedium = document.getElementById("myMediumNavbar");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        navbarMedium.className = "w3-bar" + " w3-card" + " w3-animate-top" + " w3-white";
    } else {
        navbarMedium.className = navbarMedium.className.replace(" w3-card w3-animate-top w3-white", "");
    }
}
    
// Used to toggle the menu on small screens when clicking on the menu button
function toggleFunction() {
    var x = document.getElementById("navDemo");
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else {
        x.className = x.className.replace(" w3-show", "");
    }
}
    
// Tabbed Lesson plan menu   
// function openMenu(evt, menuName) {
//     var i, x, tablinks;
//     x = document.getElementsByClassName("menu");
//     for (i = 0; i < x.length; i++) {
//         x[i].style.display = "none";
//     }
//     tablinks = document.getElementsByClassName("tablink");
//     for (i = 0; i < x.length; i++) {
//         tablinks[i].className = tablinks[i].className.replace(" md-purple", "");
//     }
//     document.getElementById(menuName).style.display = "block";
//     evt.currentTarget.firstElementChild.className += " md-purple";
// }

function openMenu(evt, menuName, menuText, menuImage) {
    var i, x, menutexts, menuimages;
    // loop through each element of menu class and toggle off display
    x = document.getElementsByClassName("menu");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }

    // loop through each element of menutext class and remove text decoration
    menutexts = document.getElementsByClassName("menutext");
    for (i = 0; i < menutexts.length; i++) {
        menutexts[i].className = menutexts[i].className.replace(" md-selected-lesson-text", "");
    }

    // loop through each element of menuimage class and toggle opacity
    menuimages = document.getElementsByClassName("menuimage");
    for (i = 0; i < menuimages.length; i++) {
        menuimages[i].className = menuimages[i].className.replace(" md-selected-lesson-image", "");
    }

    // now toggle the display on for the content that should be displayed based on menu selection
    document.getElementById(menuName).style.display = "block";

    // set the clicked link to indicate it is currently selected
    //evt.currentTarget.firstElementChild.className += " md-selected-lesson-text";
    document.getElementById(menuText).className += " md-selected-lesson-text";

    // turn opacity off for the selected menu
    document.getElementById(menuImage).className += " md-selected-lesson-image";
}

function openGuitarShopMenu(evt, menuName, menuText, menuImage) {
    var i, x, menutexts, menuimages;
    // loop through each element of menu class and toggle off display
    x = document.getElementsByClassName("guitarShopMenu");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }

    // loop through each element of menutext class and remove text decoration
    menutexts = document.getElementsByClassName("guitarShopMenuText");
    for (i = 0; i < menutexts.length; i++) {
        menutexts[i].className = menutexts[i].className.replace(" md-selected-lesson-text", "");
    }

    // loop through each element of menuimage class and toggle opacity
    menuimages = document.getElementsByClassName("guitarShopMenuImage");
    for (i = 0; i < menuimages.length; i++) {
        menuimages[i].className = menuimages[i].className.replace(" md-selected-lesson-image", "");
    }

    // now toggle the display on for the content that should be displayed based on menu selection
    document.getElementById(menuName).style.display = "block";

    // set the clicked link to indicate it is currently selected
    //evt.currentTarget.firstElementChild.className += " md-selected-lesson-text";
    document.getElementById(menuText).className += " md-selected-lesson-text";

    // turn opacity off for the selected menu
    document.getElementById(menuImage).className += " md-selected-lesson-image";
}

// Make lesson Tier 1 the default selected menu item when page loads
document.getElementById("myLink").click();