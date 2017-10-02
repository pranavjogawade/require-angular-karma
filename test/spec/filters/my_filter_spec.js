define(['angular'], 
  function(angular) {

    describe('myFilter', function() {

      // Here we register the function returned by the myFilter AMD module
      beforeEach(angular.mock.module(function($filterProvider) {
        $filterprovider.register('myFilter', myFilter);
      }));

      // Our first test!!!!
      it('should not be null', inject(function($filter) {
        expect($filter('myFilter')).not.toBeNull();
      }));

    });
  }
);