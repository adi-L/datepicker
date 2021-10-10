import * as React from 'react';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import { he,enUS } from "date-fns/locale";
// import DateTimePicker from '@mui/lab/DateTimePicker';

export default React.forwardRef((props, ref) => {
  const { onChange, label, value, lang,placeholder,disablePast } = props;
  const [pickerValue, setValue] = React.useState(value);

  const _onChange = (newValue) => {
    setValue(newValue);
    onChange(newValue);
  }
  React.useImperativeHandle(ref, () => ({
    init(newOptions) {

    }
  }));
  return <CustomizedHook placeholder={placeholder} disablePast={disablePast} value={pickerValue} lang={lang} label={label} onChange={_onChange} />;
});

function CustomizedHook(props) {
  // const [datetimepickerValue, setValue] = React.useState(new Date());
  const { onChange, label, value, lang,placeholder,disablePast } = props;
  const language = typeof lang === "string" && lang.toLowerCase().indexOf("he") !== -1 ? he : enUS;
  return (
    <LocalizationProvider locale={language} dateAdapter={AdapterDateFns}>
      <DatePicker
      disablePast={disablePast}
        size={"small"}
        label={label}
        value={value}
        onChange={onChange}
        renderInput={(params) => <TextField placeholder={placeholder} size={"small"} {...params} />}
      />
          {/* <DateTimePicker
        renderInput={(props) => <TextField {...props} />}
        label="DateTimePicker"
        value={datetimepickerValue}
        onChange={(newValue) => {
          setValue(newValue);
        }}
      /> */}
    </LocalizationProvider>
  );
}