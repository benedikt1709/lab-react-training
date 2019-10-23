import React from "react";
import { Card, Button } from 'reactstrap';

class LikeButton extends React.Component {

    state = {
        clickCount: 0
    }

    clickHandler = () => {
        this.setState({
            clickCount: this.state.clickCount +1
        });
    }

    render() {

        let colors = ['purple', 'blue', 'green', 'yellow', 'orange', 'red'];
        let random = Math.floor(Math.random() * (colors.length)) + 0;

        return (
            <div>
                <Card>
                    <Button style={{backgroundColor: colors[random]}} onClick={this.clickHandler}>Likes: {this.state.clickCount}</Button>
                </Card>
            </div>
        )
    }
}
export default LikeButton;