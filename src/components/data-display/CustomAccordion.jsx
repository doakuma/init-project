import React from "react";
import PropTypes from "prop-types";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
} from "@mui/material";
import styled from "@emotion/styled";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const CustomAccordion = (props) => {
  const { data, handle } = props;
  return (
    <AccordionWrapper>
      {data.map((item, idx) => {
        const { title, content, defaultExpand, disabled } = item;
        return (
          <Accordion
            key={idx}
            defaultExpanded={defaultExpand}
            disabled={disabled}
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              {title}
            </AccordionSummary>
            <AccordionDetails>{content}</AccordionDetails>
          </Accordion>
        );
      })}
    </AccordionWrapper>
  );
};

export default CustomAccordion;

const AccordionWrapper = styled(Box)(() => {});
