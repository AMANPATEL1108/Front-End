const button = document.getElementById("get-location-button");

async function getData(lat, long) {
  const promise = await fetch(
    `http://api.weatherapi.com/v1/current.json?key=4c78e459e3904aa8a2020326240206&q=${lat},${long}&aqi=yes`
  );

  return await promise.json();
}

async function gotLocation(Position) {
  const result = await getData(
    Position.coords.latitude,
    Position.coords.longitude
  );
  console.log(result);
}

function failerToGet() {
  console.log("Failed to get location");
}

button.addEventListener("click", async () => {
  navigator.geolocation.getCurrentPosition(gotLocation, failerToGet);
});
