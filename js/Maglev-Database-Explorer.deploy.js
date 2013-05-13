smalltalk.addPackage('Maglev-Database-Explorer', {});
smalltalk.addClass('MaglevDraggableObject', smalltalk.Widget, ['content'], 'Maglev-Database-Explorer');
smalltalk.addMethod(
unescape('_content'),
smalltalk.method({
selector: unescape('content'),
fn: function (){
var self=this;
return self['@content'];
return self;}
}),
smalltalk.MaglevDraggableObject);

smalltalk.addMethod(
unescape('_content_'),
smalltalk.method({
selector: unescape('content%3A'),
fn: function (anObject){
var self=this;
(self['@content']=anObject);
return self;}
}),
smalltalk.MaglevDraggableObject);

smalltalk.addMethod(
unescape('_renderOn_'),
smalltalk.method({
selector: unescape('renderOn%3A'),
fn: function (html){
var self=this;
smalltalk.send(smalltalk.send(html, "_div", []), "_class_with_", [unescape("draggable-new-object-container"), (function(){return (function($rec){smalltalk.send($rec, "_class_", [unescape("ui-widget-content%20ui-draggable%20draggable-new-object")]);return smalltalk.send($rec, "_with_", [(function(){(function($rec){smalltalk.send($rec, "_class_", [unescape("object-drag-dummy")]);smalltalk.send($rec, "_style_", [unescape("display%3A%20none%3B")]);smalltalk.send($rec, "_with_", [smalltalk.send((smalltalk.MaglevIcon || MaglevIcon), "_move", [])]);return smalltalk.send($rec, "_with_", [self['@content']]);})(smalltalk.send(html, "_div", []));return (function($rec){smalltalk.send($rec, "_class_", [unescape("object-iv-name")]);return smalltalk.send($rec, "_with_", [self['@content']]);})(smalltalk.send(html, "_div", []));})]);})(smalltalk.send(html, "_div", []));})]);
return self;}
}),
smalltalk.MaglevDraggableObject);


smalltalk.addMethod(
unescape('_with_'),
smalltalk.method({
selector: unescape('with%3A'),
fn: function (anObject){
var self=this;
return (function($rec){smalltalk.send($rec, "_content_", [anObject]);smalltalk.send($rec, "_initialize", []);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(self, "_basicNew", []));
return self;}
}),
smalltalk.MaglevDraggableObject.klass);


smalltalk.addClass('MaglevGsNMethodEditor', smalltalk.Widget, ['object', 'editorContainer', 'errorBox', 'rubyIcon', 'stIcon', 'envIdContainer', 'sourceLocationContainer', 'editor'], 'Maglev-Database-Explorer');
smalltalk.addMethod(
unescape('_bindCommands'),
smalltalk.method({
selector: unescape('bindCommands'),
fn: function (){
var self=this;
var aceEditor=nil;
(aceEditor=self['@editor']);
 var commands = aceEditor.commands;
	commands.addCommand({
    		name: "save",
    		bindKey: {win: "Ctrl-S", mac: "Command-S"},
		exec: function() {self._commandSave();}}); ;
return self;}
}),
smalltalk.MaglevGsNMethodEditor);

smalltalk.addMethod(
unescape('_commandSave'),
smalltalk.method({
selector: unescape('commandSave'),
fn: function (){
var self=this;
var selectedCategory=nil;
smalltalk.send(self['@errorBox'], "_hide", []);
smalltalk.send(smalltalk.send(self['@errorBox'], "_asJQuery", []), "_empty", []);
((($receiver = smalltalk.send(smalltalk.send(self['@object'], "_environmentId", []), "__eq", [(1)])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self['@object'], "_compileRubySourceCode_withCallback_", [smalltalk.send(self['@editor'], "_getValue", []), (function(success, obj){return ((($receiver = smalltalk.send(obj, "_isException", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self, "_signalFailure_", [obj]);})() : (function(){return smalltalk.send(self, "_signalSuccess", []);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(self, "_signalFailure_", [obj]);}), (function(){return smalltalk.send(self, "_signalSuccess", []);})]));})]);})() : (function(){return smalltalk.send(self['@object'], "_compileSmalltalkSourceCode_withCallback_", [smalltalk.send(self['@editor'], "_getValue", []), (function(success, obj){return ((($receiver = smalltalk.send(obj, "_isException", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self, "_signalFailure_", [obj]);})() : (function(){return smalltalk.send(self, "_signalSuccess", []);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(self, "_signalFailure_", [obj]);}), (function(){return smalltalk.send(self, "_signalSuccess", []);})]));})]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(self['@object'], "_compileRubySourceCode_withCallback_", [smalltalk.send(self['@editor'], "_getValue", []), (function(success, obj){return ((($receiver = smalltalk.send(obj, "_isException", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self, "_signalFailure_", [obj]);})() : (function(){return smalltalk.send(self, "_signalSuccess", []);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(self, "_signalFailure_", [obj]);}), (function(){return smalltalk.send(self, "_signalSuccess", []);})]));})]);}), (function(){return smalltalk.send(self['@object'], "_compileSmalltalkSourceCode_withCallback_", [smalltalk.send(self['@editor'], "_getValue", []), (function(success, obj){return ((($receiver = smalltalk.send(obj, "_isException", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self, "_signalFailure_", [obj]);})() : (function(){return smalltalk.send(self, "_signalSuccess", []);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(self, "_signalFailure_", [obj]);}), (function(){return smalltalk.send(self, "_signalSuccess", []);})]));})]);})]));
return self;}
}),
smalltalk.MaglevGsNMethodEditor);

smalltalk.addMethod(
unescape('_initializeEditor'),
smalltalk.method({
selector: unescape('initializeEditor'),
fn: function (){
var self=this;
(self['@editor']=smalltalk.send((typeof ace == 'undefined' ? nil : ace), "_edit_", [smalltalk.send(smalltalk.send(self['@editorContainer'], "_asJQuery", []), "_at_", [(0)])]));
smalltalk.send(self['@editor'], "_setTheme_", [unescape("ace/theme/clouds")]);
smalltalk.send(smalltalk.send(self['@editor'], "_getSession", []), "_setMode_", [unescape("ace/mode/ruby")]);
smalltalk.send(self, "_mouseFix", []);
smalltalk.send(self, "_bindCommands", []);
return self;}
}),
smalltalk.MaglevGsNMethodEditor);

smalltalk.addMethod(
unescape('_mouseFix'),
smalltalk.method({
selector: unescape('mouseFix'),
fn: function (){
var self=this;
 var editor = self['@editorContainer'];
	editor._asJQuery().mousedown(function (event) {
		event.preventDefault();
		return false;
	}); ;
return self;}
}),
smalltalk.MaglevGsNMethodEditor);

smalltalk.addMethod(
unescape('_object'),
smalltalk.method({
selector: unescape('object'),
fn: function (){
var self=this;
return self['@object'];
return self;}
}),
smalltalk.MaglevGsNMethodEditor);

smalltalk.addMethod(
unescape('_object_'),
smalltalk.method({
selector: unescape('object%3A'),
fn: function (anObject){
var self=this;
(self['@object']=anObject);
return self;}
}),
smalltalk.MaglevGsNMethodEditor);

smalltalk.addMethod(
unescape('_renderMethodObject'),
smalltalk.method({
selector: unescape('renderMethodObject'),
fn: function (){
var self=this;
var envId=nil;
smalltalk.send(self['@editor'], "_setValue_pos_", [smalltalk.send(self['@object'], "_sourceString", []), (-1)]);
smalltalk.send(self['@editorContainer'], "_show", []);
(envId=smalltalk.send(self['@object'], "_environmentId", []));
smalltalk.send(smalltalk.send(self['@envIdContainer'], "_asJQuery", []), "_empty", []);
smalltalk.send(self['@envIdContainer'], "_with_", [envId]);
smalltalk.send(self['@sourceLocationContainer'], "_empty", []);
((($receiver = smalltalk.send(envId, "__eq", [(1)])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self['@sourceLocationContainer'], "_with_", [smalltalk.send(smalltalk.send(self['@object'], "_filename", []), "_string", [])]);})() : (function(){return smalltalk.send(self['@sourceLocationContainer'], "_with_", [unescape("n/a")]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(self['@sourceLocationContainer'], "_with_", [smalltalk.send(smalltalk.send(self['@object'], "_filename", []), "_string", [])]);}), (function(){return smalltalk.send(self['@sourceLocationContainer'], "_with_", [unescape("n/a")]);})]));
((($receiver = smalltalk.send(envId, "__eq", [(0)])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(self['@stIcon'], "_show", []);return smalltalk.send(self['@rubyIcon'], "_hide", []);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(self['@stIcon'], "_show", []);return smalltalk.send(self['@rubyIcon'], "_hide", []);})]));
((($receiver = smalltalk.send(envId, "__eq", [(1)])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(self['@stIcon'], "_hide", []);return smalltalk.send(self['@rubyIcon'], "_show", []);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(self['@stIcon'], "_hide", []);return smalltalk.send(self['@rubyIcon'], "_show", []);})]));
((($receiver = ((($receiver = envId).klass === smalltalk.Number) ? $receiver >(1) : smalltalk.send($receiver, "__gt", [(1)]))).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(self['@stIcon'], "_hide", []);return smalltalk.send(self['@rubyIcon'], "_hide", []);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(self['@stIcon'], "_hide", []);return smalltalk.send(self['@rubyIcon'], "_hide", []);})]));
return self;}
}),
smalltalk.MaglevGsNMethodEditor);

smalltalk.addMethod(
unescape('_renderOn_'),
smalltalk.method({
selector: unescape('renderOn%3A'),
fn: function (html){
var self=this;
(self['@editorContainer']=smalltalk.send(smalltalk.send(html, "_span", []), "_class_", [unescape("pull-left%20code-area")]));
smalltalk.send(smalltalk.send(html, "_div", []), "_style_", [unescape("clear%3A%20both%3B")]);
(self['@errorBox']=(function($rec){smalltalk.send($rec, "_class_", [unescape("alert%20alert-error")]);smalltalk.send($rec, "_style_", [unescape("margin-bottom%3A%200px%3B")]);return smalltalk.send($rec, "_hide", []);})(smalltalk.send(html, "_div", [])));
smalltalk.send(self, "_renderStatusBarOn_", [html]);
smalltalk.send(self, "_initializeEditor", []);
smalltalk.send(self, "_renderMethodObject", []);
return self;}
}),
smalltalk.MaglevGsNMethodEditor);

smalltalk.addMethod(
unescape('_renderStatusBarOn_'),
smalltalk.method({
selector: unescape('renderStatusBarOn%3A'),
fn: function (html){
var self=this;
(function($rec){smalltalk.send($rec, "_class_", [unescape("table-bordered")]);smalltalk.send($rec, "_style_", [unescape("margin-top%3A%205px%3B")]);return smalltalk.send($rec, "_with_", [(function(){return smalltalk.send(smalltalk.send(html, "_tbody", []), "_with_", [(function(){return smalltalk.send(smalltalk.send(html, "_tr", []), "_with_", [(function(){smalltalk.send(smalltalk.send(html, "_td", []), "_with_", [(function(){(self['@rubyIcon']=(function($rec){smalltalk.send($rec, "_src_", [unescape("/images/ruby.png")]);smalltalk.send($rec, "_class_", [unescape("icon-language")]);return smalltalk.send($rec, "_hide", []);})(smalltalk.send(html, "_img", [])));(self['@stIcon']=(function($rec){smalltalk.send($rec, "_src_", [unescape("/images/smalltalk.png")]);smalltalk.send($rec, "_class_", [unescape("icon-language")]);return smalltalk.send($rec, "_hide", []);})(smalltalk.send(html, "_img", [])));return (self['@envIdContainer']=smalltalk.send(smalltalk.send(html, "_span", []), "_with_", ["Environment ID"]));})]);return smalltalk.send(smalltalk.send(html, "_td", []), "_with_", [(function(){return (self['@sourceLocationContainer']=smalltalk.send(smalltalk.send(html, "_span", []), "_with_", ["Source location"]));})]);})]);})]);})]);})(smalltalk.send(html, "_table", []));
return self;}
}),
smalltalk.MaglevGsNMethodEditor);

