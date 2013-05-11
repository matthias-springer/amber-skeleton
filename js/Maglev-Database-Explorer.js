smalltalk.addPackage('Maglev-Database-Explorer', {});
smalltalk.addClass('MaglevDraggableObject', smalltalk.Widget, ['content'], 'Maglev-Database-Explorer');
smalltalk.addMethod(
unescape('_content'),
smalltalk.method({
selector: unescape('content'),
category: 'accessing',
fn: function (){
var self=this;
return self['@content'];
return self;},
args: [],
source: unescape('content%0A%09%5E%20content'),
messageSends: [],
referencedClasses: []
}),
smalltalk.MaglevDraggableObject);

smalltalk.addMethod(
unescape('_content_'),
smalltalk.method({
selector: unescape('content%3A'),
category: 'accessing',
fn: function (anObject){
var self=this;
(self['@content']=anObject);
return self;},
args: ["anObject"],
source: unescape('content%3A%20anObject%0A%09content%20%3A%3D%20anObject.'),
messageSends: [],
referencedClasses: []
}),
smalltalk.MaglevDraggableObject);

smalltalk.addMethod(
unescape('_renderOn_'),
smalltalk.method({
selector: unescape('renderOn%3A'),
category: 'rendering',
fn: function (html){
var self=this;
smalltalk.send(smalltalk.send(html, "_div", []), "_class_with_", [unescape("draggable-new-object-container"), (function(){return (function($rec){smalltalk.send($rec, "_class_", [unescape("ui-widget-content%20ui-draggable%20draggable-new-object")]);return smalltalk.send($rec, "_with_", [(function(){(function($rec){smalltalk.send($rec, "_class_", [unescape("object-drag-dummy")]);smalltalk.send($rec, "_style_", [unescape("display%3A%20none%3B")]);smalltalk.send($rec, "_with_", [smalltalk.send((smalltalk.MaglevIcon || MaglevIcon), "_move", [])]);return smalltalk.send($rec, "_with_", [self['@content']]);})(smalltalk.send(html, "_div", []));return (function($rec){smalltalk.send($rec, "_class_", [unescape("object-iv-name")]);return smalltalk.send($rec, "_with_", [self['@content']]);})(smalltalk.send(html, "_div", []));})]);})(smalltalk.send(html, "_div", []));})]);
return self;},
args: ["html"],
source: unescape('renderOn%3A%20html%0A%09html%20div%0A%09%09class%3A%20%27draggable-new-object-container%27%0A%09%09with%3A%20%5B%0A%09%09%09html%20div%0A%09%09%09%09class%3A%20%27ui-widget-content%20ui-draggable%20draggable-new-object%27%3B%0A%09%09%09%09with%3A%20%5B%0A%09%09%09%09%09html%20div%0A%09%09%09%09%09%09class%3A%20%27object-drag-dummy%27%3B%0A%09%09%09%09%09%09style%3A%20%27display%3A%20none%3B%27%3B%0A%09%09%09%09%09%09with%3A%20MaglevIcon%20move%3B%0A%09%09%09%09%09%09with%3A%20content.%0A%09%09%09%09%09html%20div%0A%09%09%09%09%09%09class%3A%20%27object-iv-name%27%3B%0A%09%09%09%09%09%09with%3A%20content%5D%5D.'),
messageSends: ["class:with:", "div", "class:", "with:", "style:", "move"],
referencedClasses: ["MaglevIcon"]
}),
smalltalk.MaglevDraggableObject);


smalltalk.addMethod(
unescape('_with_'),
smalltalk.method({
selector: unescape('with%3A'),
category: 'not yet classified',
fn: function (anObject){
var self=this;
return (function($rec){smalltalk.send($rec, "_content_", [anObject]);smalltalk.send($rec, "_initialize", []);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(self, "_basicNew", []));
return self;},
args: ["anObject"],
source: unescape('with%3A%20anObject%0A%09%5E%20self%20basicNew%0A%09%09content%3A%20anObject%3B%0A%09%09initialize%3B%0A%09%09yourself'),
messageSends: ["content:", "initialize", "yourself", "basicNew"],
referencedClasses: []
}),
smalltalk.MaglevDraggableObject.klass);


smalltalk.addClass('MaglevIcon', smalltalk.Widget, ['b', 'icon', 'spin'], 'Maglev-Database-Explorer');
smalltalk.addMethod(
unescape('_icon'),
smalltalk.method({
selector: unescape('icon'),
category: 'accessing',
fn: function (){
var self=this;
(($receiver = self['@icon']) == nil || $receiver == undefined) ? (function(){return (self['@icon']="star");})() : $receiver;
return self['@icon'];
return self;},
args: [],
source: unescape('icon%0A%09icon%20ifNil%3A%20%5Bicon%20%3A%3D%20%27star%27%5D.%0A%09%5E%20icon'),
messageSends: ["ifNil:"],
referencedClasses: []
}),
smalltalk.MaglevIcon);

smalltalk.addMethod(
unescape('_icon_'),
smalltalk.method({
selector: unescape('icon%3A'),
category: 'accessing',
fn: function (aString){
var self=this;
(self['@icon']=aString);
return self;},
args: ["aString"],
source: unescape('icon%3A%20aString%0A%09icon%20%3A%3D%20aString.'),
messageSends: [],
referencedClasses: []
}),
smalltalk.MaglevIcon);

smalltalk.addMethod(
unescape('_renderOn_'),
smalltalk.method({
selector: unescape('renderOn%3A'),
category: 'rendering',
fn: function (html){
var self=this;
var cssClass=nil;
(cssClass=smalltalk.send(unescape("icon-"), "__comma", [smalltalk.send(self, "_icon", [])]));
((($receiver = smalltalk.send(self, "_spin", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (cssClass=smalltalk.send(cssClass, "__comma", [unescape("%20icon-spin")]));})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return (cssClass=smalltalk.send(cssClass, "__comma", [unescape("%20icon-spin")]));})]));
(self['@b']=(function($rec){smalltalk.send($rec, "_class_", [cssClass]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(html, "_b", [])));
return self;},
args: ["html"],
source: unescape('renderOn%3A%20html%0A%09%7CcssClass%7C%0A%09cssClass%20%3A%3D%20%27icon-%27%2C%20self%20icon.%0A%09self%20spin%20%0A%09%09ifTrue%3A%20%5BcssClass%20%3A%3D%20cssClass%2C%20%27%20icon-spin%27%5D.%0A%09b%20%3A%3D%20html%20b%0A%09%09class%3A%20cssClass%3B%0A%09%09yourself.'),
messageSends: [unescape("%2C"), "icon", "ifTrue:", "spin", "class:", "yourself", "b"],
referencedClasses: []
}),
smalltalk.MaglevIcon);

smalltalk.addMethod(
unescape('_spin'),
smalltalk.method({
selector: unescape('spin'),
category: 'accessing',
fn: function (){
var self=this;
(($receiver = self['@spin']) == nil || $receiver == undefined) ? (function(){return (self['@spin']=false);})() : $receiver;
return self['@spin'];
return self;},
args: [],
source: unescape('spin%0A%09spin%20ifNil%3A%20%5Bspin%20%3A%3D%20false%5D.%0A%09%5E%20spin'),
messageSends: ["ifNil:"],
referencedClasses: []
}),
smalltalk.MaglevIcon);

smalltalk.addMethod(
unescape('_spin_'),
smalltalk.method({
selector: unescape('spin%3A'),
category: 'accessing',
fn: function (aBoolean){
var self=this;
(self['@spin']=aBoolean);
return self;},
args: ["aBoolean"],
source: unescape('spin%3A%20aBoolean%0A%09spin%20%3A%3D%20aBoolean.'),
messageSends: [],
referencedClasses: []
}),
smalltalk.MaglevIcon);


smalltalk.addMethod(
unescape('_move'),
smalltalk.method({
selector: unescape('move'),
category: 'instance creation',
fn: function (){
var self=this;
return (function($rec){smalltalk.send($rec, "_icon_", ["move"]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(self, "_new", []));
return self;},
args: [],
source: unescape('move%0A%09%5E%20self%20new%0A%09%09icon%3A%20%27move%27%3B%0A%09%09yourself'),
messageSends: ["icon:", "yourself", "new"],
referencedClasses: []
}),
smalltalk.MaglevIcon.klass);

smalltalk.addMethod(
unescape('_pencil'),
smalltalk.method({
selector: unescape('pencil'),
category: 'instance creation',
fn: function (){
var self=this;
return (function($rec){smalltalk.send($rec, "_icon_", ["pencil"]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(self, "_new", []));
return self;},
args: [],
source: unescape('pencil%0A%09%5E%20self%20new%0A%09%09icon%3A%20%27pencil%27%3B%0A%09%09yourself'),
messageSends: ["icon:", "yourself", "new"],
referencedClasses: []
}),
smalltalk.MaglevIcon.klass);

smalltalk.addMethod(
unescape('_remove'),
smalltalk.method({
selector: unescape('remove'),
category: 'instance creation',
fn: function (){
var self=this;
return (function($rec){smalltalk.send($rec, "_icon_", ["remove"]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(self, "_new", []));
return self;},
args: [],
source: unescape('remove%0A%09%5E%20self%20new%0A%09%09icon%3A%20%27remove%27%3B%0A%09%09yourself'),
messageSends: ["icon:", "yourself", "new"],
referencedClasses: []
}),
smalltalk.MaglevIcon.klass);

smalltalk.addMethod(
unescape('_search'),
smalltalk.method({
selector: unescape('search'),
category: 'instance creation',
fn: function (){
var self=this;
return (function($rec){smalltalk.send($rec, "_icon_", ["search"]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(self, "_new", []));
return self;},
args: [],
source: unescape('search%0A%09%5E%20self%20new%0A%09%09icon%3A%20%27search%27%3B%0A%09%09yourself'),
messageSends: ["icon:", "yourself", "new"],
referencedClasses: []
}),
smalltalk.MaglevIcon.klass);

smalltalk.addMethod(
unescape('_star'),
smalltalk.method({
selector: unescape('star'),
category: 'instance creation',
fn: function (){
var self=this;
return (function($rec){smalltalk.send($rec, "_icon_", ["star"]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(self, "_new", []));
return self;},
args: [],
source: unescape('star%0A%09%5E%20self%20new%0A%09%09icon%3A%20%27star%27%3B%0A%09%09yourself'),
messageSends: ["icon:", "yourself", "new"],
referencedClasses: []
}),
smalltalk.MaglevIcon.klass);

smalltalk.addMethod(
unescape('_wait'),
smalltalk.method({
selector: unescape('wait'),
category: 'instance creation',
fn: function (){
var self=this;
return (function($rec){smalltalk.send($rec, "_icon_", ["refresh"]);smalltalk.send($rec, "_spin_", [true]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(self, "_new", []));
return self;},
args: [],
source: unescape('wait%0A%09%5E%20self%20new%0A%09%09icon%3A%20%27refresh%27%3B%0A%09%09spin%3A%20true%3B%0A%09%09yourself'),
messageSends: ["icon:", "spin:", "yourself", "new"],
referencedClasses: []
}),
smalltalk.MaglevIcon.klass);


smalltalk.addClass('MaglevObjectDropdown', smalltalk.Widget, ['container', 'resultContainer', 'editor', 'editorElement', 'rubyButton', 'smalltalkButton', 'object'], 'Maglev-Database-Explorer');
smalltalk.addMethod(
unescape('_appendToInlineObject_for_'),
smalltalk.method({
selector: unescape('appendToInlineObject%3Afor%3A'),
category: 'interactions',
fn: function (anObject, dropdownContainer){
var self=this;
(self['@object']=smalltalk.send(anObject, "_object", []));
smalltalk.send(smalltalk.send(self['@container'], "_asJQuery", []), "_appendTo_", [smalltalk.send(dropdownContainer, "_asJQuery", [])]);
return self;},
args: ["anObject", "dropdownContainer"],
source: unescape('appendToInlineObject%3A%20anObject%20for%3A%20dropdownContainer%0A%09object%20%3A%3D%20anObject%20object.%0A%09container%20asJQuery%20appendTo%3A%20dropdownContainer%20asJQuery.'),
messageSends: ["object", "appendTo:", "asJQuery"],
referencedClasses: []
}),
smalltalk.MaglevObjectDropdown);

smalltalk.addMethod(
unescape('_code'),
smalltalk.method({
selector: unescape('code'),
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.send(self['@editor'], "_getValue", []);
return self;},
args: [],
source: unescape('code%0A%09%5E%20editor%20getValue'),
messageSends: ["getValue"],
referencedClasses: []
}),
smalltalk.MaglevObjectDropdown);

smalltalk.addMethod(
unescape('_evalDoIt'),
smalltalk.method({
selector: unescape('evalDoIt'),
category: 'interactions',
fn: function (){
var self=this;

return self;},
args: [],
source: unescape('evalDoIt'),
messageSends: [],
referencedClasses: []
}),
smalltalk.MaglevObjectDropdown);

smalltalk.addMethod(
unescape('_evalInspectIt'),
smalltalk.method({
selector: unescape('evalInspectIt'),
category: 'interactions',
fn: function (){
var self=this;

return self;},
args: [],
source: unescape('evalInspectIt'),
messageSends: [],
referencedClasses: []
}),
smalltalk.MaglevObjectDropdown);

smalltalk.addMethod(
unescape('_evalPrintIt'),
smalltalk.method({
selector: unescape('evalPrintIt'),
category: 'interactions',
fn: function (){
var self=this;
smalltalk.send(self, "_executeWithCallback_", [(function(success, resultObj){return ((($receiver = success).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self['@resultContainer'], "_with_", [smalltalk.send(resultObj, "_inlineViewComponent", [])]);})() : (function(){return smalltalk.send(self['@resultContainer'], "_with_", [smalltalk.send(resultObj, "_inlineViewComponent", [])]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(self['@resultContainer'], "_with_", [smalltalk.send(resultObj, "_inlineViewComponent", [])]);}), (function(){return smalltalk.send(self['@resultContainer'], "_with_", [smalltalk.send(resultObj, "_inlineViewComponent", [])]);})]));})]);
return self;},
args: [],
source: unescape('evalPrintIt%0A%09self%20executeWithCallback%3A%20%5B%3Asuccess%20%3AresultObj%20%7C%20%0A%09%09success%0A%09%09%09ifTrue%3A%20%5BresultContainer%20with%3A%20resultObj%20inlineViewComponent%5D%0A%09%09%09ifFalse%3A%20%5BresultContainer%20with%3A%20resultObj%20inlineViewComponent%5D%5D.'),
messageSends: ["executeWithCallback:", "ifTrue:ifFalse:", "with:", "inlineViewComponent"],
referencedClasses: []
}),
smalltalk.MaglevObjectDropdown);

smalltalk.addMethod(
unescape('_executeWithCallback_'),
smalltalk.method({
selector: unescape('executeWithCallback%3A'),
category: 'interactions',
fn: function (aBlock){
var self=this;
var html=nil;
(html=smalltalk.send((smalltalk.HTMLCanvas || HTMLCanvas), "_onJQuery_", [smalltalk.send(self['@resultContainer'], "_asJQuery", [])]));
(function($rec){smalltalk.send($rec, "_addClass_", [unescape("alert-info")]);smalltalk.send($rec, "_removeClass_", [unescape("alert-success")]);return smalltalk.send($rec, "_removeClass_", [unescape("alert-error")]);})(self['@resultContainer']);
smalltalk.send(smalltalk.send(self['@resultContainer'], "_asJQuery", []), "_empty", []);
(function($rec){smalltalk.send($rec, "_with_", [smalltalk.send((smalltalk.MaglevIcon || MaglevIcon), "_wait", [])]);smalltalk.send($rec, "_with_", [" loading..."]);return smalltalk.send($rec, "_show", []);})(self['@resultContainer']);
smalltalk.send(self['@object'], "_evaluate_language_withCallback_", [smalltalk.send(self, "_code", []), smalltalk.send(self, "_language", []), (function(success, resultObj){smalltalk.send(smalltalk.send(self['@resultContainer'], "_asJQuery", []), "_empty", []);smalltalk.send(self['@resultContainer'], "_removeClass_", [unescape("alert-info")]);((($receiver = success).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self['@resultContainer'], "_addClass_", [unescape("alert-success")]);})() : (function(){return smalltalk.send(self['@resultContainer'], "_addClass_", [unescape("alert-error")]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(self['@resultContainer'], "_addClass_", [unescape("alert-success")]);}), (function(){return smalltalk.send(self['@resultContainer'], "_addClass_", [unescape("alert-error")]);})]));return smalltalk.send(aBlock, "_value_value_", [success, resultObj]);})]);
return self;},
args: ["aBlock"],
source: unescape('executeWithCallback%3A%20aBlock%0A%09%7Chtml%7C%0A%09html%20%3A%3D%20HTMLCanvas%20onJQuery%3A%20resultContainer%20asJQuery.%0A%09resultContainer%0A%09%09addClass%3A%20%27alert-info%27%3B%0A%09%09removeClass%3A%20%27alert-success%27%3B%0A%09%09removeClass%3A%20%27alert-error%27.%0A%09resultContainer%20asJQuery%20empty.%0A%09resultContainer%0A%09%09with%3A%20MaglevIcon%20wait%3B%0A%09%09with%3A%20%27%20loading...%27%3B%0A%09%09show.%0A%09object%20%0A%09%09evaluate%3A%20self%20code%20%0A%09%09language%3A%20self%20language%20%0A%09%09withCallback%3A%20%5B%3Asuccess%20%3AresultObj%20%7C%0A%09%09%09resultContainer%20asJQuery%20empty.%0A%09%09%09resultContainer%20removeClass%3A%20%27alert-info%27.%0A%09%09%09success%0A%09%09%09%09ifTrue%3A%20%5BresultContainer%20addClass%3A%20%27alert-success%27%5D%0A%09%09%09%09ifFalse%3A%20%5BresultContainer%20addClass%3A%20%27alert-error%27%5D.%0A%09%09%09aBlock%20value%3A%20success%20value%3A%20resultObj%5D'),
messageSends: ["onJQuery:", "asJQuery", "addClass:", "removeClass:", "empty", "with:", "wait", "show", "evaluate:language:withCallback:", "code", "language", "ifTrue:ifFalse:", "value:value:"],
referencedClasses: ["HTMLCanvas", "MaglevIcon"]
}),
smalltalk.MaglevObjectDropdown);

smalltalk.addMethod(
unescape('_initializeEditor'),
smalltalk.method({
selector: unescape('initializeEditor'),
category: 'initializing',
fn: function (){
var self=this;
(self['@editor']=smalltalk.send((typeof ace == 'undefined' ? nil : ace), "_edit_", [smalltalk.send(smalltalk.send(self['@editorElement'], "_asJQuery", []), "_at_", [(0)])]));
smalltalk.send(self['@editor'], "_setTheme_", [unescape("ace/theme/clouds")]);
smalltalk.send(smalltalk.send(self['@editor'], "_getSession", []), "_setMode_", [unescape("ace/mode/ruby")]);
return self;},
args: [],
source: unescape('initializeEditor%0A%09editor%20%3A%3D%20ace%20edit%3A%20%28editorElement%20asJQuery%20at%3A%200%29.%0A%09editor%20setTheme%3A%20%27ace/theme/clouds%27.%0A%09editor%20getSession%20setMode%3A%20%27ace/mode/ruby%27.'),
messageSends: ["edit:", "at:", "asJQuery", "setTheme:", "setMode:", "getSession"],
referencedClasses: []
}),
smalltalk.MaglevObjectDropdown);

smalltalk.addMethod(
unescape('_isRuby'),
smalltalk.method({
selector: unescape('isRuby'),
category: 'testing',
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(self['@rubyButton'], "_asJQuery", []), "_hasClass_", ["active"]);
return self;},
args: [],
source: unescape('isRuby%0A%09%5E%20rubyButton%20asJQuery%20hasClass%3A%20%27active%27'),
messageSends: ["hasClass:", "asJQuery"],
referencedClasses: []
}),
smalltalk.MaglevObjectDropdown);

smalltalk.addMethod(
unescape('_isSmalltalk'),
smalltalk.method({
selector: unescape('isSmalltalk'),
category: 'testing',
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(self['@smalltalkButton'], "_asJQuery", []), "_hasClass_", ["active"]);
return self;},
args: [],
source: unescape('isSmalltalk%0A%09%5E%20smalltalkButton%20asJQuery%20hasClass%3A%20%27active%27'),
messageSends: ["hasClass:", "asJQuery"],
referencedClasses: []
}),
smalltalk.MaglevObjectDropdown);

smalltalk.addMethod(
unescape('_language'),
smalltalk.method({
selector: unescape('language'),
category: 'accessing',
fn: function (){
var self=this;
try{((($receiver = smalltalk.send(self, "_isRuby", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (function(){throw({name: 'stReturn', selector: '_language', fn: function(){return "ruby"}})})();})() : (function(){return (function(){throw({name: 'stReturn', selector: '_language', fn: function(){return "smalltalk"}})})();})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return (function(){throw({name: 'stReturn', selector: '_language', fn: function(){return "ruby"}})})();}), (function(){return (function(){throw({name: 'stReturn', selector: '_language', fn: function(){return "smalltalk"}})})();})]));
return self;
} catch(e) {if(e.name === 'stReturn' && e.selector === '_language'){return e.fn()} throw(e)}},
args: [],
source: unescape('language%0A%09self%20isRuby%0A%09%09ifTrue%3A%20%5B%5E%20%27ruby%27%5D%0A%09%09ifFalse%3A%20%5B%5E%20%27smalltalk%27%5D'),
messageSends: ["ifTrue:ifFalse:", "isRuby"],
referencedClasses: []
}),
smalltalk.MaglevObjectDropdown);

smalltalk.addMethod(
unescape('_mouseFix'),
smalltalk.method({
selector: unescape('mouseFix'),
category: 'initializing',
fn: function (){
var self=this;
 var menu = self['@container'];
	var editor = self['@editorElement'];
	menu._asJQuery().mousedown(function (event) {
		event.preventDefault();
		return false;
	});
	editor._asJQuery().mousedown(function (event) {
		event.preventDefault();
		return false;
	}); ;
return self;},
args: [],
source: unescape('mouseFix%0A%09%3C%20var%20menu%20%3D%20self%5B%27@container%27%5D%3B%0A%09var%20editor%20%3D%20self%5B%27@editorElement%27%5D%3B%0A%09menu._asJQuery%28%29.mousedown%28function%20%28event%29%20%7B%0A%09%09event.preventDefault%28%29%3B%0A%09%09return%20false%3B%0A%09%7D%29%3B%0A%09editor._asJQuery%28%29.mousedown%28function%20%28event%29%20%7B%0A%09%09event.preventDefault%28%29%3B%0A%09%09return%20false%3B%0A%09%7D%29%3B%20%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.MaglevObjectDropdown);

smalltalk.addMethod(
unescape('_renderButtonsOn_'),
smalltalk.method({
selector: unescape('renderButtonsOn%3A'),
category: 'rendering',
fn: function (html){
var self=this;
(function($rec){smalltalk.send($rec, "_class_", [unescape("btn%20btn-primary")]);smalltalk.send($rec, "_type_", ["button"]);smalltalk.send($rec, "_with_", ["Do it"]);return smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send(self, "_evalDoIt", []);})]);})(smalltalk.send(html, "_button", []));
(function($rec){smalltalk.send($rec, "_class_", [unescape("btn%20btn-primary")]);smalltalk.send($rec, "_type_", ["button"]);smalltalk.send($rec, "_with_", ["Print it"]);return smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send(self, "_evalPrintIt", []);})]);})(smalltalk.send(html, "_button", []));
(function($rec){smalltalk.send($rec, "_class_", [unescape("btn%20btn-primary")]);smalltalk.send($rec, "_type_", ["button"]);smalltalk.send($rec, "_with_", ["Inspect it"]);return smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send(self, "_evalInspectIt", []);})]);})(smalltalk.send(html, "_button", []));
(function($rec){smalltalk.send($rec, "_class_", [unescape("btn-group")]);smalltalk.send($rec, "_data_with_", ["toggle", unescape("buttons-radio")]);return smalltalk.send($rec, "_with_", [(function(){(self['@rubyButton']=(function($rec){smalltalk.send($rec, "_class_", ["btn active"]);smalltalk.send($rec, "_data_with_", ["toggle", unescape("buttons-checkbox")]);smalltalk.send($rec, "_type_", ["button"]);return smalltalk.send($rec, "_with_", ["Ruby"]);})(smalltalk.send(html, "_button", [])));return (self['@smalltalkButton']=(function($rec){smalltalk.send($rec, "_class_", ["btn"]);smalltalk.send($rec, "_data_with_", ["toggle", unescape("buttons-checkbox")]);smalltalk.send($rec, "_type_", ["button"]);return smalltalk.send($rec, "_with_", ["Smalltalk"]);})(smalltalk.send(html, "_button", [])));})]);})(smalltalk.send(html, "_div", []));
return self;},
args: ["html"],
source: unescape('renderButtonsOn%3A%20html%0A%09html%20button%0A%09%09class%3A%20%27btn%20btn-primary%27%3B%0A%09%09type%3A%20%27button%27%3B%0A%09%09with%3A%20%27Do%20it%27%3B%0A%09%09onClick%3A%20%5Bself%20evalDoIt%5D.%0A%09html%20button%0A%09%09class%3A%20%27btn%20btn-primary%27%3B%0A%09%09type%3A%20%27button%27%3B%0A%09%09with%3A%20%27Print%20it%27%3B%0A%09%09onClick%3A%20%5Bself%20evalPrintIt%5D.%0A%09html%20button%0A%09%09class%3A%20%27btn%20btn-primary%27%3B%0A%09%09type%3A%20%27button%27%3B%0A%09%09with%3A%20%27Inspect%20it%27%3B%0A%09%09onClick%3A%20%5Bself%20evalInspectIt%5D.%0A%09html%20div%0A%09%09class%3A%20%27btn-group%27%3B%0A%09%09data%3A%20%27toggle%27%20with%3A%20%27buttons-radio%27%3B%0A%09%09with%3A%20%5B%0A%09%09%09rubyButton%20%3A%3D%20html%20button%0A%09%09%09%09class%3A%20%27btn%20active%27%3B%0A%09%09%09%09data%3A%20%27toggle%27%20with%3A%20%27buttons-checkbox%27%3B%0A%09%09%09%09type%3A%20%27button%27%3B%0A%09%09%09%09with%3A%20%27Ruby%27.%0A%09%09%09smalltalkButton%20%3A%3D%20html%20button%0A%09%09%09%09class%3A%20%27btn%27%3B%0A%09%09%09%09data%3A%20%27toggle%27%20with%3A%20%27buttons-checkbox%27%3B%0A%09%09%09%09type%3A%20%27button%27%3B%0A%09%09%09%09with%3A%20%27Smalltalk%27%5D.'),
messageSends: ["class:", "type:", "with:", "onClick:", "evalDoIt", "button", "evalPrintIt", "evalInspectIt", "data:with:", "div"],
referencedClasses: []
}),
smalltalk.MaglevObjectDropdown);

