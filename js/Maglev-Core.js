smalltalk.addPackage('Maglev-Core', {});
smalltalk.addClass('Maglev', smalltalk.Object, ['objectSpace'], 'Maglev-Core');
smalltalk.addMethod(
unescape('_objectSpace'),
smalltalk.method({
selector: unescape('objectSpace'),
category: 'accessing',
fn: function (){
var self=this;
(($receiver = self['@objectSpace']) == nil || $receiver == undefined) ? (function(){return (self['@objectSpace']=smalltalk.send((smalltalk.MaglevObjectSpace || MaglevObjectSpace), "_instance", []));})() : $receiver;
return self['@objectSpace'];
return self;},
args: [],
source: unescape('objectSpace%0A%09objectSpace%20ifNil%3A%20%5BobjectSpace%20%3A%3D%20MaglevObjectSpace%20instance%5D.%0A%09%5E%20objectSpace'),
messageSends: ["ifNil:", "instance"],
referencedClasses: ["MaglevObjectSpace"]
}),
smalltalk.Maglev);

smalltalk.addMethod(
unescape('_showObjectWindow_'),
smalltalk.method({
selector: unescape('showObjectWindow%3A'),
category: 'rendering',
fn: function (oop){
var self=this;
try{var window=nil;
((($receiver = smalltalk.send(smalltalk.send(self, "_objectSpace", []), "_hasLoadedOop_", [oop])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return (function(){throw({name: 'stReturn', selector: '_showObjectWindow_', fn: function(){return smalltalk.send(self, "_showReloadObjectWindow_", [oop])}})})();})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return (function(){throw({name: 'stReturn', selector: '_showObjectWindow_', fn: function(){return smalltalk.send(self, "_showReloadObjectWindow_", [oop])}})})();})]));
(window=smalltalk.send(smalltalk.send(smalltalk.send(self, "_objectSpace", []), "_at_", [oop]), "_windowViewComponent", []));
smalltalk.send(window, "_appendToWorkspace", []);
(function(){throw({name: 'stReturn', selector: '_showObjectWindow_', fn: function(){return window}})})();
return self;
} catch(e) {if(e.name === 'stReturn' && e.selector === '_showObjectWindow_'){return e.fn()} throw(e)}},
args: ["oop"],
source: unescape('showObjectWindow%3A%20oop%0A%09%7Cwindow%7C%0A%09%28self%20objectSpace%20hasLoadedOop%3A%20oop%29%0A%09%09ifFalse%3A%20%5B%5E%20self%20showReloadObjectWindow%3A%20oop%5D.%0A%09window%20%3A%3D%20%28self%20objectSpace%20at%3A%20oop%29%20windowViewComponent.%0A%09window%20appendToWorkspace.%0A%09%5E%20window'),
messageSends: ["ifFalse:", "hasLoadedOop:", "objectSpace", "showReloadObjectWindow:", "windowViewComponent", "at:", "appendToWorkspace"],
referencedClasses: []
}),
smalltalk.Maglev);

smalltalk.addMethod(
unescape('_showReloadObjectWindow_'),
smalltalk.method({
selector: unescape('showReloadObjectWindow%3A'),
category: 'rendering',
fn: function (oop){
var self=this;
var window=nil;
(window=smalltalk.send((smalltalk.MaglevWaitingWindow || MaglevWaitingWindow), "_new", []));
smalltalk.send(window, "_appendToWorkspace", []);
smalltalk.send(smalltalk.send(self, "_objectSpace", []), "_reloadObject_withCallback_", [oop, (function(object){var objWindow=nil;
(objWindow=smalltalk.send(object, "_windowViewComponentReplace_", [window]));return smalltalk.send(objWindow, "_renderReplace", []);})]);
return window;
return self;},
args: ["oop"],
source: unescape('showReloadObjectWindow%3A%20oop%0A%09%7Cwindow%7C%0A%09window%20%3A%3D%20MaglevWaitingWindow%20new.%0A%09window%20appendToWorkspace.%0A%09self%20objectSpace%0A%09%09reloadObject%3A%20oop%0A%09%09withCallback%3A%20%5B%3Aobject%20%7C%20%7CobjWindow%7C%0A%09%09%09objWindow%20%3A%3D%20object%20windowViewComponentReplace%3A%20window.%0A%09%09%09objWindow%20renderReplace%5D.%0A%09%5E%20window'),
messageSends: ["new", "appendToWorkspace", "reloadObject:withCallback:", "objectSpace", "windowViewComponentReplace:", "renderReplace"],
referencedClasses: ["MaglevWaitingWindow"]
}),
smalltalk.Maglev);


