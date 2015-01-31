// insert your new code here

//Exercise 0:

// define a global variable:
var areGirlDevelopersCool = true;

//create a backbone model and store it as a variable called 'Person'

var Person = Backbone.Model.extend({
//give it defaults 
  defaults: {
    role: "student",
    imgUrl: "http://placepuppy.it/200/200",
    firstName: "",
    lastName: ""
  },
  generateUserName: function() {
    var name = this.get("firstName") + this.get("lastName")
    this.set("userName", name)
    return name
  },
    initialize: function() {
    this.generateUserName();
  }
});

  var person = new Person();

//OR: 
//   var person = new Person({
//   firstName: "Grace",
//     lastName: "Hopper",
//     role: "Computer Scientist",
//     imgUrl: "http://www.history.navy.mil/photos/images/h96000/h96920k.jpg"
// });

//Exercise 1:

//Define a backbone collection and store it as a variable called 'People

var People = Backbone.Collection.extend({
  model: Person,
  comparator: function(model) {
    return model.get('lastName').toLowerCase();
   }
});

var people = new People([
  {
    firstName: "Brenda",
    lastName: "Jin",
    role: "teacher",
    imgUrl: "https://pbs.twimg.com/profile_images/494918967329165312/_DNh8TnK.jpeg"
  },
  {
    firstName: "Pamela",
    lastName: "Fox",
    role: "teacher",
    imgUrl: "https://pbs.twimg.com/profile_images/458674563044233216/Rya_AmpS.jpeg"
  },
  {
    lastName: "Djaja",
    role: "TA",
    imgUrl: "https://lh6.googleusercontent.com/-RXfQUhzv7uQ/AAAAAAAAAAI/AAAAAAAAAAA/vO3ax0T-UzY/s128-c-k/photo.jpg"
  }
]);

people.add({
  firstName: 'Julee',
  lastName: 'Burdekin',
  role: 'Adobe host'
});

//Exercise 2 

//Define a backbone view of a model, store it as a variable called 'PersonView'
var PersonView = Backbone.View.extend({
  className: "rolodex",
  render: function() {
    var myImg = $('<img>').attr('src', this.model.get('imgUrl'));
    this.$el.append(myImg);
    return this;
    //this also passed:
    // var imgUrl = this.model.get('imgUrl');
    //   var newNode = $('<img src="' + imgUrl + '">');
    //   this.$el.append(newNode);
    //   return this;
  },
  events: {
    'click' : 'onClick'
  },

onClick: function() {
    // do something cool here
  }
});

var personView = new PersonView({
  model: person
});

// insert new code here

$(document).ready(function() {
  $('body').append(personView.render().$el);
});

//Exercise 3

//Define a Backbone View of a Collection and store it as a variable caleed 'RolodexView'
var RolodexView = Backbone.View.extend({
className: 'rolodex',
render:function() {
  var template = Handlebars.compile($("#rolodex-template").html());
  var rendered = template({products: this.collection.toJSON()});
  this.$el.append(rendered);
  return this;
  }
});

var rolodexView = new RolodexView({

});













