function prueba() {
    console.log("esto es una pruebadd")
}
// PRUEBA PARA VER SI DETECTA SI LOS QUERYSELECTORS SON NULL O NO (PARA ACTIVAR FUNCIONES SEGUN LA PÁGINA)
// if (document.querySelector(".gallery-table") = null) {
//     console.log("estamos en la pagina de galeria")
// } else {
//     console.log("estamos en otra página")
//     console.log(document.querySelector(".gallery-table"))
// }

//FETCH DATOS

// let now = new Date()
// now.getTime()
// console.log(now)
// console.log("hola")
// fetch('https://mars-weather-rems.netlify.app/rems.json')
//     .then(res => res.json())
//     .then(res => {
//         //INFO DIA PRINCIPAL
//         function fetchDataMain() {
//             let homeInfoDOM = document.querySelector(".home-info")
//             let homeInfo = `<div class="home-title"> Today</div>
//                             <div class="home-temperature">${res.weather_report.magnitudes[0].max_temp} ºF</div>
//                             <div class="fa fa-sun-o"></div>`
//             homeInfoDOM.innerHTML = homeInfo;
//             //INFO DIA TABLA
//             let tableInfoDOM = document.querySelector(".table-container");
//             let tableInfo = ` <div class="table minmax">
//             <div></div>
//             <div class="centered">Min</div>
//             <div class="centered">Max</div>
//         </div>
//         <div class="table two-values">
//             <div> <b>Ground Temperature </b></div>
//             <div class="gt-min centered">${res.weather_report.magnitudes[0].min_gts_temp}</div>
//             <div class="gt-max centered">${res.weather_report.magnitudes[0].max_gts_temp}</div>

//             <div><b>Air Temperature</b></div>
//             <div class="at-min centered">${res.weather_report.magnitudes[0].min_temp}</div>
//             <div class="at-max centered">${res.weather_report.magnitudes[0].max_temp}</div>
//         </div>
//         <div class="table one-value">

//             <div><b>Pressure</b></div>
//             <div class="pressure centered">${res.weather_report.magnitudes[0].pressure}</div>

//             <div> <b>Weather Status</b></div>
//             <div class="weather-status centered">${res.weather_report.magnitudes[0].atmo_opacity}</div>

//         </div>`
//         }
        
//             tableInfoDOM.innerHTML = tableInfo;
//             function fetchDataWeek() {
//             //INFO SEMANA 
//             let infoWeekDOM = document.querySelector(".info-week-container");
//             let infoWeek = `<div class="day">
//         <div class="title-sun">Sun ${res.weather_report.sol}</div>
//         <div class="info-table-week">
//             <p> <b>Ground Temperature: </b> ${res.weather_report.magnitudes[0].max_gts_temp}</p> 
//             <p> <b>Weather Status: </b> ${res.weather_report.magnitudes[0].atmo_opacity}</p>
//         </div>
//         <div class="btn-more-info"> <p> More Info </p></div>
//     </div>  `
//             infoWeekDOM.innerHTML = infoWeek
//         }
//     });

   // FETCH IMGS ONLY
 fetch('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY')
 .then(res => res.json())
 .then(res => {
     let imgBackground = document.querySelector(".img-background");
     let item = ` <img class="img" src="${res.photos[19].img_src} "> </img>                                
     `;
     // console.log(res.weather_report.magnitudes[0].pressure)
     // console.log(res.weather_report.magnitudes)
     imgBackground.innerHTML += item;
     // let photos
     // Crear / conectar bbdd 
}); 
//GUARDADO
let photos;
let db = new PouchDB('mars-photos');

// FETCH IMGS & SAVE & DELETE
//    fetch('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY')
//        .then(res => res.json())
//        .then(res => {
//            let imgBackground = document.querySelector(".img-background");
//            let item = ` <img class="img" src="${res.photos[80].img_src} "> </img>                                
//            `;
//            // console.log(res.weather_report.magnitudes[0].pressure)
//            // console.log(res.weather_report.magnitudes)
//            imgBackground.innerHTML += item;
//            // let photos
//            // Crear / conectar bbdd 
//            let db = new PouchDB('mars-photos');
//         function optionSavePhoto() {
//            // Escuchar eventos de los botones 
//            let btnSavePhoto = document.querySelector(".btn-save-photo");
//            btnSavePhoto.addEventListener("click", savePhoto, false);

//            // GUARDAR FOTOS!!
//            function savePhoto(){
//                let src = document.querySelector(".img").getAttribute('src');
//                console.log(src);


//                    let nextPhoto = res.photos.length + 1;            //SI BORRO 1 ANTERIOR NO ME DEJA COGERLO PORQUE EL ULT USUARIO +1 es igual al nombre de usuario
//                    // Añadir registro a la BBDD   

