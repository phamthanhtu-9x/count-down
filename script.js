document.addEventListener('DOMContentLoaded', () => {

  var date = '05/06/2022 22:00:00'

  function toTimestamp(strDate){
     var datum = Date.parse(strDate);
     return datum/1000;
  }

  // Unix timestamp (in seconds) to count down to
  var twoDaysFromNow = toTimestamp(date);

  // Set up FlipDown
  var flipdown = new FlipDown(twoDaysFromNow)

    // Start the countdown
    .start()

    // Do something when the countdown ends
    .ifEnded(() => {
      console.log('The countdown has ended!');
    });

  // Toggle theme

  var ver = document.getElementById('ver');
  ver.innerHTML = flipdown.version;
});
