Smalltalk current createPackage: 'Maglev-Database-Explorer' properties: #{}!
Widget subclass: #MaglevDraggableObject
	instanceVariableNames: 'content'
	package: 'Maglev-Database-Explorer'!

!MaglevDraggableObject methodsFor: 'accessing'!

content
	^ content
!

content: anObject
	content := anObject.
! !

!MaglevDraggableObject methodsFor: 'rendering'!

renderOn: html
	html div
		class: 'draggable-new-object-container'
		with: [
			html div
				class: 'ui-widget-content ui-draggable draggable-new-object';
				with: [
					html div
						class: 'object-drag-dummy';
						style: 'display: none;';
						with: MaglevIcon move;
						with: content.
					html div
						class: 'object-iv-name';
						with: content]].
! !

!MaglevDraggableObject class methodsFor: 'not yet classified'!

with: anObject
	^ self basicNew
		content: anObject;
		initialize;
		yourself
! !

Widget subclass: #MaglevIcon
	instanceVariableNames: 'b icon spin'
	package: 'Maglev-Database-Explorer'!

!MaglevIcon methodsFor: 'accessing'!

icon
	icon ifNil: [icon := 'star'].
	^ icon
!

icon: aString
	icon := aString.
!

spin
	spin ifNil: [spin := false].
	^ spin
!

spin: aBoolean
	spin := aBoolean.
! !

!MaglevIcon methodsFor: 'rendering'!

renderOn: html
	|cssClass|
	cssClass := 'icon-', self icon.
	self spin 
		ifTrue: [cssClass := cssClass, ' icon-spin'].
	b := html b
		class: cssClass;
		yourself.
! !

!MaglevIcon class methodsFor: 'instance creation'!

move
	^ self new
		icon: 'move';
		yourself
!

pencil
	^ self new
		icon: 'pencil';
		yourself
!

remove
	^ self new
		icon: 'remove';
		yourself
!

search
	^ self new
		icon: 'search';
		yourself
!

star
	^ self new
		icon: 'star';
		yourself
!

wait
	^ self new
		icon: 'refresh';
		spin: true;
		yourself
! !

Widget subclass: #MaglevObjectInline
	instanceVariableNames: 'object hasDropDown isDraggable depth isShort dragContent dragDummy dragObject'
	package: 'Maglev-Database-Explorer'!

!MaglevObjectInline methodsFor: 'accessing'!

depth
	depth ifNil: [depth := 1].
	^ depth
!

depth: anInteger
	depth := anInteger.
!

hasDropDown
	hasDropDown ifNil: [hasDropDown := self hasDropDownDefault].
	^ hasDropDown
!

hasDropDown: aBoolean
	hasDropDown := aBoolean.
!

isDraggable
	isDraggable ifNil: [isDraggable := self isDraggableDefault].
	^ isDraggable
!

isDraggable: aBoolean
	isDraggable := aBoolean.
!

isShort
	isShort ifNil: [isShort := false].
	^ isShort
!

isShort: aBoolean
	isShort := aBoolean.
!

object
	^ object
!

object: anObject
	object := anObject.
! !

!MaglevObjectInline methodsFor: 'constants'!

hasDropDownDefault
	^ true
!

isDraggableDefault
	^ true
!

maxDepth
	^ 1
!

maxInspection
	^ 15
! !

!MaglevObjectInline methodsFor: 'interactions'!

bindDraggable
	|options cursorPos|
	cursorPos := Object new
		basicAt: 'left' put: 0;
		basicAt: 'top' put: 0;
		yourself.
	options := Object new
		basicAt: 'create' put: [:event :ui | ];
		basicAt: 'cursorPos' put: cursorPos;
		basicAt: 'start' put: [:event :ui | self dragStart: event a: ui];
		basicAt: 'stop' put: [:event :ui | self dragStop: event a: ui];
		yourself.
	dragObject asJQuery draggable: options.
!

dragStart: event a: ui
	dragContent hide.
	dragDummy show.
!

dragStop: event a: ui
	|position window|
	position := dragObject asJQuery offset.
	window := Maglev instance showReloadObjectWindow: object oop.
	window left: position left - (dragObject width / 2).
	window top: position top - (dragObject height / 2).
	dragObject left: 0.
	dragObject top: 0.
	dragDummy hide.
	dragContent show.
! !

!MaglevObjectInline methodsFor: 'rendering'!

renderDraggableObjectOn: html
	html div
		class: 'draggable-new-object-container';
		with: [
			dragObject := html div
				class: 'ui-widget-content ui-draggable draggable-new-object';
				with: [
					dragDummy := html div
						class: 'object-drag-dummy';
						style: 'display: none;';
						with: MaglevIcon move;
						with: [self renderObjectContainerOn: html].
					dragContent := html div
						class: 'object-iv-name';
						with: [self renderObjectContainerOn: html]]].
	self bindDraggable.
