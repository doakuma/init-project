"use client";
import React, { useState, useEffect } from "react";
import dayjs from "dayjs";
import { drawTable } from "./module.function";
import { isEmpty } from "lodash";
import { getData, updateData, createData } from "@/service/common";
import { renderTale } from "./pageComponent";
import { pageLists } from "./pageList";
import "./dashboard.css";

const PageList = (props) => {
  const [pageColumn, setPageColumn] = useState([]);
  const [pageData, setPageData] = useState([]);
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
  const getColumnList = () => {
    getData("/pageListcolumn").then((res) => {
      setPageColumn(res);
    });
  };
  const getList = () => {
    getData("/pageListData").then((res) => {
      setPageData(res);
    });
  };
  const updateList = () => {
    const updateParam = {
      id: "010000",
      menuNm: "장치 관리 test",
      menuCode: "EQU",
      pageNm: "장치 등록",
      fileFolder: "equ",
      fileName: "KMC-EQU-010000",
      author: "insplanet",
      isComplete: 2,
      requestStatus: 0,
      completeData: "",
      dueToDate: "",
      comments:
        "toast 팝업 추가 *선택삭제* 버튼 클릭 시 노출 |*장치 추가 버튼* 클릭 시 새 장치 목록에 리스트 노출",
    };
    const updateTarget = "010000";
    updateData("/pageListData", updateParam, updateTarget).then((res) => {
      console.debug("res", res);
      const updatedData = pageData.map((list) => {
        return list.id === res.id ? res : list;
      });
      setPageData(updatedData);
    });
  };
  const createList = () => {
    const updateParam = {
      menuNm: "장치 관리 test",
      menuCode: "EQU",
      pageNm: "장치 등록",
      fileFolder: "equ",
      fileName: "KMC-EQU-030000",
      author: "insplanet",
      isComplete: 2,
      requestStatus: 0,
      completeData: "",
      dueToDate: "",
      comments:
        "toast 팝업 추가 *선택삭제* 버튼 클릭 시 노출 |*장치 추가 버튼* 클릭 시 새 장치 목록에 리스트 노출",
    };
    createData("/pageListData", updateParam).then((res) => {
      setPageData([...pageData, res]);
    });
  };
  useEffect(() => {
    getColumnList();
    getList();
  }, []);
  return (
    <div className="page-list">
      <div className="homeWrap">
        <header className="header">
          <h1 className="headerTitle">PageList</h1>
          <ul className="headerInfo statusInfo">{drawStatusInfo(pageData)}</ul>
        </header>
        <div className="box-status-legend">
          <strong className="reported-date">Today : {reportedDate}</strong>
          <button onClick={() => createList()}>create</button>
          <button onClick={() => updateList()}>update</button>
        </div>
        {renderTale(pageColumn, pageData)}
      </div>
    </div>
  );
};

export default PageList;
