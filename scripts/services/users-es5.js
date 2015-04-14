System.register("users", [], function (_export) {
  var _createClass, _classCallCheck, User, USERS, UsersService;

  return {
    setters: [],
    execute: function () {
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

      _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      /**
       * @class User
       */

      User = (function () {
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
      USERS = [new User(), new User("2", "Peter", "Parker", 22), new User("3", "Clark", "Kent", 32), new User("4", "Tony", "Stark")];

      /**
       * @class UsersService
       */

      UsersService = (function () {
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

      _export("default", UsersService);
    }
  };
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXJzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7cUNBZ0JNLElBQUksRUE4Q0osS0FBSyxFQVVVLFlBQVk7Ozs7Ozs7Ozs7Ozs7Ozs7QUE3RGpDLGtCQUFZLENBQUM7Ozs7Ozs7Ozs7QUFLUCxVQUFJOzs7Ozs7Ozs7QUFRTSxpQkFSVixJQUFJLEdBUXNFO2NBQS9ELElBQUksZ0NBQUcsR0FBRztjQUFFLFNBQVMsZ0NBQUcsT0FBTztjQUFFLFFBQVEsZ0NBQUcsT0FBTztjQUFFLEdBQUcsZ0NBQUcsRUFBRTs7Z0NBUnhFLElBQUk7Ozs7O0FBWUYsY0FBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7Ozs7O0FBS2pCLGNBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDOzs7OztBQUszQixjQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQzs7Ozs7QUFLekIsY0FBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7U0FDbEI7O3FCQTVCQyxJQUFJO0FBa0NOLGtCQUFROzs7Ozs7O21CQUFBLG9CQUFHO0FBQ1AsMkJBQVcsSUFBSSxDQUFDLElBQUksVUFBSyxJQUFJLENBQUMsU0FBUyxTQUFJLElBQUksQ0FBQyxRQUFRLGNBQVMsSUFBSSxDQUFDLEdBQUcsQ0FBRzthQUMvRTs7OztlQXBDQyxJQUFJOzs7Ozs7Ozs7O0FBOENKLFdBQUssR0FBRyxDQUNWLElBQUksSUFBSSxFQUFFLEVBQ1YsSUFBSSxJQUFJLENBQUMsR0FBRyxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsRUFBRSxDQUFDLEVBQ3BDLElBQUksSUFBSSxDQUFDLEdBQUcsRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLEVBQUUsQ0FBQyxFQUNsQyxJQUFJLElBQUksQ0FBQyxHQUFHLEVBQUUsTUFBTSxFQUFFLE9BQU8sQ0FBQyxDQUNqQzs7Ozs7O0FBS29CLGtCQUFZO2lCQUFaLFlBQVk7Z0NBQVosWUFBWTs7O3FCQUFaLFlBQVk7QUFTdEIsZUFBSzs7Ozs7Ozs7OzttQkFBQSxpQkFBRztBQUNYLHFCQUFPLEtBQUssQ0FBQzthQUNoQjs7QUFVTSxvQkFBVTs7Ozs7Ozs7Ozs7bUJBQUEsb0JBQUMsSUFBSSxFQUFFO0FBQ3BCLHFCQUFPLEtBQUssQ0FBQyxJQUFJLENBQUMsVUFBQyxJQUFJO3VCQUFLLElBQUksQ0FBQyxTQUFTLEtBQUssSUFBSTtlQUFBLENBQUMsQ0FBQzthQUN4RDs7OztlQXZCZ0IsWUFBWTs7O3lCQUFaLFlBQVkiLCJmaWxlIjoidXNlcnMtZXM1LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypqc2hpbnQgZXNuZXh0OiB0cnVlLCBnbG9iYWxzdHJpY3Q6IHRydWUqL1xyXG5cclxuLyoqXHJcbiAqIE1vZHVsZSB0byBtYW5hZ2UgdXNlcnNcclxuICogQGF1dGhvciBKdWxpZW4gUm9jaGVcclxuICogQG1vZHVsZSBzZXJ2aWNlcy91c2Vyc1xyXG4gKiBAZXhwb3J0cyBVc2Vyc1NlcnZpY2VcclxuICogQHZlcnNpb24gMS4wXHJcbiAqIEBzaW5jZSAxLjBcclxuICovXHJcblxyXG4ndXNlIHN0cmljdCc7XHJcblxyXG4vKipcclxuICogQGNsYXNzIFVzZXJcclxuICovXHJcbmNsYXNzIFVzZXIge1xyXG4gICAgLyoqXHJcbiAgICAgKiBAY29uc3RydWN0b3JcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbdXVpZD0nMSddXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gW2ZpcnN0TmFtZT0nQnJ1Y2UnXVxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IFtsYXN0TmFtZT0nV2F5bmUnXVxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IFthZ2U9MzZdXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yICh1dWlkID0gJzEnLCBmaXJzdE5hbWUgPSAnQnJ1Y2UnLCBsYXN0TmFtZSA9ICdXYXluZScsIGFnZSA9IDM4KSB7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQHByb3BlcnR5IHtzdHJpbmd9IHV1aWRcclxuICAgICAgICAgKi9cclxuICAgICAgICB0aGlzLnV1aWQgPSB1dWlkO1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBAcHJvcGVydHkge3N0cmluZ30gZmlyc3ROYW1lXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdGhpcy5maXJzdE5hbWUgPSBmaXJzdE5hbWU7XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBsYXN0TmFtZVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHRoaXMubGFzdE5hbWUgPSBsYXN0TmFtZTtcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQHByb3BlcnR5IHtudW1iZXJ9IGFnZVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHRoaXMuYWdlID0gYWdlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmV0dXJuIHRoZSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgYSB1c2VyXHJcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfVxyXG4gICAgICovXHJcbiAgICB0b1N0cmluZygpIHtcclxuICAgICAgICByZXR1cm4gYCgke3RoaXMudXVpZH0pICR7dGhpcy5maXJzdE5hbWV9ICR7dGhpcy5sYXN0TmFtZX06IGFnZSAke3RoaXMuYWdlfWA7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBMaXN0IG9mIHVzZXJzXHJcbiAqXHJcbiAqIEBjb25zdGFudFxyXG4gKiBAcHJpdmF0ZVxyXG4gKiBAdHlwZSB7VXNlcltdfVxyXG4gKi9cclxuY29uc3QgVVNFUlMgPSBbXHJcbiAgICBuZXcgVXNlcigpLFxyXG4gICAgbmV3IFVzZXIoJzInLCAnUGV0ZXInLCAnUGFya2VyJywgMjIpLFxyXG4gICAgbmV3IFVzZXIoJzMnLCAnQ2xhcmsnLCAnS2VudCcsIDMyKSxcclxuICAgIG5ldyBVc2VyKCc0JywgJ1RvbnknLCAnU3RhcmsnKVxyXG5dO1xyXG5cclxuLyoqXHJcbiAqIEBjbGFzcyBVc2Vyc1NlcnZpY2VcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVzZXJzU2VydmljZSB7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm4gdGhlIGxpc3Qgb2YgQHtVc2VyfVxyXG4gICAgICpcclxuICAgICAqIEBtZXRob2RcclxuICAgICAqIEBzdGF0aWNcclxuICAgICAqIEByZXR1cm5zIHtVc2VyW119XHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBmZXRjaCgpIHtcclxuICAgICAgICByZXR1cm4gVVNFUlM7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBGaW5kIHRoZSBleHBlY3RlZCB1c2VyIGJ5IG5hbWVcclxuICAgICAqXHJcbiAgICAgKiBAbWV0aG9kXHJcbiAgICAgKiBAc3RhdGljXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxyXG4gICAgICogQHJldHVybnMge1VzZXJ9XHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBmaW5kQnlOYW1lKG5hbWUpIHtcclxuICAgICAgICByZXR1cm4gVVNFUlMuZmluZCgodXNlcikgPT4gdXNlci5maXJzdE5hbWUgPT09IG5hbWUpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==