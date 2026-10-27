# Dofra Software — Sitio web

Sitio institucional bilingüe (español/inglés) creado con React 18, TypeScript y Vite.

## Requisitos
- Node.js 20 o superior (Node 24 funciona)
- npm

## Ejecutar en VS Code
1. Descomprimí el ZIP y abrí la carpeta `dofra-software` en VS Code.
2. Abrí la terminal integrada (`Ctrl + ñ` en algunos teclados, o Terminal > New Terminal).
3. Ejecutá:

```bash
npm install
npm run dev
```

4. Abrí la dirección que muestre Vite (normalmente http://localhost:5173).

## Antes de publicar (IMPORTANTE)

1. **Contacto:** reemplazá `CONTACT_EMAIL_REPLACE_ME` en `src/App.tsx` por un email real. El botón usa `mailto:`; no existe backend ni se recopilan datos.
2. **Portfolio:** Equilibrium Estética se presenta como caso de estudio, pero su maqueta es ilustrativa. Reemplazala por capturas reales si querés mostrar el producto final.
3. **Textos:** revisá los servicios y afirmaciones antes de publicarlos.
4. **Marca:** verificá disponibilidad de Dofra Software en registros de marcas y dominios antes de invertir en branding.
5. **Dominio y redes:** no se configuraron porque aún no están confirmados.

## Compilar

```bash
npm run build
npm run preview
```

La salida queda en `dist/`.

## Subir al repositorio vacío

```bash
git clone https://github.com/victoriarecchia/dofra.git
```

Copiá el **contenido** de esta carpeta dentro de la carpeta clonada `dofra` (no copies `node_modules` ni `dist`). Luego, dentro de `dofra`:

```bash
git add .
git commit -m "feat: launch Dofra Software website"
git push origin main
```

Si tu rama por defecto no es `main`, usá el nombre correcto. Si GitHub solicita autenticación, iniciá sesión mediante VS Code o Git Credential Manager.

## Publicar gratis en Cloudflare Pages

- Conectá el repositorio GitHub.
- Framework: `Vite`.
- Build command: `npm run build`.
- Build output directory: `dist`.
- No necesitás variables de entorno para esta versión.

## Personalización

- Idiomas y textos: `src/App.tsx` (`content.es` / `content.en`).
- Colores, tipografía y responsive: `src/styles.css`.
- Favicon: `public/favicon.svg`.
- Metadatos y SEO básico: `index.html`.

## Notas

- El dashboard del hero y la maqueta de Equilibrium son **representaciones ilustrativas**, no datos reales.
- Los números que aparecen en el dashboard son decorativos, no métricas de Dofra.
- La fuente de Google Fonts requiere internet; el sitio usa una fuente de respaldo si no está disponible.
- No se usan cookies de analítica ni servicios externos de formularios.
# dofra
