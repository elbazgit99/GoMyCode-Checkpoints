import React from 'react'
import './App.css'
import {Card} from 'react-bootstrap'
import IMG from './assets/classic Vinly Record Player.webp'

import Name from './components/Name.jsx'
import Price from './components/Price.jsx'
import Description from './components/Description.jsx'
import Image from './components/Image.jsx'

const firstName = ""
function App() {
  const isFirstNameProvided = firstName && firstName.trim() !== ""
  return (
    <>
          <div className='app-container'>

            <Card className='product-card'>
                <Image/>
                <Card.Body>
                    <Name/>
                    <Description/>
                    <Price/>
                </Card.Body>
            </Card>
            <div className='greeting-section'>
                {/* Display an image only if the first name is provided */}
                <p className='greeting-text '>
                    Hello , {isFirstNameProvided ? firstName : "there!"}
                </p>
                {isFirstNameProvided && (
                  <img 
                    src={IMG}
                    alt="Greeting visual"
                    className="greeting-image"
                  />
                )}
            </div>
          </div>
    </>
  )
}

export default App
