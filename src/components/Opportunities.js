import React, { Component } from "react";
import { Layout } from "antd";
import "bootstrap/dist/css/bootstrap.min.css";
import "antd/dist/antd.css";
import { Table, Divider, Tag } from "antd";
//import { Button } from "antd";

import { connect } from "react-redux";
import { fetchOpportunities } from "../actions/opportunityActions";

import OpportunityForm from "./forms/OpportunityForm";

import Button from "react-bootstrap/Button";

const { Content } = Layout;
const { Column, ColumnGroup } = Table;
class Opportunities extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showForm: false
    };
  }

  componentWillMount() {
    this.props.fetchOpportunities();
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.newOpportunities){
      this.props.opportunities.push(nextProps.newOpportunities);
    }
  }

  formVisibilityHandler() {
    if (this.state.showForm) {
      this.setState({
        showForm: false
      });
    } else {
      this.setState({
        showForm: true
      });
    }
  }

  render() {
    const opportunitiesItems = this.props.opportunities.map(opportunity => (
      <div key={opportunity.id}>
        <h3>{opportunity.opportunity_name}</h3>
        <p>{opportunity.opportunity_type}</p>
      </div>
    ));

    let opportunitiesData = this.props.opportunities;
    let reverseData = opportunitiesData.reverse(opportunitiesData);

    return (
      <div>
        {this.state.showForm ? (
          <div>
            <div
              className="text-right mb-3"
              style={{ padding: "0 50px", margin: "16px 0" }}
            >
              <Button
                onClick={() => this.formVisibilityHandler()}
                variant="primary"
                size="sm"
              >
                Close
              </Button>
            </div>

            <Content style={{ padding: "0 50px", margin: "16px 0" }}>
              <div style={{ background: "#fff", padding: 24, minHeight: 280 }}>
                <OpportunityForm />
              </div>
            </Content>
          </div>
        ) : (
          <div
            className="text-right mb-3"
            style={{ padding: "0 50px", margin: "16px 0" }}
          >
            <Button
              onClick={() => this.formVisibilityHandler()}
              variant="primary"
              size="sm"
            >
              + New Opportunity
            </Button>
          </div>
        )}

        <Content style={{ padding: "0 50px", margin: "16px 0" }}>
          <div style={{ background: "#fff", padding: 24, minHeight: 280 }}>
            <h2>Opportunities</h2>
            <Table dataSource={reverseData}>
            
                <Column
                  title="Opport. Name"
                  dataIndex="opportunity_name" 
                  key="opportunity_name"/>

                <Column 
                title="Opport. Type" 
                dataIndex="opportunity_type" 
                key="opportunity_type" />
          

              <Column title="Lead Source" dataIndex="lead_source" key="lead_source" />
              <Column title="Amount" dataIndex="amount" key="amount" />
              <Column title="Opport. Status" dataIndex="opportunity_status" key="opportunity_status" />
              <Column title="Close Date" dataIndex="close_date" key="close_date" />
              <Column title="Created At" dataIndex="created_at" key="created_at" />

            </Table>
          </div>
        </Content>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  opportunities: state.opportunities.items,
  newOpportunities: state.opportunities.item
});

export default connect(
  mapStateToProps,
  { fetchOpportunities }
)(Opportunities);
