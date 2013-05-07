smalltalk.addPackage('Maglev-Core', {});
smalltalk.addClass('Maglev', smalltalk.Object, [], 'Maglev-Core');


smalltalk.addClass('MaglevObject', smalltalk.Object, ['oop', 'instVars', 'class', 'inspect'], 'Maglev-Core');
smalltalk.addMethod(
unescape('_isLoaded'),
smalltalk.method({
selector: unescape('isLoaded'),
category: 'testing',
fn: function (){
var self=this;
return true;
return self;},
args: [],
source: unescape('isLoaded%0A%09%5E%20true'),
messageSends: [],
referencedClasses: []
}),
smalltalk.MaglevObject);


smalltalk.MaglevObject.klass.iVarNames = ['basetypes'];
smalltalk.addMethod(
unescape('_basetype'),
smalltalk.method({
selector: unescape('basetype'),
category: 'constants',
fn: function (){
var self=this;
return smalltalk.symbolFor("object");
return self;},
args: [],
source: unescape('basetype%0A%09%5E%20%23object'),
messageSends: [],
referencedClasses: []
}),
smalltalk.MaglevObject.klass);

smalltalk.addMethod(
unescape('_basetypes'),
smalltalk.method({
selector: unescape('basetypes'),
category: 'accessing',
fn: function (){
var self=this;
return self['@basetypes'];
return self;},
args: [],
source: unescape('basetypes%0A%09%5E%20basetypes'),
messageSends: [],
referencedClasses: []
}),
smalltalk.MaglevObject.klass);

smalltalk.addMethod(
unescape('_initialize'),
smalltalk.method({
selector: unescape('initialize'),
category: 'initializing',
fn: function (){
var self=this;
smalltalk.send(self, "_initializeBasetypes", []);
return self;},
args: [],
source: unescape('initialize%0A%09self%20initializeBasetypes.'),
messageSends: ["initializeBasetypes"],
referencedClasses: []
}),
smalltalk.MaglevObject.klass);

