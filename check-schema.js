var Validator = require('jsonschema').Validator;
var fs = require('fs');
var v = new Validator();
var tree = JSON.parse(fs.readFileSync("viewertree.json", "utf-8"));
var schema = JSON.parse(fs.readFileSync("schema.json", "utf-8"));
console.log(v.validate(tree, schema));