smalltalk.addMethod(
unescape('_renderFormOn_'),
smalltalk.method({
selector: unescape('renderFormOn%3A'),
category: 'rendering',
fn: function (html){
var self=this;
(function($rec){smalltalk.send($rec, "_style_", [unescape("margin%3A%200px%3B")]);return smalltalk.send($rec, "_with_", [(function(){(self['@editorElement']=smalltalk.send(smalltalk.send(html, "_span", []), "_class_", [unescape("pull-left%20code-area")]));smalltalk.send(smalltalk.send(html, "_div", []), "_style_", [unescape("clear%3A%20both%3B")]);(self['@resultContainer']=(function($rec){smalltalk.send($rec, "_class_", ["alert"]);return smalltalk.send($rec, "_hide", []);})(smalltalk.send(html, "_div", [])));return (function($rec){smalltalk.send($rec, "_class_", [unescape("button-area")]);return smalltalk.send($rec, "_with_", [(function(){return smalltalk.send(self, "_renderButtonsOn_", [html]);})]);})(smalltalk.send(html, "_div", []));})]);})(smalltalk.send(html, "_form", []));
return self;},
args: ["html"],
source: unescape('renderFormOn%3A%20html%0A%09html%20form%0A%09%09style%3A%20%27margin%3A%200px%3B%27%3B%0A%09%09with%3A%20%5B%0A%09%09%09editorElement%20%3A%3D%20html%20span%0A%09%09%09%09class%3A%20%27pull-left%20code-area%27.%0A%09%09%09html%20div%20style%3A%20%27clear%3A%20both%3B%27.%0A%09%09%09resultContainer%20%3A%3D%20html%20div%0A%09%09%09%09class%3A%20%27alert%27%3B%0A%09%09%09%09hide.%0A%09%09%09html%20div%0A%09%09%09%09class%3A%20%27button-area%27%3B%0A%09%09%09%09with%3A%20%5Bself%20renderButtonsOn%3A%20html%5D%5D.'),
messageSends: ["style:", "with:", "class:", "span", "div", "hide", "renderButtonsOn:", "form"],
referencedClasses: []
}),
smalltalk.MaglevObjectDropdown);

smalltalk.addMethod(
unescape('_renderOn_'),
smalltalk.method({
selector: unescape('renderOn%3A'),
category: 'rendering',
fn: function (html){
var self=this;
(self['@container']=(function($rec){smalltalk.send($rec, "_class_", [unescape("dropdown-menu")]);return smalltalk.send($rec, "_with_", [(function(){return (function($rec){smalltalk.send($rec, "_class_", ["textbox"]);smalltalk.send($rec, "_style_", ["padding: 10px"]);return smalltalk.send($rec, "_with_", [(function(){return smalltalk.send(self, "_renderFormOn_", [html]);})]);})(smalltalk.send(html, "_fieldset", []));})]);})(smalltalk.send(html, "_div", [])));
smalltalk.send(self, "_initializeEditor", []);
smalltalk.send(self, "_mouseFix", []);
return self;},
args: ["html"],
source: unescape('renderOn%3A%20html%0A%09container%20%3A%3D%20html%20div%0A%09%09class%3A%20%27dropdown-menu%27%3B%0A%09%09with%3A%20%5Bhtml%20fieldset%0A%09%09%09%09class%3A%20%27textbox%27%3B%0A%09%09%09%09style%3A%20%27padding%3A%2010px%27%3B%0A%09%09%09%09with%3A%20%5Bself%20renderFormOn%3A%20html%5D%5D.%0A%09self%20initializeEditor.%0A%09self%20mouseFix.'),
messageSends: ["class:", "with:", "style:", "renderFormOn:", "fieldset", "div", "initializeEditor", "mouseFix"],
referencedClasses: []
}),
smalltalk.MaglevObjectDropdown);


smalltalk.MaglevObjectDropdown.klass.iVarNames = ['instance'];
smalltalk.addMethod(
unescape('_instance'),
smalltalk.method({
selector: unescape('instance'),
category: 'singleton',
fn: function (){
var self=this;
(($receiver = self['@instance']) == nil || $receiver == undefined) ? (function(){(self['@instance']=smalltalk.send(self, "_new", []));return smalltalk.send(self['@instance'], "_appendToJQuery_", [smalltalk.send(unescape("%23temporary-rendering-area"), "_asJQuery", [])]);})() : $receiver;
return self['@instance'];
return self;},
args: [],
source: unescape('instance%0A%09instance%20ifNil%3A%20%5B%0A%09%09instance%20%3A%3D%20self%20new.%0A%09%09instance%20appendToJQuery%3A%20%27%23temporary-rendering-area%27%20asJQuery%5D.%0A%09%5E%20instance'),
messageSends: ["ifNil:", "new", "appendToJQuery:", "asJQuery"],
referencedClasses: []
}),
smalltalk.MaglevObjectDropdown.klass);


smalltalk.addClass('MaglevObjectInline', smalltalk.Widget, ['object', 'hasDropDown', 'isDraggable', 'depth', 'isShort', 'dragContent', 'dragDummy', 'dragObject'], 'Maglev-Database-Explorer');
smalltalk.addMethod(
unescape('_bindDraggable'),
smalltalk.method({
selector: unescape('bindDraggable'),
category: 'interactions',
fn: function (){
var self=this;
var options=nil;
var cursorPos=nil;
(cursorPos=(function($rec){smalltalk.send($rec, "_basicAt_put_", ["left", (0)]);smalltalk.send($rec, "_basicAt_put_", ["top", (0)]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send((smalltalk.Object || Object), "_new", [])));
(options=(function($rec){smalltalk.send($rec, "_basicAt_put_", ["create", (function(event, ui){return nil;})]);smalltalk.send($rec, "_basicAt_put_", ["cursorPos", cursorPos]);smalltalk.send($rec, "_basicAt_put_", ["start", (function(event, ui){return smalltalk.send(self, "_dragStart_a_", [event, ui]);})]);smalltalk.send($rec, "_basicAt_put_", ["stop", (function(event, ui){return smalltalk.send(self, "_dragStop_a_", [event, ui]);})]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send((smalltalk.Object || Object), "_new", [])));
smalltalk.send(smalltalk.send(self['@dragObject'], "_asJQuery", []), "_draggable_", [options]);
return self;},
args: [],
source: unescape('bindDraggable%0A%09%7Coptions%20cursorPos%7C%0A%09cursorPos%20%3A%3D%20Object%20new%0A%09%09basicAt%3A%20%27left%27%20put%3A%200%3B%0A%09%09basicAt%3A%20%27top%27%20put%3A%200%3B%0A%09%09yourself.%0A%09options%20%3A%3D%20Object%20new%0A%09%09basicAt%3A%20%27create%27%20put%3A%20%5B%3Aevent%20%3Aui%20%7C%20%5D%3B%0A%09%09basicAt%3A%20%27cursorPos%27%20put%3A%20cursorPos%3B%0A%09%09basicAt%3A%20%27start%27%20put%3A%20%5B%3Aevent%20%3Aui%20%7C%20self%20dragStart%3A%20event%20a%3A%20ui%5D%3B%0A%09%09basicAt%3A%20%27stop%27%20put%3A%20%5B%3Aevent%20%3Aui%20%7C%20self%20dragStop%3A%20event%20a%3A%20ui%5D%3B%0A%09%09yourself.%0A%09dragObject%20asJQuery%20draggable%3A%20options.'),
messageSends: ["basicAt:put:", "yourself", "new", "dragStart:a:", "dragStop:a:", "draggable:", "asJQuery"],
referencedClasses: ["Object"]
}),
smalltalk.MaglevObjectInline);

smalltalk.addMethod(
unescape('_depth'),
smalltalk.method({
selector: unescape('depth'),
category: 'accessing',
fn: function (){
var self=this;
(($receiver = self['@depth']) == nil || $receiver == undefined) ? (function(){return (self['@depth']=(1));})() : $receiver;
return self['@depth'];
return self;},
args: [],
source: unescape('depth%0A%09depth%20ifNil%3A%20%5Bdepth%20%3A%3D%201%5D.%0A%09%5E%20depth'),
messageSends: ["ifNil:"],
referencedClasses: []
}),
smalltalk.MaglevObjectInline);

smalltalk.addMethod(
unescape('_depth_'),
smalltalk.method({
selector: unescape('depth%3A'),
category: 'accessing',
fn: function (anInteger){
var self=this;
(self['@depth']=anInteger);
return self;},
args: ["anInteger"],
source: unescape('depth%3A%20anInteger%0A%09depth%20%3A%3D%20anInteger.'),
messageSends: [],
referencedClasses: []
}),
smalltalk.MaglevObjectInline);

smalltalk.addMethod(
unescape('_dragStart_a_'),
smalltalk.method({
selector: unescape('dragStart%3Aa%3A'),
category: 'interactions',
fn: function (event, ui){
var self=this;
smalltalk.send(self['@dragContent'], "_hide", []);
smalltalk.send(self['@dragDummy'], "_show", []);
return self;},
args: ["event", "ui"],
source: unescape('dragStart%3A%20event%20a%3A%20ui%0A%09dragContent%20hide.%0A%09dragDummy%20show.'),
messageSends: ["hide", "show"],
referencedClasses: []
}),
smalltalk.MaglevObjectInline);

smalltalk.addMethod(
unescape('_dragStop_a_'),
smalltalk.method({
selector: unescape('dragStop%3Aa%3A'),
category: 'interactions',
fn: function (event, ui){
var self=this;
var position=nil;
var window=nil;
(position=smalltalk.send(smalltalk.send(self['@dragObject'], "_asJQuery", []), "_offset", []));
(window=smalltalk.send(smalltalk.send((smalltalk.Maglev || Maglev), "_instance", []), "_showReloadObjectWindow_", [smalltalk.send(self['@object'], "_oop", [])]));
smalltalk.send(window, "_left_", [((($receiver = smalltalk.send(position, "_left", [])).klass === smalltalk.Number) ? $receiver -((($receiver = smalltalk.send(self['@dragObject'], "_width", [])).klass === smalltalk.Number) ? $receiver /(2) : smalltalk.send($receiver, "__slash", [(2)])) : smalltalk.send($receiver, "__minus", [((($receiver = smalltalk.send(self['@dragObject'], "_width", [])).klass === smalltalk.Number) ? $receiver /(2) : smalltalk.send($receiver, "__slash", [(2)]))]))]);
smalltalk.send(window, "_top_", [((($receiver = smalltalk.send(position, "_top", [])).klass === smalltalk.Number) ? $receiver -((($receiver = smalltalk.send(self['@dragObject'], "_height", [])).klass === smalltalk.Number) ? $receiver /(2) : smalltalk.send($receiver, "__slash", [(2)])) : smalltalk.send($receiver, "__minus", [((($receiver = smalltalk.send(self['@dragObject'], "_height", [])).klass === smalltalk.Number) ? $receiver /(2) : smalltalk.send($receiver, "__slash", [(2)]))]))]);
smalltalk.send(self['@dragObject'], "_left_", [(0)]);
smalltalk.send(self['@dragObject'], "_top_", [(0)]);
smalltalk.send(self['@dragDummy'], "_hide", []);
smalltalk.send(self['@dragContent'], "_show", []);
return self;},
args: ["event", "ui"],
source: unescape('dragStop%3A%20event%20a%3A%20ui%0A%09%7Cposition%20window%7C%0A%09position%20%3A%3D%20dragObject%20asJQuery%20offset.%0A%09window%20%3A%3D%20Maglev%20instance%20showReloadObjectWindow%3A%20object%20oop.%0A%09window%20left%3A%20position%20left%20-%20%28dragObject%20width%20/%202%29.%0A%09window%20top%3A%20position%20top%20-%20%28dragObject%20height%20/%202%29.%0A%09dragObject%20left%3A%200.%0A%09dragObject%20top%3A%200.%0A%09dragDummy%20hide.%0A%09dragContent%20show.'),
messageSends: ["offset", "asJQuery", "showReloadObjectWindow:", "instance", "oop", "left:", unescape("-"), "left", unescape("/"), "width", "top:", "top", "height", "hide", "show"],
referencedClasses: ["Maglev"]
}),
smalltalk.MaglevObjectInline);

smalltalk.addMethod(
unescape('_hasDropDown'),
smalltalk.method({
selector: unescape('hasDropDown'),
category: 'accessing',
fn: function (){
var self=this;
(($receiver = self['@hasDropDown']) == nil || $receiver == undefined) ? (function(){return (self['@hasDropDown']=smalltalk.send(self, "_hasDropDownDefault", []));})() : $receiver;
return self['@hasDropDown'];
return self;},
args: [],
source: unescape('hasDropDown%0A%09hasDropDown%20ifNil%3A%20%5BhasDropDown%20%3A%3D%20self%20hasDropDownDefault%5D.%0A%09%5E%20hasDropDown'),
messageSends: ["ifNil:", "hasDropDownDefault"],
referencedClasses: []
}),
smalltalk.MaglevObjectInline);

smalltalk.addMethod(
unescape('_hasDropDown_'),
smalltalk.method({
selector: unescape('hasDropDown%3A'),
category: 'accessing',
fn: function (aBoolean){
var self=this;
(self['@hasDropDown']=aBoolean);
return self;},
args: ["aBoolean"],
source: unescape('hasDropDown%3A%20aBoolean%0A%09hasDropDown%20%3A%3D%20aBoolean.'),
messageSends: [],
referencedClasses: []
}),
smalltalk.MaglevObjectInline);

smalltalk.addMethod(
unescape('_hasDropDownDefault'),
smalltalk.method({
selector: unescape('hasDropDownDefault'),
category: 'constants',
fn: function (){
var self=this;
return true;
return self;},
args: [],
source: unescape('hasDropDownDefault%0A%09%5E%20true'),
messageSends: [],
referencedClasses: []
}),
smalltalk.MaglevObjectInline);

smalltalk.addMethod(
unescape('_isDraggable'),
smalltalk.method({
selector: unescape('isDraggable'),
category: 'accessing',
fn: function (){
var self=this;
(($receiver = self['@isDraggable']) == nil || $receiver == undefined) ? (function(){return (self['@isDraggable']=smalltalk.send(self, "_isDraggableDefault", []));})() : $receiver;
return self['@isDraggable'];
return self;},
args: [],
source: unescape('isDraggable%0A%09isDraggable%20ifNil%3A%20%5BisDraggable%20%3A%3D%20self%20isDraggableDefault%5D.%0A%09%5E%20isDraggable'),
messageSends: ["ifNil:", "isDraggableDefault"],
referencedClasses: []
}),
smalltalk.MaglevObjectInline);

smalltalk.addMethod(
unescape('_isDraggable_'),
smalltalk.method({
selector: unescape('isDraggable%3A'),
category: 'accessing',
fn: function (aBoolean){
var self=this;
(self['@isDraggable']=aBoolean);
return self;},
args: ["aBoolean"],
source: unescape('isDraggable%3A%20aBoolean%0A%09isDraggable%20%3A%3D%20aBoolean.'),
messageSends: [],
referencedClasses: []
}),
smalltalk.MaglevObjectInline);

smalltalk.addMethod(
unescape('_isDraggableDefault'),
smalltalk.method({
selector: unescape('isDraggableDefault'),
category: 'constants',
fn: function (){
var self=this;
return true;
return self;},
args: [],
source: unescape('isDraggableDefault%0A%09%5E%20true'),
messageSends: [],
referencedClasses: []
}),
smalltalk.MaglevObjectInline);

smalltalk.addMethod(
unescape('_isShort'),
smalltalk.method({
selector: unescape('isShort'),
category: 'accessing',
fn: function (){
var self=this;
(($receiver = self['@isShort']) == nil || $receiver == undefined) ? (function(){return (self['@isShort']=false);})() : $receiver;
return self['@isShort'];
return self;},
args: [],
source: unescape('isShort%0A%09isShort%20ifNil%3A%20%5BisShort%20%3A%3D%20false%5D.%0A%09%5E%20isShort'),
messageSends: ["ifNil:"],
referencedClasses: []
}),
smalltalk.MaglevObjectInline);

smalltalk.addMethod(
unescape('_isShort_'),
smalltalk.method({
selector: unescape('isShort%3A'),
category: 'accessing',
fn: function (aBoolean){
var self=this;
(self['@isShort']=aBoolean);
return self;},
args: ["aBoolean"],
source: unescape('isShort%3A%20aBoolean%0A%09isShort%20%3A%3D%20aBoolean.'),
messageSends: [],
referencedClasses: []
}),
smalltalk.MaglevObjectInline);

smalltalk.addMethod(
unescape('_maxDepth'),
smalltalk.method({
selector: unescape('maxDepth'),
category: 'constants',
fn: function (){
var self=this;
return (1);
return self;},
args: [],
source: unescape('maxDepth%0A%09%5E%201'),
messageSends: [],
referencedClasses: []
}),
smalltalk.MaglevObjectInline);

smalltalk.addMethod(
unescape('_maxInspection'),
smalltalk.method({
selector: unescape('maxInspection'),
category: 'constants',
fn: function (){
var self=this;
return (15);
return self;},
args: [],
source: unescape('maxInspection%0A%09%5E%2015'),
messageSends: [],
referencedClasses: []
}),
smalltalk.MaglevObjectInline);

smalltalk.addMethod(
unescape('_object'),
smalltalk.method({
selector: unescape('object'),
category: 'accessing',
fn: function (){
var self=this;
return self['@object'];
return self;},
args: [],
source: unescape('object%0A%09%5E%20object'),
messageSends: [],
referencedClasses: []
}),
smalltalk.MaglevObjectInline);

smalltalk.addMethod(
unescape('_object_'),
smalltalk.method({
selector: unescape('object%3A'),
category: 'accessing',
fn: function (anObject){
var self=this;
(self['@object']=anObject);
return self;},
args: ["anObject"],
source: unescape('object%3A%20anObject%0A%09object%20%3A%3D%20anObject.'),
messageSends: [],
referencedClasses: []
}),
smalltalk.MaglevObjectInline);

smalltalk.addMethod(
unescape('_renderDraggableObjectOn_'),
smalltalk.method({
selector: unescape('renderDraggableObjectOn%3A'),
category: 'rendering',
fn: function (html){
var self=this;
(function($rec){smalltalk.send($rec, "_class_", [unescape("draggable-new-object-container")]);return smalltalk.send($rec, "_with_", [(function(){return (self['@dragObject']=(function($rec){smalltalk.send($rec, "_class_", [unescape("ui-widget-content%20ui-draggable%20draggable-new-object")]);return smalltalk.send($rec, "_with_", [(function(){(self['@dragDummy']=(function($rec){smalltalk.send($rec, "_class_", [unescape("object-drag-dummy")]);smalltalk.send($rec, "_style_", [unescape("display%3A%20none%3B")]);smalltalk.send($rec, "_with_", [smalltalk.send((smalltalk.MaglevIcon || MaglevIcon), "_move", [])]);return smalltalk.send($rec, "_with_", [(function(){return smalltalk.send(self, "_renderObjectContainerOn_", [html]);})]);})(smalltalk.send(html, "_div", [])));return (self['@dragContent']=(function($rec){smalltalk.send($rec, "_class_", [unescape("object-iv-name")]);return smalltalk.send($rec, "_with_", [(function(){return smalltalk.send(self, "_renderObjectContainerOn_", [html]);})]);})(smalltalk.send(html, "_div", [])));})]);})(smalltalk.send(html, "_div", [])));})]);})(smalltalk.send(html, "_div", []));
smalltalk.send(self, "_bindDraggable", []);
return self;},
args: ["html"],
source: unescape('renderDraggableObjectOn%3A%20html%0A%09html%20div%0A%09%09class%3A%20%27draggable-new-object-container%27%3B%0A%09%09with%3A%20%5B%0A%09%09%09dragObject%20%3A%3D%20html%20div%0A%09%09%09%09class%3A%20%27ui-widget-content%20ui-draggable%20draggable-new-object%27%3B%0A%09%09%09%09with%3A%20%5B%0A%09%09%09%09%09dragDummy%20%3A%3D%20html%20div%0A%09%09%09%09%09%09class%3A%20%27object-drag-dummy%27%3B%0A%09%09%09%09%09%09style%3A%20%27display%3A%20none%3B%27%3B%0A%09%09%09%09%09%09with%3A%20MaglevIcon%20move%3B%0A%09%09%09%09%09%09with%3A%20%5Bself%20renderObjectContainerOn%3A%20html%5D.%0A%09%09%09%09%09dragContent%20%3A%3D%20html%20div%0A%09%09%09%09%09%09class%3A%20%27object-iv-name%27%3B%0A%09%09%09%09%09%09with%3A%20%5Bself%20renderObjectContainerOn%3A%20html%5D%5D%5D.%0A%09self%20bindDraggable.'),
messageSends: ["class:", "with:", "style:", "move", "renderObjectContainerOn:", "div", "bindDraggable"],
referencedClasses: ["MaglevIcon"]
}),
smalltalk.MaglevObjectInline);

smalltalk.addMethod(
unescape('_renderLoadedObjectOn_'),
smalltalk.method({
selector: unescape('renderLoadedObjectOn%3A'),
category: 'rendering',
fn: function (html){
var self=this;
var text=nil;
(text=smalltalk.send(smalltalk.send(self['@object'], "_inspection", []), "_copyFrom_to_", [(1), smalltalk.send(self, "_maxInspection", [])]));
((($receiver = ((($receiver = smalltalk.send(text, "_size", [])).klass === smalltalk.Number) ? $receiver <smalltalk.send(smalltalk.send(self['@object'], "_inspection", []), "_size", []) : smalltalk.send($receiver, "__lt", [smalltalk.send(smalltalk.send(self['@object'], "_inspection", []), "_size", [])]))).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (text=smalltalk.send(text, "__comma", ["..."]));})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return (text=smalltalk.send(text, "__comma", ["..."]));})]));
smalltalk.send(html, "_with_", [text]);
return self;},
args: ["html"],
source: unescape('renderLoadedObjectOn%3A%20html%0A%09%7Ctext%7C%0A%09text%20%3A%3D%20object%20inspection%20copyFrom%3A%201%20to%3A%20self%20maxInspection.%0A%09text%20size%20%3C%20object%20inspection%20size%20%0A%09%09ifTrue%3A%20%5Btext%20%3A%3D%20text%2C%20%27...%27%5D.%0A%09html%20with%3A%20text.'),
messageSends: ["copyFrom:to:", "inspection", "maxInspection", "ifTrue:", unescape("%3C"), "size", unescape("%2C"), "with:"],
referencedClasses: []
}),
smalltalk.MaglevObjectInline);

smalltalk.addMethod(
unescape('_renderObjectActionsOn_'),
smalltalk.method({
selector: unescape('renderObjectActionsOn%3A'),
category: 'rendering',
fn: function (html){
var self=this;
(function($rec){smalltalk.send($rec, "_with_", [smalltalk.send((smalltalk.MaglevIcon || MaglevIcon), "_search", [])]);return smalltalk.send($rec, "_with_", [smalltalk.send((smalltalk.MaglevIcon || MaglevIcon), "_pencil", [])]);})(html);
return self;},
args: ["html"],
source: unescape('renderObjectActionsOn%3A%20html%0A%09html%0A%09%09with%3A%20MaglevIcon%20search%3B%0A%09%09with%3A%20MaglevIcon%20pencil.'),
messageSends: ["with:", "search", "pencil"],
referencedClasses: ["MaglevIcon"]
}),
smalltalk.MaglevObjectInline);