smalltalk.addMethod(
unescape('_initializeBasetypes'),
smalltalk.method({
selector: unescape('initializeBasetypes'),
category: 'initializing',
fn: function (){
var self=this;
(self['@basetypes']=(function($rec){smalltalk.send($rec, "_at_put_", [smalltalk.send(self, "_basetype", []), self]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send((smalltalk.Dictionary || Dictionary), "_new", [])));
smalltalk.send(smalltalk.send(self, "_allSubclasses", []), "_do_", [(function(cls){return smalltalk.send(self['@basetypes'], "_at_put_", [smalltalk.send(cls, "_basetype", []), cls]);})]);
return self;},
args: [],
source: unescape('initializeBasetypes%0A%09basetypes%20%3A%3D%20Dictionary%20new%0A%09%09at%3A%20self%20basetype%20put%3A%20self%3B%0A%09%09yourself.%0A%09self%20allSubclasses%20do%3A%20%5B%3Acls%20%7C%0A%09%09basetypes%20at%3A%20cls%20basetype%20put%3A%20cls%5D.'),
messageSends: ["at:put:", "basetype", "yourself", "new", "do:", "allSubclasses"],
referencedClasses: ["Dictionary"]
}),
smalltalk.MaglevObject.klass);

smalltalk.addMethod(
unescape('_inlineViewClass'),
smalltalk.method({
selector: unescape('inlineViewClass'),
category: 'constants',
fn: function (){
var self=this;
return (smalltalk.MaglevObjectInline || MaglevObjectInline);
return self;},
args: [],
source: unescape('inlineViewClass%0A%09%5E%20MaglevObjectInline'),
messageSends: [],
referencedClasses: ["MaglevObjectInline"]
}),
smalltalk.MaglevObject.klass);

smalltalk.addMethod(
unescape('_inlineViewComponent'),
smalltalk.method({
selector: unescape('inlineViewComponent'),
category: 'rendering',
fn: function (){
var self=this;
return (function($rec){smalltalk.send($rec, "_object_", [self]);smalltalk.send($rec, "_initialize", []);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(smalltalk.send(self, "_inlineViewClass", []), "_basicNew", []));
return self;},
args: [],
source: unescape('inlineViewComponent%0A%09%5E%20self%20inlineViewClass%20basicNew%0A%09%09object%3A%20self%3B%0A%09%09initialize%3B%0A%09%09yourself'),
messageSends: ["object:", "initialize", "yourself", "basicNew", "inlineViewClass"],
referencedClasses: []
}),
smalltalk.MaglevObject.klass);


smalltalk.addClass('MaglevArray', smalltalk.MaglevObject, ['elements', 'size'], 'Maglev-Core');
smalltalk.addMethod(
unescape('_isFullyLoaded'),
smalltalk.method({
selector: unescape('isFullyLoaded'),
category: 'testing',
fn: function (){
var self=this;
return smalltalk.send(self['@size'], "__eq_eq", [smalltalk.send(self['@elements'], "_size", [])]);
return self;},
args: [],
source: unescape('isFullyLoaded%0A%09%5E%20size%20%3D%3D%20elements%20size'),
messageSends: [unescape("%3D%3D"), "size"],
referencedClasses: []
}),
smalltalk.MaglevArray);


smalltalk.addMethod(
unescape('_basetype'),
smalltalk.method({
selector: unescape('basetype'),
category: 'constants',
fn: function (){
var self=this;
return smalltalk.symbolFor("array");
return self;},
args: [],
source: unescape('basetype%0A%09%5E%20%23array'),
messageSends: [],
referencedClasses: []
}),
smalltalk.MaglevArray.klass);

smalltalk.addMethod(
unescape('_inlineViewClass'),
smalltalk.method({
selector: unescape('inlineViewClass'),
category: 'constants',
fn: function (){
var self=this;
return (smalltalk.MaglevArrayInline || MaglevArrayInline);
return self;},
args: [],
source: unescape('inlineViewClass%0A%09%5E%20MaglevArrayInline'),
messageSends: [],
referencedClasses: ["MaglevArrayInline"]
}),
smalltalk.MaglevArray.klass);


smalltalk.addClass('MaglevHash', smalltalk.MaglevObject, ['elements', 'size'], 'Maglev-Core');
smalltalk.addMethod(
unescape('_isFullyLoaded'),
smalltalk.method({
selector: unescape('isFullyLoaded'),
category: 'testing',
fn: function (){
var self=this;
return smalltalk.send(self['@size'], "__eq_eq", [smalltalk.send(self['@elements'], "_size", [])]);
return self;},
args: [],
source: unescape('isFullyLoaded%0A%09%5E%20size%20%3D%3D%20elements%20size'),
messageSends: [unescape("%3D%3D"), "size"],
referencedClasses: []
}),
smalltalk.MaglevHash);


smalltalk.addMethod(
unescape('_basetype'),
smalltalk.method({
selector: unescape('basetype'),
category: 'constants',
fn: function (){
var self=this;
return smalltalk.symbolFor("hash");
return self;},
args: [],
source: unescape('basetype%0A%09%5E%20%23hash'),
messageSends: [],
referencedClasses: []
}),
smalltalk.MaglevHash.klass);

smalltalk.addMethod(
unescape('_inlineViewClass'),
smalltalk.method({
selector: unescape('inlineViewClass'),
category: 'constants',
fn: function (){
var self=this;
return (smalltalk.MaglevHashInline || MaglevHashInline);
return self;},
args: [],
source: unescape('inlineViewClass%0A%09%5E%20MaglevHashInline'),
messageSends: [],
referencedClasses: ["MaglevHashInline"]
}),
smalltalk.MaglevHash.klass);


smalltalk.addClass('MaglevModule', smalltalk.MaglevObject, ['includedModules'], 'Maglev-Core');

smalltalk.addMethod(
unescape('_basetype'),
smalltalk.method({
selector: unescape('basetype'),
category: 'constants',
fn: function (){
var self=this;
smalltalk.send(smalltalk.symbolFor(""), "_module", []);
return self;},
args: [],
source: unescape('basetype%0A%09%23%20module'),
messageSends: ["module"],
referencedClasses: []
}),
smalltalk.MaglevModule.klass);

smalltalk.addMethod(
unescape('_inlineViewClass'),
smalltalk.method({
selector: unescape('inlineViewClass'),
category: 'constants',
fn: function (){
var self=this;
return (smalltalk.MaglevModuleInline || MaglevModuleInline);
return self;},
args: [],
source: unescape('inlineViewClass%0A%09%5E%20MaglevModuleInline'),
messageSends: [],
referencedClasses: ["MaglevModuleInline"]
}),
smalltalk.MaglevModule.klass);


smalltalk.addClass('MaglevClass', smalltalk.MaglevModule, ['superclass', 'elements', 'size'], 'Maglev-Core');

smalltalk.addMethod(
unescape('_basetype'),
smalltalk.method({
selector: unescape('basetype'),
category: 'constants',
fn: function (){
var self=this;
return smalltalk.symbolFor("class");
return self;},
args: [],
source: unescape('basetype%0A%09%5E%20%23class'),
messageSends: [],
referencedClasses: []
}),
smalltalk.MaglevClass.klass);

smalltalk.addMethod(
unescape('_inlineViewClass'),
smalltalk.method({
selector: unescape('inlineViewClass'),
category: 'constants',
fn: function (){
var self=this;
return (smalltalk.MaglevClassInline || MaglevClassInline);
return self;},
args: [],
source: unescape('inlineViewClass%0A%09%5E%20MaglevClassInline'),
messageSends: [],
referencedClasses: ["MaglevClassInline"]
}),
smalltalk.MaglevClass.klass);


smalltalk.addClass('MaglevNotYetLoaded', smalltalk.MaglevObject, [], 'Maglev-Core');
smalltalk.addMethod(
unescape('_isLoaded'),
smalltalk.method({
selector: unescape('isLoaded'),
category: 'testing',
fn: function (){
var self=this;
return false;
return self;},
args: [],
source: unescape('isLoaded%0A%09%5E%20false'),
messageSends: [],
referencedClasses: []
}),
smalltalk.MaglevNotYetLoaded);



smalltalk.addClass('MaglevObjectSpace', smalltalk.Object, ['objects'], 'Maglev-Core');


