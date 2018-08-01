//function declaration
/*function saludar(name = 'vacio'){
    return `hola ${name}`;
}
let saludo;

saludo = saludar('wile');
console.log(saludo);

//function expresion
const sumar = function(a, b)
{
    return a + b;
    
}
console.log(sumar(2,4));

//funcion objeto
function miobj(objeto){
    objeto.make = 'toyota';
    objeto.model = 'sedan';
}

var mycar = {make:'honda', model:'Accord' ,year:1958};

miobj(mycar);
console.log(mycar.make+" "+mycar.model+" "+mycar.year);

//funxiones iife (de invocacion)
(function(tecnologia){
    console.log(`mi tarea de hoy ${tecnologia}`);
})('repasando funciones');


//metods de propiedad
const musica = {
    reproducir : function(id=1){
        console.log(`iniciando reproduccion cancion ${id}`);
    },
    pausar : function(){
        console.log('pausar musica');
    },
    saltar : function(){
        console.log('saltar funcion');
    },
    borrar : function(id){
        console.log(`borrar reproduccion ${id}`);
    }
}

musica.reproducir(30);
musica.saltar();
musica.borrar(22);


//recorrer funciones
const tareas = ['angular','react','mongo','phyton','ruby','net','android','ios'];

/*for(i=0;i<tareas.length;i++){
    console.log(tareas[i]);
}*/
/*
tareas.forEach(function(i,e){
    console.log(`${e} : ${i}`);
});

//map para arreglos

const carrito = [
    {id:1,producto:'libro',precio:30},
    {id:2,producto:'revista',precio:12},
    {id:3,producto:'papel',precio:22},
    {id:4,producto:'grapas',precio:12},
    {id:5,producto:'hojas',precio:2},
];

const nombreProducto  = carrito.map(function(carrito){
    return `el producto ${carrito.producto}  tiene el precio ${carrito.precio} S.`;
});

console.log(nombreProducto);

for(let auto in mycar){
    console.log(`auto ${auto} : ${mycar[auto]}` );
}
*/
/*
let elemento = document.getElementById('header');
elemento.style.background = 'rgba(0,0,0,0.4)';



//queryselector
const encabezado = document.querySelector('.bloque');
console.log(encabezado);
encabezado.style.color = '#ffffff';
encabezado.style.padding= '20px';

let navegador = document.querySelector("#principal");



const enlace = document.createElement('a');

enlace.className = 'enlace';
enlace.setAttribute('href','#');
enlace.textContent = "Nuevo enlace";
console.log(enlace);

navegador.appendChild(enlace);

const btnEvento = document.getElementById("btnEvento").addEventListener('click',cargarAPI);

function cargarAPI(){
    console.log('evento');
    const xhr = new XMLHttpRequest();
    xhr.open('GET','https://jsonplaceholder.typicode.com/posts',true);
    xhr.onload = function(){
        if(this.status === 200){
            const respuesta = JSON.parse(this.responseText);

            let contenido='';
            respuesta.forEach(function(post) {

                contenido += `
                    <h3> ${ post.title }</h3>
                    <p> ${ post.body }</p>`;
                
            });

            document.getElementById('listado').innerHTML = contenido;

        }
    }
    xhr.send();
}

const paises = ['peru','bolivia','paraguay','argentina','ecuador','colombia','venezuela'];

function nuevoPais(pais,callback){
    setTimeout(function(){
        paises.push(pais);
        callback();
    },2000);
}

function mostrarPaises(){
    setTimeout(function(){
        let html ='';
        paises.forEach(function(pais){
            html += `<li>${pais}</li>`;


        });
        document.getElementById("listado2").innerHTML = html;
    },1000);
}

nuevoPais('brasil',mostrarPaises);

mostrarPaises();


const esperando = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve('se ejecuto');
    },5000);
});

esperando.then(function(mensaje){
    console.log(mensaje);
});

const aplicadescuento = new Promise(function(resolve,reject){
    const descuento = true;
    if(descuento){
        resolve("aplica descuento");
    }else{
        reject("no aplica descuento");
    }
});

aplicadescuento.then(function(resultado){
    console.log(resultado);
}).catch(function(error){
    console.log(error);
});
*/
document.getElementById("txtBoton").addEventListener('click',cargarTXT);
document.getElementById("jsonBoton").addEventListener('click',cargarJSON);
document.getElementById("apiBoton").addEventListener('click',cargarAPI);


function cargarTXT()
{
    fetch('datos.txt')
        .then(function(res){
            return res.text();
        })
        .then(function(data){
            
            document.getElementById("resultados").innerHTML = data;
        })
        .catch(function(error)
        {
            console.log(error);
        });
       
}

function cargarJSON()
{
    fetch('empleados.json')
        .then(function(res){
            return res.json();
        })
        .then(function(data){
            let html = '';
            data.forEach(function(empleado){
                html += `<li>${empleado.nombre} - ${empleado.puesto}</li>`;
            });

            document.getElementById("resultados").innerHTML = html;
        })
}

function cargarAPI()
{
    fetch('https://picsum.photos/list')
        .then(function(response){
            return response.json();
        })
        .then(function(data){
            let html = '';
            data.forEach(function(img){
                html+= `<li> 
                        <a href="${img.post_url}">Ver Imagen</a> 
                        ${img.author}
                        </li>`;
                document.getElementById("resultados").innerHTML = html;
            });
        });
}