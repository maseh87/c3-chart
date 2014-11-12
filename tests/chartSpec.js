describe('chart', function() {
  //load variables in closure scope to be used throughout tests
  var $scope, element, isolate;
  //load the chart module to gain access to the chart directive
  beforeEach(module('angular-c3'));
  //inject the rootscope and compile function to test the chart directive
  beforeEach(inject(function($rootScope, $compile) {
    $scope = $rootScope.$new();
    //data that is used to populate the chart directive
    $scope.config = {
      data: {
        columns: [
          ['Profile Completion', 100, 90, 75, 88, 12, 40],
          ['Interests Declared', 75, 99, 65, 12, 24, 63]
        ]
      },
      axis: {
        x: {
          type: 'category',
          categories: ['Josh', 'Mase', 'Xianhui', 'James', 'Joe', 'That One Guy']
        }
      }
    };

    element = "<c3-chart id='chart' config='config'></c3-chart>";
    //complile the element to gain access to the link function
    element = $compile(element)($scope);
    //digest the scope to register the element
    $scope.$digest();
    isolate = element.isolateScope();
  }));

  it('should have isolate scope', function() {
    expect(isolate).to.be.an('object');
  });

  it('should have a config property on the isolate scope', function() {
    expect(isolate.config).to.be.an('object');
  });

  it('should update chart', function() {
    $scope.config.data.columns.pop();
    $scope.$digest();
    expect(isolate.config.data.columns.length).to.be(1);
  });
  //if no type is specified it should be set to line
  it('should have a default type property of line', function() {
    $scope.$digest();
    expect(isolate.config.type).to.equal('line');
  });
});