import React from "react";
import { Chip, Avatar } from "@mui/material";

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
      avatar={avatar && <Avatar src={avatar.src} alt={avatar.alt} />}
    />
  );
};

export default CustomChip;