!

renderLoadedObjectOn: html
	|text|
	text := object inspection copyFrom: 1 to: self maxInspection.
	text size < object inspection size 
		ifTrue: [text := text, '...'].
	html with: text.
!

renderObjectActionsOn: html
	html
		with: MaglevIcon search;
		with: MaglevIcon pencil.
!

renderObjectContainerOn: html
	html span
		class: 'object-inline-view-view';
		with: [
			self renderObjectActionsOn: html.
			html span
				class: 'object-inline-typed-view';
				with: [
					self hasDropDown
						ifTrue: [self renderObjectWithDropDownOn: html]
						ifFalse: [self renderObjectOn: html]]].
!

renderObjectOn: html
	object isLoaded
		ifTrue: [self renderLoadedObjectOn: html]
		ifFalse: [self renderUnloadedObjectOn: html].
!

renderObjectWithDropDownOn: html
	html span
		class: 'dropdown';
		with: [
			html a
				class: 'dropdown-toggle btn object-dropdown-toggle';
				data: 'toggle' with: 'dropdown';
				with: [
					self renderObjectOn: html.
					html b class: 'caret']].
!

renderOn: html
	self isDraggable
		ifTrue: [self renderDraggableObjectOn: html]
		ifFalse: [self renderObjectContainerOn: html].
!

renderText: text withDropDownOn: html
	html span
		class: 'dropdown';
		with: [
			html a
				class: 'dropdown-toggle btn object-dropdown-toggle';
				data: 'toggle' with: 'dropdown';
				with: [
					html with: text.
					html b class: 'caret']].
!

renderUnloadedObjectOn: html
	|text|
	text := object inspection copyFrom: 1 to: self maxInspection.
	text size < object inspection size 
		ifTrue: [text := text, '...'].
	html with: text.
! !

!MaglevObjectInline class methodsFor: 'instance creation'!

newWithDepth: anInteger
	^ self basicNew
		depth: anInteger;
		initialize;
		yourself
! !

MaglevObjectInline subclass: #MaglevArrayInline
	instanceVariableNames: ''
	package: 'Maglev-Database-Explorer'!

!MaglevArrayInline methodsFor: 'constants'!

maxDepth
	^ 2
!

maxElements
	^ 3
! !

!MaglevArrayInline methodsFor: 'rendering'!

renderLoadedObjectOn: html
	|showElements maxElements|
	maxElements := self maxElements.
	showElements := maxElements min: self object size.
	self renderText: '[' withDropDownOn: html.
	self isShort
		ifTrue: [html with: '...']
		ifFalse: [
			(1 to: showElements) do: [:idx |
				html with: ((self object at: idx) inlineViewComponentWithDepth: self depth - 1).
				(idx < showElements or: [self object size > maxElements])
					ifTrue: [html with: ', ']].
			self object size > maxElements
				ifTrue: [html with: '...']	].
	self renderText: ']' withDropDownOn: html.
!

renderObjectWithDropDownOn: html
	"Do not render a drop down menu around the whole object."
	self renderObjectOn: html.
!

renderUnloadedObjectOn: html
	self renderText: '[' withDropDownOn: html.
	html with: '...'.
	self renderText: ']' withDropDownOn: html.
! !

MaglevObjectInline subclass: #MaglevFixnumInline
	instanceVariableNames: ''
	package: 'Maglev-Database-Explorer'!

!MaglevFixnumInline methodsFor: 'constants'!

hasDropDownDefault
	^ false
!

isDraggableDefault
	^ false
! !

MaglevObjectInline subclass: #MaglevFloatInline
	instanceVariableNames: ''
	package: 'Maglev-Database-Explorer'!

!MaglevFloatInline methodsFor: 'constants'!

hasDropDownDefault
	^ false
!

isDraggableDefault
	^ false
! !

MaglevObjectInline subclass: #MaglevHashInline
	instanceVariableNames: ''
	package: 'Maglev-Database-Explorer'!

!MaglevHashInline methodsFor: 'constants'!

maxDepth
	^ 2
!

maxElements
	^ 3
! !

!MaglevHashInline methodsFor: 'rendering'!

isDraggableDefault
	^ false
!

renderLoadedObjectOn: html
	|showElements maxElements|
	maxElements := self maxElements.
	showElements := maxElements min: self object size.
	self renderText: '{' withDropDownOn: html.
	self isShort
		ifTrue: [html with: '...']
		ifFalse: [ |counter|
			counter := 1.
			self object keysAndValuesDo: [:key :value |
				html 
					with: (key inlineViewComponentWithDepth: self depth - 1);
					with: '=>';
					with: (value inlineViewComponentWithDepth: self depth - 1).
				(counter < showElements or: [self object size > maxElements])
					ifTrue: [html with: ', '].
				counter := counter + 1.
				counter > showElements ifTrue: [
					self object size > maxElements ifTrue: [html with: '...'].
					self renderText: '}' withDropDownOn: html.
					^ self]]].
	self renderText: '}' withDropDownOn: html.
