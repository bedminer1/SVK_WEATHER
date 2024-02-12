let cityName = "Seoul";

export const actions = {
  default: async ({ request }) => {
    const data = await request.formData();
    cityName = data.get("cityname");
  },
};

export const load = async ({ fetch }) => {
  try {
    const res = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?units=metric&appid=39ffd27d743c8cc01aa52c083a1b9bc7&q=${cityName}`
    );
    const data = await res.json();
    return data;
  } catch {
    error(404);
    cityName = "Seoul";
  }
};
