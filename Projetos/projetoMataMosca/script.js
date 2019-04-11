(function (win, doc) {
    'use strict';

    var $inicar = doc.querySelector("#iniciar");

    $inicar.addEventListener( 'click', function() {
        win.location.href = "app.html";
    } );

})(window, document);