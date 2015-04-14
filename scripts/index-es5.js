/*jshint esnext: true*/

/**
 * Main module to instantiate the application
 * @author Julien Roche
 * @version 1.0
 * @since 1.0
 */

"use strict";

window.app = window.app || {};

(function (app) {
    "use strict";

    var ulElement = document.querySelector("ul");

    app.users.fetch().forEach(function (user) {
        var liElement = document.createElement("li");
        liElement.innerHTML = "(" + user.uuid + ") " + user.firstName + " " + user.lastName + ": age " + user.age;
        ulElement.appendChild(liElement);
    });
})(window.app);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBU0EsTUFBTSxDQUFDLEdBQUcsR0FBRyxNQUFNLENBQUMsR0FBRyxJQUFJLEVBQUcsQ0FBQzs7QUFFL0IsQ0FBQyxVQUFVLEdBQUcsRUFBRTtBQUNaLGdCQUFZLENBQUM7O0FBRWIsUUFDSSxTQUFTLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQzs7QUFFN0MsT0FBRyxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQyxPQUFPLENBQ3JCLFVBQUMsSUFBSSxFQUFLO0FBQ04sWUFBSSxTQUFTLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUM3QyxpQkFBUyxDQUFDLFNBQVMsR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQztBQUMxRyxpQkFBUyxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQztLQUNwQyxDQUNKLENBQUM7Q0FFTCxDQUFBLENBQUUsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDIiwiZmlsZSI6ImluZGV4LWVzNS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qanNoaW50IGVzbmV4dDogdHJ1ZSovXHJcblxyXG4vKipcclxuICogTWFpbiBtb2R1bGUgdG8gaW5zdGFudGlhdGUgdGhlIGFwcGxpY2F0aW9uXHJcbiAqIEBhdXRob3IgSnVsaWVuIFJvY2hlXHJcbiAqIEB2ZXJzaW9uIDEuMFxyXG4gKiBAc2luY2UgMS4wXHJcbiAqL1xyXG5cclxud2luZG93LmFwcCA9IHdpbmRvdy5hcHAgfHwgeyB9O1xyXG5cclxuKGZ1bmN0aW9uIChhcHApIHtcclxuICAgICd1c2Ugc3RyaWN0JztcclxuXHJcbiAgICB2YXJcclxuICAgICAgICB1bEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCd1bCcpO1xyXG5cclxuICAgIGFwcC51c2Vycy5mZXRjaCgpLmZvckVhY2goXHJcbiAgICAgICAgKHVzZXIpID0+IHtcclxuICAgICAgICAgICAgdmFyIGxpRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgICAgICAgICAgIGxpRWxlbWVudC5pbm5lckhUTUwgPSAnKCcgKyB1c2VyLnV1aWQgKyAnKSAnICsgdXNlci5maXJzdE5hbWUgKyAnICcgKyB1c2VyLmxhc3ROYW1lICsgJzogYWdlICcgKyB1c2VyLmFnZTtcclxuICAgICAgICAgICAgdWxFbGVtZW50LmFwcGVuZENoaWxkKGxpRWxlbWVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgKTtcclxuXHJcbn0pKHdpbmRvdy5hcHApO1xyXG4iXX0=