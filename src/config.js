export const api = (city) =>
  `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=5e8b3250f9cb806f54a976fe8b0aeacb`;

export const cityArr = ["Delhi", "Mumbai", "Kolkata", "Bengaluru"];

export const tableConfig = [
  {
    label: "Time",
    path: "dt_txt",
  },
  {
    label: "Feels",
    path: "main.feels_like",
  },
  {
    label: "Ground Level",
    path: "main.grnd_level",
  },
  {
    label: "Humidity",
    path: "main.humidity",
  },
  {
    label: "Pressure",
    path: "main.pressure",
  },
  {
    label: "Sea Level",
    path: "main.sea_level",
  },
  {
    label: "Temp",
    path: "main.temp",
  },
];
