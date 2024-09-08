import {
  Body,
  Button,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

interface EmailTemplateProps {
  name: string;
  message: string;
}

export function EmailTemplate({name, message}: EmailTemplateProps) {
  const previewText = `${name} has contacted you from your portfolio website`
  return (
    <Html>
      <Head/>
      <Preview>{previewText}</Preview>
      <Body>
        <Container>
          <Section style={{ paddingBottom: "20px" }}>
            <Row>
              <Text>Here's what {name} wrote</Text>
              <Text>{message}</Text>
              <Text>
                Try and respond to this in a couple of days. It might be a tasty oppurtunity or job !
              </Text>
            </Row>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};
