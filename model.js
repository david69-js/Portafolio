console.log('connect');
var modal = document.querySelector('.row1');
var data = [
    
    {
        title: 'Mi primer con Proyecto JavaScript y JQuery',
        img:'../img/1/1.jpg',
        img1:'../img/1/2.jpg',
        img2:'../img/1/3.jpg',
        img3:'../img/1/4.jpg',
        content:"Fue el primer proyecto que realice implementando JavaScript y jQuery. Utilizando jQuery agregue varios plugin como formularios, relojes, desplegables. La mayoría del texto e imágenes están generados desde JavaScript, solo estaba compuesto de css, pero no era responsivo.",
            
    },
    {
        title: 'Proyecto con Angular, MEAN stack',
        img:'../img/2/1.jpg',
        img1:'../img/2/2.jpg',
        img2:'../img/2/3.jpg',
        content:"Agregando cada uno de los conocimientos adquiridos en el curso, pude desarrollar un gestor de proyectos, utilizando express como framework de Nodejs, Angular como framework de JavaScript y Mongodb como base de datos, fue un proceso un poco largo.", 
 
    },
     {
        title: 'Postman para testear',
        img:'../img/3/1.jpg',
        img1:'../img/3/2.jpg',
        img2:'../img/3/3.jpg',
        content:"Se que no es un proyecto, pero aprendí a utilizarlo porque es una buena práctica antes de interactuar con una base de datos, se necesita probar cada una de las funcionalidades que se implementen del lado del controlador del Back-end.", 
    },
      {
        title: 'Chat con Socket.io y Nodejs',
        img:'../img/4/1.jpg',
        img1:'../img/4/2.jpg',
        img2:'../img/4/3.jpg',
        content:"Al empezar este pequeño proyecto me emocione por saber cómo funciona el chat en tiempo real, compartiendo la ip de mi dispositivo a un teléfono celular se pudo realizar una simulación de chat en tiempo real.", 

    },
    //asdasd
    {
        title: 'Docker con PHP',
        img:'../img/5/1.jpg',
        img1:'../img/5/2.jpg',
        img2:'../img/5/3.jpg',
        content:"Me recomendaron una maravillosa herramienta la cual es Docker, estuve investigando sobre el tema y me propuse como meta que antes de empezar a aprender PHP debía levantar un contenedor para PHP y MySQL, me pareció excelente para así evitar Xamp , Wamp o alguna otra herramienta para levantar el proyecto.", 

    },
    {
        title: 'Bloc de Notas',
        img:'../img/6/1.jpg',
        img1:'../img/6/2.jpg',
        img2:'../img/6/3.jpg',
        content:"Haciendo uso del LocalStorage desarrolle un pequeño bloc de notas con varias funcionalidades como editar, eliminar, agregar, cambiar de estado de terminado a sin terminar y una función que se encargue de buscar todas las coincidencias, y con un poco de Bootstrap y css para ejemplificar mi diseño previamente diseño en Photoshop.", 

    },
    {
        title: 'Calculadora PHP',
        img:'../img/7/1.jpg',
        img1:'../img/7/2.jpg',
        img2:'../img/7/3.jpg',
        content:"Siempre que aprendo lo básico de un nuevo lenguaje de programación creo una Calculadora, esta no fue la excepción, cree una simple pero lo suficientemente buena de con PHP.", 

    },
    {
        title: 'Maquetación totalmente responsive, creada a traves de bocetos creados en Photoshop',
        img:'../img/8/1.jpg',
        img1:'../img/8/2.jpg',
        img2:'../img/8/3.jpg',
        content:"Maquetación totalmente responsive, creada a través de bocetos creados en PhotoshopLa página ya esta subida a mi repositorio de GitHub, esta creada desde cero, es totalmente responsive, utilizando scss, Bootstrap y HTML",
        link: "https://davidtoj.000webhostapp.com/"
    },
    {
        title: 'Maquetación totalmente responsive',
        img:'../img/9/1.jpg',
        img1:'../img/9/2.jpg',
        img2:'../img/9/3.jpg',
        content:"Esta página web fue creada desde cero, utilizando HTML, Scss, Bootstrap, gulp  Nodejs. La realización de el mismo solamente fue para pulir mis habilidades en la maquetación web responsive.", 
        link: "https://david69-js.github.io/maqueta2/"
    },
    {
        title: 'Maquetación totalmente responsive',
        img:'../img/10/1.jpg',
        img1:'../img/10/2.jpg',
        img2:'../img/10/3.jpg',
        content:"La página ya esta subida a mi repositorio de GitHub, esta creada desde cero, es totalmente responsive, utilizando scss, Bootstrap y HTML, adaptable a cualquier tipo de dispositivos.",
        link: "https://david69-js.github.io/maqueta3/"
    },
    {
        title: 'Maquetación totalmente responsive, creada a traves de bocetos creados en Photoshop',
        img:'../img/11/1.jpg',
        img1:'../img/11/2.jpg',
        img2:'../img/11/3.jpg',
        content:"La página ya esta subida a mi repositorio de GitHub, esta creada desde cero, es totalmente responsive, utilizando scss, Bootstrap y HTML, adaptable a cualquier tipo de dispositivos.", 
        link: "https://david69-js.github.io/maqueta4/"
    },
    {
        title: 'Maquetación totalmente responsive, creada a traves de bocetos creados en Photoshop',
        img:'../img/12/1.jpg',
        img1:'../img/12/2.jpg',
        img2:'../img/12/3.jpg',
        content:"Esta página web fue creada desde cero, utilizando html, scss, bootstrap. La realizacion de el mismo solamente fue para pulir mis hablidades en la maquetación web responsive, adaptable a todo tipo de dispositivo", 
        link: "https://david69-js.github.io/maqueta5/"
    },
    {
        title: 'Maquetación totalmente responsive, con angular y jquery',
        img:'../img/13/1.jpg',
        img1:'../img/13/2.jpg',
        img2:'../img/13/3.jpg',
        content:"Esta página web fue creada desde cero, utilizando scss, Bootstrap, angular 10 y jQuery. El proceso de maquetación está basado en componentes, al igual que scss, para que así cada una de las partes que la componen sean creado de manera individual.", 
        link: "https://angular-nine-topaz.vercel.app/"
    },
    {
        title: 'Proyecto de php y MYSQl',
        img:'../img/14/1.jpg',
        img1:'../img/14/2.jpg',
        img2:'../img/14/3.jpg',
        img3:'../img/14/4.jpg',
        content:"Esta es una página creada con PHP y MYSQL y servido con Docker, se trata de un blog, en donde se pueden crear entradas, categorías, en el cual puedes crear tu propio usuario, y loguearte, la información viaja segura y también la con la contraseña cifrada", 
        link: "https://davidalv123.000webhostapp.com/index.php"
    }, 
    {
        title: 'Inioc {angular} y Laravel',
        img:'../img/15/1.jpg',
        img1:'../img/15/2.jpg',
        img2:'../img/15/3.jpg',
        img3:'../img/15/4.jpg',
        content:"Este es un crud que realice con ionic v3 el cual se maneja con angular, y pero con ciertas diferencias en cuanto a funciones, y la forma en la que se trabaja en las vistas, por otro lado Laravel que es un framework de php, el utilice como back-end y lo levante con docker. La app es un crud muy completo", 

    }, 
    {
        title: 'Prueba Quiz',
        img:'../img/16/1.jpg',
        img1:'../img/16/2.jpg',
        img2:'../img/16/3.jpg',
        img3:'../img/16/5.jpg',
        img4:'../img/16/4.jpg',
        content:"Esta es una prueba o test técnico que está basado en react js, no cree o no toque nada de backend, el api ya estaba creada, yo consumí el api con react js, valide las preguntas con datos guardados en el localStorage, el diseño es totalmente resposive.", 
        link: "https://react-quiz-web.herokuapp.com/"
    }, 
]

