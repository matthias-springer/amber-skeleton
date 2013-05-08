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
(function($rec){smalltalk.send($rec, "_class_", ["dropdown"]);return smalltalk.send($rec, "_with_", [(function(){return (function($rec){smalltalk.send($rec, "_class_", [unescape("dropdown-toggle%20btn%20object-dropdown-toggle")]);smalltalk.send($rec, "_data_with_", ["toggle", "dropdown"]);return smalltalk.send($rec, "_with_", [(function(){smalltalk.send(self, "_renderObjectOn_", [html]);return smalltalk.send(smalltalk.send(html, "_b", []), "_class_", ["caret"]);})]);})(smalltalk.send(html, "_a", []));})]);})(smalltalk.send(html, "_span", []));
return self;},
args: ["html"],
source: unescape('renderObjectWithDropDownOn%3A%20html%0A%09html%20span%0A%09%09class%3A%20%27dropdown%27%3B%0A%09%09with%3A%20%5B%0A%09%09%09html%20a%0A%09%09%09%09class%3A%20%27dropdown-toggle%20btn%20object-dropdown-toggle%27%3B%0A%09%09%09%09data%3A%20%27toggle%27%20with%3A%20%27dropdown%27%3B%0A%09%09%09%09with%3A%20%5B%0A%09%09%09%09%09self%20renderObjectOn%3A%20html.%0A%09%09%09%09%09html%20b%20class%3A%20%27caret%27%5D%5D.%0A%09%09%09%09'),
messageSends: ["class:", "with:", "data:with:", "renderObjectOn:", "b", "a", "span"],
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
(function($rec){smalltalk.send($rec, "_class_", ["dropdown"]);return smalltalk.send($rec, "_with_", [(function(){return (function($rec){smalltalk.send($rec, "_class_", [unescape("dropdown-toggle%20btn%20object-dropdown-toggle")]);smalltalk.send($rec, "_data_with_", ["toggle", "dropdown"]);return smalltalk.send($rec, "_with_", [(function(){smalltalk.send(html, "_with_", [text]);return smalltalk.send(smalltalk.send(html, "_b", []), "_class_", ["caret"]);})]);})(smalltalk.send(html, "_a", []));})]);})(smalltalk.send(html, "_span", []));
return self;},
args: ["text", "html"],
source: unescape('renderText%3A%20text%20withDropDownOn%3A%20html%0A%09html%20span%0A%09%09class%3A%20%27dropdown%27%3B%0A%09%09with%3A%20%5B%0A%09%09%09html%20a%0A%09%09%09%09class%3A%20%27dropdown-toggle%20btn%20object-dropdown-toggle%27%3B%0A%09%09%09%09data%3A%20%27toggle%27%20with%3A%20%27dropdown%27%3B%0A%09%09%09%09with%3A%20%5B%0A%09%09%09%09%09html%20with%3A%20text.%0A%09%09%09%09%09html%20b%20class%3A%20%27caret%27%5D%5D.%0A%09%09%09%09'),
messageSends: ["class:", "with:", "data:with:", "b", "a", "span"],
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
(showElements=smalltalk.send(maxElements, "_min_", [smalltalk.send(smalltalk.send(self, "_object", []), "_size", [])]));
smalltalk.send(self, "_renderText_withDropDownOn_", [unescape("%5B"), html]);
((($receiver = smalltalk.send(self, "_isShort", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(html, "_with_", ["..."]);})() : (function(){smalltalk.send(smalltalk.send((1), "_to_", [showElements]), "_do_", [(function(idx){smalltalk.send(html, "_with_", [smalltalk.send(smalltalk.send(smalltalk.send(self, "_object", []), "_at_", [idx]), "_inlineViewComponentWithDepth_", [((($receiver = smalltalk.send(self, "_depth", [])).klass === smalltalk.Number) ? $receiver -(1) : smalltalk.send($receiver, "__minus", [(1)]))])]);return ((($receiver = smalltalk.send(((($receiver = idx).klass === smalltalk.Number) ? $receiver <showElements : smalltalk.send($receiver, "__lt", [showElements])), "_or_", [(function(){return ((($receiver = smalltalk.send(smalltalk.send(self, "_object", []), "_size", [])).klass === smalltalk.Number) ? $receiver >maxElements : smalltalk.send($receiver, "__gt", [maxElements]));})])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(html, "_with_", [unescape("%2C%20")]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(html, "_with_", [unescape("%2C%20")]);})]));})]);return ((($receiver = ((($receiver = smalltalk.send(smalltalk.send(self, "_object", []), "_size", [])).klass === smalltalk.Number) ? $receiver >maxElements : smalltalk.send($receiver, "__gt", [maxElements]))).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(html, "_with_", ["..."]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(html, "_with_", ["..."]);})]));})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(html, "_with_", ["..."]);}), (function(){smalltalk.send(smalltalk.send((1), "_to_", [showElements]), "_do_", [(function(idx){smalltalk.send(html, "_with_", [smalltalk.send(smalltalk.send(smalltalk.send(self, "_object", []), "_at_", [idx]), "_inlineViewComponentWithDepth_", [((($receiver = smalltalk.send(self, "_depth", [])).klass === smalltalk.Number) ? $receiver -(1) : smalltalk.send($receiver, "__minus", [(1)]))])]);return ((($receiver = smalltalk.send(((($receiver = idx).klass === smalltalk.Number) ? $receiver <showElements : smalltalk.send($receiver, "__lt", [showElements])), "_or_", [(function(){return ((($receiver = smalltalk.send(smalltalk.send(self, "_object", []), "_size", [])).klass === smalltalk.Number) ? $receiver >maxElements : smalltalk.send($receiver, "__gt", [maxElements]));})])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(html, "_with_", [unescape("%2C%20")]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(html, "_with_", [unescape("%2C%20")]);})]));})]);return ((($receiver = ((($receiver = smalltalk.send(smalltalk.send(self, "_object", []), "_size", [])).klass === smalltalk.Number) ? $receiver >maxElements : smalltalk.send($receiver, "__gt", [maxElements]))).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(html, "_with_", ["..."]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(html, "_with_", ["..."]);})]));})]));
smalltalk.send(self, "_renderText_withDropDownOn_", [unescape("%5D"), html]);
return self;},
args: ["html"],
source: unescape('renderLoadedObjectOn%3A%20html%0A%09%7CshowElements%20maxElements%7C%0A%09maxElements%20%3A%3D%20self%20maxElements.%0A%09showElements%20%3A%3D%20maxElements%20min%3A%20self%20object%20size.%0A%09self%20renderText%3A%20%27%5B%27%20withDropDownOn%3A%20html.%0A%09self%20isShort%0A%09%09ifTrue%3A%20%5Bhtml%20with%3A%20%27...%27%5D%0A%09%09ifFalse%3A%20%5B%0A%09%09%09%281%20to%3A%20showElements%29%20do%3A%20%5B%3Aidx%20%7C%0A%09%09%09%09html%20with%3A%20%28%28self%20object%20at%3A%20idx%29%20inlineViewComponentWithDepth%3A%20self%20depth%20-%201%29.%0A%09%09%09%09%28idx%20%3C%20showElements%20or%3A%20%5Bself%20object%20size%20%3E%20maxElements%5D%29%0A%09%09%09%09%09ifTrue%3A%20%5Bhtml%20with%3A%20%27%2C%20%27%5D%5D.%0A%09%09%09self%20object%20size%20%3E%20maxElements%0A%09%09%09%09ifTrue%3A%20%5Bhtml%20with%3A%20%27...%27%5D%09%5D.%0A%09self%20renderText%3A%20%27%5D%27%20withDropDownOn%3A%20html.'),
messageSends: ["maxElements", "min:", "size", "object", "renderText:withDropDownOn:", "ifTrue:ifFalse:", "isShort", "with:", "do:", "to:", "inlineViewComponentWithDepth:", "at:", unescape("-"), "depth", "ifTrue:", "or:", unescape("%3C"), unescape("%3E")],
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
try{var showElements=nil;
var maxElements=nil;
(maxElements=smalltalk.send(self, "_maxElements", []));
(showElements=smalltalk.send(maxElements, "_min_", [smalltalk.send(smalltalk.send(self, "_object", []), "_size", [])]));
smalltalk.send(self, "_renderText_withDropDownOn_", [unescape("%7B"), html]);
((($receiver = smalltalk.send(self, "_isShort", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(html, "_with_", ["..."]);})() : (function(){var counter=nil;
(counter=(1));return smalltalk.send(smalltalk.send(self, "_object", []), "_keysAndValuesDo_", [(function(key, value){(function($rec){smalltalk.send($rec, "_with_", [smalltalk.send(key, "_inlineViewComponentWithDepth_", [((($receiver = smalltalk.send(self, "_depth", [])).klass === smalltalk.Number) ? $receiver -(1) : smalltalk.send($receiver, "__minus", [(1)]))])]);smalltalk.send($rec, "_with_", [unescape("%3D%3E")]);return smalltalk.send($rec, "_with_", [smalltalk.send(value, "_inlineViewComponentWithDepth_", [((($receiver = smalltalk.send(self, "_depth", [])).klass === smalltalk.Number) ? $receiver -(1) : smalltalk.send($receiver, "__minus", [(1)]))])]);})(html);((($receiver = smalltalk.send(((($receiver = counter).klass === smalltalk.Number) ? $receiver <showElements : smalltalk.send($receiver, "__lt", [showElements])), "_or_", [(function(){return ((($receiver = smalltalk.send(smalltalk.send(self, "_object", []), "_size", [])).klass === smalltalk.Number) ? $receiver >maxElements : smalltalk.send($receiver, "__gt", [maxElements]));})])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(html, "_with_", [unescape("%2C%20")]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(html, "_with_", [unescape("%2C%20")]);})]));(counter=((($receiver = counter).klass === smalltalk.Number) ? $receiver +(1) : smalltalk.send($receiver, "__plus", [(1)])));return ((($receiver = ((($receiver = counter).klass === smalltalk.Number) ? $receiver >showElements : smalltalk.send($receiver, "__gt", [showElements]))).klass === smalltalk.Boolean) ? ($receiver ? (function(){((($receiver = ((($receiver = smalltalk.send(smalltalk.send(self, "_object", []), "_size", [])).klass === smalltalk.Number) ? $receiver >maxElements : smalltalk.send($receiver, "__gt", [maxElements]))).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(html, "_with_", ["..."]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(html, "_with_", ["..."]);})]));smalltalk.send(self, "_renderText_withDropDownOn_", [unescape("%7D"), html]);return (function(){throw({name: 'stReturn', selector: '_renderLoadedObjectOn_', fn: function(){return self}})})();})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){((($receiver = ((($receiver = smalltalk.send(smalltalk.send(self, "_object", []), "_size", [])).klass === smalltalk.Number) ? $receiver >maxElements : smalltalk.send($receiver, "__gt", [maxElements]))).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(html, "_with_", ["..."]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(html, "_with_", ["..."]);})]));smalltalk.send(self, "_renderText_withDropDownOn_", [unescape("%7D"), html]);return (function(){throw({name: 'stReturn', selector: '_renderLoadedObjectOn_', fn: function(){return self}})})();})]));})]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(html, "_with_", ["..."]);}), (function(){var counter=nil;
(counter=(1));return smalltalk.send(smalltalk.send(self, "_object", []), "_keysAndValuesDo_", [(function(key, value){(function($rec){smalltalk.send($rec, "_with_", [smalltalk.send(key, "_inlineViewComponentWithDepth_", [((($receiver = smalltalk.send(self, "_depth", [])).klass === smalltalk.Number) ? $receiver -(1) : smalltalk.send($receiver, "__minus", [(1)]))])]);smalltalk.send($rec, "_with_", [unescape("%3D%3E")]);return smalltalk.send($rec, "_with_", [smalltalk.send(value, "_inlineViewComponentWithDepth_", [((($receiver = smalltalk.send(self, "_depth", [])).klass === smalltalk.Number) ? $receiver -(1) : smalltalk.send($receiver, "__minus", [(1)]))])]);})(html);((($receiver = smalltalk.send(((($receiver = counter).klass === smalltalk.Number) ? $receiver <showElements : smalltalk.send($receiver, "__lt", [showElements])), "_or_", [(function(){return ((($receiver = smalltalk.send(smalltalk.send(self, "_object", []), "_size", [])).klass === smalltalk.Number) ? $receiver >maxElements : smalltalk.send($receiver, "__gt", [maxElements]));})])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(html, "_with_", [unescape("%2C%20")]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(html, "_with_", [unescape("%2C%20")]);})]));(counter=((($receiver = counter).klass === smalltalk.Number) ? $receiver +(1) : smalltalk.send($receiver, "__plus", [(1)])));return ((($receiver = ((($receiver = counter).klass === smalltalk.Number) ? $receiver >showElements : smalltalk.send($receiver, "__gt", [showElements]))).klass === smalltalk.Boolean) ? ($receiver ? (function(){((($receiver = ((($receiver = smalltalk.send(smalltalk.send(self, "_object", []), "_size", [])).klass === smalltalk.Number) ? $receiver >maxElements : smalltalk.send($receiver, "__gt", [maxElements]))).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(html, "_with_", ["..."]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(html, "_with_", ["..."]);})]));smalltalk.send(self, "_renderText_withDropDownOn_", [unescape("%7D"), html]);return (function(){throw({name: 'stReturn', selector: '_renderLoadedObjectOn_', fn: function(){return self}})})();})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){((($receiver = ((($receiver = smalltalk.send(smalltalk.send(self, "_object", []), "_size", [])).klass === smalltalk.Number) ? $receiver >maxElements : smalltalk.send($receiver, "__gt", [maxElements]))).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(html, "_with_", ["..."]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(html, "_with_", ["..."]);})]));smalltalk.send(self, "_renderText_withDropDownOn_", [unescape("%7D"), html]);return (function(){throw({name: 'stReturn', selector: '_renderLoadedObjectOn_', fn: function(){return self}})})();})]));})]);})]));
smalltalk.send(self, "_renderText_withDropDownOn_", [unescape("%7D"), html]);
return self;
} catch(e) {if(e.name === 'stReturn' && e.selector === '_renderLoadedObjectOn_'){return e.fn()} throw(e)}},
args: ["html"],
source: unescape('renderLoadedObjectOn%3A%20html%0A%09%7CshowElements%20maxElements%7C%0A%09maxElements%20%3A%3D%20self%20maxElements.%0A%09showElements%20%3A%3D%20maxElements%20min%3A%20self%20object%20size.%0A%09self%20renderText%3A%20%27%7B%27%20withDropDownOn%3A%20html.%0A%09self%20isShort%0A%09%09ifTrue%3A%20%5Bhtml%20with%3A%20%27...%27%5D%0A%09%09ifFalse%3A%20%5B%20%7Ccounter%7C%0A%09%09%09counter%20%3A%3D%201.%0A%09%09%09self%20object%20keysAndValuesDo%3A%20%5B%3Akey%20%3Avalue%20%7C%0A%09%09%09%09html%20%0A%09%09%09%09%09with%3A%20%28key%20inlineViewComponentWithDepth%3A%20self%20depth%20-%201%29%3B%0A%09%09%09%09%09with%3A%20%27%3D%3E%27%3B%0A%09%09%09%09%09with%3A%20%28value%20inlineViewComponentWithDepth%3A%20self%20depth%20-%201%29.%0A%09%09%09%09%28counter%20%3C%20showElements%20or%3A%20%5Bself%20object%20size%20%3E%20maxElements%5D%29%0A%09%09%09%09%09ifTrue%3A%20%5Bhtml%20with%3A%20%27%2C%20%27%5D.%0A%09%09%09%09counter%20%3A%3D%20counter%20+%201.%0A%09%09%09%09counter%20%3E%20showElements%20ifTrue%3A%20%5B%0A%09%09%09%09%09self%20object%20size%20%3E%20maxElements%20ifTrue%3A%20%5Bhtml%20with%3A%20%27...%27%5D.%0A%09%09%09%09%09self%20renderText%3A%20%27%7D%27%20withDropDownOn%3A%20html.%0A%09%09%09%09%09%5E%20self%5D%5D%5D.%0A%09self%20renderText%3A%20%27%7D%27%20withDropDownOn%3A%20html.'),
messageSends: ["maxElements", "min:", "size", "object", "renderText:withDropDownOn:", "ifTrue:ifFalse:", "isShort", "with:", "keysAndValuesDo:", "inlineViewComponentWithDepth:", unescape("-"), "depth", "ifTrue:", "or:", unescape("%3C"), unescape("%3E"), unescape("+")],
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



