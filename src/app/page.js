"use client";
import { Fragment, useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import CustomLayout from "@/components/CustomLayout";
import { Divider, Typography } from "@mui/material";
import { isUndefined } from "lodash";
import { CustomButton } from "@/components";
import { componentInfo } from "@/components/componentInfo";

export default function Home() {
  const [compType, setCompType] = useState("");
  const handleClickList = (type) => {
    setCompType(type.toLowerCase());
  };
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
                  <ListItem
                    key={idx2}
                    onClick={() => handleClickList(list.label)}
                  >
                    <ListItemText primary={list.label} />
                  </ListItem>
                );
              })}
            </List>
          </Fragment>
        );
      })}
      {!isUndefined(componentInfo[compType]) && (
        <div className="da-content">
          {componentInfo[compType].map((item, idx) => {
            return (
              <CustomButton key={idx} {...item}>
                Button
              </CustomButton>
            );
          })}
        </div>
      )}
    </CustomLayout>
  );
}

const items = [
  {
    label: "",
    name: "",
    placeholder: "",
  },
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
