import React from "react";
import { Chip, Avatar } from "@mui/material";
import { isObject } from "lodash";

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
  const renderAvatar = () => {
    if (isObject(avatar)) {
      return <Avatar src={avatar.src} alt={avatar.alt} />;
    } else {
      return <Avatar>{avatar}</Avatar>;
    }
  };
  return (
    <Chip
      label={label}
      variant={variant}
      color={color}
      onClick={handleClick}
      onDelete={handleDelete}
      deleteIcon={deleteIcon}
      icon={icon}
      size={size}
      avatar={avatar && renderAvatar()}
    />
  );
};

export default CustomChip;