smalltalk.Maglev.klass.iVarNames = ['instance'];
smalltalk.addMethod(
unescape('_instance'),
smalltalk.method({
selector: unescape('instance'),
category: 'singleton',
fn: function (){
var self=this;
(($receiver = self['@instance']) == nil || $receiver == undefined) ? (function(){return (self['@instance']=smalltalk.send((smalltalk.Maglev || Maglev), "_new", []));})() : $receiver;
return self['@instance'];
return self;},
args: [],
source: unescape('instance%0A%09instance%20ifNil%3A%20%5Binstance%20%3A%3D%20Maglev%20new%5D.%0A%09%5E%20instance'),
messageSends: ["ifNil:", "new"],
referencedClasses: ["Maglev"]
}),
smalltalk.Maglev.klass);


smalltalk.addClass('MaglevObject', smalltalk.Object, ['oop', 'instVars', 'classObject', 'inspection', 'isLoaded', 'windows'], 'Maglev-Core');
smalltalk.addMethod(
unescape('_addWindow_'),
smalltalk.method({
selector: unescape('addWindow%3A'),
category: 'interactions',
fn: function (aWindow){
var self=this;
smalltalk.send(smalltalk.send(self, "_windows", []), "_add_", [aWindow]);
return aWindow;
return self;},
args: ["aWindow"],
source: unescape('addWindow%3A%20aWindow%0A%09self%20windows%20add%3A%20aWindow.%0A%09%5E%20aWindow'),
messageSends: ["add:", "windows"],
referencedClasses: []
}),
smalltalk.MaglevObject);

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
unescape('_inspection'),
smalltalk.method({
selector: unescape('inspection'),
category: 'accessing',
fn: function (){
var self=this;
return self['@inspection'];
return self;},
args: [],
source: unescape('inspection%0A%09%5E%20inspection'),
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
return self['@isLoaded'];
return self;},
args: [],
source: unescape('isLoaded%0A%09%5E%20isLoaded'),
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
(self['@isLoaded']=true);
(self['@oop']=smalltalk.send(obj, "_oop", []));
(self['@classObject']=smalltalk.send((smalltalk.MaglevObject || MaglevObject), "_newObject_", [smalltalk.send(obj, "_classObject", [])]));
(self['@inspection']=smalltalk.send(obj, "_inspection", []));
(self['@instVars']=smalltalk.send((smalltalk.Dictionary || Dictionary), "_new", []));
smalltalk.send(smalltalk.send(obj, "_instVars", []), "_keysAndValuesDo_", [(function(ivName, ivValue){return smalltalk.send(self['@instVars'], "_at_put_", [ivName, smalltalk.send((smalltalk.MaglevObject || MaglevObject), "_newObject_", [ivValue])]);})]);
return self;},
args: ["obj"],
source: unescape('parseJSON%3A%20obj%0A%09isLoaded%20%3A%3D%20true.%0A%09oop%20%3A%3D%20obj%20oop.%0A%09classObject%20%3A%3D%20MaglevObject%20newObject%3A%20obj%20classObject.%0A%09inspection%20%3A%3D%20obj%20inspection.%0A%09instVars%20%3A%3D%20Dictionary%20new.%0A%09obj%20instVars%20keysAndValuesDo%3A%20%5B%3AivName%20%3AivValue%20%7C%0A%09%09instVars%20at%3A%20ivName%20put%3A%20%28MaglevObject%20newObject%3A%20ivValue%29%5D.%0A%09'),
messageSends: ["oop", "newObject:", "classObject", "inspection", "new", "keysAndValuesDo:", "instVars", "at:put:"],
referencedClasses: ["MaglevObject", "Dictionary"]
}),
smalltalk.MaglevObject);

