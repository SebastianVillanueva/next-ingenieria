# CLAUDE.md — NEXT Ingeniería y Construcción

> Archivo de contexto del proyecto. Claude lo lee al inicio de cada sesión.
> Última actualización: versión 0 funcional, pre-lanzamiento (lanzamiento: miércoles mediodía).

---

## Qué es este proyecto

Web pública de **NEXT Ingeniería y Construcción** (nextperu.pe): consultora de
sistemas de producción / inteligencia operacional para constructoras e
inmobiliarias en Perú. La web es herramienta de generación de leads y declaración
de marca. Referencias estéticas: Palantir, Anduril, SpaceX, Linear, Vercel.

Este es el **primer proyecto de desarrollo** del fundador (Sebastian Villanueva,
ingeniero civil, programador principiante). Objetivo doble: lanzar la web Y
aprender prácticas de desarrollo. Explicar el porqué de las cosas, no solo dar
soluciones.

---

## Stack y herramientas

- **Framework:** Next.js 16.2.6 (App Router)
- **Lenguaje:** TypeScript
- **Estilos:** Tailwind CSS + estilos inline
- **Hosting:** Vercel (auto-deploy al hacer push a main)
- **Repo:** github.com/SebastianVillanueva/next-ingenieria
- **Dominio/DNS:** HW Perú (cPanel / Zone Editor)
- **Formularios:** Formspree (https://formspree.io/f/mnjynrjd)
- **Agendamiento:** Calendly (https://calendly.com/es-villanueva95/30min)
- **IDE:** VS Code con terminal

---

## REGLAS TECNICAS CRITICAS

1. **NO usar Turbopack.** Rompe Safari 16.x iOS (SyntaxError: Unexpected token '{'),
   mata la hidratacion de React, la pagina se congela en version desktop. El dev
   script en package.json debe ser "next dev" (sin --turbopack). No reactivar.

2. **Responsive: preferir CSS media queries sobre isMobile en JS.** El patron
   useState(false) + useEffect depende de que React hidrate. Si falla (ver punto 1),
   el responsive no ocurre. Nav ya usa CSS media queries puras. Meta futura: migrar
   el resto de componentes a este patron.

3. **Escribir archivos con tildes/ñ via Python o cat heredoc**, no copiar/pegar
   directo en VS Code (introduce caracteres invisibles que causan errores de
   sintaxis).

4. **Siempre npm run build antes de push.** Errores tipicos: propiedades duplicadas
   en objetos de estilo (alignItems dos veces), typos en rgba.

---

## Flujo de trabajo

```bash
cd next-ingenieria
npm run dev                 # localhost:3000
npm run build               # verificar antes de publicar
git add .
git commit -m "descripcion"
git push                    # Vercel despliega en 1-2 min
Ctrl + C                    # cerrar servidor
```

Depuracion Safari iPhone: cable USB -> Safari Mac -> Desarrollo -> [iPhone] ->
nextperu.pe -> Console. Senales clave: errores rojos, y
document.querySelector('[data-reactroot]') para confirmar hidratacion.

---

## Sistema visual

**Paleta**
- Fondo claro: #F8F7F4 (crema) / #EEECEA (crema alt)
- Texto/fondo oscuro: #0A0A0A
- Bordes: #C8C6C0 / #D0CEC8
- Acento dorado: #C9A227 (unico acento)
- Azul enfasis: #2563EB (con moderacion)
- Resaltado amarillo: rgba(255,213,0,0.9)

**Tipografia**
- Titulos: Syne (800)
- Cuerpo/UI: DM Mono

**Principios de marca**
- Comunicar EL PROBLEMA que se resuelve, no el servicio
- Hablar con datos ("PPC 78%", no "mejoramos significativamente")
- Tono: ingeniero senior, directo, sin adornos
- NADA de lenguaje motivacional ni "sinergias" / "soluciones integrales"
- Vision de largo plazo NO se declara, se transmite por diseno y tono

---

## Estructura de la web

Orden de bloques en app/page.tsx:

1. Nav - fija, pill con blur. CSS media queries.
2. Hero - imagen aerea de obra. Metricas: WIP TC / D<TH / >=5%
3. Problem - sintomas en dos columnas. "capacidad operativa" resaltada en amarillo.
4. Solution - fondo negro. Capas 01 LPS / 02 VDC / 03 PPM.
5. Process - Diagnostico (2-4 sem) + Diseno e Implementacion (3-12 meses) + foto.
6. Logos - carrusel: Cosapi, UK Healthcare, U de Lima, SemcoCAD.
7. Evidence - caso Quellaveco: ~95K USD / 9 dias / 15% reduccion ciclo TG.
   Card VDC U de Lima + Stanford. Descarga PDF con captura de lead.
8. Contact - fondo negro. Ficha personal + formulario -> Formspree + Calendly.
9. Footer

Componentes en components/: Button, Contact, Evidence, Footer, Hero, Logos,
Nav, Problem, Process, Solution.

---

## Estado: v0 FUNCIONAL

- Responsive movil completo en todos los bloques
- Verificado en Chrome, Safari Mac, Safari iPhone 12 iOS 16.1.1
- En produccion en nextperu.pe
- Tag git: v0-funcional

---

## Pendientes pre-lanzamiento (miercoles mediodia)

- Ajustes de texto (varios bloques)
- Bloque NUEVO con 3 fotos
- Modificacion de un bloque existente (por definir)

## Post-lanzamiento

- SEO + publicacion LinkedIn
- Migrar responsive de isMobile JS a CSS media queries
- Evaluar pasar a Claude Code / Desktop app
