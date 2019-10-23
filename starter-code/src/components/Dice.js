import React from "react";
import { Card, CardImg } from 'reactstrap';

class Dice extends React.Component {

    state = {
       randomNumber: 3
    }

    clickHandler = () => {
        this.setState({
            randomNumber: Math.floor(Math.random() * (6)) + 1,
        });
    }

    render() {

        return (
            <div>
                <Card>
                <CardImg top width="100%" onClick={this.clickHandler} src={`/img/dice${this.state.randomNumber}.png`} alt="Card image cap" />
                </Card>
            </div>
        )
    }
}
export default Dice;