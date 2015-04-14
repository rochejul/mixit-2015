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
        ulElement = document.querySelector('ul'),
        users = app.users.fetch();

    for (var i = 0, liElement, user; i < users.length; ++i) {
        user = users[i];

        liElement = document.createElement('li');
        liElement.innerHTML = '(' + user.uuid + ') ' + user.firstName + ' ' + user.lastName + ': age ' + user.age;
        ulElement.appendChild(liElement);
    }

})(window.app);
