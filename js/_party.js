/****************************************************************\
 * Party Mode                                                   *
\****************************************************************/

(function() {
    var body = document.querySelectorAll('body')[0];
    var partyButton = document.querySelectorAll('.party-button')[0];
    var partyMusic = document.querySelectorAll('.party-music')[0];
    var isPartying = false;

    function stopParty() {
        body.classList.remove('party');
        partyButton.textContent = "Let's Party!";
        partyMusic.pause();
        partyMusic.currentTime = 0;
        isPartying = false;
    }

    function startParty() {
        body.classList.add('party');
        partyMusic.play();
        partyButton.textContent = "Whoa, Calm Down";
        ga('send', 'event', 'Primary', 'Party Time');
        isPartying = true;
    }

    function party() {
        isPartying ? stopParty() : startParty();
    }

    partyButton.addEventListener('click', party, false);
})();
