// Overlay Functions
function openNav(){
    document.getElementById("navigation-page").style.width = "100%";
    document.getElementById("navigation-content").style.display = "block";
}

function closeNav(){
    document.getElementById("navigation-page").style.width = "0%";
    document.getElementById("navigation-content").style.display = "none";
    $("#blog-content").removeClass("move-right");
}

function openSearch(){
    document.getElementById("search-page").style.width = "100%";
    document.getElementById("search-content").style.display = "block";
}

function closeSearch(){
    document.getElementById("search-page").style.width = "0%";
    document.getElementById("search-content").style.display = "none";
    $("#blog-content").removeClass("move-left");
}

$(document).ready(function(){
    $("#h-options").click(function(){
        $("#blog-content").addClass("move-right");
    });
    
    $("#h-search").click(function(){
        $("#blog-content").addClass("move-left");
    });

});




