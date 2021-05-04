window.onload = function () {
    let now = new Date()
    now.getTime()

    fetch('https://mars-weather-rems.netlify.app/rems.json')
        .then(res => res.json())
        .then(res => {
            //INFO DIA PRINCIPAL
            function fetchDataMain() {
                let homeInfoDOM = document.querySelector(".home-info")
                let homeInfo = `<div class="home-title"> Today</div>
                                <div class="home-temperature">${res.weather_report.magnitudes[0].max_temp} ºF</div>
                                <div class="fa fa-sun-o"></div>`
                homeInfoDOM.innerHTML = homeInfo;
                //INFO DIA TABLA
                let tableInfoDOM = document.querySelector(".table-container");
                let tableInfo = ` <div class="table minmax">
                <div></div>
                <div class="centered">Min</div>
                <div class="centered">Max</div>
            </div>
            <div class="table two-values">
                <div> <b>Ground Temperature </b></div>
                <div class="gt-min centered">${res.weather_report.magnitudes[0].min_gts_temp}</div>
                <div class="gt-max centered">${res.weather_report.magnitudes[0].max_gts_temp}</div>
    
                <div><b>Air Temperature</b></div>
                <div class="at-min centered">${res.weather_report.magnitudes[0].min_temp}</div>
                <div class="at-max centered">${res.weather_report.magnitudes[0].max_temp}</div>
            </div>
            <div class="table one-value">
    
                <div><b>Pressure</b></div>
                <div class="pressure centered">${res.weather_report.magnitudes[0].pressure}</div>
    
                <div> <b>Weather Status</b></div>
                <div class="weather-status centered">${res.weather_report.magnitudes[0].atmo_opacity}</div>
    
            </div>`
                tableInfoDOM.innerHTML = tableInfo;
            }
            fetchDataMain()
        });


//  //FETCH IMGS
 fetch('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY')
 .then(res => res.json())
 .then(res => {
     let imgBackground = document.querySelector(".img-background");
     let item = ` <img class="img" src="${res.photos[199].img_src} "> </img>                                
     `;
     // console.log(res.weather_report.magnitudes[0].pressure)
     // console.log(res.weather_report.magnitudes)
     imgBackground.innerHTML += item;
     // let photos
     // Crear / conectar bbdd 
}); 


// let db = new PouchDB('mars-photos');
function optionSavePhoto() {
    // Escuchar eventos de los botones 
    let btnSavePhoto = document.querySelector(".btn-save-photo");
    btnSavePhoto.addEventListener("click", savePhoto, false);

    // GUARDAR FOTOS!!
    function savePhoto(){
        let src = document.querySelector(".img").getAttribute('src');
        console.log(src);
           
            let doc = {
                // "_id": `${nextPhoto}+${src}`,
                "_id": `${Math.floor(Math.random() * 100000000)}`,   
                "photo": src        
              };            
            db.put(doc);     

            console.log("foto guardada!")
            console.log(db)
    }
 }
 optionSavePhoto()
}