smalltalk.addClass('MaglevTable', smalltalk.Widget, ['object', 'rangeFrom', 'rangeTo'], 'Maglev-Database-Explorer');
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
(($receiver = self['@rangeTo']) == nil || $receiver == undefined) ? (function(){return (self['@rangeTo']=smalltalk.send((10), "_min_", [smalltalk.send(smalltalk.send(self, "_object", []), "_size", [])]));})() : $receiver;
return self['@rangeTo'];
return self;},
args: [],
source: unescape('rangeTo%0A%09rangeTo%20ifNil%3A%20%5BrangeTo%20%3A%3D%2010%20min%3A%20self%20object%20size%5D.%0A%09%5E%20rangeTo'),
messageSends: ["ifNil:", "min:", "size", "object"],
referencedClasses: []
}),
smalltalk.MaglevTable);

smalltalk.addMethod(
unescape('_rangeTo_'),
smalltalk.method({
selector: unescape('rangeTo%3A'),
category: 'accessing',
fn: function (anInteger){
var self=this;
(self['@rangeTo']=anInteger);
return self;},
args: ["anInteger"],
source: unescape('rangeTo%3A%20anInteger%0A%09rangeTo%20%3A%3D%20anInteger.'),
messageSends: [],
referencedClasses: []
}),
smalltalk.MaglevTable);

