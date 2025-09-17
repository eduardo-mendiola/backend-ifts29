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
   - [Eduardo E. Mendiola](#eduardo-e-mendiola)  
     - Rol Asignado: Arquitectura de Software y Desarrollo  
3. [Funcionamiento del Sistema](#3-funcionamiento-del-sistema)  
   3.1 [Funcionamiento General](#31-funcionamiento-general)  
   3.2 [Funcionalidades y Módulos Principales](#32-funcionalidades-y-módulos-principales)  
   3.3 [Interacción entre Módulos](#33-interacción-entre-módulos)  
4. [Capturas de Consultas](#4-capturas-de-consultas)  
   4.1 [Ejecución del Servidor](#41-ejecución-del-servidor)  
   4.2 [Ejemplo de Consulta - CRUD: Cliente](#42-ejemplo-de-consulta---crud-cliente)
5. [Uso de IAs](#5-uso-de-ias)  
   5.1 [Modelos](#51-modelos)  
   5.2 [Prompts](#52-prompts)  
6. [Bibliografía y Fuentes](#6-bibliografía-y-fuentes)

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

### **Eduardo E. Mendiola**  
**Rol:** Arquitectura de Software y Desarrollo  

**Responsabilidades y tareas:**

Las responsabilidades y las tareas realizadas en el proyecto abarcan todo el ciclo de vida del desarrollo, desde el diseño arquitectónico hasta la implementación de componentes.  

### Diseño y Definición de la Arquitectura del Sistema
- Establecimiento de una arquitectura modular y jerárquica para la aplicación, organizando el código en controladores, modelos, entidades y rutas, promoviendo la reutilización y el mantenimiento del código.

### Desarrollo del Core del Framework (Base Controllers y Models)
- **Implementación de BaseController:** Creación de la clase BaseController que encapsula las operaciones CRUD (Create, Read All, Read One by ID, Update, Patch, Delete) comunes para todas las entidades, gestionando las respuestas HTTP (status 201, 200, 404, 500, 204) y el manejo de errores centralizado.  
- **Implementación de BaseModel:** Creación de la BaseModel que proporciona una interfaz genérica para la interacción con la base de datos subyacente (JSON), incluyendo los métodos `create`, `findAll`, `findById`, `update`, `patch` y `delete`. Esta clase utiliza un generador de IDs y el objeto db configurado.

### Gestión de Persistencia de Datos (Base de Datos JSON)
- **Creación de JsonDatabase:** Desarrollo de un sistema de base de datos basado en archivos JSON, `JsonDatabase.js`, que maneja la carga y guardado de datos de forma asíncrona en un archivo `db.json`. Este módulo también gestiona las colecciones dentro del archivo JSON.  
- **Configuración de la Base de Datos:** Configuración de la instancia de `JsonDatabase` para ser utilizada en toda la aplicación a través de `db.js`.  
- **Población de Datos Iniciales:** Creación y población del archivo `db.json` con datos de ejemplo para diversas colecciones como `users`, `roles`, `clients`, `projects`, `tasks`, `time_entries`, `estimates`, `invoices`, `payments`, `expenses`, `teams`, `team_members` y `documents`, estableciendo una estructura de datos para la aplicación.  
- **Generación de IDs Únicos (IdGenerator):** Creación de la `IdGenerator` para generar IDs secuenciales y únicos para los nuevos elementos en cada colección de la base de datos.

### Implementación de Entidades Específicas del Dominio
- **Definición de Clases de Entidad:** Creación de las clases `ClientEntity`, `RoleEntity` y `UserEntity`, que modelan la estructura de datos y el comportamiento de los clientes, roles y usuarios, respectivamente, incluyendo métodos específicos como `getFullName()` o `getDisplayName()`.  
- **Desarrollo de Modelos Específicos:** Implementación de `ClientModel`, `RoleModel` y `UserModel`, extendiendo `BaseModel` y adaptando la lógica de creación de IDs y el manejo de timestamps (para usuarios).  
- **Desarrollo de Controladores Específicos:** Creación de `ClientController`, `RoleController` y `UserController`, extendiendo `BaseController` para manejar las operaciones específicas de cada entidad a través de la API.

### Configuración de Rutas de la API
- **Definición de Rutas Principales:** Configuración del archivo `app.js` para integrar las rutas de clientes, usuarios y roles en la API, definiendo los endpoints base `/api/client`, `/api/users` y `/api/roles`.  
- **Creación de Archivos de Rutas Específicos:** Implementación de `clientRoutes.js`, `userRoutes.js` y `roleRoutes.js` para definir los endpoints CRUD para cada entidad, mapeando las solicitudes HTTP a los métodos de los controladores correspondientes.  
- **Implementación de Middlewares:** Desarrollo de un middleware de validación, `validationMiddleware.js`, para asegurar la calidad de los datos de entrada, como `validateClientInput` para los clientes.

### Creación y Configuración del Servidor Principal (server.js)
- **Servidor Principal:** Creación del archivo `server.js`, el punto de arranque de la aplicación. Este archivo carga las variables de entorno, inicializa la base de datos y pone en marcha el servidor Express, escuchando las peticiones en un puerto específico.  
- **Configuración de Puertos y Variables de Entorno (.env):** Instalación de la dependencia `dotenv` desde npm para gestionar de manera centralizada la configuración de variables de entorno. A través del archivo `.env` se definió el puerto del servidor y queda disponible para futuras variables necesarias como por ejemplo, la conexión a MongoDB. Esto permite una configuración flexible y desacopla del código. El archivo `server.js` carga y utiliza estas variables mediante la dependencia `dotenv`, garantizando una mayor portabilidad y mantenibilidad de la aplicación.

### Control de Versiones y Documentación
- **Creación del Repositorio en GitHub:** Gestión de la inicialización y configuración del repositorio de control de versiones en GitHub para el proyecto, facilitando la colaboración y el seguimiento de los cambios.  
- **Capturas de consultas:** capturas de pantalla de las peticiones realizadas con la herramienta Postman en Visual Studio Code, a la API RESTful para demostrar su funcionamiento y validar las operaciones CRUD.
- **Generación de la documentación:** Elaboración de un documento en Google Docs como base principal de la documentación del proyecto, adaptado a los requisitos de entrega del trabajo práctico y posteriormente exportado en formato PDF. Este documento incluye la asignación de roles, las fuentes consultadas y el enlace al video explicativo del proyecto.  
- **Creación del archivo README:** Adaptación del contenido del documento principal al archivo `README.md`, que funcionará como documentación de referencia dentro del repositorio. Este archivo resume la información esencial sobre el funcionamiento, instalación y uso de la aplicación.


---

## 3. Funcionamiento del Sistema

La aplicación es una API RESTful construida sobre Express.js que permite gestionar un sistema de proyectos, clientes y tiempo. Su diseño modular facilita la escalabilidad y el mantenimiento.

### 3.1. Funcionamiento General
El sistema opera como un servidor web que escucha peticiones HTTP. Cuando recibe una petición, la procesa a través de una serie de capas (rutas, middlewares, controladores, modelos) hasta interactuar con una base de datos JSON para almacenar y recuperar información. Las respuestas se envían en formato JSON.  

El punto de entrada de la aplicación es **server.js**. Este archivo es responsable de:
- Cargar las variables de entorno del archivo `.env` utilizando la librería `dotenv`.  
  Por ejemplo, define el puerto en el que el servidor escuchará las peticiones, como `PORT = 4000`.
- Inicializar la base de datos (`db.initialize()`) antes de arrancar el servidor.
- Importar la instancia de la aplicación Express (`app.js`) y ponerla a escuchar en el puerto configurado, mostrando un mensaje en la consola:  
  `Servidor de ClickWave corriendo en http://localhost:${PORT}`

### 3.2. Funcionalidades y Módulos Principales

#### Servidor Principal (server.js)
- Es el punto de arranque de la aplicación.  
- Carga la configuración del entorno desde `.env` usando `dotenv`.  
- Inicializa la base de datos JSON antes de que la aplicación comience a recibir solicitudes.  
- Inicia la instancia de la aplicación Express (`app`) y la hace escuchar en el puerto especificado (por defecto 4000 si se carga desde `.env.txt`).  

#### Variables de Entorno (.env) y dotenv
- El archivo `.env` almacena variables de configuración que son sensibles o que pueden cambiar entre diferentes entornos (desarrollo, producción), como el número de `PORT` y accesos a bases de datos como MongoDB.  
- La librería `dotenv` se utiliza en `server.js` para cargar estas variables en `process.env`, haciéndolas accesibles en toda la aplicación. Esto permite una configuración flexible sin codificar valores directamente en el código fuente.  

#### Servidor Express (app.js)
- Es la aplicación principal de Express, importada por `server.js`.  
- Configura middlewares globales, como `express.json()`, para parsear cuerpos de solicitud JSON.  
- Monta las rutas específicas de cada entidad (clientes, usuarios, roles) bajo sus respectivos prefijos (`/api/clientRoutes`, `/api/users`, `/api/roles`).  
- Define una ruta de bienvenida y un manejador de errores 404 para rutas no encontradas.  

#### Base de Datos JSON (JsonDatabase.js, db.js)
- `JsonDatabase.js` gestiona la persistencia de datos. Carga y guarda la información en un archivo `db.json`.  
- Proporciona métodos para `getCollection(name)` y `setCollection(name, data)` para interactuar con las diferentes colecciones (e.g., "users", "clients") dentro del archivo JSON.  
- `db.js` es la instancia centralizada de `JsonDatabase` utilizada por los modelos.  

#### Generador de IDs (IdGenerator.js)
- Se encarga de crear IDs secuenciales únicos para cada nueva entrada en una colección específica, basándose en el último ID existente en esa colección.  

#### Entidades (Entity.js)
- Definen la estructura y los atributos de los objetos de negocio (e.g., `ClientEntity`, `RoleEntity`, `UserEntity`).  
- Pueden incluir métodos específicos de negocio (e.g., `getFullName()` en `ClientEntity` y `UserEntity`, `getDisplayName()` en `RoleEntity`).  

#### Modelos (Model.js, BaseModel.js)
- **BaseModel.js:** Proporciona las operaciones CRUD genéricas que interactúan directamente con `JsonDatabase`. Incluye métodos para `create`, `findAll`, `findById`, `update`, `patch` y `delete`. Utiliza el `IdGenerator` para la asignación de IDs.  
- **Modelos Específicos (e.g., ClientModel.js, RoleModel.js, UserModel.js):** Extienden `BaseModel` para gestionar datos de una entidad particular. Pueden sobrescribir o añadir lógica específica, como la inyección de IDs generados o la actualización de timestamps en los métodos `create` y `update`.  

#### Controladores (Controller.js, BaseController.js)
- **BaseController.js:** Contiene la lógica para manejar las peticiones HTTP y las respuestas, envolviendo las operaciones CRUD del `BaseModel` con manejo de errores y códigos de estado HTTP apropiados.  
- **Controladores Específicos (e.g., ClientController.js, RoleController.js, UserController.js):** Extienden `BaseController` para exponer las operaciones CRUD para cada entidad a través de la API.  

#### Rutas (Routes.js)
- Definen los endpoints de la API y asocian las peticiones HTTP (`POST`, `GET`, `PUT`, `PATCH`, `DELETE`) con los métodos correspondientes en los controladores.  
- Pueden integrar middlewares de validación antes de que la petición llegue al controlador, como `validateClientInput` en `clientRoutes.js`.  

#### Middlewares (validationMiddleware.js)
- Contienen funciones que se ejecutan antes de los controladores para realizar validaciones sobre los datos de entrada de las peticiones.  
- Por ejemplo, `validateClientInput` verifica la presencia de campos obligatorios para un cliente.  

### 3.3. Interacción entre Módulos
- El archivo `server.js` arranca el servidor Express y asegura que la base de datos esté inicializada y las variables de entorno cargadas.  
- Una petición HTTP (e.g., `POST /api/clients`) llega al servidor Express configurado en `app.js` (que es iniciado por `server.js`).  
- `app.js` dirige la petición a la ruta correspondiente (e.g., `clientRoutes.js`).  
- La ruta puede aplicar un middleware de validación (e.g., `validateClientInput`) para verificar los datos de la petición.  
- Si la validación es exitosa, la petición se pasa al método del controlador (e.g., `clientController.create`) asociado a esa ruta y verbo HTTP.  
- El método del controlador (que extiende `BaseController`) invoca la operación correspondiente en su modelo asociado (e.g., `ClientModel.create`).  
- El modelo (que extiende `BaseModel`) utiliza la instancia de `JsonDatabase` (`db`) para interactuar con el archivo `db.json`, realizando la operación de lectura o escritura de datos. Si es una operación de creación, el `IdGenerator` se utiliza para asignar un ID único.  
- El resultado de la operación se devuelve desde el modelo al controlador.  
- Finalmente, el controlador construye una respuesta HTTP (con un código de estado y datos en formato JSON) y la envía de vuelta al cliente.  


---

### 4\. Capturas de Consultas

Se incluyen capturas de pantalla de las peticiones realizadas con la herramienta Postman en Visual Studio Code, a la API RESTful para demostrar su funcionamiento y validar las operaciones CRUD.

Postman permite enviar solicitudes HTTP (`GET`, `POST`, `PUT`, `PATCH`, `DELETE`) y visualizar respuestas en formato JSON. En este caso, se documenta la gestión de clientes.

-----

### 4.1 Ejecución del Servidor

Antes de realizar cualquier consulta, se ejecuta el servidor de la API para que esté disponible para recibir solicitudes.

Comando ejecutado:

```bash
npm run dev
```

Resultado esperado:

```
Mensaje en consola indicando que el servidor está corriendo, por ejemplo:
Servidor de ClickWave corriendo en http://localhost:4000
```
![4.1 - Servidor corriendo](./assets/screenshots/4.1-server-running.png)

-----

### 4.2 Ejemplo de Consulta - CRUD: Cliente

#### 1\. Crear un cliente (`POST /api/clients`)

Solicitud enviada:

  - **URL**: `http://localhost:4000/api/clients`
  - **Método**: `POST`
  - **Cuerpo (JSON)**:

<!-- end list -->

```json
{
   "name": "MardelTech",
   "contact_name": "Luis Pérez",
   "email": "luis@mardeltech.com",
   "phone": "+54 223 123 4567",
   "address": "Mar del Plata, Argentina",
   "status": "active"
}
```

Respuesta recibida:

  - **Código HTTP**: `201`
  - **Cuerpo JSON**:

<!-- end list -->

```json
{
   "id": "7",
   "name": "MardelTech",
   "contact_name": "Luis Pérez",
   "email": "luis@mardeltech.com",
   "phone": "+54 223 123 4567",
   "address": "Mar del Plata, Argentina",
   "status": "active"
}
```

![4.2.1 - Crear cliente](./assets/screenshots/4.2.1-create-client.png)

-----

#### 2\. Obtener todos los clientes (`GET /api/clients`)

Solicitud enviada:

  - **URL**: `http://localhost:4000/api/clients`
  - **Método**: `GET`
  - **Cuerpo de la solicitud**: No aplica (`GET` no envía cuerpo)

Respuesta recibida:

  - **Código HTTP**: `200`
  - **Cuerpo JSON**:

<!-- end list -->

```json
[
   {
      "id": "1",
      "name": "TechCorp",
      "contact_name": "Laura Pérez",
      "email": "laura@techcorp.com",
      "phone": "+34 91 123 4567",
      "address": "Madrid, España",
      "status": "active"
   },
   {
      "id": "2",
      "name": "InnovaSoft",
      "contact_name": "José Ramírez",
      "email": "jose@innovasoft.com",
      "phone": "+52 55 9988 7766",
      "address": "CDMX, México",
      "status": "active"
   },
   {
      "id": "3",
      "name": "HealthPlus",
      "contact_name": "Andrea Torres",
      "email": "andrea@healthplus.com",
      "phone": "+54 11 6677 8899",
      "address": "Buenos Aires, Argentina",
      "status": "inactive"
   },
   {
      "id": "4",
      "name": "EduPro",
      "contact_name": "Sofía Morales",
      "email": "sofia@edupro.com",
      "phone": "+1 202 555 0147",
      "address": "Miami, USA",
      "status": "active"
   },
   {
      "id": "5",
      "name": "GreenEnergy",
      "contact_name": "Pablo Vega",
      "email": "pablo@greenenergy.com",
      "phone": "+49 30 1122 3344",
      "address": "Berlín, Alemania",
      "status": "active"
   },
   {
      "id": "6",
      "name": "IngeMar",
      "contact_name": "Martina Gonzales",
      "email": "martinagonzales@ingemar.com",
      "phone": "+54 9 223 636 588",
      "address": "Mar del Plata, Argentina",
      "status": "active"
   },
   {
      "id": "7",
      "name": "MardelTech",
      "contact_name": "Luis Pérez",
      "email": "luis@mardeltech.com",
      "phone": "+54 223 123 4567",
      "address": "Mar del Plata, Argentina",
      "status": "active"
   }
]
```
![4.2.2 - Obtener todos los clientes](./assets/screenshots/4.2.2-get-all-clients.png)
-----

#### 3\. Obtener un cliente por ID (`GET /api/clients/:id`)

Solicitud enviada:

  - **URL**: `http://localhost:4000/api/clients/7`
  - **Método**: `GET`
  - **Cuerpo de la solicitud**: No aplica (`GET` no envía cuerpo)

Respuesta recibida:

  - **Código HTTP**: `200`
  - **Cuerpo JSON**:

<!-- end list -->

```json
{
   "id": "7",
   "name": "MardelTech",
   "contact_name": "Luis Pérez",
   "email": "luis@mardeltech.com",
   "phone": "+54 223 123 4567",
   "address": "Mar del Plata, Argentina",
   "status": "active"
}
```

![4.2.3 - Obtener cliente por ID](./assets/screenshots/4.2.3-get-client-by-id.png)

-----

#### 4\. Actualizar datos de un cliente por ID (`PUT /api/clients/:id`)

Solicitud enviada:

  - **URL**: `http://localhost:4000/api/clients/7`
  - **Método**: `PUT`
  - **Cuerpo (JSON)**:

<!-- end list -->

```json
{
   "name": "MardelTech",
   "contact_name": "Luis Garcia",
   "email": "luisgarcia@mardeltech.com",
   "phone": "+54 223 123 4567",
   "address": "Mar del Plata, Argentina",
   "status": "inactive"
}
```

Respuesta recibida:

  - **Código HTTP**: `200`
  - **Cuerpo JSON**:

<!-- end list -->

```json
{
   "id": "7",
   "name": "MardelTech",
   "contact_name": "Luis Garcia",
   "email": "luisgarcia@mardeltech.com",
   "phone": "+54 223 123 4567",
   "address": "Mar del Plata, Argentina",
   "status": "inactive"
}
```
![4.2.4 - Actualizar cliente (PUT)](./assets/screenshots/4.2.4-put-client.png)
-----

#### 5\. Actualizar campos específicos de un cliente (`PATCH /api/clients/:id`)

Solicitud enviada:

  - **URL**: `http://localhost:4000/api/clients/7`
  - **Método**: `PATCH`
  - **Cuerpo (JSON)**:

<!-- end list -->

```json
{
   "phone":"+54 223 333 5899",
   "status": "active"
}
```

Respuesta recibida:

  - **Código HTTP**: `200`
  - **Cuerpo JSON**:

<!-- end list -->

```json
{
   "id": "7",
   "name": "MardelTech",
   "contact_name": "Luis Garcia",
   "email": "luisgarcia@mardeltech.com",
   "phone": "+54 223 333 5899",
   "address": "Mar del Plata, Argentina",
   "status": "active"
}
```
![4.2.5 - Actualizar cliente (PATCH)](./assets/screenshots/4.2.5-patch-client.png)

-----

#### 6\. Eliminar un cliente por ID (`DELETE /api/clients/:id`)

Solicitud enviada:

  - **URL**: `http://localhost:4000/api/clients/1`
  - **Método**: `DELETE`
  - **Cuerpo de la solicitud**: No aplica (`DELETE` no envía cuerpo)

Respuesta recibida:

  - **Código HTTP**: `204` (No Content)

![4.2.6 - Eliminar cliente](./assets/screenshots/4.2.6-delete-client.png)

---

## 5. Uso de IAs

### 5.1 Modelos  

Durante el desarrollo de este proyecto se emplearon herramientas de Inteligencia Artificial (IA) para mejorar la eficiencia en la codificación, la comprensión teórica y la elaboración de documentación. Específicamente, se utilizó el modelo **ChatGPT (GPT-5 mini, proporcionado por OpenAI)** en su versión en la nube, así como el modelo **Claude AI (Claude Opus 4.1, proporcionado por Anthropic)** en su versión en la nube.  

El uso de la IA incluyó las siguientes funciones principales:  
- **Corrección de código:** revisión de sintaxis, detección de errores lógicos y sugerencias de optimización en JavaScript, incluyendo Node.js, Express.js y dependencias como dotenv y nodemon.  
- **Explicaciones teóricas:** consultas sobre funcionamiento de conceptos de programación, arquitectura de software y metodologías de desarrollo.  
- **Generación de documentación:** asistencia en la redacción de secciones formales del proyecto, incluyendo guías, introducciones, análisis de caso.  

---

### 5.2 Prompts  

**AI:** ChatGPT
**Modelo:** GPT-5 Mini  
**Prompt:**  
Genera un JSON de ejemplo para un sistema de gestión de proyectos que incluya datos realistas para cada entidad. Las entidades son:
1. users: id(string), nombre, apellido, email, hash de contraseña, teléfono, role_id, salario mensual, estado, fecha de creación y actualización.
2. roles: id(string), nombre, descripción.
3. clients: id(string), nombre, persona de contacto, email, teléfono, dirección, estado.
4. projects: id(string), client_id, nombre, descripción, fecha de inicio y fin, presupuesto, tipo de facturación, estado, manager_id.
5. tasks: id(string), project_id, assigned_to (user_id), título, descripción, prioridad, estado, horas estimadas, fecha de entrega.
6. time_entries: id(string), user_id, task_id, project_id, fecha, horas trabajadas, descripción, facturable.
7. estimates: id(string), client_id, project_id, título, descripción, monto total, estado, fecha de validez.
8. invoices: id(string), client_id, estimate_id, número de factura, fecha de emisión, fecha de vencimiento, monto total, estado.
9. payments: id(string), invoice_id, monto, fecha de pago, método de pago, id de transacción.
10. expenses: id(string), project_id, user_id, descripción, monto, fecha, categoría.
11. teams: id(string), nombre, descripción.
12. team_members: id(string), team_id, user_id, rol dentro del equipo.
13. documents: id(string), project_id, uploaded_by (user_id), título, url del archivo, tipo de archivo, fecha de subida.

Asegúrate de:
- Usar nombres, emails y direcciones realistas.
- Incluir al menos 5-6 registros por entidad.
- Generar relaciones coherentes entre entidades (`foreign keys`).
- Diferenciar estados (`active`, `inactive`, `pending`, `in_progress`, etc.).
- Usar fechas consistentes en el año 2025.

**Respuesta:**  

[Link al archivo db.json](https://github.com/eduardo-mendiola/backend-ifts29/blob/main/src/data/db.json)

**AI y Modelo:**  
**Prompt:**  
**Respuesta:**  


---

## 6. Bibliografía y Fuentes

- IFTS Nro. 29, Tecnicatura Superior en Desarrollo de Software a Distancia, Desarrollo de Sistemas Web (Back End) - 2° (2025). [Enlace](https://aulasvirtuales.bue.edu.ar/course/view.php?id=22553)  
- The Net Ninja. MERN Stack Crash Course Tutorial [Playlist]. YouTube. 2022. [Enlace](https://youtube.com/playlist?list=PL4cUxeGkcC9iJ_KkrkBZWZRHVwnzLIoUE&si=TEi7PZTW6xPRlSSk)  
- Martín Gesualdo. Emprendedor Full Stack | Aprende a desarrollar aplicaciones web [Playlist]. YouTube. 2023. [Enlace](https://youtube.com/playlist?list=PLAmcNbGd0fkNl-CleT_XxwGKDk1j00uUp&si=U8oSAdMzI47pPvVo)  
- Node.js Foundation. Node.js. Recuperado en septiembre de 2025. [Enlace](https://node.js.org/)  
- npm, Inc. Documentación de npm. Recuperado en septiembre de 2025. [Enlace](https://docs.npmjs.com/)  
- Express.js. Documentación oficial de Express.js. Recuperado en septiembre de 2025. [Enlace](https://expressjs.com/)
