import React, { Component } from "react";
import { Form, Col, Button } from "react-bootstrap";

import { connect } from 'react-redux';
import { createOpportunity } from '../../actions/opportunityActions';

class OpportunityForm extends Component {

    constructor(props){
        super(props);
        this.state = {
            opportunity_name: '',
            opportunity_type: '',
            lead_source: '',
            amount: '',
            close_date:'',
            opportunity_status: ''

        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        console.log(e.target.name);
        this.setState({ [e.target.name]: e.target.value });
      }

    onSubmit(e){
        e.preventDefault();

        const form_data = {
            opportunity_name: this.state.opportunity_name,
            opportunity_type: this.state.opportunity_type,
            lead_source: this.state.lead_source,
            amount: this.state.amount,
            close_date: this.state.close_date,
            opportunity_status: this.state.opportunity_status
        }

        this.props.createOpportunity(form_data); 

       // console.log(form_data);


       this.setState({
          opportunity_name: '',
          opportunity_type: '',
          lead_source: '',
          amount: '',
          close_date:'',
          opportunity_status: ''

       });


    }  


  render() {
    return (
      <Form onSubmit={this.onSubmit}>
        <Form.Row>
          <Form.Group as={Col} controlId="opportunity_name">
            <Form.Label>Opportunity Name</Form.Label>
            <Form.Control name= "opportunity_name" placeholder="Enter Opportunity Name" onChange={this.onChange} value={this.state.opportunity_name}/>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridOpportunityType">
            <Form.Label>Opportunity Type</Form.Label>
            <Form.Control as="select" name="opportunity_type"  onChange={this.onChange} value={this.state.opportunity_type}>
              <option value="">Choose...</option>
              <option value="existing_customer">Existing Customer</option>
              <option value="new_customer">New Customer</option>
            </Form.Control>
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group as={Col} controlId="formGridLeadSource">
            <Form.Label>Lead Source</Form.Label>
            <Form.Control as="select" name="lead_source"  onChange={this.onChange} value={this.state.lead_source}>
              <option>Choose...</option>
              <option>Advertisement</option>
              <option>Employee Referral</option>
              <option>External Referral</option>
              <option>Social Media</option>
              <option>Trade Show</option>
              <option>Other</option>
            </Form.Control>
          </Form.Group>

          <Form.Group controlId="formGridAmount">
            <Form.Label>Amount</Form.Label>
            <Form.Control type="number" placeholder="Enter Amount" name="amount"  onChange={this.onChange} value={this.state.amount}/>
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group as={Col} controlId="formGridCloseDate">
            <Form.Label>Close Date</Form.Label>
            <Form.Control type="date" placeholder="DD/MM/YYYY" name="close_date"  onChange={this.onChange} value={this.state.close_date}/>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridOpportunityStatus">
            <Form.Label>Opportunity Status</Form.Label>
            <Form.Control as="select" name="opportunity_status"  onChange={this.onChange} value={this.state.opportunity_status}>
              <option>Choose...</option>
              <option>Meeting Scheduled</option>
              <option>Proposal/Price Quote</option>
              <option>Negotiation/Review</option>
              <option>Hold</option>
              <option>Closed Win</option>
              <option>Closed Lost</option>
            </Form.Control>
          </Form.Group>
        </Form.Row>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    );
  }
}


export default connect(null,{ createOpportunity })(OpportunityForm);
