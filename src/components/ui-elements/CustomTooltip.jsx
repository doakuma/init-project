import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import { Box, Popper, Tooltip } from "@mui/material";
import styled from "@emotion/styled";

const CustomTooltip = ({
  children,
  title,
  placement = "bottom",
  arrow = false,
}) => {
  return (
    <Tooltip
      title={title}
      placement={placement}
      arrow={arrow}
      PopperComponent={TooltipPopper}
    >
      <TooltipContent>{children}</TooltipContent>
    </Tooltip>
  );
};

const TooltipContent = forwardRef(({ children, ...rest }, ref) => {
  return (
    <TooltipContentWrap ref={ref} {...rest}>
      {children}
    </TooltipContentWrap>
  );
});

const TooltipPopper = styled(Popper)(({ theme }) => {
  const { palette } = theme;
  return {
    "& .MuiTooltip": {
      "&-tooltip": {
        padding: "0.5rem 1rem",
        fontSize: "0.875rem",
        background: palette.element.brand.primary,
      },
      "&-arrow": {
        color: palette.element.brand.primary,
      },
    },
  };
});

const TooltipContentWrap = styled(Box)(() => ({
  display: "inline-flex",
}));

TooltipContent.displayName = "TooltipContent";
CustomTooltip.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  placement: PropTypes.oneOf(["bottom", "top", "left", "right"]),
  arrow: PropTypes.bool,
};

export default CustomTooltip;
