// fetch("https://secure.splitwise.com/api/v3.0/get_current_user", {
//   method: "POST",
//   headers: {
//     "content-Type": "application/json",
//   },
//   body: JSON.stringify({
//     name: "User 1",
//   }),
// })
//   .then((res) => {
//     return res.json();
//   })
//   .then((data) => console.log(data))
//   .catch((error) => console.log("ERROR"));
console.log("hi welcome");
let mybtn = document.getElementById("mybtn");
let container = document.getElementById("container");

function getdata() {
  url = "http://127.0.0.1:5500";

  console.log("helooo");
  fetch(
    url,
    (headers = {
      Authorization: `Bearer ${"XYL65Zb9BpbnIJmZ3Wx2rOfWwMIeyA46ILTxJtuo"}`,
    })
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
    });
}

// function postdata() {
//   url = "https://api.https://dummy.restapiexample.com/api/v1/create.com/users";
//   data = '{"name":"test","salary":"123","age":"23"}';

//   param = {
//     method: "POST",
//     headers: {
//       "content-Type": "application/json",
//     },
//     body: JSON.stringify(data),
//   };
//   fetch(url, param)
//     .then((response) => {
//       return response.json();
//     })
//     .then((data) => {
//       console.log(data);
//     });
// }
console.log("Before running getData");
getdata();
console.log("after running getdata");
