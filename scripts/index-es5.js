System.register("index", ["users"], function (_export) {
    var UsersService, ulElement;
    return {
        setters: [function (_users) {
            UsersService = _users["default"];
        }],
        execute: function () {
            /*jshint esnext: true, globalstrict: true*/

            /**
             * Main module to instantiate the application
             * @author Julien Roche
             * @version 1.0
             * @since 1.0
             */

            "use strict";

            ulElement = document.querySelector("ul");

            // Inject users into the HTML
            UsersService.fetch().forEach(function (user) {
                var liElement = document.createElement("li");
                liElement.innerHTML = user.toString();
                ulElement.appendChild(liElement);
            });

            // Listen to events
            document.querySelector("button").addEventListener("click", function (event) {
                event.preventDefault();

                var name = window.prompt("Please fill a name to search");

                if (name) {
                    var foundUser = UsersService.findByName(name);

                    if (foundUser) {
                        window.alert("Somebody savvvvveed meeeeeeeeeeeeee");
                    } else {
                        window.alert("" + name + ", where are you ???");
                    }
                }
            }, false);
        }
    };
});
// First imports (at the top of the files)

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFZTyxZQUFZLEVBR2YsU0FBUzs7O0FBSE4sd0JBQVk7Ozs7Ozs7Ozs7OztBQUhuQix3QkFBWSxDQUFDOztBQU1ULHFCQUFTLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUM7OztBQUc1Qyx3QkFBWSxDQUFDLEtBQUssRUFBRSxDQUFDLE9BQU8sQ0FDeEIsVUFBQyxJQUFJLEVBQUs7QUFDTixvQkFBSSxTQUFTLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUM3Qyx5QkFBUyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7QUFDdEMseUJBQVMsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUM7YUFDcEMsQ0FDSixDQUFDOzs7QUFHRixvQkFBUSxDQUNILGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FDdkIsZ0JBQWdCLENBQ2pCLE9BQU8sRUFDUCxVQUFDLEtBQUssRUFBSztBQUNQLHFCQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7O0FBRXZCLG9CQUFJLElBQUksR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLDhCQUE4QixDQUFDLENBQUM7O0FBRXpELG9CQUFJLElBQUksRUFBRTtBQUNOLHdCQUFJLFNBQVMsR0FBRyxZQUFZLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDOztBQUU5Qyx3QkFBSSxTQUFTLEVBQUU7QUFDWCw4QkFBTSxDQUFDLEtBQUssQ0FBQyxxQ0FBcUMsQ0FBQyxDQUFDO3FCQUV2RCxNQUFNO0FBQ0gsOEJBQU0sQ0FBQyxLQUFLLE1BQUksSUFBSSx5QkFBc0IsQ0FBQztxQkFDOUM7aUJBQ0o7YUFDSixFQUNELEtBQUssQ0FDUixDQUFDIiwiZmlsZSI6ImluZGV4LWVzNS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qanNoaW50IGVzbmV4dDogdHJ1ZSwgZ2xvYmFsc3RyaWN0OiB0cnVlKi9cclxuXHJcbi8qKlxyXG4gKiBNYWluIG1vZHVsZSB0byBpbnN0YW50aWF0ZSB0aGUgYXBwbGljYXRpb25cclxuICogQGF1dGhvciBKdWxpZW4gUm9jaGVcclxuICogQHZlcnNpb24gMS4wXHJcbiAqIEBzaW5jZSAxLjBcclxuICovXHJcblxyXG4ndXNlIHN0cmljdCc7XHJcblxyXG4vLyBGaXJzdCBpbXBvcnRzIChhdCB0aGUgdG9wIG9mIHRoZSBmaWxlcylcclxuaW1wb3J0IFVzZXJzU2VydmljZSBmcm9tICd1c2Vycyc7XHJcblxyXG52YXJcclxuICAgIHVsRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3VsJyk7XHJcblxyXG4vLyBJbmplY3QgdXNlcnMgaW50byB0aGUgSFRNTFxyXG5Vc2Vyc1NlcnZpY2UuZmV0Y2goKS5mb3JFYWNoKFxyXG4gICAgKHVzZXIpID0+IHtcclxuICAgICAgICBsZXQgbGlFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICAgICAgICBsaUVsZW1lbnQuaW5uZXJIVE1MID0gdXNlci50b1N0cmluZygpO1xyXG4gICAgICAgIHVsRWxlbWVudC5hcHBlbmRDaGlsZChsaUVsZW1lbnQpO1xyXG4gICAgfVxyXG4pO1xyXG5cclxuLy8gTGlzdGVuIHRvIGV2ZW50c1xyXG5kb2N1bWVudFxyXG4gICAgLnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvbicpXHJcbiAgICAuYWRkRXZlbnRMaXN0ZW5lcihcclxuICAgICdjbGljaycsXHJcbiAgICAoZXZlbnQpID0+IHtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICBsZXQgbmFtZSA9IHdpbmRvdy5wcm9tcHQoJ1BsZWFzZSBmaWxsIGEgbmFtZSB0byBzZWFyY2gnKTtcclxuXHJcbiAgICAgICAgaWYgKG5hbWUpIHtcclxuICAgICAgICAgICAgbGV0IGZvdW5kVXNlciA9IFVzZXJzU2VydmljZS5maW5kQnlOYW1lKG5hbWUpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGZvdW5kVXNlcikge1xyXG4gICAgICAgICAgICAgICAgd2luZG93LmFsZXJ0KCdTb21lYm9keSBzYXZ2dnZ2ZWVkIG1lZWVlZWVlZWVlZWVlZScpO1xyXG5cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5hbGVydChgJHtuYW1lfSwgd2hlcmUgYXJlIHlvdSA/Pz9gKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBmYWxzZVxyXG4pO1xyXG4iXX0=