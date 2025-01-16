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
  customdatagrid: [
    {
      name: "gridCols",
      type: "Array",
      default: "undefined",
      explain:
        "DataGrid의 컬럼 설정 정보 배열입니다. 각 객체는 DataGrid 컬럼의 필드(field), 너비(width) 등을 포함합니다. (필수)",
    },
    {
      name: "gridRows",
      type: "Array",
      default: "[]",
      explain:
        "DataGrid의 행 데이터 배열입니다. 각 객체는 하나의 행 데이터를 나타냅니다.",
    },
    {
      name: "useCheckbox",
      type: "boolean",
      default: "false",
      explain:
        "체크박스를 사용 여부를 나타냅니다. 선택 가능 여부를 결정합니다.",
    },
    {
      name: "handleChangeCheck",
      type: "function(selectedRows)",
      default: "undefined",
      explain:
        "체크박스 상태 변경 시 호출되는 콜백 함수입니다. 선택된 행의 정보를 처리합니다. (옵션)",
    },
    {
      name: "selectionModal",
      type: "Array",
      default: "[]",
      explain:
        "현재 선택된 행의 데이터를 담는 배열로, 선택 상태를 외부에서 제어할 수 있습니다.",
    },
    {
      name: "loading",
      type: "boolean",
      default: "false",
      explain: "로딩 상태 표시 여부입니다. 데이터 로딩 중임을 나타냅니다.",
    },
    {
      name: "lodadingType",
      type: "string",
      default: "undefined",
      explain:
        "로딩 중 표시할 프로그래스 바 또는 스켈레톤의 스타일을 결정합니다.",
    },
  ],
  custombuttongroup: [
    {
      name: "contents",
      type: "Array",
      default: "undefined",
      explain:
        "버튼 그룹에 포함될 버튼 데이터 배열입니다. 각 객체는 `CustomButton`의 props를 전달합니다. (필수)",
    },
    {
      name: "color",
      type: "string",
      default: "undefined",
      explain:
        "버튼 그룹의 색상을 지정합니다. Material-UI의 색상 프리셋을 따릅니다.",
    },
    {
      name: "disabled",
      type: "boolean",
      default: "false",
      explain:
        "버튼 그룹의 비활성화 여부를 나타냅니다. `true`일 경우 모든 버튼이 비활성화됩니다.",
    },
    {
      name: "fullWidth",
      type: "boolean",
      default: "false",
      explain: "버튼 그룹이 전체 너비를 차지할지 여부를 지정합니다.",
    },
    {
      name: "orientation",
      type: "string",
      default: '"horizontal"',
      explain:
        "버튼 그룹의 방향을 지정합니다. `horizontal` 또는 `vertical` 중 하나를 선택할 수 있습니다.",
    },
    {
      name: "size",
      type: "string",
      default: '"medium"',
      explain:
        "버튼 그룹 내 버튼의 크기를 지정합니다. `small`, `medium`, `large` 중 하나를 선택할 수 있습니다.",
    },
    {
      name: "variant",
      type: "string",
      default: '"text"',
      explain:
        "버튼 그룹 내 버튼의 스타일 변형을 지정합니다. `text`, `outlined`, `contained` 중 하나를 선택할 수 있습니다.",
    },
  ],
  customtooltip: [
    {
      name: "children",
      type: "ReactNode",
      default: "N/A",
      explain:
        "툴팁을 트리거할 콘텐츠 또는 요소입니다. 주로 사용자 상호작용(호버, 포커스 등)이 발생하는 대상입니다.",
    },
    {
      name: "title",
      type: "string | ReactNode",
      default: "N/A",
      explain: "툴팁에 표시할 텍스트 또는 React 요소입니다.",
    },
    {
      name: "placement",
      type: "string",
      default: '"bottom"',
      explain:
        '툴팁이 children 요소에 대해 표시되는 위치를 설정합니다. "top", "bottom", "left", "right" 등을 사용할 수 있습니다.',
    },
    {
      name: "arrow",
      type: "boolean",
      default: "false",
      explain:
        "툴팁에 화살표를 표시할지 여부를 결정합니다. true로 설정하면 화살표가 나타납니다.",
    },
  ],
};