smalltalk.addMethod(
unescape('_signalFailure_'),
smalltalk.method({
selector: unescape('signalFailure%3A'),
fn: function (aDescription){
var self=this;
var html=nil;
(html=smalltalk.send((smalltalk.HTMLCanvas || HTMLCanvas), "_onJQuery_", [smalltalk.send(self['@errorBox'], "_asJQuery", [])]));
smalltalk.send(html, "_with_", [smalltalk.send(aDescription, "_inlineViewComponent", [])]);
smalltalk.send(self['@errorBox'], "_show", []);
smalltalk.send(smalltalk.send(self['@editorContainer'], "_asJQuery", []), "_css_with_", [unescape("background-color"), unescape("%23ff0039")]);
smalltalk.send(smalltalk.send(self['@editorContainer'], "_asJQuery", []), "_animate_timeout_", [(function($rec){smalltalk.send($rec, "_basicAt_put_", ["backgroundColor", unescape("%23ffffff")]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send((smalltalk.Object || Object), "_new", [])), (250)]);
return self;}
}),
smalltalk.MaglevGsNMethodEditor);

smalltalk.addMethod(
unescape('_signalSuccess'),
smalltalk.method({
selector: unescape('signalSuccess'),
fn: function (){
var self=this;
smalltalk.send(smalltalk.send(self['@editorContainer'], "_asJQuery", []), "_css_with_", [unescape("background-color"), unescape("%233fb618")]);
smalltalk.send(smalltalk.send(self['@editorContainer'], "_asJQuery", []), "_animate_timeout_", [(function($rec){smalltalk.send($rec, "_basicAt_put_", ["backgroundColor", unescape("%23ffffff")]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send((smalltalk.Object || Object), "_new", [])), (250)]);
return self;}
}),
smalltalk.MaglevGsNMethodEditor);


smalltalk.addMethod(
unescape('_for_'),
smalltalk.method({
selector: unescape('for%3A'),
fn: function (anObject){
var self=this;
return (function($rec){smalltalk.send($rec, "_object_", [anObject]);smalltalk.send($rec, "_initialize", []);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(self, "_basicNew", []));
return self;}
}),
smalltalk.MaglevGsNMethodEditor.klass);


smalltalk.addClass('MaglevIcon', smalltalk.Widget, ['b', 'icon', 'spin'], 'Maglev-Database-Explorer');
smalltalk.addMethod(
unescape('_icon'),
smalltalk.method({
selector: unescape('icon'),
fn: function (){
var self=this;
(($receiver = self['@icon']) == nil || $receiver == undefined) ? (function(){return (self['@icon']="star");})() : $receiver;
return self['@icon'];
return self;}
}),
smalltalk.MaglevIcon);

smalltalk.addMethod(
unescape('_icon_'),
smalltalk.method({
selector: unescape('icon%3A'),
fn: function (aString){
var self=this;
(self['@icon']=aString);
return self;}
}),
smalltalk.MaglevIcon);

smalltalk.addMethod(
unescape('_renderOn_'),
smalltalk.method({
selector: unescape('renderOn%3A'),
fn: function (html){
var self=this;
var cssClass=nil;
(cssClass=smalltalk.send(unescape("icon-"), "__comma", [smalltalk.send(self, "_icon", [])]));
((($receiver = smalltalk.send(self, "_spin", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (cssClass=smalltalk.send(cssClass, "__comma", [unescape("%20icon-spin")]));})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return (cssClass=smalltalk.send(cssClass, "__comma", [unescape("%20icon-spin")]));})]));
(self['@b']=(function($rec){smalltalk.send($rec, "_class_", [cssClass]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(html, "_b", [])));
return self;}
}),
smalltalk.MaglevIcon);

smalltalk.addMethod(
unescape('_spin'),
smalltalk.method({
selector: unescape('spin'),
fn: function (){
var self=this;
(($receiver = self['@spin']) == nil || $receiver == undefined) ? (function(){return (self['@spin']=false);})() : $receiver;
return self['@spin'];
return self;}
}),
smalltalk.MaglevIcon);

smalltalk.addMethod(
unescape('_spin_'),
smalltalk.method({
selector: unescape('spin%3A'),
fn: function (aBoolean){
var self=this;
(self['@spin']=aBoolean);
return self;}
}),
smalltalk.MaglevIcon);


smalltalk.addMethod(
unescape('_move'),
smalltalk.method({
selector: unescape('move'),
fn: function (){
var self=this;
return (function($rec){smalltalk.send($rec, "_icon_", ["move"]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(self, "_new", []));
return self;}
}),
smalltalk.MaglevIcon.klass);

smalltalk.addMethod(
unescape('_pencil'),
smalltalk.method({
selector: unescape('pencil'),
fn: function (){
var self=this;
return (function($rec){smalltalk.send($rec, "_icon_", ["pencil"]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(self, "_new", []));
return self;}
}),
smalltalk.MaglevIcon.klass);

smalltalk.addMethod(
unescape('_remove'),
smalltalk.method({
selector: unescape('remove'),
fn: function (){
var self=this;
return (function($rec){smalltalk.send($rec, "_icon_", ["remove"]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(self, "_new", []));
return self;}
}),
smalltalk.MaglevIcon.klass);

smalltalk.addMethod(
unescape('_search'),
smalltalk.method({
selector: unescape('search'),
fn: function (){
var self=this;
return (function($rec){smalltalk.send($rec, "_icon_", ["search"]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(self, "_new", []));
return self;}
}),
smalltalk.MaglevIcon.klass);

smalltalk.addMethod(
unescape('_star'),
smalltalk.method({
selector: unescape('star'),
fn: function (){
var self=this;
return (function($rec){smalltalk.send($rec, "_icon_", ["star"]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(self, "_new", []));
return self;}
}),
smalltalk.MaglevIcon.klass);

smalltalk.addMethod(
unescape('_wait'),
smalltalk.method({
selector: unescape('wait'),
fn: function (){
var self=this;
return (function($rec){smalltalk.send($rec, "_icon_", ["refresh"]);smalltalk.send($rec, "_spin_", [true]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(self, "_new", []));
return self;}
}),
smalltalk.MaglevIcon.klass);


smalltalk.addClass('MaglevObjectDropdown', smalltalk.Widget, ['container', 'resultContainer', 'editor', 'editorElement', 'rubyButton', 'smalltalkButton', 'object'], 'Maglev-Database-Explorer');
smalltalk.addMethod(
unescape('_appendToInlineObject_for_'),
smalltalk.method({
selector: unescape('appendToInlineObject%3Afor%3A'),
fn: function (anObject, dropdownContainer){
var self=this;
(self['@object']=smalltalk.send(anObject, "_object", []));
smalltalk.send(smalltalk.send(self['@container'], "_asJQuery", []), "_appendTo_", [smalltalk.send(dropdownContainer, "_asJQuery", [])]);
return self;}
}),
smalltalk.MaglevObjectDropdown);

smalltalk.addMethod(
unescape('_code'),
smalltalk.method({
selector: unescape('code'),
fn: function (){
var self=this;
return smalltalk.send(self['@editor'], "_getValue", []);
return self;}
}),
smalltalk.MaglevObjectDropdown);

smalltalk.addMethod(
unescape('_evalDoIt'),
smalltalk.method({
selector: unescape('evalDoIt'),
fn: function (){
var self=this;

return self;}
}),
smalltalk.MaglevObjectDropdown);

smalltalk.addMethod(
unescape('_evalInspectIt'),
smalltalk.method({
selector: unescape('evalInspectIt'),
fn: function (){
var self=this;

return self;}
}),
smalltalk.MaglevObjectDropdown);

smalltalk.addMethod(
unescape('_evalPrintIt'),
smalltalk.method({
selector: unescape('evalPrintIt'),
fn: function (){
var self=this;
smalltalk.send(self, "_executeWithCallback_", [(function(success, resultObj){return ((($receiver = success).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self['@resultContainer'], "_with_", [smalltalk.send(resultObj, "_inlineViewComponent", [])]);})() : (function(){return smalltalk.send(self['@resultContainer'], "_with_", [smalltalk.send(resultObj, "_inlineViewComponent", [])]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(self['@resultContainer'], "_with_", [smalltalk.send(resultObj, "_inlineViewComponent", [])]);}), (function(){return smalltalk.send(self['@resultContainer'], "_with_", [smalltalk.send(resultObj, "_inlineViewComponent", [])]);})]));})]);
return self;}
}),
smalltalk.MaglevObjectDropdown);

smalltalk.addMethod(
unescape('_executeWithCallback_'),
smalltalk.method({
selector: unescape('executeWithCallback%3A'),
fn: function (aBlock){
var self=this;
var html=nil;
(html=smalltalk.send((smalltalk.HTMLCanvas || HTMLCanvas), "_onJQuery_", [smalltalk.send(self['@resultContainer'], "_asJQuery", [])]));
(function($rec){smalltalk.send($rec, "_addClass_", [unescape("alert-info")]);smalltalk.send($rec, "_removeClass_", [unescape("alert-success")]);return smalltalk.send($rec, "_removeClass_", [unescape("alert-error")]);})(self['@resultContainer']);
smalltalk.send(smalltalk.send(self['@resultContainer'], "_asJQuery", []), "_empty", []);
(function($rec){smalltalk.send($rec, "_with_", [smalltalk.send((smalltalk.MaglevIcon || MaglevIcon), "_wait", [])]);smalltalk.send($rec, "_with_", [" loading..."]);return smalltalk.send($rec, "_show", []);})(self['@resultContainer']);
smalltalk.send(self['@object'], "_evaluate_language_withCallback_", [smalltalk.send(self, "_code", []), smalltalk.send(self, "_language", []), (function(success, resultObj){smalltalk.send(smalltalk.send(self['@resultContainer'], "_asJQuery", []), "_empty", []);smalltalk.send(self['@resultContainer'], "_removeClass_", [unescape("alert-info")]);((($receiver = success).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self['@resultContainer'], "_addClass_", [unescape("alert-success")]);})() : (function(){return smalltalk.send(self['@resultContainer'], "_addClass_", [unescape("alert-error")]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(self['@resultContainer'], "_addClass_", [unescape("alert-success")]);}), (function(){return smalltalk.send(self['@resultContainer'], "_addClass_", [unescape("alert-error")]);})]));return smalltalk.send(aBlock, "_value_value_", [success, resultObj]);})]);
return self;}
}),
smalltalk.MaglevObjectDropdown);

smalltalk.addMethod(
unescape('_initializeEditor'),
smalltalk.method({
selector: unescape('initializeEditor'),
fn: function (){
var self=this;
(self['@editor']=smalltalk.send((typeof ace == 'undefined' ? nil : ace), "_edit_", [smalltalk.send(smalltalk.send(self['@editorElement'], "_asJQuery", []), "_at_", [(0)])]));
smalltalk.send(self['@editor'], "_setTheme_", [unescape("ace/theme/clouds")]);
smalltalk.send(smalltalk.send(self['@editor'], "_getSession", []), "_setMode_", [unescape("ace/mode/ruby")]);
return self;}
}),
smalltalk.MaglevObjectDropdown);

smalltalk.addMethod(
unescape('_isRuby'),
smalltalk.method({
selector: unescape('isRuby'),
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(self['@rubyButton'], "_asJQuery", []), "_hasClass_", ["active"]);
return self;}
}),
smalltalk.MaglevObjectDropdown);

smalltalk.addMethod(
unescape('_isSmalltalk'),
smalltalk.method({
selector: unescape('isSmalltalk'),
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(self['@smalltalkButton'], "_asJQuery", []), "_hasClass_", ["active"]);
return self;}
}),
smalltalk.MaglevObjectDropdown);

smalltalk.addMethod(
unescape('_language'),
smalltalk.method({
selector: unescape('language'),
fn: function (){
var self=this;
try{((($receiver = smalltalk.send(self, "_isRuby", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (function(){throw({name: 'stReturn', selector: '_language', fn: function(){return "ruby"}})})();})() : (function(){return (function(){throw({name: 'stReturn', selector: '_language', fn: function(){return "smalltalk"}})})();})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return (function(){throw({name: 'stReturn', selector: '_language', fn: function(){return "ruby"}})})();}), (function(){return (function(){throw({name: 'stReturn', selector: '_language', fn: function(){return "smalltalk"}})})();})]));
return self;
} catch(e) {if(e.name === 'stReturn' && e.selector === '_language'){return e.fn()} throw(e)}}
}),
smalltalk.MaglevObjectDropdown);

smalltalk.addMethod(
unescape('_mouseFix'),
smalltalk.method({
selector: unescape('mouseFix'),
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
return self;}
}),
smalltalk.MaglevObjectDropdown);

smalltalk.addMethod(
unescape('_renderButtonsOn_'),
smalltalk.method({
selector: unescape('renderButtonsOn%3A'),
fn: function (html){
var self=this;
(function($rec){smalltalk.send($rec, "_class_", [unescape("btn%20btn-primary")]);smalltalk.send($rec, "_type_", ["button"]);smalltalk.send($rec, "_with_", ["Do it"]);return smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send(self, "_evalDoIt", []);})]);})(smalltalk.send(html, "_button", []));
(function($rec){smalltalk.send($rec, "_class_", [unescape("btn%20btn-primary")]);smalltalk.send($rec, "_type_", ["button"]);smalltalk.send($rec, "_with_", ["Print it"]);return smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send(self, "_evalPrintIt", []);})]);})(smalltalk.send(html, "_button", []));
(function($rec){smalltalk.send($rec, "_class_", [unescape("btn%20btn-primary")]);smalltalk.send($rec, "_type_", ["button"]);smalltalk.send($rec, "_with_", ["Inspect it"]);return smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send(self, "_evalInspectIt", []);})]);})(smalltalk.send(html, "_button", []));
(function($rec){smalltalk.send($rec, "_class_", [unescape("btn-group")]);smalltalk.send($rec, "_data_with_", ["toggle", unescape("buttons-radio")]);return smalltalk.send($rec, "_with_", [(function(){(self['@rubyButton']=(function($rec){smalltalk.send($rec, "_class_", ["btn active"]);smalltalk.send($rec, "_data_with_", ["toggle", unescape("buttons-checkbox")]);smalltalk.send($rec, "_type_", ["button"]);return smalltalk.send($rec, "_with_", ["Ruby"]);})(smalltalk.send(html, "_button", [])));return (self['@smalltalkButton']=(function($rec){smalltalk.send($rec, "_class_", ["btn"]);smalltalk.send($rec, "_data_with_", ["toggle", unescape("buttons-checkbox")]);smalltalk.send($rec, "_type_", ["button"]);return smalltalk.send($rec, "_with_", ["Smalltalk"]);})(smalltalk.send(html, "_button", [])));})]);})(smalltalk.send(html, "_div", []));
return self;}
}),
smalltalk.MaglevObjectDropdown);