smalltalk.addMethod(
unescape('_renderObjectContainerOn_'),
smalltalk.method({
selector: unescape('renderObjectContainerOn%3A'),
category: 'rendering',
fn: function (html){
var self=this;
(function($rec){smalltalk.send($rec, "_class_", [unescape("object-inline-view-view")]);return smalltalk.send($rec, "_with_", [(function(){smalltalk.send(self, "_renderObjectActionsOn_", [html]);return (function($rec){smalltalk.send($rec, "_class_", [unescape("object-inline-typed-view")]);return smalltalk.send($rec, "_with_", [(function(){return ((($receiver = smalltalk.send(self, "_hasDropDown", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self, "_renderObjectWithDropDownOn_", [html]);})() : (function(){return smalltalk.send(self, "_renderObjectOn_", [html]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(self, "_renderObjectWithDropDownOn_", [html]);}), (function(){return smalltalk.send(self, "_renderObjectOn_", [html]);})]));})]);})(smalltalk.send(html, "_span", []));})]);})(smalltalk.send(html, "_span", []));
return self;},
args: ["html"],
source: unescape('renderObjectContainerOn%3A%20html%0A%09html%20span%0A%09%09class%3A%20%27object-inline-view-view%27%3B%0A%09%09with%3A%20%5B%0A%09%09%09self%20renderObjectActionsOn%3A%20html.%0A%09%09%09html%20span%0A%09%09%09%09class%3A%20%27object-inline-typed-view%27%3B%0A%09%09%09%09with%3A%20%5B%0A%09%09%09%09%09self%20hasDropDown%0A%09%09%09%09%09%09ifTrue%3A%20%5Bself%20renderObjectWithDropDownOn%3A%20html%5D%0A%09%09%09%09%09%09ifFalse%3A%20%5Bself%20renderObjectOn%3A%20html%5D%5D%5D.'),
messageSends: ["class:", "with:", "renderObjectActionsOn:", "ifTrue:ifFalse:", "hasDropDown", "renderObjectWithDropDownOn:", "renderObjectOn:", "span"],
referencedClasses: []
}),
smalltalk.MaglevObjectInline);

smalltalk.addMethod(
unescape('_renderObjectOn_'),
smalltalk.method({
selector: unescape('renderObjectOn%3A'),
category: 'rendering',
fn: function (html){
var self=this;
((($receiver = smalltalk.send(self['@object'], "_isLoaded", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self, "_renderLoadedObjectOn_", [html]);})() : (function(){return smalltalk.send(self, "_renderUnloadedObjectOn_", [html]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(self, "_renderLoadedObjectOn_", [html]);}), (function(){return smalltalk.send(self, "_renderUnloadedObjectOn_", [html]);})]));
return self;},
args: ["html"],
source: unescape('renderObjectOn%3A%20html%0A%09object%20isLoaded%0A%09%09ifTrue%3A%20%5Bself%20renderLoadedObjectOn%3A%20html%5D%0A%09%09ifFalse%3A%20%5Bself%20renderUnloadedObjectOn%3A%20html%5D.'),
messageSends: ["ifTrue:ifFalse:", "isLoaded", "renderLoadedObjectOn:", "renderUnloadedObjectOn:"],
referencedClasses: []
}),
smalltalk.MaglevObjectInline);

smalltalk.addMethod(
unescape('_renderObjectWithDropDownOn_'),
smalltalk.method({
selector: unescape('renderObjectWithDropDownOn%3A'),
category: 'rendering',
fn: function (html){
var self=this;
var dropdownContainer=nil;
(dropdownContainer=(function($rec){smalltalk.send($rec, "_class_", ["dropdown"]);return smalltalk.send($rec, "_with_", [(function(){return (function($rec){smalltalk.send($rec, "_class_", [unescape("dropdown-toggle%20btn%20object-dropdown-toggle")]);smalltalk.send($rec, "_data_with_", ["toggle", "dropdown"]);smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send(self, "_showDropdownFor_", [dropdownContainer]);})]);return smalltalk.send($rec, "_with_", [(function(){smalltalk.send(self, "_renderObjectOn_", [html]);return smalltalk.send(smalltalk.send(html, "_b", []), "_class_", ["caret"]);})]);})(smalltalk.send(html, "_a", []));})]);})(smalltalk.send(html, "_span", [])));
return self;},
args: ["html"],
source: unescape('renderObjectWithDropDownOn%3A%20html%0A%09%7CdropdownContainer%7C%0A%09dropdownContainer%20%3A%3D%20html%20span%0A%09%09class%3A%20%27dropdown%27%3B%0A%09%09with%3A%20%5B%0A%09%09%09html%20a%0A%09%09%09%09class%3A%20%27dropdown-toggle%20btn%20object-dropdown-toggle%27%3B%0A%09%09%09%09data%3A%20%27toggle%27%20with%3A%20%27dropdown%27%3B%0A%09%09%09%09onClick%3A%20%5Bself%20showDropdownFor%3A%20dropdownContainer%5D%3B%0A%09%09%09%09with%3A%20%5B%0A%09%09%09%09%09self%20renderObjectOn%3A%20html.%0A%09%09%09%09%09html%20b%20class%3A%20%27caret%27%5D%5D.'),
messageSends: ["class:", "with:", "data:with:", "onClick:", "showDropdownFor:", "renderObjectOn:", "b", "a", "span"],
referencedClasses: []
}),
smalltalk.MaglevObjectInline);

smalltalk.addMethod(
unescape('_renderOn_'),
smalltalk.method({
selector: unescape('renderOn%3A'),
category: 'rendering',
fn: function (html){
var self=this;
((($receiver = smalltalk.send(self, "_isDraggable", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self, "_renderDraggableObjectOn_", [html]);})() : (function(){return smalltalk.send(self, "_renderObjectContainerOn_", [html]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(self, "_renderDraggableObjectOn_", [html]);}), (function(){return smalltalk.send(self, "_renderObjectContainerOn_", [html]);})]));
return self;},
args: ["html"],
source: unescape('renderOn%3A%20html%0A%09self%20isDraggable%0A%09%09ifTrue%3A%20%5Bself%20renderDraggableObjectOn%3A%20html%5D%0A%09%09ifFalse%3A%20%5Bself%20renderObjectContainerOn%3A%20html%5D.'),
messageSends: ["ifTrue:ifFalse:", "isDraggable", "renderDraggableObjectOn:", "renderObjectContainerOn:"],
referencedClasses: []
}),
smalltalk.MaglevObjectInline);

smalltalk.addMethod(
unescape('_renderText_withDropDownOn_'),
smalltalk.method({
selector: unescape('renderText%3AwithDropDownOn%3A'),
category: 'rendering',
fn: function (text, html){
var self=this;
var dropdownContainer=nil;
(dropdownContainer=(function($rec){smalltalk.send($rec, "_class_", ["dropdown"]);return smalltalk.send($rec, "_with_", [(function(){return (function($rec){smalltalk.send($rec, "_class_", [unescape("dropdown-toggle%20btn%20object-dropdown-toggle")]);smalltalk.send($rec, "_data_with_", ["toggle", "dropdown"]);smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send(self, "_showDropdownFor_", [dropdownContainer]);})]);return smalltalk.send($rec, "_with_", [(function(){smalltalk.send(html, "_with_", [text]);return smalltalk.send(smalltalk.send(html, "_b", []), "_class_", ["caret"]);})]);})(smalltalk.send(html, "_a", []));})]);})(smalltalk.send(html, "_span", [])));
return self;},
args: ["text", "html"],
source: unescape('renderText%3A%20text%20withDropDownOn%3A%20html%0A%09%7CdropdownContainer%7C%0A%09dropdownContainer%20%3A%3D%20html%20span%0A%09%09class%3A%20%27dropdown%27%3B%0A%09%09with%3A%20%5B%0A%09%09%09html%20a%0A%09%09%09%09class%3A%20%27dropdown-toggle%20btn%20object-dropdown-toggle%27%3B%0A%09%09%09%09data%3A%20%27toggle%27%20with%3A%20%27dropdown%27%3B%0A%09%09%09%09onClick%3A%20%5Bself%20showDropdownFor%3A%20dropdownContainer%5D%3B%0A%09%09%09%09with%3A%20%5B%0A%09%09%09%09%09html%20with%3A%20text.%0A%09%09%09%09%09html%20b%20class%3A%20%27caret%27%5D%5D.'),
messageSends: ["class:", "with:", "data:with:", "onClick:", "showDropdownFor:", "b", "a", "span"],
referencedClasses: []
}),
smalltalk.MaglevObjectInline);

smalltalk.addMethod(
unescape('_renderUnloadedObjectOn_'),
smalltalk.method({
selector: unescape('renderUnloadedObjectOn%3A'),
category: 'rendering',
fn: function (html){
var self=this;
var text=nil;
(text=smalltalk.send(smalltalk.send(self['@object'], "_inspection", []), "_copyFrom_to_", [(1), smalltalk.send(self, "_maxInspection", [])]));
((($receiver = ((($receiver = smalltalk.send(text, "_size", [])).klass === smalltalk.Number) ? $receiver <smalltalk.send(smalltalk.send(self['@object'], "_inspection", []), "_size", []) : smalltalk.send($receiver, "__lt", [smalltalk.send(smalltalk.send(self['@object'], "_inspection", []), "_size", [])]))).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (text=smalltalk.send(text, "__comma", ["..."]));})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return (text=smalltalk.send(text, "__comma", ["..."]));})]));
smalltalk.send(html, "_with_", [text]);
return self;},
args: ["html"],
source: unescape('renderUnloadedObjectOn%3A%20html%0A%09%7Ctext%7C%0A%09text%20%3A%3D%20object%20inspection%20copyFrom%3A%201%20to%3A%20self%20maxInspection.%0A%09text%20size%20%3C%20object%20inspection%20size%20%0A%09%09ifTrue%3A%20%5Btext%20%3A%3D%20text%2C%20%27...%27%5D.%0A%09html%20with%3A%20text.'),
messageSends: ["copyFrom:to:", "inspection", "maxInspection", "ifTrue:", unescape("%3C"), "size", unescape("%2C"), "with:"],
referencedClasses: []
}),
smalltalk.MaglevObjectInline);

smalltalk.addMethod(
unescape('_showDropdownFor_'),
smalltalk.method({
selector: unescape('showDropdownFor%3A'),
category: 'interactions',
fn: function (dropdownContainer){
var self=this;
smalltalk.send(smalltalk.send((smalltalk.MaglevObjectDropdown || MaglevObjectDropdown), "_instance", []), "_appendToInlineObject_for_", [self, dropdownContainer]);
return self;},
args: ["dropdownContainer"],
source: unescape('showDropdownFor%3A%20dropdownContainer%0A%09MaglevObjectDropdown%20instance%20appendToInlineObject%3A%20self%20for%3A%20dropdownContainer.'),
messageSends: ["appendToInlineObject:for:", "instance"],
referencedClasses: ["MaglevObjectDropdown"]
}),
smalltalk.MaglevObjectInline);


smalltalk.addMethod(
unescape('_newWithDepth_'),
smalltalk.method({
selector: unescape('newWithDepth%3A'),
category: 'instance creation',
fn: function (anInteger){
var self=this;
return (function($rec){smalltalk.send($rec, "_depth_", [anInteger]);smalltalk.send($rec, "_initialize", []);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(self, "_basicNew", []));
return self;},
args: ["anInteger"],
source: unescape('newWithDepth%3A%20anInteger%0A%09%5E%20self%20basicNew%0A%09%09depth%3A%20anInteger%3B%0A%09%09initialize%3B%0A%09%09yourself'),
messageSends: ["depth:", "initialize", "yourself", "basicNew"],
referencedClasses: []
}),
smalltalk.MaglevObjectInline.klass);


smalltalk.addClass('MaglevArrayInline', smalltalk.MaglevObjectInline, [], 'Maglev-Database-Explorer');
smalltalk.addMethod(
unescape('_maxDepth'),
smalltalk.method({
selector: unescape('maxDepth'),
category: 'constants',
fn: function (){
var self=this;
return (2);
return self;},
args: [],
source: unescape('maxDepth%0A%09%5E%202'),
messageSends: [],
referencedClasses: []
}),
smalltalk.MaglevArrayInline);

smalltalk.addMethod(
unescape('_maxElements'),
smalltalk.method({
selector: unescape('maxElements'),
category: 'constants',
fn: function (){
var self=this;
return (3);
return self;},
args: [],
source: unescape('maxElements%0A%09%5E%203'),
messageSends: [],
referencedClasses: []
}),
smalltalk.MaglevArrayInline);

smalltalk.addMethod(
unescape('_renderLoadedObjectOn_'),
smalltalk.method({
selector: unescape('renderLoadedObjectOn%3A'),
category: 'rendering',
fn: function (html){
var self=this;
var showElements=nil;
var maxElements=nil;
(maxElements=smalltalk.send(self, "_maxElements", []));
(showElements=smalltalk.send(maxElements, "_min_", [smalltalk.send(smalltalk.send(self, "_object", []), "_elementsSize", [])]));
smalltalk.send(self, "_renderText_withDropDownOn_", [unescape("%5B"), html]);
smalltalk.send(html, "_with_", [" "]);
((($receiver = smalltalk.send(self, "_isShort", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(html, "_with_", [" ... "]);})() : (function(){smalltalk.send(smalltalk.send((1), "_to_", [showElements]), "_do_", [(function(idx){smalltalk.send(html, "_with_", [smalltalk.send(smalltalk.send(smalltalk.send(self, "_object", []), "_at_", [idx]), "_inlineViewComponentWithDepth_", [((($receiver = smalltalk.send(self, "_depth", [])).klass === smalltalk.Number) ? $receiver -(1) : smalltalk.send($receiver, "__minus", [(1)]))])]);return ((($receiver = smalltalk.send(((($receiver = idx).klass === smalltalk.Number) ? $receiver <showElements : smalltalk.send($receiver, "__lt", [showElements])), "_or_", [(function(){return ((($receiver = smalltalk.send(smalltalk.send(self, "_object", []), "_elementsSize", [])).klass === smalltalk.Number) ? $receiver >maxElements : smalltalk.send($receiver, "__gt", [maxElements]));})])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(html, "_with_", [unescape("%20%2C%20")]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(html, "_with_", [unescape("%20%2C%20")]);})]));})]);return ((($receiver = ((($receiver = smalltalk.send(smalltalk.send(self, "_object", []), "_elementsSize", [])).klass === smalltalk.Number) ? $receiver >maxElements : smalltalk.send($receiver, "__gt", [maxElements]))).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(html, "_with_", [" ... "]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(html, "_with_", [" ... "]);})]));})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(html, "_with_", [" ... "]);}), (function(){smalltalk.send(smalltalk.send((1), "_to_", [showElements]), "_do_", [(function(idx){smalltalk.send(html, "_with_", [smalltalk.send(smalltalk.send(smalltalk.send(self, "_object", []), "_at_", [idx]), "_inlineViewComponentWithDepth_", [((($receiver = smalltalk.send(self, "_depth", [])).klass === smalltalk.Number) ? $receiver -(1) : smalltalk.send($receiver, "__minus", [(1)]))])]);return ((($receiver = smalltalk.send(((($receiver = idx).klass === smalltalk.Number) ? $receiver <showElements : smalltalk.send($receiver, "__lt", [showElements])), "_or_", [(function(){return ((($receiver = smalltalk.send(smalltalk.send(self, "_object", []), "_elementsSize", [])).klass === smalltalk.Number) ? $receiver >maxElements : smalltalk.send($receiver, "__gt", [maxElements]));})])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(html, "_with_", [unescape("%20%2C%20")]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(html, "_with_", [unescape("%20%2C%20")]);})]));})]);return ((($receiver = ((($receiver = smalltalk.send(smalltalk.send(self, "_object", []), "_elementsSize", [])).klass === smalltalk.Number) ? $receiver >maxElements : smalltalk.send($receiver, "__gt", [maxElements]))).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(html, "_with_", [" ... "]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(html, "_with_", [" ... "]);})]));})]));
smalltalk.send(html, "_with_", [" "]);
smalltalk.send(self, "_renderText_withDropDownOn_", [unescape("%5D"), html]);
return self;},
args: ["html"],
source: unescape('renderLoadedObjectOn%3A%20html%0A%09%7CshowElements%20maxElements%7C%0A%09maxElements%20%3A%3D%20self%20maxElements.%0A%09showElements%20%3A%3D%20maxElements%20min%3A%20self%20object%20elementsSize.%0A%09self%20renderText%3A%20%27%5B%27%20withDropDownOn%3A%20html.%0A%09html%20with%3A%20%27%20%27.%0A%09self%20isShort%0A%09%09ifTrue%3A%20%5Bhtml%20with%3A%20%27%20...%20%27%5D%0A%09%09ifFalse%3A%20%5B%0A%09%09%09%281%20to%3A%20showElements%29%20do%3A%20%5B%3Aidx%20%7C%0A%09%09%09%09html%20with%3A%20%28%28self%20object%20at%3A%20idx%29%20inlineViewComponentWithDepth%3A%20self%20depth%20-%201%29.%0A%09%09%09%09%28idx%20%3C%20showElements%20or%3A%20%5Bself%20object%20elementsSize%20%3E%20maxElements%5D%29%0A%09%09%09%09%09ifTrue%3A%20%5Bhtml%20with%3A%20%27%20%2C%20%27%5D%5D.%0A%09%09%09self%20object%20elementsSize%20%3E%20maxElements%0A%09%09%09%09ifTrue%3A%20%5Bhtml%20with%3A%20%27%20...%20%27%5D%09%5D.%0A%09html%20with%3A%20%27%20%27.%0A%09self%20renderText%3A%20%27%5D%27%20withDropDownOn%3A%20html.'),
messageSends: ["maxElements", "min:", "elementsSize", "object", "renderText:withDropDownOn:", "with:", "ifTrue:ifFalse:", "isShort", "do:", "to:", "inlineViewComponentWithDepth:", "at:", unescape("-"), "depth", "ifTrue:", "or:", unescape("%3C"), unescape("%3E")],
referencedClasses: []
}),
smalltalk.MaglevArrayInline);

smalltalk.addMethod(
unescape('_renderObjectWithDropDownOn_'),
smalltalk.method({
selector: unescape('renderObjectWithDropDownOn%3A'),
category: 'rendering',
fn: function (html){
var self=this;
smalltalk.send(self, "_renderObjectOn_", [html]);
return self;},
args: ["html"],
source: unescape('renderObjectWithDropDownOn%3A%20html%0A%09%22Do%20not%20render%20a%20drop%20down%20menu%20around%20the%20whole%20object.%22%0A%09self%20renderObjectOn%3A%20html.'),
messageSends: ["renderObjectOn:"],
referencedClasses: []
}),
smalltalk.MaglevArrayInline);

smalltalk.addMethod(
unescape('_renderUnloadedObjectOn_'),
smalltalk.method({
selector: unescape('renderUnloadedObjectOn%3A'),
category: 'rendering',
fn: function (html){
var self=this;
smalltalk.send(self, "_renderText_withDropDownOn_", [unescape("%5B"), html]);
smalltalk.send(html, "_with_", ["..."]);
smalltalk.send(self, "_renderText_withDropDownOn_", [unescape("%5D"), html]);
return self;},
args: ["html"],
source: unescape('renderUnloadedObjectOn%3A%20html%0A%09self%20renderText%3A%20%27%5B%27%20withDropDownOn%3A%20html.%0A%09html%20with%3A%20%27...%27.%0A%09self%20renderText%3A%20%27%5D%27%20withDropDownOn%3A%20html.'),
messageSends: ["renderText:withDropDownOn:", "with:"],
referencedClasses: []
}),
smalltalk.MaglevArrayInline);



smalltalk.addClass('MaglevFixnumInline', smalltalk.MaglevObjectInline, [], 'Maglev-Database-Explorer');
smalltalk.addMethod(
unescape('_hasDropDownDefault'),
smalltalk.method({
selector: unescape('hasDropDownDefault'),
category: 'constants',
fn: function (){
var self=this;
return false;
return self;},
args: [],
source: unescape('hasDropDownDefault%0A%09%5E%20false'),
messageSends: [],
referencedClasses: []
}),
smalltalk.MaglevFixnumInline);

smalltalk.addMethod(
unescape('_isDraggableDefault'),
smalltalk.method({
selector: unescape('isDraggableDefault'),
category: 'constants',
fn: function (){
var self=this;
return false;
return self;},
args: [],
source: unescape('isDraggableDefault%0A%09%5E%20false'),
messageSends: [],
referencedClasses: []
}),
smalltalk.MaglevFixnumInline);



smalltalk.addClass('MaglevFloatInline', smalltalk.MaglevObjectInline, [], 'Maglev-Database-Explorer');
smalltalk.addMethod(
unescape('_hasDropDownDefault'),
smalltalk.method({
selector: unescape('hasDropDownDefault'),
category: 'constants',
fn: function (){
var self=this;
return false;
return self;},
args: [],
source: unescape('hasDropDownDefault%0A%09%5E%20false'),
messageSends: [],
referencedClasses: []
}),
smalltalk.MaglevFloatInline);

smalltalk.addMethod(
unescape('_isDraggableDefault'),
smalltalk.method({
selector: unescape('isDraggableDefault'),
category: 'constants',
fn: function (){
var self=this;
return false;
return self;},
args: [],
source: unescape('isDraggableDefault%0A%09%5E%20false'),
messageSends: [],
referencedClasses: []
}),
smalltalk.MaglevFloatInline);



smalltalk.addClass('MaglevHashInline', smalltalk.MaglevObjectInline, [], 'Maglev-Database-Explorer');
smalltalk.addMethod(
unescape('_isDraggableDefault'),
smalltalk.method({
selector: unescape('isDraggableDefault'),
category: 'rendering',
fn: function (){
var self=this;
return false;
return self;},
args: [],
source: unescape('isDraggableDefault%0A%09%5E%20false'),
messageSends: [],
referencedClasses: []
}),
smalltalk.MaglevHashInline);

smalltalk.addMethod(
unescape('_maxDepth'),
smalltalk.method({
selector: unescape('maxDepth'),
category: 'constants',
fn: function (){
var self=this;
return (2);
return self;},
args: [],
source: unescape('maxDepth%0A%09%5E%202'),
messageSends: [],
referencedClasses: []
}),
smalltalk.MaglevHashInline);

smalltalk.addMethod(
unescape('_maxElements'),
smalltalk.method({
selector: unescape('maxElements'),
category: 'constants',
fn: function (){
var self=this;
return (3);
return self;},
args: [],
source: unescape('maxElements%0A%09%5E%203'),
messageSends: [],
referencedClasses: []
}),
smalltalk.MaglevHashInline);

