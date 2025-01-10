import React from "react";
import PropTypes from "prop-types";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";

const CustomAccordion = (props) => {
  const { data = dummyData, handle } = props;
  return (
    <Accordion>
      {data.map((item, idx) => {
        return (
          <>
            <AccordionSummary>{title}</AccordionSummary>
            <AccordionDetails>{content}</AccordionDetails>
          </>
        );
      })}
    </Accordion>
  );
};

const dummyData = [
  {
    title: "Accordion 1",
    content:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur excepturi non, temporibus dicta velit, distinctio sit error sunt voluptates beatae quam quaerat impedit obcaecati voluptatibus voluptas nulla libero, quas officiis.",
  },
  {
    title: "Accordion 2",
    content:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur excepturi non, temporibus dicta velit, distinctio sit error sunt voluptates beatae quam quaerat impedit obcaecati voluptatibus voluptas nulla libero, quas officiis.",
  },
];

export default CustomAccordion;
