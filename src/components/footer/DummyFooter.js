import React, { Component } from 'react';
import { Layout } from "antd";
const { Footer } = Layout;

export default class DummyFooter extends Component {
    render() {
        return (
            <Footer style={{ textAlign: "center" }}>
            ©2019 Created by Unisoft Business Solution
            </Footer>
        )
    }
}
