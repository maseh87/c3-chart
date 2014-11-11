;(function(c3){
  'use strict';

angular.module('ngC3', [])
  .factory('c3Factory', function() {
    var chart = {};
    var allCharts = {};
    var decorateChart = function(chart) {
      console.log(chart.internal);
      chart.on = function( what, then ) {
        // chart[what](then);
      };
    };

    chart.get = function(id) {
      return allCharts[id];
    };

    chart.register = function(id, chart) {
      decorateChart(chart);
      allCharts[id] = chart;
    };

    return chart;
  })
  .directive('c3Chart', ['c3Factory', function(c3Factory) {

    //color patterns for chart coloring
    var patterns = {
      light: ['#1f77b4', '#aec7e8', '#ff7f0e', '#ffbb78', '#2ca02c', '#98df8a', '#d62728', '#ff9896'],
      dark: ['#9467bd', '#c5b0d5', '#8c564b', '#c49c94', '#e377c2', '#f7b6d2', '#7f7f7f', '#c7c7c7'],
      material: ['#e51c23', '#673ab7', '#5677fc', '#03a9f4', '#00bcd4', '#259b24', '#ffeb3b', '#ff9800']
    };

    //random number to attach to the chart id
    var chartIdCounter = Math.floor((Math.random()*1000)+1);

    return {
      restrict: 'EAC',
      scope: {
        config: '='
        // grid: '=',
        // axis: '='
      },
      template: '<div id="chart" style="height: 300px;"></div>',
      replace: true,
      link: function(scope, element, attrs) {
        //available option to show gridlines for chart
        //generate c3 chart data
        var chartData = scope.config;
        chartData.bindto = '#chart';
        console.log(chartData);
        //assign a type of line if undefined
        // chartData.data.type = attrs.chart? attrs.chart : scope.data.type? scope.data.type : 'line';

        // //Reload the chart if the data changes
        // scope.$watch('data', function(data, prevData) {
        //   if(chart) {
        //     chart.load(data);
        //     if(data.columns.length < prevData.columns.length) {
        //       chart.unload(['data' + prevData.columns.length]);
        //     }
        //   }
        // });
        // //ran if there are changes to the chart
        // var onChartChanged = function(chart) {
        //   if(chart) {
        //     scope.data.type = chart;
        //     chart.load(data);
        //   }
        // };
        // //watch the chart for any changes
        // scope.$watch(function() {
        //   return attrs.chart;
        // }, onChartChanged);

        //Generating the chart
        var chart = c3.generate(chartData);
        c3Factory.register('#chart', chart);
        console.log(c3Factory.get('#chart'));
      }
    };
  }]);
}(c3));