smalltalk.addMethod(
unescape('_renderLoadedObjectOn_'),
smalltalk.method({
selector: unescape('renderLoadedObjectOn%3A'),
category: 'rendering',
fn: function (html){
var self=this;
var showElements=nil;
var maxElements=nil;
(maxElements=smalltalk.send(self, "_maxElements", []));
(showElements=smalltalk.send(maxElements, "_min_", [smalltalk.send(smalltalk.send(self, "_object", []), "_elementsSize", [])]));
smalltalk.send(self, "_renderText_withDropDownOn_", [unescape("%7B"), html]);
smalltalk.send(html, "_with_", [" "]);
((($receiver = smalltalk.send(self, "_isShort", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(html, "_with_", [" ... "]);})() : (function(){smalltalk.send(smalltalk.send((1), "_to_", [showElements]), "_do_", [(function(idx){var key=nil;
var value=nil;
(key=smalltalk.send(smalltalk.send(smalltalk.send(self, "_object", []), "_at_", [idx]), "_key", []));(value=smalltalk.send(smalltalk.send(smalltalk.send(self, "_object", []), "_at_", [idx]), "_value", []));(function($rec){smalltalk.send($rec, "_with_", [smalltalk.send(key, "_inlineViewComponentWithDepth_", [((($receiver = smalltalk.send(self, "_depth", [])).klass === smalltalk.Number) ? $receiver +(1) : smalltalk.send($receiver, "__plus", [(1)]))])]);smalltalk.send($rec, "_with_", [unescape("%3D%3E")]);return smalltalk.send($rec, "_with_", [smalltalk.send(value, "_inlineViewComponentWithDepth_", [((($receiver = smalltalk.send(self, "_depth", [])).klass === smalltalk.Number) ? $receiver +(1) : smalltalk.send($receiver, "__plus", [(1)]))])]);})(html);return ((($receiver = smalltalk.send(((($receiver = idx).klass === smalltalk.Number) ? $receiver <showElements : smalltalk.send($receiver, "__lt", [showElements])), "_or_", [(function(){return ((($receiver = smalltalk.send(smalltalk.send(self, "_object", []), "_elementsSize", [])).klass === smalltalk.Number) ? $receiver >maxElements : smalltalk.send($receiver, "__gt", [maxElements]));})])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(html, "_with_", [unescape("%20%2C%20")]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(html, "_with_", [unescape("%20%2C%20")]);})]));})]);return ((($receiver = ((($receiver = smalltalk.send(smalltalk.send(self, "_object", []), "_elementsSize", [])).klass === smalltalk.Number) ? $receiver >maxElements : smalltalk.send($receiver, "__gt", [maxElements]))).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(html, "_with_", [" ... "]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(html, "_with_", [" ... "]);})]));})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(html, "_with_", [" ... "]);}), (function(){smalltalk.send(smalltalk.send((1), "_to_", [showElements]), "_do_", [(function(idx){var key=nil;
var value=nil;
(key=smalltalk.send(smalltalk.send(smalltalk.send(self, "_object", []), "_at_", [idx]), "_key", []));(value=smalltalk.send(smalltalk.send(smalltalk.send(self, "_object", []), "_at_", [idx]), "_value", []));(function($rec){smalltalk.send($rec, "_with_", [smalltalk.send(key, "_inlineViewComponentWithDepth_", [((($receiver = smalltalk.send(self, "_depth", [])).klass === smalltalk.Number) ? $receiver +(1) : smalltalk.send($receiver, "__plus", [(1)]))])]);smalltalk.send($rec, "_with_", [unescape("%3D%3E")]);return smalltalk.send($rec, "_with_", [smalltalk.send(value, "_inlineViewComponentWithDepth_", [((($receiver = smalltalk.send(self, "_depth", [])).klass === smalltalk.Number) ? $receiver +(1) : smalltalk.send($receiver, "__plus", [(1)]))])]);})(html);return ((($receiver = smalltalk.send(((($receiver = idx).klass === smalltalk.Number) ? $receiver <showElements : smalltalk.send($receiver, "__lt", [showElements])), "_or_", [(function(){return ((($receiver = smalltalk.send(smalltalk.send(self, "_object", []), "_elementsSize", [])).klass === smalltalk.Number) ? $receiver >maxElements : smalltalk.send($receiver, "__gt", [maxElements]));})])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(html, "_with_", [unescape("%20%2C%20")]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(html, "_with_", [unescape("%20%2C%20")]);})]));})]);return ((($receiver = ((($receiver = smalltalk.send(smalltalk.send(self, "_object", []), "_elementsSize", [])).klass === smalltalk.Number) ? $receiver >maxElements : smalltalk.send($receiver, "__gt", [maxElements]))).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(html, "_with_", [" ... "]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(html, "_with_", [" ... "]);})]));})]));
smalltalk.send(html, "_with_", [" "]);
smalltalk.send(self, "_renderText_withDropDownOn_", [unescape("%7D"), html]);
return self;},
args: ["html"],
source: unescape('renderLoadedObjectOn%3A%20html%0A%09%7CshowElements%20maxElements%7C%0A%09maxElements%20%3A%3D%20self%20maxElements.%0A%09showElements%20%3A%3D%20maxElements%20min%3A%20self%20object%20elementsSize.%0A%09self%20renderText%3A%20%27%7B%27%20withDropDownOn%3A%20html.%0A%09html%20with%3A%20%27%20%27.%0A%09self%20isShort%0A%09%09ifTrue%3A%20%5Bhtml%20with%3A%20%27%20...%20%27%5D%0A%09%09ifFalse%3A%20%5B%0A%09%09%09%281%20to%3A%20showElements%29%20do%3A%20%5B%3Aidx%20%7C%20%7Ckey%20value%7C%0A%09%09%09%09key%20%3A%3D%20%28self%20object%20at%3A%20idx%29%20key.%0A%09%09%09%09value%20%3A%3D%20%28self%20object%20at%3A%20idx%29%20value.%0A%09%09%09%09html%20%0A%09%09%09%09%09with%3A%20%28key%20inlineViewComponentWithDepth%3A%20self%20depth%20+%201%29%3B%0A%09%09%09%09%09with%3A%20%27%3D%3E%27%3B%0A%09%09%09%09%09with%3A%20%28value%20inlineViewComponentWithDepth%3A%20self%20depth%20+%201%29.%0A%09%09%09%09%28idx%20%3C%20showElements%20or%3A%20%5Bself%20object%20elementsSize%20%3E%20maxElements%5D%29%0A%09%09%09%09%09ifTrue%3A%20%5Bhtml%20with%3A%20%27%20%2C%20%27%5D%5D.%0A%09%09%09self%20object%20elementsSize%20%3E%20maxElements%0A%09%09%09%09ifTrue%3A%20%5Bhtml%20with%3A%20%27%20...%20%27%5D%5D.%0A%09html%20with%3A%20%27%20%27.%0A%09self%20renderText%3A%20%27%7D%27%20withDropDownOn%3A%20html.'),
messageSends: ["maxElements", "min:", "elementsSize", "object", "renderText:withDropDownOn:", "with:", "ifTrue:ifFalse:", "isShort", "do:", "to:", "key", "at:", "value", "inlineViewComponentWithDepth:", unescape("+"), "depth", "ifTrue:", "or:", unescape("%3C"), unescape("%3E")],
referencedClasses: []
}),
smalltalk.MaglevHashInline);

smalltalk.addMethod(
unescape('_renderObjectWithDropDownOn_'),
smalltalk.method({
selector: unescape('renderObjectWithDropDownOn%3A'),
category: 'rendering',
fn: function (html){
var self=this;
smalltalk.send(self, "_renderObjectOn_", [html]);
return self;},
args: ["html"],
source: unescape('renderObjectWithDropDownOn%3A%20html%0A%09%22Do%20not%20render%20a%20drop%20down%20menu%20around%20the%20whole%20object.%22%0A%09self%20renderObjectOn%3A%20html.'),
messageSends: ["renderObjectOn:"],
referencedClasses: []
}),
smalltalk.MaglevHashInline);

smalltalk.addMethod(
unescape('_renderUnloadedObjectOn_'),
smalltalk.method({
selector: unescape('renderUnloadedObjectOn%3A'),
category: 'rendering',
fn: function (html){
var self=this;
smalltalk.send(self, "_renderText_withDropDownOn_", [unescape("%7B"), html]);
smalltalk.send(html, "_with_", ["..."]);
smalltalk.send(self, "_renderText_withDropDownOn_", [unescape("%7D"), html]);
return self;},
args: ["html"],
source: unescape('renderUnloadedObjectOn%3A%20html%0A%09self%20renderText%3A%20%27%7B%27%20withDropDownOn%3A%20html.%0A%09html%20with%3A%20%27...%27.%0A%09self%20renderText%3A%20%27%7D%27%20withDropDownOn%3A%20html.'),
messageSends: ["renderText:withDropDownOn:", "with:"],
referencedClasses: []
}),
smalltalk.MaglevHashInline);



smalltalk.addClass('MaglevModuleInline', smalltalk.MaglevObjectInline, [], 'Maglev-Database-Explorer');
smalltalk.addMethod(
unescape('_maxDepth'),
smalltalk.method({
selector: unescape('maxDepth'),
category: 'constants',
fn: function (){
var self=this;
return (1);
return self;},
args: [],
source: unescape('maxDepth%0A%09%5E%201'),
messageSends: [],
referencedClasses: []
}),
smalltalk.MaglevModuleInline);



smalltalk.addClass('MaglevClassInline', smalltalk.MaglevModuleInline, [], 'Maglev-Database-Explorer');
smalltalk.addMethod(
unescape('_maxDepth'),
smalltalk.method({
selector: unescape('maxDepth'),
category: 'constants',
fn: function (){
var self=this;
return (1);
return self;},
args: [],
source: unescape('maxDepth%0A%09%5E%201'),
messageSends: [],
referencedClasses: []
}),
smalltalk.MaglevClassInline);



smalltalk.addClass('MaglevNilClassInline', smalltalk.MaglevObjectInline, [], 'Maglev-Database-Explorer');
smalltalk.addMethod(
unescape('_hasDropDownDefault'),
smalltalk.method({
selector: unescape('hasDropDownDefault'),
category: 'constants',
fn: function (){
var self=this;
return false;
return self;},
args: [],
source: unescape('hasDropDownDefault%0A%09%5E%20false'),
messageSends: [],
referencedClasses: []
}),
smalltalk.MaglevNilClassInline);

smalltalk.addMethod(
unescape('_isDraggableDefault'),
smalltalk.method({
selector: unescape('isDraggableDefault'),
category: 'constants',
fn: function (){
var self=this;
return false;
return self;},
args: [],
source: unescape('isDraggableDefault%0A%09%5E%20false'),
messageSends: [],
referencedClasses: []
}),
smalltalk.MaglevNilClassInline);



smalltalk.addClass('MaglevStringInline', smalltalk.MaglevObjectInline, [], 'Maglev-Database-Explorer');
smalltalk.addMethod(
unescape('_hasDropDownDefault'),
smalltalk.method({
selector: unescape('hasDropDownDefault'),
category: 'constants',
fn: function (){
var self=this;
return false;
return self;},
args: [],
source: unescape('hasDropDownDefault%0A%09%5E%20false'),
messageSends: [],
referencedClasses: []
}),
smalltalk.MaglevStringInline);

smalltalk.addMethod(
unescape('_isDraggableDefault'),
smalltalk.method({
selector: unescape('isDraggableDefault'),
category: 'constants',
fn: function (){
var self=this;
return false;
return self;},
args: [],
source: unescape('isDraggableDefault%0A%09%5E%20false'),
messageSends: [],
referencedClasses: []
}),
smalltalk.MaglevStringInline);



smalltalk.addClass('MaglevSymbolInline', smalltalk.MaglevObjectInline, [], 'Maglev-Database-Explorer');
smalltalk.addMethod(
unescape('_hasDropDownDefault'),
smalltalk.method({
selector: unescape('hasDropDownDefault'),
category: 'constants',
fn: function (){
var self=this;
return false;
return self;},
args: [],
source: unescape('hasDropDownDefault%0A%09%5E%20false'),
messageSends: [],
referencedClasses: []
}),
smalltalk.MaglevSymbolInline);

smalltalk.addMethod(
unescape('_isDraggableDefault'),
smalltalk.method({
selector: unescape('isDraggableDefault'),
category: 'constants',
fn: function (){
var self=this;
return false;
return self;},
args: [],
source: unescape('isDraggableDefault%0A%09%5E%20false'),
messageSends: [],
referencedClasses: []
}),
smalltalk.MaglevSymbolInline);



smalltalk.addClass('MaglevTable', smalltalk.Widget, ['object', 'collectionName', 'rangeFrom', 'rangeTo', 'isAssociationDictionary', 'tableBody', 'currentPage', 'pageListItems', 'pagination'], 'Maglev-Database-Explorer');
smalltalk.addMethod(
unescape('_collection'),
smalltalk.method({
selector: unescape('collection'),
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.send(self['@object'], "_perform_", [self['@collectionName']]);
return self;},
args: [],
source: unescape('collection%0A%09%5E%20object%20perform%3A%20collectionName'),
messageSends: ["perform:"],
referencedClasses: []
}),
smalltalk.MaglevTable);

smalltalk.addMethod(
unescape('_collectionName'),
smalltalk.method({
selector: unescape('collectionName'),
category: 'accessing',
fn: function (){
var self=this;
return self['@collectionName'];
return self;},
args: [],
source: unescape('collectionName%0A%09%5E%20collectionName'),
messageSends: [],
referencedClasses: []
}),
smalltalk.MaglevTable);

smalltalk.addMethod(
unescape('_collectionName_'),
smalltalk.method({
selector: unescape('collectionName%3A'),
category: 'accessing',
fn: function (aString){
var self=this;
(self['@collectionName']=aString);
return self;},
args: ["aString"],
source: unescape('collectionName%3A%20aString%0A%09collectionName%20%3A%3D%20aString'),
messageSends: [],
referencedClasses: []
}),
smalltalk.MaglevTable);

smalltalk.addMethod(
unescape('_collectionSize'),
smalltalk.method({
selector: unescape('collectionSize'),
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.send(self['@object'], "_perform_", [smalltalk.send(self['@collectionName'], "__comma", ["Size"])]);
return self;},
args: [],
source: unescape('collectionSize%0A%09%5E%20object%20perform%3A%20collectionName%2C%20%27Size%27'),
messageSends: ["perform:", unescape("%2C")],
referencedClasses: []
}),
smalltalk.MaglevTable);

smalltalk.addMethod(
unescape('_currentPage'),
smalltalk.method({
selector: unescape('currentPage'),
category: 'accessing',
fn: function (){
var self=this;
(($receiver = self['@currentPage']) == nil || $receiver == undefined) ? (function(){return (self['@currentPage']=(1));})() : $receiver;
return self['@currentPage'];
return self;},
args: [],
source: unescape('currentPage%0A%09currentPage%20ifNil%3A%20%5BcurrentPage%20%3A%3D%201%5D.%0A%09%5E%20currentPage'),
messageSends: ["ifNil:"],
referencedClasses: []
}),
smalltalk.MaglevTable);

smalltalk.addMethod(
unescape('_isAssociationDictionary'),
smalltalk.method({
selector: unescape('isAssociationDictionary'),
category: 'accessing',
fn: function (){
var self=this;
(($receiver = self['@isAssociationDictionary']) == nil || $receiver == undefined) ? (function(){return (self['@isAssociationDictionary']=false);})() : $receiver;
return self['@isAssociationDictionary'];
return self;},
args: [],
source: unescape('isAssociationDictionary%0A%09isAssociationDictionary%20ifNil%3A%20%5BisAssociationDictionary%20%3A%3D%20false%5D.%0A%09%5E%20isAssociationDictionary'),
messageSends: ["ifNil:"],
referencedClasses: []
}),
smalltalk.MaglevTable);

smalltalk.addMethod(
unescape('_isAssociationDictionary_'),
smalltalk.method({
selector: unescape('isAssociationDictionary%3A'),
category: 'accessing',
fn: function (aBoolean){
var self=this;
(self['@isAssociationDictionary']=aBoolean);
return self;},
args: ["aBoolean"],
source: unescape('isAssociationDictionary%3A%20aBoolean%0A%09isAssociationDictionary%20%3A%3D%20aBoolean.'),
messageSends: [],
referencedClasses: []
}),
smalltalk.MaglevTable);

smalltalk.addMethod(
unescape('_object'),
smalltalk.method({
selector: unescape('object'),
category: 'accessing',
fn: function (){
var self=this;
return self['@object'];
return self;},
args: [],
source: unescape('object%0A%09%5E%20object'),
messageSends: [],
referencedClasses: []
}),
smalltalk.MaglevTable);

smalltalk.addMethod(
unescape('_object_'),
smalltalk.method({
selector: unescape('object%3A'),
category: 'accessing',
fn: function (anObject){
var self=this;
(self['@object']=anObject);
return self;},
args: ["anObject"],
source: unescape('object%3A%20anObject%0A%09object%20%3A%3D%20anObject.'),
messageSends: [],
referencedClasses: []
}),
smalltalk.MaglevTable);

smalltalk.addMethod(
unescape('_pageSize'),
smalltalk.method({
selector: unescape('pageSize'),
category: 'accessing',
fn: function (){
var self=this;
return (10);
return self;},
args: [],
source: unescape('pageSize%0A%09%5E%2010'),
messageSends: [],
referencedClasses: []
}),
smalltalk.MaglevTable);

smalltalk.addMethod(
unescape('_pages'),
smalltalk.method({
selector: unescape('pages'),
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.send(((($receiver = smalltalk.send(self, "_collectionSize", [])).klass === smalltalk.Number) ? $receiver /smalltalk.send(self, "_pageSize", []) : smalltalk.send($receiver, "__slash", [smalltalk.send(self, "_pageSize", [])])), "_ceiled", []);
return self;},
args: [],
source: unescape('pages%0A%09%5E%20%28self%20collectionSize%20/%20self%20pageSize%29%20ceiled'),
messageSends: ["ceiled", unescape("/"), "collectionSize", "pageSize"],
referencedClasses: []
}),
smalltalk.MaglevTable);

smalltalk.addMethod(
unescape('_rangeFrom'),
smalltalk.method({
selector: unescape('rangeFrom'),
category: 'accessing',
fn: function (){
var self=this;
(($receiver = self['@rangeFrom']) == nil || $receiver == undefined) ? (function(){return (self['@rangeFrom']=(1));})() : $receiver;
return self['@rangeFrom'];
return self;},
args: [],
source: unescape('rangeFrom%0A%09rangeFrom%20ifNil%3A%20%5BrangeFrom%20%3A%3D%201%5D.%0A%09%5E%20rangeFrom'),
messageSends: ["ifNil:"],
referencedClasses: []
}),
smalltalk.MaglevTable);

smalltalk.addMethod(
unescape('_rangeFrom_'),
smalltalk.method({
selector: unescape('rangeFrom%3A'),
category: 'accessing',
fn: function (anInteger){
var self=this;
(self['@rangeFrom']=anInteger);
return self;},
args: ["anInteger"],
source: unescape('rangeFrom%3A%20anInteger%0A%09rangeFrom%20%3A%3D%20anInteger.'),
messageSends: [],
referencedClasses: []
}),
smalltalk.MaglevTable);

smalltalk.addMethod(
unescape('_rangeTo'),
smalltalk.method({
selector: unescape('rangeTo'),
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.send(((($receiver = ((($receiver = smalltalk.send(self, "_rangeFrom", [])).klass === smalltalk.Number) ? $receiver +smalltalk.send(self, "_pageSize", []) : smalltalk.send($receiver, "__plus", [smalltalk.send(self, "_pageSize", [])]))).klass === smalltalk.Number) ? $receiver -(1) : smalltalk.send($receiver, "__minus", [(1)])), "_min_", [smalltalk.send(self, "_collectionSize", [])]);
return self;},
args: [],
source: unescape('rangeTo%0A%09%5E%20self%20rangeFrom%20+%20self%20pageSize%20-%201%20min%3A%20self%20collectionSize'),
messageSends: ["min:", unescape("-"), unescape("+"), "rangeFrom", "pageSize", "collectionSize"],
referencedClasses: []
}),
smalltalk.MaglevTable);

smalltalk.addMethod(
unescape('_renderAssociation_to_on_'),
smalltalk.method({
selector: unescape('renderAssociation%3Ato%3Aon%3A'),
category: 'rendering',
fn: function (key, value, html){
var self=this;
smalltalk.send(smalltalk.send(html, "_tr", []), "_with_", [(function(){smalltalk.send(smalltalk.send(html, "_td", []), "_with_", [smalltalk.send(key, "_inlineViewComponent", [])]);return smalltalk.send(smalltalk.send(html, "_td", []), "_with_", [smalltalk.send(value, "_inlineViewComponent", [])]);})]);
return self;},
args: ["key", "value", "html"],
source: unescape('renderAssociation%3A%20key%20to%3A%20value%20on%3A%20html%0A%09html%20tr%20with%3A%20%5B%0A%09%09html%20td%20with%3A%20key%20inlineViewComponent.%0A%09%09html%20td%20with%3A%20value%20inlineViewComponent%5D.'),
messageSends: ["with:", "tr", "td", "inlineViewComponent"],
referencedClasses: []
}),
smalltalk.MaglevTable);

smalltalk.addMethod(
unescape('_renderAssociationDictionaryBodyOn_'),
smalltalk.method({
selector: unescape('renderAssociationDictionaryBodyOn%3A'),
category: 'rendering',
fn: function (html){
var self=this;
smalltalk.send(smalltalk.send(smalltalk.send(self, "_rangeFrom", []), "_to_", [smalltalk.send(self, "_rangeTo", [])]), "_do_", [(function(idx){var obj=nil;
(obj=smalltalk.send(smalltalk.send(self, "_collection", []), "_at_", [idx]));return smalltalk.send(smalltalk.send(html, "_tr", []), "_with_", [(function(){smalltalk.send(smalltalk.send(html, "_td", []), "_with_", [smalltalk.send(smalltalk.send(obj, "_key", []), "_inlineViewComponent", [])]);return smalltalk.send(smalltalk.send(html, "_td", []), "_with_", [smalltalk.send(smalltalk.send(obj, "_value", []), "_inlineViewComponent", [])]);})]);})]);
return self;},
args: ["html"],
source: unescape('renderAssociationDictionaryBodyOn%3A%20html%0A%09%28self%20rangeFrom%20to%3A%20self%20rangeTo%29%20do%3A%20%5B%3Aidx%20%7C%20%7Cobj%7C%0A%09%09obj%20%3A%3D%20self%20collection%20at%3A%20idx.%0A%09%09html%20tr%20with%3A%20%5B%0A%09%09%09html%20td%20with%3A%20obj%20key%20inlineViewComponent.%0A%09%09%09html%20td%20with%3A%20obj%20value%20inlineViewComponent%5D%5D.'),
messageSends: ["do:", "to:", "rangeFrom", "rangeTo", "at:", "collection", "with:", "tr", "td", "inlineViewComponent", "key", "value"],
referencedClasses: []
}),
smalltalk.MaglevTable);

smalltalk.addMethod(
unescape('_renderDictionaryBodyOn_'),
smalltalk.method({
selector: unescape('renderDictionaryBodyOn%3A'),
category: 'rendering',
fn: function (html){
var self=this;
smalltalk.send(smalltalk.send(smalltalk.send(self, "_rangeFrom", []), "_to_", [smalltalk.send(self, "_rangeTo", [])]), "_do_", [(function(idx){var obj=nil;
(obj=smalltalk.send(smalltalk.send(self, "_collection", []), "_at_", [idx]));return smalltalk.send(smalltalk.send(html, "_tr", []), "_with_", [(function(){smalltalk.send(smalltalk.send(html, "_td", []), "_with_", [smalltalk.send(idx, "_inlineViewComponent", [])]);return smalltalk.send(smalltalk.send(html, "_td", []), "_with_", [smalltalk.send(obj, "_inlineViewComponent", [])]);})]);})]);
return self;},
args: ["html"],
source: unescape('renderDictionaryBodyOn%3A%20html%0A%09%28self%20rangeFrom%20to%3A%20self%20rangeTo%29%20do%3A%20%5B%3Aidx%20%7C%20%7Cobj%7C%0A%09%09obj%20%3A%3D%20self%20collection%20at%3A%20idx.%0A%09%09html%20tr%20with%3A%20%5B%0A%09%09%09html%20td%20with%3A%20idx%20inlineViewComponent.%0A%09%09%09html%20td%20with%3A%20obj%20inlineViewComponent%5D%5D.'),
messageSends: ["do:", "to:", "rangeFrom", "rangeTo", "at:", "collection", "with:", "tr", "td", "inlineViewComponent"],
referencedClasses: []
}),
smalltalk.MaglevTable);

smalltalk.addMethod(
unescape('_renderOn_'),
smalltalk.method({
selector: unescape('renderOn%3A'),
category: 'rendering',
fn: function (html){
var self=this;
var pagClass=nil;
((($receiver = smalltalk.send(smalltalk.send(self, "_pages", []), "__eq", [(1)])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (pagClass=unescape("display%3A%20none%3B"));})() : (function(){return (pagClass="");})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return (pagClass=unescape("display%3A%20none%3B"));}), (function(){return (pagClass="");})]));
(function($rec){smalltalk.send($rec, "_class_", [unescape("table%20table-bordered")]);smalltalk.send($rec, "_style_", [unescape("margin-bottom%3A%200px%3B")]);return smalltalk.send($rec, "_with_", [(function(){return (self['@tableBody']=smalltalk.send(html, "_tbody", []));})]);})(smalltalk.send(html, "_table", []));
(function($rec){smalltalk.send($rec, "_style_", [unescape("text-align%3A%20center%3B")]);return smalltalk.send($rec, "_with_", [(function(){return (self['@pagination']=(function($rec){smalltalk.send($rec, "_class_", ["pagination"]);return smalltalk.send($rec, "_style_", [pagClass]);})(smalltalk.send(html, "_span", [])));})]);})(smalltalk.send(html, "_div", []));
smalltalk.send(self, "_renderPagination", []);
smalltalk.send(self, "_renderPage_", [(1)]);
return self;},
args: ["html"],
source: unescape('renderOn%3A%20html%0A%09%7CpagClass%7C%0A%09self%20pages%20%3D%201%20%0A%09%09ifTrue%3A%20%5BpagClass%20%3A%3D%20%27display%3A%20none%3B%27%5D%0A%09%09ifFalse%3A%20%5BpagClass%20%3A%3D%20%27%27%5D.%0A%09html%20table%0A%09%09class%3A%20%27table%20table-bordered%27%3B%0A%09%09style%3A%20%27margin-bottom%3A%200px%3B%27%3B%0A%09%09with%3A%20%5BtableBody%20%3A%3D%20html%20tbody%5D.%0A%09html%20div%0A%09%09style%3A%20%27text-align%3A%20center%3B%27%3B%0A%09%09with%3A%20%5Bpagination%20%3A%3D%20html%20span%0A%09%09%09class%3A%20%27pagination%27%3B%0A%09%09%09style%3A%20pagClass%5D.%0A%09self%20renderPagination.%0A%09self%20renderPage%3A%201.'),
messageSends: ["ifTrue:ifFalse:", unescape("%3D"), "pages", "class:", "style:", "with:", "tbody", "table", "span", "div", "renderPagination", "renderPage:"],
referencedClasses: []
}),
smalltalk.MaglevTable);

