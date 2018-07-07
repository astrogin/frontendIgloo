/**
 * @author https://stackoverflow.com/questions/13146418/find-all-the-days-in-a-month-with-date-object
 * @param {int} month The month number, 0 based
 * @param {int} year The year, not zero based
 * @return {Date[]} List with date objects for each day of the month
 */
export function getDaysInMonth(month, year) {
  const date = new Date(year, month, 1);
  const days = [];

  while (date.getMonth() === month) {
    days.push(new Date(date));
    date.setDate(date.getDate() + 1);
  }

  return days;
}

/**
 * @param {Date} date The date to add month
 * @return {Date} new date
 */
export function getNextMonth(date) {
  return getMonthByOffset(date, 1);
}

/**
 * @param {Date} date The date to remove month
 * @return {Date} new date
 */
export function getPrevMonth(date) {
  return getMonthByOffset(date, -1);
}

/**
 * @param {Date} date The date to add or remove months
 * @param {int} count The month count which need to add(or remove if negative)
 * @return {Date} new date
 */
export function getMonthByOffset(date, count) {
  const curMonth = date.getMonth();
  const newDate = new Date(date);
  newDate.setMonth(curMonth + count, 1);
  return newDate;
}

/**
 * @param {int} month number form Date.prototype.getMonth()
 * @param {Array} names number form Date.prototype.getMonth()
 * @return {string} Month name from array
 */
export function getMonthName(month, names) {
  return names[month];
}