smalltalk.addMethod(
unescape('_renderArrayBodyOn_'),
smalltalk.method({
selector: unescape('renderArrayBodyOn%3A'),
category: 'rendering',
fn: function (html){
var self=this;
smalltalk.send(smalltalk.send(smalltalk.send(self, "_rangeFrom", []), "_to_", [smalltalk.send(self, "_rangeTo", [])]), "_do_", [(function(idx){var obj=nil;
(obj=smalltalk.send(self['@object'], "_at_", [idx]));return smalltalk.send(smalltalk.send(html, "_tr", []), "_with_", [(function(){smalltalk.send(smalltalk.send(html, "_td", []), "_with_", [smalltalk.send(idx, "_inlineViewComponent", [])]);return smalltalk.send(smalltalk.send(html, "_td", []), "_with_", [smalltalk.send(obj, "_inlineViewComponent", [])]);})]);})]);
return self;},
args: ["html"],
source: unescape('renderArrayBodyOn%3A%20html%0A%09%28self%20rangeFrom%20to%3A%20self%20rangeTo%29%20do%3A%20%5B%3Aidx%20%7C%20%7Cobj%7C%0A%09%09obj%20%3A%3D%20object%20at%3A%20idx.%0A%09%09html%20tr%20with%3A%20%5B%0A%09%09%09html%20td%20with%3A%20idx%20inlineViewComponent.%0A%09%09%09html%20td%20with%3A%20obj%20inlineViewComponent%5D%5D.'),
messageSends: ["do:", "to:", "rangeFrom", "rangeTo", "at:", "with:", "tr", "td", "inlineViewComponent"],
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
try{var counter=nil;
(counter=(1));
smalltalk.send(smalltalk.send(self, "_object", []), "_keysAndValuesDo_", [(function(key, value){((($receiver = ((($receiver = counter).klass === smalltalk.Number) ? $receiver >=smalltalk.send(self, "_rangeFrom", []) : smalltalk.send($receiver, "__gt_eq", [smalltalk.send(self, "_rangeFrom", [])]))).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(smalltalk.send(html, "_tr", []), "_with_", [(function(){smalltalk.send(smalltalk.send(html, "_td", []), "_with_", [smalltalk.send(key, "_inlineViewComponent", [])]);return smalltalk.send(smalltalk.send(html, "_td", []), "_with_", [smalltalk.send(value, "_inlineViewComponent", [])]);})]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(smalltalk.send(html, "_tr", []), "_with_", [(function(){smalltalk.send(smalltalk.send(html, "_td", []), "_with_", [smalltalk.send(key, "_inlineViewComponent", [])]);return smalltalk.send(smalltalk.send(html, "_td", []), "_with_", [smalltalk.send(value, "_inlineViewComponent", [])]);})]);})]));(counter=((($receiver = counter).klass === smalltalk.Number) ? $receiver +(1) : smalltalk.send($receiver, "__plus", [(1)])));return ((($receiver = ((($receiver = counter).klass === smalltalk.Number) ? $receiver >smalltalk.send(self, "_rangeTo", []) : smalltalk.send($receiver, "__gt", [smalltalk.send(self, "_rangeTo", [])]))).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (function(){throw({name: 'stReturn', selector: '_renderDictionaryBodyOn_', fn: function(){return self}})})();})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return (function(){throw({name: 'stReturn', selector: '_renderDictionaryBodyOn_', fn: function(){return self}})})();})]));})]);
return self;
} catch(e) {if(e.name === 'stReturn' && e.selector === '_renderDictionaryBodyOn_'){return e.fn()} throw(e)}},
args: ["html"],
source: unescape('renderDictionaryBodyOn%3A%20html%0A%09%7Ccounter%7C%0A%09counter%20%3A%3D%201.%0A%09self%20object%20keysAndValuesDo%3A%20%5B%3Akey%20%3Avalue%20%7C%20%0A%09%09counter%20%3E%3D%20self%20rangeFrom%20ifTrue%3A%20%5B%0A%09%09%09html%20tr%20with%3A%20%5B%0A%09%09%09%09html%20td%20with%3A%20key%20inlineViewComponent.%0A%09%09%09%09html%20td%20with%3A%20value%20inlineViewComponent%5D%5D.%0A%09%09counter%20%3A%3D%20counter%20+%201.%0A%09%09counter%20%3E%20self%20rangeTo%20ifTrue%3A%20%5B%5E%20self%5D%5D.'),
messageSends: ["keysAndValuesDo:", "object", "ifTrue:", unescape("%3E%3D"), "rangeFrom", "with:", "tr", "td", "inlineViewComponent", unescape("+"), unescape("%3E"), "rangeTo"],
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
(function($rec){smalltalk.send($rec, "_class_", [unescape("table%20table-bordered")]);smalltalk.send($rec, "_style_", [unescape("margin-bottom%3A%200px%3B")]);return smalltalk.send($rec, "_with_", [(function(){return smalltalk.send(smalltalk.send(html, "_tbody", []), "_with_", [(function(){return smalltalk.send(self, "_renderTableBodyOn_", [html]);})]);})]);})(smalltalk.send(html, "_table", []));
smalltalk.send(self, "_renderPaginationOn_", [html]);
return self;},
args: ["html"],
source: unescape('renderOn%3A%20html%0A%09html%20table%0A%09%09class%3A%20%27table%20table-bordered%27%3B%0A%09%09style%3A%20%27margin-bottom%3A%200px%3B%27%3B%0A%09%09with%3A%20%5Bhtml%20tbody%20with%3A%20%5Bself%20renderTableBodyOn%3A%20html%5D%5D.%0A%09self%20renderPaginationOn%3A%20html.'),
messageSends: ["class:", "style:", "with:", "tbody", "renderTableBodyOn:", "table", "renderPaginationOn:"],
referencedClasses: []
}),
smalltalk.MaglevTable);

