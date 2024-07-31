"use client";
import { Fragment, useState } from "react";
import {
  List,
  ListItem,
  ListItemText,
  ListItemButton,
  ListItemIcon,
} from "@mui/material";
import { Divider, Typography } from "@mui/material";
import StarBorder from "@mui/icons-material/StarBorder";
import { isEmpty, isUndefined } from "lodash";
import CustomLayout from "@/components/CustomLayout";
import {
  componentInfo,
  componentList,
  componentProps,
} from "@/components/componentInfo";
import {
  ComponentRender,
  ComponentInfoRender,
} from "@/components/utils/ComponentRender";

export default function Home() {
  const [compType, setCompType] = useState("");
  const handleClickList = (type) => {
    setCompType(type.toLowerCase());
  };
  return (
    <CustomLayout>
      <div className="da-components">
        <div className="da-components-list">
          {componentList.map((item, idx) => {
            return (
              <Fragment key={idx}>
                {idx > 0 && <Divider />}
                <Typography variant="h4" sx={{ my: 2 }}>
                  {item.label}
                </Typography>
                <List>
                  {item.lists.map((list, idx2) => {
                    return (
                      <ListItemButton
                        key={idx2}
                        onClick={() => handleClickList(list.label)}
                        selected={compType === list.label.toLocaleLowerCase()}
                      >
                        <ListItemIcon>
                          {list.isDone && <StarBorder color="primary" />}
                        </ListItemIcon>
                        <ListItemText primary={list.label} />
                      </ListItemButton>
                    );
                  })}
                </List>
              </Fragment>
            );
          })}
        </div>
        <div className="da-components-content">
          <Typography variant="h4">{compType.toUpperCase()}</Typography>
          {!isUndefined(componentInfo[compType]) && (
            <div className="da-components-example">
              {componentInfo[compType].map((item, idx) => {
                return (
                  <div className="da-components-item" key={idx}>
                    {item.map((component, idx2) => {
                      return (
                        <div className="da-components-cell" key={idx2}>
                          <div className="da-components-render">
                            {ComponentRender(component, compType)}
                          </div>
                          {ComponentInfoRender(component, compType)}
                        </div>
                      );
                    })}
                  </div>
                );
              })}
            </div>
          )}
          <div className="da-components-props">
            {!isEmpty(compType) && (
              <>
                <Typography variant="h5">Props</Typography>
                {componentProps[compType]?.map((item, idx) => {
                  return (
                    <>
                      <dl className="da-components-props-list" key={idx}>
                        <dt
                          className={item.name.includes("?") ? "" : "required"}
                        >
                          {item.name}:
                        </dt>
                        <dd className="type">{item.type}</dd>
                        {item.explain && (
                          <dd className="explain">{item.explain}</dd>
                        )}
                      </dl>
                    </>
                  );
                })}
              </>
            )}
          </div>
        </div>
      </div>
    </CustomLayout>
  );
}
