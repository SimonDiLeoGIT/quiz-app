import { useState } from "react";
import "./../styles/Quiz.css"
import { Link } from "react-router-dom";
import { Nav } from './../components/Nav';
import html from "./../assets/html5.svg";
import css from "./../assets/css.svg";
import javascript from "./../assets/javascript.svg";
import accessibility from "./../assets/accessibility.svg";

const html_questions = 
          [ {icon: html},
            {question: "¿Qué significa HTML?", 
              options:[ {text: "Hyper Text Makeup Language", correct: false}, 
                        {text: "Hyper Text Markup Language", correct: true}, 
                        {text: "High Text Markup Language", correct: false}, 
                        {text: "Hyper Transfer Markup Language", correct: false}
                      ]
            },
            {question: "¿Cuál es el elemento principal para definir el título de un documento HTML?", 
              options:[ {text: "<head>", correct: false}, 
                        {text: "<title>", correct: true}, 
                        {text: "<h1>", correct: false}, 
                        {text: "<header>", correct: false}
                      ]
            },
            {question: "¿Cuál es el propósito del elemento <a> en HTML?", 
              options:[ {text: "Agregar una imagen", correct: false}, 
                        {text: "Crear una lista", correct: false}, 
                        {text: "Crear un enlace", correct: true}, 
                        {text: "Definir un párrafo", correct: false}
                      ]
            },
            {question: "¿Qué elemento se utiliza para crear una lista numerada en HTML?", 
              options:[ {text: "<ol>", correct: true}, 
                        {text: "<ul>", correct: false}, 
                        {text: "<li>", correct: false}, 
                        {text: "<dl>", correct: false}
                      ]
            },
            {question: "¿Cómo se comenta en HTML?", 
              options:[ {text: "<!-- Comentario -->", correct: true}, 
                        {text: "// Comentario", correct: false}, 
                        {text: "/* Comentario */", correct: false}, 
                        {text: "# Comentario", correct: false}
                      ]
            },
            {question: "¿Cuál es la versión más reciente de HTML?", 
              options:[ {text: "HTML4", correct: false}, 
                        {text: "HTML5", correct: true}, 
                        {text: "XHTML", correct: false}, 
                        {text: "HTMLX", correct: false}
                      ]
            },
            {question: "¿Cuál es el propósito del elemento <img> en HTML?", 
              options:[ {text: "Insertar un audio", correct: false}, 
                        {text: "Insertar un video", correct: false}, 
                        {text: "Insertar una imagen", correct: true}, 
                        {text: " Crear un formulario", correct: false}
                      ]
            },
            {question: "¿Cuál es la función del elemento <div> en HTML?", 
              options:[ {text: "Definir un enlace", correct: false}, 
                        {text: "Agrupar y contener otros elementos", correct: true}, 
                        {text: "Crear un título", correct: false}, 
                        {text: "Establecer un salto de línea", correct: false}
                      ]
            },
            {question: "¿Cómo se crea un salto de línea en HTML?", 
              options:[ {text: "<nl>", correct: false}, 
                        {text: "<linebreak>", correct: false}, 
                        {text: "<br>", correct: true}, 
                        {text: "<newline>", correct: false}
                      ]
            },
            {question: "¿Qué elemento se utiliza para crear un formulario en HTML?", 
              options:[ {text: "<form>", correct: true}, 
                        {text: "<input>", correct: false}, 
                        {text: "<button>", correct: false}, 
                        {text: "<select>", correct: false}
                      ]
            },
          ];

