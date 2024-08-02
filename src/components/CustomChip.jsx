import { Chip } from "@mui/material";
import React from "react";

const CustomChip = (props) => {
  const {
    label,
    variant = "conteined",
    color = "primary",
    handleClick,
    handleDelete,
    deleteIcon,
    avatar,
    icon,
    size,
  } = props;
  return (
    <Chip
      label={label}
      variant={variant}
      color={color}
      onClick={handleClick}
      onDelete={handleDelete}
      deleteIcon={deleteIcon}
      avatar={avatar}
      icon={icon}
      size={size}
    />
  );
};

export default CustomChip;
