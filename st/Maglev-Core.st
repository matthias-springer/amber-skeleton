Smalltalk current createPackage: 'Maglev-Core' properties: #{}!
Object subclass: #Maglev
	instanceVariableNames: 'objectSpace windows'
	package: 'Maglev-Core'!

!Maglev methodsFor: 'accessing'!

objectSpace
	objectSpace ifNil: [objectSpace := MaglevObjectSpace instance].
	^ objectSpace
! !

!Maglev methodsFor: 'initializing'!

initialize
	windows := OrderedCollection new.
! !

!Maglev methodsFor: 'interactions'!

addWindow: aWindow
	windows add: aWindow.
	self showConnectionsFor: aWindow.
!

removeWindow: aWindow
	windows remove: aWindow.
! !

!Maglev methodsFor: 'rendering'!

showConnectionsFor: aWindow
	windows do: [:window | 
		window checkAddConnectionTo: aWindow.
		aWindow checkAddConnectionTo: window].
!

showObjectWindow: oop
	|window|
	(self objectSpace hasLoadedOop: oop)
		ifFalse: [^ self showReloadObjectWindow: oop].
	window := (self objectSpace at: oop) windowViewComponent.
	window appendToWorkspace.
	^ window
!

showReloadObjectWindow: oop
	|window|
	window := MaglevWaitingWindow new.
	window appendToWorkspace.
	self objectSpace
		reloadObject: oop
		withCallback: [:object | |objWindow|
			objWindow := object windowViewComponentReplace: window.
			objWindow renderReplace].
	^ window
! !

Maglev class instanceVariableNames: 'instance'!

!Maglev class methodsFor: 'initializing'!

ready
	Maglev instance showObjectWindow: 159055361.
! !

!Maglev class methodsFor: 'singleton'!

instance
	instance ifNil: [instance := Maglev new].
	^ instance
! !

Object subclass: #MaglevObject
	instanceVariableNames: 'oop instVars instVarsSize classObject inspection isLoaded windows'
	package: 'Maglev-Core'!

!MaglevObject methodsFor: 'accessing'!

classObject
	^ classObject
!

inspection
	^ inspection
!

instVars
	^ instVars
!

instVarsDo: aBlock
	instVars keysAndValuesDo: [:index :iv | aBlock value: iv key value: iv value].
!

instVarsSize
	^ instVarsSize
!

oop
	^ oop
!

shortInspection
	inspection size > 10 
		ifTrue: [^ (inspection copyFrom: 1 to: 10), '...']
		ifFalse: [^ inspection].
!

windows
	windows ifNil: [windows := OrderedCollection new].
	^ windows
! !

!MaglevObject methodsFor: 'comparing'!

= anObject
	^ self oop = anObject oop
!

== anObject
	^ self oop == anObject oop
! !

!MaglevObject methodsFor: 'instance creation'!

parseJSON: obj
	isLoaded := true.
	instVars ifNil: [instVars := Dictionary new].
	oop := obj oop.
	classObject := MaglevObject newObject: obj classObject.
	inspection := obj inspection.
	instVarsSize := obj instVarsSize.
	obj instVars keysAndValuesDo: [:index :assoc | |key value|
		key := MaglevObject newObject: (assoc at: 1).
		value := MaglevObject newObject: (assoc at: 2).
		instVars at: index asNumber put: key -> value].
!

parseJSONNotLoaded: obj
	self isLoaded 
		ifNil: [isLoaded := false].
	oop := obj oop.
	inspection := obj inspection.
! !

!MaglevObject methodsFor: 'interactions'!

addWindow: aWindow
	self windows add: aWindow.
	Maglev instance addWindow: aWindow.
	^ aWindow
!

removeWindow: aWindow
	self windows remove: aWindow.
	Maglev instance removeWindow: aWindow.
	^ aWindow
! !

!MaglevObject methodsFor: 'reloading'!

ensureIsLoaded: collectionName from: from to: to
	|obj params|
	(self isLoaded: collectionName from: from to: to) ifTrue: [^ self].
	params := Dictionary new
		at: 'range_', collectionName asString, '_from' put: from;
		at: 'range_', collectionName asString, '_to' put: to;
		yourself.
	obj := MaglevAjax 
		ajax: '/object/index/', self oop
		data: params.
	self parseJSON: obj.
!

ensureIsLoaded: collectionName from: from to: to withCallback: aBlock
	|params|
	(self isLoaded: collectionName from: from to: to) ifTrue: [aBlock value. ^ self].
	params := Dictionary new
		at: 'range_', collectionName asString, '_from' put: from;
		at: 'range_', collectionName asString, '_to' put: to;
		yourself.
	MaglevAjax 
		ajax: '/object/index/', self oop
		data: params
		withCallback: [:obj | 
			self parseJSON: obj.
			aBlock value].
! !

!MaglevObject methodsFor: 'rendering'!

inlineViewComponent
	^ self class inlineViewClass basicNew
		object: self;
		initialize;
		yourself
