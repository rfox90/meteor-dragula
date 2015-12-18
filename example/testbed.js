Items = new Meteor.Collection('items');
if (Meteor.isClient) {
	
	Template.dragList.helpers({
		items: function(){
			return Items.find({});
		}
	});
	Template.dragList.onRendered(function(){
		dragula([document.getElementById('left1'), document.getElementById('right1')]);
	});
}

if (Meteor.isServer) {
	Meteor.startup(function () {
		if (Items.find({}).count() === 0) {
			_(10).times(function(n) {
				Items.insert({name:'Item'+n,number:n});
			});
		}
	});
}
