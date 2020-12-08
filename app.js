// console.log("hello");

$(()=>{
  const $openBtn = $("#openModal"); // grabbing the "About the Weather App" button
  const $modal = $("#modal"); //grabbing the modal element
  const $closeBtn = $("#close"); // grabbing the "Close" button

  const openModal = () => { //adding an event handler to open the modal
    $modal.css("display", "block");
    }

  const closeModal = () => { //adding an event handler to close the modal
    $modal.css("display", "none");
    }


  $openBtn.on("click", openModal); // adding an event listener to the "About the Weather App" button
  $closeBtn.on("click", closeModal); // adding an event listener to close the modal

  setTimeout(openModal, 2000); //the modal will open in the amount of time set

});

// create the carousel to house the images(aside from 6 main ones)


$(()=>{
  $('form').on('submit', (event)=>{

        event.preventDefault();

        const userInput = $('input[type="text"]').val();

    $.ajax({
        url:'https://api.openweathermap.org/data/2.5/weather?q=' +userInput + '&appid=950dfad16d5b60de1c8af62bca1e3577&units=imperial'
        // url: `https://api.openweathermap.org/data/2.5/weather?q=name=${name.toUpperCase()}&main=${main.toUpperCase()}&weather=${weather.toUpperCase()}` +userInput +'&appid={950dfad16d5b60de1c8af62bca1e3577'

    }).then(
        (data)=>{
            console.log(data);
            $("#name").html(data.name);
            $("#temp").html(data.main.temp); // the main is an object
            $("#wind").html(data.wind.speed);// the wind is an object
            $("#conditions").html(data.weather[0].main); // the weather is an array.
            $("#description").html(data.weather[0].description); // the weather is an array.

        },
        ()=>{
            console.log('bad request');
        }
      );
    })
})




//add a carousel of say 10 images.
// <!-- change the temp to f instead of the current degree spec which is kelvin  -->
