# ERP para Centro de Estética 💅

Este proyecto es un **ERP (Enterprise Resource Planning)** para un Centro de Estética, desarrollado bajo metodología **Ágil (Scrum/Scrumban)** como parte de la materia **Ingeniería de Software**.
<hr>

## 🚀 Preparación del Entorno

### 🔑 Requisitos Previos
- Node.js LTS (>= 18.x recomendado).  
- npm (incluido con Node.js).  
- Git instalado.  
- VSCode con extensiones recomendadas.  

<hr>

### ⚙️ Pasos de Configuración Inicial

1️⃣ **Crear carpeta de trabajo**
 <br>
   `mkdir erp-centro-estetica`
    <br>
   `cd erp-centro-estetica`
   <br>
---
2️⃣ **Clonar el repositorio**
 <br>
  `git clone https://github.com/davidelcastillo/valenttine-centro-estetica.git`
   <br>
  `cd <nombre-del-repositorio>`
 <br>
---
3️⃣ **Instalar las dependencias**
   <br>
  `npm install`
   <br>
---
4️⃣ **Configurar variables de entorno**
   <br>
  Crear un archivo .env en la raíz del proyecto para luego establecer la conexión
   <br>
---
5️⃣ **Generar cliente de Prisma y aplicar migraciones**
   <br>
  `npx prisma generate`
   <br>
  `npx prisma migrate deploy`
   <br>
---
6️⃣ **Levantar el proyecto en modo desarrollo**
 <br>
  `npm run dev`
---





