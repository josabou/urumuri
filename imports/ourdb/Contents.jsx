import { Mongo } from 'meteor/mongo';

Childcolb = new Mongo.Collection('Childcolb');
Parentscolb = new Mongo.Collection('Parentscolb');
Pregnantcolb = new Mongo.Collection('Pregnantcolb');
Childcoln = new Mongo.Collection('Childcoln');
Parentscoln = new Mongo.Collection('Parentscoln');
Pregnantcoln= new Mongo.Collection('Pregnantcoln');
Childcoli = new Mongo.Collection('Parentscoli');
Parentscoli = new Mongo.Collection('Parentscoli');
Pregnantcoli = new Mongo.Collection('Pregnantcoli');

db.Childcolb.insert([
   {
      title: 'fromto',
      description: 'Nutrition during pregnancy and in the first years of a child’s life provides the essential building blocks for brain development, healthy growth and a strong immune system. In fact, a growing body of scientific evidence shows that the foundations of a person’s lifelong health—including their predisposition to obesity and certain chronic diseases—are largely set during this 1,000 day window.',
      by: 'jean-salvi',
      iurl: 'http://www.tutorialspoint.com',
      tags: ['health', 'database', 'NoSQL'],
      likes: 100
   },

   {
      title: 'NoSQL Database',
      description: "NoSQL database doesn't have tables",
      by: 'tutorials point',
      url: 'http://www.tutorialspoint.com',
      tags: ['mongodb', 'database', 'NoSQL'],
      likes: 20,
      comments: [
         {
            user:'user1',
            message: 'My first comment',
            dateCreated: new Date(2013,11,10,2,35),
            like: 0
         }
      ]
   }
])
