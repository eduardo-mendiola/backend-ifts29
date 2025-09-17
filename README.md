# Tecnicatura Superior en Desarrollo de Software
## **1° Entrega de Proyecto Parcial<br>API RESTful CRUD <br>Caso 2: ClickWave**

**Materia:** Web Systems Development (Back End)  
**Profesor:** Emir Eliezer Garcia Ontiveros  
**Comisión:** A  

**Grupo 2:**  
- Mendiola, Eduardo E.  
- Integrante 2  
- Integrante 3  
- Integrante 4  
- Integrante 5  

**Fecha:** 17-09-2025  

---

## Índice

1. [Introducción del Caso](#introducción-del-caso)  
   1.1 [Propósito del Sistema](#11-propósito-del-sistema)  
   1.2 [Contexto Empresarial](#12-contexto-empresarial)  
       - 2.1 [Descripción General de ClickWave](#121-descripción-general-de-clickwave)  
       - 2.2 [Problemáticas Detectadas](#122-problemáticas-detectadas)  
   1.3 [Objetivos del Sistema](#13-objetivos-del-sistema)  
   1.4 [Arquitectura Técnica del Sistema](#14-arquitectura-técnica-del-sistema)  
2. [Asignación de Roles y Responsabilidades](#2-asignación-de-roles-y-responsabilidades)  
   - Eduardo E. Mendiola  
     - Rol Asignado: Arquitectura de Software y Desarrollo  
3. [Funcionamiento del Sistema](#3-funcionamiento-del-sistema)  
   3.1 [Funcionamiento General](#31-funcionamiento-general)  
   3.2 [Funcionalidades y Módulos Principales](#32-funcionalidades-y-módulos-principales)  
   3.3 [Interacción entre Módulos](#33-interacción-entre-módulos)  
4. [Uso de IAs](#4-uso-de-ias)  
   4.1 [Modelos](#41-modelos)  
   4.2 [Prompts](#42-prompts)  
5. [Bibliografía y Fuentes](#5-bibliografía-y-fuentes)

---

## Introducción del Caso

### 1.1 Propósito del Sistema
El presente documento describe el Sistema de Gestión de Proyectos desarrollado para ClickWave, una consultora de marketing digital, con el objetivo de optimizar la gestión interna de proyectos y mejorar la eficiencia operativa. La propuesta tecnológica busca transformar procesos informales en flujos de trabajo estandarizados, medibles y trazables, facilitando la centralización de información y la toma de decisiones basada en datos confiables.

### 1.2 Contexto Empresarial

#### 1.2.1 Descripción General de ClickWave
ClickWave fue fundada en 2020 con el propósito de brindar servicios de marketing digital a pequeñas y medianas empresas (PyMEs). Comenzó como un proyecto remoto de un equipo reducido y actualmente cuenta con 12 empleados organizados en distintas áreas: gestión de campañas publicitarias, diseño gráfico, análisis de datos y desarrollo de contenidos digitales.  
Su modalidad de trabajo es híbrida, combinando presencia en oficina y trabajo remoto, lo que permite atender clientes locales e internacionales, aunque mantiene desafíos internos asociados a la informalidad de procesos y la ausencia de roles claramente definidos.

#### 1.2.2 Problemáticas Detectadas
- **Falta de control formal de tiempos:** dificulta la justificación de costos y el cálculo de rentabilidad de los proyectos.  
- **Roles y responsabilidades poco definidos:** provoca desorganización, sobrecarga de trabajo y seguimiento ineficiente.  
- **Limitaciones en evaluación de desempeño y análisis financiero:** impide una evaluación objetiva del rendimiento y retrasa informes financieros precisos.

### 1.3 Objetivos del Sistema
- Formalizar la gestión de proyectos y tareas, centralizando la información y garantizando trazabilidad.  
- Registrar y controlar el tiempo dedicado a cada proyecto para analizar rentabilidad y justificar costos.  
- Generar reportes detallados y paneles de control gerenciales.  
- Integrar la gestión de proyectos con contabilidad y facturación, optimizando procesos financieros.

### 1.4 Arquitectura Técnica del Sistema
El sistema fue desarrollado con un stack **JavaScript**: Node.js como entorno de ejecución y Express.js como framework web. La arquitectura sigue el patrón **MVC** (Modelo-Vista-Controlador), permitiendo:
- Separación clara de responsabilidades entre presentación, lógica de negocio y acceso a datos.  
- Facilitar mantenibilidad, escalabilidad y comprensión del código.  
- Garantizar un flujo de información seguro y centralizado entre usuarios, proyectos y tareas.

---

## 2. Asignación de Roles y Responsabilidades

**Eduardo E. Mendiola**  
**Rol:** Arquitectura de Software y Desarrollo  

**Responsabilidades principales:**
- Diseño y definición de la arquitectura del sistema (controladores, modelos, entidades y rutas).  
- Desarrollo del Core del Framework (BaseController y BaseModel).  
- Gestión de persistencia de datos mediante una base de datos JSON (`JsonDatabase.js`).  
- Implementación de entidades y modelos específicos del dominio (clientes, roles, usuarios).  
- Configuración de rutas y middlewares de la API.  
- Creación y configuración del servidor principal (`server.js`) y variables de entorno (.env).  
- Creación del repositorio en GitHub y generación de documentación principal.  

---

## 3. Funcionamiento del Sistema

El sistema funciona como una **API RESTful** construida sobre Express.js, diseñada para gestionar proyectos, clientes y tiempo. Su punto de entrada es `server.js`, que se encarga de:

1. Cargar variables de entorno desde `.env`.  
2. Inicializar la base de datos JSON (`db.initialize()`).  
3. Importar y ejecutar la aplicación Express (`app.js`) en el puerto configurado.

### 3.1 Funcionamiento General
El sistema opera como un servidor web que procesa peticiones HTTP a través de capas (rutas, middlewares, controladores, modelos) e interactúa con una base de datos JSON. Las respuestas se envían en formato JSON.

### 3.2 Funcionalidades y Módulos Principales
- **Servidor Principal (`server.js`)**: arranque de la aplicación y carga de configuración.  
- **Variables de Entorno y dotenv**: gestión centralizada de configuración sensible.  
- **Servidor Express (`app.js`)**: configuración de middlewares y rutas principales.  
- **Base de Datos JSON (`JsonDatabase.js`, `db.js`)**: persistencia de datos en `db.json`.  
- **Generador de IDs (`IdGenerator.js`)**: creación de IDs únicos secuenciales.  
- **Entidades (`Entity.js`)**: definición de estructura y métodos de objetos de negocio.  
- **Modelos (`BaseModel.js`, modelos específicos)**: operaciones CRUD y lógica específica de cada entidad.  
- **Controladores (`BaseController.js`, controladores específicos)**: manejo de peticiones HTTP y respuestas.  
- **Rutas (`Routes.js`)**: definición de endpoints de la API y asociación con controladores.  
- **Middlewares (`validationMiddleware.js`)**: validación de datos de entrada antes de ejecutar controladores.

### 3.3 Interacción entre Módulos
1. `server.js` arranca el servidor y asegura que la base de datos y variables de entorno estén listas.  
2. Una petición HTTP llega al servidor Express.  
3. `app.js` dirige la petición a la ruta correspondiente.  
4. Middleware de validación verifica los datos de la petición.  
5. El controlador ejecuta la operación correspondiente en el modelo asociado.  
6. El modelo interactúa con la base de datos JSON y genera el resultado.  
7. El controlador construye la respuesta HTTP en formato JSON.

---

## 4. Uso de IAs

Durante el desarrollo se utilizaron herramientas de IA para mejorar la eficiencia:

### 4.1 Modelos
- ChatGPT (GPT-5 mini, OpenAI)  
- Claude AI (Claude Opus 4.1, Anthropic)  

### 4.2 Funciones principales
- Corrección de código en JavaScript y Node.js.  
- Explicaciones teóricas sobre arquitectura y metodologías.  
- Generación de documentación y redacción de secciones formales.

---

## 5. Bibliografía y Fuentes

- IFTS Nro. 29, Tecnicatura Superior en Desarrollo de Software a Distancia, Desarrollo de Sistemas Web (Back End) - 2° (2025). [Enlace](https://aulasvirtuales.bue.edu.ar/course/view.php?id=22553)  
- The Net Ninja. MERN Stack Crash Course Tutorial [Playlist]. YouTube. 2022. [Enlace](https://youtube.com/playlist?list=PL4cUxeGkcC9iJ_KkrkBZWZRHVwnzLIoUE&si=TEi7PZTW6xPRlSSk)  
- Martín Gesualdo. Emprendedor Full Stack | Aprende a desarrollar aplicaciones web [Playlist]. YouTube. 2023. [Enlace](https://youtube.com/playlist?list=PLAmcNbGd0fkNl-CleT_XxwGKDk1j00uUp&si=U8oSAdMzI47pPvVo)  
- Node.js Foundation. Node.js. Recuperado en septiembre de 2025. [Enlace](https://node.js.org/)  
- npm, Inc. Documentación de npm. Recuperado en septiembre de 2025. [Enlace](https://docs.npmjs.com/)  
- Express.js. Documentación oficial de Express.js. Recuperado en septiembre de 2025. [Enlace](https://expressjs.com/)
