smalltalk.addPackage('Maglev-Vendor', {});
smalltalk.addClass('MaglevAjax', smalltalk.Object, [], 'Maglev-Vendor');

smalltalk.addMethod(
unescape('_ajax_data_'),
smalltalk.method({
selector: unescape('ajax%3Adata%3A'),
category: 'not yet classified',
fn: function (aString, data){
var self=this;
 var result = $.parseJSON($.ajax({url: aString, data: $.parseJSON(data._asJSONString()), async: false}).responseText);
	if (result.success === false) {
		self.error('Server call failed: ' + result.exception);
	}
	else {
		return result.result;
	} ;
return self;},
args: ["aString", "data"],
source: unescape('ajax%3A%20aString%20data%3A%20data%0A%09%3C%20var%20result%20%3D%20%24.parseJSON%28%24.ajax%28%7Burl%3A%20aString%2C%20data%3A%20%24.parseJSON%28data._asJSONString%28%29%29%2C%20async%3A%20false%7D%29.responseText%29%3B%0A%09if%20%28result.success%20%3D%3D%3D%20false%29%20%7B%0A%09%09self.error%28%27Server%20call%20failed%3A%20%27%20+%20result.exception%29%3B%0A%09%7D%0A%09else%20%7B%0A%09%09return%20result.result%3B%0A%09%7D%20%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.MaglevAjax.klass);

smalltalk.addMethod(
unescape('_ajax_data_withCallback_'),
smalltalk.method({
selector: unescape('ajax%3Adata%3AwithCallback%3A'),
category: 'not yet classified',
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
return self;},
args: ["aString", "data", "aBlock"],
source: unescape('ajax%3A%20aString%20data%3A%20data%20withCallback%3A%20aBlock%0A%09%3C%20%24.ajax%28%7Burl%3A%20aString%2C%20data%3A%20%24.parseJSON%28data._asJSONString%28%29%29%2C%20async%3A%20true%2C%20complete%3A%20function%28response%29%20%7B%0A%09%09var%20result%20%3D%20%24.parseJSON%28response.responseText%29%3B%0A%09%09if%20%28result.success%20%3D%3D%3D%20false%29%20%7B%0A%09%09%09self.error%28%27Server%20call%20failed%3A%20%27%20+%20result.exception%29%3B%0A%09%09%7D%20else%20%7B%0A%09%09%09aBlock._value_%28result.result%29%3B%0A%09%09%7D%0A%09%7D%7D%29%3B%20%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.MaglevAjax.klass);


smalltalk.addClass('MaglevJsPlumb', smalltalk.Object, [], 'Maglev-Vendor');

smalltalk.MaglevJsPlumb.klass.iVarNames = ['sourceTarget','defaults','referenceConnection','instanceOfConnection','connection'];
smalltalk.addMethod(
unescape('_connectWindow_to_as_with_'),
smalltalk.method({
selector: unescape('connectWindow%3Ato%3Aas%3Awith%3A'),
category: 'interactions',
fn: function (sourceWindow, targetWindow, cType, caption){
var self=this;
var params=nil;
var type=nil;
var defParams=nil;
smalltalk.send((smalltalk.Transcript || Transcript), "_show_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send("connecting ", "__comma", [smalltalk.send(smalltalk.send(smalltalk.send(sourceWindow, "_object", []), "_oop", []), "_asString", [])]), "__comma", [" to "]), "__comma", [smalltalk.send(smalltalk.send(smalltalk.send(targetWindow, "_object", []), "_oop", []), "_asString", [])]), "__comma", [" as "]), "__comma", [smalltalk.send(cType, "_asString", [])])]);
(type=smalltalk.send(smalltalk.send(self, "_connection", []), "_at_", [cType]));
 params = $.extend(true, {}, defParams); ;
(function($rec){smalltalk.send($rec, "_basicAt_put_", ["source", smalltalk.send(smalltalk.send(sourceWindow, "_container", []), "_asJQuery", [])]);return smalltalk.send($rec, "_basicAt_put_", ["target", smalltalk.send(smalltalk.send(targetWindow, "_container", []), "_asJQuery", [])]);})(params);
smalltalk.send((typeof jsPlumb == 'undefined' ? nil : jsPlumb), "_connect_", [params]);
return self;},
args: ["sourceWindow", "targetWindow", "cType", "caption"],
source: unescape('connectWindow%3A%20sourceWindow%20to%3A%20targetWindow%20as%3A%20cType%20with%3A%20caption%0A%09%7Cparams%20type%20defParams%7C%0A%09Transcript%20show%3A%20%27connecting%20%27%2C%20sourceWindow%20object%20oop%20asString%2C%20%27%20to%20%27%2C%20targetWindow%20object%20oop%20asString%2C%20%27%20as%20%27%2C%20cType%20asString.%0A%09type%20%3A%3D%20self%20connection%20at%3A%20cType.%0A%09%3C%20params%20%3D%20%24.extend%28true%2C%20%7B%7D%2C%20defParams%29%3B%20%3E.%0A%09params%0A%09%09basicAt%3A%20%27source%27%20put%3A%20sourceWindow%20container%20asJQuery%3B%0A%09%09basicAt%3A%20%27target%27%20put%3A%20targetWindow%20container%20asJQuery.%0A%0A%09jsPlumb%20connect%3A%20params.'),
messageSends: ["show:", unescape("%2C"), "asString", "oop", "object", "at:", "connection", "basicAt:put:", "asJQuery", "container", "connect:"],
referencedClasses: ["Transcript"]
}),
smalltalk.MaglevJsPlumb.klass);

smalltalk.addMethod(
unescape('_connectWindow_to_with_'),
smalltalk.method({
selector: unescape('connectWindow%3Ato%3Awith%3A'),
category: 'interactions',
fn: function (sourceWindow, targetWindow, parameters){
var self=this;
var params=nil;
var type=nil;
var defParams=nil;
(type=smalltalk.send(smalltalk.send(self, "_connection", []), "_at_", [smalltalk.send(parameters, "_at_", [smalltalk.symbolFor("type")])]));
 params = $.extend(true, {}, defParams); ;
(function($rec){smalltalk.send($rec, "_basicAt_put_", ["source", smalltalk.send(sourceWindow, "_container", [])]);return smalltalk.send($rec, "_basicAt_put_", ["target", smalltalk.send(targetWindow, "_container", [])]);})(params);
smalltalk.send((typeof jsPlumb == 'undefined' ? nil : jsPlumb), "_connect_", [params]);
return self;},
args: ["sourceWindow", "targetWindow", "parameters"],
source: unescape('connectWindow%3A%20sourceWindow%20to%3A%20targetWindow%20with%3A%20parameters%0A%09%7Cparams%20type%20defParams%7C%0A%09type%20%3A%3D%20self%20connection%20at%3A%20%28parameters%20at%3A%20%23type%29.%0A%09%3C%20params%20%3D%20%24.extend%28true%2C%20%7B%7D%2C%20defParams%29%3B%20%3E.%0A%09params%0A%09%09basicAt%3A%20%27source%27%20put%3A%20sourceWindow%20container%3B%0A%09%09basicAt%3A%20%27target%27%20put%3A%20targetWindow%20container.%0A%0A%09jsPlumb%20connect%3A%20params.'),
messageSends: ["at:", "connection", "basicAt:put:", "container", "connect:"],
referencedClasses: []
}),
smalltalk.MaglevJsPlumb.klass);

smalltalk.addMethod(
unescape('_connection'),
smalltalk.method({
selector: unescape('connection'),
category: 'accessing',
fn: function (){
var self=this;
return self['@connection'];
return self;},
args: [],
source: unescape('connection%0A%09%5E%20connection'),
messageSends: [],
referencedClasses: []
}),
smalltalk.MaglevJsPlumb.klass);

smalltalk.addMethod(
unescape('_constConnection'),
smalltalk.method({
selector: unescape('constConnection'),
category: 'constants',
fn: function (){
var self=this;
return (function($rec){smalltalk.send($rec, "_at_put_", [smalltalk.symbolFor("iv"), self['@referenceConnection']]);smalltalk.send($rec, "_at_put_", [smalltalk.symbolFor("hashKey"), self['@referenceConnection']]);smalltalk.send($rec, "_at_put_", [smalltalk.symbolFor("hashValue"), self['@referenceConnection']]);smalltalk.send($rec, "_at_put_", [smalltalk.symbolFor("arrayElement"), self['@referenceConnection']]);smalltalk.send($rec, "_at_put_", [smalltalk.symbolFor("class"), self['@instanceOfConnection']]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send((smalltalk.Dictionary || Dictionary), "_new", []));
return self;},
args: [],
source: unescape('constConnection%0A%09%5E%20Dictionary%20new%0A%09%09at%3A%20%23iv%20put%3A%20referenceConnection%3B%0A%09%09at%3A%20%23hashKey%20put%3A%20referenceConnection%3B%0A%09%09at%3A%20%23hashValue%20put%3A%20referenceConnection%3B%0A%09%09at%3A%20%23arrayElement%20put%3A%20referenceConnection%3B%0A%09%09at%3A%20%23class%20put%3A%20instanceOfConnection%3B%0A%09%09yourself'),
messageSends: ["at:put:", "yourself", "new"],
referencedClasses: ["Dictionary"]
}),
smalltalk.MaglevJsPlumb.klass);

smalltalk.addMethod(
unescape('_constDefaults'),
smalltalk.method({
selector: unescape('constDefaults'),
category: 'constants',
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
return self;},
args: [],
source: unescape('constDefaults%0A%09%3C%20return%20%7B%0A%09%09Connector%3A%20%5B%22Bezier%22%2C%20%7Bcurviness%3A%2050%7D%5D%2C%0A%09%09DragOptions%3A%20%7Bcursor%3A%20%22pointer%22%2C%20zIndex%3A%202000%7D%2C%0A%09%09PaintStyle%3A%20%7BstrokeStyle%3A%20%22gray%22%2C%20lineWidth%3A%202%7D%2C%0A%09%09Endpoint%3A%20%5B%22Dot%22%2C%7Bradius%3A%201%7D%5D%2C%0A%09%09EndpointStyle%3A%20%7Bradius%3A%201%2C%20fillStyle%3A%20%22gray%22%7D%2C%0A%09%09HoverPaintStyle%3A%20%7BstrokeStyle%3A%20%22%23ec9f2e%22%7D%2C%0A%09%09EndpointHoverStyle%3A%20%7BfillStyle%3A%20%22%23ec9f2e%22%7D%2C%0A%09%09Anchors%3A%20%5B%22BottomCenter%22%2C%20%22TopCenter%22%5D%7D%3B%20%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.MaglevJsPlumb.klass);

smalltalk.addMethod(
unescape('_constInstanceOfConnection'),
smalltalk.method({
selector: unescape('constInstanceOfConnection'),
category: 'constants',
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
return self;},
args: [],
source: unescape('constInstanceOfConnection%0A%09%3C%20return%20%7B%0A%09%09overlays%3A%20%5B%22Arrow%22%2C%20%5B%0A%09%09%09%22Label%22%2C%0A%09%09%09%7Blabel%3A%20%22%3F%22%2C%20location%3A%200.25%2C%20id%3A%20%22myLabel%22%7D%5D%5D%2C%0A%09%09paintStyle%3A%20%7B%0A%09%09%09lineWidth%3A%202%2C%0A%09%09%09strokeStyle%3A%22%239b59bb%22%2C%0A%09%09%09dashstyle%3A%224%202%22%2C%0A%09%09%09joinstyle%3A%22miter%22%7D%7D%3B%20%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.MaglevJsPlumb.klass);

smalltalk.addMethod(
unescape('_constReferenceConnection'),
smalltalk.method({
selector: unescape('constReferenceConnection'),
category: 'constants',
fn: function (){
var self=this;
 return {
		overlays: ["Arrow", [
			"Label",
			{label: "?", location: 0.25, id: "myLabel"}]]}; ;
return self;},
args: [],
source: unescape('constReferenceConnection%0A%09%3C%20return%20%7B%0A%09%09overlays%3A%20%5B%22Arrow%22%2C%20%5B%0A%09%09%09%22Label%22%2C%0A%09%09%09%7Blabel%3A%20%22%3F%22%2C%20location%3A%200.25%2C%20id%3A%20%22myLabel%22%7D%5D%5D%7D%3B%20%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.MaglevJsPlumb.klass);

smalltalk.addMethod(
unescape('_constSourceTarget'),
smalltalk.method({
selector: unescape('constSourceTarget'),
category: 'constants',
fn: function (){
var self=this;
 return {
		dropOptions: {
			hoverClass:"dragHover"
		},
 		anchor: "Continuous"}; ;
return self;},
args: [],
source: unescape('constSourceTarget%0A%09%3C%20return%20%7B%0A%09%09dropOptions%3A%20%7B%0A%09%09%09hoverClass%3A%22dragHover%22%0A%09%09%7D%2C%0A%20%09%09anchor%3A%20%22Continuous%22%7D%3B%20%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.MaglevJsPlumb.klass);

smalltalk.addMethod(
unescape('_defaults'),
smalltalk.method({
selector: unescape('defaults'),
category: 'accessing',
fn: function (){
var self=this;
return self['@defaults'];
return self;},
args: [],
source: unescape('defaults%0A%09%5E%20defaults'),
messageSends: [],
referencedClasses: []
}),
smalltalk.MaglevJsPlumb.klass);

smalltalk.addMethod(
unescape('_initialize'),
smalltalk.method({
selector: unescape('initialize'),
category: 'initializing',
fn: function (){
var self=this;
smalltalk.send(self, "_initializeConstants", []);
smalltalk.send(self, "_initializeJsPlumb", []);
return self;},
args: [],
source: unescape('initialize%0A%09self%20initializeConstants.%0A%09self%20initializeJsPlumb.'),
messageSends: ["initializeConstants", "initializeJsPlumb"],
referencedClasses: []
}),
smalltalk.MaglevJsPlumb.klass);

smalltalk.addMethod(
unescape('_initializeChromeFix'),
smalltalk.method({
selector: unescape('initializeChromeFix'),
category: 'initializing',
fn: function (){
var self=this;
 document.onselectstart = function() {
		return false;
	}; ;
return self;},
args: [],
source: unescape('initializeChromeFix%0A%09%3C%20document.onselectstart%20%3D%20function%28%29%20%7B%0A%09%09return%20false%3B%0A%09%7D%3B%20%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.MaglevJsPlumb.klass);

smalltalk.addMethod(
unescape('_initializeConstants'),
smalltalk.method({
selector: unescape('initializeConstants'),
category: 'initializing',
fn: function (){
var self=this;
(self['@sourceTarget']=smalltalk.send(self, "_constSourceTarget", []));
(self['@defaults']=smalltalk.send(self, "_constDefaults", []));
(self['@referenceConnection']=smalltalk.send(self, "_constReferenceConnection", []));
(self['@instanceOfConnection']=smalltalk.send(self, "_constInstanceOfConnection", []));
(self['@connection']=smalltalk.send(self, "_constConnection", []));
return self;},
args: [],
source: unescape('initializeConstants%0A%09sourceTarget%20%3A%3D%20self%20constSourceTarget.%0A%09defaults%20%3A%3D%20self%20constDefaults.%0A%09referenceConnection%20%3A%3D%20self%20constReferenceConnection.%0A%09instanceOfConnection%20%3A%3D%20self%20constInstanceOfConnection.%0A%09connection%20%3A%3D%20self%20constConnection.'),
messageSends: ["constSourceTarget", "constDefaults", "constReferenceConnection", "constInstanceOfConnection", "constConnection"],
referencedClasses: []
}),
smalltalk.MaglevJsPlumb.klass);

smalltalk.addMethod(
unescape('_initializeJsPlumb'),
smalltalk.method({
selector: unescape('initializeJsPlumb'),
category: 'initializing',
fn: function (){
var self=this;
smalltalk.send((typeof jsPlumb == 'undefined' ? nil : jsPlumb), "_bind_a_", ["ready", (function(){smalltalk.send(self, "_initializeChromeFix", []);smalltalk.send((typeof jsPlumb == 'undefined' ? nil : jsPlumb), "_setRenderMode_", [smalltalk.send((typeof jsPlumb == 'undefined' ? nil : jsPlumb), "_SVG", [])]);return smalltalk.send((typeof jsPlumb == 'undefined' ? nil : jsPlumb), "_importDefaults_", [self['@defaults']]);})]);
return self;},
args: [],
source: unescape('initializeJsPlumb%0A%09jsPlumb%0A%09%09bind%3A%20%27ready%27%0A%09%09a%3A%20%5B%0A%09%09%09self%20initializeChromeFix.%0A%09%09%09jsPlumb%20setRenderMode%3A%20jsPlumb%20SVG.%0A%09%09%09jsPlumb%20importDefaults%3A%20defaults%5D.'),
messageSends: ["bind:a:", "initializeChromeFix", "setRenderMode:", "SVG", "importDefaults:"],
referencedClasses: []
}),
smalltalk.MaglevJsPlumb.klass);

smalltalk.addMethod(
unescape('_instanceOfConnection'),
smalltalk.method({
selector: unescape('instanceOfConnection'),
category: 'accessing',
fn: function (){
var self=this;
return self['@instanceOfConnection'];
return self;},
args: [],
source: unescape('instanceOfConnection%0A%09%5E%20instanceOfConnection'),
messageSends: [],
referencedClasses: []
}),
smalltalk.MaglevJsPlumb.klass);

smalltalk.addMethod(
unescape('_prepareObject_'),
smalltalk.method({
selector: unescape('prepareObject%3A'),
category: 'interactions',
fn: function (anObject){
var self=this;
smalltalk.send((typeof jsPlumb == 'undefined' ? nil : jsPlumb), "_draggable_", [anObject]);
smalltalk.send((typeof jsPlumb == 'undefined' ? nil : jsPlumb), "_makeSource_a_", [anObject, self['@sourceTarget']]);
smalltalk.send((typeof jsPlumb == 'undefined' ? nil : jsPlumb), "_makeTarget_a_", [anObject, self['@sourceTarget']]);
return self;},
args: ["anObject"],
source: unescape('prepareObject%3A%20anObject%0A%09jsPlumb%20draggable%3A%20anObject.%0A%09jsPlumb%20makeSource%3A%20anObject%20a%3A%20sourceTarget.%0A%09jsPlumb%20makeTarget%3A%20anObject%20a%3A%20sourceTarget.'),
messageSends: ["draggable:", "makeSource:a:", "makeTarget:a:"],
referencedClasses: []
}),
smalltalk.MaglevJsPlumb.klass);

smalltalk.addMethod(
unescape('_referenceConnection'),
smalltalk.method({
selector: unescape('referenceConnection'),
category: 'accessing',
fn: function (){
var self=this;
return self['@referenceConnection'];
return self;},
args: [],
source: unescape('referenceConnection%0A%09%5E%20referenceConnection'),
messageSends: [],
referencedClasses: []
}),
smalltalk.MaglevJsPlumb.klass);

smalltalk.addMethod(
unescape('_sourceTarget'),
smalltalk.method({
selector: unescape('sourceTarget'),
category: 'accessing',
fn: function (){
var self=this;
return self['@sourceTarget'];
return self;},
args: [],
source: unescape('sourceTarget%0A%09%5E%20sourceTarget'),
messageSends: [],
referencedClasses: []
}),
smalltalk.MaglevJsPlumb.klass);


