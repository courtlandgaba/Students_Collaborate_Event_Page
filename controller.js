
(function () {
    "use strict";
    angular.module('eventApp')

//////////////////////main controller//////////////////////////////////////////
//////////////////////main controller//////////////////////////////////////////
//////////////////////main controller//////////////////////////////////////////

    .controller('MainController', function (SplashService, RuleService, RsvpService, ConfirmService, EventService, PersonService, $location, $routeParams, _, $rootScope, $scope) {

        var mainCtrl = this;

    //MAIN CRUD: SPLASH//////////////////////////////////////////////////////////////////
        SplashService.getSingleSplash($routeParams.SplashId).success(function (splash) {
            mainCtrl.singleSplash=splash;
        });
        SplashService.getSplash().success(function (splash) {
            mainCtrl.Splash = splash;
        });
        mainCtrl.currentIndex = $routeParams.SplashId;

    //MAIN CRUD: RULES//////////////////////////////////////////////////////////////////
        RuleService.getSingleRule($routeParams.RuleId).success(function (rule) {
            mainCtrl.singleRule=rule;
        });
        RuleService.getRule().success(function (rule) {
            mainCtrl.Rule = rule;
        });
        mainCtrl.currentIndex = $routeParams.RuleId;

    //MAIN CRUD: RSVP//////////////////////////////////////////////////////////////////
        RsvpService.getSingleRsvp($routeParams.RsvpId).success(function (rsvp) {
            mainCtrl.singleRsvp=rsvp;
        });
        RsvpService.getRsvp().success(function (rsvp) {
            mainCtrl.Rsvp = rsvp;
        });
        mainCtrl.currentIndex = $routeParams.RsvpId;

        mainCtrl.addRsvp = function (rsvp) {
            RsvpService.createRsvp(rsvp);
            $location.path('/');
        };
    //MAIN CRUD: CONFIRM RSVP//////////////////////////////////////////////////////////////////
        ConfirmService.getSingleConfirm($routeParams.ConfirmId).success(function (rsvp) {
            mainCtrl.singleConfirm=rsvp;
        });
        ConfirmService.getConfirm().success(function (rsvp) {
            mainCtrl.Confirm = rsvp;
        });
        mainCtrl.currentIndex = $routeParams.ConfirmId;


    //MAIN CRUD: EVENT//////////////////////////////////////////////////////////////////
        EventService.getSingleEvent($routeParams.EventId).success(function (event) {
            mainCtrl.singleEvent=event;
        });
        EventService.getEvent().success(function (event) {
            mainCtrl.Event = event;
        });
        mainCtrl.currentIndex = $routeParams.EventId;

    //MAIN CRUD: PERSON//////////////////////////////////////////////////////////////////
        PersonService.getSinglePerson($routeParams.PersonId).success(function (person) {
            mainCtrl.singlePerson=person;
        });
        PersonService.getPerson().success(function (person) {
            mainCtrl.Person = person;
        });
        mainCtrl.currentIndex = $routeParams.PersonId;
    })

//////////////////////admin controller//////////////////////////////////////////
//////////////////////admin controller//////////////////////////////////////////
//////////////////////admin controller//////////////////////////////////////////

    .controller('AdminController', function (SplashService, RuleService, RsvpService, ConfirmService, EventService, PersonService, $location, $routeParams, _, $rootScope) {

        var adminCtrl = this;

    // ADMIN CRUD: SPLASH PAGE//////////////////////////////////////////////////////////////////
        SplashService.getSplash().success(function (splash) {
            adminCtrl.Splash = splash;
        });

        SplashService.getSingleSplash($routeParams.SplashId).success(function (splash) {
            adminCtrl.singleSplash=splash;
        });
        adminCtrl.currentIndex = $routeParams.SplashId;

        adminCtrl.addSplash = function (splash) {
            SplashService.createSplash(splash);
            $location.path('/admin');
        };
        adminCtrl.deleteSplash = function (splash) {
            SplashService.deletePerson(person);
        };
        adminCtrl.updateSplash = function (splash) {
            SplashService.updateSplash(splash, $routeParams.SplashId);
            $location.path('/admin');
        };
    // ADMIN CRUD: ABOUT///RULE PAGE//////////////////////////////////////////////////////////////////
        RuleService.getRule().success(function (rule) {
            adminCtrl.Rule = rule;
        });

        RuleService.getSingleRule($routeParams.RuleId).success(function (rule) {
            adminCtrl.singleRule=rule;
        });
        adminCtrl.currentIndex = $routeParams.RuleId;

        adminCtrl.addRule = function (rule) {
            RuleService.createRule(rule);
            $location.path('/admin');
        };
        adminCtrl.deleteRule = function (rule) {
            RuleService.deleteRule(rule);
        };
        adminCtrl.updateRule = function (rule) {
            RuleService.updateRule(rule, $routeParams.RuleId);
            $location.path('/admin');
        };
    // ADMIN CRUD: RSVP PAGE//////////////////////////////////////////////////////////////////
        RsvpService.getRsvp().success(function (rsvp) {
            adminCtrl.Rsvp = rsvp;
        });

        RsvpService.getSingleRsvp($routeParams.RsvpId).success(function (rsvp) {
            adminCtrl.singleRsvp=rsvp;
        });
        adminCtrl.currentIndex = $routeParams.RsvpId;

        adminCtrl.addRsvp = function (rsvp) {
            RsvpService.createRsvp(rsvp);
            $location.path('/admin');
        };
        adminCtrl.deleteRsvp = function (rsvp) {
            RsvpService.deleteRsvp(rsvp);
        };
        adminCtrl.updateRsvp = function (rsvp) {
            RsvpService.updateRsvp(rsvp, $routeParams.RsvpId);
            $location.path('/admin');
        };
    // ADMIN CRUD: CONFIRM  RSVP PAGE//////////////////////////////////////////////////////////////////
        ConfirmService.getConfirm().success(function (confirm) {
            adminCtrl.Confirm = confirm;
        });

        ConfirmService.getSingleConfirm($routeParams.ConfirmId).success(function (confirm) {
            adminCtrl.singleConfirm=confirm;
        });
        adminCtrl.currentIndex = $routeParams.ConfirmId;

        adminCtrl.addConfirm = function (confirm) {
            ConfirmService.createConfirm(confirm);
            $location.path('/admin');
        };
        adminCtrl.deleteConfirm = function (confirm) {
            ConfirmService.deleteConfirm(confirm);
        };
        adminCtrl.updateConfirm = function (confirm) {
            ConfirmService.updateConfirm(confirm, $routeParams.ConfirmId);
            $location.path('/admin');
        };
    // ADMIN CRUD: EVENTS PAGE//////////////////////////////////////////////////////////////////
        EventService.getEvent().success(function (event) {
            adminCtrl.Event = event;
        });

        EventService.getSingleEvent($routeParams.EventId).success(function (event) {
            adminCtrl.singleEvent= event;
        });
        adminCtrl.currentIndex = $routeParams.EventId;

        adminCtrl.addEvent = function (event) {
            EventService.createEvent(event);
            $location.path('/admin');
        };
        adminCtrl.deleteEvent = function (event) {
            EventService.deleteEvent(event);
        };
        adminCtrl.updateEvent = function (event) {
            EventService.updateEvent(event, $routeParams.EventId);
            $location.path('/admin');
        };
    // ADMIN CRUD: FEATURED PEOPLE PAGE//////////////////////////////////////////////////////////////////
        PersonService.getPerson().success(function (person) {
            adminCtrl.Person = person;
        });

        PersonService.getSinglePerson($routeParams.PersonId).success(function (person) {
            adminCtrl.singlePerson=person;
        });
        adminCtrl.currentIndex = $routeParams.PersonId;

        adminCtrl.addPerson = function (person) {
            PersonService.createPerson(person);
            $location.path('/admin');
        };
        adminCtrl.deletePerson = function (person) {
            PersonService.deletePerson(person);
        };
        adminCtrl.updatePerson = function (person) {
            PersonService.updatePerson(person, $routeParams.PersonId);
            $location.path('/admin');
        };
    })

})();
