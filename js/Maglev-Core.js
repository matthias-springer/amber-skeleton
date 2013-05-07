smalltalk.addPackage('Maglev-Core', {});
smalltalk.addClass('Maglev', smalltalk.Object, [], 'Maglev-Core');


smalltalk.addClass('MaglevObject', smalltalk.Object, ['oop', 'instVars', 'classObject', 'inspect'], 'Maglev-Core');
smalltalk.addMethod(
unescape('_classObject'),
smalltalk.method({
selector: unescape('classObject'),
category: 'accessing',
fn: function (){
var self=this;
return self['@classObject'];
return self;},
args: [],
source: unescape('classObject%0A%09%5E%20classObject'),
messageSends: [],
referencedClasses: []
}),
smalltalk.MaglevObject);

smalltalk.addMethod(
unescape('_inlineViewComponent'),
smalltalk.method({
selector: unescape('inlineViewComponent'),
category: 'rendering',
fn: function (){
var self=this;
return (function($rec){smalltalk.send($rec, "_object_", [self]);smalltalk.send($rec, "_initialize", []);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(smalltalk.send(smalltalk.send(self, "_class", []), "_inlineViewClass", []), "_basicNew", []));
return self;},
args: [],
source: unescape('inlineViewComponent%0A%09%5E%20self%20class%20inlineViewClass%20basicNew%0A%09%09object%3A%20self%3B%0A%09%09initialize%3B%0A%09%09yourself'),
messageSends: ["object:", "initialize", "yourself", "basicNew", "inlineViewClass", "class"],
referencedClasses: []
}),
smalltalk.MaglevObject);

smalltalk.addMethod(
unescape('_inlineViewComponentShort'),
smalltalk.method({
selector: unescape('inlineViewComponentShort'),
category: 'rendering',
fn: function (){
var self=this;
return (function($rec){smalltalk.send($rec, "_object_", [self]);smalltalk.send($rec, "_isShort_", [true]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(smalltalk.send(smalltalk.send(self, "_class", []), "_inlineViewClass", []), "_basicNew", []));
return self;},
args: [],
source: unescape('inlineViewComponentShort%0A%09%5E%20self%20class%20inlineViewClass%20basicNew%0A%09%09object%3A%20self%3B%0A%09%09isShort%3A%20true%3B%0A%09%09yourself'),
messageSends: ["object:", "isShort:", "yourself", "basicNew", "inlineViewClass", "class"],
referencedClasses: []
}),
smalltalk.MaglevObject);

smalltalk.addMethod(
unescape('_inlineViewComponentWithDepth_'),
smalltalk.method({
selector: unescape('inlineViewComponentWithDepth%3A'),
category: 'rendering',
fn: function (anInteger){
var self=this;
return (function($rec){smalltalk.send($rec, "_depth_", [anInteger]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(self, "_inlineViewComponent", []));
return self;},
args: ["anInteger"],
source: unescape('inlineViewComponentWithDepth%3A%20anInteger%0A%09%5E%20self%20inlineViewComponent%0A%09%09depth%3A%20anInteger%3B%0A%09%09yourself'),
messageSends: ["depth:", "yourself", "inlineViewComponent"],
referencedClasses: []
}),
smalltalk.MaglevObject);

smalltalk.addMethod(
unescape('_inspect'),
smalltalk.method({
selector: unescape('inspect'),
category: 'accessing',
fn: function (){
var self=this;
return self['@inspect'];
return self;},
args: [],
source: unescape('inspect%0A%09%5E%20inspect'),
messageSends: [],
referencedClasses: []
}),
smalltalk.MaglevObject);

smalltalk.addMethod(
unescape('_instVars'),
smalltalk.method({
selector: unescape('instVars'),
category: 'accessing',
fn: function (){
var self=this;
return self['@instVars'];
return self;},
args: [],
source: unescape('instVars%0A%09%5E%20instVars'),
messageSends: [],
referencedClasses: []
}),
smalltalk.MaglevObject);

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

smalltalk.addMethod(
unescape('_oop'),
smalltalk.method({
selector: unescape('oop'),
category: 'accessing',
fn: function (){
var self=this;
return self['@oop'];
return self;},
args: [],
source: unescape('oop%0A%09%5E%20oop'),
messageSends: [],
referencedClasses: []
}),
smalltalk.MaglevObject);

smalltalk.addMethod(
unescape('_parseJSON_'),
smalltalk.method({
selector: unescape('parseJSON%3A'),
category: 'instance creation',
fn: function (obj){
var self=this;
(self['@oop']=smalltalk.send(obj, "_oop", []));
(self['@classObject']=smalltalk.send((smalltalk.MaglevObject || MaglevObject), "_newObject_", [smalltalk.send(obj, "_classObject", [])]));
(self['@inspect']=smalltalk.send(obj, "_inspect", []));
(self['@instVars']=smalltalk.send((smalltalk.Dictionary || Dictionary), "_new", []));
smalltalk.send(smalltalk.send(obj, "_instVars", []), "_keysAndValuesDo_", [(function(ivName, ivValue){return smalltalk.send(self['@instVars'], "_at_put_", [ivName, smalltalk.send((smalltalk.MaglevObject || MaglevObject), "_newObject_", [ivValue])]);})]);
return self;},
args: ["obj"],
source: unescape('parseJSON%3A%20obj%0A%09oop%20%3A%3D%20obj%20oop.%0A%09classObject%20%3A%3D%20MaglevObject%20newObject%3A%20obj%20classObject.%0A%09inspect%20%3A%3D%20obj%20inspect.%0A%09instVars%20%3A%3D%20Dictionary%20new.%0A%09obj%20instVars%20keysAndValuesDo%3A%20%5B%3AivName%20%3AivValue%20%7C%0A%09%09instVars%20at%3A%20ivName%20put%3A%20%28MaglevObject%20newObject%3A%20ivValue%29%5D.%0A%09'),
messageSends: ["oop", "newObject:", "classObject", "inspect", "new", "keysAndValuesDo:", "instVars", "at:put:"],
referencedClasses: ["MaglevObject", "Dictionary"]
}),
smalltalk.MaglevObject);

smalltalk.addMethod(
unescape('_windowViewComponent'),
smalltalk.method({
selector: unescape('windowViewComponent'),
category: 'rendering',
fn: function (){
var self=this;
return (function($rec){smalltalk.send($rec, "_object_", [self]);smalltalk.send($rec, "_initialize", []);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(smalltalk.send(smalltalk.send(self, "_class", []), "_windowViewClass", []), "_basicNew", []));
return self;},
args: [],
source: unescape('windowViewComponent%0A%09%5E%20self%20class%20windowViewClass%20basicNew%0A%09%09object%3A%20self%3B%0A%09%09initialize%3B%0A%09%09yourself'),
messageSends: ["object:", "initialize", "yourself", "basicNew", "windowViewClass", "class"],
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
unescape('_newFor_'),
smalltalk.method({
selector: unescape('newFor%3A'),
category: 'instance creation',
fn: function (aBaseType){
var self=this;
var cls=nil;
(cls=smalltalk.send(smalltalk.send(self, "_basetypes", []), "_at_ifAbsent_", [smalltalk.send(aBaseType, "_asSymbol", []), (function(){return smalltalk.send(self, "_error_", [smalltalk.send("Could not create forwarder object for invalid base type ", "__comma", [aBaseType])]);})]));
return smalltalk.send(cls, "_new", []);
return self;},
args: ["aBaseType"],
source: unescape('newFor%3A%20aBaseType%0A%09%7Ccls%7C%0A%09cls%20%3A%3D%20self%20basetypes%20%0A%09%09at%3A%20aBaseType%20asSymbol%0A%09%09ifAbsent%3A%20%5Bself%20error%3A%20%27Could%20not%20create%20forwarder%20object%20for%20invalid%20base%20type%20%27%2C%20aBaseType%5D.%0A%09%5E%20cls%20new'),
messageSends: ["at:ifAbsent:", "basetypes", "asSymbol", "error:", unescape("%2C"), "new"],
referencedClasses: []
}),
smalltalk.MaglevObject.klass);

smalltalk.addMethod(
unescape('_newObject_'),
smalltalk.method({
selector: unescape('newObject%3A'),
category: 'instance creation',
fn: function (obj){
var self=this;
var object=nil;
(object=smalltalk.send(self, "_parseJSON_", [obj]));
smalltalk.send(smalltalk.send((smalltalk.MaglevObjectSpace || MaglevObjectSpace), "_instance", []), "_updateObject_", [object]);
return object;
return self;},
args: ["obj"],
source: unescape('newObject%3A%20obj%0A%09%7Cobject%7C%0A%09object%20%3A%3D%20self%20parseJSON%3A%20obj.%0A%09MaglevObjectSpace%20instance%20updateObject%3A%20object.%0A%09%5E%20object'),
messageSends: ["parseJSON:", "updateObject:", "instance"],
referencedClasses: ["MaglevObjectSpace"]
}),
smalltalk.MaglevObject.klass);

smalltalk.addMethod(
unescape('_parseJSON_'),
smalltalk.method({
selector: unescape('parseJSON%3A'),
category: 'instance creation',
fn: function (obj){
var self=this;
var object=nil;
((($receiver = smalltalk.send(obj, "_loaded", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (object=smalltalk.send(self, "_newFor_", [smalltalk.send(obj, "_basetype", [])]));})() : (function(){return (object=smalltalk.send((smalltalk.MaglevNotYetLoaded || MaglevNotYetLoaded), "_new", []));})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return (object=smalltalk.send(self, "_newFor_", [smalltalk.send(obj, "_basetype", [])]));}), (function(){return (object=smalltalk.send((smalltalk.MaglevNotYetLoaded || MaglevNotYetLoaded), "_new", []));})]));
return (function($rec){smalltalk.send($rec, "_parseJSON_", [obj]);return smalltalk.send($rec, "_yourself", []);})(object);
return self;},
args: ["obj"],
source: unescape('parseJSON%3A%20obj%0A%09%7Cobject%7C%0A%09obj%20loaded%20%0A%09%09ifTrue%3A%20%5Bobject%20%3A%3D%20self%20newFor%3A%20obj%20basetype%5D%0A%09%09ifFalse%3A%20%5Bobject%20%3A%3D%20MaglevNotYetLoaded%20new%5D.%0A%09%5E%20object%0A%09%09parseJSON%3A%20obj%3B%0A%09%09yourself'),
messageSends: ["ifTrue:ifFalse:", "loaded", "newFor:", "basetype", "new", "parseJSON:", "yourself"],
referencedClasses: ["MaglevNotYetLoaded"]
}),
smalltalk.MaglevObject.klass);

smalltalk.addMethod(
unescape('_windowViewClass'),
smalltalk.method({
selector: unescape('windowViewClass'),
category: 'constants',
fn: function (){
var self=this;
return (smalltalk.MaglevObjectWindow || MaglevObjectWindow);
return self;},
args: [],
source: unescape('windowViewClass%0A%09%5E%20MaglevObjectWindow'),
messageSends: [],
referencedClasses: ["MaglevObjectWindow"]
}),
smalltalk.MaglevObject.klass);


smalltalk.addClass('MaglevArray', smalltalk.MaglevObject, ['elements', 'size'], 'Maglev-Core');
smalltalk.addMethod(
unescape('_elements'),
smalltalk.method({
selector: unescape('elements'),
category: 'accessing',
fn: function (){
var self=this;
return self['@elements'];
return self;},
args: [],
source: unescape('elements%0A%09%5E%20elements'),
messageSends: [],
referencedClasses: []
}),
smalltalk.MaglevArray);

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
unescape('_parseJSON_'),
smalltalk.method({
selector: unescape('parseJSON%3A'),
category: 'instance creation',
fn: function (obj){
var self=this;
smalltalk.send(self, "_parseJSON_", [obj], smalltalk.MaglevObject);
(self['@size']=smalltalk.send(obj, "_size", []));
(self['@elements']=smalltalk.send((smalltalk.Array || Array), "_new", []));
smalltalk.send(smalltalk.send(obj, "_elements", []), "_do_", [(function(element){return smalltalk.send(self['@elements'], "_add_", [smalltalk.send((smalltalk.MaglevObject || MaglevObject), "_newObject_", [element])]);})]);
return self;},
args: ["obj"],
source: unescape('parseJSON%3A%20obj%0A%09super%20parseJSON%3A%20obj.%0A%09size%20%3A%3D%20obj%20size.%0A%09elements%20%3A%3D%20Array%20new.%0A%09obj%20elements%20do%3A%20%5B%3Aelement%20%7C%0A%09%09elements%20add%3A%20%28MaglevObject%20newObject%3A%20element%29%5D.'),
messageSends: ["parseJSON:", "size", "new", "do:", "elements", "add:", "newObject:"],
referencedClasses: ["Array", "MaglevObject"]
}),
smalltalk.MaglevArray);

smalltalk.addMethod(
unescape('_size'),
smalltalk.method({
selector: unescape('size'),
category: 'accessing',
fn: function (){
var self=this;
return self['@size'];
return self;},
args: [],
source: unescape('size%0A%09%5E%20size'),
messageSends: [],
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

smalltalk.addMethod(
unescape('_windowViewClass'),
smalltalk.method({
selector: unescape('windowViewClass'),
category: 'constants',
fn: function (){
var self=this;
return (smalltalk.MaglevArrayWindow || MaglevArrayWindow);
return self;},
args: [],
source: unescape('windowViewClass%0A%09%5E%20MaglevArrayWindow'),
messageSends: [],
referencedClasses: ["MaglevArrayWindow"]
}),
smalltalk.MaglevArray.klass);


smalltalk.addClass('MaglevHash', smalltalk.MaglevObject, ['elements', 'size'], 'Maglev-Core');
smalltalk.addMethod(
unescape('_elements'),
smalltalk.method({
selector: unescape('elements'),
category: 'accessing',
fn: function (){
var self=this;
return self['@elements'];
return self;},
args: [],
source: unescape('elements%0A%09%5E%20elements'),
messageSends: [],
referencedClasses: []
}),
smalltalk.MaglevHash);

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
unescape('_parseJSON_'),
smalltalk.method({
selector: unescape('parseJSON%3A'),
category: 'instance creation',
fn: function (obj){
var self=this;
smalltalk.send(self, "_parseJSON_", [obj], smalltalk.MaglevObject);
(self['@size']=smalltalk.send(obj, "_size", []));
(self['@elements']=smalltalk.send((smalltalk.Dictionary || Dictionary), "_new", []));
smalltalk.send(smalltalk.send(obj, "_elements", []), "_keysAndValuesDo_", [(function(key, value){return smalltalk.send(self['@elements'], "_at_put_", [smalltalk.send((smalltalk.MaglevObject || MaglevObject), "_newObject_", [key]), smalltalk.send((smalltalk.MaglevObject || MaglevObject), "_newObject_", [value])]);})]);
return self;},
args: ["obj"],
source: unescape('parseJSON%3A%20obj%0A%09super%20parseJSON%3A%20obj.%0A%09size%20%3A%3D%20obj%20size.%0A%09elements%20%3A%3D%20Dictionary%20new.%0A%09obj%20elements%20keysAndValuesDo%3A%20%5B%3Akey%20%3Avalue%20%7C%0A%09%09elements%20at%3A%20%28MaglevObject%20newObject%3A%20key%29%20put%3A%20%28MaglevObject%20newObject%3A%20value%29%5D.'),
messageSends: ["parseJSON:", "size", "new", "keysAndValuesDo:", "elements", "at:put:", "newObject:"],
referencedClasses: ["Dictionary", "MaglevObject"]
}),
smalltalk.MaglevHash);

smalltalk.addMethod(
unescape('_size'),
smalltalk.method({
selector: unescape('size'),
category: 'accessing',
fn: function (){
var self=this;
return self['@size'];
return self;},
args: [],
source: unescape('size%0A%09%5E%20size'),
messageSends: [],
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

smalltalk.addMethod(
unescape('_windowViewClass'),
smalltalk.method({
selector: unescape('windowViewClass'),
category: 'constants',
fn: function (){
var self=this;
return (smalltalk.MaglevHashWindow || MaglevHashWindow);
return self;},
args: [],
source: unescape('windowViewClass%0A%09%5E%20MaglevHashWindow'),
messageSends: [],
referencedClasses: ["MaglevHashWindow"]
}),
smalltalk.MaglevHash.klass);


smalltalk.addClass('MaglevModule', smalltalk.MaglevObject, ['includedModules'], 'Maglev-Core');
smalltalk.addMethod(
unescape('_parseJSON_'),
smalltalk.method({
selector: unescape('parseJSON%3A'),
category: 'instance creation',
fn: function (obj){
var self=this;
smalltalk.send(self, "_parseJSON_", [obj], smalltalk.MaglevObject);
(self['@includedModules']=smalltalk.send((smalltalk.Array || Array), "_new", []));
smalltalk.send(smalltalk.send(obj, "_includedModules", []), "_do_", [(function(module){return smalltalk.send(self['@includedModules'], "_add_", [smalltalk.send((smalltalk.MaglevObject || MaglevObject), "_newObject_", [module])]);})]);
return self;},
args: ["obj"],
source: unescape('parseJSON%3A%20obj%0A%09super%20parseJSON%3A%20obj.%0A%09includedModules%20%3A%3D%20Array%20new.%0A%09obj%20includedModules%20do%3A%20%5B%3Amodule%20%7C%0A%09%09includedModules%20add%3A%20%28MaglevObject%20newObject%3A%20module%29%5D.'),
messageSends: ["parseJSON:", "new", "do:", "includedModules", "add:", "newObject:"],
referencedClasses: ["Array", "MaglevObject"]
}),
smalltalk.MaglevModule);


smalltalk.addMethod(
unescape('_basetype'),
smalltalk.method({
selector: unescape('basetype'),
category: 'constants',
fn: function (){
var self=this;
return smalltalk.symbolFor("module");
return self;},
args: [],
source: unescape('basetype%0A%09%5E%20%23module'),
messageSends: [],
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

smalltalk.addMethod(
unescape('_windowViewClass'),
smalltalk.method({
selector: unescape('windowViewClass'),
category: 'constants',
fn: function (){
var self=this;
return (smalltalk.MaglevModuleWindow || MaglevModuleWindow);
return self;},
args: [],
source: unescape('windowViewClass%0A%09%5E%20MaglevModuleWindow'),
messageSends: [],
referencedClasses: ["MaglevModuleWindow"]
}),
smalltalk.MaglevModule.klass);


smalltalk.addClass('MaglevClass', smalltalk.MaglevModule, ['superclass', 'elements', 'size'], 'Maglev-Core');
smalltalk.addMethod(
unescape('_parseJSON_'),
smalltalk.method({
selector: unescape('parseJSON%3A'),
category: 'instance creation',
fn: function (obj){
var self=this;
smalltalk.send(self, "_parseJSON_", [obj], smalltalk.MaglevModule);
(self['@superclass']=smalltalk.send((smalltalk.MaglevObject || MaglevObject), "_newObject_", [smalltalk.send(obj, "_superclass", [])]));
return self;},
args: ["obj"],
source: unescape('parseJSON%3A%20obj%0A%09super%20parseJSON%3A%20obj.%0A%09superclass%20%3A%3D%20MaglevObject%20newObject%3A%20obj%20superclass.'),
messageSends: ["parseJSON:", "newObject:", "superclass"],
referencedClasses: ["MaglevObject"]
}),
smalltalk.MaglevClass);


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

smalltalk.addMethod(
unescape('_windowViewClass'),
smalltalk.method({
selector: unescape('windowViewClass'),
category: 'constants',
fn: function (){
var self=this;
return (smalltalk.MaglevClassWindow || MaglevClassWindow);
return self;},
args: [],
source: unescape('windowViewClass%0A%09%5E%20MaglevClassWindow'),
messageSends: [],
referencedClasses: ["MaglevClassWindow"]
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

smalltalk.addMethod(
unescape('_parseJSON_'),
smalltalk.method({
selector: unescape('parseJSON%3A'),
category: 'instance creation',
fn: function (obj){
var self=this;

return self;},
args: ["obj"],
source: unescape('parseJSON%3A%20obj%0A'),
messageSends: [],
referencedClasses: []
}),
smalltalk.MaglevNotYetLoaded);


smalltalk.addMethod(
unescape('_basetype'),
smalltalk.method({
selector: unescape('basetype'),
category: 'constants',
fn: function (){
var self=this;
return nil;
return self;},
args: [],
source: unescape('basetype%0A%09%5E%20nil'),
messageSends: [],
referencedClasses: []
}),
smalltalk.MaglevNotYetLoaded.klass);


smalltalk.addClass('MaglevObjectSpace', smalltalk.Object, ['objects'], 'Maglev-Core');
smalltalk.addMethod(
unescape('_at_'),
smalltalk.method({
selector: unescape('at%3A'),
category: 'objects',
fn: function (anOop){
var self=this;
return smalltalk.send(self['@objects'], "_at_ifAbsent_", [anOop, (function(){return smalltalk.send(self, "_reloadObject_", [anOop]);})]);
return self;},
args: ["anOop"],
source: unescape('at%3A%20anOop%0A%09%5E%20objects%20%0A%09%09at%3A%20anOop%0A%09%09ifAbsent%3A%20%5Bself%20reloadObject%3A%20anOop%5D'),
messageSends: ["at:ifAbsent:", "reloadObject:"],
referencedClasses: []
}),
smalltalk.MaglevObjectSpace);

smalltalk.addMethod(
unescape('_at_withCallback_'),
smalltalk.method({
selector: unescape('at%3AwithCallback%3A'),
category: 'objects',
fn: function (anOop, aBlock){
var self=this;
((($receiver = smalltalk.send(self['@objects'], "_includesKey_", [anOop])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(aBlock, "_value_", [smalltalk.send(self['@objects'], "_at_", [anOop])]);})() : (function(){return smalltalk.send(self, "_reloadObject_withCallback_", [anOop, aBlock]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(aBlock, "_value_", [smalltalk.send(self['@objects'], "_at_", [anOop])]);}), (function(){return smalltalk.send(self, "_reloadObject_withCallback_", [anOop, aBlock]);})]));
return self;},
args: ["anOop", "aBlock"],
source: unescape('at%3A%20anOop%20withCallback%3A%20aBlock%0A%09%28objects%20includesKey%3A%20anOop%29%0A%09%09ifTrue%3A%20%5BaBlock%20value%3A%20%28objects%20at%3A%20anOop%29%5D%0A%09%09ifFalse%3A%20%5Bself%20reloadObject%3A%20anOop%20withCallback%3A%20aBlock%5D.'),
messageSends: ["ifTrue:ifFalse:", "includesKey:", "value:", "at:", "reloadObject:withCallback:"],
referencedClasses: []
}),
smalltalk.MaglevObjectSpace);

smalltalk.addMethod(
unescape('_initialize'),
smalltalk.method({
selector: unescape('initialize'),
category: 'initializing',
fn: function (){
var self=this;
(self['@objects']=smalltalk.send((smalltalk.Dictionary || Dictionary), "_new", []));
return self;},
args: [],
source: unescape('initialize%0A%09objects%20%3A%3D%20Dictionary%20new.'),
messageSends: ["new"],
referencedClasses: ["Dictionary"]
}),
smalltalk.MaglevObjectSpace);

smalltalk.addMethod(
unescape('_reloadObject_'),
smalltalk.method({
selector: unescape('reloadObject%3A'),
category: 'objects',
fn: function (anOop){
var self=this;
var obj=nil;
(obj=smalltalk.send((smalltalk.MaglevAjax || MaglevAjax), "_ajax_data_", [smalltalk.send(unescape("/object/index/"), "__comma", [smalltalk.send(anOop, "_asString", [])]), smalltalk.send((smalltalk.Dictionary || Dictionary), "_new", [])]));
return smalltalk.send((smalltalk.MaglevObject || MaglevObject), "_newObject_", [obj]);
return self;},
args: ["anOop"],
source: unescape('reloadObject%3A%20anOop%0A%09%7Cobj%7C%0A%09obj%20%3A%3D%20MaglevAjax%20%0A%09%09ajax%3A%20%27/object/index/%27%2C%20anOop%20asString%0A%09%09data%3A%20Dictionary%20new.%0A%09%5E%20MaglevObject%20newObject%3A%20obj.'),
messageSends: ["ajax:data:", unescape("%2C"), "asString", "new", "newObject:"],
referencedClasses: ["MaglevAjax", "Dictionary", "MaglevObject"]
}),
smalltalk.MaglevObjectSpace);

smalltalk.addMethod(
unescape('_reloadObject_withCallback_'),
smalltalk.method({
selector: unescape('reloadObject%3AwithCallback%3A'),
category: 'objects',
fn: function (anOop, aBlock){
var self=this;
smalltalk.send((smalltalk.MaglevAjax || MaglevAjax), "_ajax_data_withCallback_", [smalltalk.send(unescape("/object/index/"), "__comma", [smalltalk.send(anOop, "_asString", [])]), smalltalk.send((smalltalk.Dictionary || Dictionary), "_new", []), (function(obj){return smalltalk.send(aBlock, "_value_", [smalltalk.send((smalltalk.MaglevObject || MaglevObject), "_newObject_", [obj])]);})]);
return self;},
args: ["anOop", "aBlock"],
source: unescape('reloadObject%3A%20anOop%20withCallback%3A%20aBlock%0A%09MaglevAjax%20%0A%09%09ajax%3A%20%27/object/index/%27%2C%20anOop%20asString%0A%09%09data%3A%20Dictionary%20new%0A%09%09withCallback%3A%20%5B%3Aobj%20%7C%20%0A%09%09%09aBlock%20value%3A%20%28MaglevObject%20newObject%3A%20obj%29%5D.'),
messageSends: ["ajax:data:withCallback:", unescape("%2C"), "asString", "new", "value:", "newObject:"],
referencedClasses: ["MaglevAjax", "Dictionary", "MaglevObject"]
}),
smalltalk.MaglevObjectSpace);

smalltalk.addMethod(
unescape('_updateObject_'),
smalltalk.method({
selector: unescape('updateObject%3A'),
category: 'objects',
fn: function (anObject){
var self=this;
smalltalk.send(self['@objects'], "_at_put_", [smalltalk.send(anObject, "_oop", []), anObject]);
return self;},
args: ["anObject"],
source: unescape('updateObject%3A%20anObject%0A%09%22TODO%3A%20ensure%20that%20no%20data%20is%20overwritten%20by%20loaded%3D%3Dfalse%20objects.%22%0A%09objects%20at%3A%20anObject%20oop%20put%3A%20anObject.'),
messageSends: ["at:put:", "oop"],
referencedClasses: []
}),
smalltalk.MaglevObjectSpace);


smalltalk.MaglevObjectSpace.klass.iVarNames = ['instance'];
smalltalk.addMethod(
unescape('_instance'),
smalltalk.method({
selector: unescape('instance'),
category: 'singleton',
fn: function (){
var self=this;
(($receiver = self['@instance']) == nil || $receiver == undefined) ? (function(){return (self['@instance']=smalltalk.send(self, "_new", []));})() : $receiver;
return self['@instance'];
return self;},
args: [],
source: unescape('instance%0A%09instance%20ifNil%3A%20%5Binstance%20%3A%3D%20self%20new%5D.%0A%09%5E%20instance'),
messageSends: ["ifNil:", "new"],
referencedClasses: []
}),
smalltalk.MaglevObjectSpace.klass);


