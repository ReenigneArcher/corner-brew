// on ready
$(document).ready(function() {
    document.addEventListener("contextmenu", function (e) {
        if (e.target.nodeName === "IMG") {
            e.preventDefault()
        }
    }, false)

    document.addEventListener("mousedown", function (e) {
        if (e.target.nodeName === "IMG") {
            e.preventDefault()
        }
    }, false)
})
