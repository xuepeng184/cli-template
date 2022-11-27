let BASE_URL = "";
let TIME_OUT = 5000;

if (process.env.NODE_ENV === "development") {
  BASE_URL = "xp666.com";
} else if (process.env.NODE_ENV === "production") {
  BASE_URL = "";
}

export { BASE_URL, TIME_OUT };
