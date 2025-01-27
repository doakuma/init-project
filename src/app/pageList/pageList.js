const pageLists = {
  columns: [
    {
      key: "index",
      label: "번호",
      width: "5%",
    },
    {
      key: "menuNm",
      label: "메뉴명",
      width: "10%",
    },
    {
      key: "pageNm",
      label: "페이지명",
      width: "15%",
      align: "left",
    },
    {
      key: "fileName",
      label: "페이지 url",
      width: "10%",
    },
    {
      key: "author",
      label: "담당자",
      width: "10%",
    },
    {
      key: "isComplete",
      label: "진행상태",
      width: "5%",
    },
    {
      key: "dueToDate",
      label: "완료예정일",
      width: "10%",
    },
    {
      key: "completeData",
      label: "완료일",
      width: "10%",
    },

    {
      key: "requestStatus",
      label: "수정사항",
      width: "10%",
    },
    {
      key: "comments",
      label: "비고",
      width: "auto",
      align: "left",
    },
  ],
  rows: [
    {
      menuNm: "장치 관리",
      menuCode: "EQU",
      pageNm: "장치 등록",
      fileFolder: "equ",
      fileName: "KMC-EQU-010000",
      author: "insplanet",
      isComplete: 0,
      requestStatus: 0,
      completeData: "",
      dueToDate: "",
      comments: "",
    },
    {
      menuNm: "장치 관리",
      menuCode: "EQU",
      pageNm: "장치 등록 > 철도역 조회 선택",
      fileFolder: "equ",
      fileName: "KMC-EQU-010000",
      author: "insplanet",
      isComplete: 0,
      requestStatus: 0,
      completeData: "",
      dueToDate: "",
      comments: "",
    },
    {
      menuNm: "장치 관리",
      menuCode: "EQU",
      pageNm: "장치 현황 조회",
      fileFolder: "equ",
      fileName: "KMC-EQU-020000",
      author: "insplanet",
      isComplete: 0,
      requestStatus: 22,
      completeData: "",
      dueToDate: "",
      comments: "",
    },
    {
      menuNm: "장치 관리",
      menuCode: "EQU",
      pageNm: "장치 현황 조회 > 장치 수정",
      fileFolder: "equ",
      fileName: "KMC-EQU-020000",
      author: "insplanet",
      isComplete: 0,
      requestStatus: 0,
      completeData: "",
      dueToDate: "",
      comments: "",
    },
  ],
};

export { pageLists };
