
export const loadData = (APIDATA) => {
  const weatherDataLoaded = APIDATA.map((item) => {
    // console.log(item.weather[0].main)
    return {
      humidity: String(item.main.humidity),
      wind: String(item.wind.speed),
      temperature: (item.main.temp / 10).toFixed(2),
      city: item.city.name,
      icon: item.weather[0].main,
      nextDaysData: item.nextDays,
    };
  });

  return weatherDataLoaded;
};
