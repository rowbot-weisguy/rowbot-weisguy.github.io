/****************************************************************\
 * Analytics Tag                                                *
\****************************************************************/

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-61048127-1', 'auto');
ga('send', 'pageview');



/****************************************************************\
 * Modal                                                        *
\****************************************************************/

(function() {
    var trigger = document.querySelectorAll('.modal__trigger')[0];
    var modal = document.querySelectorAll('.modal')[0];
    var panel = document.querySelectorAll('.modal__panel')[0];

    function openModal() {
        modal.classList.add('active');
    }

    function closeModal(e) {
        if (e.target == modal) {
            modal.classList.add('dismissed');
            setTimeout(function() {
                modal.classList.remove('active', 'dismissed');
            }, 500);
        }
    }

    trigger.addEventListener('click', openModal, false);
    modal.addEventListener('click', closeModal, false);
})();



/****************************************************************\
 * Party Mode                                                   *
\****************************************************************/

(function() {
    var body = document.querySelectorAll('body')[0];
    var partyButton = document.querySelectorAll('.party-button')[0];
    var isPartying = false;

    function stopParty() {
        body.classList.remove('party');
        partyButton.textContent = "Let's Party!";
        isPartying = false;
    }

    function startParty() {
        body.classList.add('party');
        partyButton.textContent = "Whoa, Calm Down";
        ga('send', 'event', 'Primary', 'Party Time');
        isPartying = true;
    }

    function party() {
        isPartying ? stopParty() : startParty();
    }

    partyButton.addEventListener('click', party, false);
})();
