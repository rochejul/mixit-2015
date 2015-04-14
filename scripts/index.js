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

    // Inject users into the HTML
    app.users.fetch().forEach(
        (user) => {
            let liElement = document.createElement('li');
            liElement.innerHTML = user.toString();
            ulElement.appendChild(liElement);
        }
    );

    // Listen to events
    document
        .querySelector('button')
        .addEventListener(
            'click',
            (event) => {
                event.preventDefault();

                let name = window.prompt('Please fill a name to search');

                if (name) {
                    let foundUser = app.users.findByName(name);

                    if (foundUser) {
                        window.alert('Somebody savvvvveed meeeeeeeeeeeeee');

                    } else {
                        window.alert(`${name}, where are you ???`);
                    }
                }
            },
            false
        );

})(window.app);