!

inlineViewComponentShort
	^ self class inlineViewClass basicNew
		object: self;
		isShort: true;
		isDraggable: false;
		yourself
!

inlineViewComponentWithDepth: anInteger
	^ self inlineViewComponent
		depth: anInteger;
		yourself
!

windowViewComponent
	^ self class windowViewClass basicNew
		object: self;
		initialize;
		yourself
!

windowViewComponentReplace: aWindow
	^ self class windowViewClass newReplace: aWindow with: self
! !

!MaglevObject methodsFor: 'testing'!

hasInstVars
	^ instVars size > 0
!

isLoaded
	^ isLoaded
!

isLoaded: collectionName from: from to: to
	|collection|
	collection := self perform: collectionName.
	(from to: to) do: [:index |
		(collection includesKey: index) ifFalse: [^ false]].
	^ true
! !

MaglevObject class instanceVariableNames: 'basetypes'!

!MaglevObject class methodsFor: 'accessing'!

basetypes
	^ basetypes
! !

!MaglevObject class methodsFor: 'constants'!

basetype
	^ #object
!

inlineViewClass
	^ MaglevObjectInline
!

windowViewClass
	^ MaglevObjectWindow
! !

!MaglevObject class methodsFor: 'initializing'!

initialize
	self initializeBasetypes.
!

initializeBasetypes
	basetypes := Dictionary new
		at: self basetype put: self;
		yourself.
	self allSubclasses do: [:cls |
		basetypes at: cls basetype put: cls].
! !

!MaglevObject class methodsFor: 'instance creation'!

newFor: aBaseType
	|cls|
	cls := self basetypes 
		at: aBaseType asSymbol
		ifAbsent: [self error: 'Could not create forwarder object for invalid base type ', aBaseType].
	^ cls new
!

newObject: obj
	|object|
	object := self parseJSON: obj.
	MaglevObjectSpace instance updateObject: object.
	^ object
!

parseJSON: obj
	|object|
	object := self newFor: obj basetype.
	obj loaded
		ifTrue: [^ object parseJSON: obj; yourself]
		ifFalse: [^ object parseJSONNotLoaded: obj; yourself].
! !

MaglevObject subclass: #MaglevArray
	instanceVariableNames: 'elements elementsSize'
	package: 'Maglev-Core'!

!MaglevArray methodsFor: 'accessing'!

at: anInteger
	^ self elements at: anInteger
!

elements
	^ elements
!

elementsSize
	^ elementsSize
! !

!MaglevArray methodsFor: 'instance creation'!

parseJSON: obj
	super parseJSON: obj.
	elements ifNil: [elements := Dictionary new].
	elementsSize := obj elementsSize.
	obj elements keysAndValuesDo: [:index :element |
		elements at: index asNumber put: (MaglevObject newObject: element)].
! !

!MaglevArray methodsFor: 'testing'!

hasElements
	^ self elementsSize > 0
!

isFullyLoaded
	^ self elementsSize == self elements size
! !

!MaglevArray class methodsFor: 'constants'!

basetype
	^ #array
!

inlineViewClass
	^ MaglevArrayInline
!

windowViewClass
	^ MaglevArrayWindow
! !

MaglevObject subclass: #MaglevFixnum
	instanceVariableNames: ''
	package: 'Maglev-Core'!

!MaglevFixnum class methodsFor: 'constants'!

basetype
	^ #fixnum
!

inlineViewClass
	^ MaglevFixnumInline
!

windowViewClass
	^ MaglevFixnumWindow
! !

MaglevObject subclass: #MaglevFloat
	instanceVariableNames: ''
	package: 'Maglev-Core'!

!MaglevFloat class methodsFor: 'constants'!

basetype
	^ #float
!

inlineViewClass
	^ MaglevFloatInline
!

windowViewClass
	^ MaglevFloatWindow
! !

MaglevObject subclass: #MaglevHash
	instanceVariableNames: 'elements elementsSize'
	package: 'Maglev-Core'!

!MaglevHash methodsFor: 'accessing'!

at: anInteger
	^ self elements at: anInteger
!

elements
	^ elements
!

elementsSize
	^ elementsSize
!

keysAndValuesDo: aBlock
	elements keysAndValuesDo: [:index :kv | aBlock value: kv key value: kv value].
! !

!MaglevHash methodsFor: 'instance creation'!

parseJSON: obj
	super parseJSON: obj.
	elements ifNil: [elements := Dictionary new].
	elementsSize := obj elementsSize.
	obj elements keysAndValuesDo: [:index :assoc | |key value|
		key := MaglevObject newObject: (assoc at: 1).
		value := MaglevObject newObject: (assoc at: 2).
		elements at: index asNumber put: key -> value].
! !

!MaglevHash methodsFor: 'testing'!

hasElements
	^ self elementsSize > 0
!

isFullyLoaded
	^ self elementsSize == self elements size
! !

!MaglevHash class methodsFor: 'constants'!

basetype
	^ #hash
