import React from "react";
import "antd/dist/antd.css";
import { Menu, Icon } from "antd";
import { Link } from "react-router-dom";

export default class Header extends React.Component {
  state = {
    current: "home"
  };

  handleClick = e => {
    console.log("click ", e);
    this.setState({
      current: e.key
    });
  };

  render() {
    return (
      <Menu
        onClick={this.handleClick}
        selectedKeys={[this.state.current]}
        mode="horizontal"
      >
        <Menu.Item key="home">
          <Icon type="home" />
          Home
          <Link to="/"></Link>
        </Menu.Item>

        <Menu.Item key="users">
          <Icon type="user" />
          Users
        </Menu.Item>

        <Menu.Item key="contacts">
          <Icon type="contacts" />
          Contacts
        </Menu.Item>

        <Menu.Item key="accounts">
          <Icon type="account-book" />
          Accounts
        </Menu.Item>

        <Menu.Item key="opportunities">
          <Icon type="bell" />
          opportunities
          <Link to="/opportunities"></Link>
        </Menu.Item>
      </Menu>
    );
  }
}
