interface WeatherDay {
  dt: string | number;
  main: {
    temp: string | number;
    temp_min: string | number;
    temp_max: string | number;
    pressure: string | number;
    sea_level: string | number;
    grnd_level: string | number;
    humidity: string | number;
    temp_kf: string | number;
  };
  weather: {
    id: string | number;
    main: string;
    description: string;
    icon: string;
  }[];
  clouds: {
    all: string | number;
  };
  wind: {
    speed: string | number;
    deg: string | number;
    gust: string | number;
  };
  rain: {
    '3h': string | number;
  };
  sys: {
    pod: string;
  };
  dt_txt: string;
}

export interface WeatherDaily {
  cod: string | number;
  message: string | number;
  cnt: string | number;
  list: WeatherDay[];
  city: {
    coord: {
      lat: string | number;
      lon: string | number;
    };
    country: string;
    id: string | number;
    name: string;
    population: string | number;
    sunrise: string | number;
    sunset: string | number;
    timezone: string | number;
  };
}