const css_questions = 
          [ {icon: css},
            {
              question: "¿Qué significa CSS?",
              options: [
                {text: "Counter Style Sheets", correct: false},
                {text: "Cascading Style Sheets", correct: true},
                {text: "Computer Style Sheets", correct: false},
                {text: "Colorful Style Sheets", correct: false}
              ]
            },
            {
              question: "¿Cuál es la propiedad CSS que se utiliza para cambiar el color del texto?",
              options: [
                {text: "text-color", correct: false},
                {text: "color", correct: true},
                {text: "font-color", correct: false},
                {text: "background-color", correct: false}
              ]
            },
            {
              question: "¿Cómo se selecciona un elemento con el id 'mi-elemento' en CSS?",
              options: [
                {text: "#mi-elemento", correct: true},
                {text: ".mi-elemento", correct: false},
                {text: "mi-elemento", correct: false},
                {text: "elemento#mi", correct: false}
              ]
            },
            {
              question: "¿Cuál es la propiedad CSS que se utiliza para establecer el tamaño de fuente?",
              options: [
                {text: "font-size", correct: true},
                {text: "text-size", correct: false},
                {text: "size", correct: false},
                {text: "font-height", correct: false}
              ]
            },
            {
              question: "¿Cómo se centra un elemento horizontalmente en CSS?",
              options: [
                {text: "text-align: center", correct: false},
                {text: "margin: auto", correct: true},
                {text: "align: center", correct: false},
                {text: "center: true", correct: false}
              ]
            },
            {
              question: "¿Cuál es la propiedad CSS que se utiliza para añadir sombras a los elementos?",
              options: [
                {text: "box-shadow", correct: true},
                {text: "element-shadow", correct: false},
                {text: "shadow", correct: false},
                {text: "text-shadow", correct: false}
              ]
            },
            {
              question: "¿Qué significa la sigla 'CSS'?",
              options: [
                {text: "Cascading Style Sheets", correct: true},
                {text: "Computer Style Sheets", correct: false},
                {text: "Color Style Sheets", correct: false},
                {text: "Creative Style Sheets", correct: false}
              ]
            },
            {
              question: "¿Cómo se aplica un estilo a todos los enlaces no visitados en CSS?",
              options: [
                {text: "a:link", correct: true},
                {text: "a:visited", correct: false},
                {text: "a:hover", correct: false},
                {text: "a:active", correct: false}
              ]
            },
            {
              question: "¿Cuál es la propiedad CSS que se utiliza para cambiar el grosor de la línea de borde?",
              options: [
                {text: "border-width", correct: true},
                {text: "line-width", correct: false},
                {text: "border-thickness", correct: false},
                {text: "border-size", correct: false}
              ]
            },
            {
              question: "¿Cómo se oculta un elemento en CSS?",
              options: [
                {text: "display: none", correct: true},
                {text: "visibility: hidden", correct: false},
                {text: "hidden: true", correct: false},
                {text: "opacity: 0", correct: false}
              ]
            }
        ]

