/*jshint esnext: true, globalstrict: true*/

/**
 * Module to manage users
 * @author Julien Roche
 * @module services/users
 * @exports UsersService
 * @version 1.0
 * @since 1.0
 */

"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

/**
 * @class User
 */

var User = (function () {
  /**
   * @constructor
   * @param {string} [uuid='1']
   * @param {string} [firstName='Bruce']
   * @param {string} [lastName='Wayne']
   * @param {number} [age=36]
   */

  function User() {
    var uuid = arguments[0] === undefined ? "1" : arguments[0];
    var firstName = arguments[1] === undefined ? "Bruce" : arguments[1];
    var lastName = arguments[2] === undefined ? "Wayne" : arguments[2];
    var age = arguments[3] === undefined ? 38 : arguments[3];

    _classCallCheck(this, User);

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

  _createClass(User, {
    toString: {

      /**
       * Return the string representation of a user
       * @returns {string}
       */

      value: function toString() {
        return "(" + this.uuid + ") " + this.firstName + " " + this.lastName + ": age " + this.age;
      }
    }
  });

  return User;
})();

/**
 * List of users
 *
 * @constant
 * @private
 * @type {User[]}
 */
var USERS = [new User(), new User("2", "Peter", "Parker", 22), new User("3", "Clark", "Kent", 32), new User("4", "Tony", "Stark")];

/**
 * @class UsersService
 */

var UsersService = (function () {
  function UsersService() {
    _classCallCheck(this, UsersService);
  }

  _createClass(UsersService, null, {
    fetch: {

      /**
       * Return the list of @{User}
       *
       * @method
       * @static
       * @returns {User[]}
       */

      value: function fetch() {
        return USERS;
      }
    },
    findByName: {

      /**
       * Find the expected user by name
       *
       * @method
       * @static
       * @param {string} name
       * @returns {User}
       */

      value: function findByName(name) {
        return USERS.find(function (user) {
          return user.firstName === name;
        });
      }
    }
  });

  return UsersService;
})();

module.exports = UsersService;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXJzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBV0EsWUFBWSxDQUFDOzs7Ozs7Ozs7O0lBS1AsSUFBSTs7Ozs7Ozs7O0FBUU0sV0FSVixJQUFJLEdBUXNFO1FBQS9ELElBQUksZ0NBQUcsR0FBRztRQUFFLFNBQVMsZ0NBQUcsT0FBTztRQUFFLFFBQVEsZ0NBQUcsT0FBTztRQUFFLEdBQUcsZ0NBQUcsRUFBRTs7MEJBUnhFLElBQUk7Ozs7O0FBWUYsUUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7Ozs7O0FBS2pCLFFBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDOzs7OztBQUszQixRQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQzs7Ozs7QUFLekIsUUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7R0FDbEI7O2VBNUJDLElBQUk7QUFrQ04sWUFBUTs7Ozs7OzthQUFBLG9CQUFHO0FBQ1AscUJBQVcsSUFBSSxDQUFDLElBQUksVUFBSyxJQUFJLENBQUMsU0FBUyxTQUFJLElBQUksQ0FBQyxRQUFRLGNBQVMsSUFBSSxDQUFDLEdBQUcsQ0FBRztPQUMvRTs7OztTQXBDQyxJQUFJOzs7Ozs7Ozs7O0FBOENWLElBQU0sS0FBSyxHQUFHLENBQ1YsSUFBSSxJQUFJLEVBQUUsRUFDVixJQUFJLElBQUksQ0FBQyxHQUFHLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxFQUFFLENBQUMsRUFDcEMsSUFBSSxJQUFJLENBQUMsR0FBRyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsRUFBRSxDQUFDLEVBQ2xDLElBQUksSUFBSSxDQUFDLEdBQUcsRUFBRSxNQUFNLEVBQUUsT0FBTyxDQUFDLENBQ2pDLENBQUM7Ozs7OztJQUttQixZQUFZO1dBQVosWUFBWTswQkFBWixZQUFZOzs7ZUFBWixZQUFZO0FBU3RCLFNBQUs7Ozs7Ozs7Ozs7YUFBQSxpQkFBRztBQUNYLGVBQU8sS0FBSyxDQUFDO09BQ2hCOztBQVVNLGNBQVU7Ozs7Ozs7Ozs7O2FBQUEsb0JBQUMsSUFBSSxFQUFFO0FBQ3BCLGVBQU8sS0FBSyxDQUFDLElBQUksQ0FBQyxVQUFDLElBQUk7aUJBQUssSUFBSSxDQUFDLFNBQVMsS0FBSyxJQUFJO1NBQUEsQ0FBQyxDQUFDO09BQ3hEOzs7O1NBdkJnQixZQUFZOzs7aUJBQVosWUFBWSIsImZpbGUiOiJ1c2Vycy1lczUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKmpzaGludCBlc25leHQ6IHRydWUsIGdsb2JhbHN0cmljdDogdHJ1ZSovXHJcblxyXG4vKipcclxuICogTW9kdWxlIHRvIG1hbmFnZSB1c2Vyc1xyXG4gKiBAYXV0aG9yIEp1bGllbiBSb2NoZVxyXG4gKiBAbW9kdWxlIHNlcnZpY2VzL3VzZXJzXHJcbiAqIEBleHBvcnRzIFVzZXJzU2VydmljZVxyXG4gKiBAdmVyc2lvbiAxLjBcclxuICogQHNpbmNlIDEuMFxyXG4gKi9cclxuXHJcbid1c2Ugc3RyaWN0JztcclxuXHJcbi8qKlxyXG4gKiBAY2xhc3MgVXNlclxyXG4gKi9cclxuY2xhc3MgVXNlciB7XHJcbiAgICAvKipcclxuICAgICAqIEBjb25zdHJ1Y3RvclxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IFt1dWlkPScxJ11cclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbZmlyc3ROYW1lPSdCcnVjZSddXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gW2xhc3ROYW1lPSdXYXluZSddXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gW2FnZT0zNl1cclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IgKHV1aWQgPSAnMScsIGZpcnN0TmFtZSA9ICdCcnVjZScsIGxhc3ROYW1lID0gJ1dheW5lJywgYWdlID0gMzgpIHtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBAcHJvcGVydHkge3N0cmluZ30gdXVpZFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHRoaXMudXVpZCA9IHV1aWQ7XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBmaXJzdE5hbWVcclxuICAgICAgICAgKi9cclxuICAgICAgICB0aGlzLmZpcnN0TmFtZSA9IGZpcnN0TmFtZTtcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQHByb3BlcnR5IHtzdHJpbmd9IGxhc3ROYW1lXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdGhpcy5sYXN0TmFtZSA9IGxhc3ROYW1lO1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBAcHJvcGVydHkge251bWJlcn0gYWdlXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdGhpcy5hZ2UgPSBhZ2U7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm4gdGhlIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiBhIHVzZXJcclxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9XHJcbiAgICAgKi9cclxuICAgIHRvU3RyaW5nKCkge1xyXG4gICAgICAgIHJldHVybiBgKCR7dGhpcy51dWlkfSkgJHt0aGlzLmZpcnN0TmFtZX0gJHt0aGlzLmxhc3ROYW1lfTogYWdlICR7dGhpcy5hZ2V9YDtcclxuICAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIExpc3Qgb2YgdXNlcnNcclxuICpcclxuICogQGNvbnN0YW50XHJcbiAqIEBwcml2YXRlXHJcbiAqIEB0eXBlIHtVc2VyW119XHJcbiAqL1xyXG5jb25zdCBVU0VSUyA9IFtcclxuICAgIG5ldyBVc2VyKCksXHJcbiAgICBuZXcgVXNlcignMicsICdQZXRlcicsICdQYXJrZXInLCAyMiksXHJcbiAgICBuZXcgVXNlcignMycsICdDbGFyaycsICdLZW50JywgMzIpLFxyXG4gICAgbmV3IFVzZXIoJzQnLCAnVG9ueScsICdTdGFyaycpXHJcbl07XHJcblxyXG4vKipcclxuICogQGNsYXNzIFVzZXJzU2VydmljZVxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXNlcnNTZXJ2aWNlIHtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFJldHVybiB0aGUgbGlzdCBvZiBAe1VzZXJ9XHJcbiAgICAgKlxyXG4gICAgICogQG1ldGhvZFxyXG4gICAgICogQHN0YXRpY1xyXG4gICAgICogQHJldHVybnMge1VzZXJbXX1cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGZldGNoKCkge1xyXG4gICAgICAgIHJldHVybiBVU0VSUztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEZpbmQgdGhlIGV4cGVjdGVkIHVzZXIgYnkgbmFtZVxyXG4gICAgICpcclxuICAgICAqIEBtZXRob2RcclxuICAgICAqIEBzdGF0aWNcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXHJcbiAgICAgKiBAcmV0dXJucyB7VXNlcn1cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGZpbmRCeU5hbWUobmFtZSkge1xyXG4gICAgICAgIHJldHVybiBVU0VSUy5maW5kKCh1c2VyKSA9PiB1c2VyLmZpcnN0TmFtZSA9PT0gbmFtZSk7XHJcbiAgICB9XHJcbn07XHJcbiJdfQ==