# Cambios SEO

## 2026-05-24

### Pagina de reciclaje de electronicos

- Se agrego URL canonica y URL de Open Graph para `/electronics-recycling-ajijic` usando la ruta actual.
- Se agrego el locale correcto segun idioma: `en_US` para ingles y `es_MX` para espanol.
- Se actualizo el titulo y la meta descripcion para apuntar mejor a busquedas locales sobre reciclaje de electronicos, reutilizacion, reacondicionamiento y e-waste en Ajijic.
- Se agregaron keywords especificas para esta pagina, evitando que use solo terminos genericos de reparacion de computadoras.
- Se agrego structured data con schema `Service`, incluyendo proveedor, area de servicio, idiomas y tipo de servicio.
- Se amplio el contenido visible con terminos locales y de intencion de busqueda: Ajijic, Chapala, Lake Chapala, residuos electronicos, reutilizacion, recuperacion de piezas, recoleccion y entrega.
- Se mejoro el marcado semantico de listas usando listas reales en lugar de caracteres de bullet dentro del texto.
- Se agrego `aria-label` al boton de regreso para mejorar accesibilidad.
- Se reutilizo el helper compartido `goToContact` para mantener consistente la navegacion hacia el formulario de contacto.

### Componente SEO compartido

- Se hizo opcional la prop `url` y se agrego un valor seguro por defecto: `https://jbrepair.info`.
- Se agrego soporte para keywords especificas por pagina.
- Se agrego meta `robots` con `index, follow`.
- Se cambio la imagen por defecto de Open Graph y Twitter a una URL absoluta para mejorar compatibilidad al compartir enlaces.

### Sitemap

- Se agrego `https://jbrepair.info/electronics-recycling-ajijic` a `public/sitemap.xml` para que los buscadores puedan descubrir la pagina directamente.

## 2026-05-24 - Optimizacion general del sitio

### SEO y enlaces internos

- Se agrego el componente `SEO` a la home para que el titulo, descripcion, canonical, Open Graph y keywords tambien se actualicen dentro de la app React.
- Se reforzo `index.html` con canonical, robots, theme color, keywords, Open Graph y Twitter Cards como metadata inicial antes de que cargue React.
- Se corrigio un enlace interno roto hacia `/wifi-installation-ajijic`; ahora apunta a la pagina existente de WiFi.
- Se mantuvieron canonical URLs dinamicas en paginas que dependen de la ruta actual.

### Accesibilidad y HTML semantico

- Se elimino el `main` anidado: ahora `App.jsx` contiene el unico `<main id="main-content">` y la home renderiza su contenido dentro de el.
- Se agrego un enlace "Skip to content" para navegacion por teclado.
- Se agregaron `type="button"` o `type="submit"` en botones para evitar comportamiento accidental dentro de formularios.
- Se agregaron `aria-label`, `aria-controls`, `aria-expanded`, `aria-invalid`, `aria-describedby` y regiones `aria-live` donde aplicaba.
- Se conectaron labels del formulario con sus inputs usando `htmlFor` e `id`.
- Se agregaron atributos `autoComplete` al formulario.
- Se corrigio el `id="contact"` duplicado para dejar un solo destino valido de scroll hacia el formulario.
- Se mejoraron listas que usaban bullets manuales para usar marcado semantico real.

### UI, CSS y rendimiento percibido

- Se agregaron estilos base en `src/index.css` para foco visible, seleccion de texto, suavizado de fuente, ancho minimo y soporte para `prefers-reduced-motion`.
- Se hizo el header sticky con fondo semitransparente y blur para mejorar navegacion.
- Se cambio el logo del header a `Link` de React Router para evitar recargas completas.
- Se agregaron dimensiones explicitas al logo para reducir layout shift.
- Se ajusto la metadata de reseñas para usar una imagen valida y un conteo consistente.

### Mantenibilidad

- Se agregaron `PropTypes` a paginas y componentes que no los tenian.
- Se renombro el componente de reparacion de computadoras a `ComputerRepair` para seguir convenciones de React.
- Se centralizo la validacion inicial del formulario y se reinicia correctamente despues de enviar.