smalltalk.addMethod(
unescape('_renderFormOn_'),
smalltalk.method({
selector: unescape('renderFormOn%3A'),
fn: function (html){
var self=this;
(function($rec){smalltalk.send($rec, "_style_", [unescape("margin%3A%200px%3B")]);return smalltalk.send($rec, "_with_", [(function(){(self['@editorElement']=smalltalk.send(smalltalk.send(html, "_span", []), "_class_", [unescape("pull-left%20code-area")]));smalltalk.send(smalltalk.send(html, "_div", []), "_style_", [unescape("clear%3A%20both%3B")]);(self['@resultContainer']=(function($rec){smalltalk.send($rec, "_class_", ["alert"]);return smalltalk.send($rec, "_hide", []);})(smalltalk.send(html, "_div", [])));return (function($rec){smalltalk.send($rec, "_class_", [unescape("button-area")]);return smalltalk.send($rec, "_with_", [(function(){return smalltalk.send(self, "_renderButtonsOn_", [html]);})]);})(smalltalk.send(html, "_div", []));})]);})(smalltalk.send(html, "_form", []));
return self;}
}),
smalltalk.MaglevObjectDropdown);

smalltalk.addMethod(
unescape('_renderOn_'),
smalltalk.method({
selector: unescape('renderOn%3A'),
fn: function (html){
var self=this;
(self['@container']=(function($rec){smalltalk.send($rec, "_class_", [unescape("dropdown-menu")]);return smalltalk.send($rec, "_with_", [(function(){return (function($rec){smalltalk.send($rec, "_class_", ["textbox"]);smalltalk.send($rec, "_style_", ["padding: 10px"]);return smalltalk.send($rec, "_with_", [(function(){return smalltalk.send(self, "_renderFormOn_", [html]);})]);})(smalltalk.send(html, "_fieldset", []));})]);})(smalltalk.send(html, "_div", [])));
smalltalk.send(self, "_initializeEditor", []);
smalltalk.send(self, "_mouseFix", []);
return self;}
}),
smalltalk.MaglevObjectDropdown);


smalltalk.MaglevObjectDropdown.klass.iVarNames = ['instance'];
smalltalk.addMethod(
unescape('_instance'),
smalltalk.method({
selector: unescape('instance'),
fn: function (){
var self=this;
(($receiver = self['@instance']) == nil || $receiver == undefined) ? (function(){(self['@instance']=smalltalk.send(self, "_new", []));return smalltalk.send(self['@instance'], "_appendToJQuery_", [smalltalk.send(unescape("%23temporary-rendering-area"), "_asJQuery", [])]);})() : $receiver;
return self['@instance'];
return self;}
}),
smalltalk.MaglevObjectDropdown.klass);


smalltalk.addClass('MaglevObjectInline', smalltalk.Widget, ['object', 'hasDropDown', 'isDraggable', 'depth', 'isShort', 'dragContent', 'dragDummy', 'dragObject'], 'Maglev-Database-Explorer');
smalltalk.addMethod(
unescape('_bindDraggable'),
smalltalk.method({
selector: unescape('bindDraggable'),
fn: function (){
var self=this;
var options=nil;
var cursorPos=nil;
(cursorPos=(function($rec){smalltalk.send($rec, "_basicAt_put_", ["left", (0)]);smalltalk.send($rec, "_basicAt_put_", ["top", (0)]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send((smalltalk.Object || Object), "_new", [])));
(options=(function($rec){smalltalk.send($rec, "_basicAt_put_", ["create", (function(event, ui){return nil;})]);smalltalk.send($rec, "_basicAt_put_", ["cursorPos", cursorPos]);smalltalk.send($rec, "_basicAt_put_", ["start", (function(event, ui){return smalltalk.send(self, "_dragStart_a_", [event, ui]);})]);smalltalk.send($rec, "_basicAt_put_", ["stop", (function(event, ui){return smalltalk.send(self, "_dragStop_a_", [event, ui]);})]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send((smalltalk.Object || Object), "_new", [])));
smalltalk.send(smalltalk.send(self['@dragObject'], "_asJQuery", []), "_draggable_", [options]);
return self;}
}),
smalltalk.MaglevObjectInline);

smalltalk.addMethod(
unescape('_depth'),
smalltalk.method({
selector: unescape('depth'),
fn: function (){
var self=this;
(($receiver = self['@depth']) == nil || $receiver == undefined) ? (function(){return (self['@depth']=(1));})() : $receiver;
return self['@depth'];
return self;}
}),
smalltalk.MaglevObjectInline);

smalltalk.addMethod(
unescape('_depth_'),
smalltalk.method({
selector: unescape('depth%3A'),
fn: function (anInteger){
var self=this;
(self['@depth']=anInteger);
return self;}
}),
smalltalk.MaglevObjectInline);

smalltalk.addMethod(
unescape('_dragStart_a_'),
smalltalk.method({
selector: unescape('dragStart%3Aa%3A'),
fn: function (event, ui){
var self=this;
smalltalk.send(self['@dragContent'], "_hide", []);
smalltalk.send(self['@dragDummy'], "_show", []);
return self;}
}),
smalltalk.MaglevObjectInline);

smalltalk.addMethod(
unescape('_dragStop_a_'),
smalltalk.method({
selector: unescape('dragStop%3Aa%3A'),
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
return self;}
}),
smalltalk.MaglevObjectInline);

smalltalk.addMethod(
unescape('_hasDropDown'),
smalltalk.method({
selector: unescape('hasDropDown'),
fn: function (){
var self=this;
(($receiver = self['@hasDropDown']) == nil || $receiver == undefined) ? (function(){return (self['@hasDropDown']=smalltalk.send(self, "_hasDropDownDefault", []));})() : $receiver;
return self['@hasDropDown'];
return self;}
}),
smalltalk.MaglevObjectInline);

smalltalk.addMethod(
unescape('_hasDropDown_'),
smalltalk.method({
selector: unescape('hasDropDown%3A'),
fn: function (aBoolean){
var self=this;
(self['@hasDropDown']=aBoolean);
return self;}
}),
smalltalk.MaglevObjectInline);

smalltalk.addMethod(
unescape('_hasDropDownDefault'),
smalltalk.method({
selector: unescape('hasDropDownDefault'),
fn: function (){
var self=this;
return true;
return self;}
}),
smalltalk.MaglevObjectInline);

smalltalk.addMethod(
unescape('_isDraggable'),
smalltalk.method({
selector: unescape('isDraggable'),
fn: function (){
var self=this;
(($receiver = self['@isDraggable']) == nil || $receiver == undefined) ? (function(){return (self['@isDraggable']=smalltalk.send(self, "_isDraggableDefault", []));})() : $receiver;
return self['@isDraggable'];
return self;}
}),
smalltalk.MaglevObjectInline);

smalltalk.addMethod(
unescape('_isDraggable_'),
smalltalk.method({
selector: unescape('isDraggable%3A'),
fn: function (aBoolean){
var self=this;
(self['@isDraggable']=aBoolean);
return self;}
}),
smalltalk.MaglevObjectInline);

smalltalk.addMethod(
unescape('_isDraggableDefault'),
smalltalk.method({
selector: unescape('isDraggableDefault'),
fn: function (){
var self=this;
return true;
return self;}
}),
smalltalk.MaglevObjectInline);

smalltalk.addMethod(
unescape('_isShort'),
smalltalk.method({
selector: unescape('isShort'),
fn: function (){
var self=this;
(($receiver = self['@isShort']) == nil || $receiver == undefined) ? (function(){return (self['@isShort']=false);})() : $receiver;
return self['@isShort'];
return self;}
}),
smalltalk.MaglevObjectInline);

smalltalk.addMethod(
unescape('_isShort_'),
smalltalk.method({
selector: unescape('isShort%3A'),
fn: function (aBoolean){
var self=this;
(self['@isShort']=aBoolean);
return self;}
}),
smalltalk.MaglevObjectInline);

smalltalk.addMethod(
unescape('_maxDepth'),
smalltalk.method({
selector: unescape('maxDepth'),
fn: function (){
var self=this;
return (1);
return self;}
}),
smalltalk.MaglevObjectInline);

smalltalk.addMethod(
unescape('_maxInspection'),
smalltalk.method({
selector: unescape('maxInspection'),
fn: function (){
var self=this;
return (15);
return self;}
}),
smalltalk.MaglevObjectInline);

smalltalk.addMethod(
unescape('_object'),
smalltalk.method({
selector: unescape('object'),
fn: function (){
var self=this;
return self['@object'];
return self;}
}),
smalltalk.MaglevObjectInline);

smalltalk.addMethod(
unescape('_object_'),
smalltalk.method({
selector: unescape('object%3A'),
fn: function (anObject){
var self=this;
(self['@object']=anObject);
return self;}
}),
smalltalk.MaglevObjectInline);

smalltalk.addMethod(
unescape('_renderDraggableObjectOn_'),
smalltalk.method({
selector: unescape('renderDraggableObjectOn%3A'),
fn: function (html){
var self=this;
(function($rec){smalltalk.send($rec, "_class_", [unescape("draggable-new-object-container")]);return smalltalk.send($rec, "_with_", [(function(){return (self['@dragObject']=(function($rec){smalltalk.send($rec, "_class_", [unescape("ui-widget-content%20ui-draggable%20draggable-new-object")]);return smalltalk.send($rec, "_with_", [(function(){(self['@dragDummy']=(function($rec){smalltalk.send($rec, "_class_", [unescape("object-drag-dummy")]);smalltalk.send($rec, "_style_", [unescape("display%3A%20none%3B")]);smalltalk.send($rec, "_with_", [smalltalk.send((smalltalk.MaglevIcon || MaglevIcon), "_move", [])]);return smalltalk.send($rec, "_with_", [(function(){return smalltalk.send(self, "_renderObjectContainerOn_", [html]);})]);})(smalltalk.send(html, "_div", [])));return (self['@dragContent']=(function($rec){smalltalk.send($rec, "_class_", [unescape("object-iv-name")]);return smalltalk.send($rec, "_with_", [(function(){return smalltalk.send(self, "_renderObjectContainerOn_", [html]);})]);})(smalltalk.send(html, "_div", [])));})]);})(smalltalk.send(html, "_div", [])));})]);})(smalltalk.send(html, "_div", []));
smalltalk.send(self, "_bindDraggable", []);
return self;}
}),
smalltalk.MaglevObjectInline);

smalltalk.addMethod(
unescape('_renderLoadedObjectOn_'),
smalltalk.method({
selector: unescape('renderLoadedObjectOn%3A'),
fn: function (html){
var self=this;
var text=nil;
var shorted=nil;
(shorted=false);
(text=smalltalk.send(smalltalk.send(self['@object'], "_inspection", []), "_copyFrom_to_", [(1), smalltalk.send(self, "_maxInspection", [])]));
((($receiver = ((($receiver = smalltalk.send(text, "_size", [])).klass === smalltalk.Number) ? $receiver <smalltalk.send(smalltalk.send(self['@object'], "_inspection", []), "_size", []) : smalltalk.send($receiver, "__lt", [smalltalk.send(smalltalk.send(self['@object'], "_inspection", []), "_size", [])]))).klass === smalltalk.Boolean) ? ($receiver ? (function(){(text=smalltalk.send(text, "__comma", ["..."]));return (shorted=true);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){(text=smalltalk.send(text, "__comma", ["..."]));return (shorted=true);})]));
smalltalk.send(html, "_with_", [(function(){var tooltip=nil;
(tooltip=(function($rec){smalltalk.send($rec, "_data_with_", ["toggle", "tooltip"]);smalltalk.send($rec, "_data_with_", ["placement", "top"]);smalltalk.send($rec, "_data_with_", [unescape("original-title"), smalltalk.send(self['@object'], "_inspection", [])]);return smalltalk.send($rec, "_with_", [text]);})(smalltalk.send(html, "_span", [])));return ((($receiver = shorted).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(smalltalk.send(tooltip, "_asJQuery", []), "_tooltip", []);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(smalltalk.send(tooltip, "_asJQuery", []), "_tooltip", []);})]));})]);
return self;}
}),
smalltalk.MaglevObjectInline);

smalltalk.addMethod(
unescape('_renderObjectActionsOn_'),
smalltalk.method({
selector: unescape('renderObjectActionsOn%3A'),
fn: function (html){
var self=this;
(function($rec){smalltalk.send($rec, "_with_", [smalltalk.send((smalltalk.MaglevIcon || MaglevIcon), "_search", [])]);return smalltalk.send($rec, "_with_", [smalltalk.send((smalltalk.MaglevIcon || MaglevIcon), "_pencil", [])]);})(html);
return self;}
}),
smalltalk.MaglevObjectInline);

