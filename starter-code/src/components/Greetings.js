import React from "react";
import {
    Card, CardBody,
    CardTitle
  } from 'reactstrap';

class Greetings extends React.Component {
    render() {

    const greetings = {
        "de": "Hallo",
        "en": "Hello",
        "fr": "Bonjour",
        "es": "Hola"
    }

    // greetings[this.props.lang]

    
    // let greet;

    // if (this.props.lang === "de") {
    //     greet = "Hallo ";
    // } else if (this.props.lang === "en")    {
    //     greet = "Hello ";
    // } else if (this.props.lang === "es")    {
    //     greet = "Hola ";
    // } else if (this.props.lang === "fr")    {
    //     greet = "Bonjour ";
    // }
      return (
        <div>
        <Card>
          <CardBody>
            <CardTitle lang={this.props.lang}>{greetings[this.props.lang]} {this.props.children}</CardTitle>
          </CardBody>
        </Card>
      </div>
      )
    }
}
    export default Greetings;