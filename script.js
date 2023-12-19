





let res = fetch("https://restcountries.com/v2/all");


res.then((data)=>data.json()).then((data1)=>{




    
    

let li;
    let z = document.createElement("div");
    let z1 = document.createElement("h1");
    let z0 = document.createElement("div");

    z0.setAttribute("class","container");
z1.setAttribute("style","  font-family:Times New Roman;font-size:80px;margin-bottom:50px;margin-top:50px;");




   



    z1.setAttribute("class","text-center");
    z1.setAttribute("id","title");

    z1.innerHTML="REST Countries Project";

    z.setAttribute("class","container-fluid");
    z.setAttribute("style","width:1500px;display:flex;flex-wrap:wrap;justify-content:space-evenly;align-content:space-between;");

 let a = [];


 function set(a,b,c)
 {
a.setAttribute(b,c);
 }

 

    for(let i=0;i<data1.length;i++)
    {
       
      
       
        let y = document.createElement('div');
        y.setAttribute("class","row ");
        y.setAttribute("style","width:400px");

        let w = document.createElement("div");
        w.setAttribute("class","col-lg-4 col-sm-12");
    
 
    
        let div1 = document.createElement("div");
        div1.setAttribute("class","card");
        div1.setAttribute("style","width:28rem;height:45rem;background-color:whitesmoke;margin-bottom:40px;text-align:center;");

        let div2 = document.createElement("div");
        div2.setAttribute("class","card-body");
       

        let h5 = document.createElement("div");
        h5.setAttribute("style","font-size:30px;font-family:Times new Roman;padding:10px");
        h5.setAttribute("class","card-header");

        let img = document.createElement("img");
        img.setAttribute("class","card-img-top");
        img.setAttribute("src",data1[i].flags.png);
        img.setAttribute("style","width:425px;height:250px;margin:10px;");

        let h4 = document.createElement("div");
        h4.setAttribute("style","font-size:30px;font-family:Times new Roman;padding:10px");
        

    
        let h6 = document.createElement("div");
        h6.setAttribute("style","font-size:30px;font-family:Times new Roman;padding:10px");

        let h7 = document.createElement("div");
        h7.setAttribute("style","font-size:30px;font-family:Times new Roman;padding:10px");

        let h8 = document.createElement("div");
        h8.setAttribute("style","font-size:30px;font-family:Times new Roman;padding:10px");

        let h9 = document.createElement("button");
        h9.setAttribute("id",i);











        h9.setAttribute("class","btn btn-primary");
        h9.setAttribute("type","button");

        h9.setAttribute("data-btn-toggle","modal");
        h9.setAttribute("data-btn-target","#staticBackdrop");
        h9.setAttribute("style","font-size:25px;margin-top:30px");
       h9.addEventListener("click",weather);

      
      

       function weather()
       {
       li++;
   
let c = this.id;
      
       
let res2 = fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${data1[c].latlng[0]}&lon=${data1[c].latlng[1]}&appid=47250bb5dd4b6da37e16bf2b77460bcc`);

res2.then((data)=>data.json()).then((data3)=>{

 

  let p1;
  let p2;
  let p3;
  let p4;
  let p5;
  let p6;
  let p7;
  let p8;
  let p9;
  let p10;
  let p11 ;

   p1 = document.createElement("div");

  

   p1.setAttribute("class","modal fade");
   p1.setAttribute("id","staticBackdrop");
   p1.setAttribute("data-backdrop","static");
   p1.setAttribute("data-keyboard","false");
   p1.setAttribute("tableindex","-1");
   p1.setAttribute("aria-labelledby","staticBackdropLabel");
   p1.setAttribute("aria-hidden","true");
   p1.setAttribute("style","font-family:Times New Roman;font-size:30px;text-align:center;");



   p2 = document.createElement("div");

 
   p2.setAttribute("class","modal-dialog");
   

   p3 = document.createElement("div");

   p3.setAttribute("class","modal-content");

   p4 = document.createElement("div");

   p4.setAttribute("class","modal-header");

    
   p5 = document.createElement("div");

   p5.setAttribute("class","modal-header");


   p6 = document.createElement("h5");

   p6.setAttribute("class","modal-title");
   p6.setAttribute("id","staticBackdropLabel");
   p6.setAttribute("style","font-family:Times New Roman;font-size:40px;text-align:center;");

   p6.innerText="Weather Information";

   p7 = document.createElement("button");

   p7.setAttribute("type","button");
   p7.setAttribute("class","close");
   p7.setAttribute("data-dismiss","modal");
   p7.setAttribute("aria-label","Close");
   p7.setAttribute("style","size:30px;");



   p8 = document.createElement("span");

   p8.setAttribute("aria-hidden","true");


   p9 = document.createElement("div");

   p9.setAttribute("class","modal-body");
   p9.setAttribute("id",c);

p9.innerHTML=`  Temperature           : ${       data3.main.temp} <br><br>Humidity             : ${       data3.main.humidity} <br><br>Atmospheric Pressure : ${ data3.main.pressure} <br><br>Weather              : ${       data3.weather[0].description} <br><br>Wind                 : ${       data3.wind.speed} <br><br>`;


p10 = document.createElement("div");

p10.setAttribute("class","modal-footer");

p11 = document.createElement("button");

p11.setAttribute("type","button");
p11.setAttribute("class","btn btn-success");
p11.setAttribute("data-dismiss","modal");
p11.setAttribute("style","font-size:30px;");

p11.innerHTML="Close";


       
         p7.append(p8);
        p10.append(p11);
        p5.append(p6);
        p3.append(p5,p7,p9,p10);
        p2.append(p3);
        p1.append(p2);
    
      

  z.append(p1);
  
  
  $("#staticBackdrop").modal("show");
  




  let list = document.getElementById("staticBackdrop");
  list.remove();







                
}).catch((error)=>console.log(error));





       
       }



        h5.innerHTML = `${data1[i].name}`
        if(data1[i].capital)
        {
            h4.innerHTML=`Capital : ${data1[i].capital}`

        }
        else{
            h4.innerHTML=`Capital : None`

        }
        h6.innerHTML = `Region      :   ${data1[i].region}`
        h7.innerHTML = `Sub Region   :   ${data1[i].subregion}`
        h8.innerHTML = `Country Code   :   ${data1[i].alpha3Code}`
h9.innerText=`Click for Weather`
      



    div1.append(h5);
    
    div2.append(h4);
    div2.append(h6);
    
  
    div2.append(h8);
    div2.append(h9);
   
    div1.append(img);
      div1.append(div2);
      w.append(div1);
      y.append(w);
      z.append(y);
z0.append(z);





      
       document.body.append(z1,z);
       document.body.style.backgroundImage="url('talbackground1.jpg')";
    }
  
   

});





  


