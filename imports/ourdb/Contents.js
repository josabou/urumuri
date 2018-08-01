import { Mongo } from 'meteor/mongo';
import {Childcolb} from './child.jsx';


Meteor.startup(function(){
  if(Meteor.isServer){
  if (Childcolb.find().count()===0){

Childcolb.insert({ cat:'parents1',cat2: 'behaviour',title: ['mongodb', 'database', 'NoSQL','mongodb', 'database', 'NoSQL','mongodb', 'database', 'NoSQL'],
body: ['mongodb', 'database', 'NoSQL','mongodb', 'database', 'NoSQL','mongodb', 'database', 'NoSQL']});

Childcolb.insert({
cat:'parents1',cat2: 'info',title: ['mongodb', 'database', 'NoSQL','mongodb', 'database', 'NoSQL','mongodb', 'database', 'NoSQL'],
body: ['mongodb', 'database', 'NoSQL','mongodb', 'database', 'NoSQL','mongodb', 'database', 'NoSQL']});

Childcolb.insert({
cat:'parents1',cat2: 'nutrition',title: ['mongodb', 'database', 'NoSQL','mongodb', 'database', 'NoSQL','mongodb', 'database', 'NoSQL'],
body: ['mongodb', 'database', 'NoSQL','mongodb', 'database', 'NoSQL','mongodb', 'database', 'NoSQL'],
more: ['mongodb', 'database', 'NoSQL','mongodb', 'database', 'NoSQL','mongodb', 'database', 'NoSQL']});

Childcolb.insert({
cat:'parents2',cat2: 'info',title: ['mongodb', 'database', 'NoSQL','mongodb', 'database', 'NoSQL','mongodb', 'database', 'NoSQL'],
body: ['mongodb', 'database', 'NoSQL','mongodb', 'database', 'NoSQL','mongodb', 'database', 'NoSQL']});

Childcolb.insert({
cat:'parents2',cat2: 'behaviour',title: ['mongodb', 'database', 'NoSQL','mongodb', 'database', 'NoSQL','mongodb', 'database', 'NoSQL'],
body: ['mongodb', 'database', 'NoSQL','mongodb', 'database', 'NoSQL','mongodb', 'database', 'NoSQL']});

Childcolb.insert({
cat:'parents2',cat2: 'nutrition',title: ['mongodb', 'database', 'NoSQL','mongodb', 'database', 'NoSQL','mongodb', 'database', 'NoSQL'],
body: ['mongodb', 'database', 'NoSQL','mongodb', 'database', 'NoSQL','mongodb', 'database', 'NoSQL']});

Childcolb.insert({
  cat:'parents3',cat2: 'behaviour',title: ['mongodb', 'database', 'NoSQL','mongodb', 'database', 'NoSQL','mongodb', 'database', 'NoSQL'],
  body: ['mongodb', 'database', 'NoSQL','mongodb', 'database', 'NoSQL','mongodb', 'database', 'NoSQL']});

Childcolb.insert({
  cat:'parents3',cat2: 'info',title: ['mongodb', 'database', 'NoSQL','mongodb', 'database', 'NoSQL','mongodb', 'database', 'NoSQL'],
  body: ['mongodb', 'database', 'NoSQL','mongodb', 'database', 'NoSQL','mongodb', 'database', 'NoSQL']
});
Childcolb.insert({ cat:'parents3',cat2: 'nutrition',title: ['mongodb', 'database', 'NoSQL','mongodb','mongodb', 'database', 'NoSQL', 'database', 'NoSQL'],
body: ['mongodb', 'database', 'NoSQL','mongodb', 'database', 'NoSQL','mongodb', 'database', 'NoSQL'],more: ['mongodb', 'database', 'NoSQL','mongodb', 'database', 'NoSQL','mongodb', 'database', 'NoSQL']});

}
Meteor.publish("Childcolb", function (){
    return Childcolb.find();
})
}});
