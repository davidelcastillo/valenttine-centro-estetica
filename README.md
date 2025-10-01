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

A. **Crear carpeta de trabajo**
 <br>
   mkdir erp-centro-estetica
   cd erp-centro-estetica
   <br>
B. **Clonar el repositorio**
 <br>
  git clone https://github.com/davidelcastillo/valenttine-centro-estetica.git
  cd <nombre-del-repositorio>
 <br>
C. **Instalar las dependencias**
   <br>
  npm install
   <br>
D. **Configurar variables de entorno**
   <br>
  Crear un archivo .env en la raíz del proyecto para luego establecer la conexión
   <br>
E. **Generar cliente de Prisma y aplicar migraciones**
   <br>
  npx prisma generate
  npx prisma migrate deploy
   <br>
F. **Levantar el proyecto en modo desarrollo**
 <br>
  npm run dev





