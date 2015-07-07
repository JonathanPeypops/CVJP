var app = angular.module('CV', ['CV.controllers']);
app.config(function(){
    console.log('app config');
});
app.run(function(){
    console.log('app run');
});