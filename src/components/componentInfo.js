const componentList = [
  {
    label: "Basic",
    lists: [
      {
        label: "CustomButton",
        isDone: true,
        type: "custombutton",
      },
      {
        label: "CustomIcon",
        isDone: false,
        type: "customicon",
      },
      {
        label: "CustomChip",
        isDone: false,
        type: "customchip",
      },
      {
        label: "CustomBadge",
        isDone: false,
        type: "custombadge",
      },
      {
        label: "CustomModal",
        isDone: true,
        type: "custommodal",
      },
      {
        label: "CustomDatagrid",
        isDone: false,
        type: "customdatagrid",
      },
      {
        label: "CustomTable",
        isDone: true,
        type: "customtable",
      },
      {
        label: "CustomAccordion",
        isDone: false,
        type: "customaccordion",
      },
      {
        label: "CustomTab",
        isDone: false,
        type: "customtab",
      },
    ],
  },
  {
    label: "Forms",
    lists: [
      {
        label: "CustomInput",
        isDone: true,
        type: "custominput",
      },
      {
        label: "CustomRadio",
        isDone: true,
        type: "customradio",
      },
      {
        label: "CustomCheckbox",
        isDone: true,
        type: "customcheckbox",
      },
      {
        label: "CustomSelect",
        isDone: true,
        type: "customselect",
      },
      {
        label: "CustomSwitch",
        isDone: true,
        type: "customswitch",
      },
      {
        label: "CustomDatepicker",
        isDone: false,
        type: "customdatepicker",
      },
      {
        label: "CustomTimepicker",
        isDone: false,
        type: "customtimepicker",
      },
    ],
  },
];
const componentInfo = {
  custombutton: [
    [
      {
        label: "small",
        variant: "contained",
        size: "small",
      },
      {
        label: "medium",
        variant: "contained",
        size: "medium",
      },
      {
        label: "large",
        variant: "contained",
        size: "large",
      },
    ],
    [
      {
        label: "small",
        variant: "outlined",
        size: "small",
      },
      {
        label: "medium",
        variant: "outlined",
        size: "medium",
      },
      {
        label: "large",
        variant: "outlined",
        size: "large",
      },
    ],
    [
      {
        label: "small",
        variant: "text",
        size: "small",
      },
      {
        label: "medium",
        variant: "text",
        size: "medium",
      },
      {
        label: "large",
        variant: "text",
        size: "large",
      },
    ],
  ],
  customicon: [],
  custominput: [
    [
      {
        id: "outlined-required",
        label: "outlined-required",
        variant: "outlined",
        required: true,
        defaultValue: "",
        onChange: "handleChange",
        readOnly: false,
        disabled: false,
        type: "",
        helperText: "",
      },
      {
        id: "outlined-disabled",
        label: "outlined-disabled",
        variant: "outlined",
        required: false,
        defaultValue: "",
        onChange: "handleChange",
        readOnly: false,
        disabled: true,
        type: "",
        helperText: "",
      },
      {
        id: "outlined-password",
        label: "outlined-password",
        variant: "outlined",
        required: false,
        defaultValue: "",
        onChange: "handleChange",
        readOnly: false,
        disabled: false,
        type: "password",
        helperText: "",
      },
      {
        id: "outlined-readOnly",
        label: "outlined-readOnly",
        variant: "outlined",
        required: false,
        defaultValue: "",
        onChange: "handleChange",
        readOnly: true,
        disabled: false,
        type: "",
        helperText: "",
      },
      {
        id: "outlined-number",
        label: "outlined-number",
        variant: "outlined",
        required: false,
        defaultValue: "",
        onChange: "handleChange",
        readOnly: false,
        disabled: false,
        type: "number",
        helperText: "",
      },
      {
        id: "outlined-search",
        label: "outlined-search",
        variant: "outlined",
        required: false,
        defaultValue: "",
        onChange: "handleChange",
        readOnly: false,
        disabled: false,
        type: "search",
        helperText: "",
      },
      {
        id: "outlined-helperText",
        label: "outlined-helperText",
        variant: "outlined",
        required: false,
        defaultValue: "",
        onChange: "handleChange",
        readOnly: false,
        disabled: false,
        type: "",
        helperText: "Helper Text",
      },
    ],
    [
      {
        id: "filled",
        label: "filled",
        variant: "filled",
        required: false,
        defaultValue: "",
        onChange: "handleChange",
        readOnly: false,
        disabled: false,
        type: "",
        helperText: "",
      },
      {
        id: "standard",
        label: "standard",
        variant: "standard",
        required: false,
        defaultValue: "",
        onChange: "handleChange",
        readOnly: false,
        disabled: false,
        type: "",
        helperText: "",
      },
    ],
  ],
  customradio: [
    [
      {
        name: "radio",
        value: "",
        handleChange: "",
        defaultValue: "female",
        row: true,
        options: [
          {
            label: "Female",
            value: "female",
          },
          {
            label: "Male",
            value: "male",
          },
          {
            label: "Other",
            value: "other",
          },
        ],
      },
    ],
  ],
  customcheckbox: [
    [
      {
        handleChange: "",
        defaultValue: "female",
        row: true,
        options: [
          {
            label: "Female",
            value: "female",
            name: "checkbox",
          },
          {
            label: "Male",
            value: "male",
            name: "checkbox",
          },
          {
            label: "Other",
            value: "other",
            name: "checkbox",
          },
        ],
      },
    ],
  ],
  customselect: [
    [
      {
        labelId: "select-label",
        label: "label",
        id: "select",
        handleChange: "",
        defaultValue: "female",
        readOnly: false,
        disabled: false,
        error: false,
        required: false,
        size: "",
        helperText: "",
        options: [
          {
            label: "Female",
            value: "female",
          },
          {
            label: "Male",
            value: "male",
          },
          {
            label: "Other",
            value: "other",
          },
        ],
      },
      {
        labelId: "select-label-small",
        label: "label-small",
        id: "select-small",
        handleChange: "",
        defaultValue: "female",
        readOnly: false,
        disabled: false,
        error: false,
        required: false,
        size: "small",
        helperText: "",
        options: [
          {
            label: "Female",
            value: "female",
          },
          {
            label: "Male",
            value: "male",
          },
          {
            label: "Other",
            value: "other",
          },
        ],
      },
      {
        labelId: "select-label-large",
        label: "label-large",
        id: "select-large",
        handleChange: "",
        defaultValue: "female",
        readOnly: false,
        disabled: false,
        error: false,
        required: false,
        size: "large",
        helperText: "",
        options: [
          {
            label: "Female",
            value: "female",
          },
          {
            label: "Male",
            value: "male",
          },
          {
            label: "Other",
            value: "other",
          },
        ],
      },
    ],
    [
      {
        labelId: "select-label-readOnly",
        label: "label-readOnly",
        id: "select-readOnly",
        handleChange: "",
        defaultValue: "female",
        readOnly: true,
        disabled: false,
        error: false,
        required: false,
        size: "",
        helperText: "readOnly",
        options: [
          {
            label: "Female",
            value: "female",
          },
          {
            label: "Male",
            value: "male",
          },
          {
            label: "Other",
            value: "other",
          },
        ],
      },
      {
        labelId: "select-label-disabled",
        label: "label-disabled",
        id: "select-disabled",
        handleChange: "",
        defaultValue: "female",
        readOnly: false,
        disabled: true,
        error: false,
        required: false,
        size: "",
        helperText: "disabled",
        options: [
          {
            label: "Female",
            value: "female",
          },
          {
            label: "Male",
            value: "male",
          },
          {
            label: "Other",
            value: "other",
          },
        ],
      },
      {
        labelId: "select-label-error",
        label: "label-error",
        id: "select-error",
        handleChange: "",
        defaultValue: "female",
        readOnly: false,
        disabled: false,
        error: true,
        required: false,
        size: "",
        helperText: "error",
        options: [
          {
            label: "Female",
            value: "female",
          },
          {
            label: "Male",
            value: "male",
          },
          {
            label: "Other",
            value: "other",
          },
        ],
      },
      {
        labelId: "select-label-required",
        label: "label-required",
        id: "select-required",
        handleChange: "",
        defaultValue: "female",
        readOnly: false,
        disabled: false,
        error: false,
        required: true,
        size: "",
        helperText: "required",
        options: [
          {
            label: "Female",
            value: "female",
          },
          {
            label: "Male",
            value: "male",
          },
          {
            label: "Other",
            value: "other",
          },
        ],
      },
    ],
  ],
  customswitch: [
    [
      {
        handleChange: "",
        defaultValue: "female",
        options: [
          {
            label: "Female",
            value: "female",
            name: "checkbox",
            disabled: true,
            required: false,
            readOnly: false,
            size: "",
            color: "",
          },
          {
            label: "Male",
            value: "male",
            name: "checkbox",
            disabled: false,
            required: false,
            readOnly: false,
            size: "",
            color: "",
          },
          {
            label: "Other",
            value: "other",
            name: "checkbox",
            disabled: false,
            required: false,
            readOnly: false,
            size: "",
            color: "",
          },
        ],
      },
      {
        handleChange: "",
        defaultValue: "female",
        options: [
          {
            label: "Female",
            value: "female",
            name: "checkbox",
            disabled: false,
            required: true,
            readOnly: false,
            size: "",
            color: "",
          },
          {
            label: "Male",
            value: "male",
            name: "checkbox",
            disabled: false,
            required: false,
            readOnly: false,
            size: "",
            color: "",
          },
          {
            label: "Other",
            value: "other",
            name: "checkbox",
            disabled: false,
            required: false,
            readOnly: false,
            size: "",
            color: "",
          },
        ],
      },
      {
        handleChange: "",
        defaultValue: "female",
        options: [
          {
            label: "Female",
            value: "female",
            name: "checkbox",
            disabled: false,
            required: false,
            readOnly: true,
            size: "",
            color: "",
          },
          {
            label: "Male",
            value: "male",
            name: "checkbox",
            disabled: false,
            required: false,
            readOnly: false,
            size: "",
            color: "",
          },
          {
            label: "Other",
            value: "other",
            name: "checkbox",
            disabled: false,
            required: false,
            readOnly: false,
            size: "",
            color: "",
          },
        ],
      },
    ],
    [
      {
        handleChange: "",
        defaultValue: "female",
        options: [
          {
            label: "Female",
            value: "female",
            name: "checkbox",
            disabled: false,
            required: true,
            readOnly: false,
            size: "small",
            color: "secondary",
          },
          {
            label: "Male",
            value: "male",
            name: "checkbox",
            disabled: false,
            required: false,
            readOnly: false,
            size: "medium",
            color: "warning",
          },
          {
            label: "Other",
            value: "other",
            name: "checkbox",
            disabled: false,
            required: false,
            readOnly: false,
            size: "",
            color: "success",
          },
        ],
      },
    ],
  ],
  customtable: [
    [
      {
        colsInfo: [20, 30, 20, 30],
        columns: [
          [
            {
              label: "label1",
              name: "name1",
              colspan: 3,
            },
          ],
          [
            {
              label: "label3",
              name: "name3",
            },
            {
              label: "label4",
              name: "name4",
            },
          ],
        ],
        tableData: {
          name1: "value1",
          name2: "value2",
          name3: "value3",
          name4: "value4",
        },
        isVertical: false,
      },
      {
        colsInfo: [25, 25, 25, 25],
        columns: [
          {
            label: "label1",
            name: "name1",
          },
          {
            label: "label2",
            name: "name3",
          },
          {
            label: "label3",
            name: "name3",
          },
          {
            label: "label4",
            name: "name4",
          },
        ],
        tableData: [
          {
            name1: "value11",
            name2: "value12",
            name3: "value13",
            name4: "value14",
          },
          {
            name1: "value21",
            name2: "value22",
            name3: "value23",
            name4: "value24",
          },
          {
            name1: "value31",
            name2: "value32",
            name3: "value33",
            name4: "value34",
          },
          {
            name1: "value41",
            name2: "value42",
            name3: "value43",
            name4: "value44",
          },
        ],
        isVertical: true,
      },
    ],
  ],
  custommodal: [
    [
      {
        title: "Default modal",
        size: "lg",
        children: (
          <ul>
            <li>test</li>
            <li>test</li>
            <li>test</li>
            <li>test</li>
          </ul>
        ),
      },
      {
        title: "Default modal sm",
        size: "sm",
        children: (
          <ul>
            <li>test</li>
            <li>test</li>
            <li>test</li>
            <li>test</li>
          </ul>
        ),
      },
      {
        title: "Default modal xl",
        size: "xl",
        children: (
          <ul>
            <li>test</li>
            <li>test</li>
            <li>test</li>
            <li>test</li>
          </ul>
        ),
      },
    ],
    [
      {
        title: "alert",
        isAlert: true,
        alertContent: {
          type: "label",
          label: "alert content alert content alert content alert content ",
        },
      },
      {
        title: "confirm",
        isAlert: true,
        alertContent: {
          type: "label",
          label:
            "confirm content confirm content confirm content confirm content ",
        },
      },
    ],
  ],
  customchip: [
    [
      {
        label: "contained",
        variant: "contained",
        // color: "",
        // handleClick: "",
        // handleDelete: "",
        // deleteIcon: "",
        // avatar: "",
        // icon: "",
        // size: "",
      },
      {
        label: "outlined",
        variant: "outlined",
        // color: "",
        // handleClick: "",
        // handleDelete: "",
        // deleteIcon: "",
        // avatar: "",
        // icon: "",
        // size: "",
      },
    ],
    [
      {
        label: "primary",
        variant: "contained",
        color: "primary",
        // handleClick: "",
        // handleDelete: "",
        // deleteIcon: "",
        // avatar: "",
        // icon: "",
        // size: "",
      },
      {
        label: "secondary",
        variant: "contained",
        color: "secondary",
        // handleClick: "",
        // handleDelete: "",
        // deleteIcon: "",
        // avatar: "",
        // icon: "",
        // size: "",
      },
    ],
    [
      {
        label: "clickable",
        variant: "contained",
        color: "primary",
        handleClick: () => {
          console.debug("clickable");
        },
        // handleDelete: "",
        // deleteIcon: "",
        // avatar: "",
        // icon: "",
        // size: "",
      },
      {
        label: "deletable",
        variant: "contained",
        color: "primary",
        // handleClick: "",
        handleDelete: () => {
          console.debug("deletable");
        },
        // deleteIcon: "",
        // avatar: "",
        // icon: "",
        // size: "",
      },
    ],
  ],
};
const componentProps = {
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
};

export { componentList, componentInfo, componentProps };
