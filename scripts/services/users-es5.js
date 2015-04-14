"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

/*jshint esnext: true*/

/**
 * Module to manage users
 * @author Julien Roche
 * @exports UsersService
 * @version 1.0
 * @since 1.0
 */

window.app = window.app || {};

window.app.users = (function () {
  "use strict";

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
  return (function () {
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
})(window.app);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXJzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFVQSxNQUFNLENBQUMsR0FBRyxHQUFHLE1BQU0sQ0FBQyxHQUFHLElBQUksRUFBRyxDQUFDOztBQUUvQixNQUFNLENBQUMsR0FBRyxDQUFDLEtBQUssR0FBRyxDQUFDLFlBQVk7QUFDNUIsY0FBWSxDQUFDOzs7Ozs7TUFLUCxJQUFJOzs7Ozs7Ozs7QUFRTSxhQVJWLElBQUksR0FRc0U7VUFBL0QsSUFBSSxnQ0FBRyxHQUFHO1VBQUUsU0FBUyxnQ0FBRyxPQUFPO1VBQUUsUUFBUSxnQ0FBRyxPQUFPO1VBQUUsR0FBRyxnQ0FBRyxFQUFFOzs0QkFSeEUsSUFBSTs7Ozs7QUFZRixVQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQzs7Ozs7QUFLakIsVUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7Ozs7O0FBSzNCLFVBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDOzs7OztBQUt6QixVQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztLQUNsQjs7aUJBNUJDLElBQUk7QUFrQ04sY0FBUTs7Ozs7OztlQUFBLG9CQUFHO0FBQ1AsdUJBQVcsSUFBSSxDQUFDLElBQUksVUFBSyxJQUFJLENBQUMsU0FBUyxTQUFJLElBQUksQ0FBQyxRQUFRLGNBQVMsSUFBSSxDQUFDLEdBQUcsQ0FBRztTQUMvRTs7OztXQXBDQyxJQUFJOzs7Ozs7Ozs7O0FBOENULE1BQU0sS0FBSyxHQUFHLENBQ1gsSUFBSSxJQUFJLEVBQUUsRUFDVixJQUFJLElBQUksQ0FBQyxHQUFHLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxFQUFFLENBQUMsRUFDcEMsSUFBSSxJQUFJLENBQUMsR0FBRyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsRUFBRSxDQUFDLEVBQ2xDLElBQUksSUFBSSxDQUFDLEdBQUcsRUFBRSxNQUFNLEVBQUUsT0FBTyxDQUFDLENBQ2pDLENBQUM7Ozs7O0FBS0Y7YUFBYSxZQUFZOzRCQUFaLFlBQVk7OztpQkFBWixZQUFZO0FBU2QsV0FBSzs7Ozs7Ozs7OztlQUFBLGlCQUFHO0FBQ1gsaUJBQU8sS0FBSyxDQUFDO1NBQ2hCOztBQVVNLGdCQUFVOzs7Ozs7Ozs7OztlQUFBLG9CQUFDLElBQUksRUFBRTtBQUNwQixpQkFBTyxLQUFLLENBQUMsSUFBSSxDQUFDLFVBQUMsSUFBSTttQkFBSyxJQUFJLENBQUMsU0FBUyxLQUFLLElBQUk7V0FBQSxDQUFDLENBQUM7U0FDeEQ7Ozs7V0F2QlEsWUFBWTtPQXdCdkI7Q0FFTCxDQUFBLENBQUUsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDIiwiZmlsZSI6InVzZXJzLWVzNS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qanNoaW50IGVzbmV4dDogdHJ1ZSovXHJcblxyXG4vKipcclxuICogTW9kdWxlIHRvIG1hbmFnZSB1c2Vyc1xyXG4gKiBAYXV0aG9yIEp1bGllbiBSb2NoZVxyXG4gKiBAZXhwb3J0cyBVc2Vyc1NlcnZpY2VcclxuICogQHZlcnNpb24gMS4wXHJcbiAqIEBzaW5jZSAxLjBcclxuICovXHJcblxyXG53aW5kb3cuYXBwID0gd2luZG93LmFwcCB8fCB7IH07XHJcblxyXG53aW5kb3cuYXBwLnVzZXJzID0gKGZ1bmN0aW9uICgpIHtcclxuICAgICd1c2Ugc3RyaWN0JztcclxuXHJcbiAgICAvKipcclxuICAgICAqIEBjbGFzcyBVc2VyXHJcbiAgICAgKi9cclxuICAgIGNsYXNzIFVzZXIge1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEBjb25zdHJ1Y3RvclxyXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbdXVpZD0nMSddXHJcbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IFtmaXJzdE5hbWU9J0JydWNlJ11cclxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gW2xhc3ROYW1lPSdXYXluZSddXHJcbiAgICAgICAgICogQHBhcmFtIHtudW1iZXJ9IFthZ2U9MzZdXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgY29uc3RydWN0b3IgKHV1aWQgPSAnMScsIGZpcnN0TmFtZSA9ICdCcnVjZScsIGxhc3ROYW1lID0gJ1dheW5lJywgYWdlID0gMzgpIHtcclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIEBwcm9wZXJ0eSB7c3RyaW5nfSB1dWlkXHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICB0aGlzLnV1aWQgPSB1dWlkO1xyXG5cclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBmaXJzdE5hbWVcclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIHRoaXMuZmlyc3ROYW1lID0gZmlyc3ROYW1lO1xyXG5cclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBsYXN0TmFtZVxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgdGhpcy5sYXN0TmFtZSA9IGxhc3ROYW1lO1xyXG5cclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBhZ2VcclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIHRoaXMuYWdlID0gYWdlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogUmV0dXJuIHRoZSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgYSB1c2VyXHJcbiAgICAgICAgICogQHJldHVybnMge3N0cmluZ31cclxuICAgICAgICAgKi9cclxuICAgICAgICB0b1N0cmluZygpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGAoJHt0aGlzLnV1aWR9KSAke3RoaXMuZmlyc3ROYW1lfSAke3RoaXMubGFzdE5hbWV9OiBhZ2UgJHt0aGlzLmFnZX1gO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIExpc3Qgb2YgdXNlcnNcclxuICAgICAqXHJcbiAgICAgKiBAY29uc3RhbnRcclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKiBAdHlwZSB7VXNlcltdfVxyXG4gICAgICovXHJcbiAgICAgY29uc3QgVVNFUlMgPSBbXHJcbiAgICAgICAgbmV3IFVzZXIoKSxcclxuICAgICAgICBuZXcgVXNlcignMicsICdQZXRlcicsICdQYXJrZXInLCAyMiksXHJcbiAgICAgICAgbmV3IFVzZXIoJzMnLCAnQ2xhcmsnLCAnS2VudCcsIDMyKSxcclxuICAgICAgICBuZXcgVXNlcignNCcsICdUb255JywgJ1N0YXJrJylcclxuICAgIF07XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAY2xhc3MgVXNlcnNTZXJ2aWNlXHJcbiAgICAgKi9cclxuICAgIHJldHVybiBjbGFzcyBVc2Vyc1NlcnZpY2Uge1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBSZXR1cm4gdGhlIGxpc3Qgb2YgQHtVc2VyfVxyXG4gICAgICAgICAqXHJcbiAgICAgICAgICogQG1ldGhvZFxyXG4gICAgICAgICAqIEBzdGF0aWNcclxuICAgICAgICAgKiBAcmV0dXJucyB7VXNlcltdfVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHN0YXRpYyBmZXRjaCgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFVTRVJTO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogRmluZCB0aGUgZXhwZWN0ZWQgdXNlciBieSBuYW1lXHJcbiAgICAgICAgICpcclxuICAgICAgICAgKiBAbWV0aG9kXHJcbiAgICAgICAgICogQHN0YXRpY1xyXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXHJcbiAgICAgICAgICogQHJldHVybnMge1VzZXJ9XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgc3RhdGljIGZpbmRCeU5hbWUobmFtZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gVVNFUlMuZmluZCgodXNlcikgPT4gdXNlci5maXJzdE5hbWUgPT09IG5hbWUpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG59KSh3aW5kb3cuYXBwKTtcclxuIl19