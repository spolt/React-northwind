import React, { Component } from "react";
import { Container, Menu } from "semantic-ui-react";

export default function Categories() {
  return (
      <Container>
        <Menu pointing vertical>
          <Menu.Item name="home" />
          <Menu.Item name="messages" />
          <Menu.Item name="friends" />
        </Menu>
      </Container>
  );
}