smalltalk.addMethod(
unescape('_renderObjectContainerOn_'),
smalltalk.method({
selector: unescape('renderObjectContainerOn%3A'),
fn: function (html){
var self=this;
(function($rec){smalltalk.send($rec, "_class_", [unescape("object-inline-view-view")]);return smalltalk.send($rec, "_with_", [(function(){smalltalk.send(self, "_renderObjectActionsOn_", [html]);return (function($rec){smalltalk.send($rec, "_class_", [unescape("object-inline-typed-view")]);return smalltalk.send($rec, "_with_", [(function(){return ((($receiver = smalltalk.send(self, "_hasDropDown", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self, "_renderObjectWithDropDownOn_", [html]);})() : (function(){return smalltalk.send(self, "_renderObjectOn_", [html]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(self, "_renderObjectWithDropDownOn_", [html]);}), (function(){return smalltalk.send(self, "_renderObjectOn_", [html]);})]));})]);})(smalltalk.send(html, "_span", []));})]);})(smalltalk.send(html, "_span", []));
return self;}
}),
smalltalk.MaglevObjectInline);

smalltalk.addMethod(
unescape('_renderObjectOn_'),
smalltalk.method({
selector: unescape('renderObjectOn%3A'),
fn: function (html){
var self=this;
((($receiver = smalltalk.send(self['@object'], "_isLoaded", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self, "_renderLoadedObjectOn_", [html]);})() : (function(){return smalltalk.send(self, "_renderUnloadedObjectOn_", [html]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(self, "_renderLoadedObjectOn_", [html]);}), (function(){return smalltalk.send(self, "_renderUnloadedObjectOn_", [html]);})]));
return self;}
}),
smalltalk.MaglevObjectInline);

smalltalk.addMethod(
unescape('_renderObjectWithDropDownOn_'),
smalltalk.method({
selector: unescape('renderObjectWithDropDownOn%3A'),
fn: function (html){
var self=this;
var dropdownContainer=nil;
(dropdownContainer=(function($rec){smalltalk.send($rec, "_class_", ["dropdown"]);return smalltalk.send($rec, "_with_", [(function(){return (function($rec){smalltalk.send($rec, "_class_", [unescape("dropdown-toggle%20btn%20object-dropdown-toggle")]);smalltalk.send($rec, "_data_with_", ["toggle", "dropdown"]);smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send(self, "_showDropdownFor_", [dropdownContainer]);})]);return smalltalk.send($rec, "_with_", [(function(){smalltalk.send(self, "_renderObjectOn_", [html]);return smalltalk.send(smalltalk.send(html, "_b", []), "_class_", ["caret"]);})]);})(smalltalk.send(html, "_a", []));})]);})(smalltalk.send(html, "_span", [])));
return self;}
}),
smalltalk.MaglevObjectInline);

smalltalk.addMethod(
unescape('_renderOn_'),
smalltalk.method({
selector: unescape('renderOn%3A'),
fn: function (html){
var self=this;
((($receiver = smalltalk.send(self, "_isDraggable", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self, "_renderDraggableObjectOn_", [html]);})() : (function(){return smalltalk.send(self, "_renderObjectContainerOn_", [html]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(self, "_renderDraggableObjectOn_", [html]);}), (function(){return smalltalk.send(self, "_renderObjectContainerOn_", [html]);})]));
return self;}
}),
smalltalk.MaglevObjectInline);

smalltalk.addMethod(
unescape('_renderText_withDropDownOn_'),
smalltalk.method({
selector: unescape('renderText%3AwithDropDownOn%3A'),
fn: function (text, html){
var self=this;
var dropdownContainer=nil;
(dropdownContainer=(function($rec){smalltalk.send($rec, "_class_", ["dropdown"]);return smalltalk.send($rec, "_with_", [(function(){return (function($rec){smalltalk.send($rec, "_class_", [unescape("dropdown-toggle%20btn%20object-dropdown-toggle")]);smalltalk.send($rec, "_data_with_", ["toggle", "dropdown"]);smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send(self, "_showDropdownFor_", [dropdownContainer]);})]);return smalltalk.send($rec, "_with_", [(function(){smalltalk.send(html, "_with_", [text]);return smalltalk.send(smalltalk.send(html, "_b", []), "_class_", ["caret"]);})]);})(smalltalk.send(html, "_a", []));})]);})(smalltalk.send(html, "_span", [])));
return self;}
}),
smalltalk.MaglevObjectInline);

smalltalk.addMethod(
unescape('_renderUnloadedObjectOn_'),
smalltalk.method({
selector: unescape('renderUnloadedObjectOn%3A'),
fn: function (html){
var self=this;
var text=nil;
var shorted=nil;
(shorted=false);
(text=smalltalk.send(smalltalk.send(self['@object'], "_inspection", []), "_copyFrom_to_", [(1), smalltalk.send(self, "_maxInspection", [])]));
((($receiver = ((($receiver = smalltalk.send(text, "_size", [])).klass === smalltalk.Number) ? $receiver <smalltalk.send(smalltalk.send(self['@object'], "_inspection", []), "_size", []) : smalltalk.send($receiver, "__lt", [smalltalk.send(smalltalk.send(self['@object'], "_inspection", []), "_size", [])]))).klass === smalltalk.Boolean) ? ($receiver ? (function(){(text=smalltalk.send(text, "__comma", ["..."]));return (shorted=true);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){(text=smalltalk.send(text, "__comma", ["..."]));return (shorted=true);})]));
smalltalk.send(html, "_with_", [(function(){var tooltip=nil;
(tooltip=(function($rec){smalltalk.send($rec, "_data_with_", ["toggle", "tooltip"]);smalltalk.send($rec, "_data_with_", ["placement", "top"]);smalltalk.send($rec, "_data_with_", [unescape("original-title"), smalltalk.send(self['@object'], "_inspection", [])]);return smalltalk.send($rec, "_with_", [text]);})(smalltalk.send(html, "_span", [])));return ((($receiver = shorted).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(smalltalk.send(tooltip, "_asJQuery", []), "_tooltip", []);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(smalltalk.send(tooltip, "_asJQuery", []), "_tooltip", []);})]));})]);
return self;}
}),
smalltalk.MaglevObjectInline);

smalltalk.addMethod(
unescape('_showDropdownFor_'),
smalltalk.method({
selector: unescape('showDropdownFor%3A'),
fn: function (dropdownContainer){
var self=this;
smalltalk.send(smalltalk.send((smalltalk.MaglevObjectDropdown || MaglevObjectDropdown), "_instance", []), "_appendToInlineObject_for_", [self, dropdownContainer]);
return self;}
}),
smalltalk.MaglevObjectInline);


smalltalk.addMethod(
unescape('_newWithDepth_'),
smalltalk.method({
selector: unescape('newWithDepth%3A'),
fn: function (anInteger){
var self=this;
return (function($rec){smalltalk.send($rec, "_depth_", [anInteger]);smalltalk.send($rec, "_initialize", []);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(self, "_basicNew", []));
return self;}
}),
smalltalk.MaglevObjectInline.klass);


smalltalk.addClass('MaglevArrayInline', smalltalk.MaglevObjectInline, [], 'Maglev-Database-Explorer');
smalltalk.addMethod(
unescape('_maxDepth'),
smalltalk.method({
selector: unescape('maxDepth'),
fn: function (){
var self=this;
return (2);
return self;}
}),
smalltalk.MaglevArrayInline);

smalltalk.addMethod(
unescape('_maxElements'),
smalltalk.method({
selector: unescape('maxElements'),
fn: function (){
var self=this;
return (3);
return self;}
}),
smalltalk.MaglevArrayInline);

smalltalk.addMethod(
unescape('_renderLoadedObjectOn_'),
smalltalk.method({
selector: unescape('renderLoadedObjectOn%3A'),
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
return self;}
}),
smalltalk.MaglevArrayInline);

smalltalk.addMethod(
unescape('_renderObjectWithDropDownOn_'),
smalltalk.method({
selector: unescape('renderObjectWithDropDownOn%3A'),
fn: function (html){
var self=this;
smalltalk.send(self, "_renderObjectOn_", [html]);
return self;}
}),
smalltalk.MaglevArrayInline);

smalltalk.addMethod(
unescape('_renderUnloadedObjectOn_'),
smalltalk.method({
selector: unescape('renderUnloadedObjectOn%3A'),
fn: function (html){
var self=this;
smalltalk.send(self, "_renderText_withDropDownOn_", [unescape("%5B"), html]);
smalltalk.send(html, "_with_", ["..."]);
smalltalk.send(self, "_renderText_withDropDownOn_", [unescape("%5D"), html]);
return self;}
}),
smalltalk.MaglevArrayInline);



smalltalk.addClass('MaglevFixnumInline', smalltalk.MaglevObjectInline, [], 'Maglev-Database-Explorer');
smalltalk.addMethod(
unescape('_hasDropDownDefault'),
smalltalk.method({
selector: unescape('hasDropDownDefault'),
fn: function (){
var self=this;
return false;
return self;}
}),
smalltalk.MaglevFixnumInline);

smalltalk.addMethod(
unescape('_isDraggableDefault'),
smalltalk.method({
selector: unescape('isDraggableDefault'),
fn: function (){
var self=this;
return false;
return self;}
}),
smalltalk.MaglevFixnumInline);



smalltalk.addClass('MaglevFloatInline', smalltalk.MaglevObjectInline, [], 'Maglev-Database-Explorer');
smalltalk.addMethod(
unescape('_hasDropDownDefault'),
smalltalk.method({
selector: unescape('hasDropDownDefault'),
fn: function (){
var self=this;
return false;
return self;}
}),
smalltalk.MaglevFloatInline);

smalltalk.addMethod(
unescape('_isDraggableDefault'),
smalltalk.method({
selector: unescape('isDraggableDefault'),
fn: function (){
var self=this;
return false;
return self;}
}),
smalltalk.MaglevFloatInline);



smalltalk.addClass('MaglevHashInline', smalltalk.MaglevObjectInline, [], 'Maglev-Database-Explorer');
smalltalk.addMethod(
unescape('_isDraggableDefault'),
smalltalk.method({
selector: unescape('isDraggableDefault'),
fn: function (){
var self=this;
return false;
return self;}
}),
smalltalk.MaglevHashInline);

smalltalk.addMethod(
unescape('_maxDepth'),
smalltalk.method({
selector: unescape('maxDepth'),
fn: function (){
var self=this;
return (2);
return self;}
}),
smalltalk.MaglevHashInline);

smalltalk.addMethod(
unescape('_maxElements'),
smalltalk.method({
selector: unescape('maxElements'),
fn: function (){
var self=this;
return (3);
return self;}
}),
smalltalk.MaglevHashInline);

smalltalk.addMethod(
unescape('_renderLoadedObjectOn_'),
smalltalk.method({
selector: unescape('renderLoadedObjectOn%3A'),
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
return self;}
}),
smalltalk.MaglevHashInline);

smalltalk.addMethod(
unescape('_renderObjectWithDropDownOn_'),
smalltalk.method({
selector: unescape('renderObjectWithDropDownOn%3A'),
fn: function (html){
var self=this;
smalltalk.send(self, "_renderObjectOn_", [html]);
return self;}
}),
smalltalk.MaglevHashInline);

smalltalk.addMethod(
unescape('_renderUnloadedObjectOn_'),
smalltalk.method({
selector: unescape('renderUnloadedObjectOn%3A'),
fn: function (html){
var self=this;
smalltalk.send(self, "_renderText_withDropDownOn_", [unescape("%7B"), html]);
smalltalk.send(html, "_with_", ["..."]);
smalltalk.send(self, "_renderText_withDropDownOn_", [unescape("%7D"), html]);
return self;}
}),
smalltalk.MaglevHashInline);



smalltalk.addClass('MaglevModuleInline', smalltalk.MaglevObjectInline, [], 'Maglev-Database-Explorer');
smalltalk.addMethod(
unescape('_maxDepth'),
smalltalk.method({
selector: unescape('maxDepth'),
fn: function (){
var self=this;
return (1);
return self;}
}),
smalltalk.MaglevModuleInline);



smalltalk.addClass('MaglevClassInline', smalltalk.MaglevModuleInline, [], 'Maglev-Database-Explorer');
smalltalk.addMethod(
unescape('_maxDepth'),
smalltalk.method({
selector: unescape('maxDepth'),
fn: function (){
var self=this;
return (1);
return self;}
}),
smalltalk.MaglevClassInline);



smalltalk.addClass('MaglevNilClassInline', smalltalk.MaglevObjectInline, [], 'Maglev-Database-Explorer');
smalltalk.addMethod(
unescape('_hasDropDownDefault'),
smalltalk.method({
selector: unescape('hasDropDownDefault'),
fn: function (){
var self=this;
return false;
return self;}
}),
smalltalk.MaglevNilClassInline);

smalltalk.addMethod(
unescape('_isDraggableDefault'),
smalltalk.method({
selector: unescape('isDraggableDefault'),
fn: function (){
var self=this;
return false;
return self;}
}),
smalltalk.MaglevNilClassInline);



