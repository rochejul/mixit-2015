/*jshint esnext: true*/

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
     */
    class User {
        /**
         * @constructor
         * @param {string} [uuid='1']
         * @param {string} [firstName='Bruce']
         * @param {string} [lastName='Wayne']
         * @param {number} [age=36]
         */
        constructor (uuid = '1', firstName = 'Bruce', lastName = 'Wayne', age = 38) {
            /**
             * @property {string} uuid
             */
            this.uuid = uuid;

            /**
             * @property {string} firstName
             */
            this.firstName = firstName;

            /**
             * @property {string} lastName
             */
            this.lastName = lastName;

            /**
             * @property {number} age
             */
            this.age = age;
        }

        /**
         * Return the string representation of a user
         * @returns {string}
         */
        toString() {
            return `(${this.uuid}) ${this.firstName} ${this.lastName}: age ${this.age}`;
        }
    }

    /**
     * List of users
     *
     * @constant
     * @private
     * @type {User[]}
     */
     const USERS = [
        new User(),
        new User('2', 'Peter', 'Parker', 22),
        new User('3', 'Clark', 'Kent', 32),
        new User('4', 'Tony', 'Stark')
    ];

    /**
     * @class UsersService
     */
    return class UsersService {

        /**
         * Return the list of @{User}
         *
         * @method
         * @static
         * @returns {User[]}
         */
        static fetch() {
            return USERS;
        }
    };

})(window.app);
