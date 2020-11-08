export const addWeeksToDate = (date, weeks = 1) => {
  const updatedDate = new Date(date.getTime());
  updatedDate.setDate(date.getDate() + weeks * 7);
  return updatedDate;
};

export const subWeeksFromDate = (date, weeks = 1) => {
  const updatedDate = new Date(date.getTime());
  updatedDate.setDate(date.getDate() - weeks * 7);
  return updatedDate;
};

export const getWeeksDayDateMonth = (date, isNextWeek) => {
  const result = [];
  const updatedDate = new Date(date.getTime());

  for (let i = 0; i < 7; i += 1) {
    const dayOfWeek = updatedDate.getDay();
    if (dayOfWeek > 0 && dayOfWeek < 6) {
      result.push({
        date: updatedDate,
        month: updatedDate.getMonth(),
        dayOfMonth: updatedDate.getDate(),
        dayOfWeek,
      });
    }
    if (isNextWeek) {
      updatedDate.setDate(updatedDate.getDate() + 1);
    } else {
      updatedDate.setDate(updatedDate.getDate() - 1);
    }
  }

  return result;
};

export const getStartDate = (date) => {
  const updatedDate = new Date(date.getTime());
  const dayOfWeek = updatedDate.getDay();
  if (dayOfWeek === 0) {
    updatedDate.setDate(updatedDate.getDate() + 1);
  } else if (dayOfWeek === 6) {
    updatedDate.setDate(updatedDate.getDate() + 2);
  }
  return updatedDate;
};
