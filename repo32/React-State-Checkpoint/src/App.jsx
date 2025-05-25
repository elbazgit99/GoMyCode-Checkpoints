import  React , {component} from 'react'
import './App.css'

class App extends component {
  constructor(props) {
            super(props)
            this.state = {
              person : {
                fullName : "hamza elbaz",
                proffession  : "web Developer",
                imgSrc : "https://placehold.co/100x100/ADD8E6/000000?text=JD"
              },
              shows : false,
              mountedTime : null,
              intervalId : null,
              elapsedTime : 0,
            }
  }//this life sycle method runs immediately after the component is added 
  componentDidMount() {
    //set the time when the component wzs mounted
    this.setState({ mountedTime : Date.now() } , () => {
      const interval = setInterval(() => {
        this.setState( (prevState) => ({
          elapsedTime : Math.floor((Date.now() - prevState.mountedTime) / 1000),
        }))
      }, 1000)
      this.setState({ intervalId : interval })
    })
  }
  componentWillUnmount() {
    if (this.state.intervalId) {
      clearInterval(this.state.IntervalId)
    }
  }
  toggleShow = () => {
    this.setState((prevState) => ({
      shows : !prevState.shows,
    }))
  }
  render() {
    // Get values from the component's state for easier use in the JSX.
    const { person, shows, elapsedTime } = this.state;

    return (
      <div style={{ textAlign: 'center', padding: '20px', border: '1px solid #eee', borderRadius: '8px', maxWidth: '400px', margin: '20px auto', backgroundColor: '#f9f9f9' }}>
        {/* Button to show or hide the profile */}
        <button
          onClick={this.toggleShow}
          style={{
            padding: '10px 15px',
            fontSize: '16px',
            backgroundColor: '#4CAF50',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            marginBottom: '20px',
          }}
        >
          {/* Change button text based on 'shows' state */}
          {shows ? 'Hide Profile' : 'Show Profile'}
        </button>

        {/* Conditional rendering: Only show the profile if 'shows' is true */}
        {shows && (
          <div style={{ border: '1px solid #ddd', padding: '15px', borderRadius: '5px', backgroundColor: '#fff' }}>
            <img
              src={person.imgSrc}
              alt={person.fullName}
              style={{ width: '100px', height: '100px', borderRadius: '50%', objectFit: 'cover', marginBottom: '10px' }}
              // Fallback if the image fails to load
              onError={(e) => {
                e.target.onerror = null; // Prevents looping if fallback also fails
                e.target.src = "https://placehold.co/100x100/CCCCCC/000000?text=Error"; // Display a generic error image
              }}
            />
            <h2 style={{ margin: '10px 0', color: '#333' }}>{person.fullName}</h2>
            <p style={{ fontStyle: 'italic', color: '#666' }}>"{person.bio}"</p>
            <p style={{ fontWeight: 'bold', color: '#555' }}>Profession: {person.profession}</p>
          </div>
        )}

        {/* Display the time elapsed since the component was mounted */}
        <div style={{ marginTop: '20px', fontSize: '14px', color: '#777' }}>
          <p>Time since component mounted: <strong>{elapsedTime}</strong> seconds</p>
        </div>
      </div>
    );
  }
}



export default App