smalltalk.addMethod(
unescape('_parseJSONNotLoaded_'),
smalltalk.method({
selector: unescape('parseJSONNotLoaded%3A'),
category: 'instance creation',
fn: function (obj){
var self=this;
(self['@isLoaded']=false);
(self['@oop']=smalltalk.send(obj, "_oop", []));
(self['@inspection']=smalltalk.send(obj, "_inspection", []));
return self;},
args: ["obj"],
source: unescape('parseJSONNotLoaded%3A%20obj%0A%09isLoaded%20%3A%3D%20false.%0A%09oop%20%3A%3D%20obj%20oop.%0A%09inspection%20%3A%3D%20obj%20inspection.'),
messageSends: ["oop", "inspection"],
referencedClasses: []
}),
smalltalk.MaglevObject);

smalltalk.addMethod(
unescape('_removeWindow_'),
smalltalk.method({
selector: unescape('removeWindow%3A'),
category: 'interactions',
fn: function (aWindow){
var self=this;
smalltalk.send(smalltalk.send(self, "_windows", []), "_remove_", [aWindow]);
return aWindow;
return self;},
args: ["aWindow"],
source: unescape('removeWindow%3A%20aWindow%0A%09self%20windows%20remove%3A%20aWindow.%0A%09%5E%20aWindow'),
messageSends: ["remove:", "windows"],
referencedClasses: []
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

smalltalk.addMethod(
unescape('_windowViewComponentReplace_'),
smalltalk.method({
selector: unescape('windowViewComponentReplace%3A'),
category: 'rendering',
fn: function (aWindow){
var self=this;
var window=nil;
(window=smalltalk.send(smalltalk.send(smalltalk.send(self, "_class", []), "_windowViewClass", []), "_newReplace_", [aWindow]));
smalltalk.send(window, "_object_", [self]);
return window;
return self;},
args: ["aWindow"],
source: unescape('windowViewComponentReplace%3A%20aWindow%0A%09%7Cwindow%7C%0A%09window%20%3A%3D%20self%20class%20windowViewClass%20newReplace%3A%20aWindow.%0A%09window%20object%3A%20self.%0A%09%5E%20window'),
messageSends: ["newReplace:", "windowViewClass", "class", "object:"],
referencedClasses: []
}),
smalltalk.MaglevObject);

smalltalk.addMethod(
unescape('_windows'),
smalltalk.method({
selector: unescape('windows'),
category: 'accessing',
fn: function (){
var self=this;
(($receiver = self['@windows']) == nil || $receiver == undefined) ? (function(){return (self['@windows']=smalltalk.send((smalltalk.OrderedCollection || OrderedCollection), "_new", []));})() : $receiver;
return self['@windows'];
return self;},
args: [],
source: unescape('windows%0A%09windows%20ifNil%3A%20%5Bwindows%20%3A%3D%20OrderedCollection%20new%5D.%0A%09%5E%20windows'),
messageSends: ["ifNil:", "new"],
referencedClasses: ["OrderedCollection"]
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
try{var object=nil;
(object=smalltalk.send(self, "_newFor_", [smalltalk.send(obj, "_basetype", [])]));
((($receiver = smalltalk.send(obj, "_loaded", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (function(){throw({name: 'stReturn', selector: '_parseJSON_', fn: function(){return (function($rec){smalltalk.send($rec, "_parseJSON_", [obj]);return smalltalk.send($rec, "_yourself", []);})(object)}})})();})() : (function(){return (function(){throw({name: 'stReturn', selector: '_parseJSON_', fn: function(){return (function($rec){smalltalk.send($rec, "_parseJSONNotLoaded_", [obj]);return smalltalk.send($rec, "_yourself", []);})(object)}})})();})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return (function(){throw({name: 'stReturn', selector: '_parseJSON_', fn: function(){return (function($rec){smalltalk.send($rec, "_parseJSON_", [obj]);return smalltalk.send($rec, "_yourself", []);})(object)}})})();}), (function(){return (function(){throw({name: 'stReturn', selector: '_parseJSON_', fn: function(){return (function($rec){smalltalk.send($rec, "_parseJSONNotLoaded_", [obj]);return smalltalk.send($rec, "_yourself", []);})(object)}})})();})]));
return self;
} catch(e) {if(e.name === 'stReturn' && e.selector === '_parseJSON_'){return e.fn()} throw(e)}},
args: ["obj"],
source: unescape('parseJSON%3A%20obj%0A%09%7Cobject%7C%0A%09object%20%3A%3D%20self%20newFor%3A%20obj%20basetype.%0A%09obj%20loaded%0A%09%09ifTrue%3A%20%5B%5E%20object%20parseJSON%3A%20obj%3B%20yourself%5D%0A%09%09ifFalse%3A%20%5B%5E%20object%20parseJSONNotLoaded%3A%20obj%3B%20yourself%5D.'),
messageSends: ["newFor:", "basetype", "ifTrue:ifFalse:", "loaded", "parseJSON:", "yourself", "parseJSONNotLoaded:"],
referencedClasses: []
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
unescape('_at_'),
smalltalk.method({
selector: unescape('at%3A'),
category: 'accessing',
fn: function (anInteger){
var self=this;
return smalltalk.send(smalltalk.send(self, "_elements", []), "_at_", [anInteger]);
return self;},
args: ["anInteger"],
source: unescape('at%3A%20anInteger%0A%09%5E%20self%20elements%20at%3A%20anInteger'),
messageSends: ["at:", "elements"],
referencedClasses: []
}),
smalltalk.MaglevArray);

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
try{(($receiver = self['@size']) == nil || $receiver == undefined) ? (function(){return (function(){throw({name: 'stReturn', selector: '_size', fn: function(){return smalltalk.send(self['@elements'], "_size", [])}})})();})() : $receiver;
(function(){throw({name: 'stReturn', selector: '_size', fn: function(){return self['@size']}})})();
return self;
} catch(e) {if(e.name === 'stReturn' && e.selector === '_size'){return e.fn()} throw(e)}},
args: [],
source: unescape('size%0A%09size%20ifNil%3A%20%5B%5E%20elements%20size%5D.%0A%09%5E%20size'),
messageSends: ["ifNil:", "size"],
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


