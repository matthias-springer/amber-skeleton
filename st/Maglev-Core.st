Smalltalk current createPackage: 'Maglev-Core' properties: #{}!
Object subclass: #Maglev
	instanceVariableNames: ''
	package: 'Maglev-Core'!

Object subclass: #MaglevObject
	instanceVariableNames: 'oop instVars class inspect'
	package: 'Maglev-Core'!

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

!MaglevObject class methodsFor: 'rendering'!

inlineViewComponent
	^ self inlineViewClass basicNew
		object: self;
		initialize;
		yourself
! !

MaglevObject subclass: #MaglevArray
	instanceVariableNames: 'elements size'
	package: 'Maglev-Core'!

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
! !

MaglevObject subclass: #MaglevHash
	instanceVariableNames: 'elements size'
	package: 'Maglev-Core'!

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
! !

MaglevObject subclass: #MaglevModule
	instanceVariableNames: 'includedModules'
	package: 'Maglev-Core'!

!MaglevModule class methodsFor: 'constants'!

basetype
	# module
!

inlineViewClass
	^ MaglevModuleInline
! !

MaglevModule subclass: #MaglevClass
	instanceVariableNames: 'superclass elements size'
	package: 'Maglev-Core'!

!MaglevClass class methodsFor: 'constants'!

basetype
	^ #class
!

inlineViewClass
	^ MaglevClassInline
! !

MaglevObject subclass: #MaglevNotYetLoaded
	instanceVariableNames: ''
	package: 'Maglev-Core'!

!MaglevNotYetLoaded methodsFor: 'testing'!

isLoaded
	^ false
! !

Object subclass: #MaglevObjectSpace
	instanceVariableNames: 'objects'
	package: 'Maglev-Core'!

