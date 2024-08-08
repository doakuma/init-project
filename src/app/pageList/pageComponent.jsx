import React from "react";

const renderTale = (column, data) => {
  return (
    <div className="page-list-wrapper">
      <table className="table page-list">
        <colgroup>
          {column.map((item, idx) => {
            return <col style={{ width: item.width }} key={idx} />;
          })}
        </colgroup>
        <thead>
          <tr>
            {column.map((item, idx) => {
              return <th key={idx}>{item.label}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {data.map((item, idx) => {
            return (
              <tr key={idx}>
                {column.map((obj, idx2) => {
                  return <td key={idx2}>{renderCell(item, obj.key, idx)}</td>;
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

const renderCell = (data, type, idx) => {
  switch (type) {
    case "index":
      const index = idx + 1;
      return index;
    case "fileName": // 파일명
      // _td.appendChild(createLink(data)).appendChild(isNew);
      return createLink(data);
    case "author": // 담당자
      return data.author !== "" ? data.author : "인스플래닛";
    case "riskStatus": // 위험도
      return <span className={`status ${data.riskStatus}`} />;
    case "requestContent": // 수정 요청 사항
    case "comments": // 비고
      return createComment(data, type);
    case "requestStatus": // 수정 진행 상태
    case "isComplete": // 작업 진행 상태
      return createProgress(data, type);
    // case "priority": // 우선순위
    //   var _priority = creatPriority(data);
    //   _td.appendChild(_priority);
    //   return _td;
    // case "functionSpec": // 기능 명세
    //   var _specs = createSpecs(data);
    //   _td.appendChild(_specs);
    //   return _td;
    default:
      return data[type];
  }
};

const createLink = (data) => {
  const { fileFolder, fileName } = data;
  const link = `${fileFolder}/${fileName}`;

  return (
    <a href={link} target="_blank">
      {fileName}
    </a>
  );
};
// comment parser : 비고, 수정사항(내용)에서 사용
const createComment = (data, key) => {
  var commentData = data[key];
  if (!commentData) {
    return null;
  } else {
    return (
      <ul className="comment-list">
        {commentData.split("|").map((item, idx) => {
          return <li key={idx}>{replaceWithTag(item)}</li>;
        })}
      </ul>
    );
  }
};
const createProgress = (data, key) => {
  const _data = data[key];
  let status = "";
  let progressText = "";
  if (key !== "requestStatus") {
    status = _data === 2 ? "done" : _data === 1 ? "ongoing" : "pending";
    progressText = _data === 2 ? "완료" : _data === 1 ? "진행중" : "진행대기";
  } else {
    status = _data === 2 ? "ongoing" : "";
    progressText = _data === 2 ? "수정완료" : "";
  }
  return <span className={`progress status-${status}`}>{progressText}</span>;
};

const replaceWithTag = (str) => {
  // 태그 변환을 위한 토큰 저장 객체
  var tokens = {};

  // 지시자와 해당 HTML 태그 매핑
  var indicators = {
    "*": "strong",
    "~": "del",
  };

  // 모든 지시자를 고유한 토큰으로 대체
  Object.keys(indicators).forEach((indicator, index) => {
    // 고유 토큰 생성
    var token = `__TOKEN${index}__`;
    tokens[token] = indicators[indicator];

    // 지시자에 해당하는 정규식 생성
    let regex = new RegExp(`\\${indicator}`, "g");

    // 문자열 내의 지시자를 토큰으로 대체
    str = str.replace(regex, () => token);
  });

  // 토큰을 해당 태그로 변환
  Object.keys(tokens).forEach((token) => {
    // 태그 삽입을 위한 카운터
    let count = 0;
    // 토큰에 해당하는 정규식 생성
    let regex = new RegExp(`${token}`, "g");

    // 문자열 내의 토큰을 태그로 변환
    str = str.replace(regex, () => {
      count++;
      // 짝수번째일 때 종료 태그, 홀수번째일 때 시작 태그 삽입
      return count % 2 === 0 ? `</${tokens[token]}>` : `<${tokens[token]}>`;
    });
  });

  return str;
};

export { renderTale };
