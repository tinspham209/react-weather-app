export const getWeekday = date => {
  const weekday = new Array(7);
  weekday[0] = "Sunday";
  weekday[1] = "Monday";
  weekday[2] = "Tuesday";
  weekday[3] = "Wednesday";
  weekday[4] = "Thursday";
  weekday[5] = "Friday";
  weekday[6] = "Saturday";
  return weekday[date.getDay()];
};

export const getDate = daytime => {
  return new Date(daytime * 1000);
};

export const getTimes = date => {
  const hour = date.getHours();
  const minutes = "0" + date.getMinutes();
  const formattedTime = hour + ":" + minutes.substr(-2);
  return formattedTime;
};

export const upperCaseString = string => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export const getIcon = id => {
  const prefix = "wi wi-";
  return prefix + id.icon;
};

export const getRecommendation = id => {
  return id.recommendation;
};
