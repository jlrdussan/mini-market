# Etapa 1: Construcción de la aplicación React
FROM node:18-alpine as build

# Establecer el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiar los archivos package.json y package-lock.json
COPY package*.json ./

# Instalar las dependencias de la aplicación
RUN npm install

# Copiar todo el código de la aplicación
COPY . .

# Construir la aplicación React para producción
RUN npm run build

# Etapa 2: Servir los archivos construidos usando Nginx
FROM nginx:alpine

# Copiar el build generado por React a la carpeta predeterminada de Nginx
COPY --from=build /app/build /usr/share/nginx/html

# Exponer el puerto 80 para servir la aplicación
EXPOSE 80

# Iniciar Nginx
CMD ["nginx", "-g", "daemon off;"]
