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

1. **Crear carpeta de trabajo**
   mkdir erp-centro-estetica
   cd erp-centro-estetica
   <br>
3. **Clonar el repositorio**
  git clone https://github.com/davidelcastillo/valenttine-centro-estetica.git
  cd <nombre-del-repositorio>
   <br>
4. **Instalar las dependencias**
  npm install
   <br>
5. **Configurar variables de entorno**
  Crear un archivo .env en la raíz del proyecto para luego establecer la conexión
   <br>
6.**Generar cliente de Prisma y aplicar migraciones**
  npx prisma generate
  npx prisma migrate deploy
   <br>
7.**Levantar el proyecto en modo desarrollo**
  npm run dev





