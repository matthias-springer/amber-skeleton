Smalltalk current createPackage: 'Maglev-Core' properties: #{}!
Object subclass: #Maglev
	instanceVariableNames: 'objectSpace'
	package: 'Maglev-Core'!

!Maglev methodsFor: 'accessing'!

objectSpace
	objectSpace ifNil: [objectSpace := MaglevObjectSpace instance].
	^ objectSpace
! !

!Maglev methodsFor: 'rendering'!

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
! !

Maglev class instanceVariableNames: 'instance'!

!Maglev class methodsFor: 'singleton'!

instance
	instance ifNil: [instance := Maglev new].
	^ instance
! !

Object subclass: #MaglevObject
	instanceVariableNames: 'oop instVars classObject inspection'
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

oop
	^ oop
! !

!MaglevObject methodsFor: 'instance creation'!

parseJSON: obj
	oop := obj oop.
	classObject := MaglevObject newObject: obj classObject.
	inspection := obj inspection.
	instVars := Dictionary new.
	obj instVars keysAndValuesDo: [:ivName :ivValue |
		instVars at: ivName put: (MaglevObject newObject: ivValue)].
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
	|window|
	window := self class windowViewClass newReplace: aWindow.
	window object: self.
	^ window
! !

!MaglevObject methodsFor: 'testing'!

isLoaded
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
	obj loaded 
		ifTrue: [object := self newFor: obj basetype]
		ifFalse: [object := MaglevNotYetLoaded new].
	^ object
		parseJSON: obj;
		yourself
! !

MaglevObject subclass: #MaglevArray
	instanceVariableNames: 'elements size'
	package: 'Maglev-Core'!

!MaglevArray methodsFor: 'accessing'!

at: anInteger
	^ self elements at: anInteger
!

elements
	^ elements
!

size
	size ifNil: [^ elements size].
	^ size
! !

!MaglevArray methodsFor: 'instance creation'!

parseJSON: obj
	super parseJSON: obj.
	size := obj size.
	elements := Array new.
	obj elements do: [:element |
		elements add: (MaglevObject newObject: element)].
! !

!MaglevArray methodsFor: 'testing'!

isFullyLoaded
	^ size == elements size
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
	instanceVariableNames: 'elements size'
	package: 'Maglev-Core'!

!MaglevHash methodsFor: 'accessing'!

elements
	^ elements
!

size
	^ size
! !

!MaglevHash methodsFor: 'instance creation'!

parseJSON: obj
	super parseJSON: obj.
	size := obj size.
	elements := Dictionary new.
	obj elements keysAndValuesDo: [:keySt :value | |key|
		key := keySt asNumber.
		key \\ 2 == 0 ifTrue: [ |objKey objValue|
			objKey := MaglevObject newObject: value.
			objValue := MaglevObject newObject: (obj elements at: key + 1).
			elements at: objKey put: objValue]].
! !

!MaglevHash methodsFor: 'testing'!

isFullyLoaded
	^ size == elements size
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
	instanceVariableNames: 'includedModules'
	package: 'Maglev-Core'!

!MaglevModule methodsFor: 'instance creation'!

parseJSON: obj
	super parseJSON: obj.
	includedModules := Array new.
	obj includedModules do: [:module |
		includedModules add: (MaglevObject newObject: module)].
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
	instanceVariableNames: 'superclass elements size'
	package: 'Maglev-Core'!

!MaglevClass methodsFor: 'instance creation'!

parseJSON: obj
	super parseJSON: obj.
	superclass := MaglevObject newObject: obj superclass.
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

MaglevObject subclass: #MaglevNotYetLoaded
	instanceVariableNames: ''
	package: 'Maglev-Core'!

!MaglevNotYetLoaded methodsFor: 'instance creation'!

parseJSON: obj
	oop := obj oop.
	inspection := obj inspection.
! !

!MaglevNotYetLoaded methodsFor: 'testing'!

isLoaded
	^ false
! !

!MaglevNotYetLoaded class methodsFor: 'constants'!

basetype
	^ nil
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

