import { Mongo } from 'meteor/mongo';
import {Childcolb} from './child.jsx';


Meteor.startup(function(){
  if(Meteor.isServer){
  if (Childcolb.find().count()===0){

Childcolb.insert({ cat:'parents1',cat2: 'behaviour',title: ['mongodb', 'database', 'NoSQL','mongodb', 'database', 'NoSQL','mongodb', 'database', 'NoSQL'],
body: ['mongodb', 'database', 'NoSQL','mongodb', 'database', 'NoSQL','mongodb', 'database', 'NoSQL']});

Childcolb.insert({
cat:'parents1',cat2: 'info',title: ['Is your baby ready to start eating foods?', 'What should your baby eat in the first year?', 'NoSQL','mongodb', 'database', 'NoSQL','mongodb', 'database', 'NoSQL'],
body: ['Formula? Every baby is different – but you can look for these signs to tell that your baby Is developmentally ready to start trying foods: your baby has good head control. Your baby can keep his or her head in a Steady, upright position. Your baby can sit up with little or no support. Your baby needs to be able to sit upright in a highchair to swallow well. Your baby is able to grab objects. Your baby uses his or her hands to grab and hold onto objects, like a spoon. Your baby shows interest in what others are eating. Your baby opens his or her mouth and leans forward when food is offered. Your baby is about 6 months old. At around 6 months of age your baby’s gut has developed to digest foods other than breast milk or formula. If your baby can do ALL of these things then he or she is ready to try first foods', 'When your baby is 6-12 months old, it is important to start getting him or her onboard with a variety of healthy foods, including: Different food groups. Introduce your baby to a variety of foods including fruits, vegetables, grains, dairy and proteins. Different colors. Encourage your baby to eat bright colored foods like green broccoli, orange sweet potato, yellow banana, red strawberries, black beans, and more! Different textures. Between ages 6-12 months your baby will be ready to try different food textures including smooth, chunky and soft finger foods. But remember, your baby is still learning how to chew and swallow so be sure to watch your baby closely when he or she eats because anything could be a choking hazard, especially foods that are small and/or hard. As a tip, you can soften foods by cooking them or pureeing them into a smoother texture. By introducing a variety of nutritious foods now you are teaching your baby healthy eating habits that can last a lifetime', 'NoSQL','mongodb', 'database', 'NoSQL','mongodb', 'database', 'NoSQL']});

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
