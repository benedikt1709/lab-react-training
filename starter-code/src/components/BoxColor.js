import React from "react";
import {
    Card, CardBody
  } from 'reactstrap';

class BoxColor extends React.Component {
    render() {

        let r = this.props.r;
        let g = this.props.g;
        let b = this.props.b;

        let divStyle = {
         backgroundColor: `rgb(${r}, ${g}, ${b})`
        };

      return (
        <div>
        <Card>
          <CardBody height="300px" style={divStyle}>

          </CardBody>
        </Card>
      </div>
      )
    }
}
    export default BoxColor;