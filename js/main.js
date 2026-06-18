function initEtiquetteTabs() {
    var tabs = document.querySelectorAll('.identity-tab');
    tabs.forEach(function (tab) {
        tab.addEventListener('click', function () {
            var target = this.getAttribute('data-target');

            tabs.forEach(function (t) {
                t.classList.remove('active');
            });
            this.classList.add('active');

            document.querySelectorAll('.etiquette-panel').forEach(function (panel) {
                panel.classList.remove('active');
            });

            document.querySelectorAll('.' + target + '-panel').forEach(function (panel) {
                panel.classList.add('active');
            });
        });
    });
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initEtiquetteTabs);
} else {
    initEtiquetteTabs();
}