modal.innerHTML = '';
data.forEach((project, index)=>{

    modal.innerHTML += `<div class="col-sm-10 col-md-6">
     
    <div class="card darkborder">
         <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
            <div class="carousel-item active">
                <div class="contenedor spacing1">
                        <figure>
                            <img src="${project.img}" class="img-thumbnail"" alt="...">
                        <div class="capa">
                            <p>${project.title}</p>
                            <p>${project.content}</p>
                            ${project.link
                            ? `<a href="${project.link}" target="_blank"><button  class="btn btn-dark">Ver página </button></a>`
                            : ``
                            }
                        </div>
                        </figure> 
                    </div> 
                </div>
    
                <div class="carousel-item">
                    <div class="contenedor spacing1">
                        <figure>
                            <img src="${project.img1}" class="img-thumbnail"" alt="...">
                        <div class="capa">
                            <p>${project.title}</p>
                            <p>${project.content}</p>
                            ${project.link
                            ? `<a href="${project.link}" target="_blank"><button  class="btn btn-dark">Ver página </button></a>`
                            : ``
                            }
                        </div>
                        </figure> 
                    </div> 
                </div>
        
                ${project.img3 
                ?`
                <div class="carousel-item">
                    <div class="contenedor spacing1">
                        <figure>
                            <img src="${project.img3}" class="img-thumbnail"" alt="...">
                        <div class="capa">
                            <p>${project.title}</p>
                            <p>${project.content}</p>
                            ${project.link
                            ? `<a href="${project.link}" target="_blank"><button  class="btn btn-dark">Ver página </button></a>`
                            : ``
                            }
                        </div>
                        </figure> 
                    </div> 
                </div>     
                <div class="carousel-item">
                <div class="contenedor spacing1">
                    <figure>
                        <img src="${project.img2}" class="img-thumbnail"" alt="...">
                    <div class="capa">
                        <p>${project.title}</p>
                        <p>${project.content}</p>
                        ${project.link
                            ? `<a href="${project.link}" target="_blank"><button  class="btn btn-dark">Ver página </button></a>`
                            : ``
                            }
                    </div>
                    </figure> 
                </div> 
            </div>           
                `
                :`
                <div class="carousel-item">
                    <div class="contenedor spacing1">
                        <figure>
                            <img src="${project.img2}" class="img-thumbnail"" alt="...">
                        <div class="capa">
                            <p>${project.title}</p>
                            <p>${project.content}</p>
                            ${project.link
                            ? `<a href="${project.link}" target="_blank"><button  class="btn btn-dark">Ver página </button></a>`
                            : ``
                            }
                        </div>
                        </figure> 
                    </div> 
                </div>                
                `  }


                ${project.img4 
                    ?`
                    <div class="carousel-item">
                        <div class="contenedor spacing1">
                            <figure>
                                <img src="${project.img4}" class="img-thumbnail"" alt="...">
                            <div class="capa">
                                <p>${project.title}</p>
                                <p>${project.content}</p>
                                ${project.link
                            ? `<a href="${project.link}" target="_blank"><button  class="btn btn-dark">Ver página </button></a>`
                            : ``
                            }
                            </div>
                            </figure> 
                        </div> 
                    </div>     
                    <div class="carousel-item">
                    <div class="contenedor spacing1">
                        <figure>
                            <img src="${project.img3}" class="img-thumbnail"" alt="...">
                        <div class="capa">
                            <p>${project.title}</p>
                            <p>${project.content}</p>
                            ${project.link
                            ? `<a href="${project.link}" target="_blank"><button  class="btn btn-dark">Ver página </button></a>`
                            : ``
                            }
                        </div>
                        </figure> 
                    </div> 
                </div>           
                    `
                    :`
                    <div class="carousel-item">
                        <div class="contenedor spacing1">
                            <figure>
                                <img src="${project.img2}" class="img-thumbnail"" alt="...">
                            <div class="capa">
                                <p>${project.title}</p>
                                <p>${project.content}</p>
                                ${project.link
                            ? `<a href="${project.link}" target="_blank"><button  class="btn btn-dark">Ver página </button></a>`
                            : ``
                            }
                            </div>
                            </figure> 
                        </div> 
                    </div>                
                    `  }


            </div>
        </div>
    </div>
</div>
        `
        ;
    
});