smalltalk.addMethod(
unescape('_renderPage_'),
smalltalk.method({
selector: unescape('renderPage%3A'),
category: 'rendering',
fn: function (anInteger){
var self=this;
var html=nil;
(self['@currentPage']=anInteger);
(html=smalltalk.send((smalltalk.HTMLCanvas || HTMLCanvas), "_onJQuery_", [smalltalk.send(self['@tableBody'], "_asJQuery", [])]));
(self['@rangeFrom']=((($receiver = ((($receiver = ((($receiver = anInteger).klass === smalltalk.Number) ? $receiver -(1) : smalltalk.send($receiver, "__minus", [(1)]))).klass === smalltalk.Number) ? $receiver *smalltalk.send(self, "_pageSize", []) : smalltalk.send($receiver, "__star", [smalltalk.send(self, "_pageSize", [])]))).klass === smalltalk.Number) ? $receiver +(1) : smalltalk.send($receiver, "__plus", [(1)])));
smalltalk.send(smalltalk.send(self['@tableBody'], "_asJQuery", []), "_empty", []);
(function($rec){smalltalk.send($rec, "_with_", [smalltalk.send((smalltalk.MaglevIcon || MaglevIcon), "_wait", [])]);return smalltalk.send($rec, "_with_", [" loading..."]);})(html);
smalltalk.send(self, "_renderPagination", []);
smalltalk.send(self['@object'], "_ensureIsLoaded_from_to_withCallback_", [self['@collectionName'], self['@rangeFrom'], smalltalk.send(self, "_rangeTo", []), (function(){smalltalk.send(smalltalk.send(self['@tableBody'], "_asJQuery", []), "_empty", []);return smalltalk.send(self, "_renderTableBodyOn_", [smalltalk.send((smalltalk.HTMLCanvas || HTMLCanvas), "_onJQuery_", [smalltalk.send(self['@tableBody'], "_asJQuery", [])])]);})]);
return self;},
args: ["anInteger"],
source: unescape('renderPage%3A%20anInteger%0A%09%7Chtml%7C%0A%09currentPage%20%3A%3D%20anInteger.%0A%09html%20%3A%3D%20HTMLCanvas%20onJQuery%3A%20tableBody%20asJQuery.%0A%09rangeFrom%20%3A%3D%20anInteger%20-%201%20*%20self%20pageSize%20+%201.%0A%09tableBody%20asJQuery%20empty.%0A%09html%20%0A%09%09with%3A%20MaglevIcon%20wait%3B%0A%09%09with%3A%20%27%20loading...%27.%0A%09self%20renderPagination.%0A%09object%20%0A%09%09ensureIsLoaded%3A%20collectionName%20%0A%09%09from%3A%20rangeFrom%20%0A%09%09to%3A%20self%20rangeTo%20%0A%09%09withCallback%3A%20%5B%0A%09%09%09tableBody%20asJQuery%20empty.%0A%09%09%09self%20renderTableBodyOn%3A%20%28HTMLCanvas%20onJQuery%3A%20tableBody%20asJQuery%29%5D.'),
messageSends: ["onJQuery:", "asJQuery", unescape("+"), unescape("*"), unescape("-"), "pageSize", "empty", "with:", "wait", "renderPagination", "ensureIsLoaded:from:to:withCallback:", "rangeTo", "renderTableBodyOn:"],
referencedClasses: ["HTMLCanvas", "MaglevIcon"]
}),
smalltalk.MaglevTable);

smalltalk.addMethod(
unescape('_renderPagination'),
smalltalk.method({
selector: unescape('renderPagination'),
category: 'rendering',
fn: function (){
var self=this;
var firstPage=nil;
var lastPage=nil;
var html=nil;
(self['@pageListItems']=smalltalk.send((smalltalk.Dictionary || Dictionary), "_new", []));
(firstPage=smalltalk.send(((($receiver = smalltalk.send(self, "_currentPage", [])).klass === smalltalk.Number) ? $receiver -(5) : smalltalk.send($receiver, "__minus", [(5)])), "_max_", [(1)]));
(lastPage=smalltalk.send(((($receiver = firstPage).klass === smalltalk.Number) ? $receiver +(10) : smalltalk.send($receiver, "__plus", [(10)])), "_min_", [smalltalk.send(self, "_pages", [])]));
smalltalk.send(smalltalk.send(self['@pagination'], "_asJQuery", []), "_empty", []);
(html=smalltalk.send((smalltalk.HTMLCanvas || HTMLCanvas), "_onJQuery_", [smalltalk.send(self['@pagination'], "_asJQuery", [])]));
smalltalk.send(self['@pagination'], "_with_", [(function(){return (function($rec){smalltalk.send($rec, "_style_", [unescape("margin-top%3A%2010px%3B")]);return smalltalk.send($rec, "_with_", [(function(){return smalltalk.send(smalltalk.send(firstPage, "_to_", [lastPage]), "_do_", [(function(index){var liClass=nil;
((($receiver = smalltalk.send(self['@currentPage'], "__eq", [index])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (liClass="disabled");})() : (function(){return (liClass="active");})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return (liClass="disabled");}), (function(){return (liClass="active");})]));return (function($rec){smalltalk.send($rec, "_class_", [liClass]);return smalltalk.send($rec, "_with_", [(function(){return (function($rec){smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send(self, "_renderPage_", [index]);})]);return smalltalk.send($rec, "_with_", [smalltalk.send(index, "_asString", [])]);})(smalltalk.send(html, "_a", []));})]);})(smalltalk.send(html, "_li", []));})]);})]);})(smalltalk.send(html, "_ul", []));})]);
return self;},
args: [],
source: unescape('renderPagination%0A%09%7CfirstPage%20lastPage%20html%7C%0A%09pageListItems%20%3A%3D%20Dictionary%20new.%0A%09firstPage%20%3A%3D%20self%20currentPage%20-%205%20max%3A%201.%0A%09lastPage%20%3A%3D%20firstPage%20+%2010%20min%3A%20self%20pages.%0A%09pagination%20asJQuery%20empty.%0A%09html%20%3A%3D%20%28HTMLCanvas%20onJQuery%3A%20pagination%20asJQuery%29.%0A%09pagination%0A%09%09with%3A%20%5Bhtml%20ul%0A%09%09%09style%3A%20%27margin-top%3A%2010px%3B%27%3B%0A%09%09%09with%3A%20%5B%28firstPage%20to%3A%20lastPage%29%20do%3A%20%5B%3Aindex%20%7C%20%7CliClass%7C%0A%09%09%09%09currentPage%20%3D%20index%0A%09%09%09%09%09ifTrue%3A%20%5BliClass%20%3A%3D%20%27disabled%27%5D%0A%09%09%09%09%09ifFalse%3A%20%5BliClass%20%3A%3D%20%27active%27%5D.%0A%09%09%09%09html%20li%0A%09%09%09%09%09class%3A%20liClass%3B%0A%09%09%09%09%09with%3A%20%5Bhtml%20a%0A%09%09%09%09%09%09onClick%3A%20%5Bself%20renderPage%3A%20index%5D%3B%0A%09%09%09%09%09%09with%3A%20index%20asString%5D%5D%5D%5D.'),
messageSends: ["new", "max:", unescape("-"), "currentPage", "min:", unescape("+"), "pages", "empty", "asJQuery", "onJQuery:", "with:", "style:", "do:", "to:", "ifTrue:ifFalse:", unescape("%3D"), "class:", "onClick:", "renderPage:", "asString", "a", "li", "ul"],
referencedClasses: ["Dictionary", "HTMLCanvas"]
}),
smalltalk.MaglevTable);

smalltalk.addMethod(
unescape('_renderTableBodyOn_'),
smalltalk.method({
selector: unescape('renderTableBodyOn%3A'),
category: 'rendering',
fn: function (html){
var self=this;
try{((($receiver = smalltalk.send(self, "_isAssociationDictionary", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(self, "_renderAssociationDictionaryBodyOn_", [html]);return (function(){throw({name: 'stReturn', selector: '_renderTableBodyOn_', fn: function(){return self}})})();})() : (function(){smalltalk.send(self, "_renderDictionaryBodyOn_", [html]);return (function(){throw({name: 'stReturn', selector: '_renderTableBodyOn_', fn: function(){return self}})})();})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){smalltalk.send(self, "_renderAssociationDictionaryBodyOn_", [html]);return (function(){throw({name: 'stReturn', selector: '_renderTableBodyOn_', fn: function(){return self}})})();}), (function(){smalltalk.send(self, "_renderDictionaryBodyOn_", [html]);return (function(){throw({name: 'stReturn', selector: '_renderTableBodyOn_', fn: function(){return self}})})();})]));
return self;
} catch(e) {if(e.name === 'stReturn' && e.selector === '_renderTableBodyOn_'){return e.fn()} throw(e)}},
args: ["html"],
source: unescape('renderTableBodyOn%3A%20html%0A%09self%20isAssociationDictionary%20%0A%09%09%09ifTrue%3A%20%5Bself%20renderAssociationDictionaryBodyOn%3A%20html.%20%5E%20self%5D%0A%09%09%09ifFalse%3A%20%5Bself%20renderDictionaryBodyOn%3A%20html.%20%5E%20self%5D.'),
messageSends: ["ifTrue:ifFalse:", "isAssociationDictionary", "renderAssociationDictionaryBodyOn:", "renderDictionaryBodyOn:"],
referencedClasses: []
}),
smalltalk.MaglevTable);


smalltalk.addMethod(
unescape('_newAssociationDictFor_with_'),
smalltalk.method({
selector: unescape('newAssociationDictFor%3Awith%3A'),
category: 'instance creation',
fn: function (anObject, aString){
var self=this;
return (function($rec){smalltalk.send($rec, "_object_", [anObject]);smalltalk.send($rec, "_collectionName_", [aString]);smalltalk.send($rec, "_isAssociationDictionary_", [true]);smalltalk.send($rec, "_initialize", []);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(self, "_basicNew", []));
return self;},
args: ["anObject", "aString"],
source: unescape('newAssociationDictFor%3A%20anObject%20with%3A%20aString%0A%09%5E%20self%20basicNew%0A%09%09object%3A%20anObject%3B%0A%09%09collectionName%3A%20aString%3B%0A%09%09isAssociationDictionary%3A%20true%3B%0A%09%09initialize%3B%0A%09%09yourself'),
messageSends: ["object:", "collectionName:", "isAssociationDictionary:", "initialize", "yourself", "basicNew"],
referencedClasses: []
}),
smalltalk.MaglevTable.klass);

smalltalk.addMethod(
unescape('_newFor_with_'),
smalltalk.method({
selector: unescape('newFor%3Awith%3A'),
category: 'instance creation',
fn: function (anObject, aString){
var self=this;
return (function($rec){smalltalk.send($rec, "_object_", [anObject]);smalltalk.send($rec, "_collectionName_", [aString]);smalltalk.send($rec, "_initialize", []);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(self, "_basicNew", []));
return self;},
args: ["anObject", "aString"],
source: unescape('newFor%3A%20anObject%20with%3A%20aString%0A%09%5E%20self%20basicNew%0A%09%09object%3A%20anObject%3B%0A%09%09collectionName%3A%20aString%3B%0A%09%09initialize%3B%0A%09%09yourself'),
messageSends: ["object:", "collectionName:", "initialize", "yourself", "basicNew"],
referencedClasses: []
}),
smalltalk.MaglevTable.klass);


smalltalk.addClass('MaglevWindow', smalltalk.Widget, ['container'], 'Maglev-Database-Explorer');
smalltalk.addMethod(
unescape('_appendToWorkspace'),
smalltalk.method({
selector: unescape('appendToWorkspace'),
category: 'rendering',
fn: function (){
var self=this;
smalltalk.send(self, "_renderOn_", [smalltalk.send((smalltalk.HTMLCanvas || HTMLCanvas), "_onJQuery_", [smalltalk.send(unescape("%23workspace"), "_asJQuery", [])])]);
return self;},
args: [],
source: unescape('appendToWorkspace%0A%20%20%20self%20renderOn%3A%20%28HTMLCanvas%20onJQuery%3A%20%27%23workspace%27%20asJQuery%29.'),
messageSends: ["renderOn:", "onJQuery:", "asJQuery"],
referencedClasses: ["HTMLCanvas"]
}),
smalltalk.MaglevWindow);

smalltalk.addMethod(
unescape('_clear'),
smalltalk.method({
selector: unescape('clear'),
category: 'interactions',
fn: function (){
var self=this;
smalltalk.send(smalltalk.send(self['@container'], "_asJQuery", []), "_empty", []);
return self;},
args: [],
source: unescape('clear%0A%09container%20asJQuery%20empty.'),
messageSends: ["empty", "asJQuery"],
referencedClasses: []
}),
smalltalk.MaglevWindow);

smalltalk.addMethod(
unescape('_closeWindow'),
smalltalk.method({
selector: unescape('closeWindow'),
category: 'interactions',
fn: function (){
var self=this;
smalltalk.send((smalltalk.MaglevJsPlumb || MaglevJsPlumb), "_deleteEndpointsFor_", [smalltalk.send(self['@container'], "_asJQuery", [])]);
smalltalk.send(smalltalk.send(self['@container'], "_asJQuery", []), "_remove", []);
return self;},
args: [],
source: unescape('closeWindow%0A%09MaglevJsPlumb%20deleteEndpointsFor%3A%20container%20asJQuery.%0A%09container%20asJQuery%20remove.'),
messageSends: ["deleteEndpointsFor:", "asJQuery", "remove"],
referencedClasses: ["MaglevJsPlumb"]
}),
smalltalk.MaglevWindow);

smalltalk.addMethod(
unescape('_connectTo_as_with_'),
smalltalk.method({
selector: unescape('connectTo%3Aas%3Awith%3A'),
category: 'interactions',
fn: function (aWindow, type, caption){
var self=this;
smalltalk.send((smalltalk.MaglevJsPlumb || MaglevJsPlumb), "_connectWindow_to_as_with_", [self, aWindow, type, caption]);
return self;},
args: ["aWindow", "type", "caption"],
source: unescape('connectTo%3A%20aWindow%20as%3A%20type%20with%3A%20caption%0A%09MaglevJsPlumb%20connectWindow%3A%20self%20to%3A%20aWindow%20as%3A%20type%20with%3A%20caption.'),
messageSends: ["connectWindow:to:as:with:"],
referencedClasses: ["MaglevJsPlumb"]
}),
smalltalk.MaglevWindow);

smalltalk.addMethod(
unescape('_connectTo_with_'),
smalltalk.method({
selector: unescape('connectTo%3Awith%3A'),
category: 'interactions',
fn: function (aWindow, parameters){
var self=this;
smalltalk.send((smalltalk.MaglevJsPlumb || MaglevJsPlumb), "_connectWindow_to_with_", [self, aWindow, parameters]);
return self;},
args: ["aWindow", "parameters"],
source: unescape('connectTo%3A%20aWindow%20with%3A%20parameters%0A%09MaglevJsPlumb%20connectWindow%3A%20self%20to%3A%20aWindow%20with%3A%20parameters.'),
messageSends: ["connectWindow:to:with:"],
referencedClasses: ["MaglevJsPlumb"]
}),
smalltalk.MaglevWindow);

smalltalk.addMethod(
unescape('_container'),
smalltalk.method({
selector: unescape('container'),
category: 'accessing',
fn: function (){
var self=this;
return self['@container'];
return self;},
args: [],
source: unescape('container%0A%09%5E%20container'),
messageSends: [],
referencedClasses: []
}),
smalltalk.MaglevWindow);

smalltalk.addMethod(
unescape('_isWaitingWindow'),
smalltalk.method({
selector: unescape('isWaitingWindow'),
category: 'testing',
fn: function (){
var self=this;
return false;
return self;},
args: [],
source: unescape('isWaitingWindow%0A%09%5E%20false'),
messageSends: [],
referencedClasses: []
}),
smalltalk.MaglevWindow);

smalltalk.addMethod(
unescape('_left_'),
smalltalk.method({
selector: unescape('left%3A'),
category: 'attributes',
fn: function (aValue){
var self=this;
smalltalk.send(self['@container'], "_left_", [aValue]);
return self;},
args: ["aValue"],
source: unescape('left%3A%20aValue%0A%09container%20left%3A%20aValue.'),
messageSends: ["left:"],
referencedClasses: []
}),
smalltalk.MaglevWindow);

smalltalk.addMethod(
unescape('_prepareWindow'),
smalltalk.method({
selector: unescape('prepareWindow'),
category: 'interactions',
fn: function (){
var self=this;
smalltalk.send((smalltalk.MaglevJsPlumb || MaglevJsPlumb), "_prepareObject_", [smalltalk.send(self['@container'], "_asJQuery", [])]);
(function($rec){smalltalk.send($rec, "_onMouseEnter_", [(function(){return smalltalk.send(self['@container'], "_removeClass_", [unescape("window-mouse-out")]);})]);return smalltalk.send($rec, "_onMouseLeave_", [(function(){return smalltalk.send(self['@container'], "_addClass_", [unescape("window-mouse-out")]);})]);})(self['@container']);
return self;},
args: [],
source: unescape('prepareWindow%0A%09MaglevJsPlumb%20prepareObject%3A%20%28container%20asJQuery%29.%0A%09container%0A%09%09onMouseEnter%3A%20%5Bcontainer%20removeClass%3A%20%27window-mouse-out%27%5D%3B%0A%09%09onMouseLeave%3A%20%5Bcontainer%20addClass%3A%20%27window-mouse-out%27%5D.'),
messageSends: ["prepareObject:", "asJQuery", "onMouseEnter:", "removeClass:", "onMouseLeave:", "addClass:"],
referencedClasses: ["MaglevJsPlumb"]
}),
smalltalk.MaglevWindow);

smalltalk.addMethod(
unescape('_renderCloseButtonOn_'),
smalltalk.method({
selector: unescape('renderCloseButtonOn%3A'),
category: 'rendering',
fn: function (html){
var self=this;
(function($rec){smalltalk.send($rec, "_class_", [unescape("display-inline-block")]);return smalltalk.send($rec, "_with_", [(function(){return (function($rec){smalltalk.send($rec, "_href_", [unescape("%23")]);smalltalk.send($rec, "_class_", [unescape("window-close-button")]);smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send(self, "_closeWindow", []);})]);return smalltalk.send($rec, "_with_", [smalltalk.send((smalltalk.MaglevIcon || MaglevIcon), "_remove", [])]);})(smalltalk.send(html, "_a", []));})]);})(smalltalk.send(html, "_span", []));
return self;},
args: ["html"],
source: unescape('renderCloseButtonOn%3A%20html%0A%09html%20span%0A%09%09class%3A%20%27display-inline-block%27%3B%0A%09%09with%3A%20%5Bhtml%20a%0A%09%09%09%09href%3A%20%27%23%27%3B%0A%09%09%09%09class%3A%20%27window-close-button%27%3B%0A%09%09%09%09onClick%3A%20%5Bself%20closeWindow%5D%3B%0A%09%09%09%09with%3A%20MaglevIcon%20remove%5D.'),
messageSends: ["class:", "with:", "href:", "onClick:", "closeWindow", "remove", "a", "span"],
referencedClasses: ["MaglevIcon"]
}),
smalltalk.MaglevWindow);

smalltalk.addMethod(
unescape('_renderHeightPlaceholderOn_'),
smalltalk.method({
selector: unescape('renderHeightPlaceholderOn%3A'),
category: 'rendering',
fn: function (html){
var self=this;
(function($rec){smalltalk.send($rec, "_style_", [unescape("visibility%3A%20hidden%3B")]);return smalltalk.send($rec, "_with_", [(function(){return (function($rec){smalltalk.send($rec, "_class_", ["btn"]);return smalltalk.send($rec, "_with_", ["a"]);})(smalltalk.send(html, "_a", []));})]);})(smalltalk.send(html, "_span", []));
return self;},
args: ["html"],
source: unescape('renderHeightPlaceholderOn%3A%20html%0A%09html%20span%0A%09%09style%3A%20%27visibility%3A%20hidden%3B%27%3B%0A%09%09with%3A%20%5B%0A%09%09%09html%20a%0A%09%09%09%09class%3A%20%27btn%27%3B%0A%09%09%09%09with%3A%20%27a%27%5D.'),
messageSends: ["style:", "with:", "class:", "a", "span"],
referencedClasses: []
}),
smalltalk.MaglevWindow);

smalltalk.addMethod(
unescape('_renderHorziontalLineOn_'),
smalltalk.method({
selector: unescape('renderHorziontalLineOn%3A'),
category: 'rendering',
fn: function (html){
var self=this;
smalltalk.send(smalltalk.send(html, "_hr", []), "_style_", [unescape("margin%3A%2010px%3B")]);
return self;},
args: ["html"],
source: unescape('renderHorziontalLineOn%3A%20html%0A%09html%20hr%20style%3A%20%27margin%3A%2010px%3B%27.'),
messageSends: ["style:", "hr"],
referencedClasses: []
}),
smalltalk.MaglevWindow);

smalltalk.addMethod(
unescape('_renderOn_'),
smalltalk.method({
selector: unescape('renderOn%3A'),
category: 'rendering',
fn: function (html){
var self=this;
(($receiver = self['@container']) == nil || $receiver == undefined) ? (function(){(self['@container']=smalltalk.send(html, "_div", []));return smalltalk.send(self, "_prepareWindow", []);})() : $receiver;
(function($rec){smalltalk.send($rec, "_class_", ["component window"]);return smalltalk.send($rec, "_with_", [(function(){return (function($rec){smalltalk.send($rec, "_class_", ["nowrap"]);return smalltalk.send($rec, "_with_", [(function(){smalltalk.send(self, "_renderWindowTitleOn_", [html]);return smalltalk.send(self, "_renderWindowContentOn_", [html]);})]);})(smalltalk.send(html, "_div", []));})]);})(self['@container']);
return self;},
args: ["html"],
source: unescape('renderOn%3A%20html%0A%09container%20ifNil%3A%20%5B%0A%09%09container%20%3A%3D%20html%20div.%0A%09%09self%20prepareWindow%5D.%0A%09container%0A%09%09class%3A%20%27component%20window%27%3B%0A%09%09with%3A%20%5B%0A%09%09%09html%20div%0A%09%09%09%09class%3A%20%27nowrap%27%3B%0A%09%09%09%09with%3A%20%5B%0A%09%09%09%09%09self%20renderWindowTitleOn%3A%20html.%0A%09%09%09%09%09self%20renderWindowContentOn%3A%20html%5D%5D.'),
messageSends: ["ifNil:", "div", "prepareWindow", "class:", "with:", "renderWindowTitleOn:", "renderWindowContentOn:"],
referencedClasses: []
}),
smalltalk.MaglevWindow);

smalltalk.addMethod(
unescape('_renderReplace'),
smalltalk.method({
selector: unescape('renderReplace'),
category: 'rendering',
fn: function (){
var self=this;
smalltalk.send(self, "_renderOn_", [smalltalk.send((smalltalk.HTMLCanvas || HTMLCanvas), "_onJQuery_", [smalltalk.send(self['@container'], "_asJQuery", [])])]);
return self;},
args: [],
source: unescape('renderReplace%0A%09self%20renderOn%3A%20%28HTMLCanvas%20onJQuery%3A%20container%20asJQuery%29.'),
messageSends: ["renderOn:", "onJQuery:", "asJQuery"],
referencedClasses: ["HTMLCanvas"]
}),
smalltalk.MaglevWindow);

smalltalk.addMethod(
unescape('_renderWindowContentOn_'),
smalltalk.method({
selector: unescape('renderWindowContentOn%3A'),
category: 'rendering',
fn: function (html){
var self=this;

return self;},
args: ["html"],
source: unescape('renderWindowContentOn%3A%20html'),
messageSends: [],
referencedClasses: []
}),
smalltalk.MaglevWindow);

smalltalk.addMethod(
unescape('_renderWindowTitleContentOn_'),
smalltalk.method({
selector: unescape('renderWindowTitleContentOn%3A'),
category: 'rendering',
fn: function (html){
var self=this;
smalltalk.send(html, "_with_", ["A new window"]);
smalltalk.send(self, "_renderHeightPlaceholderOn_", [html]);
smalltalk.send(self, "_renderCloseButtonOn_", [html]);
return self;},
args: ["html"],
source: unescape('renderWindowTitleContentOn%3A%20html%0A%09html%20with%3A%20%27A%20new%20window%27.%0A%09self%20renderHeightPlaceholderOn%3A%20html.%0A%09self%20renderCloseButtonOn%3A%20html.'),
messageSends: ["with:", "renderHeightPlaceholderOn:", "renderCloseButtonOn:"],
referencedClasses: []
}),
smalltalk.MaglevWindow);

