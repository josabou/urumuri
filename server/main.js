import { Meteor } from 'meteor/meteor';
import '../imports/ourdb/Users.js';
import { user } from '../imports/api/user.js'
import { child } from '../imports/api/child.js'
import { vaccines } from '../imports/api/vaccines.js'
import '../imports/ourdb/Contents.js';
//import '../lib/at_config.js'

Meteor.startup(() => {
    if (Meteor.isServer) {
        if (vaccines.find().count() === 0) {
            [
                { name: "Baccille Calmette Guérin vaccine", age: " avutse" },
                { name: "Poliomyélite I", age: "ukwezi nigice" },
                { name: "Pentavalent I", age: "amezi abiri nigice" },
                { name: "Pneumocoque", age: "atatu nigice" },
                { name: "Rougeole", age: "icyenda" },
            ].forEach(function(vaccine) {
                vaccines.insert(vaccine);
            });
        }
    }
});