smalltalk.addClass('MaglevFixnum', smalltalk.MaglevObject, [], 'Maglev-Core');

smalltalk.addMethod(
unescape('_basetype'),
smalltalk.method({
selector: unescape('basetype'),
category: 'constants',
fn: function (){
var self=this;
return smalltalk.symbolFor("fixnum");
return self;},
args: [],
source: unescape('basetype%0A%09%5E%20%23fixnum'),
messageSends: [],
referencedClasses: []
}),
smalltalk.MaglevFixnum.klass);

smalltalk.addMethod(
unescape('_inlineViewClass'),
smalltalk.method({
selector: unescape('inlineViewClass'),
category: 'constants',
fn: function (){
var self=this;
return (smalltalk.MaglevFixnumInline || MaglevFixnumInline);
return self;},
args: [],
source: unescape('inlineViewClass%0A%09%5E%20MaglevFixnumInline'),
messageSends: [],
referencedClasses: ["MaglevFixnumInline"]
}),
smalltalk.MaglevFixnum.klass);

smalltalk.addMethod(
unescape('_windowViewClass'),
smalltalk.method({
selector: unescape('windowViewClass'),
category: 'constants',
fn: function (){
var self=this;
return (smalltalk.MaglevFixnumWindow || MaglevFixnumWindow);
return self;},
args: [],
source: unescape('windowViewClass%0A%09%5E%20MaglevFixnumWindow'),
messageSends: [],
referencedClasses: ["MaglevFixnumWindow"]
}),
smalltalk.MaglevFixnum.klass);


smalltalk.addClass('MaglevFloat', smalltalk.MaglevObject, [], 'Maglev-Core');

smalltalk.addMethod(
unescape('_basetype'),
smalltalk.method({
selector: unescape('basetype'),
category: 'constants',
fn: function (){
var self=this;
return smalltalk.symbolFor("float");
return self;},
args: [],
source: unescape('basetype%0A%09%5E%20%23float'),
messageSends: [],
referencedClasses: []
}),
smalltalk.MaglevFloat.klass);

smalltalk.addMethod(
unescape('_inlineViewClass'),
smalltalk.method({
selector: unescape('inlineViewClass'),
category: 'constants',
fn: function (){
var self=this;
return (smalltalk.MaglevFloatInline || MaglevFloatInline);
return self;},
args: [],
source: unescape('inlineViewClass%0A%09%5E%20MaglevFloatInline'),
messageSends: [],
referencedClasses: ["MaglevFloatInline"]
}),
smalltalk.MaglevFloat.klass);