smalltalk.addMethod(
unescape('_renderWindowTitleOn_'),
smalltalk.method({
selector: unescape('renderWindowTitleOn%3A'),
category: 'rendering',
fn: function (html){
var self=this;
(function($rec){smalltalk.send($rec, "_class_", [unescape("window-title")]);return smalltalk.send($rec, "_with_", [(function(){return (function($rec){smalltalk.send($rec, "_class_", [unescape("window-title-content")]);return smalltalk.send($rec, "_with_", [(function(){return smalltalk.send(self, "_renderWindowTitleContentOn_", [html]);})]);})(smalltalk.send(html, "_span", []));})]);})(smalltalk.send(html, "_div", []));
return self;},
args: ["html"],
source: unescape('renderWindowTitleOn%3A%20html%0A%09html%20div%0A%09%09class%3A%20%27window-title%27%3B%0A%09%09with%3A%20%5Bhtml%20span%0A%09%09%09%09class%3A%20%27window-title-content%27%3B%0A%09%09%09%09with%3A%20%5Bself%20renderWindowTitleContentOn%3A%20html%5D%5D.'),
messageSends: ["class:", "with:", "renderWindowTitleContentOn:", "span", "div"],
referencedClasses: []
}),
smalltalk.MaglevWindow);

smalltalk.addMethod(
unescape('_replace_'),
smalltalk.method({
selector: unescape('replace%3A'),
category: 'interactions',
fn: function (aWindow){
var self=this;
smalltalk.send(aWindow, "_clear", []);
(self['@container']=smalltalk.send(aWindow, "_container", []));
return self;},
args: ["aWindow"],
source: unescape('replace%3A%20aWindow%0A%09aWindow%20clear.%0A%09container%20%3A%3D%20aWindow%20container.'),
messageSends: ["clear", "container"],
referencedClasses: []
}),
smalltalk.MaglevWindow);

smalltalk.addMethod(
unescape('_top_'),
smalltalk.method({
selector: unescape('top%3A'),
category: 'attributes',
fn: function (aValue){
var self=this;
smalltalk.send(self['@container'], "_top_", [aValue]);
return self;},
args: ["aValue"],
source: unescape('top%3A%20aValue%0A%09container%20top%3A%20aValue.'),
messageSends: ["top:"],
referencedClasses: []
}),
smalltalk.MaglevWindow);


smalltalk.addMethod(
unescape('_newReplace_'),
smalltalk.method({
selector: unescape('newReplace%3A'),
category: 'instance creation',
fn: function (aWindow){
var self=this;
return (function($rec){smalltalk.send($rec, "_replace_", [aWindow]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(self, "_new", []));
return self;},
args: ["aWindow"],
source: unescape('newReplace%3A%20aWindow%0A%09%5E%20self%20new%0A%09%09replace%3A%20aWindow%3B%0A%09%09yourself'),
messageSends: ["replace:", "yourself", "new"],
referencedClasses: []
}),
smalltalk.MaglevWindow.klass);


smalltalk.addClass('MaglevObjectWindow', smalltalk.MaglevWindow, ['container', 'object', 'classObject', 'tabs', 'captions', 'tabsContainer'], 'Maglev-Database-Explorer');
smalltalk.addMethod(
unescape('_captions'),
smalltalk.method({
selector: unescape('captions'),
category: 'accessing',
fn: function (){
var self=this;
(($receiver = self['@captions']) == nil || $receiver == undefined) ? (function(){return (self['@captions']=smalltalk.send((smalltalk.Dictionary || Dictionary), "_new", []));})() : $receiver;
return self['@captions'];
return self;},
args: [],
source: unescape('captions%0A%09captions%20ifNil%3A%20%5Bcaptions%20%3A%3D%20Dictionary%20new%5D.%0A%09%5E%20captions'),
messageSends: ["ifNil:", "new"],
referencedClasses: ["Dictionary"]
}),
smalltalk.MaglevObjectWindow);

smalltalk.addMethod(
unescape('_checkAddConnectionTo_'),
smalltalk.method({
selector: unescape('checkAddConnectionTo%3A'),
category: 'rendering',
fn: function (aWindow){
var self=this;
smalltalk.send(self['@object'], "_instVarsDo_", [(function(ivName, ivValue){return ((($receiver = smalltalk.send(ivValue, "__eq_eq", [smalltalk.send(aWindow, "_object", [])])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self, "_connectTo_as_with_", [aWindow, smalltalk.symbolFor("iv"), smalltalk.send(ivName, "_inspection", [])]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(self, "_connectTo_as_with_", [aWindow, smalltalk.symbolFor("iv"), smalltalk.send(ivName, "_inspection", [])]);})]));})]);
((($receiver = smalltalk.send(smalltalk.send(self['@object'], "_classObject", []), "__eq_eq", [smalltalk.send(aWindow, "_object", [])])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self, "_connectTo_as_with_", [aWindow, smalltalk.symbolFor("class"), nil]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(self, "_connectTo_as_with_", [aWindow, smalltalk.symbolFor("class"), nil]);})]));
return self;},
args: ["aWindow"],
source: unescape('checkAddConnectionTo%3A%20aWindow%0A%09object%20instVarsDo%3A%20%5B%3AivName%20%3AivValue%20%7C%0A%09%09ivValue%20%3D%3D%20aWindow%20object%20ifTrue%3A%20%5Bself%20connectTo%3A%20aWindow%20as%3A%20%23iv%20with%3A%20ivName%20inspection%5D%5D.%0A%09object%20classObject%20%3D%3D%20aWindow%20object%20%0A%09%09ifTrue%3A%20%5Bself%20connectTo%3A%20aWindow%20as%3A%20%23class%20with%3A%20nil%5D.'),
messageSends: ["instVarsDo:", "ifTrue:", unescape("%3D%3D"), "object", "connectTo:as:with:", "inspection", "classObject"],
referencedClasses: []
}),
smalltalk.MaglevObjectWindow);

smalltalk.addMethod(
unescape('_closeWindow'),
smalltalk.method({
selector: unescape('closeWindow'),
category: 'interactions',
fn: function (){
var self=this;
smalltalk.send(smalltalk.send((smalltalk.MaglevObjectSpace || MaglevObjectSpace), "_instance", []), "_unregisterWindow_", [self]);
smalltalk.send(self, "_closeWindow", [], smalltalk.MaglevWindow);
return self;},
args: [],
source: unescape('closeWindow%0A%09MaglevObjectSpace%20instance%20unregisterWindow%3A%20self.%0A%09super%20closeWindow.'),
messageSends: ["unregisterWindow:", "instance", "closeWindow"],
referencedClasses: ["MaglevObjectSpace"]
}),
smalltalk.MaglevObjectWindow);

smalltalk.addMethod(
unescape('_container'),
smalltalk.method({
selector: unescape('container'),
category: 'accessing',
fn: function (){
var self=this;
return self['@container'];
return self;},
args: [],
source: unescape('container%0A%09%5E%20container'),
messageSends: [],
referencedClasses: []
}),
smalltalk.MaglevObjectWindow);

smalltalk.addMethod(
unescape('_contentTabs'),
smalltalk.method({
selector: unescape('contentTabs'),
category: 'rendering',
fn: function (){
var self=this;
var result=nil;
(result=smalltalk.send((smalltalk.Dictionary || Dictionary), "_new", []));
((($receiver = smalltalk.send(smalltalk.send(self, "_object", []), "_hasInstVars", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(result, "_at_put_", ["Instance Variables", smalltalk.symbolFor("renderInstanceVariablesOn:")]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(result, "_at_put_", ["Instance Variables", smalltalk.symbolFor("renderInstanceVariablesOn:")]);})]));
return result;
return self;},
args: [],
source: unescape('contentTabs%0A%09%7Cresult%7C%0A%09result%20%3A%3D%20Dictionary%20new.%0A%09self%20object%20hasInstVars%20%0A%09%09ifTrue%3A%20%5Bresult%20at%3A%20%27Instance%20Variables%27%20put%3A%20%23renderInstanceVariablesOn%3A%5D.%0A%09%5E%20result'),
messageSends: ["new", "ifTrue:", "hasInstVars", "object", "at:put:"],
referencedClasses: ["Dictionary"]
}),
smalltalk.MaglevObjectWindow);

smalltalk.addMethod(
unescape('_object'),
smalltalk.method({
selector: unescape('object'),
category: 'accessing',
fn: function (){
var self=this;
return self['@object'];
return self;},
args: [],
source: unescape('object%0A%09%5E%20object'),
messageSends: [],
referencedClasses: []
}),
smalltalk.MaglevObjectWindow);

smalltalk.addMethod(
unescape('_object_'),
smalltalk.method({
selector: unescape('object%3A'),
category: 'accessing',
fn: function (anObject){
var self=this;
(self['@object']=anObject);
(self['@classObject']=smalltalk.send(anObject, "_classObject", []));
return self;},
args: ["anObject"],
source: unescape('object%3A%20anObject%0A%09object%20%3A%3D%20anObject.%0A%09classObject%20%3A%3D%20anObject%20classObject.'),
messageSends: ["classObject"],
referencedClasses: []
}),
smalltalk.MaglevObjectWindow);

smalltalk.addMethod(
unescape('_prepareWindow'),
smalltalk.method({
selector: unescape('prepareWindow'),
category: 'interactions',
fn: function (){
var self=this;
smalltalk.send(smalltalk.send(smalltalk.send(self, "_prepareWindow", [], smalltalk.MaglevWindow), "_MaglevObjectSpace", []), "_registerWindow_", [self]);
return self;},
args: [],
source: unescape('prepareWindow%0A%09super%20prepareWindow%0A%09MaglevObjectSpace%20registerWindow%3A%20self.'),
messageSends: ["registerWindow:", "MaglevObjectSpace", "prepareWindow"],
referencedClasses: []
}),
smalltalk.MaglevObjectWindow);

smalltalk.addMethod(
unescape('_renderInstanceVariablesOn_'),
smalltalk.method({
selector: unescape('renderInstanceVariablesOn%3A'),
category: 'rendering',
fn: function (html){
var self=this;
smalltalk.send(html, "_with_", [smalltalk.send((smalltalk.MaglevTable || MaglevTable), "_newAssociationDictFor_with_", [smalltalk.send(self, "_object", []), smalltalk.symbolFor("instVars")])]);
return self;},
args: ["html"],
source: unescape('renderInstanceVariablesOn%3A%20html%0A%09html%20with%3A%20%28MaglevTable%20newAssociationDictFor%3A%20self%20object%20with%3A%20%23instVars%29.'),
messageSends: ["with:", "newAssociationDictFor:with:", "object"],
referencedClasses: ["MaglevTable"]
}),
smalltalk.MaglevObjectWindow);

smalltalk.addMethod(
unescape('_renderWindowContentOn_'),
smalltalk.method({
selector: unescape('renderWindowContentOn%3A'),
category: 'rendering',
fn: function (html){
var self=this;
var allTabs=nil;
var firstCaption=nil;
(allTabs=smalltalk.send(self, "_contentTabs", []));
((($receiver = ((($receiver = smalltalk.send(allTabs, "_size", [])).klass === smalltalk.Number) ? $receiver >(0) : smalltalk.send($receiver, "__gt", [(0)]))).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (function($rec){smalltalk.send($rec, "_class_", [unescape("nav%20nav-tabs")]);smalltalk.send($rec, "_style_", [unescape("display%3A%20inline-block%3B%20margin-bottom%3A%200px%3B%20margin-top%3A%205px%3B%20width%3A%20100%25%3B")]);return smalltalk.send($rec, "_with_", [(function(){return smalltalk.send(smalltalk.send(self, "_contentTabs", []), "_keysAndValuesDo_", [(function(caption, generator){var capEl=nil;
(($receiver = firstCaption) == nil || $receiver == undefined) ? (function(){return (firstCaption=caption);})() : $receiver;(capEl=smalltalk.send(smalltalk.send(html, "_li", []), "_with_", [(function(){return (function($rec){smalltalk.send($rec, "_href_", [unescape("%23")]);smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send(self, "_showTab_", [caption]);})]);return smalltalk.send($rec, "_with_", [caption]);})(smalltalk.send(html, "_a", []));})]));return smalltalk.send(smalltalk.send(self, "_captions", []), "_at_put_", [caption, capEl]);})]);})]);})(smalltalk.send(html, "_ul", []));})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return (function($rec){smalltalk.send($rec, "_class_", [unescape("nav%20nav-tabs")]);smalltalk.send($rec, "_style_", [unescape("display%3A%20inline-block%3B%20margin-bottom%3A%200px%3B%20margin-top%3A%205px%3B%20width%3A%20100%25%3B")]);return smalltalk.send($rec, "_with_", [(function(){return smalltalk.send(smalltalk.send(self, "_contentTabs", []), "_keysAndValuesDo_", [(function(caption, generator){var capEl=nil;
(($receiver = firstCaption) == nil || $receiver == undefined) ? (function(){return (firstCaption=caption);})() : $receiver;(capEl=smalltalk.send(smalltalk.send(html, "_li", []), "_with_", [(function(){return (function($rec){smalltalk.send($rec, "_href_", [unescape("%23")]);smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send(self, "_showTab_", [caption]);})]);return smalltalk.send($rec, "_with_", [caption]);})(smalltalk.send(html, "_a", []));})]));return smalltalk.send(smalltalk.send(self, "_captions", []), "_at_put_", [caption, capEl]);})]);})]);})(smalltalk.send(html, "_ul", []));})]));
(self['@tabsContainer']=smalltalk.send(html, "_div", []));
(($receiver = firstCaption) != nil && $receiver != undefined) ? (function(){return smalltalk.send(self, "_showTab_", [firstCaption]);})() : nil;
return self;},
args: ["html"],
source: unescape('renderWindowContentOn%3A%20html%0A%09%7CallTabs%20firstCaption%7C%0A%09allTabs%20%3A%3D%20self%20contentTabs.%0A%09allTabs%20size%20%3E%200%20ifTrue%3A%20%5B%0A%09%09html%20ul%0A%09%09%09class%3A%20%27nav%20nav-tabs%27%3B%0A%09%09%09style%3A%20%27display%3A%20inline-block%3B%20margin-bottom%3A%200px%3B%20margin-top%3A%205px%3B%20width%3A%20100%25%3B%27%3B%0A%09%09%09with%3A%20%5B%0A%09%09%09self%20contentTabs%20keysAndValuesDo%3A%20%5B%3Acaption%20%3Agenerator%20%7C%20%7CcapEl%7C%0A%09%09%09%09firstCaption%20ifNil%3A%20%5BfirstCaption%20%3A%3D%20caption%5D.%0A%09%09%09%09capEl%20%3A%3D%20html%20li%20with%3A%20%5B%0A%09%09%09%09%09html%20a%0A%09%09%09%09%09%09href%3A%20%27%23%27%3B%0A%09%09%09%09%09%09onClick%3A%20%5Bself%20showTab%3A%20caption%5D%3B%0A%09%09%09%09%09%09with%3A%20caption%5D.%0A%09%09%09%09self%20captions%20at%3A%20caption%20put%3A%20capEl%5D%5D%5D.%0A%09tabsContainer%20%3A%3D%20html%20div.%0A%09firstCaption%20ifNotNil%3A%20%5Bself%20showTab%3A%20firstCaption%5D.'),
messageSends: ["contentTabs", "ifTrue:", unescape("%3E"), "size", "class:", "style:", "with:", "keysAndValuesDo:", "ifNil:", "li", "href:", "onClick:", "showTab:", "a", "at:put:", "captions", "ul", "div", "ifNotNil:"],
referencedClasses: []
}),
smalltalk.MaglevObjectWindow);

smalltalk.addMethod(
unescape('_renderWindowTitleContentOn_'),
smalltalk.method({
selector: unescape('renderWindowTitleContentOn%3A'),
category: 'rendering',
fn: function (html){
var self=this;
smalltalk.send(html, "_with_", [smalltalk.send(self['@object'], "_inlineViewComponentShort", [])]);
smalltalk.send(self, "_renderHeightPlaceholderOn_", [html]);
(function($rec){smalltalk.send($rec, "_class_", [unescape("right-inline-block")]);return smalltalk.send($rec, "_with_", [(function(){(function($rec){smalltalk.send($rec, "_with_", [" : "]);return smalltalk.send($rec, "_with_", [smalltalk.send(self['@classObject'], "_inlineViewComponent", [])]);})(html);return smalltalk.send(self, "_renderCloseButtonOn_", [html]);})]);})(smalltalk.send(html, "_div", []));
return self;},
args: ["html"],
source: unescape('renderWindowTitleContentOn%3A%20html%0A%09html%20with%3A%20object%20inlineViewComponentShort.%0A%09self%20renderHeightPlaceholderOn%3A%20html.%0A%09html%20div%0A%09%09class%3A%20%27right-inline-block%27%3B%0A%09%09with%3A%20%5B%0A%09%09%09html%20%0A%09%09%09%09with%3A%20%27%20%3A%20%27%3B%0A%09%09%09%09with%3A%20classObject%20inlineViewComponent.%0A%09%09%09self%20renderCloseButtonOn%3A%20html%5D.'),
messageSends: ["with:", "inlineViewComponentShort", "renderHeightPlaceholderOn:", "class:", "inlineViewComponent", "renderCloseButtonOn:", "div"],
referencedClasses: []
}),
smalltalk.MaglevObjectWindow);

smalltalk.addMethod(
unescape('_replace_'),
smalltalk.method({
selector: unescape('replace%3A'),
category: 'interactions',
fn: function (aWindow){
var self=this;
smalltalk.send(self, "_replace_", [aWindow], smalltalk.MaglevWindow);
((($receiver = smalltalk.send(aWindow, "_isWaitingWindow", [])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return smalltalk.send(smalltalk.send((smalltalk.MaglevObjectSpace || MaglevObjectSpace), "_instance", []), "_unregisterWindow_", [aWindow]);})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return smalltalk.send(smalltalk.send((smalltalk.MaglevObjectSpace || MaglevObjectSpace), "_instance", []), "_unregisterWindow_", [aWindow]);})]));
smalltalk.send(smalltalk.send((smalltalk.MaglevObjectSpace || MaglevObjectSpace), "_instance", []), "_registerWindow_", [self]);
return self;},
args: ["aWindow"],
source: unescape('replace%3A%20aWindow%0A%09super%20replace%3A%20aWindow.%0A%09aWindow%20isWaitingWindow%0A%09%09ifFalse%3A%20%5BMaglevObjectSpace%20instance%20unregisterWindow%3A%20aWindow%5D.%0A%09MaglevObjectSpace%20instance%20registerWindow%3A%20self.'),
messageSends: ["replace:", "ifFalse:", "isWaitingWindow", "unregisterWindow:", "instance", "registerWindow:"],
referencedClasses: ["MaglevObjectSpace"]
}),
smalltalk.MaglevObjectWindow);

smalltalk.addMethod(
unescape('_showTab_'),
smalltalk.method({
selector: unescape('showTab%3A'),
category: 'interactions',
fn: function (caption){
var self=this;
var allTabs=nil;
(allTabs=smalltalk.send(self, "_contentTabs", []));
((($receiver = smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(self, "_tabs", []), "_includesKey_", [caption]), "_not", []), "_and_", [(function(){return smalltalk.send(allTabs, "_includesKey_", [caption]);})])).klass === smalltalk.Boolean) ? ($receiver ? (function(){var tab=nil;
var html=nil;
(html=smalltalk.send((smalltalk.HTMLCanvas || HTMLCanvas), "_onJQuery_", [smalltalk.send(self['@tabsContainer'], "_asJQuery", [])]));(tab=smalltalk.send(smalltalk.send(html, "_div", []), "_with_", [(function(){return smalltalk.send(self, "_perform_withArguments_", [smalltalk.send(allTabs, "_at_", [caption]), [html]]);})]));return smalltalk.send(smalltalk.send(self, "_tabs", []), "_at_put_", [caption, tab]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){var tab=nil;
var html=nil;
(html=smalltalk.send((smalltalk.HTMLCanvas || HTMLCanvas), "_onJQuery_", [smalltalk.send(self['@tabsContainer'], "_asJQuery", [])]));(tab=smalltalk.send(smalltalk.send(html, "_div", []), "_with_", [(function(){return smalltalk.send(self, "_perform_withArguments_", [smalltalk.send(allTabs, "_at_", [caption]), [html]]);})]));return smalltalk.send(smalltalk.send(self, "_tabs", []), "_at_put_", [caption, tab]);})]));
smalltalk.send(smalltalk.send(self, "_tabs", []), "_keysAndValuesDo_", [(function(tabCaption, tab){var capEl=nil;
(capEl=smalltalk.send(smalltalk.send(self, "_captions", []), "_at_", [tabCaption]));return ((($receiver = smalltalk.send(caption, "__eq", [tabCaption])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(tab, "_show", []);return smalltalk.send(capEl, "_addClass_", ["active"]);})() : (function(){smalltalk.send(tab, "_hide", []);return smalltalk.send(capEl, "_removeClass_", ["active"]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){smalltalk.send(tab, "_show", []);return smalltalk.send(capEl, "_addClass_", ["active"]);}), (function(){smalltalk.send(tab, "_hide", []);return smalltalk.send(capEl, "_removeClass_", ["active"]);})]));})]);
return false;
return self;},
args: ["caption"],
source: unescape('showTab%3A%20caption%0A%09%7CallTabs%7C%0A%09allTabs%20%3A%3D%20self%20contentTabs.%0A%09%22Lazy%20generate%20new%20tabs.%22%0A%09%28%28self%20tabs%20includesKey%3A%20caption%29%20not%20and%3A%20%5BallTabs%20includesKey%3A%20caption%5D%29%0A%09%09ifTrue%3A%20%5B%20%7Ctab%20html%7C%0A%09%09%09html%20%3A%3D%20HTMLCanvas%20onJQuery%3A%20tabsContainer%20asJQuery.%0A%09%09%09tab%20%3A%3D%20html%20div%0A%09%09%09%09with%3A%20%5Bself%20perform%3A%20%28allTabs%20at%3A%20caption%29%20withArguments%3A%20%7Bhtml%7D%5D.%0A%09%09%09self%20tabs%20at%3A%20caption%20put%3A%20tab%5D.%0A%09self%20tabs%20keysAndValuesDo%3A%20%5B%3AtabCaption%20%3Atab%20%7C%20%7CcapEl%7C%0A%09%09capEl%20%3A%3D%20self%20captions%20at%3A%20tabCaption.%0A%09%09caption%20%3D%20tabCaption%0A%09%09%09ifTrue%3A%20%5B%0A%09%09%09%09tab%20show.%0A%09%09%09%09capEl%20addClass%3A%20%27active%27%5D%0A%09%09%09ifFalse%3A%20%5B%0A%09%09%09%09tab%20hide.%0A%09%09%09%09capEl%20removeClass%3A%20%27active%27%5D%5D.%0A%09%22return%20false%20to%20avoid%20scrolling%20to%20the%20top%22%0A%09%5E%20false'),
messageSends: ["contentTabs", "ifTrue:", "and:", "not", "includesKey:", "tabs", "onJQuery:", "asJQuery", "with:", "div", "perform:withArguments:", "at:", "at:put:", "keysAndValuesDo:", "captions", "ifTrue:ifFalse:", unescape("%3D"), "show", "addClass:", "hide", "removeClass:"],
referencedClasses: ["HTMLCanvas"]
}),
smalltalk.MaglevObjectWindow);

smalltalk.addMethod(
unescape('_tabs'),
smalltalk.method({
selector: unescape('tabs'),
category: 'accessing',
fn: function (){
var self=this;
(($receiver = self['@tabs']) == nil || $receiver == undefined) ? (function(){return (self['@tabs']=smalltalk.send((smalltalk.Dictionary || Dictionary), "_new", []));})() : $receiver;
return self['@tabs'];
return self;},
args: [],
source: unescape('tabs%0A%09tabs%20ifNil%3A%20%5Btabs%20%3A%3D%20Dictionary%20new%5D.%0A%09%5E%20tabs'),
messageSends: ["ifNil:", "new"],
referencedClasses: ["Dictionary"]
}),
smalltalk.MaglevObjectWindow);