!

renderObjectWithDropDownOn: html
	"Do not render a drop down menu around the whole object."
	self renderObjectOn: html.
!

renderUnloadedObjectOn: html
	self renderText: '{' withDropDownOn: html.
	html with: '...'.
	self renderText: '}' withDropDownOn: html.
! !

MaglevObjectInline subclass: #MaglevModuleInline
	instanceVariableNames: ''
	package: 'Maglev-Database-Explorer'!

!MaglevModuleInline methodsFor: 'constants'!

maxDepth
	^ 1
! !

MaglevModuleInline subclass: #MaglevClassInline
	instanceVariableNames: ''
	package: 'Maglev-Database-Explorer'!

!MaglevClassInline methodsFor: 'constants'!

maxDepth
	^ 1
! !

MaglevObjectInline subclass: #MaglevNilClassInline
	instanceVariableNames: ''
	package: 'Maglev-Database-Explorer'!

!MaglevNilClassInline methodsFor: 'constants'!

hasDropDownDefault
	^ false
!

isDraggableDefault
	^ false
! !

MaglevObjectInline subclass: #MaglevStringInline
	instanceVariableNames: ''
	package: 'Maglev-Database-Explorer'!

!MaglevStringInline methodsFor: 'constants'!

hasDropDownDefault
	^ false
!

isDraggableDefault
	^ false
! !

MaglevObjectInline subclass: #MaglevSymbolInline
	instanceVariableNames: ''
	package: 'Maglev-Database-Explorer'!

!MaglevSymbolInline methodsFor: 'constants'!

hasDropDownDefault
	^ false
!

isDraggableDefault
	^ false
! !

Widget subclass: #MaglevTable
	instanceVariableNames: 'object rangeFrom rangeTo'
	package: 'Maglev-Database-Explorer'!

!MaglevTable methodsFor: 'accessing'!

object
	^ object
!

object: anObject
	object := anObject.
!

rangeFrom
	rangeFrom ifNil: [rangeFrom := 1].
	^ rangeFrom
!

rangeFrom: anInteger
	rangeFrom := anInteger.
!

rangeTo
	rangeTo ifNil: [rangeTo := 10 min: self object size].
	^ rangeTo
!

rangeTo: anInteger
	rangeTo := anInteger.
! !

!MaglevTable methodsFor: 'rendering'!

renderArrayBodyOn: html
	(self rangeFrom to: self rangeTo) do: [:idx | |obj|
		obj := object at: idx.
		html tr with: [
			html td with: idx inlineViewComponent.
			html td with: obj inlineViewComponent]].
!

renderDictionaryBodyOn: html
	|counter|
	counter := 1.
	self object keysAndValuesDo: [:key :value | 
		counter >= self rangeFrom ifTrue: [
			html tr with: [
				html td with: key inlineViewComponent.
				html td with: value inlineViewComponent]].
		counter := counter + 1.
		counter > self rangeTo ifTrue: [^ self]].
!

renderOn: html
	html table
		class: 'table table-bordered';
		style: 'margin-bottom: 0px;';
		with: [html tbody with: [self renderTableBodyOn: html]].
	self renderPaginationOn: html.
!

renderPaginationOn: html
!

renderTableBodyOn: html
	(self object isKindOf: Array)
		ifTrue: [self renderArrayBodyOn: html. ^ self].
	(self object isKindOf: Dictionary)
		ifTrue: [self renderDictionaryBodyOn: html. ^ self].
	self error: 'MaglevTable cannot render ', self object class.
! !

!MaglevTable class methodsFor: 'instance creation'!

newFor: anObject
	^ self basicNew
		object: anObject;
		initialize;
		yourself
! !

Widget subclass: #MaglevWindow
	instanceVariableNames: 'container'
	package: 'Maglev-Database-Explorer'!

!MaglevWindow methodsFor: 'accessing'!

container
	^ container
! !

!MaglevWindow methodsFor: 'attributes'!

left: aValue
	container left: aValue.
!

top: aValue
	container top: aValue.
! !

!MaglevWindow methodsFor: 'interactions'!

clear
	container asJQuery empty.
!

connectTo: aWindow with: parameters
	MaglevJsPlumb connectWindow: self to: aWindow with: parameters.
!

prepareWindow
	MaglevJsPlumb prepareObject: (container asJQuery).
	container
		onMouseEnter: [container removeClass: 'window-mouse-out'];
		onMouseLeave: [container addClass: 'window-mouse-out'].
!

replace: aWindow
	aWindow clear.
	container := aWindow container.