//                console.log(src);
//                    // Añadir registro a la BBDD
//                    let doc = {
//                        "_id": `${nextPhoto}+${src}`,
//                        "type": `z`,
//                        "src": src,           
//                      };            
//                    db.put(doc);     
//                    console.log("foto guardada!")
//            }
//         }

//            //RENDERIZAR FOTOS Y BORRAR!!
//            function renderPhotos(){
//             let gallery = document.querySelector(".gallery-table");
//             gallery.innerHTML = ""
//             //Retrieving all the documents in PouchDB
//             db.allDocs({include_docs: true}, function(err, docs) {
//                 if (err) {
//                 return console.log(err);
//                 } else {                
//                     res.photos = docs.rows;
//                     res.photos.forEach(element => {
//                         let photo = `
//                                     <div class="img-container">
//                                         <div class="id-photo"> ${element.doc._id} </div>
//                                         <img class="mars-img" src="${element.doc.src}"></img>
//                                         <div class="btn-delete-img"> Delete </div>
//                                         <div class="delete-photo"> ${element.doc._rev}<div>
//                                     </div>
//         `;
//                         gallery.innerHTML += photo;
//                         //let btnBorrar = document.querySelector('.btn-borrar');
//                         let btnsDelete = document.querySelectorAll('.btn-delete-img');
//                         btnsDelete.forEach( btnDelete => {
//                             btnDelete.addEventListener('click',  () => {
//                                 console.log(btnDelete.parentNode.firstElementChild.innerText)
//                                 // deleteUser()
//                                 function deletePhoto(btnDelete) {

//                                     // console.log("hola")
//                                     // console.log(element.doc._id) // ERROR: me coge un usuario que no es!! - funcion deleteUser coge el ultimo usuario
//                                     //añadido, ya que está dentro del foreach
//                                     console.log(btnDelete.parentNode.firstChild.innerText);
//                                     //Generando la clave para borrar el usuario // parece que no es necesario, viene por defecto

//                                     //Borrar el usuario introduciendo la clave
//                                     db.remove((btnDelete.parentNode.firstElementChild.innerText), (btnDelete.parentNode.lastChild.innerText), function(err) { //1. id 2. rev
//                                         if (err) {
//                                            return console.log(err);
//                                         } else {
//                                            console.log("Document deleted successfully yeah");
//                                            renderPhotos()
//                                         }
//                                      });
//                                 }
//                                 deletePhoto(btnDelete)
//                             });
//                             //console.log(btnBorrar.parentNode.firstElementChild.innerText)

//                         })
//                         console.log(btnDelete)

//                     });

//                 }
//             });
//         }
//        });  

// // AQUI ACABA */








/** Función para pintar la lista de usuarios */
function renderUsers() {
    let lista = document.querySelector(".listaUsers");
    lista.innerHTML = "<h2>Usuarios registrados</h2>";
    //Retrieving all the documents in PouchDB
    db.allDocs({ include_docs: true }, function (err, docs) {
        if (err) {
            return console.log(err);
        } else {
            users = docs.rows;
            users.forEach(element => {
                let user = `
                                <article class="article">
                                    <div class="none"> ${element.doc._id}</div>
                                    <div><span>ID</span> <p>${element.doc._id} </p></div>
                                    <div><span>Nombre</span>${element.doc.name}</div>
                                    <div><span>Edad</span>${element.doc.age}</div>
                                    
                                    <span class="btn-borrar"> Borrar </span>
                                    <div class="none"> ${element.doc._rev}<div>
                                </article>`;
                lista.innerHTML += user;
                //let btnBorrar = document.querySelector('.btn-borrar');
                let btnsBorrar = document.querySelectorAll('.btn-borrar');
                btnsBorrar.forEach(btnBorrar => {
                    btnBorrar.addEventListener('click', () => {
                        console.log(btnBorrar.parentNode.firstElementChild.innerText)
                        // deleteUser()
                        function deleteUser(btnBorrar) {

                            // console.log("hola")
                            // console.log(element.doc._id) // ERROR: me coge un usuario que no es!! - funcion deleteUser coge el ultimo usuario
                            //añadido, ya que está dentro del foreach
                            console.log(btnBorrar.parentNode.firstChild.innerText);
                            //Generando la clave para borrar el usuario // parece que no es necesario, viene por defecto

                            //Borrar el usuario introduciendo la clave
                            db.remove((btnBorrar.parentNode.firstElementChild.innerText), (btnBorrar.parentNode.lastChild.innerText), function (err) { //1. id 2. rev
                                if (err) {
                                    return console.log(err);
                                } else {
                                    console.log("Document deleted successfully");
                                    renderUsers()
                                }
                            });
                        }
                        deleteUser(btnBorrar)
                    });
                    //console.log(btnBorrar.parentNode.firstElementChild.innerText)

                })
                console.log(btnsBorrar)


            });

        }
    });
}
