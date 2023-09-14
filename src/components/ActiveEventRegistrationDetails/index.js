// Write your code here
import './index.css'

const registrationStatus = {
  inProgress: 'YET_TO_REGISTER',
  registered: 'REGISTERED',
  registerationClose: 'REGISTRATIONS_CLOSED',
}

const ActiveEventRegistrationDetails = props => {
  const {eventResigration} = props

  const registrationSuccess = () => (
    <div className="register-con">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
        alt="registered"
        className="imageRegistration"
      />
      <h1 className="paragraph">You have already registered for the event</h1>
    </div>
  )

  const registrationNotYet = () => (
    <div className="register-con">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
        alt="yet to register"
        className="imageRegistration"
      />
      <p className="paragraph">
        A live performance brings so much to your relationship with dance.
        Seeing dance live can often make you fall totally in love with this
        beautful art form
      </p>
      <button type="button" className="button">
        Register Here
      </button>
    </div>
  )

  const registrationClosed = () => (
    <div className="register-con">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
        alt="registrations closed"
        className="imageRegistration"
      />
      <h1>Registrations Are Closed Now!</h1>
      <p className="paragraph">
        Stay tuned. We will reopen the registrations soon!
      </p>
    </div>
  )

  const noActiveEventView = () => (
    <div className="headingcpon">
      <p className="event-heading">
        Click on an event, to view its registration details
      </p>
    </div>
  )

  const registrationInformation = () => {
    switch (eventResigration) {
      case registrationStatus.inProgress:
        return registrationNotYet()
      case registrationStatus.registered:
        return registrationSuccess()
      case registrationStatus.registerationClose:
        return registrationClosed()
      default:
        return noActiveEventView()
    }
  }

  return <div className="activeEventDetails">{registrationInformation()}</div>
}

export default ActiveEventRegistrationDetails
