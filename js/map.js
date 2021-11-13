/******************************************************************************
START Glitch hello-app default styles

The styles in this section do some minimal CSS resets, set default fonts and 
colors, and handle the layout for our footer and "Remix on Glitch" button. If
you're new to CSS they may seem a little complicated, but you can scroll down
to this section's matching END comment to see page-specific styles.
******************************************************************************/


/* 
  The style rules specify elements by type and by attributes such as class and ID
  Each section indicates an element or elements, then lists the style properties to apply
  See if you can cross-reference the rules in this file with the elements in index.html
*/

/* Our default values set as CSS variables */
:root {
  --color-bg: #ffccff;

}

/* Import fonts */
@font-face {
  font-family: HK Grotesk;
  src: url("https://cdn.glitch.me/095c6d41-a3ec-49e6-a0eb-30d2394c0254%2Fnov13.geojson?v=1636836666566")
    format("opentype");
}
@font-face {
  font-family: HK Grotesk;
  font-weight: bold;
  src: url("https://cdn.glitch.com/605e2a51-d45f-4d87-a285-9410ad350515%2FHKGrotesk-Bold.otf?v=1603136323437")
    format("opentype");
}


body {
  font-family: Verdana;
  background-color: var(--color-bg);
}

/* Page structure */
.title {
  color: #2800FF;
  font-family: verdana;
  font-style: normal;
  font-weight: bold;
  font-size: 60px;
  line-height: 105%;
  margin: 0;
}

.container {
  margin:1em;
}

#mapid {
  height:600px;
  
}

