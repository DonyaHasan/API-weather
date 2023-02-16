let input=document.querySelector('.input');
let weather=document.getElementById('weather');



input.onkeyup=function(e){
    e.preventDefault();
    let value=e.target.value;
 let apiKey="7cf426f6334d42a890e144430232301";
 let  httpRequest= new XMLHttpRequest;
    httpRequest.open('GET',`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${value}`);
    httpRequest.send();

    httpRequest.addEventListener('readystatechange',function(){
        //let data=[];
     if(httpRequest.readyState==4 && httpRequest.status==200){
         let data=JSON.parse(httpRequest.response);
         //ti show data in weather section
         weather.innerHTML=`<h2> ${data.location.country} - ${data.location.localtime}</h2>
         <p>${data.current.temp_c} </p>`;
     }else{
        weather.innerHTML=' no available data';
     }
    });
};