smalltalk.addMethod(
unescape('_renderPaginationOn_'),
smalltalk.method({
selector: unescape('renderPaginationOn%3A'),
category: 'rendering',
fn: function (html){
var self=this;

return self;},
args: ["html"],
source: unescape('renderPaginationOn%3A%20html%0A%09'),
messageSends: [],
referencedClasses: []
}),
smalltalk.MaglevTable);

smalltalk.addMethod(
unescape('_renderTableBodyOn_'),
smalltalk.method({
selector: unescape('renderTableBodyOn%3A'),
category: 'rendering',
fn: function (html){
var self=this;
try{((($receiver = smalltalk.send(smalltalk.send(self, "_object", []), "_isKindOf_", [(smalltalk.Array || Array)])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(self, "_renderArrayBodyOn_", [html]);return (function(){throw({name: 'stReturn', selector: '_renderTableBodyOn_', fn: function(){return self}})})();})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(self, "_renderArrayBodyOn_", [html]);return (function(){throw({name: 'stReturn', selector: '_renderTableBodyOn_', fn: function(){return self}})})();})]));
((($receiver = smalltalk.send(smalltalk.send(self, "_object", []), "_isKindOf_", [(smalltalk.Dictionary || Dictionary)])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(self, "_renderDictionaryBodyOn_", [html]);return (function(){throw({name: 'stReturn', selector: '_renderTableBodyOn_', fn: function(){return self}})})();})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(self, "_renderDictionaryBodyOn_", [html]);return (function(){throw({name: 'stReturn', selector: '_renderTableBodyOn_', fn: function(){return self}})})();})]));
smalltalk.send(self, "_error_", [smalltalk.send("MaglevTable cannot render ", "__comma", [smalltalk.send(smalltalk.send(self, "_object", []), "_class", [])])]);
return self;
} catch(e) {if(e.name === 'stReturn' && e.selector === '_renderTableBodyOn_'){return e.fn()} throw(e)}},
args: ["html"],
source: unescape('renderTableBodyOn%3A%20html%0A%09%28self%20object%20isKindOf%3A%20Array%29%0A%09%09ifTrue%3A%20%5Bself%20renderArrayBodyOn%3A%20html.%20%5E%20self%5D.%0A%09%28self%20object%20isKindOf%3A%20Dictionary%29%0A%09%09ifTrue%3A%20%5Bself%20renderDictionaryBodyOn%3A%20html.%20%5E%20self%5D.%0A%09self%20error%3A%20%27MaglevTable%20cannot%20render%20%27%2C%20self%20object%20class.%09'),
messageSends: ["ifTrue:", "isKindOf:", "object", "renderArrayBodyOn:", "renderDictionaryBodyOn:", "error:", unescape("%2C"), "class"],
referencedClasses: ["Array", "Dictionary"]
}),
smalltalk.MaglevTable);