! !

!MaglevWindow methodsFor: 'rendering'!

appendToWorkspace
   self renderOn: (HTMLCanvas onJQuery: '#workspace' asJQuery).
!

renderCloseButtonOn: html
	html span
		class: 'display-inline-block';
		with: [html a
				href: '#';
				class: 'window-close-button';
				with: MaglevIcon remove].
!

renderHeightPlaceholderOn: html
	html span
		style: 'visibility: hidden;';
		with: [
			html a
				class: 'btn';
				with: 'a'].
!

renderHorziontalLineOn: html
	html hr style: 'margin: 10px;'.
!

renderOn: html
	container ifNil: [
		container := html div.
		self prepareWindow].
	container
		class: 'component window';
		with: [
			html div
				class: 'nowrap';
				with: [
					self renderWindowTitleOn: html.
					self renderWindowContentOn: html]].
!

renderReplace
	self renderOn: (HTMLCanvas onJQuery: container asJQuery).
!

renderWindowContentOn: html
!

renderWindowTitleContentOn: html
	html with: 'A new window'.
	self renderHeightPlaceholderOn: html.
	self renderCloseButtonOn: html.
!

renderWindowTitleOn: html
	html div
		class: 'window-title';
		with: [html span
				class: 'window-title-content';
				with: [self renderWindowTitleContentOn: html]].
! !

!MaglevWindow class methodsFor: 'instance creation'!

newReplace: aWindow
	^ self new
		replace: aWindow;
		yourself
! !

MaglevWindow subclass: #MaglevObjectWindow
	instanceVariableNames: 'container object classObject'
	package: 'Maglev-Database-Explorer'!

!MaglevObjectWindow methodsFor: 'accessing'!

container
	^ container
!

object
	^ object
!

object: anObject
	object := anObject.
	classObject := anObject classObject.
! !

!MaglevObjectWindow methodsFor: 'interactions'!

prepareWindow
	super prepareWindow
	MaglevObjectSpace registerWindow: self.
!

replace: aWindow
	super replace: aWindow
	MaglevObjectSpace unregisterWindow: aWindow.
	MaglevObjectSpace registerWindow: self.
! !

!MaglevObjectWindow methodsFor: 'rendering'!

renderWindowContentOn: html
	self renderHorziontalLineOn: html.
	html with: (MaglevTable newFor: self object instVars).
!

renderWindowTitleContentOn: html
	html with: object inlineViewComponentShort.
	html with: ' :'.
	self renderHeightPlaceholderOn: html.
	html div
		class: 'right-inline-block';
		with: [
			html with: classObject inlineViewComponent.
			self renderCloseButtonOn: html].
! !

MaglevObjectWindow subclass: #MaglevArrayWindow
	instanceVariableNames: ''
	package: 'Maglev-Database-Explorer'!

!MaglevArrayWindow methodsFor: 'rendering'!

renderWindowContentOn: html
	super renderWindowContentOn: html.
	self renderHorziontalLineOn: html.
	html with: (MaglevTable newFor: self object elements).
! !

MaglevObjectWindow subclass: #MaglevFixnumWindow
	instanceVariableNames: ''
	package: 'Maglev-Database-Explorer'!

MaglevObjectWindow subclass: #MaglevFloatWindow
	instanceVariableNames: ''
	package: 'Maglev-Database-Explorer'!

MaglevObjectWindow subclass: #MaglevHashWindow
	instanceVariableNames: ''
	package: 'Maglev-Database-Explorer'!

!MaglevHashWindow methodsFor: 'rendering'!

renderWindowContentOn: html
	super renderWindowContentOn: html.
	self renderHorziontalLineOn: html.
	html with: (MaglevTable newFor: self object elements).
! !

MaglevObjectWindow subclass: #MaglevModuleWindow
	instanceVariableNames: ''
	package: 'Maglev-Database-Explorer'!

MaglevModuleWindow subclass: #MaglevClassWindow
	instanceVariableNames: ''
	package: 'Maglev-Database-Explorer'!

MaglevObjectWindow subclass: #MaglevNilClassWindow
	instanceVariableNames: ''
	package: 'Maglev-Database-Explorer'!

MaglevObjectWindow subclass: #MaglevStringWindow
	instanceVariableNames: ''
	package: 'Maglev-Database-Explorer'!

MaglevObjectWindow subclass: #MaglevSymbolWindow
	instanceVariableNames: ''
	package: 'Maglev-Database-Explorer'!

MaglevWindow subclass: #MaglevWaitingWindow
	instanceVariableNames: ''
	package: 'Maglev-Database-Explorer'!

!MaglevWaitingWindow methodsFor: 'rendering'!

renderWindowContentOn: html
!

renderWindowTitleOn: html
	html
		with: MaglevIcon wait;
		with: ' loading...'.
! !

