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
import { isArray, isEmpty, isObject, isUndefined } from "lodash";
import {
  componentInfo,
  componentList,
  componentProps,
} from "@/components/componentInfo";
import {
  ComponentRender,
  ComponentInfoRender,
  ComponentPropsRender,
} from "@/components/utils/ComponentRender";
import { useRouter, usePathname } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const pathname = usePathname();
  const [compType, setCompType] = useState("");
  const handleClickList = (type) => {
    setCompType(type.toLowerCase());
  };
  const isFull = compType === "customsearch";
  return (
    <>
      <div className="da-components">
        <div className="da-components-list">
          {componentList.map((item, idx) => {
            const sortedList = item.lists?.sort((a, b) => {
              if (a.label < b.label) {
                return -1;
              }
              if (a.label > b.label) {
                return 1;
              }
              return 0;
            });
            return (
              <Fragment key={idx}>
                {idx > 0 && <Divider />}
                <Typography variant="h4" sx={{ my: 2 }}>
                  {item.label}
                </Typography>
                <List>
                  {/* {console.debug(sortedList(item.lists))} */}
                  {sortedList?.map((list, idx2) => {
                    return (
                      <ListItemButton
                        key={idx2}
                        onClick={() => handleClickList(list.label)}
                        selected={compType === list.label.toLocaleLowerCase()}
                      >
                        <ListItemText primary={list.label} />
                        <ListItemIcon>
                          {list.isDone && <StarBorder color="primary" />}
                        </ListItemIcon>
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
                // TODO : componentInfo 구조 변경 시 구현 함수
                if (!isArray(item)) {
                  const { title, description, contents } = item;
                  const gridCount = contents.length > 3 ? 4 : contents.length;
                  return (
                    <div
                      className="da-components-item"
                      style={{ "--gridCount": gridCount }}
                      key={idx}
                    >
                      {title && <Typography variant="h6">{title}</Typography>}
                      {description && (
                        <Typography variant="p">{description}</Typography>
                      )}
                      {contents.map((item2, idx2) => {
                        return (
                          <div
                            className={`da-components-cell ${
                              isFull ? "da-components-full" : ""
                            }`}
                            key={idx}
                          >
                            <div className="da-components-render" key={idx2}>
                              {ComponentRender(item2, compType)}
                            </div>
                            {ComponentInfoRender(item2, compType)}
                          </div>
                        );
                      })}
                    </div>
                  );
                } else {
                  // TODO : componentInfo 구조 변경 완료 후 삭제 예정
                  const gridCount = item > 3 ? 4 : item.length;
                  return (
                    <div
                      className="da-components-item"
                      style={{ "--gridCount": gridCount }}
                      key={idx}
                    >
                      {item.map((component, idx2) => {
                        return (
                          <div
                            className={`da-components-cell ${
                              isFull ? "da-components-full" : ""
                            }`}
                            key={idx2}
                          >
                            <div className="da-components-render">
                              {ComponentRender(component, compType)}
                            </div>

                            {ComponentInfoRender(component, compType)}
                          </div>
                        );
                      })}
                    </div>
                  );
                }
              })}
            </div>
          )}
          <div className="da-components-props">
            {!isEmpty(compType) && (
              <>
                <Typography variant="h5">Props</Typography>
                {ComponentPropsRender(componentProps[compType])}
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
