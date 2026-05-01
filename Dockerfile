# =========================
# Stage 1: Build
# =========================
FROM node:20 AS build

WORKDIR /app

# Copiar package.json y package-lock.json
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar todo el código
COPY . .

# Build con Vite
RUN npm run build

# =========================
# Stage 2: Serve con nginx
# =========================
FROM nginx:alpine

# Copiar build final desde stage anterior
COPY --from=build /app/build /usr/share/nginx/html

# Copiar configuración nginx personalizada si querés (opcional)
# COPY nginx.conf /etc/nginx/conf.d/default.conf

# Exponer puerto 80
EXPOSE 80

# Comando por defecto de nginx
CMD ["nginx", "-g", "daemon off;"]
