import express from 'express'
import path from 'path'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 3000;
// Custom Middleware: Verifies if the request is within working hours
const workingHoursMiddleware = (req,res , next) => {
     const now = new Date();
     const dayOfWeek = now.getDay()
     const hour = now.getHours()
// Check if it's a weekday (Monday=1 to Friday=5) AND between 9 AM and 5 PM (17:00)
     if(dayOfWeek >= 1 && dayOfWeek <= 5 && hour >= 9 && hour < 17) {
          next() // Proceed to route if within hours
     }else{
          // Redirect to unavailable page if outside working hours
          res.sendFile(path.resolve('view' , 'unavailable.html'))
     }
};
// Serve static files from the 'public' directory (e.g., style.css)
app.use(express.static(path.resolve('piblic')));

// Apply the working hours middleware to all routes
app.use(workingHoursMiddleware)

//Route for Home Page
app.get('/', (req , res) => {
     res.sendFile(path.resolve('view' , 'home.html'))
});

//Route for our Services page
app.get('/services', (req , res) => {
     res.sendFile(path.resolve('view' , 'services.html'))
});

//Route for Contact US Page
app.get('/contact' , (req, res) => {
     res.sendFile(path.resolve('view' , 'contact.html'))
});

//satart the Server
app.listen(PORT || 3000, () => {
     console.log(`Web application rinning on http://localhost: ${PORT}`)
     console.log(`Available during working hours: Monday-Friday, 9 AM - 5PM`)
})