smalltalk.addClass('MaglevStringInline', smalltalk.MaglevObjectInline, [], 'Maglev-Database-Explorer');
smalltalk.addMethod(
unescape('_hasDropDownDefault'),
smalltalk.method({
selector: unescape('hasDropDownDefault'),
fn: function (){
var self=this;
return false;
return self;}
}),
smalltalk.MaglevStringInline);

smalltalk.addMethod(
unescape('_isDraggableDefault'),
smalltalk.method({
selector: unescape('isDraggableDefault'),
fn: function (){
var self=this;
return false;
return self;}
}),
smalltalk.MaglevStringInline);



smalltalk.addClass('MaglevSymbolInline', smalltalk.MaglevObjectInline, [], 'Maglev-Database-Explorer');
smalltalk.addMethod(
unescape('_hasDropDownDefault'),
smalltalk.method({
selector: unescape('hasDropDownDefault'),
fn: function (){
var self=this;
return false;
return self;}
}),
smalltalk.MaglevSymbolInline);

smalltalk.addMethod(
unescape('_isDraggableDefault'),
smalltalk.method({
selector: unescape('isDraggableDefault'),
fn: function (){
var self=this;
return false;
return self;}
}),
smalltalk.MaglevSymbolInline);



smalltalk.addClass('MaglevTable', smalltalk.Widget, ['object', 'collectionName', 'rangeFrom', 'rangeTo', 'isAssociationDictionary', 'tableBody', 'currentPage', 'pageListItems', 'pagination'], 'Maglev-Database-Explorer');
smalltalk.addMethod(
unescape('_collection'),
smalltalk.method({
selector: unescape('collection'),
fn: function (){
var self=this;
return smalltalk.send(self['@object'], "_perform_", [self['@collectionName']]);
return self;}
}),
smalltalk.MaglevTable);

smalltalk.addMethod(
unescape('_collectionName'),
smalltalk.method({
selector: unescape('collectionName'),
fn: function (){
var self=this;
return self['@collectionName'];
return self;}
}),
smalltalk.MaglevTable);

smalltalk.addMethod(
unescape('_collectionName_'),
smalltalk.method({
selector: unescape('collectionName%3A'),
fn: function (aString){
var self=this;
(self['@collectionName']=aString);
return self;}
}),
smalltalk.MaglevTable);

smalltalk.addMethod(
unescape('_collectionSize'),
smalltalk.method({
selector: unescape('collectionSize'),
fn: function (){
var self=this;
return smalltalk.send(self['@object'], "_perform_", [smalltalk.send(self['@collectionName'], "__comma", ["Size"])]);
return self;}
}),
smalltalk.MaglevTable);

smalltalk.addMethod(
unescape('_currentPage'),
smalltalk.method({
selector: unescape('currentPage'),
fn: function (){
var self=this;
(($receiver = self['@currentPage']) == nil || $receiver == undefined) ? (function(){return (self['@currentPage']=(1));})() : $receiver;
return self['@currentPage'];
return self;}
}),
smalltalk.MaglevTable);

smalltalk.addMethod(
unescape('_isAssociationDictionary'),
smalltalk.method({
selector: unescape('isAssociationDictionary'),
fn: function (){
var self=this;
(($receiver = self['@isAssociationDictionary']) == nil || $receiver == undefined) ? (function(){return (self['@isAssociationDictionary']=false);})() : $receiver;
return self['@isAssociationDictionary'];
return self;}
}),
smalltalk.MaglevTable);

smalltalk.addMethod(
unescape('_isAssociationDictionary_'),
smalltalk.method({
selector: unescape('isAssociationDictionary%3A'),
fn: function (aBoolean){
var self=this;
(self['@isAssociationDictionary']=aBoolean);
return self;}
}),
smalltalk.MaglevTable);

smalltalk.addMethod(
unescape('_object'),
smalltalk.method({
selector: unescape('object'),
fn: function (){
var self=this;
return self['@object'];
return self;}
}),
smalltalk.MaglevTable);

smalltalk.addMethod(
unescape('_object_'),
smalltalk.method({
selector: unescape('object%3A'),
fn: function (anObject){
var self=this;
(self['@object']=anObject);
return self;}
}),
smalltalk.MaglevTable);

smalltalk.addMethod(
unescape('_pageSize'),
smalltalk.method({
selector: unescape('pageSize'),
fn: function (){
var self=this;
return (10);
return self;}
}),
smalltalk.MaglevTable);

smalltalk.addMethod(
unescape('_pages'),
smalltalk.method({
selector: unescape('pages'),
fn: function (){
var self=this;
return smalltalk.send(((($receiver = smalltalk.send(self, "_collectionSize", [])).klass === smalltalk.Number) ? $receiver /smalltalk.send(self, "_pageSize", []) : smalltalk.send($receiver, "__slash", [smalltalk.send(self, "_pageSize", [])])), "_ceiled", []);
return self;}
}),
smalltalk.MaglevTable);

smalltalk.addMethod(
unescape('_rangeFrom'),
smalltalk.method({
selector: unescape('rangeFrom'),
fn: function (){
var self=this;
(($receiver = self['@rangeFrom']) == nil || $receiver == undefined) ? (function(){return (self['@rangeFrom']=(1));})() : $receiver;
return self['@rangeFrom'];
return self;}
}),
smalltalk.MaglevTable);

smalltalk.addMethod(
unescape('_rangeFrom_'),
smalltalk.method({
selector: unescape('rangeFrom%3A'),
fn: function (anInteger){
var self=this;
(self['@rangeFrom']=anInteger);
return self;}
}),
smalltalk.MaglevTable);

smalltalk.addMethod(
unescape('_rangeTo'),
smalltalk.method({
selector: unescape('rangeTo'),
fn: function (){
var self=this;
return smalltalk.send(((($receiver = ((($receiver = smalltalk.send(self, "_rangeFrom", [])).klass === smalltalk.Number) ? $receiver +smalltalk.send(self, "_pageSize", []) : smalltalk.send($receiver, "__plus", [smalltalk.send(self, "_pageSize", [])]))).klass === smalltalk.Number) ? $receiver -(1) : smalltalk.send($receiver, "__minus", [(1)])), "_min_", [smalltalk.send(self, "_collectionSize", [])]);
return self;}
}),
smalltalk.MaglevTable);

smalltalk.addMethod(
unescape('_renderAssociation_to_on_'),
smalltalk.method({
selector: unescape('renderAssociation%3Ato%3Aon%3A'),
fn: function (key, value, html){
var self=this;
smalltalk.send(smalltalk.send(html, "_tr", []), "_with_", [(function(){smalltalk.send(smalltalk.send(html, "_td", []), "_with_", [smalltalk.send(key, "_inlineViewComponent", [])]);return smalltalk.send(smalltalk.send(html, "_td", []), "_with_", [smalltalk.send(value, "_inlineViewComponent", [])]);})]);
return self;}
}),
smalltalk.MaglevTable);

smalltalk.addMethod(
unescape('_renderAssociationDictionaryBodyOn_'),
smalltalk.method({
selector: unescape('renderAssociationDictionaryBodyOn%3A'),
fn: function (html){
var self=this;
smalltalk.send(smalltalk.send(smalltalk.send(self, "_rangeFrom", []), "_to_", [smalltalk.send(self, "_rangeTo", [])]), "_do_", [(function(idx){var obj=nil;
(obj=smalltalk.send(smalltalk.send(self, "_collection", []), "_at_", [idx]));return smalltalk.send(smalltalk.send(html, "_tr", []), "_with_", [(function(){smalltalk.send(smalltalk.send(html, "_td", []), "_with_", [smalltalk.send(smalltalk.send(obj, "_key", []), "_inlineViewComponent", [])]);return smalltalk.send(smalltalk.send(html, "_td", []), "_with_", [smalltalk.send(smalltalk.send(obj, "_value", []), "_inlineViewComponent", [])]);})]);})]);
return self;}
}),
smalltalk.MaglevTable);

smalltalk.addMethod(
unescape('_renderDictionaryBodyOn_'),
smalltalk.method({
selector: unescape('renderDictionaryBodyOn%3A'),
fn: function (html){
var self=this;
smalltalk.send(smalltalk.send(smalltalk.send(self, "_rangeFrom", []), "_to_", [smalltalk.send(self, "_rangeTo", [])]), "_do_", [(function(idx){var obj=nil;
(obj=smalltalk.send(smalltalk.send(self, "_collection", []), "_at_", [idx]));return smalltalk.send(smalltalk.send(html, "_tr", []), "_with_", [(function(){smalltalk.send(smalltalk.send(html, "_td", []), "_with_", [smalltalk.send(idx, "_inlineViewComponent", [])]);return smalltalk.send(smalltalk.send(html, "_td", []), "_with_", [smalltalk.send(obj, "_inlineViewComponent", [])]);})]);})]);
return self;}
}),
smalltalk.MaglevTable);

smalltalk.addMethod(
unescape('_renderOn_'),
smalltalk.method({
selector: unescape('renderOn%3A'),
fn: function (html){
var self=this;
var pagClass=nil;
((($receiver = smalltalk.send(smalltalk.send(self, "_pages", []), "__eq", [(1)])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (pagClass=unescape("display%3A%20none%3B"));})() : (function(){return (pagClass="");})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return (pagClass=unescape("display%3A%20none%3B"));}), (function(){return (pagClass="");})]));
(function($rec){smalltalk.send($rec, "_class_", [unescape("table%20table-bordered")]);smalltalk.send($rec, "_style_", [unescape("margin-bottom%3A%200px%3B")]);return smalltalk.send($rec, "_with_", [(function(){return (self['@tableBody']=smalltalk.send(html, "_tbody", []));})]);})(smalltalk.send(html, "_table", []));
(function($rec){smalltalk.send($rec, "_style_", [unescape("text-align%3A%20center%3B")]);return smalltalk.send($rec, "_with_", [(function(){return (self['@pagination']=(function($rec){smalltalk.send($rec, "_class_", ["pagination"]);return smalltalk.send($rec, "_style_", [pagClass]);})(smalltalk.send(html, "_span", [])));})]);})(smalltalk.send(html, "_div", []));
smalltalk.send(self, "_renderPagination", []);
smalltalk.send(self, "_renderPage_", [(1)]);
return self;}
}),
smalltalk.MaglevTable);

smalltalk.addMethod(
unescape('_renderPage_'),
smalltalk.method({
selector: unescape('renderPage%3A'),
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
return self;}
}),
smalltalk.MaglevTable);

smalltalk.addMethod(
unescape('_renderPagination'),
smalltalk.method({
selector: unescape('renderPagination'),
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
return self;}
}),
smalltalk.MaglevTable);

smalltalk.addMethod(
unescape('_renderTableBodyOn_'),
smalltalk.method({
selector: unescape('renderTableBodyOn%3A'),
fn: function (html){
var self=this;
try{((($receiver = smalltalk.send(self, "_isAssociationDictionary", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(self, "_renderAssociationDictionaryBodyOn_", [html]);return (function(){throw({name: 'stReturn', selector: '_renderTableBodyOn_', fn: function(){return self}})})();})() : (function(){smalltalk.send(self, "_renderDictionaryBodyOn_", [html]);return (function(){throw({name: 'stReturn', selector: '_renderTableBodyOn_', fn: function(){return self}})})();})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){smalltalk.send(self, "_renderAssociationDictionaryBodyOn_", [html]);return (function(){throw({name: 'stReturn', selector: '_renderTableBodyOn_', fn: function(){return self}})})();}), (function(){smalltalk.send(self, "_renderDictionaryBodyOn_", [html]);return (function(){throw({name: 'stReturn', selector: '_renderTableBodyOn_', fn: function(){return self}})})();})]));
return self;
} catch(e) {if(e.name === 'stReturn' && e.selector === '_renderTableBodyOn_'){return e.fn()} throw(e)}}
}),
smalltalk.MaglevTable);


