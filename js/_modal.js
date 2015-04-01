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
