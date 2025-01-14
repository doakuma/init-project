export const componentProps = {
  custombutton: [
    {
      name: "label",
      type: "string",
      explain: "BUtton label",
    },
    {
      name: "variant",
      type: "contained | outlined | text | string",
      explain: "",
    },
    {
      name: "size?",
      type: "small | medium | large",
      explain: "",
    },
  ],
  customicon: [],
  custominput: [
    {
      name: "id",
      type: "string",
      explain: "",
    },
    {
      name: "label",
      type: "string",
      explain: "",
    },
    {
      name: "variant",
      type: "outlined | filled | standard",
      explain: "",
    },
    {
      name: "onChange",
      type: "Function",
      explain: "",
    },
    {
      name: "required?",
      type: "boolean",
      explain: "",
    },
    {
      name: "defaultValue?",
      type: "string",
      explain: "",
    },
    {
      name: "readOnly?",
      type: "boolean",
      explain: "",
    },
    {
      name: "disabled?",
      type: "boolean",
      explain: "",
    },
    {
      name: "type?",
      type: "string",
      explain: "input 요소 type",
    },
    {
      name: "helperText?",
      type: "node",
      explain: "",
    },
  ],
  customradio: [
    {
      name: "name",
      type: "string",
      explain: "",
    },
    {
      name: "value",
      type: "any",
      explain: "",
    },
    {
      name: "handleChange",
      type: "Function",
      explain: "",
    },
    {
      name: "options",
      type: "{ label: string, value: any }[]",
      explain: "",
    },
    {
      name: "defaultValue?",
      type: "any",
      explain: "",
    },
    {
      name: "row?",
      type: "boolean",
      explain: "",
    },
  ],
  customcheckbox: [
    {
      name: "handleChange",
      type: "Function",
      explain: "",
    },
    {
      name: "options",
      type: "{ label: string, value: any, name: any }[]",
      explain: "",
    },
    {
      name: "defaultValue?",
      type: "any",
      explain: "",
    },
    {
      name: "row?",
      type: "boolean",
      explain: "",
    },
  ],
  customselect: [
    {
      name: "id",
      type: "string",
      explain: "",
    },
    {
      name: "value",
      type: "string",
      explain: "",
    },
    {
      name: "handleChange",
      type: "Function",
      explain: "",
    },
    {
      name: "options",
      type: "{ label: string, value: any}",
      explain: "",
    },
    {
      name: "labelId",
      type: "string",
      explain: "",
    },
    {
      name: "label",
      type: "string",
      explain: "",
    },
    {
      name: "readOnly?",
      type: "boolean",
      explain: "",
    },
    {
      name: "disabled?",
      type: "boolean",
      explain: "",
    },
    {
      name: "error?",
      type: "boolean",
      explain: "",
    },
    {
      name: "required?",
      type: "boolean",
      explain: "",
    },
    {
      name: "size?",
      type: "small | medium | large",
      explain: "",
    },
    {
      name: "helperText?",
      type: "node",
      explain: "",
    },
  ],
  customswitch: [
    {
      name: "defaultValue",
      type: "string",
      explain: "",
    },
    {
      name: "handleChange",
      type: "Function",
      explain: "",
    },
    {
      name: "options",
      type: `{ \n  label: string, \n  value: any, \n  name: string, \n  disabled?: boolean, \n  required?: boolean, \n  readOnly?: boolean, \n  size?: small | medium, \n  color?: string, \n}`,
      explain: "",
    },
  ],
  customtable: [
    {
      name: "columns",
      type: `{ \n  label: string, \n  name: string \n}`,
      explain: "",
    },
    {
      name: "colsInfo",
      type: "number[]",
      explain: "",
    },
    {
      name: "tableData",
      type: "object[]",
      explain: "",
    },
    {
      name: "isVertical",
      type: "boolean",
      explain: "vertical mode 사용 유무 | default false",
    },
  ],
  custommodal: [
    {
      name: "open",
      type: "useModal",
      explain: "",
    },
    {
      name: "handleClose",
      type: "useModal",
      explain: "",
    },
    {
      name: "handleConfirm",
      type: "Function",
      explain: "",
    },
    {
      name: "children",
      type: "node",
      explain: "",
    },
    {
      name: "title",
      type: "string",
      explain: "",
    },
    {
      name: "useAction?",
      type: "boolean",
      explain: "",
    },
    {
      name: "size",
      type: "sm | lg",
      explain: "",
    },
    {
      name: "isAlert",
      type: "boolean",
      explain: "alert / confirm일 때만 사용",
    },
    {
      name: "alertContent",
      type: `{ \n  label: string, \n  variant: string \n}`,
      explain: "alert / confirm일 때만 사용",
    },
  ],
  customchip: [
    {
      name: "label",
      type: "string",
      explain: "",
    },
    {
      name: "variant?",
      type: "contained | outlined",
      explain: "",
    },
    {
      name: "color?",
      type: "string",
      explain: "",
    },
    {
      name: "handleClick?",
      type: "Function",
      explain: "",
    },
    {
      name: "handleDelete?",
      type: "Function",
      explain: "",
    },
    {
      name: "deleteIcon?",
      type: "node",
      explain: "",
    },
    {
      name: "avatar?",
      type: "node",
      explain: "",
    },
    {
      name: "icon?",
      type: "node",
      explain: "",
    },
    {
      name: "size?",
      type: "small | medium",
      explain: "",
    },
  ],
  customtab: [
    {
      name: "tabValue",
      type: "any",
      explain: "",
    },
    {
      name: "handleChange",
      type: "Function",
      explain: "",
    },
    {
      name: "tabInfo",
      type: `{ \n  label: string, \n  value: any, \n  disabled: boolean \n}`,
      explain: "",
    },
    {
      name: "tabColor?",
      type: "string",
      explain: "",
    },
    {
      name: "tabCentered?",
      type: "boolean",
      explain: "",
    },
    {
      name: "tabOrientation?",
      type: "horizontal | vertical",
      explain: "",
    },
  ],
  customdatepicker: [],
  customsearch: [
    {
      name: "searchInfo",
      type: "object",
      explain: "",
    },
    {
      name: "handleChange",
      type: "function",
      explain: "useSearch() 를 통해 부모로부터 전달받은 함수",
    },
    {
      name: "handleClear",
      type: "function",
      explain: "useSearch() 를 통해 부모로부터 전달받은 함수",
    },
    {
      name: "handleSearch",
      type: "function",
      explain: "useSearch() 를 통해 부모로부터 전달받은 함수",
    },
    {
      name: "searchParams",
      type: "function",
      explain: "useSearch() 를 통해 부모로부터 parameter",
    },
  ],
  customtogglebutton: [
    {
      name: "options",
      type: "obect[]",
      explain: "토글 버튼 객체",
    },
    {
      name: "value",
      type: "any",
      explain: "토글 버튼 기본값",
    },
    {
      name: "handleChange",
      type: "Function",
      explain: "토글 버튼 변경 함수",
    },
    {
      name: "color?",
      type: "'standard' | 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning' | string",
      explain: "토글 버튼 컬러",
    },
    {
      name: "exclusive?",
      type: "boolean",
      default: "true",
      explain: "토글 버튼 단일 선택 여부",
    },
  ],
  customcarousel: [
    {
      name: "data",
      type: "Array",
      default: "undefined",
      explain: "Carousel에서 렌더링할 데이터 배열입니다.",
    },
    {
      name: "renderSlideItem",
      type: "function(item, index)",
      default: "undefined",
      explain:
        "각 슬라이드 항목을 커스터마이즈하여 렌더링할 함수입니다. (옵션)",
    },
    {
      name: "itemsPerPage",
      type: "number",
      default: "undefined",
      explain: "한 페이지에 표시할 슬라이드 항목의 수입니다.",
    },
    {
      name: "autoplayInterval",
      type: "number",
      default: "3000",
      explain:
        "자동 재생 시 다음 슬라이드로 넘어가기까지의 시간 간격(밀리초)입니다.",
    },
  ],
};
