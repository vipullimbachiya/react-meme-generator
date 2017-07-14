import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../styles/index.css';
import { Form, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import MemeItem from './MemeItem';
import MyMemes from './MyMemes';


class App extends Component {

    constructor() {
        super();

        this.state = {
            memeLimit: 10,
            text0: '',
            text1: ''
        }
    }

    render() {
        return (<div>
            <h2><u>Welcome to meme generator</u></h2>
            <MyMemes />
            <h4><i>Write Some Text</i></h4>
            <Form inline>
                <FormGroup>
                    <ControlLabel>Top</ControlLabel>
                    {' '}
                    <FormControl type="text" onChange={(evt) => this.setState({text0 : evt.target.value})} />
                </FormGroup>
                {' '}
                <FormGroup>
                    <ControlLabel>Bottom</ControlLabel>
                    {' '}
                    <FormControl type="text"  onChange={(evt) => this.setState({text1 : evt.target.value})} />
                </FormGroup>
            </Form>
            {
                this.props.memes.slice(0, this.state.memeLimit).map((meme, i) => {
                    return (
                        <MemeItem key={i} meme={meme} text0={this.state.text0} text1={this.state.text1} />
                    )
                })
            }
            <div className="meme-button" onClick={() => {
                this.setState({
                    memeLimit: this.state.memeLimit + 10
                })
            }}>
                Load 10 more memes...
            </div>
        </div>)
    }
}

function mapStateToProps(state){
    return state;
}

export default connect(mapStateToProps, null)(App);