smalltalk.addMethod(
unescape('_newAssociationDictFor_with_'),
smalltalk.method({
selector: unescape('newAssociationDictFor%3Awith%3A'),
fn: function (anObject, aString){
var self=this;
return (function($rec){smalltalk.send($rec, "_object_", [anObject]);smalltalk.send($rec, "_collectionName_", [aString]);smalltalk.send($rec, "_isAssociationDictionary_", [true]);smalltalk.send($rec, "_initialize", []);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(self, "_basicNew", []));
return self;}
}),
smalltalk.MaglevTable.klass);

smalltalk.addMethod(
unescape('_newFor_with_'),
smalltalk.method({
selector: unescape('newFor%3Awith%3A'),
fn: function (anObject, aString){
var self=this;
return (function($rec){smalltalk.send($rec, "_object_", [anObject]);smalltalk.send($rec, "_collectionName_", [aString]);smalltalk.send($rec, "_initialize", []);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(self, "_basicNew", []));
return self;}
}),
smalltalk.MaglevTable.klass);


smalltalk.addClass('MaglevWindow', smalltalk.Widget, ['container'], 'Maglev-Database-Explorer');
smalltalk.addMethod(
unescape('_appendToWorkspace'),
smalltalk.method({
selector: unescape('appendToWorkspace'),
fn: function (){
var self=this;
smalltalk.send(self, "_renderOn_", [smalltalk.send((smalltalk.HTMLCanvas || HTMLCanvas), "_onJQuery_", [smalltalk.send(unescape("%23workspace"), "_asJQuery", [])])]);
return self;}
}),
smalltalk.MaglevWindow);

smalltalk.addMethod(
unescape('_clear'),
smalltalk.method({
selector: unescape('clear'),
fn: function (){
var self=this;
smalltalk.send(smalltalk.send(self['@container'], "_asJQuery", []), "_empty", []);
return self;}
}),
smalltalk.MaglevWindow);

smalltalk.addMethod(
unescape('_closeWindow'),
smalltalk.method({
selector: unescape('closeWindow'),
fn: function (){
var self=this;
smalltalk.send((smalltalk.MaglevJsPlumb || MaglevJsPlumb), "_deleteEndpointsFor_", [smalltalk.send(self['@container'], "_asJQuery", [])]);
smalltalk.send(smalltalk.send(self['@container'], "_asJQuery", []), "_remove", []);
return self;}
}),
smalltalk.MaglevWindow);

smalltalk.addMethod(
unescape('_connectTo_as_with_'),
smalltalk.method({
selector: unescape('connectTo%3Aas%3Awith%3A'),
fn: function (aWindow, type, caption){
var self=this;
smalltalk.send((smalltalk.MaglevJsPlumb || MaglevJsPlumb), "_connectWindow_to_as_with_", [self, aWindow, type, caption]);
return self;}
}),
smalltalk.MaglevWindow);

smalltalk.addMethod(
unescape('_connectTo_with_'),
smalltalk.method({
selector: unescape('connectTo%3Awith%3A'),
fn: function (aWindow, parameters){
var self=this;
smalltalk.send((smalltalk.MaglevJsPlumb || MaglevJsPlumb), "_connectWindow_to_with_", [self, aWindow, parameters]);
return self;}
}),
smalltalk.MaglevWindow);

smalltalk.addMethod(
unescape('_container'),
smalltalk.method({
selector: unescape('container'),
fn: function (){
var self=this;
return self['@container'];
return self;}
}),
smalltalk.MaglevWindow);

smalltalk.addMethod(
unescape('_isWaitingWindow'),
smalltalk.method({
selector: unescape('isWaitingWindow'),
fn: function (){
var self=this;
return false;
return self;}
}),
smalltalk.MaglevWindow);

smalltalk.addMethod(
unescape('_left_'),
smalltalk.method({
selector: unescape('left%3A'),
fn: function (aValue){
var self=this;
smalltalk.send(self['@container'], "_left_", [aValue]);
return self;}
}),
smalltalk.MaglevWindow);

smalltalk.addMethod(
unescape('_prepareWindow'),
smalltalk.method({
selector: unescape('prepareWindow'),
fn: function (){
var self=this;
smalltalk.send((smalltalk.MaglevJsPlumb || MaglevJsPlumb), "_prepareObject_", [smalltalk.send(self['@container'], "_asJQuery", [])]);
(function($rec){smalltalk.send($rec, "_onMouseEnter_", [(function(){return smalltalk.send(self['@container'], "_removeClass_", [unescape("window-mouse-out")]);})]);return smalltalk.send($rec, "_onMouseLeave_", [(function(){return smalltalk.send(self['@container'], "_addClass_", [unescape("window-mouse-out")]);})]);})(self['@container']);
return self;}
}),
smalltalk.MaglevWindow);

smalltalk.addMethod(
unescape('_renderCloseButtonOn_'),
smalltalk.method({
selector: unescape('renderCloseButtonOn%3A'),
fn: function (html){
var self=this;
(function($rec){smalltalk.send($rec, "_class_", [unescape("display-inline-block")]);return smalltalk.send($rec, "_with_", [(function(){return (function($rec){smalltalk.send($rec, "_href_", [unescape("%23")]);smalltalk.send($rec, "_class_", [unescape("window-close-button")]);smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send(self, "_closeWindow", []);})]);return smalltalk.send($rec, "_with_", [smalltalk.send((smalltalk.MaglevIcon || MaglevIcon), "_remove", [])]);})(smalltalk.send(html, "_a", []));})]);})(smalltalk.send(html, "_span", []));
return self;}
}),
smalltalk.MaglevWindow);

smalltalk.addMethod(
unescape('_renderHeightPlaceholderOn_'),
smalltalk.method({
selector: unescape('renderHeightPlaceholderOn%3A'),
fn: function (html){
var self=this;
(function($rec){smalltalk.send($rec, "_style_", [unescape("visibility%3A%20hidden%3B")]);return smalltalk.send($rec, "_with_", [(function(){return (function($rec){smalltalk.send($rec, "_class_", ["btn"]);return smalltalk.send($rec, "_with_", ["a"]);})(smalltalk.send(html, "_a", []));})]);})(smalltalk.send(html, "_span", []));
return self;}
}),
smalltalk.MaglevWindow);

smalltalk.addMethod(
unescape('_renderHorziontalLineOn_'),
smalltalk.method({
selector: unescape('renderHorziontalLineOn%3A'),
fn: function (html){
var self=this;
smalltalk.send(smalltalk.send(html, "_hr", []), "_style_", [unescape("margin%3A%2010px%3B")]);
return self;}
}),
smalltalk.MaglevWindow);

smalltalk.addMethod(
unescape('_renderOn_'),
smalltalk.method({
selector: unescape('renderOn%3A'),
fn: function (html){
var self=this;
(($receiver = self['@container']) == nil || $receiver == undefined) ? (function(){(self['@container']=smalltalk.send(html, "_div", []));return smalltalk.send(self, "_prepareWindow", []);})() : $receiver;
(function($rec){smalltalk.send($rec, "_class_", ["component window"]);return smalltalk.send($rec, "_with_", [(function(){return (function($rec){smalltalk.send($rec, "_class_", ["nowrap"]);return smalltalk.send($rec, "_with_", [(function(){smalltalk.send(self, "_renderWindowTitleOn_", [html]);return smalltalk.send(self, "_renderWindowContentOn_", [html]);})]);})(smalltalk.send(html, "_div", []));})]);})(self['@container']);
smalltalk.send(self['@container'], "_onMouseDown_", [(function(){return smalltalk.send(smalltalk.send(self['@container'], "_asJQuery", []), "_css_data_", [unescape("z-index"), ((($receiver = smalltalk.send(smalltalk.send(self, "_class", []), "_highestZIndex", [])).klass === smalltalk.Number) ? $receiver +(1) : smalltalk.send($receiver, "__plus", [(1)]))]);})]);
return self;}
}),
smalltalk.MaglevWindow);

smalltalk.addMethod(
unescape('_renderReplace'),
smalltalk.method({
selector: unescape('renderReplace'),
fn: function (){
var self=this;
smalltalk.send(self, "_renderOn_", [smalltalk.send((smalltalk.HTMLCanvas || HTMLCanvas), "_onJQuery_", [smalltalk.send(self['@container'], "_asJQuery", [])])]);
return self;}
}),
smalltalk.MaglevWindow);

smalltalk.addMethod(
unescape('_renderWindowContentOn_'),
smalltalk.method({
selector: unescape('renderWindowContentOn%3A'),
fn: function (html){
var self=this;

return self;}
}),
smalltalk.MaglevWindow);

smalltalk.addMethod(
unescape('_renderWindowTitleContentOn_'),
smalltalk.method({
selector: unescape('renderWindowTitleContentOn%3A'),
fn: function (html){
var self=this;
smalltalk.send(html, "_with_", ["A new window"]);
smalltalk.send(self, "_renderHeightPlaceholderOn_", [html]);
smalltalk.send(self, "_renderCloseButtonOn_", [html]);
return self;}
}),
smalltalk.MaglevWindow);

smalltalk.addMethod(
unescape('_renderWindowTitleOn_'),
smalltalk.method({
selector: unescape('renderWindowTitleOn%3A'),
fn: function (html){
var self=this;
(function($rec){smalltalk.send($rec, "_class_", [unescape("window-title")]);return smalltalk.send($rec, "_with_", [(function(){return (function($rec){smalltalk.send($rec, "_class_", [unescape("window-title-content")]);return smalltalk.send($rec, "_with_", [(function(){return smalltalk.send(self, "_renderWindowTitleContentOn_", [html]);})]);})(smalltalk.send(html, "_span", []));})]);})(smalltalk.send(html, "_div", []));
return self;}
}),
smalltalk.MaglevWindow);

smalltalk.addMethod(
unescape('_replace_'),
smalltalk.method({
selector: unescape('replace%3A'),
fn: function (aWindow){
var self=this;
smalltalk.send(aWindow, "_clear", []);
(self['@container']=smalltalk.send(aWindow, "_container", []));
return self;}
}),
smalltalk.MaglevWindow);

smalltalk.addMethod(
unescape('_top_'),
smalltalk.method({
selector: unescape('top%3A'),
fn: function (aValue){
var self=this;
smalltalk.send(self['@container'], "_top_", [aValue]);
return self;}
}),
smalltalk.MaglevWindow);


smalltalk.addMethod(
unescape('_highestZIndex'),
smalltalk.method({
selector: unescape('highestZIndex'),
fn: function (){
var self=this;
 var indexHighest = 0;
	$('.window').each(function(){
		var indexCurrent = parseInt($(this).css("z-index"), 10);
		if(indexCurrent > indexHighest) {
			indexHighest = indexCurrent;
		}
	});
	return indexHighest; ;
return self;}
}),
smalltalk.MaglevWindow.klass);

smalltalk.addMethod(
unescape('_newReplace_'),
smalltalk.method({
selector: unescape('newReplace%3A'),
fn: function (aWindow){
var self=this;
return (function($rec){smalltalk.send($rec, "_replace_", [aWindow]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(self, "_new", []));
return self;}
}),
smalltalk.MaglevWindow.klass);


smalltalk.addClass('MaglevObjectWindow', smalltalk.MaglevWindow, ['container', 'object', 'classObject', 'tabs', 'captions', 'tabsContainer'], 'Maglev-Database-Explorer');
smalltalk.addMethod(
unescape('_captions'),
smalltalk.method({
selector: unescape('captions'),
fn: function (){
var self=this;
(($receiver = self['@captions']) == nil || $receiver == undefined) ? (function(){return (self['@captions']=smalltalk.send((smalltalk.Dictionary || Dictionary), "_new", []));})() : $receiver;
return self['@captions'];
return self;}
}),
smalltalk.MaglevObjectWindow);

smalltalk.addMethod(
unescape('_checkAddConnectionTo_'),
smalltalk.method({
selector: unescape('checkAddConnectionTo%3A'),
fn: function (aWindow){
var self=this;
smalltalk.send(self['@object'], "_instVarsDo_", [(function(ivName, ivValue){return ((($receiver = smalltalk.send(ivValue, "__eq_eq", [smalltalk.send(aWindow, "_object", [])])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self, "_connectTo_as_with_", [aWindow, smalltalk.symbolFor("iv"), smalltalk.send(ivName, "_inspection", [])]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(self, "_connectTo_as_with_", [aWindow, smalltalk.symbolFor("iv"), smalltalk.send(ivName, "_inspection", [])]);})]));})]);
((($receiver = smalltalk.send(smalltalk.send(smalltalk.send(self['@object'], "_classObject", []), "__eq_eq", [smalltalk.send(aWindow, "_object", [])]), "_and_", [(function(){return smalltalk.send(smalltalk.send(self['@object'], "_virtualClassObject", []), "_~~", [smalltalk.send(aWindow, "_object", [])]);})])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self, "_connectTo_as_with_", [aWindow, smalltalk.symbolFor("class"), nil]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(self, "_connectTo_as_with_", [aWindow, smalltalk.symbolFor("class"), nil]);})]));
((($receiver = smalltalk.send(smalltalk.send(self['@object'], "_virtualClassObject", []), "__eq_eq", [smalltalk.send(aWindow, "_object", [])])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self, "_connectTo_as_with_", [aWindow, smalltalk.symbolFor("virtualClass"), nil]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(self, "_connectTo_as_with_", [aWindow, smalltalk.symbolFor("virtualClass"), nil]);})]));
return self;}
}),
smalltalk.MaglevObjectWindow);

smalltalk.addMethod(
unescape('_closeWindow'),
smalltalk.method({
selector: unescape('closeWindow'),
fn: function (){
var self=this;
smalltalk.send(smalltalk.send((smalltalk.MaglevObjectSpace || MaglevObjectSpace), "_instance", []), "_unregisterWindow_", [self]);
smalltalk.send(self, "_closeWindow", [], smalltalk.MaglevWindow);
return self;}
}),
smalltalk.MaglevObjectWindow);

smalltalk.addMethod(
unescape('_container'),
smalltalk.method({
selector: unescape('container'),
fn: function (){
var self=this;
return self['@container'];
return self;}
}),
smalltalk.MaglevObjectWindow);

smalltalk.addMethod(
unescape('_contentTabs'),
smalltalk.method({
selector: unescape('contentTabs'),
fn: function (){
var self=this;
var result=nil;
(result=smalltalk.send((smalltalk.Dictionary || Dictionary), "_new", []));
((($receiver = smalltalk.send(smalltalk.send(self, "_object", []), "_hasInstVars", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(result, "_at_put_", ["Instance Variables", smalltalk.symbolFor("renderInstanceVariablesOn:")]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(result, "_at_put_", ["Instance Variables", smalltalk.symbolFor("renderInstanceVariablesOn:")]);})]));
return result;
return self;}
}),
smalltalk.MaglevObjectWindow);

