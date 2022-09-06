// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'


//Pages
import landingDocumentType from './pages/landingDocumentType'

//Objects
import headerObject from './components/HeaderObject.js'
import heroObject from './components/HeroObject.js'
import mediaObject from './components/MediaObject.js'
import sliderObject from './components/SliderObject.js'
import slideObject from './components/SlideObject.js'
import stepObject from './components/StepObject.js'
import stepsObject from './components/StepsObject.js'
import footerObject from './components/FooterObject'
// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  name: 'default',
  types: schemaTypes.concat([

    //Pages
    landingDocumentType,


    //Objects
    headerObject,
    heroObject,
    mediaObject,
    slideObject,
    sliderObject,
    stepObject,
    stepsObject,
    footerObject
  ]),
})
