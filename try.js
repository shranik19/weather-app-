const link =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=Kathmandu&appid=33eaf6e5ba44cf4ffee95e585595da48";
function weather() {
  return new Promise((resolve, reject) => {
    const data = fetch(link);
    resolve(data);
  })
    .then((value) => {
      return value.json();
    })
    .then((value) => {
      console.log(value);
    });
}
async function run() {
  await weather();
}
run();
