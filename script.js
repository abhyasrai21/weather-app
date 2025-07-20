// window.alert("hello world!!!")
 async function weather(){
    var city= document.querySelector('#search input ').value;
    console.log(city);
    res=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=98d32ba5048240cf36e32232c22e60f4`)
    console.log(res);
    data=await res.json();
    console.log(data);
    cityname.innerHTML=data.name;
    temp.innerHTML=Math.round(data.main.temp)+"°C";
    humidity.innerHTML=data.main.humidity+"%";
    wind.innerHTML=data.wind.speed+"km/h";



}
weather()