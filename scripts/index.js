/*jshint esnext: true, globalstrict: true*/

/**
 * Main module to instantiate the application
 * @author Julien Roche
 * @version 1.0
 * @since 1.0
 */

'use strict';

// First imports (at the top of the files)
import UsersService from 'users';

var
    ulElement = document.querySelector('ul');

// Inject users into the HTML
UsersService.fetch().forEach(
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
            let foundUser = UsersService.findByName(name);

            if (foundUser) {
                window.alert('Somebody savvvvveed meeeeeeeeeeeeee');

            } else {
                window.alert(`${name}, where are you ???`);
            }
        }
    },
    false
);
