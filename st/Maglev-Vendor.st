Smalltalk current createPackage: 'Maglev-Vendor' properties: #{}!
Object subclass: #MaglevAjax
	instanceVariableNames: ''
	package: 'Maglev-Vendor'!

!MaglevAjax class methodsFor: 'not yet classified'!

ajax: aString data: data
	< var result = $.parseJSON($.ajax({url: aString, data: $.parseJSON(data._asJSONString()), async: false}).responseText);
	if (result.success === false) {
		self.error('Server call failed: ' + result.exception);
	}
	else {
		return result.result;
	} >
!

ajax: aString data: data withCallback: aBlock
	< $.ajax({url: aString, data: $.parseJSON(data._asJSONString()), async: true, complete: function(response) {
		var result = $.parseJSON(response.responseText);
		if (result.success === false) {
			self.error('Server call failed: ' + result.exception);
		} else {
			aBlock._value_(result.result);
		}
	}}); >
! !

Object subclass: #MaglevJsPlumb
	instanceVariableNames: ''
	package: 'Maglev-Vendor'!

MaglevJsPlumb class instanceVariableNames: 'sourceTarget defaults referenceConnection instanceOfConnection connection'!

!MaglevJsPlumb class methodsFor: 'accessing'!

connection
	^ connection
!

defaults
	^ defaults
!

instanceOfConnection
	^ instanceOfConnection
!

referenceConnection
	^ referenceConnection
!

sourceTarget
	^ sourceTarget
! !

!MaglevJsPlumb class methodsFor: 'constants'!

constConnection
	^ Dictionary new
		at: 'iv' put: referenceConnection;
		at: 'hash_key' put: referenceConnection;
		at: 'hash_value' put: referenceConnection;
		at: 'array_element' put: referenceConnection;
		at: 'class' put: instanceOfConnection;
		yourself
!

constDefaults
	< return {
		Connector: ["Bezier", {curviness: 50}],
		DragOptions: {cursor: "pointer", zIndex: 2000},
		PaintStyle: {strokeStyle: "gray", lineWidth: 2},
		Endpoint: ["Dot",{radius: 1}],
		EndpointStyle: {radius: 1, fillStyle: "gray"},
		HoverPaintStyle: {strokeStyle: "#ec9f2e"},
		EndpointHoverStyle: {fillStyle: "#ec9f2e"},
		Anchors: ["BottomCenter", "TopCenter"]}; >
!

constInstanceOfConnection
	< return {
		overlays: ["Arrow", [
			"Label",
			{label: "?", location: 0.25, id: "myLabel"}]],
		paintStyle: {
			lineWidth: 2,
			strokeStyle:"#9b59bb",
			dashstyle:"4 2",
			joinstyle:"miter"}}; >
!

constReferenceConnection
	< return {
		overlays: ["Arrow", [
			"Label",
			{label: "?", location: 0.25, id: "myLabel"}]]}; >
!

constSourceTarget
	< return {
		dropOptions: {
			hoverClass:"dragHover"
		},
 		anchor: "Continuous"}; >
! !

!MaglevJsPlumb class methodsFor: 'initializing'!

initialize
	self initializeConstants.
	self initializeJsPlumb.
!

initializeChromeFix
	< document.onselectstart = function() {
		return false;
	}; >
!

initializeConstants
	sourceTarget := self constSourceTarget.
	defaults := self constDefaults.
	referenceConnection := self constReferenceConnection.
	instanceOfConnection := self constInstanceOfConnection.
	connection := self constConnection.
!

initializeJsPlumb
	jsPlumb
		bind: 'ready'
		a: [
			self initializeChromeFix.
			jsPlumb setRenderMode: jsPlumb SVG.
			jsPlumb importDefaults: defaults].
! !

!MaglevJsPlumb class methodsFor: 'interactions'!

connectWindow: sourceWindow to: targetWindow with: parameters
	|params type defParams|
	type := self connection at: (parameters at: #type).
	< params = $.extend(true, {}, defParams); >.
	params
		basicAt: 'source' put: sourceWindow container;
		basicAt: 'target' put: targetWindow container.

	jsPlumb connect: params.
!

prepareObject: anObject
	jsPlumb draggable: anObject.
	jsPlumb makeSource: anObject a: sourceTarget.
	jsPlumb makeTarget: anObject a: sourceTarget.
! !
