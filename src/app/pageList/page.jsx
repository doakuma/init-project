"use client";
import React, { useState, useEffect } from "react";
import dayjs from "dayjs";
import { drawTable } from "./module.function";
import { isEmpty } from "lodash";
import { pageLists } from "./pageList";
import "./dashboard.css";

const PageList = (props) => {
  const [pageData, setPageData] = useState(pageLists);
  const reportedDate = dayjs(new Date()).format("YYYY-MM-DD");
  const drawStatusInfo = (data) => {
    if (isEmpty(data)) return;
    let total,
      dueTo = 0,
      onGoing = 0,
      complete = 0,
      dueToPer,
      onGoingPer,
      completePer;
    total = data.length;

    if (!data) return;
    data.forEach(function (item) {
      if (item.isComplete === 0) {
        dueTo++;
      } else if (item.isComplete === 1) {
        onGoing++;
      } else {
        complete++;
      }
    });
    dueToPer = ((dueTo / total) * 100).toFixed(2);
    onGoingPer = ((onGoing / total) * 100).toFixed(2);
    completePer = ((complete / total) * 100).toFixed(2);
    return (
      <>
        <li className="statusBarWrapper">
          <strong className="statusBarTit">진행률</strong>
          <strong>{completePer}%</strong>
          <span className="statusBar">
            <span
              className="statusBarInner"
              style={{ width: `${completePer}%` }}
            ></span>
          </span>
        </li>
        <li>
          전체: <strong>{total}</strong>건
        </li>
        <li>
          진행대기: <strong>{dueTo}</strong>건({dueToPer}%)
        </li>
        <li>
          진행중: <strong>{onGoing}</strong>건({onGoingPer}%)
        </li>
        <li>
          완료: <strong>{complete}</strong>건
        </li>
      </>
    );
  };
  useEffect(() => {
    const { columns, rows } = pageData;
    drawTable(columns, rows);
    drawStatusInfo(rows);
  }, [pageData]);
  return (
    <div className="page-list">
      <div className="homeWrap">
        <header className="header">
          <h1 className="headerTitle">PageList</h1>
          <ul className="headerInfo statusInfo">
            {drawStatusInfo(pageData.rows)}
          </ul>
        </header>
        <div className="box-status-legend">
          <strong className="reported-date">Today : {reportedDate}</strong>
        </div>
        <main className="content">
          <div className="page-list-wrapper"></div>
        </main>
      </div>
    </div>
  );
};

export default PageList;
