window.onload = function () {
    showContent('contentHome');
};

function showContent(contentId) {
    var contentDivs = document.querySelectorAll('.content');
    contentDivs.forEach(function (div) {
        div.style.display = 'none';
    });

    document.getElementById(contentId).style.display = 'block';
}
