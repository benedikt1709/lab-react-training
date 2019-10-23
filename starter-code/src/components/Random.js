import React from "react";
import {
    Card, CardBody,
    CardTitle
  } from 'reactstrap';

class Random extends React.Component {
    render() {

        let min = this.props.min;
        let max = this.props.max;
        let random = Math.floor(Math.random() * parseInt(max)) + parseInt(min);
        console.log(random);

      return (
        <div width="400px">
        <Card>
          <CardBody>
            <CardTitle>
                Random Value between {min} and {max} => {random}
            </CardTitle>
          </CardBody>
        </Card>
      </div>
      )
    }
}
    export default Random;