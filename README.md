Angular C3    [![Build Status](https://travis-ci.org/Hendrixer/ngFx.svg?branch=master)](https://travis-ci.org/Hendrixer/ng-Fx)   <img src="http://img.shields.io/badge/Built%20with-Gulp-red.svg" />
===============

### A simple way to add custom C3 charts to your angular apps. Charts based off [C3](http://http://c3js.org/).

## Dependencies
+ Angular.js (1.2+)
+ C3js
+ D3js

## Downloading
1. The best way to install ng-Fx is to use bower
    + ```bower install angular-c3 --save```
2. Or, from this repo
  + you'll need the main file in ```dist/c3-chart.js```


##Contributing
1. Fork it
2. Clone your fork
3. Create new branch
4. Make changes
5. Make test and check test
6. Build it, run ```gulp``` and the files will be linted, concatenated, and minified
7. Push to new branch on your forked repo
8. Pull request from your branch to ngFx master

###Format for pull request
+ Pretty standard
  + in your commit message; ```(type) message [issue # closed]```
    + ```(bug) killed that bug, closes #45```
  + if you're submitting new animations:
    + ```(new fx) added 3d rotation animation ```
+ Submit issues as you see them. There are probably better, faster, easier ways to achieve what ngFx is designed to do so.

###Testing
+ angular c3 uses Karma + Jasmine + Travis for unit and ci
+ Make sure you didn't break anything
  + run ```karma start``` to test in Chrome with karma
+ Features will not be accepted without specs created for them
+ Run ```gulp``` and all the source files will be watched and concatenated
+ Open the ```index.html``` and use the test app as a playground