const javascript_questions = 
        [ {icon: javascript},
          {
            question: "¿Qué es JavaScript?",
            options: [
              {text: "Un lenguaje de programación de servidor", correct: false},
              {text: "Un lenguaje de marcas", correct: false},
              {text: "Un lenguaje de programación del lado del cliente", correct: true},
              {text: "Un sistema operativo", correct: false}
            ]
          },
          {
            question: "¿Cuál es la palabra clave para declarar una variable en JavaScript?",
            options: [
              {text: "var", correct: true},
              {text: "variable", correct: false},
              {text: "v", correct: false},
              {text: "let", correct: false}
            ]
          },
          {
            question: "¿Cómo se comenta en JavaScript?",
            options: [
              {text: "// Comentario", correct: true},
              {text: "/* Comentario */", correct: false},
              {text: "# Comentario", correct: false},
              {text: "-- Comentario", correct: false}
            ]
          },
          {
            question: "¿Cuál de las siguientes NO es una estructura de control en JavaScript?",
            options: [
              {text: "if-else", correct: false},
              {text: "for-each", correct: true},
              {text: "switch", correct: false},
              {text: "while", correct: false}
            ]
          },
          {
            question: "¿Qué método se utiliza para agregar un elemento al final de un array en JavaScript?",
            options: [
              {text: "append()", correct: false},
              {text: "push()", correct: true},
              {text: "addToEnd()", correct: false},
              {text: "insertLast()", correct: false}
            ]
          },
          {
            question: "¿Cuál es la función de `console.log()` en JavaScript?",
            options: [
              {text: "Mostrar un mensaje de alerta", correct: false},
              {text: "Imprimir un mensaje en la consola", correct: true},
              {text: "Mostrar un mensaje de confirmación", correct: false},
              {text: "Mostrar un mensaje de error", correct: false}
            ]
          },
          {
            question: "¿Qué hace el operador `===` en JavaScript?",
            options: [
              {text: "Compara el valor y el tipo de dos elementos", correct: true},
              {text: "Compara solo el valor de dos elementos", correct: false},
              {text: "Compara solo el tipo de dos elementos", correct: false},
              {text: "Es un operador de asignación", correct: false}
            ]
          },
          {
            question: "¿Cómo se declara una función en JavaScript?",
            options: [
              {text: "function myFunction()", correct: true},
              {text: "myFunction = function()", correct: false},
              {text: "def myFunction()", correct: false},
              {text: "myFunction()", correct: false}
            ]
          },
          {
            question: "¿Qué método se utiliza para seleccionar un elemento por su ID en JavaScript?",
            options: [
              {text: "selectById()", correct: false},
              {text: "document.getElementByTagId()", correct: false},
              {text: "document.getElementById()", correct: true},
              {text: "getElementById()", correct: false}
            ]
          },
          {
            question: "¿Cuál es el propósito del objeto `JSON` en JavaScript?",
            options: [
              {text: "Manipular fechas y horas", correct: false},
              {text: "Gestionar cookies", correct: false},
              {text: "Interactuar con el servidor", correct: false},
              {text: "Manejar datos en formato de objeto", correct: true}
            ]
          }
        ]

const accessibility_questions =
        [ {icon: accessibility},
          {
            question: "¿Qué significa WCAG?",
            options: [
              {text: "Web Content Accessibility Guidelines", correct: true},
              {text: "Worldwide Consortium for Accessible Graphics", correct: false},
              {text: "Wireless Communication and Accessibility Group", correct: false},
              {text: "Web Compatibility Analysis Group", correct: false}
            ]
          },
          {
            question: "¿Cuál es el propósito de ARIA en accesibilidad web?",
            options: [
              {text: "Un formato de imagen accesible", correct: false},
              {text: "Una tecnología de lectura de pantalla", correct: false},
              {text: "Un conjunto de atributos para mejorar la accesibilidad", correct: true},
              {text: "Una organización que promueve la accesibilidad", correct: false}
            ]
          },
          {
            question: "¿Qué significa alt en una etiqueta de imagen?",
            options: [
              {text: "Altura de la imagen", correct: false},
              {text: "Alternativa de texto", correct: true},
              {text: "Altitud de la imagen", correct: false},
              {text: "Altibajos de la imagen", correct: false}
            ]
          },
          {
            question: "¿Cuál es una práctica recomendada para el contraste de color en la accesibilidad?",
            options: [
              {text: "Colores brillantes y llamativos", correct: false},
              {text: "Contraste bajo para un diseño moderno", correct: false},
              {text: "Relación de contraste suficiente entre texto y fondo", correct: true},
              {text: "Sin importar el contraste", correct: false}
            ]
          },
          {
            question: "¿Qué es un lector de pantalla?",
            options: [
              {text: "Un dispositivo para visualizar imágenes en 3D", correct: false},
              {text: "Un programa que convierte texto en voz", correct: true},
              {text: "Un escáner de documentos", correct: false},
              {text: "Un hardware para leer tarjetas de memoria", correct: false}
            ]
          },
          {
            question: "¿Qué etiqueta se utiliza para asociar un formulario con su etiqueta de texto en HTML?",
            options: [
              {text: "<label>", correct: true},
              {text: "<text>", correct: false},
              {text: "<input>", correct: false},
              {text: "<form>", correct: false}
            ]
          },
          {
            question: "¿Qué es la estructura de un documento HTML semánticamente correcto?",
            options: [
              {text: "Utilizar solo divs y spans", correct: false},
              {text: "Usar las etiquetas HTML adecuadas para el significado del contenido", correct: true},
              {text: "Ignorar las etiquetas semánticas", correct: false},
              {text: "Solo utilizar tablas para diseño", correct: false}
            ]
          },
          {
            question: "¿Cuál es un beneficio de las descripciones de texto en las imágenes para la accesibilidad?",
            options: [
              {text: "Hacer que las imágenes se vean más bonitas", correct: false},
              {text: "Ayudar a los motores de búsqueda a entender el contenido", correct: false},
              {text: "Permitir que los lectores de pantalla describan la imagen", correct: true},
              {text: "Reducir el tamaño de las imágenes", correct: false}
            ]
          },
          {
            question: "¿Qué significa focus order en accesibilidad web?",
            options: [
              {text: "El orden en que se aplican estilos a los elementos", correct: false},
              {text: "El orden en que los elementos obtienen el foco de navegación", correct: true},
              {text: "La forma en que se establece el contraste en una página", correct: false},
              {text: "La velocidad a la que cambian las imágenes", correct: false}
            ]
          },
          {
            question: "¿Cuál es un principio fundamental de la accesibilidad web?",
            options: [
              {text: "Exclusividad", correct: false},
              {text: "Universalidad", correct: true},
              {text: "Ocultamiento", correct: false},
              {text: "Complejidad", correct: false}
            ]
          }
        ]


