smalltalk.addPackage('Maglev-Core', {});
smalltalk.addClass('Maglev', smalltalk.Object, [], 'Maglev-Core');


smalltalk.addClass('MaglevObject', smalltalk.Object, ['oop', 'instVars', 'class', 'inspect'], 'Maglev-Core');
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
unescape('_inlineViewComponent'),
smalltalk.method({
selector: unescape('inlineViewComponent'),
fn: function (){
var self=this;
return (function($rec){smalltalk.send($rec, "_object_", [self]);smalltalk.send($rec, "_initialize", []);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(smalltalk.send(self, "_inlineViewClass", []), "_basicNew", []));
return self;}
}),
smalltalk.MaglevObject.klass);


smalltalk.addClass('MaglevArray', smalltalk.MaglevObject, ['elements', 'size'], 'Maglev-Core');
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


smalltalk.addClass('MaglevHash', smalltalk.MaglevObject, ['elements', 'size'], 'Maglev-Core');
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


smalltalk.addClass('MaglevModule', smalltalk.MaglevObject, ['includedModules'], 'Maglev-Core');

smalltalk.addMethod(
unescape('_basetype'),
smalltalk.method({
selector: unescape('basetype'),
fn: function (){
var self=this;
smalltalk.send(smalltalk.symbolFor(""), "_module", []);
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


smalltalk.addClass('MaglevClass', smalltalk.MaglevModule, ['superclass', 'elements', 'size'], 'Maglev-Core');

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



smalltalk.addClass('MaglevObjectSpace', smalltalk.Object, ['objects'], 'Maglev-Core');


