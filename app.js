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
            $("#main").html(data.main.temp); // the main is an object
            $("#weather").html(data.weather[0].description); // the weather is an array.
            $("#weather2").html(data.weather[0].main); // the weather is an array.

        },
        ()=>{
            console.log('bad request');
        }
      );
    })
})