export const Quiz = (props) => {

  const [num, inc_num] = useState(1);
  const [progress, inc_progress] = useState(0);
  const [selected, changeSelected] = useState(null);
  const [score, countScore] = useState(0);
  const [clicked, setClicked] = useState(true);

  function setAnswers(currentQuest){
    let i = -1;
    let letters = ["A", "B", "C", "D"];
    return currentQuest.options.map((op) => {
      i++;
      return <button className={op === selected ? (clicked ? "op-selected animate-button " : "op-selected ") + " option" : (clicked ? "animate-button " : " ") + " option"} onClick={() => {changeSelected(op); setClicked(false);}}> <div className="option-letter"> <p> {letters[i]} </p> </div> <div className="option-text"> {op.text} </div> </button>
    })
  }

  function answer(){
    if(selected !== null){
      if(selected.correct){
        console.log("Correct");
        countScore(score + 1);
      } else {
        console.log("Incorrect");
      }
      if(num < 10) inc_num(num + 1);
      inc_progress(progress + 1);
      changeSelected(null);
      setClicked(true);
    }
  }

  function questions() {
    let currentQuest;
    let category;
    if(props.category === "HTML"){
      currentQuest = html_questions[num];
      category = html_questions;
    } else if(props.category === "CSS"){
      currentQuest = css_questions[num];
      category = css_questions;
    } else if(props.category === "Javascript"){
      currentQuest = javascript_questions[num];
      category = javascript_questions;
    } else {
      currentQuest = accessibility_questions[num];
      category = accessibility_questions;
    }
    
    return  <section className="game">
              <Nav />
              <div className="game-container">
                  <section className="title-container">
                    <h1 className="title"> <img src={category[0].icon} alt="HTML"/> {props.category} </h1>
                    <p> Question {num} of 10 </p>
                    <h2> {currentQuest.question} </h2>
                    <div className="progress-container">
                      <div className="progress_bar" style={{width: `${progress*10}%`}}></div>
                    </div>
                  </section>
                  <section className="options">
                      {setAnswers(currentQuest)}
                      <button className="submit" onClick={() => {answer()}}> Submit Answer </button>
                  </section>
                  <section className={progress < 10 ? "score" : "score visible-score"}>
                    <div className="score-container">
                      <h1 className="title score-title"> Your Score is {score} </h1>
                      <Link to={"/"}>
                        <button className="submit score-submit"> Play Again </button>
                      </Link>
                    </div>
                  </section>
              </div>
            </section>
  }
  return (
      questions()
  );
}