smalltalk.addMethod(
unescape('_newReplace_with_'),
smalltalk.method({
selector: unescape('newReplace%3Awith%3A'),
category: 'instance creation',
fn: function (aWindow, anObject){
var self=this;
return (function($rec){smalltalk.send($rec, "_object_", [anObject]);smalltalk.send($rec, "_replace_", [aWindow]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(self, "_new", []));
return self;},
args: ["aWindow", "anObject"],
source: unescape('newReplace%3A%20aWindow%20with%3A%20anObject%0A%09%5E%20self%20new%0A%09%09object%3A%20anObject%3B%0A%09%09replace%3A%20aWindow%3B%0A%09%09yourself'),
messageSends: ["object:", "replace:", "yourself", "new"],
referencedClasses: []
}),
smalltalk.MaglevObjectWindow.klass);


smalltalk.addClass('MaglevArrayWindow', smalltalk.MaglevObjectWindow, [], 'Maglev-Database-Explorer');
smalltalk.addMethod(
unescape('_checkAddConnectionTo_'),
smalltalk.method({
selector: unescape('checkAddConnectionTo%3A'),
category: 'rendering',
fn: function (aWindow){
var self=this;
smalltalk.send(self, "_checkAddConnectionTo_", [aWindow], smalltalk.MaglevObjectWindow);
smalltalk.send(smalltalk.send(self['@object'], "_elements", []), "_keysAndValuesDo_", [(function(idx, value){return ((($receiver = smalltalk.send(value, "__eq_eq", [smalltalk.send(aWindow, "_object", [])])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self, "_connectTo_as_with_", [aWindow, smalltalk.symbolFor("arrayElement"), idx]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(self, "_connectTo_as_with_", [aWindow, smalltalk.symbolFor("arrayElement"), idx]);})]));})]);
return self;},
args: ["aWindow"],
source: unescape('checkAddConnectionTo%3A%20aWindow%0A%09super%20checkAddConnectionTo%3A%20aWindow.%0A%09object%20elements%20keysAndValuesDo%3A%20%5B%3Aidx%20%3Avalue%20%7C%0A%09%09value%20%3D%3D%20aWindow%20object%20ifTrue%3A%20%5Bself%20connectTo%3A%20aWindow%20as%3A%20%23arrayElement%20with%3A%20idx%5D%5D.'),
messageSends: ["checkAddConnectionTo:", "keysAndValuesDo:", "elements", "ifTrue:", unescape("%3D%3D"), "object", "connectTo:as:with:"],
referencedClasses: []
}),
smalltalk.MaglevArrayWindow);

smalltalk.addMethod(
unescape('_contentTabs'),
smalltalk.method({
selector: unescape('contentTabs'),
category: 'rendering',
fn: function (){
var self=this;
var result=nil;
(result=smalltalk.send(self, "_contentTabs", [], smalltalk.MaglevObjectWindow));
((($receiver = smalltalk.send(smalltalk.send(self, "_object", []), "_hasElements", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(result, "_at_put_", ["Elements", smalltalk.symbolFor("renderArrayElementsOn:")]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(result, "_at_put_", ["Elements", smalltalk.symbolFor("renderArrayElementsOn:")]);})]));
return result;
return self;},
args: [],
source: unescape('contentTabs%0A%09%7Cresult%7C%0A%09result%20%3A%3D%20super%20contentTabs.%0A%09self%20object%20hasElements%20%0A%09%09ifTrue%3A%20%5Bresult%20at%3A%20%27Elements%27%20put%3A%20%23renderArrayElementsOn%3A%5D.%0A%09%5E%20result'),
messageSends: ["contentTabs", "ifTrue:", "hasElements", "object", "at:put:"],
referencedClasses: []
}),
smalltalk.MaglevArrayWindow);

smalltalk.addMethod(
unescape('_renderArrayElementsOn_'),
smalltalk.method({
selector: unescape('renderArrayElementsOn%3A'),
category: 'rendering',
fn: function (html){
var self=this;
smalltalk.send(html, "_with_", [smalltalk.send((smalltalk.MaglevTable || MaglevTable), "_newFor_with_", [smalltalk.send(self, "_object", []), smalltalk.symbolFor("elements")])]);
return self;},
args: ["html"],
source: unescape('renderArrayElementsOn%3A%20html%0A%09html%20with%3A%20%28MaglevTable%20newFor%3A%20self%20object%20with%3A%20%23elements%29.'),
messageSends: ["with:", "newFor:with:", "object"],
referencedClasses: ["MaglevTable"]
}),
smalltalk.MaglevArrayWindow);



smalltalk.addClass('MaglevFixnumWindow', smalltalk.MaglevObjectWindow, [], 'Maglev-Database-Explorer');


smalltalk.addClass('MaglevFloatWindow', smalltalk.MaglevObjectWindow, [], 'Maglev-Database-Explorer');


smalltalk.addClass('MaglevHashWindow', smalltalk.MaglevObjectWindow, [], 'Maglev-Database-Explorer');
smalltalk.addMethod(
unescape('_checkAddConnectionTo_'),
smalltalk.method({
selector: unescape('checkAddConnectionTo%3A'),
category: 'rendering',
fn: function (aWindow){
var self=this;
smalltalk.send(self, "_checkAddConnectionTo_", [aWindow], smalltalk.MaglevObjectWindow);
smalltalk.send(self['@object'], "_keysAndValuesDo_", [(function(key, value){((($receiver = smalltalk.send(key, "__eq_eq", [smalltalk.send(aWindow, "_object", [])])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self, "_connectTo_as_with_", [aWindow, smalltalk.symbolFor("hashKey"), smalltalk.send(unescape("self%5B...%5D%20%3D%20"), "__comma", [smalltalk.send(value, "_shortInspection", [])])]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(self, "_connectTo_as_with_", [aWindow, smalltalk.symbolFor("hashKey"), smalltalk.send(unescape("self%5B...%5D%20%3D%20"), "__comma", [smalltalk.send(value, "_shortInspection", [])])]);})]));return ((($receiver = smalltalk.send(value, "__eq_eq", [smalltalk.send(aWindow, "_object", [])])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self, "_connectTo_as_with_", [aWindow, smalltalk.symbolFor("hashValue"), smalltalk.send(smalltalk.send(unescape("self%5B"), "__comma", [smalltalk.send(key, "_shortInspection", [])]), "__comma", [unescape("%5D%20%3D%20...")])]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(self, "_connectTo_as_with_", [aWindow, smalltalk.symbolFor("hashValue"), smalltalk.send(smalltalk.send(unescape("self%5B"), "__comma", [smalltalk.send(key, "_shortInspection", [])]), "__comma", [unescape("%5D%20%3D%20...")])]);})]));})]);
return self;},
args: ["aWindow"],
source: unescape('checkAddConnectionTo%3A%20aWindow%0A%09super%20checkAddConnectionTo%3A%20aWindow.%0A%09object%20keysAndValuesDo%3A%20%5B%3Akey%20%3Avalue%20%7C%0A%09%09key%20%3D%3D%20aWindow%20object%20ifTrue%3A%20%5Bself%20connectTo%3A%20aWindow%20as%3A%20%23hashKey%20with%3A%20%27self%5B...%5D%20%3D%20%27%2C%20value%20shortInspection%5D.%0A%09%09value%20%3D%3D%20aWindow%20object%20ifTrue%3A%20%5Bself%20connectTo%3A%20aWindow%20as%3A%20%23hashValue%20with%3A%20%27self%5B%27%2C%20key%20shortInspection%2C%20%27%5D%20%3D%20...%27%5D%5D.'),
messageSends: ["checkAddConnectionTo:", "keysAndValuesDo:", "ifTrue:", unescape("%3D%3D"), "object", "connectTo:as:with:", unescape("%2C"), "shortInspection"],
referencedClasses: []
}),
smalltalk.MaglevHashWindow);

smalltalk.addMethod(
unescape('_contentTabs'),
smalltalk.method({
selector: unescape('contentTabs'),
category: 'rendering',
fn: function (){
var self=this;
var result=nil;
(result=smalltalk.send(self, "_contentTabs", [], smalltalk.MaglevObjectWindow));
((($receiver = smalltalk.send(smalltalk.send(self, "_object", []), "_hasElements", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(result, "_at_put_", ["Associations", smalltalk.symbolFor("renderHashElementsOn:")]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(result, "_at_put_", ["Associations", smalltalk.symbolFor("renderHashElementsOn:")]);})]));
return result;
return self;},
args: [],
source: unescape('contentTabs%0A%09%7Cresult%7C%0A%09result%20%3A%3D%20super%20contentTabs.%0A%09self%20object%20hasElements%20%0A%09%09ifTrue%3A%20%5Bresult%20at%3A%20%27Associations%27%20put%3A%20%23renderHashElementsOn%3A%5D.%0A%09%5E%20result'),
messageSends: ["contentTabs", "ifTrue:", "hasElements", "object", "at:put:"],
referencedClasses: []
}),
smalltalk.MaglevHashWindow);

smalltalk.addMethod(
unescape('_renderHashElementsOn_'),
smalltalk.method({
selector: unescape('renderHashElementsOn%3A'),
category: 'rendering',
fn: function (html){
var self=this;
smalltalk.send(html, "_with_", [smalltalk.send((smalltalk.MaglevTable || MaglevTable), "_newAssociationDictFor_with_", [smalltalk.send(self, "_object", []), smalltalk.symbolFor("elements")])]);
return self;},
args: ["html"],
source: unescape('renderHashElementsOn%3A%20html%0A%09html%20with%3A%20%28MaglevTable%20newAssociationDictFor%3A%20self%20object%20with%3A%20%23elements%29.'),
messageSends: ["with:", "newAssociationDictFor:with:", "object"],
referencedClasses: ["MaglevTable"]
}),
smalltalk.MaglevHashWindow);



smalltalk.addClass('MaglevModuleWindow', smalltalk.MaglevObjectWindow, [], 'Maglev-Database-Explorer');
smalltalk.addMethod(
unescape('_contentTabs'),
smalltalk.method({
selector: unescape('contentTabs'),
category: 'rendering',
fn: function (){
var self=this;
var result=nil;
(result=smalltalk.send(self, "_contentTabs", [], smalltalk.MaglevObjectWindow));
((($receiver = smalltalk.send(smalltalk.send(self, "_object", []), "_hasConstants", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(result, "_at_put_", ["Constants", smalltalk.symbolFor("renderConstantsOn:")]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(result, "_at_put_", ["Constants", smalltalk.symbolFor("renderConstantsOn:")]);})]));
((($receiver = smalltalk.send(smalltalk.send(self, "_object", []), "_hasIncludedModules", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(result, "_at_put_", ["Included Modules", smalltalk.symbolFor("renderIncludedModulesOn:")]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(result, "_at_put_", ["Included Modules", smalltalk.symbolFor("renderIncludedModulesOn:")]);})]));
return result;
return self;},
args: [],
source: unescape('contentTabs%0A%09%7Cresult%7C%0A%09result%20%3A%3D%20super%20contentTabs.%0A%09self%20object%20hasConstants%20%0A%09%09ifTrue%3A%20%5Bresult%20at%3A%20%27Constants%27%20put%3A%20%23renderConstantsOn%3A%5D.%0A%09self%20object%20hasIncludedModules%0A%09%09ifTrue%3A%20%5Bresult%20at%3A%20%27Included%20Modules%27%20put%3A%20%23renderIncludedModulesOn%3A%5D.%0A%09%5E%20result'),
messageSends: ["contentTabs", "ifTrue:", "hasConstants", "object", "at:put:", "hasIncludedModules"],
referencedClasses: []
}),
smalltalk.MaglevModuleWindow);

smalltalk.addMethod(
unescape('_renderConstantsOn_'),
smalltalk.method({
selector: unescape('renderConstantsOn%3A'),
category: 'rendering',
fn: function (html){
var self=this;
smalltalk.send(html, "_with_", [smalltalk.send((smalltalk.MaglevTable || MaglevTable), "_newAssociationDictFor_with_", [smalltalk.send(self, "_object", []), smalltalk.symbolFor("constants")])]);
return self;},
args: ["html"],
source: unescape('renderConstantsOn%3A%20html%0A%09html%20with%3A%20%28MaglevTable%20newAssociationDictFor%3A%20self%20object%20with%3A%20%23constants%29.'),
messageSends: ["with:", "newAssociationDictFor:with:", "object"],
referencedClasses: ["MaglevTable"]
}),
smalltalk.MaglevModuleWindow);

smalltalk.addMethod(
unescape('_renderIncludedModulesOn_'),
smalltalk.method({
selector: unescape('renderIncludedModulesOn%3A'),
category: 'rendering',
fn: function (html){
var self=this;
smalltalk.send(html, "_with_", [smalltalk.send((smalltalk.MaglevTable || MaglevTable), "_newFor_with_", [smalltalk.send(self, "_object", []), smalltalk.symbolFor("includedModules")])]);
return self;},
args: ["html"],
source: unescape('renderIncludedModulesOn%3A%20html%0A%09html%20with%3A%20%28MaglevTable%20newFor%3A%20self%20object%20with%3A%20%23includedModules%29.'),
messageSends: ["with:", "newFor:with:", "object"],
referencedClasses: ["MaglevTable"]
}),
smalltalk.MaglevModuleWindow);



smalltalk.addClass('MaglevClassWindow', smalltalk.MaglevModuleWindow, ['categoryNamesSelect', 'selectorsSelect', 'selectors', 'rubySelectors', 'editorContainer', 'editor', 'waitingScreen', 'errorBox', 'envIdContainer', 'rubyIcon', 'stIcon', 'sourceLocationContainer', 'methodObject'], 'Maglev-Database-Explorer');
smalltalk.addMethod(
unescape('_bindCommands'),
smalltalk.method({
selector: unescape('bindCommands'),
category: 'initializing',
fn: function (){
var self=this;
var aceEditor=nil;
(aceEditor=self['@editor']);
 var commands = aceEditor.commands;
	commands.addCommand({
    		name: "save",
    		bindKey: {win: "Ctrl-S", mac: "Command-S"},
		exec: function() {self._commandSave();}}); ;
return self;},
args: [],
source: unescape('bindCommands%0A%09%7CaceEditor%7C%0A%09aceEditor%20%3A%3D%20editor.%0A%09%3C%20var%20commands%20%3D%20aceEditor.commands%3B%0A%09commands.addCommand%28%7B%0A%20%20%20%20%09%09name%3A%20%22save%22%2C%0A%20%20%20%20%09%09bindKey%3A%20%7Bwin%3A%20%22Ctrl-S%22%2C%20mac%3A%20%22Command-S%22%7D%2C%0A%09%09exec%3A%20function%28%29%20%7Bself._commandSave%28%29%3B%7D%7D%29%3B%20%3E.%0A'),
messageSends: [],
referencedClasses: []
}),
smalltalk.MaglevClassWindow);

smalltalk.addMethod(
unescape('_commandSave'),
smalltalk.method({
selector: unescape('commandSave'),
category: 'interactions',
fn: function (){
var self=this;
smalltalk.send(self['@errorBox'], "_hide", []);
smalltalk.send(smalltalk.send(self['@errorBox'], "_asJQuery", []), "_empty", []);
smalltalk.send(self['@object'], "_compileSmalltalkSourceCode_withCallback_", [smalltalk.send(self['@editor'], "_getValue", []), (function(success, obj){return ((($receiver = smalltalk.send(obj, "_isException", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self, "_signalFailure_", [obj]);})() : (function(){return smalltalk.send(self, "_signalSuccess", []);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(self, "_signalFailure_", [obj]);}), (function(){return smalltalk.send(self, "_signalSuccess", []);})]));})]);
return self;},
args: [],
source: unescape('commandSave%0A%09errorBox%20hide.%0A%09errorBox%20asJQuery%20empty.%0A%09object%20%0A%09%09compileSmalltalkSourceCode%3A%20editor%20getValue%20%0A%09%09withCallback%3A%20%5B%3Asuccess%20%3Aobj%20%7C%0A%09%09%09obj%20isException%0A%09%09%09%09ifTrue%3A%20%5Bself%20signalFailure%3A%20obj%5D%0A%09%09%09%09ifFalse%3A%20%5Bself%20signalSuccess%5D%5D.'),
messageSends: ["hide", "empty", "asJQuery", "compileSmalltalkSourceCode:withCallback:", "getValue", "ifTrue:ifFalse:", "isException", "signalFailure:", "signalSuccess"],
referencedClasses: []
}),
smalltalk.MaglevClassWindow);

smalltalk.addMethod(
unescape('_contentTabs'),
smalltalk.method({
selector: unescape('contentTabs'),
category: 'rendering',
fn: function (){
var self=this;
var result=nil;
(result=smalltalk.send(self, "_contentTabs", [], smalltalk.MaglevModuleWindow));
smalltalk.send(result, "_at_put_", ["Code", smalltalk.symbolFor("renderCodeTabOn:")]);
return result;
return self;},
args: [],
source: unescape('contentTabs%0A%09%7Cresult%7C%0A%09result%20%3A%3D%20super%20contentTabs.%0A%09result%20at%3A%20%27Code%27%20put%3A%20%23renderCodeTabOn%3A.%0A%09%5E%20result'),
messageSends: ["contentTabs", "at:put:"],
referencedClasses: []
}),
smalltalk.MaglevClassWindow);

smalltalk.addMethod(
unescape('_initializeEditor'),
smalltalk.method({
selector: unescape('initializeEditor'),
category: 'initializing',
fn: function (){
var self=this;
(self['@editor']=smalltalk.send((typeof ace == 'undefined' ? nil : ace), "_edit_", [smalltalk.send(smalltalk.send(self['@editorContainer'], "_asJQuery", []), "_at_", [(0)])]));
smalltalk.send(self['@editor'], "_setTheme_", [unescape("ace/theme/clouds")]);
smalltalk.send(smalltalk.send(self['@editor'], "_getSession", []), "_setMode_", [unescape("ace/mode/ruby")]);
smalltalk.send(self, "_mouseFix", []);
smalltalk.send(self, "_bindCommands", []);
return self;},
args: [],
source: unescape('initializeEditor%0A%09editor%20%3A%3D%20ace%20edit%3A%20%28editorContainer%20asJQuery%20at%3A%200%29.%0A%09editor%20setTheme%3A%20%27ace/theme/clouds%27.%0A%09editor%20getSession%20setMode%3A%20%27ace/mode/ruby%27.%0A%09self%20mouseFix.%0A%09self%20bindCommands.'),
messageSends: ["edit:", "at:", "asJQuery", "setTheme:", "setMode:", "getSession", "mouseFix", "bindCommands"],
referencedClasses: []
}),
smalltalk.MaglevClassWindow);

smalltalk.addMethod(
unescape('_mouseFix'),
smalltalk.method({
selector: unescape('mouseFix'),
category: 'initializing',
fn: function (){
var self=this;
 var editor = self['@editorContainer'];
	editor._asJQuery().mousedown(function (event) {
		event.preventDefault();
		return false;
	}); ;
return self;},
args: [],
source: unescape('mouseFix%0A%09%3C%20var%20editor%20%3D%20self%5B%27@editorContainer%27%5D%3B%0A%09editor._asJQuery%28%29.mousedown%28function%20%28event%29%20%7B%0A%09%09event.preventDefault%28%29%3B%0A%09%09return%20false%3B%0A%09%7D%29%3B%20%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.MaglevClassWindow);

smalltalk.addMethod(
unescape('_renderCodeTabOn_'),
smalltalk.method({
selector: unescape('renderCodeTabOn%3A'),
category: 'rendering',
fn: function (html){
var self=this;
smalltalk.send(smalltalk.send(html, "_root", []), "_style_", [unescape("width%3A%20100%25%3B")]);
(self['@categoryNamesSelect']=(function($rec){smalltalk.send($rec, "_size_", [(10)]);smalltalk.send($rec, "_style_", [unescape("width%3A%2050%25%3B")]);return smalltalk.send($rec, "_hide", []);})(smalltalk.send(html, "_select", [])));
(self['@selectorsSelect']=(function($rec){smalltalk.send($rec, "_size_", [(10)]);smalltalk.send($rec, "_style_", [unescape("width%3A%2050%25%3B")]);return smalltalk.send($rec, "_hide", []);})(smalltalk.send(html, "_select", [])));
(self['@waitingScreen']=smalltalk.send(smalltalk.send(html, "_div", []), "_with_", [(function(){return (function($rec){smalltalk.send($rec, "_with_", [smalltalk.send((smalltalk.MaglevIcon || MaglevIcon), "_wait", [])]);return smalltalk.send($rec, "_with_", [" loading..."]);})(html);})]));
(self['@editorContainer']=smalltalk.send(smalltalk.send(html, "_span", []), "_class_", [unescape("pull-left%20code-area")]));
smalltalk.send(smalltalk.send(html, "_div", []), "_style_", [unescape("clear%3A%20both%3B")]);
(self['@errorBox']=(function($rec){smalltalk.send($rec, "_class_", [unescape("alert%20alert-error")]);smalltalk.send($rec, "_style_", [unescape("margin-bottom%3A%200px%3B")]);return smalltalk.send($rec, "_hide", []);})(smalltalk.send(html, "_div", [])));
smalltalk.send(self, "_renderStatusBarOn_", [html]);
smalltalk.send(smalltalk.send(self, "_object", []), "_allSmalltalkSelectorsWithCallback_", [(function(success, obj){(self['@selectors']=obj);return smalltalk.send(smalltalk.send(self, "_object", []), "_allRubySelectorsWithCallback_", [(function(rSuccess, rObj){(self['@rubySelectors']=rObj);smalltalk.send(self, "_renderSelectorCategories", []);smalltalk.send(self, "_renderSelectors", []);smalltalk.send(self, "_initializeEditor", []);smalltalk.send(self['@selectorsSelect'], "_onChange_", [(function(){return smalltalk.send(self, "_renderSourceCode", []);})]);smalltalk.send(self['@categoryNamesSelect'], "_onChange_", [(function(){return smalltalk.send(self, "_renderSelectors", []);})]);smalltalk.send(self['@waitingScreen'], "_hide", []);smalltalk.send(self['@categoryNamesSelect'], "_show", []);return smalltalk.send(self['@selectorsSelect'], "_show", []);})]);})]);
return self;},
args: ["html"],
source: unescape('renderCodeTabOn%3A%20html%0A%09html%20root%0A%09%09style%3A%20%27width%3A%20100%25%3B%27.%0A%09categoryNamesSelect%20%3A%3D%20html%20select%0A%09%09size%3A%2010%3B%0A%09%09style%3A%20%27width%3A%2050%25%3B%27%3B%0A%09%09hide.%0A%09selectorsSelect%20%3A%3D%20html%20select%0A%09%09size%3A%2010%3B%0A%09%09style%3A%20%27width%3A%2050%25%3B%27%3B%0A%09%09hide.%0A%09waitingScreen%20%3A%3D%20html%20div%0A%09%09with%3A%20%5Bhtml%0A%09%09%09with%3A%20MaglevIcon%20wait%3B%0A%09%09%09with%3A%20%27%20loading...%27%5D.%0A%09editorContainer%20%3A%3D%20html%20span%0A%09%09class%3A%20%27pull-left%20code-area%27.%0A%09html%20div%20style%3A%20%27clear%3A%20both%3B%27.%0A%09errorBox%20%3A%3D%20html%20div%0A%09%09class%3A%20%27alert%20alert-error%27%3B%0A%09%09style%3A%20%27margin-bottom%3A%200px%3B%27%3B%0A%09%09hide.%0A%09self%20renderStatusBarOn%3A%20html.%0A%09self%20object%20allSmalltalkSelectorsWithCallback%3A%20%5B%3Asuccess%20%3Aobj%20%7C%0A%09%09selectors%20%3A%3D%20obj.%0A%09%09self%20object%20allRubySelectorsWithCallback%3A%20%5B%3ArSuccess%20%3ArObj%20%7C%0A%09%09%09rubySelectors%20%3A%3D%20rObj.%0A%09%09%09self%20renderSelectorCategories.%0A%09%09%09self%20renderSelectors.%0A%09%09%09self%20initializeEditor.%0A%09%09%09selectorsSelect%20onChange%3A%20%5Bself%20renderSourceCode%5D.%0A%09%09%09categoryNamesSelect%20onChange%3A%20%5Bself%20renderSelectors%5D.%0A%09%09%09waitingScreen%20hide.%0A%09%09%09categoryNamesSelect%20show.%0A%09%09%09selectorsSelect%20show%5D%5D.'),
messageSends: ["style:", "root", "size:", "hide", "select", "with:", "div", "wait", "class:", "span", "renderStatusBarOn:", "allSmalltalkSelectorsWithCallback:", "object", "allRubySelectorsWithCallback:", "renderSelectorCategories", "renderSelectors", "initializeEditor", "onChange:", "renderSourceCode", "show"],
referencedClasses: ["MaglevIcon"]
}),
smalltalk.MaglevClassWindow);

smalltalk.addMethod(
unescape('_renderMethodObject'),
smalltalk.method({
selector: unescape('renderMethodObject'),
category: 'rendering',
fn: function (){
var self=this;
var envId=nil;
smalltalk.send(self['@editor'], "_setValue_pos_", [smalltalk.send(self['@methodObject'], "_sourceString", []), (-1)]);
smalltalk.send(self['@editorContainer'], "_show", []);
smalltalk.send(self['@waitingScreen'], "_hide", []);
(envId=smalltalk.send(self['@methodObject'], "_environmentId", []));
smalltalk.send(smalltalk.send(self['@envIdContainer'], "_asJQuery", []), "_empty", []);
smalltalk.send(self['@envIdContainer'], "_with_", [envId]);
smalltalk.send(self['@sourceLocationContainer'], "_empty", []);
smalltalk.send(self['@sourceLocationContainer'], "_with_", [smalltalk.send(smalltalk.send(self['@methodObject'], "_filename", []), "_inspection", [])]);
((($receiver = smalltalk.send(envId, "__eq", [(0)])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(self['@stIcon'], "_show", []);return smalltalk.send(self['@rubyIcon'], "_hide", []);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(self['@stIcon'], "_show", []);return smalltalk.send(self['@rubyIcon'], "_hide", []);})]));
((($receiver = smalltalk.send(envId, "__eq", [(1)])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(self['@stIcon'], "_hide", []);return smalltalk.send(self['@rubyIcon'], "_show", []);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(self['@stIcon'], "_hide", []);return smalltalk.send(self['@rubyIcon'], "_show", []);})]));
((($receiver = ((($receiver = envId).klass === smalltalk.Number) ? $receiver >(1) : smalltalk.send($receiver, "__gt", [(1)]))).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(self['@stIcon'], "_hide", []);return smalltalk.send(self['@rubyIcon'], "_hide", []);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(self['@stIcon'], "_hide", []);return smalltalk.send(self['@rubyIcon'], "_hide", []);})]));
return self;},
args: [],
source: unescape('renderMethodObject%0A%09%7CenvId%7C%0A%09editor%20setValue%3A%20methodObject%20sourceString%20pos%3A%20-1.%0A%09editorContainer%20show.%0A%09waitingScreen%20hide.%0A%09envId%20%3A%3D%20methodObject%20environmentId.%0A%09envIdContainer%20asJQuery%20empty.%0A%09envIdContainer%20with%3A%20envId.%0A%09sourceLocationContainer%20empty.%0A%09sourceLocationContainer%20with%3A%20methodObject%20filename%20inspection.%0A%09envId%20%3D%200%20%0A%09%09ifTrue%3A%20%5BstIcon%20show.%20rubyIcon%20hide%5D.%0A%09envId%20%3D%201%20%0A%09%09ifTrue%3A%20%5BstIcon%20hide.%20rubyIcon%20show%5D.%0A%09envId%20%3E%201%0A%09%09ifTrue%3A%20%5BstIcon%20hide.%20rubyIcon%20hide%5D.%0A%09'),
messageSends: ["setValue:pos:", "sourceString", "show", "hide", "environmentId", "empty", "asJQuery", "with:", "inspection", "filename", "ifTrue:", unescape("%3D"), unescape("%3E")],
referencedClasses: []
}),
smalltalk.MaglevClassWindow);

