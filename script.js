const inputBox = document.getElementById('input-box');
const ilistContainer = document.getElementById('list-container');
// api key 89938e4a20c54733bcd130544232706

// URL (required), options (optional)

const temp = document.getElementById('temp');
const cond = document.getElementById('cond');
const img = document.querySelector('img');
fetch('http://api.weatherapi.com/v1/current.json?key=89938e4a20c54733bcd130544232706&q=48442&aqi=no', {mode: 'cors'})
  .then(function(response) {
    return response.json();
  })
  .then(function(response) {
    temp.innerHTML = response.current.feelslike_f;
    cond.innerHTML = response.current.condition.text;
    img.src = response.current.condition.icon;

  });