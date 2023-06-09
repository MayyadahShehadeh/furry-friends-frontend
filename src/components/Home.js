import React, { Component } from 'react'
// import { MDBCarousel, MDBCarouselItem } from "mdb-react-ui-kit";
// import './css/bootstrap.min.css'
// import './css/responsive.css'
// import Carousel from 'react-bootstrap/Carousel';

import "./css/styles2.css";
import { Col, Row, Nav, Button } from 'react-bootstrap';
import img1 from './images/istockphoto55.jpg'
import Carouse from './Carouse'
// import { MDBRipple } from 'mdb-react-ui-kit'
import axios from 'axios';
import HomeInfoSection from './HomeInfoSection';
import HoverText from './HoverText';
export class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      catsDataaa: [],
      catDescreption: [],
      newData:[]

    }
  }

  componentDidMount = async () => {

    let catsData = await axios.get(`${process.env.REACT_APP_SERVER}/getCats2`);
    let catsDesc = await axios.get(`${process.env.REACT_APP_SERVER}/getCatsDes`);


    console.log('descccc', catsDesc);

    this.setState({
      catsDataaa: catsData.data,
      catDescreption: catsDesc.data

    })

  }

  render() {
    return (
      <>
        <Carouse />


        {/* ----------------------------------------------- */}
        <br /> <br /><br />
        <div class="containerr">
          <h2 class="title">
            <span class="title-word title-word-1">Choose </span>
            <span class="title-word title-word-2">Your </span>
            <span class="title-word title-word-3">Cat </span>
            <span class="title-word title-word-4">Today !</span>
          </h2>
        </div>

        <br />
        <Row>
          {
            this.state.catsDataaa.slice(0, 4).map((item, idx)  => {
    return (
      <Col>
        <div className="cardss" key={idx} style={{height:'380px'}}>
          <img src={item.catImg} />
          <div className="cardss-body">
            <h2>{item.catName}</h2>
            <p>
           {item.description}
  
            </p>
            <Nav.Link href="/Main" ><Button variant="outline-primary" style={{marginBottom:'40px'}}>Go and Aopt</Button></Nav.Link>
          </div>
        </div>
      </Col>
    ) })}

        </Row>

        <br/><br/>
        <HoverText/>
        <HomeInfoSection/>
        <img src={img1}  style={{width:'100%'}}/>
      </>
    )
  }
}

export default Home