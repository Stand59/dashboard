// console.log('hello')

// // Create a request variable and assign a new XMLHttpRequest object to it.
// var request = new XMLHttpRequest()

// // Open a new connection, using the GET request on the URL endpoint
// request.open('GET', 'https://edtechbooks.org/api.php?book=k12handbook&chapter=connectivism&action=analytics', true)

// request.onload = function () {
//   // Begin accessing JSON data here
// }

// // Send request
// request.send()

// // Begin accessing JSON data here
// var data = JSON.parse(this.response)

// console.log(data)

// function reqListener() {
//     console.log(this.responseText);
//   }
  
//   const req = new XMLHttpRequest();
//   req.addEventListener("load", reqListener);
//   req.open("GET", "https://edtechbooks.org/api.php?book=k12handbook&chapter=connectivism&action=analytics");
//   req.send();

  //https://stackoverflow.com/questions/20035101/why-does-my-javascript-code-receive-a-no-access-control-allow-origin-header-i
  //https://medium.com/@dtkatz/3-ways-to-fix-the-cors-error-and-how-access-control-allow-origin-works-d97d55946d9
  //https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Origin
  //https://vscode.one/comment-vscode/
  //https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest

  
//   src="/path/to/jquery.js"

//   var users = [];

//   $.ajax({
//  url : "https://edtechbooks.org/api.php?book=k12handbook&chapter=&action=analytics",
//  type : "get",
//  dataType: 'json',
//  success : function(response) {
//     users = response;
//  },
//   error: function() {
//   }
//  });


// inside function
// include logic for when chapter isn't pressent. Will be if you push book this will happen. they won't actually have to write the correct Option.
    // const req = new XMLHttpRequest();
    // req.addEventListener("load", reqListener);
    // req.open("GET", urlrequest);
    // req.send();


    // console.log (req);

//     function reqListener() {
//         console.log(this.responseText);
//       }
// }

// give name(login)
// Show books that they have access to 
// can select book for analytics
// can select chapter for even more specific




// https://stackoverflow.com/questions/43262121/trying-to-use-fetch-and-pass-in-mode-no-cors

// const flattenFoods = (foods) => {
//     return foods.reduce((res, food) => {
//       return res.concat(Array.isArray(food) ? flattenFoods(food) : food)
//     }, [])
//   }
//   console.log(flattenFoods(foods)) // ['🍔', '🍫', '🍨', '🍿', '🍵']

  
    // console.log(response); 

    // const outerArr = [];
    // fetch('https://edtechbooks.org/api.php?book=k12handbook&chapter=connectivism&action=analytics')
    //     .then((response) => response.json())
    //     .then((returnedData) => {
    //         returnedData.push();
    //     });

    // console.log(outerArr);

//     let response = fetch('https://edtechbooks.org/api.php?book=k12handbook&chapter=connectivism&action=analytics', {
//             mode: 'no-cors',
//             method: "get"
//  })

 //fetch('http://localhost:8080/example', {
    // mode: 'no-cors',
    // method: "post",
    // headers: {
    //      "Content-Type": "application/json"
    // },
    // body: JSON.stringify(ob)
// })

//  console.log(response);

//  var parseResp = JSON.parse(response);
//  console.log(parseResp);

