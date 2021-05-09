(function () {

  // Playlist array.
  var files = [
      "Alisia1.mp3",
      "Alisia2.mp3",
      "Arcus1.mp3",
      "Arcus2.mp3",
      "Arcus3.mp3",
      "Golden1.mp3",
      "Golden2.mp3",
      "Axe1.mp3",
      "Axe2.mp3",
      "Midnight1.mp3",
      "Robin1.mp3",
      "Hard1.mp3",
      "Hard2.mp3",
      "Exo1.mp3",
      "Exo2.mp3",
      "Rash1.mp3",
      "Shadow1.mp3",
      "Out1.mp3",
      "Dragon1.mp3",
      "Rage1.mp3",
      "Rage2.mp3",
      "Rage3.mp3",
      "Sunset1.mp3",
      "Sunset2.mp3",
      "Fist1.mp3",
      "Fist2.mp3",
      "Final1.mp3",
      "Final2.mp3"
  ];

  // Current index of the files array.
  var i = 0;

  // Get the audio elements.
  var music_player = document.querySelector("audio");
  var button_prev = document.querySelector(".prev");
  var button_next = document.querySelector(".next");
  button_prev.addEventListener('click', prev);
  button_next.addEventListener('click', next);

  function prev() {
    if (i === 0) {
        i = files.length - 1;
    } else {
        i--;
    }
    change();
  }

  // Function for moving to next audio file.
  function next() {
      // Check for last audio file in the playlist.
      if (i === files.length - 1) {
          i = 0;
      } else {
          i++;
      }
      change();
  }

  function change() {
      // Change the audio element source.
      music_player.src = files[i];
      music_player.play();
  }

  // Check if the player is selected.
  if (music_player === null) {
      throw "Playlist Player does not exists ...";
  } else {
      // Start the player.
      music_player.src = files[i];

      // Listen for the music ended event, to play the next audio file.
      music_player.addEventListener('ended', next, false)
  }

})();