import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
} from "@react-email/components";
import React from "react";
import { Provider } from "./components/context";
import { Foo } from "./components/foo";

export const NotionMagicLinkEmail = () => (
  <Provider value={{ foo: "hi there" }}>
    <Html>
      <Head />
      <Preview>Log in with this magic link</Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={h1}>Login</Heading>
          <Foo /> {/* <-- Uses the context */}
        </Container>
      </Body>
    </Html>
  </Provider>
);

export default NotionMagicLinkEmail;

const main = {
  backgroundColor: "#ffffff",
};

const container = {
  paddingLeft: "12px",
  paddingRight: "12px",
  margin: "0 auto",
};

const h1 = {
  color: "#333",
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: "24px",
  fontWeight: "bold",
  margin: "40px 0",
  padding: "0",
};
