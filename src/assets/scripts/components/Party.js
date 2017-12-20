const Party = (function() {
  const STATES = {
    chill: 'is-chill',
    lit: 'is-lit',
    raging: 'is-raging',
  };
  let party = 'chill';

  function startParty() {
    party = 'lit';
    updateParty();
  }

  function escalateParty() {
    party = 'raging';
    updateParty();
  }

  function stopParty() {
    party = 'chill';
    updateParty();
  }

  function updateParty() {
    switch (party) {
      case 'lit':
        document.body.classList.remove(STATES.chill, STATES.raging);
        document.body.classList.add(STATES.lit);
        Party.elements.music.play();
        Party.elements.button.textContent = 'Chill 😴';
        break;
      case 'raging':
        document.body.classList.remove(STATES.chill);
        document.body.classList.add(STATES.raging);
        break;
      default:
        document.body.classList.remove(STATES.lit, STATES.raging);
        document.body.classList.add(STATES.chill);
        Party.elements.music.pause();
        Party.elements.music.currentTime = 0;
        Party.elements.button.textContent = 'Party 🎉';
        break;
    }

    console.log('This party is ' + party);
  }

  function partyHandler(event) {
    party == 'chill' ? startParty() : stopParty();
  }

  function superPartyHandler(event) {
    if (party == 'lit') escalateParty();
  }

  return {
    init: function(elements) {
      Party.elements = Object.assign(
        {
          button: document.querySelector('.js-party-button'),
          superButton: document.querySelector('.js-super-party-button'),
          music: document.querySelector('.js-party-music'),
        },
        elements
      );

      document.body.classList.add('party', STATES.chill);

      try {
        Party.elements.button.addEventListener('click', partyHandler);
        Party.elements.superButton.addEventListener('click', superPartyHandler);
      } catch (e) {
        console.error('Your page is missing party buttons!');
      }
    },
  };
})();

export default Party;
