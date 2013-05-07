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


smalltalk.addClass('MaglevIcon', smalltalk.Widget, ['b', 'icon'], 'Maglev-Database-Explorer');
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
(($receiver = self['@b']) != nil && $receiver != undefined) ? (function(){return smalltalk.send(self['@b'], "_class_", [smalltalk.send(unescape("icon-"), "__comma", [aString])]);})() : nil;
return self;},
args: ["aString"],
source: unescape('icon%3A%20aString%0A%09icon%20%3A%3D%20aString.%0A%09b%20ifNotNil%3A%20%5B%09b%20class%3A%20%27icon-%27%2C%20aString%5D.'),
messageSends: ["ifNotNil:", "class:", unescape("%2C")],
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
(self['@b']=(function($rec){smalltalk.send($rec, "_class_", [smalltalk.send(unescape("icon-"), "__comma", [smalltalk.send(self, "_icon", [])])]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(html, "_em", [])));
return self;},
args: ["html"],
source: unescape('renderOn%3A%20html%0A%09b%20%3A%3D%20html%20em%0A%09%09class%3A%20%27icon-%27%2C%20self%20icon%3B%0A%09%09yourself.'),
messageSends: ["class:", unescape("%2C"), "icon", "yourself", "em"],
referencedClasses: []
}),
smalltalk.MaglevIcon);


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


