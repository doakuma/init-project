import { Fragment } from "react";
import Image from "next/image";
import styles from "./page.module.css";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import CustomLayout from "@/components/CustomLayout";
import { Divider, Typography } from "@mui/material";

export default function Home() {
  return (
    <CustomLayout>
      {todoList.map((item, idx) => {
        return (
          <Fragment key={idx}>
            {idx > 0 && <Divider />}
            <Typography variant="h4">{item.label}</Typography>
            <List>
              {item.lists.map((list, idx2) => {
                return (
                  <ListItem key={idx2}>
                    <ListItemText primary={list.label} />
                  </ListItem>
                );
              })}
            </List>
          </Fragment>
        );
      })}
    </CustomLayout>
  );
}

const items = [
  {
    label: "",
    name: "",
    placeholder: "",
  },
];

const todoList = [
  {
    label: "Basic",
    lists: [
      {
        label: "CustomButton",
        isDone: false,
      },
      {
        label: "CustomText",
        isDone: false,
      },
      {
        label: "CustomIcon",
        isDone: false,
      },
      {
        label: "CustomChip",
        isDone: false,
      },
      {
        label: "CustomBadge",
        isDone: false,
      },
      {
        label: "CustomModal",
        isDone: false,
      },
      {
        label: "CustomDatagrid",
        isDone: false,
      },
    ],
  },
  {
    label: "Forms",
    lists: [
      {
        label: "CustomInput",
        isDone: false,
      },
      {
        label: "CustomRadio",
        isDone: false,
      },
      {
        label: "CustomCheckbox",
        isDone: false,
      },
      {
        label: "CustomSelect",
        isDone: false,
      },
      {
        label: "CustomDatepicker",
        isDone: false,
      },
    ],
  },
];