smalltalk.addMethod(
unescape('_object'),
smalltalk.method({
selector: unescape('object'),
fn: function (){
var self=this;
return self['@object'];
return self;}
}),
smalltalk.MaglevObjectWindow);

smalltalk.addMethod(
unescape('_object_'),
smalltalk.method({
selector: unescape('object%3A'),
fn: function (anObject){
var self=this;
(self['@object']=anObject);
(self['@classObject']=smalltalk.send(anObject, "_classObject", []));
return self;}
}),
smalltalk.MaglevObjectWindow);

smalltalk.addMethod(
unescape('_prepareWindow'),
smalltalk.method({
selector: unescape('prepareWindow'),
fn: function (){
var self=this;
smalltalk.send(smalltalk.send(smalltalk.send(self, "_prepareWindow", [], smalltalk.MaglevWindow), "_MaglevObjectSpace", []), "_registerWindow_", [self]);
return self;}
}),
smalltalk.MaglevObjectWindow);

smalltalk.addMethod(
unescape('_renderInstanceVariablesOn_'),
smalltalk.method({
selector: unescape('renderInstanceVariablesOn%3A'),
fn: function (html){
var self=this;
smalltalk.send(html, "_with_", [smalltalk.send((smalltalk.MaglevTable || MaglevTable), "_newAssociationDictFor_with_", [smalltalk.send(self, "_object", []), smalltalk.symbolFor("instVars")])]);
return self;}
}),
smalltalk.MaglevObjectWindow);

smalltalk.addMethod(
unescape('_renderVirtualClassAndClassOn_'),
smalltalk.method({
selector: unescape('renderVirtualClassAndClassOn%3A'),
fn: function (html){
var self=this;
((($receiver = smalltalk.send(self['@classObject'], "__eq", [smalltalk.send(self['@object'], "_virtualClassObject", [])])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return (function($rec){smalltalk.send($rec, "_with_", [" : "]);return smalltalk.send($rec, "_with_", [smalltalk.send(smalltalk.send(self['@object'], "_virtualClassObject", []), "_inlineViewComponent", [])]);})(html);})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return (function($rec){smalltalk.send($rec, "_with_", [" : "]);return smalltalk.send($rec, "_with_", [smalltalk.send(smalltalk.send(self['@object'], "_virtualClassObject", []), "_inlineViewComponent", [])]);})(html);})]));
(function($rec){smalltalk.send($rec, "_with_", [" :: "]);return smalltalk.send($rec, "_with_", [smalltalk.send(self['@classObject'], "_inlineViewComponent", [])]);})(html);
return self;}
}),
smalltalk.MaglevObjectWindow);

smalltalk.addMethod(
unescape('_renderWindowContentOn_'),
smalltalk.method({
selector: unescape('renderWindowContentOn%3A'),
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
return self;}
}),
smalltalk.MaglevObjectWindow);

smalltalk.addMethod(
unescape('_renderWindowTitleContentOn_'),
smalltalk.method({
selector: unescape('renderWindowTitleContentOn%3A'),
fn: function (html){
var self=this;
smalltalk.send(html, "_with_", [smalltalk.send(self['@object'], "_inlineViewComponentShort", [])]);
smalltalk.send(self, "_renderHeightPlaceholderOn_", [html]);
(function($rec){smalltalk.send($rec, "_class_", [unescape("right-inline-block")]);return smalltalk.send($rec, "_with_", [(function(){smalltalk.send(self, "_renderVirtualClassAndClassOn_", [html]);return smalltalk.send(self, "_renderCloseButtonOn_", [html]);})]);})(smalltalk.send(html, "_div", []));
return self;}
}),
smalltalk.MaglevObjectWindow);

smalltalk.addMethod(
unescape('_replace_'),
smalltalk.method({
selector: unescape('replace%3A'),
fn: function (aWindow){
var self=this;
smalltalk.send(self, "_replace_", [aWindow], smalltalk.MaglevWindow);
((($receiver = smalltalk.send(aWindow, "_isWaitingWindow", [])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return smalltalk.send(smalltalk.send((smalltalk.MaglevObjectSpace || MaglevObjectSpace), "_instance", []), "_unregisterWindow_", [aWindow]);})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return smalltalk.send(smalltalk.send((smalltalk.MaglevObjectSpace || MaglevObjectSpace), "_instance", []), "_unregisterWindow_", [aWindow]);})]));
smalltalk.send(smalltalk.send((smalltalk.MaglevObjectSpace || MaglevObjectSpace), "_instance", []), "_registerWindow_", [self]);
return self;}
}),
smalltalk.MaglevObjectWindow);

smalltalk.addMethod(
unescape('_showTab_'),
smalltalk.method({
selector: unescape('showTab%3A'),
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
return self;}
}),
smalltalk.MaglevObjectWindow);

smalltalk.addMethod(
unescape('_tabs'),
smalltalk.method({
selector: unescape('tabs'),
fn: function (){
var self=this;
(($receiver = self['@tabs']) == nil || $receiver == undefined) ? (function(){return (self['@tabs']=smalltalk.send((smalltalk.Dictionary || Dictionary), "_new", []));})() : $receiver;
return self['@tabs'];
return self;}
}),
smalltalk.MaglevObjectWindow);


smalltalk.addMethod(
unescape('_newReplace_with_'),
smalltalk.method({
selector: unescape('newReplace%3Awith%3A'),
fn: function (aWindow, anObject){
var self=this;
return (function($rec){smalltalk.send($rec, "_object_", [anObject]);smalltalk.send($rec, "_replace_", [aWindow]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(self, "_new", []));
return self;}
}),
smalltalk.MaglevObjectWindow.klass);


smalltalk.addClass('MaglevArrayWindow', smalltalk.MaglevObjectWindow, [], 'Maglev-Database-Explorer');
smalltalk.addMethod(
unescape('_checkAddConnectionTo_'),
smalltalk.method({
selector: unescape('checkAddConnectionTo%3A'),
fn: function (aWindow){
var self=this;
smalltalk.send(self, "_checkAddConnectionTo_", [aWindow], smalltalk.MaglevObjectWindow);
smalltalk.send(smalltalk.send(self['@object'], "_elements", []), "_keysAndValuesDo_", [(function(idx, value){return ((($receiver = smalltalk.send(value, "__eq_eq", [smalltalk.send(aWindow, "_object", [])])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self, "_connectTo_as_with_", [aWindow, smalltalk.symbolFor("arrayElement"), idx]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(self, "_connectTo_as_with_", [aWindow, smalltalk.symbolFor("arrayElement"), idx]);})]));})]);
return self;}
}),
smalltalk.MaglevArrayWindow);

smalltalk.addMethod(
unescape('_contentTabs'),
smalltalk.method({
selector: unescape('contentTabs'),
fn: function (){
var self=this;
var result=nil;
(result=smalltalk.send(self, "_contentTabs", [], smalltalk.MaglevObjectWindow));
((($receiver = smalltalk.send(smalltalk.send(self, "_object", []), "_hasElements", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(result, "_at_put_", ["Elements", smalltalk.symbolFor("renderArrayElementsOn:")]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(result, "_at_put_", ["Elements", smalltalk.symbolFor("renderArrayElementsOn:")]);})]));
return result;
return self;}
}),
smalltalk.MaglevArrayWindow);

smalltalk.addMethod(
unescape('_renderArrayElementsOn_'),
smalltalk.method({
selector: unescape('renderArrayElementsOn%3A'),
fn: function (html){
var self=this;
smalltalk.send(html, "_with_", [smalltalk.send((smalltalk.MaglevTable || MaglevTable), "_newFor_with_", [smalltalk.send(self, "_object", []), smalltalk.symbolFor("elements")])]);
return self;}
}),
smalltalk.MaglevArrayWindow);



smalltalk.addClass('MaglevExceptionWindow', smalltalk.MaglevObjectWindow, ['methodList', 'methodSelect', 'methodContainer', 'waitingScreen'], 'Maglev-Database-Explorer');
smalltalk.addMethod(
unescape('_contentTabs'),
smalltalk.method({
selector: unescape('contentTabs'),
fn: function (){
var self=this;
var result=nil;
(result=smalltalk.send(self, "_contentTabs", [], smalltalk.MaglevObjectWindow));
smalltalk.send(result, "_at_put_", ["Stack Trace", smalltalk.symbolFor("renderStackTraceOn:")]);
return result;
return self;}
}),
smalltalk.MaglevExceptionWindow);

smalltalk.addMethod(
unescape('_renderMethodObject'),
smalltalk.method({
selector: unescape('renderMethodObject'),
fn: function (){
var self=this;
var method=nil;
(method=smalltalk.send(self['@methodList'], "_at_", [smalltalk.send(smalltalk.send(self['@methodSelect'], "_asJQuery", []), "_val", [])]));
smalltalk.send(self['@waitingScreen'], "_show", []);
smalltalk.send(method, "_fullReloadWithCallback_", [(function(obj){return smalltalk.send(self, "_renderMethodObject_", [obj]);})]);
return self;}
}),
smalltalk.MaglevExceptionWindow);

smalltalk.addMethod(
unescape('_renderMethodObject_'),
smalltalk.method({
selector: unescape('renderMethodObject%3A'),
fn: function (obj){
var self=this;
smalltalk.send(smalltalk.send(self['@methodContainer'], "_asJQuery", []), "_empty", []);
smalltalk.send(self['@methodContainer'], "_with_", [smalltalk.send((smalltalk.MaglevGsNMethodEditor || MaglevGsNMethodEditor), "_for_", [obj])]);
smalltalk.send(self['@waitingScreen'], "_hide", []);
return self;}
}),
smalltalk.MaglevExceptionWindow);

smalltalk.addMethod(
unescape('_renderStackTraceOn_'),
smalltalk.method({
selector: unescape('renderStackTraceOn%3A'),
fn: function (html){
var self=this;
(self['@methodList']=smalltalk.send((smalltalk.Dictionary || Dictionary), "_new", []));
smalltalk.send(html, "_with_", [(function(){(self['@methodSelect']=(function($rec){smalltalk.send($rec, "_with_", [(function(){return smalltalk.send(self['@object'], "_methodsDo_", [(function(method){var methodName=nil;
(methodName=smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(method, "_inClass", []), "_smalltalkFullName", []), "__comma", [unescape("%20%5B")]), "__comma", [smalltalk.send(smalltalk.send(method, "_inClass", []), "_rubyFullName", [])]), "__comma", [unescape("%5D%20%3E%3E%20")]), "__comma", [smalltalk.send(smalltalk.send(method, "_selectorString", []), "_string", [])]));smalltalk.send(smalltalk.send(html, "_option", []), "_with_", [methodName]);return smalltalk.send(self['@methodList'], "_at_put_", [methodName, method]);})]);})]);smalltalk.send($rec, "_size_", [(10)]);smalltalk.send($rec, "_style_", [unescape("width%3A%20100%25%3B")]);return smalltalk.send($rec, "_onChange_", [(function(){return smalltalk.send(self, "_renderMethodObject", []);})]);})(smalltalk.send(html, "_select", [])));(self['@methodContainer']=smalltalk.send(html, "_div", []));return (self['@waitingScreen']=(function($rec){smalltalk.send($rec, "_with_", [(function(){return (function($rec){smalltalk.send($rec, "_with_", [smalltalk.send((smalltalk.MaglevIcon || MaglevIcon), "_wait", [])]);return smalltalk.send($rec, "_with_", [" loading..."]);})(html);})]);return smalltalk.send($rec, "_hide", []);})(smalltalk.send(html, "_div", [])));})]);
return self;}
}),
smalltalk.MaglevExceptionWindow);



smalltalk.addClass('MaglevFixnumWindow', smalltalk.MaglevObjectWindow, [], 'Maglev-Database-Explorer');


smalltalk.addClass('MaglevFloatWindow', smalltalk.MaglevObjectWindow, [], 'Maglev-Database-Explorer');


smalltalk.addClass('MaglevHashWindow', smalltalk.MaglevObjectWindow, [], 'Maglev-Database-Explorer');
smalltalk.addMethod(
unescape('_checkAddConnectionTo_'),
smalltalk.method({
selector: unescape('checkAddConnectionTo%3A'),
fn: function (aWindow){
var self=this;
smalltalk.send(self, "_checkAddConnectionTo_", [aWindow], smalltalk.MaglevObjectWindow);
smalltalk.send(self['@object'], "_keysAndValuesDo_", [(function(key, value){((($receiver = smalltalk.send(key, "__eq_eq", [smalltalk.send(aWindow, "_object", [])])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self, "_connectTo_as_with_", [aWindow, smalltalk.symbolFor("hashKey"), smalltalk.send(unescape("self%5B...%5D%20%3D%20"), "__comma", [smalltalk.send(value, "_shortInspection", [])])]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(self, "_connectTo_as_with_", [aWindow, smalltalk.symbolFor("hashKey"), smalltalk.send(unescape("self%5B...%5D%20%3D%20"), "__comma", [smalltalk.send(value, "_shortInspection", [])])]);})]));return ((($receiver = smalltalk.send(value, "__eq_eq", [smalltalk.send(aWindow, "_object", [])])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self, "_connectTo_as_with_", [aWindow, smalltalk.symbolFor("hashValue"), smalltalk.send(smalltalk.send(unescape("self%5B"), "__comma", [smalltalk.send(key, "_shortInspection", [])]), "__comma", [unescape("%5D%20%3D%20...")])]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(self, "_connectTo_as_with_", [aWindow, smalltalk.symbolFor("hashValue"), smalltalk.send(smalltalk.send(unescape("self%5B"), "__comma", [smalltalk.send(key, "_shortInspection", [])]), "__comma", [unescape("%5D%20%3D%20...")])]);})]));})]);
return self;}
}),
smalltalk.MaglevHashWindow);

