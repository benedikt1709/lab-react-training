import React from "react";
import {
    Card, CardImg, CardBody,
    CardTitle
  } from 'reactstrap';

class IdCard extends React.Component {
    render() {
      return (
        <div>
        <Card>
          <CardImg top width="100%" src={this.props.picture} alt="Card image cap" />
          <CardBody>
            <CardTitle>First Name: {this.props.firstName}</CardTitle>
            <CardTitle>Last Name: {this.props.lastName}</CardTitle>
            <CardTitle>Gender: {this.props.gender}</CardTitle>
            <CardTitle>Height: {this.props.height}</CardTitle>
            <CardTitle>Birth: {this.props.birth.getDay()}.{this.props.birth.getMonth()}.{this.props.birth.getFullYear()}</CardTitle>
          </CardBody>
        </Card>
      </div>
      )
    }
}
    export default IdCard;