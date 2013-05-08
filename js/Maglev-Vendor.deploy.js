smalltalk.addPackage('Maglev-Vendor', {});
smalltalk.addClass('MaglevAjax', smalltalk.Object, [], 'Maglev-Vendor');

smalltalk.addMethod(
unescape('_ajax_data_'),
smalltalk.method({
selector: unescape('ajax%3Adata%3A'),
fn: function (aString, data){
var self=this;
 var result = $.parseJSON($.ajax({url: aString, data: $.parseJSON(data._asJSONString()), async: false}).responseText);
	if (result.success === false) {
		self.error('Server call failed: ' + result.exception);
	}
	else {
		return result.result;
	} ;
return self;}
}),
smalltalk.MaglevAjax.klass);

smalltalk.addMethod(
unescape('_ajax_data_withCallback_'),
smalltalk.method({
selector: unescape('ajax%3Adata%3AwithCallback%3A'),
fn: function (aString, data, aBlock){
var self=this;
 $.ajax({url: aString, data: $.parseJSON(data._asJSONString()), async: true, complete: function(response) {
		var result = $.parseJSON(response.responseText);
		if (result.success === false) {
			self.error('Server call failed: ' + result.exception);
		} else {
			aBlock._value_(result.result);
		}
	}}); ;
return self;}
}),
smalltalk.MaglevAjax.klass);


smalltalk.addClass('MaglevJsPlumb', smalltalk.Object, [], 'Maglev-Vendor');

smalltalk.MaglevJsPlumb.klass.iVarNames = ['sourceTarget','defaults','referenceConnection','instanceOfConnection','connection'];
smalltalk.addMethod(
unescape('_connectWindow_to_with_'),
smalltalk.method({
selector: unescape('connectWindow%3Ato%3Awith%3A'),
fn: function (sourceWindow, targetWindow, parameters){
var self=this;
var params=nil;
var type=nil;
var defParams=nil;
(type=smalltalk.send(smalltalk.send(self, "_connection", []), "_at_", [smalltalk.send(parameters, "_at_", [smalltalk.symbolFor("type")])]));
 params = $.extend(true, {}, defParams); ;
(function($rec){smalltalk.send($rec, "_basicAt_put_", ["source", smalltalk.send(sourceWindow, "_container", [])]);return smalltalk.send($rec, "_basicAt_put_", ["target", smalltalk.send(targetWindow, "_container", [])]);})(params);
smalltalk.send((typeof jsPlumb == 'undefined' ? nil : jsPlumb), "_connect_", [params]);
return self;}
}),
smalltalk.MaglevJsPlumb.klass);

smalltalk.addMethod(
unescape('_connection'),
smalltalk.method({
selector: unescape('connection'),
fn: function (){
var self=this;
return self['@connection'];
return self;}
}),
smalltalk.MaglevJsPlumb.klass);

