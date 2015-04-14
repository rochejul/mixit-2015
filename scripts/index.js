/*jshint esnext: true*/

/**
 * Main module to instantiate the application
 * @author Julien Roche
 * @version 1.0
 * @since 1.0
 */

window.app = window.app || { };

(function (app) {
    'use strict';

    var
        ulElement = document.querySelector('ul');

    app.users.fetch().forEach(
        (user) => {
            let liElement = document.createElement('li');
            liElement.innerHTML = '(' + user.uuid + ') ' + user.firstName + ' ' + user.lastName + ': age ' + user.age;
            ulElement.appendChild(liElement);
        }
    );

})(window.app);
