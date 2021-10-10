import React from 'react';
import DatePicker from './components/datepicker';
import ReactDOM from 'react-dom';

class MuiDatepicker {
    constructor(target, props) {
        const { onChange, label,value,lang,placeholder,disablePast,mode ="date" } = props;
        const elementRef = React.createRef();
        this.target = target;
        setTimeout(() => {
            this.sourceElement = target.firstElementChild;
            this.init = elementRef.current.init;
            this.addItem = elementRef.current.addItem;
        }, 0);
        ReactDOM.render(<DatePicker placeholder={placeholder} mode={mode} disablePast={disablePast} lang={lang} ref={elementRef} label={label} value={value}  onChange={onChange} />, target)
    }
}
export default MuiDatepicker;