smalltalk.addMethod(
unescape('_contentTabs'),
smalltalk.method({
selector: unescape('contentTabs'),
fn: function (){
var self=this;
var result=nil;
(result=smalltalk.send(self, "_contentTabs", [], smalltalk.MaglevObjectWindow));
((($receiver = smalltalk.send(smalltalk.send(self, "_object", []), "_hasElements", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(result, "_at_put_", ["Associations", smalltalk.symbolFor("renderHashElementsOn:")]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(result, "_at_put_", ["Associations", smalltalk.symbolFor("renderHashElementsOn:")]);})]));
return result;
return self;}
}),
smalltalk.MaglevHashWindow);

smalltalk.addMethod(
unescape('_renderHashElementsOn_'),
smalltalk.method({
selector: unescape('renderHashElementsOn%3A'),
fn: function (html){
var self=this;
smalltalk.send(html, "_with_", [smalltalk.send((smalltalk.MaglevTable || MaglevTable), "_newAssociationDictFor_with_", [smalltalk.send(self, "_object", []), smalltalk.symbolFor("elements")])]);
return self;}
}),
smalltalk.MaglevHashWindow);



smalltalk.addClass('MaglevModuleWindow', smalltalk.MaglevObjectWindow, ['categoryNamesSelect', 'selectorsSelect', 'selectors', 'rubySelectors', 'methodContainer', 'waitingScreen'], 'Maglev-Database-Explorer');
smalltalk.addMethod(
unescape('_contentTabs'),
smalltalk.method({
selector: unescape('contentTabs'),
fn: function (){
var self=this;
var result=nil;
(result=smalltalk.send(self, "_contentTabs", [], smalltalk.MaglevObjectWindow));
((($receiver = smalltalk.send(smalltalk.send(self, "_object", []), "_hasConstants", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(result, "_at_put_", ["Constants", smalltalk.symbolFor("renderConstantsOn:")]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(result, "_at_put_", ["Constants", smalltalk.symbolFor("renderConstantsOn:")]);})]));
((($receiver = smalltalk.send(smalltalk.send(self, "_object", []), "_hasIncludedModules", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(result, "_at_put_", ["Included Modules", smalltalk.symbolFor("renderIncludedModulesOn:")]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(result, "_at_put_", ["Included Modules", smalltalk.symbolFor("renderIncludedModulesOn:")]);})]));
smalltalk.send(result, "_at_put_", ["Code", smalltalk.symbolFor("renderCodeTabOn:")]);
return result;
return self;}
}),
smalltalk.MaglevModuleWindow);

smalltalk.addMethod(
unescape('_renderCodeTabOn_'),
smalltalk.method({
selector: unescape('renderCodeTabOn%3A'),
fn: function (html){
var self=this;
smalltalk.send(smalltalk.send(html, "_root", []), "_style_", [unescape("width%3A%20100%25%3B")]);
(self['@categoryNamesSelect']=(function($rec){smalltalk.send($rec, "_size_", [(10)]);smalltalk.send($rec, "_style_", [unescape("width%3A%2050%25%3B")]);return smalltalk.send($rec, "_hide", []);})(smalltalk.send(html, "_select", [])));
(self['@selectorsSelect']=(function($rec){smalltalk.send($rec, "_size_", [(10)]);smalltalk.send($rec, "_style_", [unescape("width%3A%2050%25%3B")]);return smalltalk.send($rec, "_hide", []);})(smalltalk.send(html, "_select", [])));
(self['@waitingScreen']=smalltalk.send(smalltalk.send(html, "_div", []), "_with_", [(function(){return (function($rec){smalltalk.send($rec, "_with_", [smalltalk.send((smalltalk.MaglevIcon || MaglevIcon), "_wait", [])]);return smalltalk.send($rec, "_with_", [" loading..."]);})(html);})]));
(self['@methodContainer']=smalltalk.send(html, "_div", []));
smalltalk.send(smalltalk.send(self, "_object", []), "_allSmalltalkSelectorsWithCallback_", [(function(success, obj){(self['@selectors']=obj);return smalltalk.send(smalltalk.send(self, "_object", []), "_allRubySelectorsWithCallback_", [(function(rSuccess, rObj){(self['@rubySelectors']=rObj);smalltalk.send(self, "_renderSelectorCategories", []);smalltalk.send(self, "_renderSelectors", []);smalltalk.send(self['@selectorsSelect'], "_onChange_", [(function(){return smalltalk.send(self, "_renderSourceCode", []);})]);smalltalk.send(self['@categoryNamesSelect'], "_onChange_", [(function(){return smalltalk.send(self, "_renderSelectors", []);})]);smalltalk.send(self['@waitingScreen'], "_hide", []);smalltalk.send(self['@categoryNamesSelect'], "_show", []);return smalltalk.send(self['@selectorsSelect'], "_show", []);})]);})]);
return self;}
}),
smalltalk.MaglevModuleWindow);

smalltalk.addMethod(
unescape('_renderConstantsOn_'),
smalltalk.method({
selector: unescape('renderConstantsOn%3A'),
fn: function (html){
var self=this;
smalltalk.send(html, "_with_", [smalltalk.send((smalltalk.MaglevTable || MaglevTable), "_newAssociationDictFor_with_", [smalltalk.send(self, "_object", []), smalltalk.symbolFor("constants")])]);
return self;}
}),
smalltalk.MaglevModuleWindow);

smalltalk.addMethod(
unescape('_renderIncludedModulesOn_'),
smalltalk.method({
selector: unescape('renderIncludedModulesOn%3A'),
fn: function (html){
var self=this;
smalltalk.send(html, "_with_", [smalltalk.send((smalltalk.MaglevTable || MaglevTable), "_newFor_with_", [smalltalk.send(self, "_object", []), smalltalk.symbolFor("includedModules")])]);
return self;}
}),
smalltalk.MaglevModuleWindow);

smalltalk.addMethod(
unescape('_renderMethodObject_'),
smalltalk.method({
selector: unescape('renderMethodObject%3A'),
fn: function (obj){
var self=this;
smalltalk.send(self['@methodContainer'], "_with_", [smalltalk.send((smalltalk.MaglevGsNMethodEditor || MaglevGsNMethodEditor), "_for_", [obj])]);
smalltalk.send(self['@waitingScreen'], "_hide", []);
return self;}
}),
smalltalk.MaglevModuleWindow);

smalltalk.addMethod(
unescape('_renderRubySourceCodeFor_'),
smalltalk.method({
selector: unescape('renderRubySourceCodeFor%3A'),
fn: function (selectorString){
var self=this;
smalltalk.send(self['@object'], "_rubySourceCodeFor_withCallback_", [selectorString, (function(success, obj){return smalltalk.send(self, "_renderMethodObject_", [obj]);})]);
return self;}
}),
smalltalk.MaglevModuleWindow);

smalltalk.addMethod(
unescape('_renderSelectorCategories'),
smalltalk.method({
selector: unescape('renderSelectorCategories'),
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
return self;}
}),
smalltalk.MaglevModuleWindow);

smalltalk.addMethod(
unescape('_renderSelectors'),
smalltalk.method({
selector: unescape('renderSelectors'),
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
return self;}
}),
smalltalk.MaglevModuleWindow);

smalltalk.addMethod(
unescape('_renderSmalltalkSourceCodeFor_'),
smalltalk.method({
selector: unescape('renderSmalltalkSourceCodeFor%3A'),
fn: function (selectorString){
var self=this;
smalltalk.send(self['@object'], "_smalltalkSourceCodeFor_withCallback_", [selectorString, (function(success, obj){return smalltalk.send(self, "_renderMethodObject_", [obj]);})]);
return self;}
}),
smalltalk.MaglevModuleWindow);

smalltalk.addMethod(
unescape('_renderSourceCode'),
smalltalk.method({
selector: unescape('renderSourceCode'),
fn: function (){
var self=this;
var selectorString=nil;
var selectedCategory=nil;
smalltalk.send(smalltalk.send(self['@methodContainer'], "_asJQuery", []), "_empty", []);
smalltalk.send(self['@waitingScreen'], "_show", []);
(selectedCategory=smalltalk.send(smalltalk.send(self['@categoryNamesSelect'], "_asJQuery", []), "_val", []));
(selectorString=smalltalk.send(smalltalk.send(self['@selectorsSelect'], "_asJQuery", []), "_val", []));
((($receiver = smalltalk.send(selectedCategory, "__eq", [unescape("%28all%20Ruby%29")])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self, "_renderRubySourceCodeFor_", [selectorString]);})() : (function(){return smalltalk.send(self, "_renderSmalltalkSourceCodeFor_", [selectorString]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(self, "_renderRubySourceCodeFor_", [selectorString]);}), (function(){return smalltalk.send(self, "_renderSmalltalkSourceCodeFor_", [selectorString]);})]));
return self;}
}),
smalltalk.MaglevModuleWindow);

smalltalk.addMethod(
unescape('_sortList_'),
smalltalk.method({
selector: unescape('sortList%3A'),
fn: function (aListBox){
var self=this;
var box=nil;
var children=nil;
(box=smalltalk.send(aListBox, "_asJQuery", []));
 children = box.children('option').sort(function (a, b) {return a.innerHTML > b.innerHTML ? 1 : -1}); ;
smalltalk.send(box, "_empty", []);
smalltalk.send(children, "_appendTo_", [box]);
return self;}
}),
smalltalk.MaglevModuleWindow);



smalltalk.addClass('MaglevClassWindow', smalltalk.MaglevModuleWindow, ['categoryNamesSelect', 'selectorsSelect', 'selectors', 'rubySelectors', 'editorContainer', 'editor', 'waitingScreen', 'errorBox', 'envIdContainer', 'rubyIcon', 'stIcon', 'sourceLocationContainer', 'methodObject'], 'Maglev-Database-Explorer');
smalltalk.addMethod(
unescape('_checkAddConnectionTo_'),
smalltalk.method({
selector: unescape('checkAddConnectionTo%3A'),
fn: function (aWindow){
var self=this;
smalltalk.send(self, "_checkAddConnectionTo_", [aWindow], smalltalk.MaglevModuleWindow);
((($receiver = smalltalk.send(smalltalk.send(self['@object'], "_superclassObject", []), "__eq_eq", [smalltalk.send(aWindow, "_object", [])])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self, "_connectTo_as_with_", [aWindow, smalltalk.symbolFor("superclass"), nil]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(self, "_connectTo_as_with_", [aWindow, smalltalk.symbolFor("superclass"), nil]);})]));
return self;}
}),
smalltalk.MaglevClassWindow);

smalltalk.addMethod(
unescape('_renderWindowTitleContentOn_'),
smalltalk.method({
selector: unescape('renderWindowTitleContentOn%3A'),
fn: function (html){
var self=this;
(function($rec){smalltalk.send($rec, "_with_", [smalltalk.send(self['@object'], "_inlineViewComponentShort", [])]);smalltalk.send($rec, "_with_", [unescape("%20%3C%20")]);return smalltalk.send($rec, "_with_", [smalltalk.send(smalltalk.send(self['@object'], "_superclassObject", []), "_inlineViewComponent", [])]);})(html);
smalltalk.send(self, "_renderHeightPlaceholderOn_", [html]);
(function($rec){smalltalk.send($rec, "_class_", [unescape("right-inline-block")]);return smalltalk.send($rec, "_with_", [(function(){smalltalk.send(self, "_renderVirtualClassAndClassOn_", [html]);return smalltalk.send(self, "_renderCloseButtonOn_", [html]);})]);})(smalltalk.send(html, "_div", []));
return self;}
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
fn: function (){
var self=this;
return true;
return self;}
}),
smalltalk.MaglevWaitingWindow);

smalltalk.addMethod(
unescape('_renderWindowContentOn_'),
smalltalk.method({
selector: unescape('renderWindowContentOn%3A'),
fn: function (html){
var self=this;

return self;}
}),
smalltalk.MaglevWaitingWindow);

smalltalk.addMethod(
unescape('_renderWindowTitleOn_'),
smalltalk.method({
selector: unescape('renderWindowTitleOn%3A'),
fn: function (html){
var self=this;
(function($rec){smalltalk.send($rec, "_with_", [smalltalk.send((smalltalk.MaglevIcon || MaglevIcon), "_wait", [])]);return smalltalk.send($rec, "_with_", [" loading..."]);})(html);
return self;}
}),
smalltalk.MaglevWaitingWindow);



