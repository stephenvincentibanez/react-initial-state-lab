// your Bomb code here!
import React from 'react'

class Bomb extends React.Component {
    constructor(props){
        super()
        this.state = {
            secondsLeft: props.initialCount
        }
    }

    render() {
        const SECONDS_LEFT = this.state.secondsLeft
        console.log(SECONDS_LEFT)
        return(
            this.state.secondsLeft == 0? 
                (<div>Boom!</div>) : (<div>{SECONDS_LEFT} seconds left before I go boom!</div>)
        )
    }
}

export default Bomb