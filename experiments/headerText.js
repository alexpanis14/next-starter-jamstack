import Experiment from '../lib/Experiment'

const headerTextExperiment = new Experiment({
    name: 'Header Text',
    variants: {
        one: {
        weight: 34,
        displayName: 'one'
        },
        two: {
        weight: 33,
        displayName: 'two'
        },
        three: {
        weight: 33,
        displayName: 'three'
        }
    }
    })

    export default headerTextExperiment