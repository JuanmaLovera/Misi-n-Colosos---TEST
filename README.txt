MISIÓN COLOSOS — CONEXIÓN AGOL TEST

ARCHIVOS
- index.html
- style.css
- app.js
- survey-logic.js
- assets/coti.png

URL CONFIGURABLE
La única URL que se cambia al pasar de TEST a producción está en survey-logic.js:

serviceUrl: "https://.../FeatureServer"

No agregues /0 al final. layerId ya está configurado como 0.

QUÉ HACE ESTA VERSIÓN
1. Obtiene GPS real del navegador.
2. Pide fotos reales desde cámara o galería.
3. Crea el punto y los atributos mediante addFeatures.
4. Obtiene el ObjectID.
5. Sube cada foto mediante addAttachment.
6. Recién después otorga XP y semillas.
7. Si algo falla, muestra el error y permite reintentar.

CONFIGURACIÓN NECESARIA EN AGOL
La capa TEST debe:
- estar compartida de forma que el juego pueda acceder;
- permitir agregar entidades;
- permitir agregar/actualizar adjuntos;
- tener adjuntos habilitados;
- permitir edición anónima si no se usa autenticación.

PRUEBA
Publicá estos archivos en GitHub Pages. No pruebes GPS ni cámara abriendo index.html con file://.
Abrí la URL HTTPS de GitHub Pages desde el celular.

IMPORTANTE
Para la prueba se usa acceso directo a la capa pública. Para producción se recomienda
interponer una Cloudflare Function para proteger la capa y validar los datos.
