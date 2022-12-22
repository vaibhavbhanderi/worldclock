var headers = new Headers();
headers.append(
  "X-CSCAPI-KEY",
  "UXF2OHQ2WjBMT1Y5Q05MQzVhNE1sT3VJSk02Y3BaNzlRNHRVMHRjZA=="
);

var requestOptions = {
  method: "GET",
  headers: headers,
  redirect: "follow",
};

const getcontries = () => {
  fetch("https://api.countrystatecity.in/v1/countries", requestOptions)
    .then((response) => response.json())
    .then((result) => {
      //console.log(result);

      var row = "";
      row += "<option>---Select country----</option>";
      for (var i = 0; i < result.length; i++) {
        row +=
          "<option value=" +
          result[i].name +
          ">" +
          result[i].name +
          "</option>";
        // console.log(result[i].name);
      }
      document.getElementById("country").innerHTML = row;
    })
    .catch((error) => console.log("error", error));
};

// var ccode;
// const getstate = (val) => {
//   ccode = val;
//   fetch(
//     `https://api.countrystatecity.in/v1/countries/${val}/states`,
//     requestOptions
//   )
//     .then((response) => {
//       return response.json();
//     })
//     .then((result) => {
//       //  console.log(result);
//       var row = "";
//       // row += "<option>" + result[100].name + "</option>";
//       row += "<option>  ----select state---- </option>";
//       for (var i = 0; i < result.length; i++) {
//         // console.log(result[i]);
//         row +=
//           "<option value=" +
//           result[i].iso2 +
//           ">" +
//           result[i].name +
//           "</option>";
//       }
//       state.innerHTML = row;
//     })

//     .catch((error) => {
//       console.log("error", error);
//     });
// };

// var scode;
// const getcity = (value) => {
//   scode = value;
//   //alert(ccode + " " + scode);
//   fetch(
//     `https://api.countrystatecity.in/v1/countries/${ccode}/states/${scode}/cities`,
//     requestOptions
//   )
//     .then((response) => {
//       return response.json();
//     })
//     .then((result) => {
//       // console.log(result + "dt");
//       var row = "";
//       // row += "<option>" + result[100].name + "</option>";
//       row += "<option>  ----select city---- </option>";
//       for (var i = 0; i < result.length; i++) {
//         //console.log(result[i]);
//         row +=
//           "<option value=" +
//           result[i].name +
//           ">" +
//           result[i].name +
//           "</option>";
//       }
//       // console.log(row);
//       city.innerHTML = row;
//     })

//     .catch((error) => {
//       console.log("error", error);
//     });
// };
var ccode;
var kkk;
const timeanddate = (val) => {
  ccode = val;
  // alert(ccode);
  fetch(
    `https://timezone.abstractapi.com/v1/current_time/?api_key=1089efabd8e54844810c1883ba1b2b80&location=${ccode}`
  )
    .then((result) => {
      return result.json();
    })
    .then((data) => {
      mylatitude.innerHTML = data.latitude;
      mylongitude.innerHTML = data.longitude;
       kkk = (mydatetime.innerHTML = data.datetime);
      myrequested_location.innerHTML = data.requested_location;
      mytimezone_location.innerHTML = data.timezone_location;
      mytimezone_name.innerHTML = data.timezone_name;
    })
    .catch((err) => {
      console.log(err);
    });
};
console.log(kkk);
const hourHand = document.querySelector(".hourHand");
const minuteHand = document.querySelector(".minuteHand");
const secondHand = document.querySelector(".secondHand");
const time = document.querySelector(".time");
const clock = document.querySelector(".clock");
const audio = document.querySelector(".audio");

function setDate() {
  const today = new Date(kkk);
  // alert(today)
  const second = today.getSeconds();
  const secondDeg = (second / 60) * 360 + 360;
  secondHand.style.transform = `rotate(${secondDeg}deg)`;

  audio.play();

  const minute = today.getMinutes();
  const minuteDeg = (minute / 60) * 360;
  minuteHand.style.transform = `rotate(${minuteDeg}deg)`;

  const hour = today.getHours();
  const hourDeg = (hour / 12) * 360;
  hourHand.style.transform = `rotate(${hourDeg}deg)`;

  time.innerHTML =
    "<span>" +
    "<strong>" +
    hour +
    "</strong>" +
    " : " +
    minute +
    " : " +
    "<small>" +
    second +
    "</small>" +
    "</span>";
}

setInterval(setDate, 1000);
