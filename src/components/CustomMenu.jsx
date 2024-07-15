import React from "react";
import { Drawer } from "@mui/material";

import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";

const CustomMenu = (props) => {
  const { open, onClose, menuInfo } = props;
  return (
    <Drawer open={open} onClose={onClose}>
      <List sx={{ width: 250 }}>
        {menuInfo.map((text, index) => {
          return (
            <ListItem key={text.label} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text.label} />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </Drawer>
  );
};

export default CustomMenu;
