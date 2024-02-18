import React from "react";

function DateTimePretty(Component) {
  return function hocedComponent({ date }) {
    let time = new Date(date.props);
    let hours = time.getTime() / 1000 / 60 / 60;
    let now = new Date();
    let nowHours = now.getTime() / 1000 / 60 / 60;
    let diff = nowHours - hours;

    let result;
    
    if (diff < 1) {
      result = `${(diff * 60).toFixed()} мин.`
    } else if (diff > 1 && diff < 24) {
      result = `${diff.toFixed()} час.`
    } else if (diff > 24) {
      result = `${(diff / 24).toFixed()} дн.`
    } else if (diff === 0) {
      result = 'только что'
    }
    return <Component date={result} />
  };
}

export default DateTimePretty;
