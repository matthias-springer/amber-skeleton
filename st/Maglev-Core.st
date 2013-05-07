Smalltalk current createPackage: 'Maglev-Core' properties: #{}!
Object subclass: #Maglev
	instanceVariableNames: ''
	package: 'Maglev-Core'!

Object subclass: #MaglevObject
	instanceVariableNames: 'oop instVars classObject inspect'
	package: 'Maglev-Core'!

!MaglevObject methodsFor: 'accessing'!

classObject
	^ classObject
!

inspect
	^ inspect
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
	inspect := obj inspect.
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

elements
	^ elements
!

size
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
	obj elements keysAndValuesDo: [:key :value |
		elements at: (MaglevObject newObject: key) put: (MaglevObject newObject: value)].
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

MaglevObject subclass: #MaglevNotYetLoaded
	instanceVariableNames: ''
	package: 'Maglev-Core'!

!MaglevNotYetLoaded methodsFor: 'instance creation'!

parseJSON: obj
! !

!MaglevNotYetLoaded methodsFor: 'testing'!

isLoaded
	^ false
! !

!MaglevNotYetLoaded class methodsFor: 'constants'!

basetype
	^ nil
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
	"TODO: ensure that no data is overwritten by loaded==false objects."
	objects at: anObject oop put: anObject.
! !

MaglevObjectSpace class instanceVariableNames: 'instance'!

!MaglevObjectSpace class methodsFor: 'singleton'!

instance
	instance ifNil: [instance := self new].
	^ instance
! !