smalltalk.addClass('MaglevObjectInline', smalltalk.Widget, ['object', 'hasDropDown', 'isDraggable'], 'Maglev-Database-Explorer');
smalltalk.addMethod(
unescape('_hasDropDown'),
smalltalk.method({
selector: unescape('hasDropDown'),
category: 'accessing',
fn: function (){
var self=this;
(($receiver = self['@hasDropDown']) == nil || $receiver == undefined) ? (function(){return (self['@hasDropDown']=false);})() : $receiver;
return self['@hasDropDown'];
return self;},
args: [],
source: unescape('hasDropDown%0A%09hasDropDown%20ifNil%3A%20%5BhasDropDown%20%3A%3D%20false%5D.%0A%09%5E%20hasDropDown'),
messageSends: ["ifNil:"],
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
unescape('_isDraggable'),
smalltalk.method({
selector: unescape('isDraggable'),
category: 'accessing',
fn: function (){
var self=this;
(($receiver = self['@isDraggable']) == nil || $receiver == undefined) ? (function(){return (self['@isDraggable']=false);})() : $receiver;
return self['@isDraggable'];
return self;},
args: [],
source: unescape('isDraggable%0A%09isDraggable%20ifNil%3A%20%5BisDraggable%20%3A%3D%20false%5D.%0A%09%5E%20isDraggable'),
messageSends: ["ifNil:"],
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
smalltalk.send(smalltalk.send(html, "_div", []), "_class_with_", [unescape("draggable-new-object-container"), (function(){return (function($rec){smalltalk.send($rec, "_class_", [unescape("ui-widget-content%20ui-draggable%20draggable-new-object")]);return smalltalk.send($rec, "_with_", [(function(){(function($rec){smalltalk.send($rec, "_class_", [unescape("object-drag-dummy")]);smalltalk.send($rec, "_style_", [unescape("display%3A%20none%3B")]);smalltalk.send($rec, "_with_", [smalltalk.send((smalltalk.MaglevIcon || MaglevIcon), "_move", [])]);return smalltalk.send($rec, "_with_", [(function(){return smalltalk.send(self, "_renderObjectContainerOn_", [html]);})]);})(smalltalk.send(html, "_div", []));return (function($rec){smalltalk.send($rec, "_class_", [unescape("object-iv-name")]);return smalltalk.send($rec, "_with_", [(function(){return smalltalk.send(self, "_renderObjectContainerOn_", [html]);})]);})(smalltalk.send(html, "_div", []));})]);})(smalltalk.send(html, "_div", []));})]);
return self;},
args: ["html"],
source: unescape('renderDraggableObjectOn%3A%20html%0A%09html%20div%0A%09%09class%3A%20%27draggable-new-object-container%27%0A%09%09with%3A%20%5B%0A%09%09%09html%20div%0A%09%09%09%09class%3A%20%27ui-widget-content%20ui-draggable%20draggable-new-object%27%3B%0A%09%09%09%09with%3A%20%5B%0A%09%09%09%09%09html%20div%0A%09%09%09%09%09%09class%3A%20%27object-drag-dummy%27%3B%0A%09%09%09%09%09%09style%3A%20%27display%3A%20none%3B%27%3B%0A%09%09%09%09%09%09with%3A%20MaglevIcon%20move%3B%0A%09%09%09%09%09%09with%3A%20%5Bself%20renderObjectContainerOn%3A%20html%5D.%0A%09%09%09%09%09html%20div%0A%09%09%09%09%09%09class%3A%20%27object-iv-name%27%3B%0A%09%09%09%09%09%09with%3A%20%5Bself%20renderObjectContainerOn%3A%20html%5D%5D%5D.'),
messageSends: ["class:with:", "div", "class:", "with:", "style:", "move", "renderObjectContainerOn:"],
referencedClasses: ["MaglevIcon"]
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
smalltalk.send(html, "_with_", [unescape("%28object%29")]);
return self;},
args: ["html"],
source: unescape('renderObjectOn%3A%20html%0A%09html%20with%3A%20%27%28object%29%27.'),
messageSends: ["with:"],
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
smalltalk.send(smalltalk.send(html, "_span", []), "_class_with_", ["dropdown", (function(){return (function($rec){smalltalk.send($rec, "_class_", [unescape("dropdown-toggle%20btn%20object-dropdown-toggle")]);smalltalk.send($rec, "_data_with_", ["toggle", "dropdown"]);return smalltalk.send($rec, "_with_", [(function(){smalltalk.send(self, "_renderObjectOn_", [html]);return smalltalk.send(smalltalk.send(html, "_b", []), "_class_", ["caret"]);})]);})(smalltalk.send(html, "_a", []));})]);
return self;},
args: ["html"],
source: unescape('renderObjectWithDropDownOn%3A%20html%0A%09html%20span%0A%09%09class%3A%20%27dropdown%27%0A%09%09with%3A%20%5B%0A%09%09%09html%20a%0A%09%09%09%09class%3A%20%27dropdown-toggle%20btn%20object-dropdown-toggle%27%3B%0A%09%09%09%09data%3A%20%27toggle%27%20with%3A%20%27dropdown%27%3B%0A%09%09%09%09with%3A%20%5B%0A%09%09%09%09%09self%20renderObjectOn%3A%20html.%0A%09%09%09%09%09html%20b%20class%3A%20%27caret%27%5D%5D.%0A%09%09%09%09'),
messageSends: ["class:with:", "span", "class:", "data:with:", "with:", "renderObjectOn:", "b", "a"],
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
unescape('_prepareWindow'),
smalltalk.method({
selector: unescape('prepareWindow'),
category: 'interactions',
fn: function (){
var self=this;
smalltalk.send((smalltalk.MaglevJsPlumb || MaglevJsPlumb), "_prepareObject_", [smalltalk.send(self['@container'], "_asJQuery", [])]);
return self;},
args: [],
source: unescape('prepareWindow%0A%09MaglevJsPlumb%20prepareObject%3A%20%28container%20asJQuery%29.'),
messageSends: ["prepareObject:", "asJQuery"],
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
(function($rec){smalltalk.send($rec, "_class_", [unescape("display-inline-block")]);return smalltalk.send($rec, "_with_", [(function(){return (function($rec){smalltalk.send($rec, "_href_", [unescape("%23")]);smalltalk.send($rec, "_class_", [unescape("window-close-button")]);return smalltalk.send($rec, "_with_", [smalltalk.send((smalltalk.MaglevIcon || MaglevIcon), "_remove", [])]);})(smalltalk.send(html, "_a", []));})]);})(smalltalk.send(html, "_span", []));
return self;},
args: ["html"],
source: unescape('renderCloseButtonOn%3A%20html%0A%09html%20span%0A%09%09class%3A%20%27display-inline-block%27%3B%0A%09%09with%3A%20%5Bhtml%20a%0A%09%09%09%09href%3A%20%27%23%27%3B%0A%09%09%09%09class%3A%20%27window-close-button%27%3B%0A%09%09%09%09with%3A%20MaglevIcon%20remove%5D.'),
messageSends: ["class:", "with:", "href:", "remove", "a", "span"],
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
unescape('_renderOn_'),
smalltalk.method({
selector: unescape('renderOn%3A'),
category: 'rendering',
fn: function (html){
var self=this;
(self['@container']=(function($rec){smalltalk.send($rec, "_class_", ["component window"]);return smalltalk.send($rec, "_with_", [(function(){return (function($rec){smalltalk.send($rec, "_class_", ["nowrap"]);return smalltalk.send($rec, "_with_", [(function(){smalltalk.send(self, "_renderWindowTitleOn_", [html]);return smalltalk.send(self, "_renderWindowContentOn_", [html]);})]);})(smalltalk.send(html, "_div", []));})]);})(smalltalk.send(html, "_div", [])));
smalltalk.send(self, "_prepareWindow", []);
return self;},
args: ["html"],
source: unescape('renderOn%3A%20html%0A%09container%20%3A%3D%20html%20div%0A%09%09class%3A%20%27component%20window%27%3B%0A%09%09with%3A%20%5B%0A%09%09%09html%20div%0A%09%09%09%09class%3A%20%27nowrap%27%3B%0A%09%09%09%09with%3A%20%5B%0A%09%09%09%09%09self%20renderWindowTitleOn%3A%20html.%0A%09%09%09%09%09self%20renderWindowContentOn%3A%20html%5D%5D.%0A%09self%20prepareWindow.'),
messageSends: ["class:", "with:", "renderWindowTitleOn:", "renderWindowContentOn:", "div", "prepareWindow"],
referencedClasses: []
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



smalltalk.addClass('MaglevObjectWindow', smalltalk.MaglevWindow, ['container', 'object', 'classObject'], 'Maglev-Database-Explorer');
smalltalk.addMethod(
unescape('_renderWindowTitleContentOn_'),
smalltalk.method({
selector: unescape('renderWindowTitleContentOn%3A'),
category: 'not yet classified',
fn: function (html){
var self=this;

return self;},
args: ["html"],
source: unescape('renderWindowTitleContentOn%3A%20html%0A'),
messageSends: [],
referencedClasses: []
}),
smalltalk.MaglevObjectWindow);