smalltalk.addMethod(
unescape('_newFor_'),
smalltalk.method({
selector: unescape('newFor%3A'),
category: 'instance creation',
fn: function (anObject){
var self=this;
return (function($rec){smalltalk.send($rec, "_object_", [anObject]);smalltalk.send($rec, "_initialize", []);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(self, "_basicNew", []));
return self;},
args: ["anObject"],
source: unescape('newFor%3A%20anObject%0A%09%5E%20self%20basicNew%0A%09%09object%3A%20anObject%3B%0A%09%09initialize%3B%0A%09%09yourself'),
messageSends: ["object:", "initialize", "yourself", "basicNew"],
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
source: unescape('prepareWindow%0A%09MaglevJsPlumb%20prepareObject%3A%20%28container%20asJQuery%29.%0A%09container%0A%09%09onMouseEnter%3A%20%5Bcontainer%20removeClass%3A%20%27window-mouse-out%27%5D%3B%0A%09%09onMouseLeave%3A%20%5Bcontainer%20addClass%3A%20%27window-mouse-out%27%5D.%0A%09'),
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
source: unescape('renderOn%3A%20html%0A%09container%20ifNil%3A%20%5B%0A%09%09container%20%3A%3D%20html%20div.%0A%09%09self%20prepareWindow%5D.%0A%09container%0A%09%09class%3A%20%27component%20window%27%3B%0A%09%09with%3A%20%5B%0A%09%09%09html%20div%0A%09%09%09%09class%3A%20%27nowrap%27%3B%0A%09%09%09%09with%3A%20%5B%0A%09%09%09%09%09self%20renderWindowTitleOn%3A%20html.%0A%09%09%09%09%09self%20renderWindowContentOn%3A%20html%5D%5D.%0A%09'),
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


smalltalk.addClass('MaglevObjectWindow', smalltalk.MaglevWindow, ['container', 'object', 'classObject'], 'Maglev-Database-Explorer');
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
unescape('_renderWindowContentOn_'),
smalltalk.method({
selector: unescape('renderWindowContentOn%3A'),
category: 'rendering',
fn: function (html){
var self=this;
smalltalk.send(self, "_renderHorziontalLineOn_", [html]);
smalltalk.send(html, "_with_", [smalltalk.send((smalltalk.MaglevTable || MaglevTable), "_newFor_", [smalltalk.send(smalltalk.send(self, "_object", []), "_instVars", [])])]);
return self;},
args: ["html"],
source: unescape('renderWindowContentOn%3A%20html%0A%09self%20renderHorziontalLineOn%3A%20html.%0A%09html%20with%3A%20%28MaglevTable%20newFor%3A%20self%20object%20instVars%29.'),
messageSends: ["renderHorziontalLineOn:", "with:", "newFor:", "instVars", "object"],
referencedClasses: ["MaglevTable"]
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
smalltalk.send(html, "_with_", [" :"]);
smalltalk.send(self, "_renderHeightPlaceholderOn_", [html]);
(function($rec){smalltalk.send($rec, "_class_", [unescape("right-inline-block")]);return smalltalk.send($rec, "_with_", [(function(){smalltalk.send(html, "_with_", [smalltalk.send(self['@classObject'], "_inlineViewComponent", [])]);return smalltalk.send(self, "_renderCloseButtonOn_", [html]);})]);})(smalltalk.send(html, "_div", []));
return self;},
args: ["html"],
source: unescape('renderWindowTitleContentOn%3A%20html%0A%09html%20with%3A%20object%20inlineViewComponentShort.%0A%09html%20with%3A%20%27%20%3A%27.%0A%09self%20renderHeightPlaceholderOn%3A%20html.%0A%09html%20div%0A%09%09class%3A%20%27right-inline-block%27%3B%0A%09%09with%3A%20%5B%0A%09%09%09html%20with%3A%20classObject%20inlineViewComponent.%0A%09%09%09self%20renderCloseButtonOn%3A%20html%5D.'),
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
smalltalk.send(self, "_replace_unregisterWindow_", [smalltalk.send(aWindow, "_MaglevObjectSpace", []), aWindow], smalltalk.MaglevWindow);
smalltalk.send((smalltalk.MaglevObjectSpace || MaglevObjectSpace), "_registerWindow_", [self]);
return self;},
args: ["aWindow"],
source: unescape('replace%3A%20aWindow%0A%09super%20replace%3A%20aWindow%0A%09MaglevObjectSpace%20unregisterWindow%3A%20aWindow.%0A%09MaglevObjectSpace%20registerWindow%3A%20self.'),
messageSends: ["replace:unregisterWindow:", "MaglevObjectSpace", "registerWindow:"],
referencedClasses: ["MaglevObjectSpace"]
}),
smalltalk.MaglevObjectWindow);



smalltalk.addClass('MaglevArrayWindow', smalltalk.MaglevObjectWindow, [], 'Maglev-Database-Explorer');
smalltalk.addMethod(
unescape('_renderWindowContentOn_'),
smalltalk.method({
selector: unescape('renderWindowContentOn%3A'),
category: 'rendering',
fn: function (html){
var self=this;
smalltalk.send(self, "_renderWindowContentOn_", [html], smalltalk.MaglevObjectWindow);
smalltalk.send(self, "_renderHorziontalLineOn_", [html]);
smalltalk.send(html, "_with_", [smalltalk.send((smalltalk.MaglevTable || MaglevTable), "_newFor_", [smalltalk.send(smalltalk.send(self, "_object", []), "_elements", [])])]);
return self;},
args: ["html"],
source: unescape('renderWindowContentOn%3A%20html%0A%09super%20renderWindowContentOn%3A%20html.%0A%09self%20renderHorziontalLineOn%3A%20html.%0A%09html%20with%3A%20%28MaglevTable%20newFor%3A%20self%20object%20elements%29.'),
messageSends: ["renderWindowContentOn:", "renderHorziontalLineOn:", "with:", "newFor:", "elements", "object"],
referencedClasses: ["MaglevTable"]
}),
smalltalk.MaglevArrayWindow);



smalltalk.addClass('MaglevFixnumWindow', smalltalk.MaglevObjectWindow, [], 'Maglev-Database-Explorer');


smalltalk.addClass('MaglevFloatWindow', smalltalk.MaglevObjectWindow, [], 'Maglev-Database-Explorer');


smalltalk.addClass('MaglevHashWindow', smalltalk.MaglevObjectWindow, [], 'Maglev-Database-Explorer');
smalltalk.addMethod(
unescape('_renderWindowContentOn_'),
smalltalk.method({
selector: unescape('renderWindowContentOn%3A'),
category: 'rendering',
fn: function (html){
var self=this;
smalltalk.send(self, "_renderWindowContentOn_", [html], smalltalk.MaglevObjectWindow);
smalltalk.send(self, "_renderHorziontalLineOn_", [html]);
smalltalk.send(html, "_with_", [smalltalk.send((smalltalk.MaglevTable || MaglevTable), "_newFor_", [smalltalk.send(smalltalk.send(self, "_object", []), "_elements", [])])]);
return self;},
args: ["html"],
source: unescape('renderWindowContentOn%3A%20html%0A%09super%20renderWindowContentOn%3A%20html.%0A%09self%20renderHorziontalLineOn%3A%20html.%0A%09html%20with%3A%20%28MaglevTable%20newFor%3A%20self%20object%20elements%29.'),
messageSends: ["renderWindowContentOn:", "renderHorziontalLineOn:", "with:", "newFor:", "elements", "object"],
referencedClasses: ["MaglevTable"]
}),
smalltalk.MaglevHashWindow);



smalltalk.addClass('MaglevModuleWindow', smalltalk.MaglevObjectWindow, [], 'Maglev-Database-Explorer');


smalltalk.addClass('MaglevClassWindow', smalltalk.MaglevModuleWindow, [], 'Maglev-Database-Explorer');


smalltalk.addClass('MaglevNilClassWindow', smalltalk.MaglevObjectWindow, [], 'Maglev-Database-Explorer');


smalltalk.addClass('MaglevStringWindow', smalltalk.MaglevObjectWindow, [], 'Maglev-Database-Explorer');


smalltalk.addClass('MaglevSymbolWindow', smalltalk.MaglevObjectWindow, [], 'Maglev-Database-Explorer');


smalltalk.addClass('MaglevWaitingWindow', smalltalk.MaglevWindow, [], 'Maglev-Database-Explorer');
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



