import React, { Component } from "react";
import Board from './Board'
import '../style.scss'


class Game extends Component {
    state = {  
        height: 8,
        width: 8,
        mines: 10
    }


startOver() {
    window.location.reload(false);
}
    render() { 
        const { height, width, mines } = this.state;
        return ( 
            <div className="game">
                <Board
                height={height}
                width={width}
                mines={mines}
                />
                <button onClick={this.startOver} className="restart">Start Over</button>
            </div>        
         );
    }
}
 
export default Game;