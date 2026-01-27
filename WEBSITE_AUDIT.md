# Auditoría del Sitio Web - Vektra Digital

Fecha: 26 de Enero, 2026
Estado: En desarrollo / Revisión

## 1. Visión General
El proyecto es una aplicación web moderna construida con **Next.js 14 (App Router)**, **TypeScript** y **Tailwind CSS**. Está diseñado para ser multilingüe (Español/Inglés) y cuenta con integración de servicios externos como Google Tag Manager (GTM), reCAPTCHA v3 y envío de correos vía SMTP.

## 2. Estructura y Arquitectura
- **Framework**: Next.js 14 con App Router (`app/` directory).
- **Estilos**: Tailwind CSS con componentes UI personalizados (basados en Shadcn/UI).
- **Internacionalización (i18n)**: Implementación manual con rutas `/en` y detección de idioma.
- **Formularios**: React Hook Form o estados controlados con validación manual y Zod (en algunos puntos).

## 3. Calidad de Código y Errores Detectados (Linting)

Se ejecutó un análisis estático del código y se encontraron los siguientes problemas que requieren atención:

### A. Errores Críticos (Riesgo de bucles infinitos o rendimiento)
Se detectó el uso de `setState` directamente dentro de un `useEffect` sin condiciones adecuadas o dependencias correctas, lo que puede causar renderizados innecesarios o bucles infinitos.
- **`app/admin/page.tsx`**: `setIsAuthenticated` se llama sincrónicamente.
- **`app/trabajos/page-client.tsx`**: `setSearchTerm` se actualiza directamente al cambiar los params.
- **`components/sections/testimonials.tsx`**: `setDisplayItems` se llama directamente para ordenar aleatoriamente.

### B. Rendimiento e Imágenes
- Se detectó el uso de la etiqueta HTML estándar `<img>` en lugar del componente optimizado `<Image />` de Next.js en:
    - `app/contacto/page-client.tsx`
    - `components/sections/testimonials.tsx`
  **Recomendación**: Migrar a `next/image` para carga diferida (lazy loading) y optimización automática de formatos (WebP/AVIF).

### C. Sintaxis y Renderizado (React)
- Múltiples advertencias sobre caracteres no escapados (como apóstrofes `'`) en archivos de texto en inglés (ej. `app/en/about-us/page.tsx`, `app/en/legal/page.tsx`). Esto puede causar problemas de hidratación o renderizado incorrecto.
  **Solución**: Usar entidades HTML como `&apos;` o comillas tipográficas `&rsquo;`.

### D. Optimización (React Compiler)
- `components/sections/portfolio-preview.tsx`: La memoización manual (`useCallback`) no se pudo preservar debido a dependencias inferidas incorrectamente.

## 4. UX/UI y Funcionalidad
### Mejoras Recientes
- **Móvil**: Se optimizó la visualización de la sección "Trayectoria" a un grid de 2 columnas.
- **Contacto**: Se rediseñó la sección de información de contacto en móviles para usar un formato de "tarjetas" en grid, mejorando la usabilidad.
- **Navegación**: Se corrigió el menú para resaltar la sección activa dinámicamente.

### Puntos a Revisar
- **Accesibilidad**: Verificar que todos los botones e inputs tengan etiquetas `aria-label` adecuadas (se observó buen uso en general).
- **SEO**: Asegurar que todas las páginas tengan metadatos dinámicos correctos (títulos y descripciones).

## 5. Seguridad
- **ReCAPTCHA**: Implementado correctamente en el formulario de contacto.
- **Variables de Entorno**: Se utiliza `.env` para credenciales sensibles. Asegurarse de **no** subir `.env` al repositorio (verificar `.gitignore`).

## 6. Recomendaciones de Próximos Pasos
1.  **Corregir Errores de Lint**: Priorizar los arreglos de `useEffect` para evitar problemas de estabilidad.
2.  **Escapar Caracteres**: Realizar una pasada por los textos en inglés para corregir los apóstrofes.
3.  **Optimizar Imágenes**: Reemplazar `<img>` restantes por `<Image />`.
4.  **Testing**: Implementar pruebas unitarias básicas para componentes críticos (formulario de contacto, calculadoras).
