Smalltalk current createPackage: 'Maglev-Vendor' properties: #{}!
Object subclass: #MaglevJsPlumb
	instanceVariableNames: ''
	package: 'Maglev-Vendor'!

MaglevJsPlumb class instanceVariableNames: 'sourceTarget defaults referenceConnection instanceOfConnection connection'!

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
			jsPlumb initializeDefaults: defaults].
! !

!MaglevJsPlumb class methodsFor: 'interactions'!

prepareObject: anObject
	jsPlumb draggable: anObject.
	jsPlumb makeSource: anObject a: sourceTarget.
	jsPlumb makeTarget: anObject a: sourceTarget.
! !

