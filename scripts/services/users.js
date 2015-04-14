/**
 * Module to manage users
 * @author Julien Roche
 * @exports UsersService
 * @version 1.0
 * @since 1.0
 */

window.app = window.app || { };

window.app.users = (function () {
    'use strict';

    /**
     * @class User
     * @property {string} uuid
     * @property {string} firstName
     * @property {string} lastName
     * @property {number} age
     */

    var
        /**
         * List of users
         *
         * @constant
         * @private
         * @type {User[]}
         */
        USERS = [
            { 'uuid': '1', 'firstName': 'Bruce', 'lastName': 'Wayne', 'age': 38 },
            { 'uuid': '2', 'firstName': 'Peter', 'lastName': 'Parker', 'age': 22 },
            { 'uuid': '3', 'firstName': 'Clark', 'lastName': 'Kent', 'age': 32 },
            { 'uuid': '4', 'firstName': 'Tony', 'lastName': 'Stark', 'age': 36 }
        ];

    return {
        /**
         * Return the list of @{User}
         *
         * @method
         * @static
         * @returns {User[]}
         */
        'fetch': function () {
            return USERS;
        }
    };

})(window.app);
