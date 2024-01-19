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

function viewImage(imageSrc) {
    window.open(imageSrc);
}

function downloadImage(imageSrc) {
    // Create an anchor element and trigger a download
    var link = document.createElement('a');
    link.href = imageSrc;
    link.download = 'downloaded_image.jpg';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