smalltalk.addMethod(
unescape('_windowViewClass'),
smalltalk.method({
selector: unescape('windowViewClass'),
category: 'constants',
fn: function (){
var self=this;
return (smalltalk.MaglevFloatWindow || MaglevFloatWindow);
return self;},
args: [],
source: unescape('windowViewClass%0A%09%5E%20MaglevFloatWindow'),
messageSends: [],
referencedClasses: ["MaglevFloatWindow"]
}),
smalltalk.MaglevFloat.klass);


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
unescape('_keysAndValuesDo_'),
smalltalk.method({
selector: unescape('keysAndValuesDo%3A'),
category: 'accessing',
fn: function (aBlock){
var self=this;
smalltalk.send(self['@elements'], "_keysAndValuesDo_", [aBlock]);
return self;},
args: ["aBlock"],
source: unescape('keysAndValuesDo%3A%20aBlock%0A%09elements%20keysAndValuesDo%3A%20aBlock.'),
messageSends: ["keysAndValuesDo:"],
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
smalltalk.send(smalltalk.send(obj, "_elements", []), "_keysAndValuesDo_", [(function(keySt, value){var key=nil;
(key=smalltalk.send(keySt, "_asNumber", []));return ((($receiver = smalltalk.send(smalltalk.send(key, "_\\\\", [(2)]), "__eq_eq", [(0)])).klass === smalltalk.Boolean) ? ($receiver ? (function(){var objKey=nil;
var objValue=nil;
(objKey=smalltalk.send((smalltalk.MaglevObject || MaglevObject), "_newObject_", [value]));(objValue=smalltalk.send((smalltalk.MaglevObject || MaglevObject), "_newObject_", [smalltalk.send(smalltalk.send(obj, "_elements", []), "_at_", [((($receiver = key).klass === smalltalk.Number) ? $receiver +(1) : smalltalk.send($receiver, "__plus", [(1)]))])]));return smalltalk.send(self['@elements'], "_at_put_", [objKey, objValue]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){var objKey=nil;
var objValue=nil;
(objKey=smalltalk.send((smalltalk.MaglevObject || MaglevObject), "_newObject_", [value]));(objValue=smalltalk.send((smalltalk.MaglevObject || MaglevObject), "_newObject_", [smalltalk.send(smalltalk.send(obj, "_elements", []), "_at_", [((($receiver = key).klass === smalltalk.Number) ? $receiver +(1) : smalltalk.send($receiver, "__plus", [(1)]))])]));return smalltalk.send(self['@elements'], "_at_put_", [objKey, objValue]);})]));})]);
return self;},
args: ["obj"],
source: unescape('parseJSON%3A%20obj%0A%09super%20parseJSON%3A%20obj.%0A%09size%20%3A%3D%20obj%20size.%0A%09elements%20%3A%3D%20Dictionary%20new.%0A%09obj%20elements%20keysAndValuesDo%3A%20%5B%3AkeySt%20%3Avalue%20%7C%20%7Ckey%7C%0A%09%09key%20%3A%3D%20keySt%20asNumber.%0A%09%09key%20%5C%5C%202%20%3D%3D%200%20ifTrue%3A%20%5B%20%7CobjKey%20objValue%7C%0A%09%09%09objKey%20%3A%3D%20MaglevObject%20newObject%3A%20value.%0A%09%09%09objValue%20%3A%3D%20MaglevObject%20newObject%3A%20%28obj%20elements%20at%3A%20key%20+%201%29.%0A%09%09%09elements%20at%3A%20objKey%20put%3A%20objValue%5D%5D.'),
messageSends: ["parseJSON:", "size", "new", "keysAndValuesDo:", "elements", "asNumber", "ifTrue:", unescape("%3D%3D"), unescape("%5C%5C%5C%5C"), "newObject:", "at:", unescape("+"), "at:put:"],
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
try{(($receiver = self['@size']) == nil || $receiver == undefined) ? (function(){return (function(){throw({name: 'stReturn', selector: '_size', fn: function(){return smalltalk.send(self['@elements'], "_size", [])}})})();})() : $receiver;
(function(){throw({name: 'stReturn', selector: '_size', fn: function(){return self['@size']}})})();
return self;
} catch(e) {if(e.name === 'stReturn' && e.selector === '_size'){return e.fn()} throw(e)}},
args: [],
source: unescape('size%0A%09size%20ifNil%3A%20%5B%5E%20elements%20size%5D.%0A%09%5E%20size'),
messageSends: ["ifNil:", "size"],
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


