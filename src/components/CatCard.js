import React, { Component } from 'react'
import { Card,Col,Button } from 'react-bootstrap'

export class CatCard extends Component {
  render() {
    return (
      <>
        <Col>
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src={this.props.catImg} />
                  <Card.Body>
                    <Card.Title>{this.props.catName}</Card.Title>
                    <Card.Text>
                      Cat Length : {this.props.catLength}
                    </Card.Text>
                    <Card.Text>
                      Cat origin : {this.props.origin}
                    </Card.Text>
                    <Button variant="primary" onClick={() => { this.props.ownerContactInformation(this.props.id) }}>Contact The Owner</Button>
                  </Card.Body>
                </Card>
              </Col>

      </>
    )
  }
}

export default CatCard