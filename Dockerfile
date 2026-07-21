# Golden Ridge Partners landing page — static site served by the
# zero-dependency Node server (server.js, with HTTP Range support for the
# scroll-scrubbed video). No build step, no npm install.
FROM node:20-alpine

USER node
WORKDIR /app

COPY --chown=node:node index.html server.js package.json ./
COPY --chown=node:node css ./css
COPY --chown=node:node js ./js
COPY --chown=node:node media ./media

ENV PORT=3000
EXPOSE 3000

HEALTHCHECK --interval=30s --timeout=3s --retries=3 \
  CMD wget -qO- http://127.0.0.1:${PORT}/ > /dev/null || exit 1

CMD ["node", "server.js"]
