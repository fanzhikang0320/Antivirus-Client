export const conversionScore = (score,max) => {
    // let num = (Number(score) / Number(max) * 5).toFixed(1);

    let num = Number(score) - 5;
    if ((num % 1) > 0.5) {
      num = num - (num % 1) + 1;
    }

    return num;
  }

  /**
   * 转换时间
   * @param {*} timestamp 时间戳
   */
export const changeTime = (timestamp,{monthFormat}) => {
  const date = new Date(timestamp);
  let resultDate = {},
      monthShorthand = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sept','Oct','Nov','Dec'],
      monthComplete = ['January','February','March','April','May','June','July','August','September','October','November','December'],
      _monthFormat = monthFormat || 'shorthand',
      year = date.getFullYear(),
      month = date.getMonth(),
      day = date.getDate();
    
    if (_monthFormat == 'shorthand') {
      resultDate.month = monthShorthand[month];
    } else if (_monthFormat == 'complete') {
      resultDate.month = monthComplete[month];
    } else if (_monthFormat == 'zero'){
      resultDate.month = month + 1 < 10 ? '0' +  (month + 1) : (month + 1);
    } else {
      resultDate.month = month + 1;
    }
    resultDate.year = year;
    resultDate.day = day;
    return resultDate;
}