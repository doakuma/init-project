import React, { useEffect, useState } from "react";
import {
  CustomButton,
  CustomInput,
  CustomRadio,
  CustomCheckbox,
  CustomSelect,
  CustomSwitch,
  CustomTable,
  CustomModal,
  CustomChip,
  CustomTab,
  CustomDatagrid,
  CustomSearch,
  CustomDatePicker,
  CustomAccordion,
  CustomSlider,
  CustomScheduler,
  CustomToggleButton,
  CustomCarousel,
  CustomButtonGroup,
  CustomTooltip,
} from "@/components";
import { useModal } from "./modalUtils";
import { useSearch } from "@/utils/common";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";

export const ComponentRender = (item, type) => {
  switch (type) {
    case "custombutton":
      return <CustomButton {...item} />;
    case "custominput":
      return <CustomInput {...item} />;
    case "customradio":
      return <CustomRadio {...item} />;
    case "customcheckbox":
      return <CustomCheckbox {...item} />;
    case "customselect":
      return <CustomSelect {...item} />;
    case "customswitch":
      return <CustomSwitch {...item} />;
    case "customtable":
      return <CustomTable {...item} />;
    case "customchip":
      return <CustomChip {...item} />;
    case "customtab":
      return <TabsRender {...item} />;
    case "customdatagrid":
      return <DataGridRender {...item} />;
    case "customsearch":
      return <SearchRender {...item} />;
    case "custommodal":
      return <ModalRender {...item} />;
    case "customdatepicker":
      return <DatePickerRender {...item} />;
    case "customaccordion":
      return <CustomAccordion {...item} />;
    case "customslider":
      return <CustomSlider {...item} />;
    case "customscheduler":
      return <CustomScheduler {...item} />;
    case "customtogglebutton":
      return <ToggleRenderer {...item} />;
    case "customcarousel":
      return <CarouselRender {...item} />;
    case "custombuttongroup":
      return <CustomButtonGroup {...item} />;
    case "customtooltip":
      return <TooltipRender {...item} />;
    default:
      return null;
  }
};

const TooltipRender = (data) => {
  return <CustomTooltip {...data} />;
};

const CarouselRender = (data) => {
  const renderItem = (item) => {
    return (
      <Card>
        <CardMedia sx={{ height: 140 }} image={item.imgSrc} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {item.title}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {item.content}
          </Typography>
        </CardContent>
      </Card>
    );
  };

  // renderSlideItem에 함수 전달
  return <CustomCarousel {...data} renderSlideItem={renderItem} />;
};

export const ComponentInfoRender = (data, type) => {
  return (
    <div className="da-components-source">
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export const ComponentPropsRender = (data) => {
  const typeRender = (type) => {
    if (type.includes("{")) {
      return <pre>{type}</pre>;
    } else {
      return type;
    }
  };

  return (
    <>
      {data?.map((item, idx) => (
        <dl className="da-components-props-list" key={idx}>
          <dt className={item.name.includes("?") ? "" : "required"}>
            {item.name}:
          </dt>
          <dd className="type">{typeRender(item.type)}</dd>
          {item.default && <dd className="default">{item.default}</dd>}
          {item.explain && <dd className="explain">{item.explain}</dd>}
        </dl>
      ))}
    </>
  );
};
const TabsRender = (item) => {
  const [tabsValue, setTabsValue] = useState(0);
  const handleChangeTab = (event, newValue) => {
    console.debug("newValue", newValue);
    setTabsValue(newValue);
  };
  return (
    <CustomTab {...item} tabValue={tabsValue} handleChange={handleChangeTab} />
  );
};

const ModalRender = (item) => {
  const modalProps = useModal();
  return (
    <>
      <CustomButton label={item.title} onClick={modalProps.openModal} />
      <CustomModal
        open={modalProps.isOpen}
        handleClose={modalProps.closeModal}
        {...item}
      />
    </>
  );
};

const DataGridRender = (item) => {
  const [rowSelection, setRowSelection] = useState([]);
  const handleChangeCheck = (newValue) => {
    setRowSelection(newValue);
  };
  useEffect(() => {}, [rowSelection]);
  return (
    <CustomDatagrid
      {...item}
      handleChangeCheck={handleChangeCheck}
      selectionModal={rowSelection}
    />
  );
};

const SearchRender = (item) => {
  const { searchParams, handleChange, handleClear, handleSearch, result } =
    useSearch(item.initParams);
  return (
    <>
      <CustomSearch
        searchInfo={item.searchInfo}
        handleChange={handleChange}
        handleClear={handleClear}
        handleSearch={handleSearch}
        searchParams={searchParams}
      />
      <div className="da-components-source">
        <pre>{JSON.stringify(searchParams, null, 2)}</pre>
      </div>
    </>
  );
};
const DatePickerRender = (item) => {
  const { searchParams, handleChange, handleClear, handleSearch, result } =
    useSearch(item.initParams);
  return (
    <>
      <CustomDatePicker
        {...item}
        handleChange={(e) => handleChange(e, "customdatepicker", "search01")}
      />
    </>
  );
};
const ToggleRenderer = (item) => {
  const [value, setValue] = useState("BTN01");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <CustomToggleButton
      {...item}
      value={value}
      exclusive={true}
      handleChange={handleChange}
    />
  );
};
