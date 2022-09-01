function stop() {
    var media = document.getElementsByTagName('audio'),
        i = media.length;

    while (i--) {
        media[i].pause();
    }
}
