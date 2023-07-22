import * as React from "react";
import AccordionShadCN from '../elements/shadcn_ui/Accordion'
import styled from "styled-components";

export default function MyComponent(props: any) {
  return (
    <AccordionShadCn
      trigger="Do you Have any question?"
      content="Yes, How are you working inside builder.io?"
    />
  );
}

const AccordionShadCn = styled(AccordionShadCN)`
  display: flex;
  flex-direction: column;
  position: relative;
  margin-top: 20px;
  margin-right: auto;
  margin-left: auto;
  flex-grow: 0;
  background-color: rgba(243, 75, 75, 1);
  border-width: 1px;
  border-style: solid;
  border-color: rgba(26, 26, 235, 1);
`;