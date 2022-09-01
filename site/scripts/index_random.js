var urls = [
        '#info',
        '#smm',
        '#dev',
        '#web',
        '#design',
        '#video',
        '#music',
        '#art',
        '#write',
        '#type',
        '#log',
        '#fun'
    ];

    function luck() {
        var url = urls[Math.floor(Math.random()*urls.length)];
        window.location = url; // redirect
    }
