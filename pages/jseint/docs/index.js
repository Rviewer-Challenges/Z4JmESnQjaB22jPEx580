/* eslint-disable react/jsx-key */

import Link from 'next/link';
import React from 'react';
import ItemDoc from '../../../components/item-doc';

const documentacion = [
    {
        title: 'Primer Hola Mundo!',
        body: `Como es comun, para comenzar en cualquier lenguaje de programación, lo primero que intentamos realizar es un hola mundo, basicamente un mensaje que se muestre en resultado a lo codificado, en sete caso se utilizara nuestra primera funcion, que nos acompañara en todo el camino de aprendizaje, la funcion se denomina Escribir, que nos permite mostrar un mensaje en consola.`,
        code: `
        Escribir("Hola Mundo!")

        //Hola mundo
        `
    },
    {
        title: 'Escribir',
        body: 'Es una funcion que nos permite mostrar un mensaje en consola, ya sea de tipo cadena de texto u otro tipo de dato, como por ejemplo un numero, un booleano o un arreglo, el objetivo es depurar nuestro codigo, para ver que esta pasando en cada momento. Esta funcion es la que nos acompañara en todo el camino de aprendizaje, ya que nos permite ver el resultado de cada linea de codigo que escribimos.',
        code: `Escribir({texto: 'Hola mundo', color: 'red'});

        /*
            {
                texto: 'Hola mundo',
                color: 'red'
            }
        */
        `
    },
    {
        title: 'Variables',
        body: 'Una variable es un espacio en memoria que nos permite almacenar un valor, que puede ser de cualquier tipo, como por ejemplo un numero, un booleano, un arreglo, un objeto, etc. Para crear una variable en JSeint, debemos utilizar la palabra reservada var seguido del nombre de la variable, y finalmente el signo de igualdad, seguido del valor que queremos almacenar en la variable.',
        code: `
        var MiPrimeraVariable = 1;
        var booleano = false;
        var texto = 'Hola mundo';
        var arreglo = [1, 2, 3];
        var objeto = { nombre: 'Juan', edad: 20 };
        var vacio = nulo;
        `
    },
    {
        title: 'Para',
        body: 'Es una funcion que nos permite recoorer un arreglo, y ejecutar una serie de instrucciones por cada elemento del arreglo. Para utilizar esta funcion, debemos utilizar la palabra reservada para, seguido del nombre de la variable que utilizaremos para recorrer el arreglo, y finalmente el nombre del arreglo que queremos recorrer.',
        code: `
        var miArreglo = [1, 2, 3];
        Para elemento En miArreglo {
            Escribir(elemento);
        }
        // 1
        // 2
        // 3
        `
    },
    {
        title: 'Condicional',
        body: 'El condicional se utiliza para ejecutar una serie de instrucciones, dependiendo de una condicion, que puede ser verdadera o falsa. Para utilizar esta funcion, debemos utilizar la palabra reservada si, seguido de la condicion que queremos evaluar, y finalmente las instrucciones que queremos ejecutar.',
        code: `
        var numero = 1;
        Si numero == 1 {
            Escribir('El numero es 1');
        }
        Sino {
            Escribir('El numero no es 1');
        }
        // El numero es 1
        `
    }
];

const Docs = () => {
    const exampleCode = `
    Escribir('Hola mundo');

    //Hola mundo
`;
    const exampleCode2 = `
Escribir({texto: 'Hola mundo', color: 'red'});

/*
    {
        texto: 'Hola mundo',
        color: 'red'
    }
*/
`;
    const exampleCode3 = `
    var MiPrimeraVariable = 1;
    var booleano = false;
    var texto = 'Hola mundo';
    var arreglo = [1, 2, 3];
    var objeto = { nombre: 'Juan', edad: 20 };
    var vacio = nulo;
`;
    const exampleCode4 = `
    var miArreglo = [1, 2, 3];
    Para elemento En miArreglo {
        Escribir(elemento);
    }
    // 1
    // 2
    // 3
`;

    return (
        <div className="flex bg-secondary text-fourth ">
            <div>
                <ul className="p-10">
                    <li className="mt-5 cursor-pointer ">Documentacion </li>
                    {documentacion.map((item, index) => (
                        <li className="mt-5 cursor-pointer " key={index}>
                            {' '}
                            <Link href={'/jseint/docs#' + item.title}>
                                <a>{item.title}</a>
                            </Link>{' '}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="w-full">
                <h1 className="text-9xl font-serif text-center  pt-5">
                    DOC JSeint
                </h1>
                <p className=" text-justify text-xl p-10">
                    JSeint es un lenguaje de programación basado en JavaScript,
                    que tiene el objetivo de ser una herramienta para personas
                    que quieran comenzar a explorar el mundo de la programaciòn,
                    sin necesidad de tener conocimientos previos, ya que esta
                    creado en español, para que sea mas sencillo el
                    entendimiento de los conceptos. Si te recuerda PSeint es el
                    objetivo por el que creo esta herramienta, de manera que se
                    pueda aprender sin necesidad de intalaciones complicadas, y
                    que sea una herramienta que pueda ser usada en cualquier
                    navegador. En esta documentacion podras encontrar todo sobre
                    el lenguaje JSeint, desde la sintaxis hasta los ejemplos de
                    uso.
                </p>
                <hr />
                {documentacion.map((doc, index) => (
                    <React.Fragment key={index}>
                        <ItemDoc
                            key={index}
                            title={doc.title}
                            body={doc.body}
                            code={doc.code}
                        />
                        <hr className="mt-5 mb-5" />
                    </React.Fragment>
                ))}

                <h1 className="text-xl p-10 font-mono">
                    🔨 Seguiremos trabajando...
                </h1>
            </div>
        </div>
    );
};

export default Docs;
