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
	instanceVariableNames: 'b icon'
	package: 'Maglev-Database-Explorer'!

!MaglevIcon methodsFor: 'accessing'!

icon
	icon ifNil: [icon := 'star'].
	^ icon
!

icon: aString
	icon := aString.
	b ifNotNil: [	b class: 'icon-', aString].
! !

!MaglevIcon methodsFor: 'rendering'!

renderOn: html
	b := html em
		class: 'icon-', self icon;
		yourself.
! !

!MaglevIcon class methodsFor: 'instance creation'!

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
! !

Widget subclass: #MaglevObjectInline
	instanceVariableNames: 'object hasDropDown isDraggable'
	package: 'Maglev-Database-Explorer'!

!MaglevObjectInline methodsFor: 'accessing'!

hasDropDown
	hasDropDown ifNil: [hasDropDown := false].
	^ hasDropDown
!

hasDropDown: aBoolean
	hasDropDown := aBoolean.
!

isDraggable
	isDraggable ifNil: [isDraggable := false].
	^ isDraggable
!

isDraggable: aBoolean
	isDraggable := aBoolean.
!

object
	^ object
!

object: anObject
	object := anObject.
! !

!MaglevObjectInline methodsFor: 'rendering'!

renderDraggableObjectOn: html
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
						with: [self renderObjectContainerOn: html].
					html div
						class: 'object-iv-name';
						with: [self renderObjectContainerOn: html]]].
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
	html with: '(object)'.
!

renderObjectWithDropDownOn: html
	html span
		class: 'dropdown'
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
! !

Widget subclass: #MaglevWindow
	instanceVariableNames: 'container'
	package: 'Maglev-Database-Explorer'!

!MaglevWindow methodsFor: 'interactions'!

prepareWindow
	MaglevJsPlumb prepareObject: (container asJQuery).
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

renderOn: html
	container := html div
		class: 'component window';
		with: [
			html div
				class: 'nowrap';
				with: [
					self renderWindowTitleOn: html.
					self renderWindowContentOn: html]].
	self prepareWindow.
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

MaglevWindow subclass: #MaglevObjectWindow
	instanceVariableNames: 'container object classObject'
	package: 'Maglev-Database-Explorer'!

!MaglevObjectWindow methodsFor: 'not yet classified'!

renderWindowTitleContentOn: html
! !