smalltalk.addMethod(
unescape('_renderRubySourceCodeFor_'),
smalltalk.method({
selector: unescape('renderRubySourceCodeFor%3A'),
category: 'rendering',
fn: function (selectorString){
var self=this;
smalltalk.send(self['@object'], "_rubySourceCodeFor_withCallback_", [selectorString, (function(success, obj){(self['@methodObject']=obj);return smalltalk.send(self, "_renderMethodObject", []);})]);
return self;},
args: ["selectorString"],
source: unescape('renderRubySourceCodeFor%3A%20selectorString%0A%09object%20%0A%09%09rubySourceCodeFor%3A%20selectorString%20%0A%09%09withCallback%3A%20%5B%3Asuccess%20%3Aobj%20%7C%0A%09%09%09methodObject%20%3A%3D%20obj.%0A%09%09%09self%20renderMethodObject%5D.'),
messageSends: ["rubySourceCodeFor:withCallback:", "renderMethodObject"],
referencedClasses: []
}),
smalltalk.MaglevClassWindow);

smalltalk.addMethod(
unescape('_renderSelectorCategories'),
smalltalk.method({
selector: unescape('renderSelectorCategories'),
category: 'rendering',
fn: function (){
var self=this;
var html=nil;
smalltalk.send(smalltalk.send(self['@categoryNamesSelect'], "_asJQuery", []), "_empty", []);
(html=smalltalk.send((smalltalk.HTMLCanvas || HTMLCanvas), "_onJQuery_", [smalltalk.send(self['@categoryNamesSelect'], "_asJQuery", [])]));
smalltalk.send(html, "_with_", [(function(){return smalltalk.send(smalltalk.send(html, "_option", []), "_with_", [unescape("%28all%20Ruby%29")]);})]);
smalltalk.send(html, "_with_", [(function(){return smalltalk.send(smalltalk.send(html, "_option", []), "_with_", [unescape("%28all%20Smalltalk%29")]);})]);
smalltalk.send(self['@selectors'], "_keysAndValuesDo_", [(function(category, catSelectors){return smalltalk.send(html, "_with_", [(function(){return smalltalk.send(smalltalk.send(html, "_option", []), "_with_", [smalltalk.send(category, "_string", [])]);})]);})]);
smalltalk.send(smalltalk.send(self['@categoryNamesSelect'], "_asJQuery", []), "_val_", [unescape("%28all%20Smalltalk%29")]);
smalltalk.send(self, "_sortList_", [self['@categoryNamesSelect']]);
return self;},
args: [],
source: unescape('renderSelectorCategories%0A%09%7Chtml%7C%0A%09categoryNamesSelect%20asJQuery%20empty.%0A%09html%20%3A%3D%20HTMLCanvas%20onJQuery%3A%20categoryNamesSelect%20asJQuery.%0A%09html%20with%3A%20%5Bhtml%20option%20with%3A%20%27%28all%20Ruby%29%27%5D.%0A%09html%20with%3A%20%5Bhtml%20option%20with%3A%20%27%28all%20Smalltalk%29%27%5D.%0A%09selectors%20keysAndValuesDo%3A%20%5B%3Acategory%20%3AcatSelectors%20%7C%0A%09%09html%20%0A%09%09%09with%3A%20%5Bhtml%20option%0A%09%09%09%09with%3A%20category%20string%5D%5D.%0A%09categoryNamesSelect%20asJQuery%20val%3A%20%27%28all%20Smalltalk%29%27.%0A%09self%20sortList%3A%20categoryNamesSelect.'),
messageSends: ["empty", "asJQuery", "onJQuery:", "with:", "option", "keysAndValuesDo:", "string", "val:", "sortList:"],
referencedClasses: ["HTMLCanvas"]
}),
smalltalk.MaglevClassWindow);

smalltalk.addMethod(
unescape('_renderSelectors'),
smalltalk.method({
selector: unescape('renderSelectors'),
category: 'rendering',
fn: function (){
var self=this;
var html=nil;
var selectedCategory=nil;
var currentSelectors=nil;
smalltalk.send(smalltalk.send(self['@selectorsSelect'], "_asJQuery", []), "_empty", []);
(html=smalltalk.send((smalltalk.HTMLCanvas || HTMLCanvas), "_onJQuery_", [smalltalk.send(self['@selectorsSelect'], "_asJQuery", [])]));
(selectedCategory=smalltalk.send(smalltalk.send(self['@categoryNamesSelect'], "_asJQuery", []), "_val", []));
((($receiver = smalltalk.send(selectedCategory, "__eq", [unescape("%28all%20Smalltalk%29")])).klass === smalltalk.Boolean) ? ($receiver ? (function(){(currentSelectors=smalltalk.send((smalltalk.Array || Array), "_new", []));return smalltalk.send(self['@selectors'], "_valuesDo_", [(function(selGroup){return smalltalk.send(currentSelectors, "_addAll_", [selGroup]);})]);})() : (function(){return ((($receiver = smalltalk.send(selectedCategory, "__eq", [unescape("%28all%20Ruby%29")])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (currentSelectors=self['@rubySelectors']);})() : (function(){return (currentSelectors=smalltalk.send(self['@selectors'], "_atKeyString_", [selectedCategory]));})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return (currentSelectors=self['@rubySelectors']);}), (function(){return (currentSelectors=smalltalk.send(self['@selectors'], "_atKeyString_", [selectedCategory]));})]));})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){(currentSelectors=smalltalk.send((smalltalk.Array || Array), "_new", []));return smalltalk.send(self['@selectors'], "_valuesDo_", [(function(selGroup){return smalltalk.send(currentSelectors, "_addAll_", [selGroup]);})]);}), (function(){return ((($receiver = smalltalk.send(selectedCategory, "__eq", [unescape("%28all%20Ruby%29")])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (currentSelectors=self['@rubySelectors']);})() : (function(){return (currentSelectors=smalltalk.send(self['@selectors'], "_atKeyString_", [selectedCategory]));})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return (currentSelectors=self['@rubySelectors']);}), (function(){return (currentSelectors=smalltalk.send(self['@selectors'], "_atKeyString_", [selectedCategory]));})]));})]));
smalltalk.send(currentSelectors, "_do_", [(function(catSelectors){return smalltalk.send(html, "_with_", [(function(){return smalltalk.send(smalltalk.send(html, "_option", []), "_with_", [smalltalk.send(catSelectors, "_string", [])]);})]);})]);
smalltalk.send(self, "_sortList_", [self['@selectorsSelect']]);
return self;},
args: [],
source: unescape('renderSelectors%0A%09%7Chtml%20selectedCategory%20currentSelectors%7C%0A%09selectorsSelect%20asJQuery%20empty.%0A%09html%20%3A%3D%20HTMLCanvas%20onJQuery%3A%20selectorsSelect%20asJQuery.%0A%09selectedCategory%20%3A%3D%20categoryNamesSelect%20asJQuery%20val.%0A%09selectedCategory%20%3D%20%27%28all%20Smalltalk%29%27%0A%09%09ifTrue%3A%20%5BcurrentSelectors%20%3A%3D%20Array%20new.%0A%09%09%09selectors%20valuesDo%3A%20%5B%3AselGroup%20%7C%20currentSelectors%20addAll%3A%20selGroup%5D%5D%0A%09%09ifFalse%3A%20%5BselectedCategory%20%3D%20%27%28all%20Ruby%29%27%0A%09%09%09ifTrue%3A%20%5BcurrentSelectors%20%3A%3D%20rubySelectors%5D%0A%09%09%09ifFalse%3A%20%5BcurrentSelectors%20%3A%3D%20selectors%20atKeyString%3A%20selectedCategory%5D%5D.%0A%09currentSelectors%20do%3A%20%5B%3AcatSelectors%20%7C%0A%09%09html%20%0A%09%09%09with%3A%20%5Bhtml%20option%0A%09%09%09%09with%3A%20catSelectors%20string%5D%5D.%0A%09self%20sortList%3A%20selectorsSelect.'),
messageSends: ["empty", "asJQuery", "onJQuery:", "val", "ifTrue:ifFalse:", unescape("%3D"), "new", "valuesDo:", "addAll:", "atKeyString:", "do:", "with:", "option", "string", "sortList:"],
referencedClasses: ["HTMLCanvas", "Array"]
}),
smalltalk.MaglevClassWindow);

smalltalk.addMethod(
unescape('_renderSmalltalkSourceCodeFor_'),
smalltalk.method({
selector: unescape('renderSmalltalkSourceCodeFor%3A'),
category: 'rendering',
fn: function (selectorString){
var self=this;
smalltalk.send(self['@object'], "_smalltalkSourceCodeFor_withCallback_", [selectorString, (function(success, obj){(self['@methodObject']=obj);return smalltalk.send(self, "_renderMethodObject", []);})]);
return self;},
args: ["selectorString"],
source: unescape('renderSmalltalkSourceCodeFor%3A%20selectorString%0A%09object%20%0A%09%09smalltalkSourceCodeFor%3A%20selectorString%20%0A%09%09withCallback%3A%20%5B%3Asuccess%20%3Aobj%20%7C%0A%09%09%09methodObject%20%3A%3D%20obj.%0A%09%09%09self%20renderMethodObject%5D.'),
messageSends: ["smalltalkSourceCodeFor:withCallback:", "renderMethodObject"],
referencedClasses: []
}),
smalltalk.MaglevClassWindow);

smalltalk.addMethod(
unescape('_renderSourceCode'),
smalltalk.method({
selector: unescape('renderSourceCode'),
category: 'rendering',
fn: function (){
var self=this;
var selectorString=nil;
var selectedCategory=nil;
smalltalk.send(self['@editorContainer'], "_hide", []);
smalltalk.send(self['@waitingScreen'], "_show", []);
(selectedCategory=smalltalk.send(smalltalk.send(self['@categoryNamesSelect'], "_asJQuery", []), "_val", []));
(selectorString=smalltalk.send(smalltalk.send(self['@selectorsSelect'], "_asJQuery", []), "_val", []));
((($receiver = smalltalk.send(selectedCategory, "__eq", [unescape("%28all%20Ruby%29")])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self, "_renderRubySourceCodeFor_", [selectorString]);})() : (function(){return smalltalk.send(self, "_renderSmalltalkSourceCodeFor_", [selectorString]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(self, "_renderRubySourceCodeFor_", [selectorString]);}), (function(){return smalltalk.send(self, "_renderSmalltalkSourceCodeFor_", [selectorString]);})]));
return self;},
args: [],
source: unescape('renderSourceCode%0A%09%7CselectorString%20selectedCategory%7C%0A%09editorContainer%20hide.%0A%09waitingScreen%20show.%0A%09selectedCategory%20%3A%3D%20categoryNamesSelect%20asJQuery%20val.%0A%09selectorString%20%3A%3D%20selectorsSelect%20asJQuery%20val.%0A%09selectedCategory%20%3D%20%27%28all%20Ruby%29%27%0A%09%09ifTrue%3A%20%5Bself%20renderRubySourceCodeFor%3A%20selectorString%5D%0A%09%09ifFalse%3A%20%5Bself%20renderSmalltalkSourceCodeFor%3A%20selectorString%5D.%0A'),
messageSends: ["hide", "show", "val", "asJQuery", "ifTrue:ifFalse:", unescape("%3D"), "renderRubySourceCodeFor:", "renderSmalltalkSourceCodeFor:"],
referencedClasses: []
}),
smalltalk.MaglevClassWindow);

smalltalk.addMethod(
unescape('_renderStatusBarOn_'),
smalltalk.method({
selector: unescape('renderStatusBarOn%3A'),
category: 'rendering',
fn: function (html){
var self=this;
(function($rec){smalltalk.send($rec, "_class_", [unescape("table-bordered")]);smalltalk.send($rec, "_style_", [unescape("margin-top%3A%205px%3B")]);return smalltalk.send($rec, "_with_", [(function(){return smalltalk.send(smalltalk.send(html, "_tbody", []), "_with_", [(function(){return smalltalk.send(smalltalk.send(html, "_tr", []), "_with_", [(function(){smalltalk.send(smalltalk.send(html, "_td", []), "_with_", [(function(){(self['@rubyIcon']=(function($rec){smalltalk.send($rec, "_src_", [unescape("/images/ruby.png")]);smalltalk.send($rec, "_class_", [unescape("icon-language")]);return smalltalk.send($rec, "_hide", []);})(smalltalk.send(html, "_img", [])));(self['@stIcon']=(function($rec){smalltalk.send($rec, "_src_", [unescape("/images/smalltalk.png")]);smalltalk.send($rec, "_class_", [unescape("icon-language")]);return smalltalk.send($rec, "_hide", []);})(smalltalk.send(html, "_img", [])));return (self['@envIdContainer']=smalltalk.send(smalltalk.send(html, "_span", []), "_with_", [unescape("%3F")]));})]);return smalltalk.send(smalltalk.send(html, "_td", []), "_with_", [(function(){return (self['@sourceLocationContainer']=smalltalk.send(smalltalk.send(html, "_span", []), "_with_", [unescape("%3F")]));})]);})]);})]);})]);})(smalltalk.send(html, "_table", []));
return self;},
args: ["html"],
source: unescape('renderStatusBarOn%3A%20html%0A%09html%20table%0A%09%09class%3A%20%27table-bordered%27%3B%0A%09%09style%3A%20%27margin-top%3A%205px%3B%27%3B%0A%09%09with%3A%20%5Bhtml%20tbody%20with%3A%20%5B%0A%09%09%09html%20tr%20with%3A%20%5B%0A%09%09%09%09html%20td%20with%3A%20%5B%0A%09%09%09%09%09rubyIcon%20%3A%3D%20html%20img%0A%09%09%09%09%09%09src%3A%20%27/images/ruby.png%27%3B%0A%09%09%09%09%09%09class%3A%20%27icon-language%27%3B%0A%09%09%09%09%09%09hide.%0A%09%09%09%09%09stIcon%20%3A%3D%20html%20img%0A%09%09%09%09%09%09src%3A%20%27/images/smalltalk.png%27%3B%0A%09%09%09%09%09%09class%3A%20%27icon-language%27%3B%0A%09%09%09%09%09%09hide.%0A%09%09%09%09%09envIdContainer%20%3A%3D%20html%20span%20with%3A%20%27%3F%27%5D.%0A%09%09%09%09html%20td%20with%3A%20%5B%0A%09%09%09%09%09sourceLocationContainer%20%3A%3D%20html%20span%20with%3A%20%27%3F%27%5D%5D%5D%5D.'),
messageSends: ["class:", "style:", "with:", "tbody", "tr", "td", "src:", "hide", "img", "span", "table"],
referencedClasses: []
}),
smalltalk.MaglevClassWindow);

smalltalk.addMethod(
unescape('_renderWindowTitleContentOn_'),
smalltalk.method({
selector: unescape('renderWindowTitleContentOn%3A'),
category: 'rendering',
fn: function (html){
var self=this;
(function($rec){smalltalk.send($rec, "_with_", [smalltalk.send(self['@object'], "_inlineViewComponentShort", [])]);smalltalk.send($rec, "_with_", [unescape("%20%3C%20")]);return smalltalk.send($rec, "_with_", [smalltalk.send(smalltalk.send(self['@object'], "_superclassObject", []), "_inlineViewComponent", [])]);})(html);
smalltalk.send(self, "_renderHeightPlaceholderOn_", [html]);
(function($rec){smalltalk.send($rec, "_class_", [unescape("right-inline-block")]);return smalltalk.send($rec, "_with_", [(function(){(function($rec){smalltalk.send($rec, "_with_", [" : "]);return smalltalk.send($rec, "_with_", [smalltalk.send(self['@classObject'], "_inlineViewComponent", [])]);})(html);return smalltalk.send(self, "_renderCloseButtonOn_", [html]);})]);})(smalltalk.send(html, "_div", []));
return self;},
args: ["html"],
source: unescape('renderWindowTitleContentOn%3A%20html%0A%09html%20%0A%09%09with%3A%20object%20inlineViewComponentShort%3B%0A%09%09with%3A%20%27%20%3C%20%27%3B%0A%09%09with%3A%20object%20superclassObject%20inlineViewComponent.%0A%09self%20renderHeightPlaceholderOn%3A%20html.%0A%09html%20div%0A%09%09class%3A%20%27right-inline-block%27%3B%0A%09%09with%3A%20%5B%0A%09%09%09html%20%0A%09%09%09%09with%3A%20%27%20%3A%20%27%3B%0A%09%09%09%09with%3A%20classObject%20inlineViewComponent.%0A%09%09%09self%20renderCloseButtonOn%3A%20html%5D.'),
messageSends: ["with:", "inlineViewComponentShort", "inlineViewComponent", "superclassObject", "renderHeightPlaceholderOn:", "class:", "renderCloseButtonOn:", "div"],
referencedClasses: []
}),
smalltalk.MaglevClassWindow);

smalltalk.addMethod(
unescape('_signalFailure_'),
smalltalk.method({
selector: unescape('signalFailure%3A'),
category: 'interactions',
fn: function (aDescription){
var self=this;
var html=nil;
(html=smalltalk.send((smalltalk.HTMLCanvas || HTMLCanvas), "_onJQuery_", [smalltalk.send(self['@errorBox'], "_asJQuery", [])]));
smalltalk.send(html, "_with_", [smalltalk.send(aDescription, "_inlineViewComponent", [])]);
smalltalk.send(self['@errorBox'], "_show", []);
smalltalk.send(smalltalk.send(self['@editorContainer'], "_asJQuery", []), "_css_with_", [unescape("background-color"), unescape("%23ff0039")]);
smalltalk.send(smalltalk.send(self['@editorContainer'], "_asJQuery", []), "_animate_timeout_", [(function($rec){smalltalk.send($rec, "_basicAt_put_", ["backgroundColor", unescape("%23ffffff")]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send((smalltalk.Object || Object), "_new", [])), (250)]);
return self;},
args: ["aDescription"],
source: unescape('signalFailure%3A%20aDescription%0A%09%7Chtml%7C%0A%09html%20%3A%3D%20HTMLCanvas%20onJQuery%3A%20errorBox%20asJQuery.%0A%09html%20with%3A%20aDescription%20inlineViewComponent.%0A%09errorBox%20show.%0A%09editorContainer%20asJQuery%20css%3A%20%27background-color%27%20with%3A%20%27%23ff0039%27.%0A%09editorContainer%20asJQuery%20animate%3A%20%28Object%20new%20basicAt%3A%20%27backgroundColor%27%20put%3A%20%27%23ffffff%27%3B%20yourself%29%20timeout%3A%20250.'),
messageSends: ["onJQuery:", "asJQuery", "with:", "inlineViewComponent", "show", "css:with:", "animate:timeout:", "basicAt:put:", "yourself", "new"],
referencedClasses: ["HTMLCanvas", "Object"]
}),
smalltalk.MaglevClassWindow);

smalltalk.addMethod(
unescape('_signalSuccess'),
smalltalk.method({
selector: unescape('signalSuccess'),
category: 'interactions',
fn: function (){
var self=this;
smalltalk.send(smalltalk.send(self['@editorContainer'], "_asJQuery", []), "_css_with_", [unescape("background-color"), unescape("%233fb618")]);
smalltalk.send(smalltalk.send(self['@editorContainer'], "_asJQuery", []), "_animate_timeout_", [(function($rec){smalltalk.send($rec, "_basicAt_put_", ["backgroundColor", unescape("%23ffffff")]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send((smalltalk.Object || Object), "_new", [])), (250)]);
return self;},
args: [],
source: unescape('signalSuccess%0A%09editorContainer%20asJQuery%20css%3A%20%27background-color%27%20with%3A%20%27%233fb618%27.%0A%09editorContainer%20asJQuery%20animate%3A%20%28Object%20new%20basicAt%3A%20%27backgroundColor%27%20put%3A%20%27%23ffffff%27%3B%20yourself%29%20timeout%3A%20250.'),
messageSends: ["css:with:", "asJQuery", "animate:timeout:", "basicAt:put:", "yourself", "new"],
referencedClasses: ["Object"]
}),
smalltalk.MaglevClassWindow);

smalltalk.addMethod(
unescape('_sortList_'),
smalltalk.method({
selector: unescape('sortList%3A'),
category: 'rendering',
fn: function (aListBox){
var self=this;
var box=nil;
var children=nil;
(box=smalltalk.send(aListBox, "_asJQuery", []));
 children = box.children('option').sort(function (a, b) {return a.innerHTML > b.innerHTML ? 1 : -1}); ;
smalltalk.send(box, "_empty", []);
smalltalk.send(children, "_appendTo_", [box]);
return self;},
args: ["aListBox"],
source: unescape('sortList%3A%20aListBox%0A%09%7Cbox%20children%7C%0A%09box%20%3A%3D%20aListBox%20asJQuery.%0A%09%3C%20children%20%3D%20box.children%28%27option%27%29.sort%28function%20%28a%2C%20b%29%20%7Breturn%20a.innerHTML%20%3E%3E%20b.innerHTML%20%3F%201%20%3A%20-1%7D%29%3B%20%3E.%0A%09box%20empty.%0A%09children%20appendTo%3A%20box.'),
messageSends: ["asJQuery", "empty", "appendTo:"],
referencedClasses: []
}),
smalltalk.MaglevClassWindow);



smalltalk.addClass('MaglevNilClassWindow', smalltalk.MaglevObjectWindow, [], 'Maglev-Database-Explorer');


smalltalk.addClass('MaglevStringWindow', smalltalk.MaglevObjectWindow, [], 'Maglev-Database-Explorer');


smalltalk.addClass('MaglevSymbolWindow', smalltalk.MaglevObjectWindow, [], 'Maglev-Database-Explorer');


smalltalk.addClass('MaglevWaitingWindow', smalltalk.MaglevWindow, [], 'Maglev-Database-Explorer');
smalltalk.addMethod(
unescape('_isWaitingWindow'),
smalltalk.method({
selector: unescape('isWaitingWindow'),
category: 'testing',
fn: function (){
var self=this;
return true;
return self;},
args: [],
source: unescape('isWaitingWindow%0A%20%09%5E%20true'),
messageSends: [],
referencedClasses: []
}),
smalltalk.MaglevWaitingWindow);

smalltalk.addMethod(
unescape('_renderWindowContentOn_'),
smalltalk.method({
selector: unescape('renderWindowContentOn%3A'),
category: 'rendering',
fn: function (html){
var self=this;

return self;},
args: ["html"],
source: unescape('renderWindowContentOn%3A%20html'),
messageSends: [],
referencedClasses: []
}),
smalltalk.MaglevWaitingWindow);

smalltalk.addMethod(
unescape('_renderWindowTitleOn_'),
smalltalk.method({
selector: unescape('renderWindowTitleOn%3A'),
category: 'rendering',
fn: function (html){
var self=this;
(function($rec){smalltalk.send($rec, "_with_", [smalltalk.send((smalltalk.MaglevIcon || MaglevIcon), "_wait", [])]);return smalltalk.send($rec, "_with_", [" loading..."]);})(html);
return self;},
args: ["html"],
source: unescape('renderWindowTitleOn%3A%20html%0A%09html%0A%09%09with%3A%20MaglevIcon%20wait%3B%0A%09%09with%3A%20%27%20loading...%27.'),
messageSends: ["with:", "wait"],
referencedClasses: ["MaglevIcon"]
}),
smalltalk.MaglevWaitingWindow);



