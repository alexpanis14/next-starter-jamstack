import { Component } from 'react'
import initStore from '../lib/initRedux'
import withRedux from 'next-redux-wrapper'
import { startExperiment } from '../lib/redux/reducers/experiments'
import headerTextExperiment from '../experiments/headerText'
import cookies from 'next-cookies'
import Head from 'next/head'
import ga from '../lib/analytics/ga'
import fb from '../lib/analytics/fb'
import { track } from '../lib/analytics'
import SignUpForm from '../components/SignUpForm'
import { signupLead}  from '../lib/redux/reducers/lead'

import "../components/Header.scss";

class Index extends Component {
  static getInitialProps (ctx) {
    /* ctx: {req, res, query, isServer, store} */
    const { store } = ctx
    const dispatchStartExperiment = ({name, variant}) => {
      store.dispatch(startExperiment({
        name,
        variant
      }))
    }

    const activeExperiments = [
      headerTextExperiment
    ]

    headerTextExperiment.once('variant.selected', dispatchStartExperiment)

    let { userId } = cookies(ctx)
    activeExperiments.forEach((experiment) => {
      experiment.start({userId})
    })
  }

  componentDidMount () {
    const { experiments } = this.props

    if (experiments.active[headerTextExperiment.name]) {
      // startExperiment just returns the redux action object
      // we can make use of this to look up the analytics
      // event name and value
      let analytics = startExperiment({
        name: headerTextExperiment.name,
        variant: experiments.active[headerTextExperiment.name]
      }).meta.analytics
      track({
        event: analytics.event,
        value: analytics.value
      })
    }
  }

  render () {
    const { experiments, lead, signupLead } = this.props
    return (
      <div>
        <Head>
          <title>Gamer's Lobby AB Test</title>
          <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
          <script dangerouslySetInnerHTML={{__html: ga}} />
          <script dangerouslySetInnerHTML={{__html: fb}} />
        </Head>   
        <div className="Header">
        { experiments.active[headerTextExperiment.name] === 'one' ?  ">Connect with us @ Gamer's Lobby" : null }
        { experiments.active[headerTextExperiment.name] === 'two' ?   ">Join us @ Gamer's Lobby!" : null }
        { experiments.active[headerTextExperiment.name] === 'three' ? ">Tag along with Gamer's Lobby!" : null }
        </div><br /> 
        <SignUpForm lead={lead} signup={signupLead}/>
      </div>
    )
  }
}

const mapStateToProps = ({ experiments, lead }) => ({
  experiments,
  lead
})
const mapDispatchToProps = (dispatch, ownProps) => ({
  signupLead: ({email}) => {
    dispatch(signupLead({email}))
  }
})

export default withRedux(initStore, mapStateToProps, mapDispatchToProps)(Index)