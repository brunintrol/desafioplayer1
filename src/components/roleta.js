import React,{Component} from 'react'
import styled from 'styled-components'
import img from '../assets/roleta.png'

export class Roleta extends Component {

    constructor (props) {
        super(props)
    }

    references={}

    state={
        rotate:0,
    }

    componentDidMount () {

        let i=0

        setInterval(() => {
            this.setState({rotate:i})
            i=(i+1)%360
        },10)

    }

    render () {
        return (
            <EnvelopeRoleta 
                
                ref={valor => this.references.roleta = valor}

        style={{transform:`rotate(${this.state.rotate}deg)`}}
            />
        )
    }


}

const EnvelopeRoleta = styled.div`
    width:633px;
    height:633px;
    border-radius:100%;
    background:url(${img});
    // transition:0.2s linear;
`