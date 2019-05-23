import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { downPayment } from '../../ducks/reducer';

class WizardSix extends Component {

    render() {
        return (
            <div className="parent-div">
                <div className="vert-align">                    <p>What is the estimated purchase price?</p> <br />


                    <input type="text" placeholder="amount" onChange={(e)=> downPayment(e.target.value)} /> <br />


                    <p>How much are you putting down as a down payment?</p> <br />


                    <input type="text" placeholder="amount" onChange={(e)=>downPayment(e.target.value)} />


                    <Link to="/wSeven"><button className="margin-btn"> Next </button></Link>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { downPayment } = state;
    return {
        downPayment
    }
}

export default connect(mapStateToProps, { downPayment })(WizardSix);