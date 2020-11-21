export const addWeeksToDate = (date, weeks = 1) => {
  const updatedDate = new Date(date.getTime());
  updatedDate.setDate(date.getDate() + weeks * 5);
  return updatedDate;
};

export const subWeeksFromDate = (date, weeks = 1) => {
  const updatedDate = new Date(date.getTime());
  updatedDate.setDate(date.getDate() - weeks * 5);
  return updatedDate;
};

export const getWeeksDayDateMonth = (date) => {
  const result = [];
  const updatedDate = new Date(date.getTime());

  for (let i = 0; i < 5; i += 1) {
    const dayOfWeek = updatedDate.getDay();
    result.push({
      date: updatedDate,
      month: updatedDate.getMonth(),
      dayOfMonth: updatedDate.getDate(),
      dayOfWeek,
    });

    updatedDate.setDate(updatedDate.getDate() + 1);
  }

  return result;
};
