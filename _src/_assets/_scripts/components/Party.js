import extend from 'lodash/fp/extend';

const Party = (function() {
    const HOOKS = {
        button: '.js-party-button',
        superButton: '.js-super-party-button'
    };

    const STATES = {
        chill: 'is-chill',
        lit: 'is-lit',
        raging: 'is-raging'
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
                break;
            case 'raging':
                document.body.classList.remove(STATES.chill);
                document.body.classList.add(STATES.raging);
                break;
            default:
                document.body.classList.remove(STATES.lit, STATES.raging);
                document.body.classList.add(STATES.chill);
                break;
        }
    }

    function partyHandler(event) {
        party == 'chill' ? startParty() : stopParty();
    }

    function superPartyHandler(event) {
        if (party == 'lit') escalateParty();
    }

    return {
        init: function(options) {
            let config = extend({
                button: document.querySelector(HOOKS.button),
                superButton: document.querySelector(HOOKS.superButton)
            }, options);

            document.body.classList.add('party', STATES.chill);

            try {
                config.button.addEventListener('click', partyHandler);
                config.superButton.addEventListener('click', superPartyHandler);
            } catch(e) {
                console.error('Your page is missing party buttons!');
            }
        }
    };
}());

export default Party;
