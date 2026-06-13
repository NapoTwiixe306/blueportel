# 1 — Build
FROM node:20-alpine AS builder
WORKDIR /app
# Schéma Prisma copié avant l'install pour que le postinstall (prisma generate) trouve le schéma
COPY package*.json ./
COPY prisma ./prisma
RUN npm install
COPY . .
# Régénère le client Prisma puis build Next
RUN npx prisma generate && npm run build

# 2 — Run
FROM node:20-alpine
WORKDIR /app
COPY --from=builder /app ./
ENV NODE_ENV=production
EXPOSE 3000
# Applique le schéma à la base MySQL (idempotent) puis démarre le serveur
CMD ["sh", "-c", "npx prisma db push --skip-generate --accept-data-loss && npm start"]
