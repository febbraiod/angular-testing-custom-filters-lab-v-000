describe('Favorite Food Filter', function () {
	var $controller, favoriteFood;

	beforeEach(module('app'));

  beforeEach(inject(function ($filter) {
    favoriteFood = $filter('favoriteFood');
  }));

  var testData = [
    {name: 'Don', favoriteFood: 'pizza'}, {name: 'Chris', favoriteFood: 'MacNCheese'},
    {name: 'Mimi', favoriteFood: 'Kimchi'}, {name: 'DonJr', favoriteFood: 'Hotdogs'},
    {name: 'Rosie', favoriteFood: 'MacNCheese'}
  ];

	it('should filter out people by favorite foods', function(){
    expect(favoriteFood(testData, 'pizza')).toEqual([{name: 'Don', favoriteFood: 'pizza'}]);
    expect(favoriteFood(testData, 'MacNCheese')).toEqual([{name: 'Chris', favoriteFood: 'MacNCheese'}, {name: 'Rosie', favoriteFood: 'MacNCheese'}]);
  });
});
