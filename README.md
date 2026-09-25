# RCM CodeDev

Catálogo comercial con React, TypeScript, Vite, Lucide Icons y Framer Motion. Sin backend ni base de datos.

## Ejecutar

Requiere Node.js 22 y npm.

```bash
npm install
npm run dev
```

```bash
npm run build
npm run preview
```

## Navegación

Ocho pestañas: Inicio, Servicios, Invitaciones, Soluciones digitales, NFC / QR, Desarrollo, Proyectos y Contacto. Solo una se muestra a la vez. El hash permite enlaces directos, recarga y navegación Atrás/Adelante. Las flechas izquierda/derecha y Home/End permiten cambiar pestañas con teclado. En móvil están dentro del menú.

## Editar contenido

| Archivo | Contenido |
|---|---|
| `src/data/services.ts` | Los 13 servicios y sus características |
| `src/data/invitationPackages.ts` | Paquetes y precios en MXN; `null` muestra Solicitar cotización |
| `src/data/portfolio.ts` | Proyectos de demostración; sustituir imágenes, datos y URL por trabajos reales |
| `src/data/navigation.ts` | Nombres y orden de las pestañas |
| `src/config/contact.ts` | Número internacional de WhatsApp, solo dígitos, y mensaje general |
| `src/config/social.ts` | Facebook, Instagram y correo oficiales |

WhatsApp está configurado con el número 4621472372 de México (+52). Los botones de cotización abren `wa.me` con mensajes específicos por servicio o paquete. Los perfiles sociales pendientes se configuran en `src/config/social.ts`.

Los códigos QR, invitaciones y ejemplos del portafolio son demostraciones. La simulación NFC es una interacción visual, no lectura de hardware ni validación real de invitados. Los servicios de software con servidor se anuncian en el catálogo, pero no se implementa backend en este proyecto.

## Desplegar

Netlify: importar esta carpeta/repository y usar `npm run build`, directorio de publicación `dist`. Incluye `netlify.toml`.

Vercel: importar el proyecto como Vite. Incluye `vercel.json`. Las pestañas usan hash, por lo que no requieren reglas de rutas del servidor.

## Verificación realizada

- TypeScript estricto, sin errores ni imports sin utilizar.
- Compilación alternativa mediante el ejecutable de esbuild y vista previa local funcionando.
- Revisados en navegador: cambio de pestañas, menú móvil a 390 px, 13 tarjetas de servicios, detalles, carrusel de invitaciones, filtro de proyectos y cierre de detalles al pasar a Contacto.
- Dependencias instaladas con `npm install --ignore-scripts`; auditoría reportó cero vulnerabilidades en esa instalación.
- En el entorno restringido de Windows, `npm run build` y el inicio normal de Vite fallaron con `spawn EPERM` al iniciar esbuild. No se afirma que esos comandos hayan sido verificados correctamente ni que exista un despliegue publicado. Los scripts estándar se conservan para ejecutarlos en un entorno que permita iniciar procesos hijos.

## Recursos visuales

- Dispositivos: imagen original generada para este catálogo.
- Flores: fotografía de Thomas Beaman en [Unsplash](https://unsplash.com/photos/a-bride-holding-a-bouquet-of-pink-and-white-flowers-ntn1gdf_euo), incluida localmente como `public/images/wedding.jpg`.
- Tipografías: Manrope y DM Sans mediante Google Fonts; hay fuentes de sistema de respaldo.

Los archivos temporales de pruebas están en `work/` y no se incluyen en la entrega ZIP.

## Identidad visual
Logo original proporcionado por el propietario en public/images/rcm-logo.jpg, conservado sin alteraciones. Paleta y estilos de marca centralizados en src/brand.css: azul noche #03121F, cian #48DBE9, turquesa #71EFCF y violeta #A290F5. Logo incorporado al encabezado, pie de página y favicon.


## Paquetes oficiales de invitaciones
Actualizados según Paquetes_Invitaciones_Digitales_RCM_Code_Dev_250_a_5000.pdf: Esencial 250 MXN, Clásica 500 MXN, Elegante 900 MXN, Premium 1500 MXN, Premium Plus 2500 MXN y VIP 5000 MXN. Los precios ya no están pendientes; los datos de contacto conservan su configuración actual. Se sigue la herencia descrita en el detalle de paquetes del PDF, que incluye WhatsApp desde Esencial. Las prestaciones de backend del catálogo describen los servicios ofrecidos: esta actualización no implementa base de datos, RSVP real ni validación de acceso.


