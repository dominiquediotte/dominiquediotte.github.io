// This script was made using jQuery 3.3.1 and Javascript.
// It is used to make the padding to the left and the right of the two text columns.
document.querySelector("body").addEventListener("resize", setWidth);

function setWidth() {
    var columns = $('.column');
    
    if (window.innerWidth >= 960) {
        var parentWidth = $('.row').width();
        var newAvailableWidth = parentWidth - 20;
        var newWidth = newAvailableWidth / 2;
    
        for (i = 0; i < columns.length; i++) {
            columns[i].style.width = newWidth + "px";
            columns[i].style.paddingLeft = "5px";
            columns[i].style.paddingRight = "5px";
        }
    } else {
        for (i = 0; i < columns.length; i++) {
            columns[i].style.width = "100%";
            columns[i].style.paddingLeft = "0";
            columns[i].style.paddingRight = "0";
        }
    }
}