smalltalk.addClass('MaglevNilClass', smalltalk.MaglevObject, [], 'Maglev-Core');

smalltalk.addMethod(
unescape('_basetype'),
smalltalk.method({
selector: unescape('basetype'),
category: 'constants',
fn: function (){
var self=this;
return smalltalk.symbolFor("nilclass");
return self;},
args: [],
source: unescape('basetype%0A%09%5E%20%23nilclass'),
messageSends: [],
referencedClasses: []
}),
smalltalk.MaglevNilClass.klass);

smalltalk.addMethod(
unescape('_inlineViewClass'),
smalltalk.method({
selector: unescape('inlineViewClass'),
category: 'constants',
fn: function (){
var self=this;
return (smalltalk.MaglevNilClassInline || MaglevNilClassInline);
return self;},
args: [],
source: unescape('inlineViewClass%0A%09%5E%20MaglevNilClassInline'),
messageSends: [],
referencedClasses: ["MaglevNilClassInline"]
}),
smalltalk.MaglevNilClass.klass);

smalltalk.addMethod(
unescape('_windowViewClass'),
smalltalk.method({
selector: unescape('windowViewClass'),
category: 'constants',
fn: function (){
var self=this;
return (smalltalk.MaglevNilClassWindow || MaglevNilClassWindow);
return self;},
args: [],
source: unescape('windowViewClass%0A%09%5E%20MaglevNilClassWindow'),
messageSends: [],
referencedClasses: ["MaglevNilClassWindow"]
}),
smalltalk.MaglevNilClass.klass);


smalltalk.addClass('MaglevString', smalltalk.MaglevObject, [], 'Maglev-Core');

smalltalk.addMethod(
unescape('_basetype'),
smalltalk.method({
selector: unescape('basetype'),
category: 'constants',
fn: function (){
var self=this;
return smalltalk.symbolFor("string");
return self;},
args: [],
source: unescape('basetype%0A%09%5E%20%23string'),
messageSends: [],
referencedClasses: []
}),
smalltalk.MaglevString.klass);

smalltalk.addMethod(
unescape('_inlineViewClass'),
smalltalk.method({
selector: unescape('inlineViewClass'),
category: 'constants',
fn: function (){
var self=this;
return (smalltalk.MaglevStringInline || MaglevStringInline);
return self;},
args: [],
source: unescape('inlineViewClass%0A%09%5E%20MaglevStringInline'),
messageSends: [],
referencedClasses: ["MaglevStringInline"]
}),
smalltalk.MaglevString.klass);

smalltalk.addMethod(
unescape('_windowViewClass'),
smalltalk.method({
selector: unescape('windowViewClass'),
category: 'constants',
fn: function (){
var self=this;
return (smalltalk.MaglevStringWindow || MaglevStringWindow);
return self;},
args: [],
source: unescape('windowViewClass%0A%09%5E%20MaglevStringWindow'),
messageSends: [],
referencedClasses: ["MaglevStringWindow"]
}),
smalltalk.MaglevString.klass);


smalltalk.addClass('MaglevSymbol', smalltalk.MaglevObject, [], 'Maglev-Core');

smalltalk.addMethod(
unescape('_basetype'),
smalltalk.method({
selector: unescape('basetype'),
category: 'constants',
fn: function (){
var self=this;
return smalltalk.symbolFor("symbol");
return self;},
args: [],
source: unescape('basetype%0A%09%5E%20%23symbol'),
messageSends: [],
referencedClasses: []
}),
smalltalk.MaglevSymbol.klass);

smalltalk.addMethod(
unescape('_inlineViewClass'),
smalltalk.method({
selector: unescape('inlineViewClass'),
category: 'constants',
fn: function (){
var self=this;
return (smalltalk.MaglevSymbolInline || MaglevSymbolInline);
return self;},
args: [],
source: unescape('inlineViewClass%0A%09%5E%20MaglevSymbolInline'),
messageSends: [],
referencedClasses: ["MaglevSymbolInline"]
}),
smalltalk.MaglevSymbol.klass);

