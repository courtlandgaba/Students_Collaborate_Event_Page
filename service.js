(function () {
    "use strict";

    angular.module('eventApp')

        .factory('RuleService', function ($http, $rootScope) {

            var url = 'http://tiy-fee-rest.herokuapp.com/collections/courtland-final-rule';

            var createRule = function (Rule) {
                $http.post(url, Rule);
                $rootScope.$broadcast('Rule:created');
            };
            var getRule = function () {
                return $http.get(url);
            };
            var getSingleRule = function (Rule) {
                return $http.get(url + '/' + Rule);
            };
            var updateRule  = function (item, Rule) {
                $http.put(url + '/' + Rule, item);
                $rootScope.$broadcast('Rule:updated');
            };
            var deleteRule  = function (Rule) {
                $http.delete(url + '/' + Rule);
                $rootScope.$broadcast('Rule:deleted');
            };
            return {
                createRule: createRule,
                getRule: getRule,
                getSingleRule: getSingleRule,
                updateRule: updateRule,
                deleteRule: deleteRule,
            }
         })
         .factory('RsvpService', function ($http, $rootScope) {

             var url = 'http://tiy-fee-rest.herokuapp.com/collections/courtland-final-rsvpp';

             var createRsvp = function (Rsvp) {
                 $http.post(url, Rsvp);
                 $rootScope.$broadcast('Rsvp:created');
             };
             var getRsvp = function () {
                 return $http.get(url);
             };
             var getSingleRsvp = function (Rsvp) {
                 return $http.get(url + '/' + Rsvp);
             };
             var updateRsvp = function (item, Rsvp) {
                 $http.put(url + '/' + Rsvp, item);
                 $rootScope.$broadcast('Rsvp:updated');
             };
             var deleteRsvp = function (Rsvp) {
                 $http.delete(url + '/' + Rsvp);
                 $rootScope.$broadcast('Rsvp:deleted');
             };
             return {
                 createRsvp: createRsvp,
                 getRsvp: getRsvp,
                 getSingleRsvp: getSingleRsvp,
                 updateRsvp: updateRsvp,
                 deleteRsvp: deleteRsvp,
             }
         })
         .factory('ConfirmService', function ($http, $rootScope) {

              var url = 'http://tiy-fee-rest.herokuapp.com/collections/courtland-final-rsvpp-confirmmmmm';

              var createConfirm = function (Confirm) {
                  delete Confirm._id;
                  $http.post(url, Confirm);
                  $rootScope.$broadcast('Confirm:created');
              };
              var getConfirm = function () {
                  return $http.get(url);
              };
              var getSingleConfirm = function (Confirm) {
                  return $http.get(url + '/' + Confirm);
              };
              var updateConfirm = function (item, Confirm) {
                  $http.put(url + '/' + Confirm, item);
                  $rootScope.$broadcast('Confirm:updated');
              };
              var deleteConfirm = function (Confirm) {
                  $http.delete(url + '/' + Confirm);
                  $rootScope.$broadcast('Confirm:deleted');
              };
              return {
                  createConfirm: createConfirm,
                  getConfirm: getConfirm,
                  getSingleConfirm: getSingleConfirm,
                  updateConfirm: updateConfirm,
                  deleteConfirm: deleteConfirm,
              }

         })
         .factory('EventService', function ($http, $rootScope) {

             var url = 'http://tiy-fee-rest.herokuapp.com/collections/courtland-final-event';


             var createEvent = function (Event) {
                 $http.post(url, Event);
                 $rootScope.$broadcast('Event:created');
             };
             var getEvent = function () {
                 return $http.get(url);
             };
             var getSingleEvent = function (Event) {
                 return $http.get(url + '/' + Event);
             };
             var updateEvent  = function (item, Event) {
                 $http.put(url + '/' + Event, item);
                 $rootScope.$broadcast('Event:updated');
             };
             var deleteEvent  = function (Event) {
                 $http.delete(url + '/' + Event);
                 $rootScope.$broadcast('Event:deleted');
             };
             return {
                 createEvent: createEvent,
                 getEvent: getEvent,
                 getSingleEvent: getSingleEvent,
                 updateEvent: updateEvent,
                 deleteEvent: deleteEvent,
             }
         })
        .factory('PersonService', function ($http, $rootScope) {

            var url = 'http://tiy-fee-rest.herokuapp.com/collections/courtland-final-personnn';

            var createPerson = function (Person) {
                $http.post(url, Person);
                $rootScope.$broadcast('Person:created');
            };
            var getPerson = function () {
                return $http.get(url);
            };
            var getSinglePerson = function (Person) {
                return $http.get(url + '/' + Person);
            };
            var updatePerson  = function (item, Person) {
                $http.put(url + '/' + Person, item);
                $rootScope.$broadcast('Person:updated');
            };
            var deletePerson  = function (Person) {
                $http.delete(url + '/' + Person);
                $rootScope.$broadcast('Person:deleted');
            };
            return {
                createPerson: createPerson,
                getPerson: getPerson,
                getSinglePerson: getSinglePerson,
                updatePerson: updatePerson,
                deletePerson: deletePerson,
            }
        })
        .factory('GalleryService', function ($http, $rootScope) {

            var url = 'http://tiy-fee-rest.herokuapp.com/collections/courtland-final-photooooo';

            var createGallery = function (Gallery) {
                $http.post(url, Gallery);
                $rootScope.$broadcast('Gallery:created');
            };
            var getGallery = function () {
                return $http.get(url);
            };
            var getSingleGallery = function (Gallery) {
                return $http.get(url + '/' + Gallery);
            };
            var updateGallery  = function (item, Gallery) {
                $http.put(url + '/' + Gallery, item);
                $rootScope.$broadcast('Gallery:updated');
            };
            var deleteGallery  = function (Gallery) {
                $http.delete(url + '/' + Gallery);
                $rootScope.$broadcast('Gallery:deleted');
            };
            return {
                createGallery: createGallery,
                getGallery: getGallery,
                getSingleGallery: getSingleGallery,
                updateGallery: updateGallery,
                deleteGallery: deleteGallery,
            }
        })
        .factory('ContactService', function ($http, $rootScope) {

            var url = 'http://tiy-fee-rest.herokuapp.com/collections/courtland-final-contact';

            var createContact = function (Contact) {
                $http.post(url, Contact);
                $rootScope.$broadcast('Contact:created');
            };
            var getContact = function () {
                return $http.get(url);
            };
            var getSingleContact = function (Contact) {
                return $http.get(url + '/' + Contact);
            };
            var updateContact = function (item, Contact) {
                $http.put(url + '/' + Contact, item);
                $rootScope.$broadcast('Contact:updated');
            };
            var deleteContact = function (Contact) {
                $http.delete(url + '/' + Contact);
                $rootScope.$broadcast('Contact:deleted');
            };
            return {
                createContact: createContact,
                getContact: getContact,
                getSingleContact: getSingleContact,
                updateContact: updateContact,
                deleteContact: deleteContact,
            }
        })
})();