!

inlineViewClass
	^ MaglevHashInline
!

windowViewClass
	^ MaglevHashWindow
! !

MaglevObject subclass: #MaglevModule
	instanceVariableNames: 'includedModules includedModulesSize constants constantsSize'
	package: 'Maglev-Core'!

!MaglevModule methodsFor: 'accessing'!

constants
	^ constants
!

constantsSize
	^ constantsSize
!

includedModules
	^ includedModules
!

includedModulesSize
	^ includedModulesSize
! !

!MaglevModule methodsFor: 'instance creation'!

parseJSON: obj
	super parseJSON: obj.
	includedModules ifNil: [includedModules := Dictionary new].
	constants ifNil: [constants := Dictionary new].
	includedModulesSize := obj includedModulesSize.
	constantsSize := obj constantsSize.
	obj includedModules keysAndValuesDo: [:index :value |
		includedModules at: index asNumber put: (MaglevObject newObject: value)].
	obj constants keysAndValuesDo: [:index :assoc | |key value|
		key := MaglevObject newObject: (assoc at: 1).
		value := MaglevObject newObject: (assoc at: 2).
		constants at: index asNumber put: key -> value].
! !

!MaglevModule methodsFor: 'testing'!

hasConstants
	^ self constantsSize > 0
!

hasIncludedModules
	^ self includedModulesSize > 0
! !

!MaglevModule class methodsFor: 'constants'!

basetype
	^ #module
!

inlineViewClass
	^ MaglevModuleInline
!

windowViewClass
	^ MaglevModuleWindow
! !

MaglevModule subclass: #MaglevClass
	instanceVariableNames: 'superclassObject size'
	package: 'Maglev-Core'!

!MaglevClass methodsFor: 'accessing'!

superclassObject
	^ superclassObject
! !

!MaglevClass methodsFor: 'instance creation'!

parseJSON: obj
	super parseJSON: obj.
	superclassObject := MaglevObject newObject: obj superclassObject.
! !

!MaglevClass class methodsFor: 'constants'!

basetype
	^ #class
!

inlineViewClass
	^ MaglevClassInline
!

windowViewClass
	^ MaglevClassWindow
! !

MaglevObject subclass: #MaglevNilClass
	instanceVariableNames: ''
	package: 'Maglev-Core'!

!MaglevNilClass class methodsFor: 'constants'!

basetype
	^ #nilclass
!

inlineViewClass
	^ MaglevNilClassInline
!

windowViewClass
	^ MaglevNilClassWindow
! !

MaglevObject subclass: #MaglevString
	instanceVariableNames: ''
	package: 'Maglev-Core'!

!MaglevString class methodsFor: 'constants'!

basetype
	^ #string
!

inlineViewClass
	^ MaglevStringInline
!

windowViewClass
	^ MaglevStringWindow
! !

MaglevObject subclass: #MaglevSymbol
	instanceVariableNames: ''
	package: 'Maglev-Core'!

!MaglevSymbol class methodsFor: 'constants'!

basetype
	^ #symbol
!

inlineViewClass
	^ MaglevSymbolInline
!

windowViewClass
	^ MaglevSymbolWindow
! !

Object subclass: #MaglevObjectSpace
	instanceVariableNames: 'objects'
	package: 'Maglev-Core'!

!MaglevObjectSpace methodsFor: 'initializing'!

initialize
	objects := Dictionary new.
! !

!MaglevObjectSpace methodsFor: 'interactions'!

registerWindow: aWindow
	(objects at: aWindow object oop)
		addWindow: aWindow.
!

unregisterWindow: aWindow
	(objects at: aWindow object oop)
		removeWindow: aWindow.
! !

!MaglevObjectSpace methodsFor: 'objects'!

at: anOop
	^ objects 
		at: anOop
		ifAbsent: [self reloadObject: anOop]
!

at: anOop withCallback: aBlock
	(objects includesKey: anOop)
		ifTrue: [aBlock value: (objects at: anOop)]
		ifFalse: [self reloadObject: anOop withCallback: aBlock].
!

hasLoadedOop: oop
	^ (objects includesKey: oop) and: [(objects at: oop) isLoaded]
!

hasOop: oop
	^ objects includesKey: oop
!

reloadObject: anOop
	|obj|
	obj := MaglevAjax 
		ajax: '/object/index/', anOop asString
		data: Dictionary new.
	^ MaglevObject newObject: obj.
!

reloadObject: anOop withCallback: aBlock
	MaglevAjax 
		ajax: '/object/index/', anOop asString
		data: Dictionary new
		withCallback: [:obj | 
			aBlock value: (MaglevObject newObject: obj)].
!

updateObject: anObject
	anObject isLoaded
		ifTrue: [objects at: anObject oop put: anObject].
! !

MaglevObjectSpace class instanceVariableNames: 'instance'!

!MaglevObjectSpace class methodsFor: 'singleton'!

instance
	instance ifNil: [instance := self new].
	^ instance
! !

