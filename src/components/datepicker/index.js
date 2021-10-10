import * as React from 'react';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import { he, enUS } from "date-fns/locale";
import DateTimePicker from '@mui/lab/DateTimePicker';
import TimePicker from '@mui/lab/TimePicker';

export default React.forwardRef((props, ref) => {
  const { onChange, label, value, lang, placeholder, disablePast, mode } = props;
  const [pickerValue, setValue] = React.useState(value);

  const _onChange = (newValue) => {
    setValue(newValue);
    onChange(newValue);
  }
  React.useImperativeHandle(ref, () => ({
    init(newOptions) {

    }
  }));
  return <CustomizedHook mode={mode} placeholder={placeholder} disablePast={disablePast} value={pickerValue} lang={lang} label={label} onChange={_onChange} />;
});
function useMode(props) {
  debugger
  const { onChange, label, value, disablePast, mode } = props;
  switch (mode) {
    case "date":
      return <DatePicker
        disablePast={disablePast}
        size={"small"}
        label={label}
        value={value}
        onChange={onChange}
        renderInput={(params) => <TextField size={"small"} {...params} />}
      />
    case "time":
      return <TimePicker
      renderInput={(props) => <TextField  size={"small"}  {...props} />}
      label={label}
      value={value}
      onChange={onChange}
    />
    case "datetime":
      return <DateTimePicker
      renderInput={(props) => <TextField  size={"small"}  {...props} />}
      label={label}
      value={value}
      onChange={onChange}
    />
    default:
      return "modes:[date, time, datetime]"
  }
}
function CustomizedHook(props) {
  const { lang } = props;
  const language =  typeof lang === "string" && lang.toLowerCase().indexOf("he") !== -1 ? he : enUS;
  return (
    <LocalizationProvider locale={language} dateAdapter={AdapterDateFns}>
      {
        useMode(props)
      }
    </LocalizationProvider>
  );
}