smalltalk.addMethod(
unescape('_constConnection'),
smalltalk.method({
selector: unescape('constConnection'),
fn: function (){
var self=this;
return (function($rec){smalltalk.send($rec, "_at_put_", ["iv", self['@referenceConnection']]);smalltalk.send($rec, "_at_put_", ["hash_key", self['@referenceConnection']]);smalltalk.send($rec, "_at_put_", ["hash_value", self['@referenceConnection']]);smalltalk.send($rec, "_at_put_", ["array_element", self['@referenceConnection']]);smalltalk.send($rec, "_at_put_", ["class", self['@instanceOfConnection']]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send((smalltalk.Dictionary || Dictionary), "_new", []));
return self;}
}),
smalltalk.MaglevJsPlumb.klass);

smalltalk.addMethod(
unescape('_constDefaults'),
smalltalk.method({
selector: unescape('constDefaults'),
fn: function (){
var self=this;
 return {
		Connector: ["Bezier", {curviness: 50}],
		DragOptions: {cursor: "pointer", zIndex: 2000},
		PaintStyle: {strokeStyle: "gray", lineWidth: 2},
		Endpoint: ["Dot",{radius: 1}],
		EndpointStyle: {radius: 1, fillStyle: "gray"},
		HoverPaintStyle: {strokeStyle: "#ec9f2e"},
		EndpointHoverStyle: {fillStyle: "#ec9f2e"},
		Anchors: ["BottomCenter", "TopCenter"]}; ;
return self;}
}),
smalltalk.MaglevJsPlumb.klass);

smalltalk.addMethod(
unescape('_constInstanceOfConnection'),
smalltalk.method({
selector: unescape('constInstanceOfConnection'),
fn: function (){
var self=this;
 return {
		overlays: ["Arrow", [
			"Label",
			{label: "?", location: 0.25, id: "myLabel"}]],
		paintStyle: {
			lineWidth: 2,
			strokeStyle:"#9b59bb",
			dashstyle:"4 2",
			joinstyle:"miter"}}; ;
return self;}
}),
smalltalk.MaglevJsPlumb.klass);

smalltalk.addMethod(
unescape('_constReferenceConnection'),
smalltalk.method({
selector: unescape('constReferenceConnection'),
fn: function (){
var self=this;
 return {
		overlays: ["Arrow", [
			"Label",
			{label: "?", location: 0.25, id: "myLabel"}]]}; ;
return self;}
}),
smalltalk.MaglevJsPlumb.klass);

smalltalk.addMethod(
unescape('_constSourceTarget'),
smalltalk.method({
selector: unescape('constSourceTarget'),
fn: function (){
var self=this;
 return {
		dropOptions: {
			hoverClass:"dragHover"
		},
 		anchor: "Continuous"}; ;
return self;}
}),
smalltalk.MaglevJsPlumb.klass);

smalltalk.addMethod(
unescape('_defaults'),
smalltalk.method({
selector: unescape('defaults'),
fn: function (){
var self=this;
return self['@defaults'];
return self;}
}),
smalltalk.MaglevJsPlumb.klass);

smalltalk.addMethod(
unescape('_initialize'),
smalltalk.method({
selector: unescape('initialize'),
fn: function (){
var self=this;
smalltalk.send(self, "_initializeConstants", []);
smalltalk.send(self, "_initializeJsPlumb", []);
return self;}
}),
smalltalk.MaglevJsPlumb.klass);

smalltalk.addMethod(
unescape('_initializeChromeFix'),
smalltalk.method({
selector: unescape('initializeChromeFix'),
fn: function (){
var self=this;
 document.onselectstart = function() {
		return false;
	}; ;
return self;}
}),
smalltalk.MaglevJsPlumb.klass);

smalltalk.addMethod(
unescape('_initializeConstants'),
smalltalk.method({
selector: unescape('initializeConstants'),
fn: function (){
var self=this;
(self['@sourceTarget']=smalltalk.send(self, "_constSourceTarget", []));
(self['@defaults']=smalltalk.send(self, "_constDefaults", []));
(self['@referenceConnection']=smalltalk.send(self, "_constReferenceConnection", []));
(self['@instanceOfConnection']=smalltalk.send(self, "_constInstanceOfConnection", []));
(self['@connection']=smalltalk.send(self, "_constConnection", []));
return self;}
}),
smalltalk.MaglevJsPlumb.klass);

smalltalk.addMethod(
unescape('_initializeJsPlumb'),
smalltalk.method({
selector: unescape('initializeJsPlumb'),
fn: function (){
var self=this;
smalltalk.send((typeof jsPlumb == 'undefined' ? nil : jsPlumb), "_bind_a_", ["ready", (function(){smalltalk.send(self, "_initializeChromeFix", []);smalltalk.send((typeof jsPlumb == 'undefined' ? nil : jsPlumb), "_setRenderMode_", [smalltalk.send((typeof jsPlumb == 'undefined' ? nil : jsPlumb), "_SVG", [])]);return smalltalk.send((typeof jsPlumb == 'undefined' ? nil : jsPlumb), "_importDefaults_", [self['@defaults']]);})]);
return self;}
}),
smalltalk.MaglevJsPlumb.klass);

smalltalk.addMethod(
unescape('_instanceOfConnection'),
smalltalk.method({
selector: unescape('instanceOfConnection'),
fn: function (){
var self=this;
return self['@instanceOfConnection'];
return self;}
}),
smalltalk.MaglevJsPlumb.klass);

smalltalk.addMethod(
unescape('_prepareObject_'),
smalltalk.method({
selector: unescape('prepareObject%3A'),
fn: function (anObject){
var self=this;
smalltalk.send((typeof jsPlumb == 'undefined' ? nil : jsPlumb), "_draggable_", [anObject]);
smalltalk.send((typeof jsPlumb == 'undefined' ? nil : jsPlumb), "_makeSource_a_", [anObject, self['@sourceTarget']]);
smalltalk.send((typeof jsPlumb == 'undefined' ? nil : jsPlumb), "_makeTarget_a_", [anObject, self['@sourceTarget']]);
return self;}
}),
smalltalk.MaglevJsPlumb.klass);

smalltalk.addMethod(
unescape('_referenceConnection'),
smalltalk.method({
selector: unescape('referenceConnection'),
fn: function (){
var self=this;
return self['@referenceConnection'];
return self;}
}),
smalltalk.MaglevJsPlumb.klass);

smalltalk.addMethod(
unescape('_sourceTarget'),
smalltalk.method({
selector: unescape('sourceTarget'),
fn: function (){
var self=this;
return self['@sourceTarget'];
return self;}
}),
smalltalk.MaglevJsPlumb.klass);


