var urls = [
        '#family',
        '#map',
        '#links',
        '#stage',
        '#check',
        '#night',
        '#news',
        '#diary',
        '#arts',
        '#records',
        '#tv',
        '#dev',
        '#avemarine',
        '#birth',
        '#card',
        '#city',
        '#bar',
        '#noise',
        '#time',
        '#rip',
        '#browser',
        '#error',
        '#wish',
        '#rights'
    ];

    function teleport() {
        var url = urls[Math.floor(Math.random()*urls.length)];
        window.location = url; // redirect
    }
