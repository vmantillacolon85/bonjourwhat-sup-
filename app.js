// console.log("hello");

// $.ajax({
//     url:"api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=950dfad16d5b60de1c8af62bca1e3577"
// }).then(
//     (data)=>{
//         console.log(data);
//     },
//     ()=>{
//         console.log('bad request');
//     }
// );

//
// $.ajax({
//     url: "api.openweathermap.org/data/2.5/weather?q=London&appid={950dfad16d5b60de1c8af62bca1e3577}"
//
// }).then(
//     (data)=>{
//         console.log(data);
//     },
//     ()=>{
//         console.log('bad request');
//     }
// );
//
//
//
// $(()=>{
//
//   $('form').on('submit', (event)=>{
//
//         event.preventDefault();
//
//         const userInput = $('input[type="text"]').val();
//
//     $.ajax({
//         url:'https://api.openweathermap.org/data/2.5/weather?q=' +userInput + '&appid=950dfad16d5b60de1c8af62bca1e3577'
//     }).then(
//         (data)=>{
//             console.log(data);
//             $("#name").html(data.name);
//             $("#main").html(data.main); // the main is an object
//             $("#weather").html(data.weather); // the weather is an array.
//         },
//         ()=>{
//             console.log('bad request');
//         }
//       );
//     })
// })

$(()=>{
  const $openBtn = $("#openModal"); // grabbing the "About the Weather App" button
  const $modal = $("modal"); //grabbing the modal element
  const $closeBtn = $("#close"); // grabbing the "Close" button

  const openModal = () => { //adding an event handler to open the modal
    $modal.css("display", "block");
    }

  const closeModal = () => { //adding an event handler to close the modal
    $modal.css("display", "none");
    }


  $openBtn.on("click", openModal); // adding an event listener to the "About the Weather App" button
  $closeBtn.on("click", closeModal); // adding an event listener to close the modal

  setTimeout(openModal, 5000); //the modal will open in the amount of time set

});


$(()=>{

  $('form').on('submit', (event)=>{

        event.preventDefault();

        const userInput = $('input[type="text"]').val();

    $.ajax({
        url:'https://api.openweathermap.org/data/2.5/weather?q=' +userInput + '&appid=950dfad16d5b60de1c8af62bca1e3577'
        // url: `https://api.openweathermap.org/data/2.5/weather?q=name=${name.toUpperCase()}&main=${main.toUpperCase()}&weather=${weather.toUpperCase()}` +userInput +'&appid={950dfad16d5b60de1c8af62bca1e3577'

    }).then(
        (data)=>{
            console.log(data);
            $("#name").html(data.name);
            $("#temp").html(data.main.temp); // the temp is an object.
            $("#wind").html(data.wind.speed);// the wind is an object.
            $("#conditions").html(data.weather[0].description); // the weather is an array.
            $("#description").html(data.weather[0].main); // the weather is an array.

        },
        ()=>{
            console.log('bad request');
        }
      );
    })
})


//add a pop up modal
//add a carousel of say 10 images.
// change the temp from kelvin to fahrenheit






// homework I used to code along my app.js above. 
//  $(() => {
//   $(".button").on("click", (event) => {
//     event.preventDefault();
//     const userInput = $('input[type="text"]').val();
//     let borough= $(event.target).attr("id")
//
//     $.ajax({
//       url: `https://data.cityofnewyork.us/resource/fhrw-4uyv.json?borough=${borough.toUpperCase()}&agency=NYPD`, //filter here//
//       type: "GET", //need this to actually get the information/data
//       data: {
    //     $limit: userInput || 10 // limit to ten as default if no user input
    //   }
    // }).then (//convert the .done statement to .then promise.//
    //   (data) => {
    //     console.log(data);
    //     for (let i = 0; i < data.length; i++) {
    //       $("<li>").html("borough").appendTo("body")
    //       $("<li>").attr("class", "borough").html(data[i].borough).appendTo("body")
    //
    //       $("<li>").html("descriptor").appendTo("body")
    //       $("<li>").attr("class", "descriptor").html(data[i].descriptor).appendTo("body")
    //
    //       $("<li>").html("agency").appendTo("body")
    //       $("<li>").attr("class", "agency").html(data[i].agency).appendTo("body")
    //
    //       const $pdResponse = $("<h5>").attr("class", "resolution_description").html(data[i].resolution_description).appendTo("body")
    //
    //       const $button = $("<button>").attr("id", "button").text("WHAT DID THE POLICE DO?")// a clickable button wit the text.
    //
    //       $($button).on("click", (event) => {
    //           $pdResponse.toggle(); //will toggle the responses when clicked//
    //
    //       })
    //       $button.appendTo("body")//will append the button to the body of the page making it visible, clickable, etc///
    //
    //     }
    //   },
    //   (error) => {
    //     console.log(error);
    //   }
//     )
//   })
// })
