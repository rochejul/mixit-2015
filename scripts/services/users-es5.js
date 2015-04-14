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
      }
    });

    return UsersService;
  })();
})(window.app);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXJzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFVQSxNQUFNLENBQUMsR0FBRyxHQUFHLE1BQU0sQ0FBQyxHQUFHLElBQUksRUFBRyxDQUFDOztBQUUvQixNQUFNLENBQUMsR0FBRyxDQUFDLEtBQUssR0FBRyxDQUFDLFlBQVk7QUFDNUIsY0FBWSxDQUFDOzs7Ozs7TUFLUCxJQUFJOzs7Ozs7Ozs7QUFRTSxhQVJWLElBQUksR0FRc0U7VUFBL0QsSUFBSSxnQ0FBRyxHQUFHO1VBQUUsU0FBUyxnQ0FBRyxPQUFPO1VBQUUsUUFBUSxnQ0FBRyxPQUFPO1VBQUUsR0FBRyxnQ0FBRyxFQUFFOzs0QkFSeEUsSUFBSTs7Ozs7QUFZRixVQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQzs7Ozs7QUFLakIsVUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7Ozs7O0FBSzNCLFVBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDOzs7OztBQUt6QixVQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztLQUNsQjs7aUJBNUJDLElBQUk7QUFrQ04sY0FBUTs7Ozs7OztlQUFBLG9CQUFHO0FBQ1AsdUJBQVcsSUFBSSxDQUFDLElBQUksVUFBSyxJQUFJLENBQUMsU0FBUyxTQUFJLElBQUksQ0FBQyxRQUFRLGNBQVMsSUFBSSxDQUFDLEdBQUcsQ0FBRztTQUMvRTs7OztXQXBDQyxJQUFJOzs7Ozs7Ozs7O0FBOENULE1BQU0sS0FBSyxHQUFHLENBQ1gsSUFBSSxJQUFJLEVBQUUsRUFDVixJQUFJLElBQUksQ0FBQyxHQUFHLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxFQUFFLENBQUMsRUFDcEMsSUFBSSxJQUFJLENBQUMsR0FBRyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsRUFBRSxDQUFDLEVBQ2xDLElBQUksSUFBSSxDQUFDLEdBQUcsRUFBRSxNQUFNLEVBQUUsT0FBTyxDQUFDLENBQ2pDLENBQUM7Ozs7O0FBS0Y7YUFBYSxZQUFZOzRCQUFaLFlBQVk7OztpQkFBWixZQUFZO0FBU2QsV0FBSzs7Ozs7Ozs7OztlQUFBLGlCQUFHO0FBQ1gsaUJBQU8sS0FBSyxDQUFDO1NBQ2hCOzs7O1dBWFEsWUFBWTtPQVl2QjtDQUVMLENBQUEsQ0FBRSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMiLCJmaWxlIjoidXNlcnMtZXM1LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypqc2hpbnQgZXNuZXh0OiB0cnVlKi9cclxuXHJcbi8qKlxyXG4gKiBNb2R1bGUgdG8gbWFuYWdlIHVzZXJzXHJcbiAqIEBhdXRob3IgSnVsaWVuIFJvY2hlXHJcbiAqIEBleHBvcnRzIFVzZXJzU2VydmljZVxyXG4gKiBAdmVyc2lvbiAxLjBcclxuICogQHNpbmNlIDEuMFxyXG4gKi9cclxuXHJcbndpbmRvdy5hcHAgPSB3aW5kb3cuYXBwIHx8IHsgfTtcclxuXHJcbndpbmRvdy5hcHAudXNlcnMgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgJ3VzZSBzdHJpY3QnO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGNsYXNzIFVzZXJcclxuICAgICAqL1xyXG4gICAgY2xhc3MgVXNlciB7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQGNvbnN0cnVjdG9yXHJcbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IFt1dWlkPScxJ11cclxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gW2ZpcnN0TmFtZT0nQnJ1Y2UnXVxyXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbbGFzdE5hbWU9J1dheW5lJ11cclxuICAgICAgICAgKiBAcGFyYW0ge251bWJlcn0gW2FnZT0zNl1cclxuICAgICAgICAgKi9cclxuICAgICAgICBjb25zdHJ1Y3RvciAodXVpZCA9ICcxJywgZmlyc3ROYW1lID0gJ0JydWNlJywgbGFzdE5hbWUgPSAnV2F5bmUnLCBhZ2UgPSAzOCkge1xyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICogQHByb3BlcnR5IHtzdHJpbmd9IHV1aWRcclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIHRoaXMudXVpZCA9IHV1aWQ7XHJcblxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICogQHByb3BlcnR5IHtzdHJpbmd9IGZpcnN0TmFtZVxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgdGhpcy5maXJzdE5hbWUgPSBmaXJzdE5hbWU7XHJcblxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICogQHByb3BlcnR5IHtzdHJpbmd9IGxhc3ROYW1lXHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICB0aGlzLmxhc3ROYW1lID0gbGFzdE5hbWU7XHJcblxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICogQHByb3BlcnR5IHtudW1iZXJ9IGFnZVxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgdGhpcy5hZ2UgPSBhZ2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBSZXR1cm4gdGhlIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiBhIHVzZXJcclxuICAgICAgICAgKiBAcmV0dXJucyB7c3RyaW5nfVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHRvU3RyaW5nKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gYCgke3RoaXMudXVpZH0pICR7dGhpcy5maXJzdE5hbWV9ICR7dGhpcy5sYXN0TmFtZX06IGFnZSAke3RoaXMuYWdlfWA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogTGlzdCBvZiB1c2Vyc1xyXG4gICAgICpcclxuICAgICAqIEBjb25zdGFudFxyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqIEB0eXBlIHtVc2VyW119XHJcbiAgICAgKi9cclxuICAgICBjb25zdCBVU0VSUyA9IFtcclxuICAgICAgICBuZXcgVXNlcigpLFxyXG4gICAgICAgIG5ldyBVc2VyKCcyJywgJ1BldGVyJywgJ1BhcmtlcicsIDIyKSxcclxuICAgICAgICBuZXcgVXNlcignMycsICdDbGFyaycsICdLZW50JywgMzIpLFxyXG4gICAgICAgIG5ldyBVc2VyKCc0JywgJ1RvbnknLCAnU3RhcmsnKVxyXG4gICAgXTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEBjbGFzcyBVc2Vyc1NlcnZpY2VcclxuICAgICAqL1xyXG4gICAgcmV0dXJuIGNsYXNzIFVzZXJzU2VydmljZSB7XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFJldHVybiB0aGUgbGlzdCBvZiBAe1VzZXJ9XHJcbiAgICAgICAgICpcclxuICAgICAgICAgKiBAbWV0aG9kXHJcbiAgICAgICAgICogQHN0YXRpY1xyXG4gICAgICAgICAqIEByZXR1cm5zIHtVc2VyW119XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgc3RhdGljIGZldGNoKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gVVNFUlM7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbn0pKHdpbmRvdy5hcHApO1xyXG4iXX0=