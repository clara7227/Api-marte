window.onload = function () {
    // function optionSavePhoto() {
    //     // Escuchar eventos de los botones 
    //     let btnSavePhoto = document.querySelector(".btn-save-photo");
    //     btnSavePhoto.addEventListener("click", savePhoto, false);

    //     // GUARDAR FOTOS!!
    //     function savePhoto() {
    //         let src = document.querySelector(".img").getAttribute('src');
    //         console.log(src);

    //         let doc = {
    //             // "_id": `${nextPhoto}+${src}`,
    //             "_id": Math.floor(Math.random() * 100000000),   
    //             "photo": src 
    //         };
    //         db.put(doc);

    //         console.log("foto guardada!")
    //         console.log(db)
    //         renderPhotos()
    //     }
    // }
    // optionSavePhoto()
    // RENDERIZAR FOTOS Y BORRAR!!
    function renderPhotos() {
        console.log("renderizando fotos...")
        let gallery = document.querySelector(".gallery-table");
        gallery.innerHTML = ""
        //Retrieving all the documents in PouchDB
        db.allDocs({ include_docs: true }, function (err, docs) {
            if (err) {
                return console.log(err);
            } else {
                photos = docs.rows;
                console.log(photos)
                photos.forEach(element => {
                    let photo = `
                                    <div class="img-container">
                                        <div class="id-photo">${element.doc._id}</div>
                                        <img class="mars-img" src="${element.doc.photo}"></img>
                                        <div class="btn-delete-img"> Delete </div>
                                        <div class="id-delete-photo">${element.doc._rev}<div>
                                    </div>
        `;
                    gallery.innerHTML += photo;
                    //let btnBorrar = document.querySelector('.btn-borrar');
                    // BORRAR FOTO
                });
                let btnsDelete = document.querySelectorAll('.btn-delete-img');
                btnsDelete.forEach(btnDelete => {
                    btnDelete.addEventListener('click', () => {                                                                        
                        deletePhoto(btnDelete)
                    });
                    //console.log(btnBorrar.parentNode.firstElementChild.innerText)
                })

                function deletePhoto(btnDelete) {
                    //console.log(btnDelete.parentNode.firstElementChild.innerText);
                    let photo_id=btnDelete.parentNode.firstElementChild.innerText;
                    let rev ; 
                    //Generando la clave para borrar el usuario // parece que no es necesario, viene por defecto
                    db.get(photo_id, function(err, doc) {
                        if (err) {
                           return console.log(err);
                        } else {
                           
                           rev = doc._rev;  
                           console.log(photo_id);
                            console.log(rev);
                           //Borrar el usuario introduciendo la clave
                           db.remove(photo_id, rev, function(err) {
                                if (err) {
                                   return console.log(err);
                                } else {
                                   console.log("Document deleted successfully");
                                   renderPhotos();
                                }
                             });
                                                    
                        }
                     });
                }
                // let btnDeleteAll = document.querySelector("#btn-delete-all-imgs");
                // btnDeleteAll.addEventListener("click", deleteAll, false);
                // function deleteAll() {
                //      console.log("hola")                     ////
                //      db.allDocs().then(function (result) {
                //         // Promise isn't supported by all browsers; you may want to use bluebird
                //         return Promise.all(result.rows.map(function (row) {
                //           return db.remove(row.id, row.value.rev);
                //         }));
                //       }).then(function () {
                //         // done!
                //       }).catch(function (err) {
                //         // error!
                //       });
                // }
                
            }
            
        });
    }
    renderPhotos()



    //    });  

}