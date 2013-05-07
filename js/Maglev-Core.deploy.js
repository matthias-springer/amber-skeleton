smalltalk.addPackage('Maglev-Core', {});
smalltalk.addClass('Maglev', smalltalk.Object, [], 'Maglev-Core');


smalltalk.addClass('MaglevObject', smalltalk.Object, ['oop', 'instVars', 'classObject', 'inspect'], 'Maglev-Core');
smalltalk.addMethod(
unescape('_classObject'),
smalltalk.method({
selector: unescape('classObject'),
fn: function (){
var self=this;
return self['@classObject'];
return self;}
}),
smalltalk.MaglevObject);

smalltalk.addMethod(
unescape('_inlineViewComponent'),
smalltalk.method({
selector: unescape('inlineViewComponent'),
fn: function (){
var self=this;
return (function($rec){smalltalk.send($rec, "_object_", [self]);smalltalk.send($rec, "_initialize", []);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(smalltalk.send(smalltalk.send(self, "_class", []), "_inlineViewClass", []), "_basicNew", []));
return self;}
}),
smalltalk.MaglevObject);

smalltalk.addMethod(
unescape('_inlineViewComponentShort'),
smalltalk.method({
selector: unescape('inlineViewComponentShort'),
fn: function (){
var self=this;
return (function($rec){smalltalk.send($rec, "_object_", [self]);smalltalk.send($rec, "_isShort_", [true]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(smalltalk.send(smalltalk.send(self, "_class", []), "_inlineViewClass", []), "_basicNew", []));
return self;}
}),
smalltalk.MaglevObject);

smalltalk.addMethod(
unescape('_inlineViewComponentWithDepth_'),
smalltalk.method({
selector: unescape('inlineViewComponentWithDepth%3A'),
fn: function (anInteger){
var self=this;
return (function($rec){smalltalk.send($rec, "_depth_", [anInteger]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(self, "_inlineViewComponent", []));
return self;}
}),
smalltalk.MaglevObject);

smalltalk.addMethod(
unescape('_inspect'),
smalltalk.method({
selector: unescape('inspect'),
fn: function (){
var self=this;
return self['@inspect'];
return self;}
}),
smalltalk.MaglevObject);

smalltalk.addMethod(
unescape('_instVars'),
smalltalk.method({
selector: unescape('instVars'),
fn: function (){
var self=this;
return self['@instVars'];
return self;}
}),
smalltalk.MaglevObject);

smalltalk.addMethod(
unescape('_isLoaded'),
smalltalk.method({
selector: unescape('isLoaded'),
fn: function (){
var self=this;
return true;
return self;}
}),
smalltalk.MaglevObject);

smalltalk.addMethod(
unescape('_oop'),
smalltalk.method({
selector: unescape('oop'),
fn: function (){
var self=this;
return self['@oop'];
return self;}
}),
smalltalk.MaglevObject);

smalltalk.addMethod(
unescape('_parseJSON_'),
smalltalk.method({
selector: unescape('parseJSON%3A'),
fn: function (obj){
var self=this;
(self['@oop']=smalltalk.send(obj, "_oop", []));
(self['@classObject']=smalltalk.send((smalltalk.MaglevObject || MaglevObject), "_newObject_", [smalltalk.send(obj, "_classObject", [])]));
(self['@inspect']=smalltalk.send(obj, "_inspect", []));
(self['@instVars']=smalltalk.send((smalltalk.Dictionary || Dictionary), "_new", []));
smalltalk.send(smalltalk.send(obj, "_instVars", []), "_keysAndValuesDo_", [(function(ivName, ivValue){return smalltalk.send(self['@instVars'], "_at_put_", [ivName, smalltalk.send((smalltalk.MaglevObject || MaglevObject), "_newObject_", [ivValue])]);})]);
return self;}
}),
smalltalk.MaglevObject);

smalltalk.addMethod(
unescape('_windowViewComponent'),
smalltalk.method({
selector: unescape('windowViewComponent'),
fn: function (){
var self=this;
return (function($rec){smalltalk.send($rec, "_object_", [self]);smalltalk.send($rec, "_initialize", []);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(smalltalk.send(smalltalk.send(self, "_class", []), "_windowViewClass", []), "_basicNew", []));
return self;}
}),
smalltalk.MaglevObject);


smalltalk.MaglevObject.klass.iVarNames = ['basetypes'];
smalltalk.addMethod(
unescape('_basetype'),
smalltalk.method({
selector: unescape('basetype'),
fn: function (){
var self=this;
return smalltalk.symbolFor("object");
return self;}
}),
smalltalk.MaglevObject.klass);

smalltalk.addMethod(
unescape('_basetypes'),
smalltalk.method({
selector: unescape('basetypes'),
fn: function (){
var self=this;
return self['@basetypes'];
return self;}
}),
smalltalk.MaglevObject.klass);

smalltalk.addMethod(
unescape('_initialize'),
smalltalk.method({
selector: unescape('initialize'),
fn: function (){
var self=this;
smalltalk.send(self, "_initializeBasetypes", []);
return self;}
}),
smalltalk.MaglevObject.klass);

smalltalk.addMethod(
unescape('_initializeBasetypes'),
smalltalk.method({
selector: unescape('initializeBasetypes'),
fn: function (){
var self=this;
(self['@basetypes']=(function($rec){smalltalk.send($rec, "_at_put_", [smalltalk.send(self, "_basetype", []), self]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send((smalltalk.Dictionary || Dictionary), "_new", [])));
smalltalk.send(smalltalk.send(self, "_allSubclasses", []), "_do_", [(function(cls){return smalltalk.send(self['@basetypes'], "_at_put_", [smalltalk.send(cls, "_basetype", []), cls]);})]);
return self;}
}),
smalltalk.MaglevObject.klass);

smalltalk.addMethod(
unescape('_inlineViewClass'),
smalltalk.method({
selector: unescape('inlineViewClass'),
fn: function (){
var self=this;
return (smalltalk.MaglevObjectInline || MaglevObjectInline);
return self;}
}),
smalltalk.MaglevObject.klass);

smalltalk.addMethod(
unescape('_newFor_'),
smalltalk.method({
selector: unescape('newFor%3A'),
fn: function (aBaseType){
var self=this;
var cls=nil;
(cls=smalltalk.send(smalltalk.send(self, "_basetypes", []), "_at_ifAbsent_", [smalltalk.send(aBaseType, "_asSymbol", []), (function(){return smalltalk.send(self, "_error_", [smalltalk.send("Could not create forwarder object for invalid base type ", "__comma", [aBaseType])]);})]));
return smalltalk.send(cls, "_new", []);
return self;}
}),
smalltalk.MaglevObject.klass);

smalltalk.addMethod(
unescape('_newObject_'),
smalltalk.method({
selector: unescape('newObject%3A'),
fn: function (obj){
var self=this;
var object=nil;
(object=smalltalk.send(self, "_parseJSON_", [obj]));
smalltalk.send(smalltalk.send((smalltalk.MaglevObjectSpace || MaglevObjectSpace), "_instance", []), "_updateObject_", [object]);
return object;
return self;}
}),
smalltalk.MaglevObject.klass);

smalltalk.addMethod(
unescape('_parseJSON_'),
smalltalk.method({
selector: unescape('parseJSON%3A'),
fn: function (obj){
var self=this;
var object=nil;
((($receiver = smalltalk.send(obj, "_loaded", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (object=smalltalk.send(self, "_newFor_", [smalltalk.send(obj, "_basetype", [])]));})() : (function(){return (object=smalltalk.send((smalltalk.MaglevNotYetLoaded || MaglevNotYetLoaded), "_new", []));})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return (object=smalltalk.send(self, "_newFor_", [smalltalk.send(obj, "_basetype", [])]));}), (function(){return (object=smalltalk.send((smalltalk.MaglevNotYetLoaded || MaglevNotYetLoaded), "_new", []));})]));
return (function($rec){smalltalk.send($rec, "_parseJSON_", [obj]);return smalltalk.send($rec, "_yourself", []);})(object);
return self;}
}),
smalltalk.MaglevObject.klass);

smalltalk.addMethod(
unescape('_windowViewClass'),
smalltalk.method({
selector: unescape('windowViewClass'),
fn: function (){
var self=this;
return (smalltalk.MaglevObjectWindow || MaglevObjectWindow);
return self;}
}),
smalltalk.MaglevObject.klass);


smalltalk.addClass('MaglevArray', smalltalk.MaglevObject, ['elements', 'size'], 'Maglev-Core');
smalltalk.addMethod(
unescape('_elements'),
smalltalk.method({
selector: unescape('elements'),
fn: function (){
var self=this;
return self['@elements'];
return self;}
}),
smalltalk.MaglevArray);

smalltalk.addMethod(
unescape('_isFullyLoaded'),
smalltalk.method({
selector: unescape('isFullyLoaded'),
fn: function (){
var self=this;
return smalltalk.send(self['@size'], "__eq_eq", [smalltalk.send(self['@elements'], "_size", [])]);
return self;}
}),
smalltalk.MaglevArray);

smalltalk.addMethod(
unescape('_parseJSON_'),
smalltalk.method({
selector: unescape('parseJSON%3A'),
fn: function (obj){
var self=this;
smalltalk.send(self, "_parseJSON_", [obj], smalltalk.MaglevObject);
(self['@size']=smalltalk.send(obj, "_size", []));
(self['@elements']=smalltalk.send((smalltalk.Array || Array), "_new", []));
smalltalk.send(smalltalk.send(obj, "_elements", []), "_do_", [(function(element){return smalltalk.send(self['@elements'], "_add_", [smalltalk.send((smalltalk.MaglevObject || MaglevObject), "_newObject_", [element])]);})]);
return self;}
}),
smalltalk.MaglevArray);

smalltalk.addMethod(
unescape('_size'),
smalltalk.method({
selector: unescape('size'),
fn: function (){
var self=this;
return self['@size'];
return self;}
}),
smalltalk.MaglevArray);


smalltalk.addMethod(
unescape('_basetype'),
smalltalk.method({
selector: unescape('basetype'),
fn: function (){
var self=this;
return smalltalk.symbolFor("array");
return self;}
}),
smalltalk.MaglevArray.klass);

smalltalk.addMethod(
unescape('_inlineViewClass'),
smalltalk.method({
selector: unescape('inlineViewClass'),
fn: function (){
var self=this;
return (smalltalk.MaglevArrayInline || MaglevArrayInline);
return self;}
}),
smalltalk.MaglevArray.klass);

smalltalk.addMethod(
unescape('_windowViewClass'),
smalltalk.method({
selector: unescape('windowViewClass'),
fn: function (){
var self=this;
return (smalltalk.MaglevArrayWindow || MaglevArrayWindow);
return self;}
}),
smalltalk.MaglevArray.klass);


smalltalk.addClass('MaglevHash', smalltalk.MaglevObject, ['elements', 'size'], 'Maglev-Core');
smalltalk.addMethod(
unescape('_elements'),
smalltalk.method({
selector: unescape('elements'),
fn: function (){
var self=this;
return self['@elements'];
return self;}
}),
smalltalk.MaglevHash);

smalltalk.addMethod(
unescape('_isFullyLoaded'),
smalltalk.method({
selector: unescape('isFullyLoaded'),
fn: function (){
var self=this;
return smalltalk.send(self['@size'], "__eq_eq", [smalltalk.send(self['@elements'], "_size", [])]);
return self;}
}),
smalltalk.MaglevHash);

smalltalk.addMethod(
unescape('_parseJSON_'),
smalltalk.method({
selector: unescape('parseJSON%3A'),
fn: function (obj){
var self=this;
smalltalk.send(self, "_parseJSON_", [obj], smalltalk.MaglevObject);
(self['@size']=smalltalk.send(obj, "_size", []));
(self['@elements']=smalltalk.send((smalltalk.Dictionary || Dictionary), "_new", []));
smalltalk.send(smalltalk.send(obj, "_elements", []), "_keysAndValuesDo_", [(function(key, value){return smalltalk.send(self['@elements'], "_at_put_", [smalltalk.send((smalltalk.MaglevObject || MaglevObject), "_newObject_", [key]), smalltalk.send((smalltalk.MaglevObject || MaglevObject), "_newObject_", [value])]);})]);
return self;}
}),
smalltalk.MaglevHash);

smalltalk.addMethod(
unescape('_size'),
smalltalk.method({
selector: unescape('size'),
fn: function (){
var self=this;
return self['@size'];
return self;}
}),
smalltalk.MaglevHash);


smalltalk.addMethod(
unescape('_basetype'),
smalltalk.method({
selector: unescape('basetype'),
fn: function (){
var self=this;
return smalltalk.symbolFor("hash");
return self;}
}),
smalltalk.MaglevHash.klass);

smalltalk.addMethod(
unescape('_inlineViewClass'),
smalltalk.method({
selector: unescape('inlineViewClass'),
fn: function (){
var self=this;
return (smalltalk.MaglevHashInline || MaglevHashInline);
return self;}
}),
smalltalk.MaglevHash.klass);

smalltalk.addMethod(
unescape('_windowViewClass'),
smalltalk.method({
selector: unescape('windowViewClass'),
fn: function (){
var self=this;
return (smalltalk.MaglevHashWindow || MaglevHashWindow);
return self;}
}),
smalltalk.MaglevHash.klass);


smalltalk.addClass('MaglevModule', smalltalk.MaglevObject, ['includedModules'], 'Maglev-Core');
smalltalk.addMethod(
unescape('_parseJSON_'),
smalltalk.method({
selector: unescape('parseJSON%3A'),
fn: function (obj){
var self=this;
smalltalk.send(self, "_parseJSON_", [obj], smalltalk.MaglevObject);
(self['@includedModules']=smalltalk.send((smalltalk.Array || Array), "_new", []));
smalltalk.send(smalltalk.send(obj, "_includedModules", []), "_do_", [(function(module){return smalltalk.send(self['@includedModules'], "_add_", [smalltalk.send((smalltalk.MaglevObject || MaglevObject), "_newObject_", [module])]);})]);
return self;}
}),
smalltalk.MaglevModule);


smalltalk.addMethod(
unescape('_basetype'),
smalltalk.method({
selector: unescape('basetype'),
fn: function (){
var self=this;
return smalltalk.symbolFor("module");
return self;}
}),
smalltalk.MaglevModule.klass);

smalltalk.addMethod(
unescape('_inlineViewClass'),
smalltalk.method({
selector: unescape('inlineViewClass'),
fn: function (){
var self=this;
return (smalltalk.MaglevModuleInline || MaglevModuleInline);
return self;}
}),
smalltalk.MaglevModule.klass);

smalltalk.addMethod(
unescape('_windowViewClass'),
smalltalk.method({
selector: unescape('windowViewClass'),
fn: function (){
var self=this;
return (smalltalk.MaglevModuleWindow || MaglevModuleWindow);
return self;}
}),
smalltalk.MaglevModule.klass);


smalltalk.addClass('MaglevClass', smalltalk.MaglevModule, ['superclass', 'elements', 'size'], 'Maglev-Core');
smalltalk.addMethod(
unescape('_parseJSON_'),
smalltalk.method({
selector: unescape('parseJSON%3A'),
fn: function (obj){
var self=this;
smalltalk.send(self, "_parseJSON_", [obj], smalltalk.MaglevModule);
(self['@superclass']=smalltalk.send((smalltalk.MaglevObject || MaglevObject), "_newObject_", [smalltalk.send(obj, "_superclass", [])]));
return self;}
}),
smalltalk.MaglevClass);


smalltalk.addMethod(
unescape('_basetype'),
smalltalk.method({
selector: unescape('basetype'),
fn: function (){
var self=this;
return smalltalk.symbolFor("class");
return self;}
}),
smalltalk.MaglevClass.klass);

smalltalk.addMethod(
unescape('_inlineViewClass'),
smalltalk.method({
selector: unescape('inlineViewClass'),
fn: function (){
var self=this;
return (smalltalk.MaglevClassInline || MaglevClassInline);
return self;}
}),
smalltalk.MaglevClass.klass);

smalltalk.addMethod(
unescape('_windowViewClass'),
smalltalk.method({
selector: unescape('windowViewClass'),
fn: function (){
var self=this;
return (smalltalk.MaglevClassWindow || MaglevClassWindow);
return self;}
}),
smalltalk.MaglevClass.klass);


smalltalk.addClass('MaglevNotYetLoaded', smalltalk.MaglevObject, [], 'Maglev-Core');
smalltalk.addMethod(
unescape('_isLoaded'),
smalltalk.method({
selector: unescape('isLoaded'),
fn: function (){
var self=this;
return false;
return self;}
}),
smalltalk.MaglevNotYetLoaded);

smalltalk.addMethod(
unescape('_parseJSON_'),
smalltalk.method({
selector: unescape('parseJSON%3A'),
fn: function (obj){
var self=this;

return self;}
}),
smalltalk.MaglevNotYetLoaded);


smalltalk.addMethod(
unescape('_basetype'),
smalltalk.method({
selector: unescape('basetype'),
fn: function (){
var self=this;
return nil;
return self;}
}),
smalltalk.MaglevNotYetLoaded.klass);


smalltalk.addClass('MaglevObjectSpace', smalltalk.Object, ['objects'], 'Maglev-Core');
smalltalk.addMethod(
unescape('_at_'),
smalltalk.method({
selector: unescape('at%3A'),
fn: function (anOop){
var self=this;
return smalltalk.send(self['@objects'], "_at_ifAbsent_", [anOop, (function(){return smalltalk.send(self, "_reloadObject_", [anOop]);})]);
return self;}
}),
smalltalk.MaglevObjectSpace);

smalltalk.addMethod(
unescape('_at_withCallback_'),
smalltalk.method({
selector: unescape('at%3AwithCallback%3A'),
fn: function (anOop, aBlock){
var self=this;
((($receiver = smalltalk.send(self['@objects'], "_includesKey_", [anOop])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(aBlock, "_value_", [smalltalk.send(self['@objects'], "_at_", [anOop])]);})() : (function(){return smalltalk.send(self, "_reloadObject_withCallback_", [anOop, aBlock]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(aBlock, "_value_", [smalltalk.send(self['@objects'], "_at_", [anOop])]);}), (function(){return smalltalk.send(self, "_reloadObject_withCallback_", [anOop, aBlock]);})]));
return self;}
}),
smalltalk.MaglevObjectSpace);

smalltalk.addMethod(
unescape('_initialize'),
smalltalk.method({
selector: unescape('initialize'),
fn: function (){
var self=this;
(self['@objects']=smalltalk.send((smalltalk.Dictionary || Dictionary), "_new", []));
return self;}
}),
smalltalk.MaglevObjectSpace);

smalltalk.addMethod(
unescape('_reloadObject_'),
smalltalk.method({
selector: unescape('reloadObject%3A'),
fn: function (anOop){
var self=this;
var obj=nil;
(obj=smalltalk.send((smalltalk.MaglevAjax || MaglevAjax), "_ajax_data_", [smalltalk.send(unescape("/object/index/"), "__comma", [smalltalk.send(anOop, "_asString", [])]), smalltalk.send((smalltalk.Dictionary || Dictionary), "_new", [])]));
return smalltalk.send((smalltalk.MaglevObject || MaglevObject), "_newObject_", [obj]);
return self;}
}),
smalltalk.MaglevObjectSpace);

smalltalk.addMethod(
unescape('_reloadObject_withCallback_'),
smalltalk.method({
selector: unescape('reloadObject%3AwithCallback%3A'),
fn: function (anOop, aBlock){
var self=this;
smalltalk.send((smalltalk.MaglevAjax || MaglevAjax), "_ajax_data_withCallback_", [smalltalk.send(unescape("/object/index/"), "__comma", [smalltalk.send(anOop, "_asString", [])]), smalltalk.send((smalltalk.Dictionary || Dictionary), "_new", []), (function(obj){return smalltalk.send(aBlock, "_value_", [smalltalk.send((smalltalk.MaglevObject || MaglevObject), "_newObject_", [obj])]);})]);
return self;}
}),
smalltalk.MaglevObjectSpace);

smalltalk.addMethod(
unescape('_updateObject_'),
smalltalk.method({
selector: unescape('updateObject%3A'),
fn: function (anObject){
var self=this;
smalltalk.send(self['@objects'], "_at_put_", [smalltalk.send(anObject, "_oop", []), anObject]);
return self;}
}),
smalltalk.MaglevObjectSpace);


smalltalk.MaglevObjectSpace.klass.iVarNames = ['instance'];
smalltalk.addMethod(
unescape('_instance'),
smalltalk.method({
selector: unescape('instance'),
fn: function (){
var self=this;
(($receiver = self['@instance']) == nil || $receiver == undefined) ? (function(){return (self['@instance']=smalltalk.send(self, "_new", []));})() : $receiver;
return self['@instance'];
return self;}
}),
smalltalk.MaglevObjectSpace.klass);


