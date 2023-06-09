import React, { Component } from 'react'
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

export class Footer extends Component {
  render() {
    return (
      <>
        <div className='footerSection'>

        
        <MDBFooter bgColor='light' className='text-center text-lg-start text-muted' style={{margin:'0',    display: 'flex', position:'relative',
        bottom:'0', width:'100%', marginBottom:'0',
    flexWrap: 'inherit',
    alignItems: 'center',
    justifyContent:'space-between'}}>

      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          {/* <span>Get connected with us on social networks:</span> */}
        </div>

        {/* <div>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='facebook-f' />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='twitter' />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='google' />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='instagram' />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='linkedin' />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='github' />
          </a>
        </div> */}
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon color='secondary' icon='gem' className='me-3' />
                Furry Friends
              </h6>
              <p>
              Furry Friends is a site that makes it easy for people to connect to send their cats or adopt a new cat friend.
              </p>
            </MDBCol>

            <MDBCol md='2' lg='2' xl='2' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Our Pages</h6>
              <p>
                <a href='/' className='text-reset'>
                  Home
                </a>
              </p>
              <p>
                <a href='/Main' className='text-reset'>
                  Adopt Cat
                </a>
              </p>
              <p>
                <a href='/AdoptionProcess' className='text-reset'>
                Adoption Process
                </a>
              </p>
              <p>
                <a href='/CareAfterAdoption' className='text-reset'>
                Care After Adoption
                </a>
              </p>
            </MDBCol>

            <MDBCol md='3' lg='2' xl='2' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>reach Us </h6>
              <p>
                <a href='/ContactUs' className='text-reset'>
                  Contact Us
                </a>
              </p>
              <p>
                <a href='/AboutUs' className='text-reset'>
                  About Us 
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Help
                </a>
              </p>
            </MDBCol>

            <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <MDBIcon color='secondary' icon='home' className='me-2' />
                Amman , Jordan
              </p>
              <p>
                <MDBIcon color='secondary' icon='envelope' className='me-3' />
                FurryFriends@example.com
              </p>
              <p>
                <MDBIcon color='secondary' icon='phone' className='me-3' /> + 01 234 567 88
              </p>
              <p>
                <MDBIcon color='secondary' icon='print' className='me-3' /> + 01 234 567 89
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2021 Copyright:
        <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
        FURRY FRIENDS
        </a>
      </div>
    </MDBFooter>
    </div>
      </>
    )
  }
}

export default Footer