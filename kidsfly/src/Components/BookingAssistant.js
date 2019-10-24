import React from 'react';
import styled from 'styled-components';
import asst1 from "../img/assistant1.png"
import asst2 from "../img/assistant2.png"
import asst3 from "../img/assistant3.png"


const BookStyle = styled.div `
  .fas{
    color: gold;
  }
  h4 {
    text-align: left;
    font-family: Lato;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 22px;
    
  }
  
  .jake{
      position: absolute;
      width: 195px;
      height: 150px;
      left: 560px;
      top: 150px;
    }
   .john{
      position: absolute;
      width: 195px;
      height: 150px;
      left: 560px;
      top: 380px;
   } 
   .julia{
      position: absolute;
      width: 195px;
      height: 150px;
      left: 560px;
      top: 615px;
   }
  p {  
    text-align: left;
    font-size: 1.5rem;
  }
  .btn1{
    position: absolute;
    left: 70%;
    top: 32%;   
  }

  .btn2{
    position: absolute;
    left: 70%;
    top: 58%;   
  }
  .btn3{
    position: absolute;
    left: 70%;
    top: 85%;   
  }
  .btn {
    padding: 20px 100px;
    background: #F5CA8A;
    border-radius: 10px;
  }

   .asstcontent{
    margin-left: 3%;
  }

  .assts{
    padding-top: 30px;
    padding-bottom: 30px;
  }
 
  .filters{
    padding-right: 60px;
    border-right: 1px solid lightgrey;
    margin-top: 10px;
    margin-bottom: 10px;
  }

  h3 {
    padding-left: 100px;
  }

  .filform{
    display: flex;
    flex-direction: column;
    padding-left: 20px;
    
  }
  .content-container{
    display: flex;
    padding-bottom: 20px;
   }
   label{
     text-align:left;
     padding-bottom: 10px;
     padding-top: 30px;
     font-size: 2rem;
   }

   input{
    padding: 10px;
    background: #FFFFFF;
    border: 1px solid #E0EAEB;
    box-sizing: border-box;
    border-radius: 5px;
   }

   .subbtn{
    background: #F5CA8A;
    border-radius: 10px;
    padding: 10px 70px;
   }

   .substy{
     padding-top: 20px;
   }
`

const BookingAssistant = () => {
  return (
    <div>
    <BookStyle>
    <div className="nav-container">
        <header>
          <a href="landing.html"><h2>KidsFly</h2></a>
          <nav className="left-nav">
            <a href="/dashboard">Account</a>
            <a href="/bookingform">Plan Trip</a>
            <a href="about.html">About</a>
          </nav>
          <nav className="right-nav">
            <a href="/messagesdashboard">Messages</a>
          </nav>
        </header>
      </div>
      <div className="content-container">
        {/* form */}
        <div className="filters">
          <h3>Filters</h3>
          <form className="filform">
            <div className="filform">
              <label>Languages</label>
              <input
                type="text"
                name="languages"
                //  value={adminSignup.name}
                placeholder='Languages'
              //  onChange={handleChange} required
              />
            </div>
            <div className="filform">
              <label>Experience</label>
              <input
                type="text"
                name="experience"
                //  value={adminSignup.location}
                placeholder='Experience'
              //  onChange={handleChange} required
              />
            </div>
            <div className="filform">
              <label>Rating</label>
              <input
                type="text"
                name="rating"
                //  value={adminSignup.airportping}
                placeholder='Rating'
              //  onChange={handleChange} required
              />
            </div>
            <div className="filform">
              <label>Gender</label><input
                type="text"
                name="gender"
                //  value={adminSignup.password}
                placeholder='Gender'
              //  onChange={handleChange} required
              />
            </div>
            <div className="filform">
              <label>Date Available</label><input
                type="text"
                name="date available"
                //  value={adminSignup.password}
                placeholder='Date Available'
              //  onChange={handleChange} required
              />
            </div>

            <div className="substy"><button className="subbtn">Submit</button></div>
          </form>
          {/* content */}
        </div>
        <div className="asstcontent">
          <div className="assistants">
            <div className="assts"><img src={asst1} alt="man" /></div>
            <div className="jake">
              <h4>Jake Herman</h4>
              <i class="fas fa-star fa-lg"></i>
              <i class="fas fa-star fa-lg"></i>
              <i class="fas fa-star fa-lg"></i>
              <i class="fas fa-star fa-lg"></i>
              <i class="fas fa-star fa-lg"></i>300 reviews
        <p>230 jobs completed<br></br>
                Background checked <br></br>
                Heavy lifting, CPR trained, good
        with children<br></br>
                Knows Spanish and English </p>
            </div>
            <div><button className="btn1 btn">Book</button></div>
            
          </div>
     
          <div className="assistants">
            <div className="assts"><img src={asst2} alt="man with glasses" /></div>
            <div className="john">
              <h4>John Wallace </h4>
              <i class="fas fa-star fa-lg"></i>
              <i class="fas fa-star fa-lg"></i>
              <i class="fas fa-star fa-lg"></i>
              <i class="fas fa-star fa-lg"></i>
              <i class="fas fa-star fa-lg"></i>150 reviews
              <p>
                200 jobs completed<br></br>
                Background checked <br></br>
                Heavy lifting, CPR trained, good
                with children<br></br>
                Knows English
              </p>
            </div>
            <div><button className="btn2 btn">Book</button></div>
          </div>

          <div className="assistants">
            <div className="assts"><img src={asst3} alt="woman" /></div>
            <div className="julia">
              <h4>Julia Miko </h4>
              <i class="fas fa-star fa-lg"></i>
              <i class="fas fa-star fa-lg"></i>
              <i class="fas fa-star fa-lg"></i>
              <i class="fas fa-star fa-lg"></i>
              <i class="fas fa-star fa-lg"></i>100 reviews
              <p>
                110 jobs completed<br></br>
                Background checked <br></br>
                Heavy lifting, CPR trained, good
                with children<br></br>
                Knows Japanese and English
        </p>
            </div>
            <div><button className="btn3 btn">Book</button></div>
          </div>
        </div>
      </div>
    {/* footer */}
    <div className="foot-container">
        <footer>
          <div className="footCol1">
            <a href="about.html">About Us</a>
            <a href="/">Our Mission</a>
            <a href="/">Help</a>
            <a href="/stafflogin">Staff Log In</a>
          </div>

          <div className="footCol2">
            <a href="/">Services</a>
            <a href="/">Prices</a>
            <a href="/">Serviced Airports</a>
          </div>

          <div className="footCol3">
            <a href="/">Travel Checklist</a>
            <a href="/">Family Lounge</a>
            <a href="/">Transportation</a>
          </div>

          <div className="footCol4">
            <a href="/">Our Staff</a>
            <a href="/travelersignin">Logout</a>
           </div>
            </footer>
            </div>
        </BookStyle>
        </div>
)
}

export default BookingAssistant;
