const fs = require('fs');

"use strict";
(function character(Character){

Character.objects = function CharacterObjects(options){
}

var COP = Character.objects.prototype;

COP.load = new Promise(function(resolve, reject) {
	var _this = this;
	fs.readFile('./character.json', 'utf8', function readFileCallback(err, data){
    if (err){
      reject(err);
    } else {
    _this.saveData = JSON.parse(data);
    resolve("Character data loaded.");
	}});
});

COP.save = function (user, userID) {
//    json = JSON.stringify(obj); //convert it back to json
//    fs.writeFile('myjsonfile.json', json, 'utf8', callback); // write it back
}

})(typeof exports === 'undefined'? this.Character = {} : exports);
