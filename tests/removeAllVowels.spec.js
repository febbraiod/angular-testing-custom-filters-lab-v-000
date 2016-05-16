describe('removeAllVowels Filter', function () {
	var $controller, removeAllVowels;

	beforeEach(module('app'));

	beforeEach(inject(function ($filter) {
    removeAllVowels = $filter('removeAllVowels');
  }));

  it('should remove vowels from input', function(){
    expect(removeAllVowels('Don Febbraio')).toEqual('Dn Fbbr');
    expect(removeAllVowels('lalalala')).toEqual('llll');
  });

});
