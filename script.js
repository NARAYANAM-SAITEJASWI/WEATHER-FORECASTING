let city = document.getElementById("city");
 let type = document.getElementById("type");
 let temp = document.getElementById("temp");
 let image = document.getElementById("img");
 let humidity = document.getElementById("humidity");
 let pressure = document.getElementById("pressure");
 let input = document.getElementById("inp") ;
 let API_key = "f2011930257c177e48d8ee0dcf7966d9";

 const data = async function(search){
    let getData = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${API_key}&units=metric`);
    console.log(getData);
    let jsonData =await getData.json();
    console.log(jsonData);
    console.log(jsonData.name);

    if(jsonData.cod == 400){
        alert("Please Enter Location")
        image.src="images/error1.png";
        city.innerHTML="";
        temp.innerHTML="";
        type.innerHTML="";
        humidity.innerHTML="";
        pressure.innerHTML="";
    }
    
    if(jsonData.cod == 404){
        alert("Please Enter right Location")
        image.src="images/error2.png";
        city.innerHTML=search;
        temp.innerHTML="";
        type.innerHTML="";
        humidity.innerHTML="";
        pressure.innerHTML="";
    }
    city.innerHTML=search;
    temp.innerHTML=Math.floor(jsonData.main.temp)+"°C";
    type.innerHTML=jsonData.weather[0].main;
    humidity.innerHTML="humidity: "+Math.floor(jsonData.main.humidity)+"%";
    pressure.innerHTML="pressure: "+Math.floor(jsonData.main.pressure)+"Pa";

    if(type.innerHTML == "Clouds"){
        image.src="images/clouds.png"
    }else if(type.innerHTML == "Clear"){
        image.src="images/clears.png"
    }else if(type.innerHTML == "Rain"){
        image.src="images/rain.png"
    }else if(type.innerHTML == "Snow"){
        image.src="images/rain.png"
    }else if(type.innerHTML == "Haze"){
        image.src="images/haze.png"
    }else if(type.innerHTML == "Strom"){
        image.src="images/strom.png"
    }else if(type.innerHTML == "Smoke"){
        image.src="images/haze.png"
    }
    input.value=""
 }

 function myFun(){
    search=input.value;
    data(search)
 }