smalltalk.addMethod(
unescape('_windowViewClass'),
smalltalk.method({
selector: unescape('windowViewClass'),
category: 'constants',
fn: function (){
var self=this;
return (smalltalk.MaglevSymbolWindow || MaglevSymbolWindow);
return self;},
args: [],
source: unescape('windowViewClass%0A%09%5E%20MaglevSymbolWindow'),
messageSends: [],
referencedClasses: ["MaglevSymbolWindow"]
}),
smalltalk.MaglevSymbol.klass);


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
unescape('_hasLoadedOop_'),
smalltalk.method({
selector: unescape('hasLoadedOop%3A'),
category: 'objects',
fn: function (oop){
var self=this;
return smalltalk.send(smalltalk.send(self['@objects'], "_includesKey_", [oop]), "_and_", [(function(){return smalltalk.send(smalltalk.send(self['@objects'], "_at_", [oop]), "_isLoaded", []);})]);
return self;},
args: ["oop"],
source: unescape('hasLoadedOop%3A%20oop%0A%09%5E%20%28objects%20includesKey%3A%20oop%29%20and%3A%20%5B%28objects%20at%3A%20oop%29%20isLoaded%5D'),
messageSends: ["and:", "includesKey:", "isLoaded", "at:"],
referencedClasses: []
}),
smalltalk.MaglevObjectSpace);

smalltalk.addMethod(
unescape('_hasOop_'),
smalltalk.method({
selector: unescape('hasOop%3A'),
category: 'objects',
fn: function (oop){
var self=this;
return smalltalk.send(self['@objects'], "_includesKey_", [oop]);
return self;},
args: ["oop"],
source: unescape('hasOop%3A%20oop%0A%09%5E%20objects%20includesKey%3A%20oop'),
messageSends: ["includesKey:"],
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
unescape('_registerWindow_'),
smalltalk.method({
selector: unescape('registerWindow%3A'),
category: 'interactions',
fn: function (aWindow){
var self=this;
smalltalk.send(smalltalk.send(smalltalk.send(self, "_objects", []), "_at_", [smalltalk.send(smalltalk.send(aWindow, "_object", []), "_oop", [])]), "_addWindow_", [aWindow]);
return self;},
args: ["aWindow"],
source: unescape('registerWindow%3A%20aWindow%0A%09%28self%20objects%20at%3A%20aWindow%20object%20oop%29%0A%09%09addWindow%3A%20aWindow.'),
messageSends: ["addWindow:", "at:", "objects", "oop", "object"],
referencedClasses: []
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
unescape('_unregisterWindow_'),
smalltalk.method({
selector: unescape('unregisterWindow%3A'),
category: 'interactions',
fn: function (aWindow){
var self=this;
smalltalk.send(smalltalk.send(smalltalk.send(self, "_objects", []), "_at_", [smalltalk.send(smalltalk.send(aWindow, "_object", []), "_oop", [])]), "_removeWindow_", [aWindow]);
return self;},
args: ["aWindow"],
source: unescape('unregisterWindow%3A%20aWindow%0A%09%28self%20objects%20at%3A%20aWindow%20object%20oop%29%0A%09%09removeWindow%3A%20aWindow.'),
messageSends: ["removeWindow:", "at:", "objects", "oop", "object"],
referencedClasses: []
}),
smalltalk.MaglevObjectSpace);

smalltalk.addMethod(
unescape('_updateObject_'),
smalltalk.method({
selector: unescape('updateObject%3A'),
category: 'objects',
fn: function (anObject){
var self=this;
((($receiver = smalltalk.send(anObject, "_isLoaded", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self['@objects'], "_at_put_", [smalltalk.send(anObject, "_oop", []), anObject]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(self['@objects'], "_at_put_", [smalltalk.send(anObject, "_oop", []), anObject]);})]));
return self;},
args: ["anObject"],
source: unescape('updateObject%3A%20anObject%0A%09anObject%20isLoaded%0A%09%09ifTrue%3A%20%5Bobjects%20at%3A%20anObject%20oop%20put%3A%20anObject%5D.'),
messageSends: ["ifTrue:", "isLoaded", "at:put:", "oop"],
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


