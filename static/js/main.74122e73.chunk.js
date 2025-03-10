(this["webpackJsonpyot-website-js"]=this["webpackJsonpyot-website-js"]||[]).push([[0],{37:function(e,t,i){},45:function(e,t,i){"use strict";i.r(t);var r=i(1),o=i.n(r),a=i(29),n=i.n(a),s=(i(37),i(6)),c=i(12),d=i(3);const l={colors:{primary:"#00FF88",primaryLight:"#7AFFB9",primaryDark:"#00CC6A",secondary:"#333333",tertiary:"#2A2A2A",darkText:"#E0E0E0",lightText:"#FFFFFF",bodyBg:"#121212",cardBg:"#1E1E1E",cardBgDark:"#181818",gradientStart:"#00FF88",gradientEnd:"#00CCFF",accent:"#FF7700",error:"#FF3366",success:"#00CC88",warning:"#FFAA00",overlay:"rgba(0, 0, 0, 0.7)",overlayLight:"rgba(0, 0, 0, 0.3)",focus:"rgba(0, 255, 136, 0.5)",elevation:{1:"rgba(0, 0, 0, 0.1)",2:"rgba(0, 0, 0, 0.15)",3:"rgba(0, 0, 0, 0.2)",4:"rgba(0, 0, 0, 0.25)"}},gradients:{primary:"linear-gradient(135deg, #00FF88 0%, #00CCFF 100%)",hover:"linear-gradient(135deg, #00FF99 0%, #00DDFF 100%)",secondary:"linear-gradient(135deg, #333333 0%, #666666 100%)",accent:"linear-gradient(135deg, #FF7700 0%, #FFA500 100%)",darkOverlay:"linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.3))"},fonts:{body:"'Inter', 'Poppins', system-ui, -apple-system, BlinkMacSystemFont, sans-serif",heading:"'Inter', 'Poppins', system-ui, -apple-system, BlinkMacSystemFont, sans-serif"},fontSizes:{tiny:"0.75rem",small:"0.875rem",medium:"1rem",large:"1.25rem",xlarge:"1.5rem",xxlarge:"2rem",huge:"2.5rem",massive:"3.5rem"},fontWeights:{light:300,normal:400,medium:500,semibold:600,bold:700,extrabold:800},breakpoints:{smallMobile:"480px",mobile:"768px",tablet:"1024px",desktop:"1200px",largeDesktop:"1440px"},spacing:{tiny:"0.25rem",small:"0.5rem",medium:"1rem",large:"1.5rem",xlarge:"2.5rem",xxlarge:"3.5rem",huge:"5rem",massive:"7rem"},shadows:{small:"0 2px 4px rgba(0, 0, 0, 0.3)",medium:"0 4px 8px rgba(0, 0, 0, 0.4)",large:"0 8px 16px rgba(0, 0, 0, 0.5)",xlarge:"0 12px 24px rgba(0, 0, 0, 0.6)",primary:"0 8px 16px rgba(0, 255, 136, 0.25)",primaryHover:"0 12px 20px rgba(0, 255, 136, 0.4)",inset:"inset 0 2px 4px rgba(0, 0, 0, 0.2)",mobileCard:"0 2px 6px rgba(0, 0, 0, 0.2)",mobileButton:"0 4px 12px rgba(0, 255, 136, 0.25)",mobileButtonHover:"0 6px 15px rgba(0, 255, 136, 0.35)"},borderRadius:{small:"4px",medium:"8px",large:"12px",xlarge:"16px",xxlarge:"24px",circle:"50%",pill:"9999px"},transitions:{default:"all 0.3s ease",fast:"all 0.15s ease",slow:"all 0.5s ease",bounce:"all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55)",springy:"all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)",touch:"all 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)",touchPress:"all 0.1s cubic-bezier(0.55, 0.085, 0.68, 0.53)",touchRelease:"all 0.25s cubic-bezier(0.25, 0.46, 0.45, 0.94)"},animations:{fadeIn:"fadeIn 0.5s ease-in-out",slideUp:"slideUp 0.5s ease-in-out",pulse:"pulse 2s infinite",fadeInFast:"fadeIn 0.3s ease-in-out",slideUpMobile:"slideUp 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)",bounceIn:"bounceIn 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)"},zIndices:{low:10,medium:100,high:1e3,modal:2e3,nav:100,mobileNav:2e3,modalOverlay:1900},mobile:{touchTargetSize:"44px",edgeDistance:"16px",contentSpacing:"16px",bottomNavHeight:"56px",headerHeight:"60px",safeArea:{top:"env(safe-area-inset-top)",right:"env(safe-area-inset-right)",bottom:"env(safe-area-inset-bottom)",left:"env(safe-area-inset-left)"}}},m=d.b`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-tap-highlight-color: rgba(0, 255, 136, 0.15);
  }

  html {
    scroll-behavior: smooth;
    height: -webkit-fill-available; /* Mobile viewport height fix */
  }

  body {
    font-family: ${e=>e.theme.fonts.body};
    color: ${e=>e.theme.colors.darkText};
    background-color: ${e=>e.theme.colors.bodyBg};
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-x: hidden;
    min-height: 100vh;
    min-height: -webkit-fill-available; /* Mobile viewport height fix */
    touch-action: manipulation; /* Disable double-tap zoom on mobile */
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${e=>e.theme.fonts.heading};
    margin-bottom: 1rem;
    font-weight: 600;
    line-height: 1.2;
    color: ${e=>e.theme.colors.lightText};
  }

  h1 {
    font-size: ${e=>e.theme.fontSizes.huge};
    
    @media (max-width: ${e=>e.theme.breakpoints.mobile}) {
      font-size: ${e=>e.theme.fontSizes.xxlarge};
    }
  }

  h2 {
    font-size: ${e=>e.theme.fontSizes.xxlarge};
    
    @media (max-width: ${e=>e.theme.breakpoints.mobile}) {
      font-size: ${e=>e.theme.fontSizes.xlarge};
    }
  }

  h3 {
    font-size: ${e=>e.theme.fontSizes.xlarge};
    
    @media (max-width: ${e=>e.theme.breakpoints.mobile}) {
      font-size: ${e=>e.theme.fontSizes.large};
    }
  }

  p {
    margin-bottom: 1rem;
    color: ${e=>e.theme.colors.darkText};
  }

  a {
    color: ${e=>e.theme.colors.primary};
    text-decoration: none;
    transition: all 0.3s ease;
    
    &:hover {
      color: ${e=>e.theme.colors.primaryLight};
    }
  }

  img {
    max-width: 100%;
    height: auto;
    display: block;
  }

  button {
    cursor: pointer;
    font-family: ${e=>e.theme.fonts.body};
    border: none;
    background: none;
    min-height: 44px; /* Minimum touch target size */
    min-width: 44px; /* Minimum touch target size */
    
    &:focus-visible {
      outline: 2px solid ${e=>e.theme.colors.primary};
      outline-offset: 2px;
    }
    
    &:focus:not(:focus-visible) {
      outline: none;
    }
  }

  ul, ol {
    list-style-position: inside;
    margin-bottom: 1rem;
    color: ${e=>e.theme.colors.darkText};
  }

  input, textarea, select {
    font-family: ${e=>e.theme.fonts.body};
    font-size: ${e=>e.theme.fontSizes.medium};
    background-color: ${e=>e.theme.colors.cardBgDark};
    color: ${e=>e.theme.colors.darkText};
    border: 1px solid ${e=>e.theme.colors.tertiary};
    border-radius: ${e=>e.theme.borderRadius.small};
    padding: 0.75rem 1rem;
    width: 100%;
    min-height: 48px; /* Better touch targets on mobile */
    
    &:focus {
      border-color: ${e=>e.theme.colors.primary};
      outline: none;
      box-shadow: 0 0 0 2px rgba(0, 255, 136, 0.25);
    }
    
    @media (max-width: ${e=>e.theme.breakpoints.mobile}) {
      font-size: 16px; /* Prevent iOS zoom on focus */
      padding: 1rem;
    }
  }
  
  textarea {
    resize: vertical;
    min-height: 100px;
  }
  
  select {
    appearance: none;
    background-image: url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%2300FF88%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.4-12.8z%22%2F%3E%3C%2Fsvg%3E");
    background-repeat: no-repeat;
    background-position: right 0.7rem top 50%;
    background-size: 0.65rem auto;
    padding-right: 2rem;
  }

  /* Form focus order indicator */
  *:focus {
    outline: none;
  }
  
  *:focus-visible {
    outline: 2px solid ${e=>e.theme.colors.primary};
    outline-offset: 2px;
  }

  ::selection {
    background-color: ${e=>e.theme.colors.primary};
    color: white;
  }

  /* Custom Animations */
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes slideUp {
    from {
      transform: translateY(20px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  @keyframes pulse {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.05);
    }
    100% {
      transform: scale(1);
    }
  }

  /* Width for container elements */
  .container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 ${e=>e.theme.spacing.medium};
    
    @media (max-width: ${e=>e.theme.breakpoints.mobile}) {
      padding: 0 ${e=>e.theme.spacing.small};
    }
  }
  
  /* Scrollbar styling */
  ::-webkit-scrollbar {
    width: 10px;
    height: 10px;
    
    @media (max-width: ${e=>e.theme.breakpoints.mobile}) {
      width: 6px;
      height: 6px;
    }
  }
  
  ::-webkit-scrollbar-track {
    background: ${e=>e.theme.colors.bodyBg};
  }
  
  ::-webkit-scrollbar-thumb {
    background: ${e=>e.theme.colors.tertiary};
    border-radius: 5px;
  }
  
  ::-webkit-scrollbar-thumb:hover {
    background: ${e=>e.theme.colors.primary};
  }
  
  /* Helper classes */
  .visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }
  
  /* Disable pull-to-refresh on mobile */
  @media (max-width: ${e=>e.theme.breakpoints.mobile}) {
    body {
      overscroll-behavior-y: contain;
    }
  }
  
  /* Fix 100vh issue on mobile */
  .full-height {
    height: 100vh;
    height: calc(var(--vh, 1vh) * 100);
  }
  
  /* Enhance touch targets for clickable elements */
  .touchable {
    min-height: 44px;
    min-width: 44px;
  }
`;var h=i(47),p=i(48),b=i(7),g=i(4),u=i(0);const x=d.d.header`
  background-color: ${e=>e.theme.colors.bodyBg};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: ${e=>e.theme.zIndices.nav};
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(5px);
`,j=d.d.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
  height: 60px;
  
  @media (max-width: ${e=>e.theme.breakpoints.mobile}) {
    padding: 0.75rem 1rem;
  }
`,y=Object(d.d)(c.b)`
  font-size: 1.5rem;
  font-weight: ${e=>e.theme.fontWeights.bold};
  color: ${e=>e.theme.colors.primary};
  text-decoration: none;
  transition: all 0.3s ease;
  font-family: 'Poppins', sans-serif;
  letter-spacing: 1px;
  
  &:hover {
    opacity: 0.8;
  }
  
  @media (max-width: ${e=>e.theme.breakpoints.mobile}) {
    font-size: 1.2rem;
  }
`,f=d.d.nav`
  display: flex;
  gap: 1.5rem;
  
  @media (max-width: ${e=>e.theme.breakpoints.mobile}) {
    display: none;
  }
`,w=Object(d.d)(c.b)`
  color: ${e=>e.isActive?e.theme.colors.primary:e.theme.colors.darkText};
  text-decoration: none;
  font-weight: ${e=>e.theme.fontWeights.medium};
  padding: 0.75rem 0.5rem;
  position: relative;
  transition: all 0.3s ease;
  
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background: ${e=>e.theme.gradients.primary};
    transform: scaleX(${e=>e.isActive?1:0});
    transform-origin: center;
    transition: transform 0.3s ease;
  }
  
  &:hover {
    color: ${e=>e.theme.colors.primary};
    
    &:after {
      transform: scaleX(1);
    }
  }
`,v=d.d.button`
  background: none;
  border: none;
  color: ${e=>e.theme.colors.primary};
  font-size: 1.5rem;
  cursor: pointer;
  display: none;
  padding: 0.75rem;
  margin: -0.75rem;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  transition: background-color 0.2s ease;
  
  &:active {
    background-color: rgba(255, 255, 255, 0.1);
  }
  
  @media (max-width: ${e=>e.theme.breakpoints.mobile}) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`,O=Object(d.d)(h.a.div)`
  position: fixed;
  top: 0;
  right: 0;
  width: 280px;
  height: 100vh;
  background-color: ${e=>e.theme.colors.cardBg};
  box-shadow: -2px 0 10px rgba(0, 0, 0, 0.3);
  padding: 4rem 1.5rem 2rem;
  z-index: ${e=>e.theme.zIndices.nav+10};
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
`,k=Object(d.d)(c.b)`
  color: ${e=>e.isActive?e.theme.colors.primary:e.theme.colors.darkText};
  text-decoration: none;
  font-weight: ${e=>e.theme.fontWeights.medium};
  font-size: 1.2rem;
  padding: 1rem 0.75rem;
  position: relative;
  transition: all 0.3s ease;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  border-radius: 8px;
  
  &:hover, &:active {
    color: ${e=>e.theme.colors.primary};
    background-color: rgba(255, 255, 255, 0.05);
  }
  
  &:active {
    transform: scale(0.98);
  }
`,$=d.d.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  color: ${e=>e.theme.colors.primary};
  font-size: 1.5rem;
  cursor: pointer;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.2s ease;
  
  &:active {
    background-color: rgba(255, 255, 255, 0.1);
  }
`,z=Object(d.d)(h.a.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: ${e=>e.theme.zIndices.nav+5};
  backdrop-filter: blur(2px);
`,S=d.d.span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${e=>e.theme.colors.primary};
  display: inline-block;
  margin-right: 12px;
`;var T=function(){const[e,t]=Object(r.useState)(!1),i=Object(s.l)(),o=()=>{t(!e)};return Object(r.useEffect)((()=>{t(!1)}),[i]),Object(r.useEffect)((()=>(document.body.style.overflow=e?"hidden":"auto",()=>{document.body.style.overflow="auto"})),[e]),Object(u.jsx)(x,{children:Object(u.jsxs)(j,{children:[Object(u.jsx)(y,{to:"/",children:"YOT PRODUCTIONS"}),Object(u.jsxs)(f,{children:[Object(u.jsx)(w,{to:"/",isActive:"/"===i.pathname,children:"Home"}),Object(u.jsx)(w,{to:"/video-editing",isActive:"/video-editing"===i.pathname,children:"Video Editing"}),Object(u.jsx)(w,{to:"/designing",isActive:"/designing"===i.pathname,children:"Designing"}),Object(u.jsx)(w,{to:"/website-support",isActive:"/website-support"===i.pathname,children:"Web Support"}),Object(u.jsx)(w,{to:"/creator-outreach",isActive:"/creator-outreach"===i.pathname,children:"Creator Outreach"})]}),Object(u.jsx)(v,{onClick:o,"aria-label":"Menu",children:Object(u.jsx)(b.a,{icon:g.f})}),Object(u.jsx)(p.a,{children:e&&Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(z,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},onClick:o}),Object(u.jsxs)(O,{initial:{x:300},animate:{x:0},exit:{x:300},transition:{type:"spring",stiffness:300,damping:30},children:[Object(u.jsx)($,{onClick:o,"aria-label":"Close menu",children:Object(u.jsx)(b.a,{icon:g.bb})}),Object(u.jsxs)(k,{to:"/",isActive:"/"===i.pathname,onClick:o,children:["/"===i.pathname&&Object(u.jsx)(S,{}),"Home"]}),Object(u.jsxs)(k,{to:"/video-editing",isActive:"/video-editing"===i.pathname,onClick:o,children:["/video-editing"===i.pathname&&Object(u.jsx)(S,{}),"Video Editing"]}),Object(u.jsxs)(k,{to:"/designing",isActive:"/designing"===i.pathname,onClick:o,children:["/designing"===i.pathname&&Object(u.jsx)(S,{}),"Designing"]}),Object(u.jsxs)(k,{to:"/website-support",isActive:"/website-support"===i.pathname,onClick:o,children:["/website-support"===i.pathname&&Object(u.jsx)(S,{}),"Web Support"]}),Object(u.jsxs)(k,{to:"/creator-outreach",isActive:"/creator-outreach"===i.pathname,onClick:o,children:["/creator-outreach"===i.pathname&&Object(u.jsx)(S,{}),"Creator Outreach"]})]})]})})]})})};const C=d.d.footer`
  background: ${e=>e.theme.colors.cardBg};
  padding: 3rem 1.5rem;
  margin-top: 4rem;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.05);
  
  @media (min-width: ${e=>e.theme.breakpoints.mobile}) {
    padding: 3rem 2rem;
  }
`,F=d.d.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  
  @media (max-width: ${e=>e.theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }
`,A=d.d.div`
  h3 {
    color: ${e=>e.theme.colors.primary};
    margin-bottom: 1.25rem;
    font-size: 1.5rem;
  }
  
  @media (max-width: ${e=>e.theme.breakpoints.mobile}) {
    text-align: center;
  }
`,D=d.d.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${e=>e.theme.colors.darkText};
  text-decoration: none;
  margin-bottom: 0.75rem;
  transition: ${e=>e.theme.transitions.default};
  font-size: 1rem;
  padding: 0.5rem 0;
  
  &:hover {
    color: ${e=>e.theme.colors.primary};
    transform: translateX(5px);
  }
  
  svg {
    color: ${e=>e.theme.colors.primary};
    font-size: 1.1rem;
  }
  
  @media (max-width: ${e=>e.theme.breakpoints.mobile}) {
    justify-content: center;
    padding: 0.75rem 0;
    
    &:hover {
      transform: translateX(0) scale(1.05);
    }
  }
`,B=d.d.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.2rem;
  margin: 0.5rem 0;
  border-radius: 8px;
  text-decoration: none;
  transition: ${e=>e.theme.transitions.default};
  background: ${e=>{switch(e.variant){case"instagram":return"#E1306C";case"location":return"#4285F4";case"career":return e.theme.colors.primary;default:return"#333333"}}};
  color: white;
  font-size: 0.95rem;
  font-weight: 500;
  width: 160px;
  justify-content: center;
  
  svg {
    font-size: 1rem;
  }

  &:hover {
    opacity: 0.9;
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }
  
  @media (max-width: ${e=>e.theme.breakpoints.mobile}) {
    width: 200px;
    padding: 0.85rem 1.5rem;
    margin: 0.6rem 0;
  }
`,E=d.d.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
  margin-top: 0.5rem;
  
  @media (max-width: ${e=>e.theme.breakpoints.mobile}) {
    align-items: center;
  }
`,I=d.d.div`
  margin-top: 2rem;
  padding-top: 1.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  
  @media (max-width: ${e=>e.theme.breakpoints.mobile}) {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
    padding-top: 2rem;
  }
`,P=d.d.p`
  font-size: 0.9rem;
  opacity: 0.7;
`,Y=d.d.div`
  display: flex;
  gap: 1.5rem;
  
  @media (max-width: ${e=>e.theme.breakpoints.mobile}) {
    flex-direction: column;
    gap: 1rem;
  }
`,W=Object(d.d)(c.b)`
  color: ${e=>e.theme.colors.darkText};
  text-decoration: none;
  font-size: 0.9rem;
  opacity: 0.7;
  transition: ${e=>e.theme.transitions.default};
  padding: 0.4rem 0.6rem;
  
  &:hover {
    color: ${e=>e.theme.colors.primary};
    opacity: 1;
  }
  
  @media (max-width: ${e=>e.theme.breakpoints.mobile}) {
    padding: 0.6rem 0.8rem;
    font-size: 1rem;
  }
`;var R=function(){const e=(new Date).getFullYear();return Object(u.jsxs)(C,{children:[Object(u.jsxs)(F,{children:[Object(u.jsxs)(A,{children:[Object(u.jsx)("h3",{children:"Contact Us"}),Object(u.jsxs)(D,{href:"tel:+919757271093",children:[Object(u.jsx)(b.a,{icon:"phone"})," Yash: +91 97572 71093"]}),Object(u.jsxs)(D,{href:"tel:+918530680455",children:[Object(u.jsx)(b.a,{icon:"phone"})," Kunal: +91 85306 80455"]}),Object(u.jsxs)(D,{href:"mailto:contact@yotproductions.com",children:[Object(u.jsx)(b.a,{icon:"envelope"})," contact@yotproductions.com"]}),Object(u.jsxs)(D,{as:"p",children:[Object(u.jsx)(b.a,{icon:"map-marker-alt"})," New Panvel, Navi Mumbai"]})]}),Object(u.jsxs)(A,{children:[Object(u.jsx)("h3",{children:"Connect With Us"}),Object(u.jsxs)(E,{children:[Object(u.jsxs)(B,{href:"https://www.instagram.com/yotproductions",target:"_blank",rel:"noopener noreferrer",variant:"instagram",children:[Object(u.jsx)(b.a,{icon:["fab","instagram"]})," Instagram"]}),Object(u.jsxs)(B,{href:"https://maps.app.goo.gl/wkEeC6Mxn4j2nueF6",target:"_blank",rel:"noopener noreferrer",variant:"location",children:[Object(u.jsx)(b.a,{icon:"map-marker-alt"})," Location"]}),Object(u.jsxs)(B,{as:c.b,to:"/careers",variant:"career",children:[Object(u.jsx)(b.a,{icon:"briefcase"})," Careers"]})]})]}),Object(u.jsxs)(A,{children:[Object(u.jsx)("h3",{children:"Our Services"}),Object(u.jsxs)(D,{as:c.b,to:"/video-editing",children:[Object(u.jsx)(b.a,{icon:"video"})," Video Editing"]}),Object(u.jsxs)(D,{as:c.b,to:"/designing",children:[Object(u.jsx)(b.a,{icon:"palette"})," Designing"]}),Object(u.jsxs)(D,{as:c.b,to:"/website-support",children:[Object(u.jsx)(b.a,{icon:"globe"})," Website Support"]}),Object(u.jsxs)(D,{as:c.b,to:"/creator-outreach",children:[Object(u.jsx)(b.a,{icon:"handshake"})," Creator Outreach"]})]}),Object(u.jsxs)(A,{children:[Object(u.jsx)("h3",{children:"Legal"}),Object(u.jsxs)(D,{as:c.b,to:"/privacy-policy",children:[Object(u.jsx)(b.a,{icon:"shield-alt"})," Privacy Policy"]}),Object(u.jsxs)(D,{as:c.b,to:"/terms-of-service",children:[Object(u.jsx)(b.a,{icon:"file-contract"})," Terms of Service"]})]})]}),Object(u.jsxs)(I,{children:[Object(u.jsxs)(P,{children:["\xa9 ",e," YOT Productions. All rights reserved."]}),Object(u.jsxs)(Y,{children:[Object(u.jsx)(W,{to:"/about",children:"About Us"}),Object(u.jsx)(W,{to:"/faq",children:"FAQ"}),Object(u.jsx)(W,{to:"/contact",children:"Contact"})]})]})]})};const M=d.d.section`
  height: 90vh;
  max-height: 800px;
  display: flex;
  align-items: center;
  padding: 0 2rem;
  background: linear-gradient(135deg, rgba(0, 255, 136, 0.1) 0%, rgba(0, 204, 255, 0.1) 100%);
  margin-top: 4rem;
  
  @media (max-width: ${e=>e.theme.breakpoints.mobile}) {
    height: auto;
    padding: 6rem 2rem 4rem;
  }
`,L=d.d.div`
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
`,N=Object(d.d)(h.a.h1)`
  font-size: 3.5rem;
  margin-bottom: 1.5rem;
  background: ${e=>e.theme.gradients.primary};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (max-width: ${e=>e.theme.breakpoints.mobile}) {
    font-size: 2.5rem;
  }
`,U=Object(d.d)(h.a.p)`
  font-size: 1.5rem;
  margin-bottom: 2rem;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  
  @media (max-width: ${e=>e.theme.breakpoints.mobile}) {
    font-size: 1.2rem;
  }
`,q=Object(d.d)(h.a.div)`
  display: flex;
  justify-content: center;
  gap: 1rem;
  
  @media (max-width: ${e=>e.theme.breakpoints.mobile}) {
    flex-direction: column;
    align-items: center;
  }
`,H=Object(d.d)(c.b)`
  display: inline-block;
  padding: 1rem 2rem;
  background: ${e=>e.theme.gradients.primary};
  color: white;
  border-radius: 50px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 255, 136, 0.3);
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 7px 20px rgba(0, 255, 136, 0.4);
  }
`,V=Object(d.d)(c.b)`
  display: inline-block;
  padding: 1rem 2rem;
  background: transparent;
  color: ${e=>e.theme.colors.primary};
  border: 2px solid ${e=>e.theme.colors.primary};
  border-radius: 50px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(0, 255, 136, 0.1);
    transform: translateY(-3px);
  }
`,G=d.d.section`
  padding: 6rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
`,X=d.d.h2`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 3rem;
  background: ${e=>e.theme.gradients.primary};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`,_=d.d.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2.5rem;
  
  @media (max-width: ${e=>e.theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`,J=Object(d.d)(h.a.div)`
  background: ${e=>e.theme.colors.cardBg};
  border-radius: 16px;
  overflow: hidden;
  position: relative;
  box-shadow: ${e=>e.theme.shadows.medium};
  height: 100%;
  display: flex;
  flex-direction: column;
  transition: all 0.4s ease;
  
  &:hover {
    transform: translateY(-12px);
    box-shadow: ${e=>e.theme.shadows.large};
    
    .service-icon {
      transform: scale(1.1);
    }
    
    .service-link svg {
      transform: translateX(5px);
    }
    
    .card-gradient {
      opacity: 1;
      height: 100%;
    }
  }
`,Q=d.d.div`
  padding: 2.5rem 2rem 1.5rem;
  position: relative;
  z-index: 2;
`,K=d.d.div`
  padding: 0 2rem 2.5rem;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: space-between;
  position: relative;
  z-index: 2;
`,Z=d.d.div`
  background: ${e=>e.theme.gradients.primary};
  width: 80px;
  height: 80px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  box-shadow: 0 8px 20px rgba(0, 255, 136, 0.3);
  transition: transform 0.3s ease;
  
  svg {
    font-size: 2.5rem;
    color: white;
  }
`,ee=d.d.h3`
  font-size: 1.75rem;
  margin-bottom: 1rem;
  color: ${e=>e.theme.colors.lightText};
`,te=d.d.p`
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  color: ${e=>e.theme.colors.darkText};
  flex-grow: 1;
`,ie=Object(d.d)(c.b)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 600;
  text-decoration: none;
  color: ${e=>e.theme.colors.primary};
  margin-top: 1rem;
  transition: all 0.3s ease;
  
  svg {
    transition: transform 0.3s ease;
  }
`,re=d.d.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 5px;
  background: ${e=>e.theme.gradients.primary};
  opacity: 0.8;
  transition: all 0.4s ease;
  z-index: 1;
`,oe=d.d.section`
  padding: 6rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
`,ae=Object(d.d)(h.a.p)`
  font-size: 1.5rem;
  margin-bottom: 2rem;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
`,ne=Object(d.d)(h.a.a)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 2.5rem;
  font-size: 1.2rem;
  background: ${e=>e.theme.gradients.primary};
  color: white;
  border-radius: 50px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 255, 136, 0.3);
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 7px 20px rgba(0, 255, 136, 0.4);
  }
  
  svg {
    transition: transform 0.3s ease;
  }
  
  &:hover svg {
    transform: translateX(5px);
  }
`;var se=function(){const e=[{title:"Video Editing",description:"Turn raw clips into viral-ready masterpieces. Professional video editing services for content creators, businesses, and events.",icon:g.ib,link:"/video-editing"},{title:"Designing",description:"Brands that dazzle, designs that convert. Creative design solutions including branding, social media graphics, and UI/UX design.",icon:g.M,link:"/designing"},{title:"Website Support",description:"Websites that work as hard as you do. End-to-end web development services from design to deployment with ongoing maintenance.",icon:g.C,link:"/website-support"},{title:"Creator Outreach",description:"Bridge brands with creators, effortlessly. Connect brands with relevant content creators for authentic partnerships and campaigns.",icon:g.E,link:"/creator-outreach"}],t={offscreen:{y:50,opacity:0},onscreen:e=>({y:0,opacity:1,transition:{type:"spring",bounce:.4,duration:.8,delay:.1*e}})};return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(M,{children:Object(u.jsxs)(L,{children:[Object(u.jsx)(N,{initial:{y:-50,opacity:0},animate:{y:0,opacity:1},transition:{duration:.5},children:"Elevate Your Digital Presence"}),Object(u.jsx)(U,{initial:{y:-30,opacity:0},animate:{y:0,opacity:1},transition:{duration:.5,delay:.2},children:"Creative production services for businesses and content creators"}),Object(u.jsxs)(q,{initial:{y:-20,opacity:0},animate:{y:0,opacity:1},transition:{duration:.5,delay:.4},children:[Object(u.jsx)(H,{to:"/video-editing",children:"Explore Services"}),Object(u.jsx)(V,{href:"mailto:contact@yotproductions.com",as:"a",target:"_blank",children:"Contact Us"})]})]})}),Object(u.jsxs)(G,{children:[Object(u.jsx)(X,{children:"Our Services"}),Object(u.jsx)(_,{children:e.map(((e,i)=>Object(u.jsxs)(J,{custom:i,initial:"offscreen",whileInView:"onscreen",viewport:{once:!0,amount:.2},variants:t,children:[Object(u.jsx)(re,{className:"card-gradient"}),Object(u.jsxs)(Q,{children:[Object(u.jsx)(Z,{className:"service-icon",children:Object(u.jsx)(b.a,{icon:e.icon})}),Object(u.jsx)(ee,{children:e.title})]}),Object(u.jsxs)(K,{children:[Object(u.jsx)(te,{children:e.description}),Object(u.jsxs)(ie,{to:e.link,className:"service-link",children:["Explore ",e.title," ",Object(u.jsx)(b.a,{icon:g.e})]})]})]},i)))})]}),Object(u.jsxs)(oe,{children:[Object(u.jsx)(X,{children:"Ready to Get Started?"}),Object(u.jsx)(ae,{initial:{opacity:0},whileInView:{opacity:1},viewport:{once:!0},transition:{duration:.5},children:"Let's discuss how we can help elevate your digital presence and connect with your audience."}),Object(u.jsxs)(ne,{href:"https://forms.gle/GSFowRYiJRvq2R7SA",target:"_blank",rel:"noopener noreferrer",initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.5,delay:.2},children:["Get in Touch ",Object(u.jsx)(b.a,{icon:g.e})]})]})]})},ce=i(10);const de=Object(d.d)(h.a.section)`
  position: relative;
  padding: ${e=>"small"===e.padding?`${e.theme.spacing.large} 0`:"medium"===e.padding?`${e.theme.spacing.xlarge} 0`:"large"===e.padding?`${e.theme.spacing.xxlarge} 0`:"none"===e.padding?"0":`${e.theme.spacing.xlarge} 0`};
  margin-top: ${e=>e.isFirstSection?"80px":"0"};
  background-color: ${e=>e.background||"transparent"};
  overflow: ${e=>e.overflow||"visible"};
  z-index: ${e=>e.zIndex||1};
  
  ${e=>e.gradient&&d.c`
    background: ${e.gradient};
  `}
  
  ${e=>e.fullWidth&&d.c`
    width: 100%;
    max-width: 100%;
    padding-left: 0;
    padding-right: 0;
  `}
  
  ${e=>e.withBorder&&d.c`
    border-top: 1px solid ${e.theme.colors.tertiary};
    border-bottom: 1px solid ${e.theme.colors.tertiary};
  `}
  
  ${e=>e.withShadow&&d.c`
    box-shadow: ${e.theme.shadows.medium};
  `}
  
  ${e=>e.rounded&&d.c`
    border-radius: ${e.theme.borderRadius.large};
  `}
`,le=d.d.div`
  width: 100%;
  max-width: ${e=>"small"===e.size?"800px":"medium"===e.size?"1000px":"large"===e.size?"1200px":"full"===e.size?"100%":"1200px"};
  margin: 0 auto;
  padding: 0 ${e=>e.theme.spacing.large};
  
  @media (max-width: ${e=>e.theme.breakpoints.mobile}) {
    padding: 0 ${e=>e.theme.spacing.medium};
  }
`,me=d.d.h2`
  font-size: ${e=>"small"===e.size?e.theme.fontSizes.xlarge:"medium"===e.size?e.theme.fontSizes.xxlarge:"large"===e.size?e.theme.fontSizes.huge:e.theme.fontSizes.xxlarge};
  margin-bottom: ${e=>e.theme.spacing.large};
  text-align: ${e=>e.align||"center"};
  
  ${e=>e.withGradient&&d.c`
    background: ${e.theme.gradients.primary};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  `}
  
  @media (max-width: ${e=>e.theme.breakpoints.mobile}) {
    font-size: ${e=>"small"===e.size?e.theme.fontSizes.large:"medium"===e.size?e.theme.fontSizes.xlarge:"large"===e.size?e.theme.fontSizes.xxlarge:e.theme.fontSizes.xlarge};
    margin-bottom: ${e=>e.theme.spacing.medium};
  }
`,he=d.d.p`
  font-size: ${e=>e.theme.fontSizes.large};
  text-align: ${e=>e.align||"center"};
  margin-bottom: ${e=>e.theme.spacing.xlarge};
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  opacity: 0.8;
  line-height: 1.6;
  
  @media (max-width: ${e=>e.theme.breakpoints.mobile}) {
    font-size: ${e=>e.theme.fontSizes.medium};
    margin-bottom: ${e=>e.theme.spacing.large};
  }
`,pe=d.d.div`
  margin-top: ${e=>e.hasHeader?e.theme.spacing.large:"0"};
`;var be=e=>{let{children:t,title:i,description:r,titleSize:o="medium",titleAlign:a="center",descriptionAlign:n="center",withGradientTitle:s=!0,containerSize:c="large",padding:d="medium",background:l,gradient:m,fullWidth:h=!1,withBorder:p=!1,withShadow:b=!1,rounded:g=!1,overflow:x,zIndex:j,isFirstSection:y=!1,animate:f=!0,initial:w={opacity:0,y:30},whileInView:v={opacity:1,y:0},viewport:O={once:!0,margin:"-100px"},transition:k={duration:.6},...$}=e;const z={padding:d,background:l,gradient:m,fullWidth:h,withBorder:p,withShadow:b,rounded:g,overflow:x,zIndex:j,isFirstSection:y,...f?{initial:w,whileInView:v,viewport:O,transition:k}:{},...$},S=i||r;return Object(u.jsx)(de,{...z,children:Object(u.jsxs)(le,{size:c,children:[i&&Object(u.jsx)(me,{size:o,align:a,withGradient:s,children:i}),r&&Object(u.jsx)(he,{align:n,children:r}),Object(u.jsx)(pe,{hasHeader:S,children:t})]})})};const ge=d.c`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-family: ${e=>e.theme.fonts.body};
  font-weight: ${e=>e.theme.fontWeights.semibold};
  font-size: ${e=>"large"===e.size?e.theme.fontSizes.large:"small"===e.size?e.theme.fontSizes.small:e.theme.fontSizes.medium};
  line-height: 1;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s ease;
  border: none;
  border-radius: ${e=>e.pill?e.theme.borderRadius.pill:e.theme.borderRadius.medium};
  padding: ${e=>"large"===e.size?"1rem 2.5rem":"small"===e.size?"0.5rem 1rem":"0.75rem 1.5rem"};
  width: ${e=>e.fullWidth?"100%":"auto"};
  position: relative;
  overflow: hidden;
  min-height: ${e=>"large"===e.size?"54px":"small"===e.size?"38px":"44px"};
  user-select: none;
  -webkit-tap-highlight-color: transparent;
  
  /* Accessibility focus styles */
  &:focus-visible {
    outline: 2px solid white;
    outline-offset: 2px;
    box-shadow: 0 0 0 4px rgba(0, 255, 136, 0.5);
  }
  
  /* Mobile-specific adjustments */
  @media (max-width: ${e=>e.theme.breakpoints.mobile}) {
    font-size: ${e=>"large"===e.size?e.theme.fontSizes.large:"small"===e.size?e.theme.fontSizes.small:e.theme.fontSizes.medium};
    padding: ${e=>"large"===e.size?"1.1rem 2.2rem":"small"===e.size?"0.6rem 1.2rem":"0.9rem 1.6rem"};
    min-width: ${e=>"large"===e.size?"160px":"small"===e.size?"80px":"120px"};
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
  
  svg {
    transition: transform 0.3s ease;
    font-size: ${e=>"large"===e.size?"1.2em":"1em"};
  }
  
  &:hover:not(:disabled) svg {
    transform: ${e=>"right"===e.iconPosition?"translateX(4px)":"left"===e.iconPosition?"translateX(-4px)":"scale(1.2)"};
  }
  
  /* Special handling for touch devices */
  @media (hover: none) {
    &:active:not(:disabled) {
      transform: scale(0.97);
    }
  }
`,ue=d.d.button`
  ${ge};
  background: ${e=>e.theme.gradients.primary};
  color: ${e=>e.theme.colors.lightText};
  box-shadow: ${e=>e.theme.shadows.primary};
  
  &:hover:not(:disabled) {
    transform: translateY(-3px);
    box-shadow: ${e=>e.theme.shadows.primaryHover};
  }
  
  &:active:not(:disabled) {
    transform: translateY(-1px);
    box-shadow: ${e=>e.theme.shadows.primary};
  }
  
  /* Mobile touch feedback */
  @media (hover: none) {
    &:active:not(:disabled) {
      background: ${e=>e.theme.gradients.hover};
    }
  }
`,xe=d.d.button`
  ${ge};
  background: transparent;
  color: ${e=>e.theme.colors.primary};
  border: 2px solid ${e=>e.theme.colors.primary};
  
  &:hover:not(:disabled) {
    background: rgba(0, 255, 136, 0.1);
    transform: translateY(-3px);
  }
  
  &:active:not(:disabled) {
    transform: translateY(-1px);
    background: rgba(0, 255, 136, 0.2);
  }
  
  /* Mobile touch feedback */
  @media (hover: none) {
    &:active:not(:disabled) {
      background: rgba(0, 255, 136, 0.15);
    }
  }
`,je=d.d.button`
  ${ge};
  background: transparent;
  color: ${e=>e.theme.colors.primary};
  padding: ${e=>"large"===e.size?"0.75rem 1.5rem":"small"===e.size?"0.25rem 0.5rem":"0.5rem 1rem"};
  
  &:hover:not(:disabled) {
    background: rgba(0, 255, 136, 0.1);
    transform: translateY(-3px);
  }
  
  &:active:not(:disabled) {
    transform: translateY(-1px);
    background: rgba(0, 255, 136, 0.15);
  }
  
  /* Mobile touch feedback */
  @media (hover: none) {
    &:active:not(:disabled) {
      background: rgba(0, 255, 136, 0.15);
    }
  }
`,ye=d.d.span`
  position: absolute;
  border-radius: 50%;
  transform: scale(0);
  animation: ripple 0.6s linear;
  background-color: rgba(255, 255, 255, 0.3);
  
  @keyframes ripple {
    to {
      transform: scale(4);
      opacity: 0;
    }
  }
`;var fe=e=>{let{children:t,variant:i="primary",size:r="medium",icon:a,iconPosition:n="right",pill:s=!1,as:d="button",to:l,href:m,fullWidth:h=!1,onClick:p,type:g="button",disabled:x=!1,ariaLabel:j,...y}=e;const[f,w]=o.a.useState(0),[v,O]=o.a.useState([]);o.a.useEffect((()=>{let e=null;return v.length>0&&(e=setTimeout((()=>{O([]),w(0)}),700)),()=>clearTimeout(e)}),[v.length]);const k="primary"===i?ue:"secondary"===i?xe:je,$={as:l?c.b:m?"a":d,to:l,href:m,size:r,pill:s,fullWidth:h,onClick:e=>{const t=e.currentTarget.getBoundingClientRect(),i=t.width>t.height?t.width:t.height,r=e.clientX-t.left-i/2,o=e.clientY-t.top-i/2,a={key:f,size:i,x:r,y:o};O([...v,a]),w(f+1),p&&p(e)},type:g,disabled:x,iconPosition:n,"aria-label":j,...y};return Object(u.jsxs)(k,{...$,children:[a&&"left"===n&&Object(u.jsx)(b.a,{icon:a}),t,a&&"right"===n&&Object(u.jsx)(b.a,{icon:a}),v.length>0&&v.map((e=>Object(u.jsx)(ye,{style:{top:e.y,left:e.x,width:e.size,height:e.size}},e.key)))]})};const we=d.d.main`
  overflow-x: hidden;
`,ve=d.d.div`
  text-align: center;
  margin-bottom: 3rem;
  
  h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
    background: ${e=>e.theme.gradients.primary};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  
  .subtitle {
    font-size: 1.5rem;
    opacity: 0.8;
    max-width: 800px;
    margin: 0 auto;
    line-height: 1.6;
  }
`,Oe=d.d.div`
  margin-bottom: 2rem;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: ${e=>e.theme.shadows.medium};
  background: ${e=>e.theme.colors.cardBg};
`,ke=d.d.button`
  width: 100%;
  padding: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${e=>e.theme.colors.cardBg};
  border: none;
  font-size: 1.2rem;
  font-weight: 600;
  cursor: pointer;
  color: ${e=>e.theme.colors.darkText};
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(0, 255, 136, 0.05);
  }
  
  svg {
    margin-right: 0.5rem;
    color: ${e=>e.theme.colors.primary};
  }
  
  .dropdown-icon {
    transition: transform 0.3s ease;
    transform: ${e=>e.isOpen?"rotate(180deg)":"rotate(0)"};
  }
`,$e=Object(d.d)(h.a.div)`
  overflow: hidden;
  background: ${e=>e.theme.colors.cardBg};
  padding: ${e=>e.isOpen?"1.5rem":"0 1.5rem"};
`,ze=d.d.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
  
  @media (max-width: ${e=>e.theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`,Se=d.d.div`
  background: ${e=>e.theme.colors.bodyBg};
  border-radius: 10px;
  overflow: hidden;
  box-shadow: ${e=>e.theme.shadows.small};
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: ${e=>e.theme.shadows.medium};
  }
  
  .video-container {
    position: relative;
    padding-top: ${e=>e.isVertical?"177.78%":"56.25%"};
    height: 0;
    overflow: hidden;
    
    iframe {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border: none;
    }
  }
`,Te=d.d.div`
  padding: 1.5rem;
  
  h3 {
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
    color: ${e=>e.theme.colors.primary};
  }
  
  p {
    font-size: 0.9rem;
    color: ${e=>e.theme.colors.darkText};
    opacity: 0.8;
    margin-bottom: 1rem;
  }
  
  .video-links {
    display: flex;
    align-items: center;
    gap: 1rem;
    
    a {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      color: ${e=>e.theme.colors.primary};
      text-decoration: none;
      font-size: 0.9rem;
      font-weight: 600;
      
      &:hover {
        text-decoration: underline;
        
        svg {
          transform: translateY(-2px);
        }
      }
      
      svg {
        transition: transform 0.3s ease;
      }
    }
  }
`,Ce=d.d.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
`,Fe=d.d.div`
  margin: 4rem 0;
`,Ae=d.d.h2`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  background: ${e=>e.theme.gradients.primary};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`,De=d.d.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  position: relative;
  
  &:before {
    content: '';
    position: absolute;
    top: 3.5rem;
    left: 10%;
    width: 80%;
    height: 4px;
    background: ${e=>e.theme.gradients.primary};
    z-index: 0;
  }
  
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    
    &:before {
      display: none;
    }
  }
  
  @media (max-width: ${e=>e.theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`,Be=Object(d.d)(h.a.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  position: relative;
  z-index: 1;
`,Ee=d.d.div`
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  background: ${e=>e.theme.gradients.primary};
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
  box-shadow: ${e=>e.theme.shadows.primary};
`,Ie=d.d.div`
  background: ${e=>e.theme.colors.cardBg};
  border-radius: 15px;
  padding: 2rem;
  width: 100%;
  box-shadow: ${e=>e.theme.shadows.medium};
  height: 100%;
  
  h3 {
    font-size: 1.3rem;
    margin-bottom: 1rem;
    color: ${e=>e.theme.colors.primary};
  }
  
  p {
    font-size: 1rem;
    color: ${e=>e.theme.colors.darkText};
    opacity: 0.8;
    line-height: 1.5;
  }
  
  svg {
    font-size: 2rem;
    margin-bottom: 1rem;
    color: ${e=>e.theme.colors.primaryLight};
  }
`;var Pe=function(){const[e,t]=Object(r.useState)(!1),[i,o]=Object(r.useState)(!1),a=[{number:1,title:"Upload Content",description:"Send us your raw footage and explain your vision for the final video",icon:g.A},{number:2,title:"Initial Edit",description:"We create a rough cut focusing on narrative flow and pacing",icon:g.v},{number:3,title:"Enhancements",description:"Add music, sound effects, color grading, and visual effects",icon:g.L},{number:4,title:"Final Delivery",description:"Receive your polished video ready for posting on any platform",icon:g.B}],n={hidden:{opacity:0,y:30},visible:e=>({opacity:1,y:0,transition:{delay:.2+.2*e,duration:.5}})};return Object(u.jsxs)(we,{children:[Object(u.jsxs)(be,{padding:"large",fullWidth:!1,initial:{opacity:0},animate:{opacity:1},transition:{duration:.4},isFirstSection:!0,children:[Object(u.jsxs)(ve,{children:[Object(u.jsx)(h.a.h1,{initial:{y:-50,opacity:0},animate:{y:0,opacity:1},transition:{delay:.1,duration:.4},children:"Professional Video Editing"}),Object(u.jsx)(h.a.p,{className:"subtitle",initial:{y:-30,opacity:0},animate:{y:0,opacity:1},transition:{delay:.2,duration:.4},children:"Transform your raw footage into engaging stories that captivate your audience"})]}),Object(u.jsxs)(h.a.div,{initial:{opacity:0,y:50},animate:{opacity:1,y:0},transition:{delay:.3,duration:.5},children:[Object(u.jsxs)(Oe,{children:[Object(u.jsxs)(ke,{isOpen:e,onClick:()=>{t(!e)},children:[Object(u.jsxs)("div",{children:[Object(u.jsx)(b.a,{icon:g.K})," Short Videos (9:16 Vertical)"]}),Object(u.jsx)(b.a,{icon:g.o,className:"dropdown-icon"})]}),Object(u.jsxs)($e,{initial:{height:0},animate:{height:e?"auto":0},transition:{duration:.3},isOpen:e,children:[Object(u.jsxs)(ze,{children:[Object(u.jsxs)(Se,{isVertical:!0,children:[Object(u.jsx)("div",{className:"video-container",children:Object(u.jsx)("iframe",{src:"https://www.youtube.com/embed/AIx9HQwKnwU?si=PV09ZSwkVpOcPnDy",title:"YouTube video player",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowFullScreen:!0})}),Object(u.jsxs)(Te,{children:[Object(u.jsx)("h3",{children:"Vedanta Demerger"}),Object(u.jsx)("p",{children:"Social Media Reel"})]})]}),Object(u.jsxs)(Se,{isVertical:!0,children:[Object(u.jsx)("div",{className:"video-container",children:Object(u.jsx)("iframe",{src:"https://www.youtube.com/embed/5nH1anDu8p0",title:"YouTube video player",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowFullScreen:!0})}),Object(u.jsxs)(Te,{children:[Object(u.jsx)("h3",{children:"Mahindra & Mahindra"}),Object(u.jsx)("p",{children:"Social Media Reel"})]})]}),Object(u.jsxs)(Se,{isVertical:!0,children:[Object(u.jsx)("div",{className:"video-container",children:Object(u.jsx)("iframe",{src:"https://www.youtube.com/embed/9zN0W9UKzSU?si=69SAY0AmMGa4IOCA",title:"YouTube video player",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowFullScreen:!0})}),Object(u.jsxs)(Te,{children:[Object(u.jsx)("h3",{children:"Steel Sector In Problem"}),Object(u.jsx)("p",{children:"Social Media Reel"})]})]}),Object(u.jsxs)(Se,{isVertical:!0,children:[Object(u.jsx)("div",{className:"video-container",children:Object(u.jsx)("iframe",{src:"https://www.youtube.com/embed/D-BdpP7TgD8?si=bKCrc2RxwBwrvIcd",title:"YouTube video player",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowFullScreen:!0})}),Object(u.jsxs)(Te,{children:[Object(u.jsx)("h3",{children:"DeepSeek"}),Object(u.jsx)("p",{children:"Social Media Reel"})]})]})]}),Object(u.jsx)(Ce,{children:Object(u.jsx)(fe,{as:"a",href:"https://www.instagram.com/yotproductions",target:"_blank",variant:"primary",icon:ce.e,iconPosition:"right",children:"See More on Instagram"})})]})]}),Object(u.jsxs)(Oe,{children:[Object(u.jsxs)(ke,{isOpen:i,onClick:()=>{o(!i)},children:[Object(u.jsxs)("div",{children:[Object(u.jsx)(b.a,{icon:g.db})," Long Videos (16:9 Horizontal)"]}),Object(u.jsx)(b.a,{icon:g.o,className:"dropdown-icon"})]}),Object(u.jsxs)($e,{initial:{height:0},animate:{height:i?"auto":0},transition:{duration:.3},isOpen:i,children:[Object(u.jsxs)(ze,{children:[Object(u.jsxs)(Se,{children:[Object(u.jsx)("div",{className:"video-container",children:Object(u.jsx)("iframe",{src:"https://www.youtube.com/embed/EiAeHMsA9Ok?si=mC04EhDRik9Gbt2s",title:"YouTube video player",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowFullScreen:!0})}),Object(u.jsxs)(Te,{children:[Object(u.jsx)("h3",{children:"Controversy Economics"}),Object(u.jsx)("div",{className:"video-links",children:Object(u.jsxs)("a",{href:"https://youtu.be/EiAeHMsA9Ok?si=AtEEf_TM_Wexn0pw",target:"_blank",rel:"noreferrer",children:["Watch on YouTube ",Object(u.jsx)(b.a,{icon:ce.n})]})})]})]}),Object(u.jsxs)(Se,{children:[Object(u.jsx)("div",{className:"video-container",children:Object(u.jsx)("iframe",{src:"https://www.youtube-nocookie.com/embed/yEw71H1dvM0?si=gix2JBDiHybe2AYO",title:"YouTube video player",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowFullScreen:!0})}),Object(u.jsxs)(Te,{children:[Object(u.jsx)("h3",{children:"Steel War"}),Object(u.jsx)("div",{className:"video-links",children:Object(u.jsxs)("a",{href:"https://youtu.be/yEw71H1dvM0?si=KP_w7X3qqjJgoyeh",target:"_blank",rel:"noreferrer",children:["Watch on YouTube ",Object(u.jsx)(b.a,{icon:ce.n})]})})]})]}),Object(u.jsxs)(Se,{children:[Object(u.jsx)("div",{className:"video-container",children:Object(u.jsx)("iframe",{src:"https://www.youtube-nocookie.com/embed/KUYbNjFSUUw?si=DQX-h8PY1PqrGejW",title:"YouTube video player",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowFullScreen:!0})}),Object(u.jsxs)(Te,{children:[Object(u.jsx)("h3",{children:"DeepSeek Revolution"}),Object(u.jsx)("div",{className:"video-links",children:Object(u.jsxs)("a",{href:"https://youtu.be/KUYbNjFSUUw?si=XbqPEL7vE2Qn5fcB",target:"_blank",rel:"noreferrer",children:["Watch on YouTube ",Object(u.jsx)(b.a,{icon:ce.n})]})})]})]}),Object(u.jsxs)(Se,{children:[Object(u.jsx)("div",{className:"video-container",children:Object(u.jsx)("iframe",{src:"https://www.youtube.com/embed/UuEfnXsv04U?si=yMtAANN4W1eAczSX",title:"YouTube video player",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowFullScreen:!0})}),Object(u.jsxs)(Te,{children:[Object(u.jsx)("h3",{children:"Cement War"}),Object(u.jsx)("div",{className:"video-links",children:Object(u.jsxs)("a",{href:"https://youtu.be/UuEfnXsv04U?si=7EwwbDWQPDuaO0j7",target:"_blank",rel:"noreferrer",children:["Watch on YouTube ",Object(u.jsx)(b.a,{icon:ce.n})]})})]})]}),Object(u.jsxs)(Se,{children:[Object(u.jsx)("div",{className:"video-container",children:Object(u.jsx)("iframe",{src:"https://www.youtube-nocookie.com/embed/R5w1x2meDhY?si=m069Zz1TSVU9QRlH",title:"YouTube video player",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowFullScreen:!0})}),Object(u.jsxs)(Te,{children:[Object(u.jsx)("h3",{children:"Mahindra VS Tata Motors"}),Object(u.jsx)("div",{className:"video-links",children:Object(u.jsxs)("a",{href:"https://youtu.be/R5w1x2meDhY?si=eQwc6v8krekSyjii",target:"_blank",rel:"noreferrer",children:["Watch on YouTube ",Object(u.jsx)(b.a,{icon:ce.n})]})})]})]}),Object(u.jsxs)(Se,{children:[Object(u.jsx)("div",{className:"video-container",children:Object(u.jsx)("iframe",{src:"https://www.youtube.com/embed/07B0oACsaqU?si=vn1-z9C3lBG4Q1Sw",title:"YouTube video player",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowFullScreen:!0})}),Object(u.jsxs)(Te,{children:[Object(u.jsx)("h3",{children:"BlinkIt Case Study"}),Object(u.jsx)("div",{className:"video-links",children:Object(u.jsxs)("a",{href:"https://youtu.be/07B0oACsaqU?si=kSiAa8QTlu9EXcG1",target:"_blank",rel:"noreferrer",children:["Watch on YouTube ",Object(u.jsx)(b.a,{icon:ce.n})]})})]})]}),Object(u.jsxs)(Se,{children:[Object(u.jsx)("div",{className:"video-container",children:Object(u.jsx)("iframe",{src:"https://www.youtube.com/embed/utLGfc8NLTc?si=bPgRHPtxEetWfeLS",title:"YouTube video player",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowFullScreen:!0})}),Object(u.jsxs)(Te,{children:[Object(u.jsx)("h3",{children:"Why Ola is Having Problem"}),Object(u.jsx)("div",{className:"video-links",children:Object(u.jsxs)("a",{href:"https://youtu.be/utLGfc8NLTc?si=ntGUWfd8dhTqsTyv",target:"_blank",rel:"noreferrer",children:["Watch on YouTube ",Object(u.jsx)(b.a,{icon:ce.n})]})})]})]})]}),Object(u.jsx)(Ce,{children:Object(u.jsx)(fe,{as:"a",href:"https://www.youtube.com/@moneypandits",target:"_blank",variant:"primary",icon:ce.n,iconPosition:"right",children:"See More on YouTube"})})]})]}),Object(u.jsxs)(Fe,{children:[Object(u.jsx)(Ae,{children:"Our Video Editing Workflow"}),Object(u.jsx)(De,{children:a.map(((e,t)=>Object(u.jsxs)(Be,{custom:t,initial:"hidden",animate:"visible",variants:n,children:[Object(u.jsx)(Ee,{children:e.number}),Object(u.jsxs)(Ie,{children:[Object(u.jsx)(b.a,{icon:e.icon}),Object(u.jsx)("h3",{children:e.title}),Object(u.jsx)("p",{children:e.description})]})]},t)))})]})]})]}),Object(u.jsx)(be,{title:"Ready to elevate your video content?",description:"Whether you need short-form videos for social media or long-form content for your YouTube channel, our professional editing services will help you stand out and engage your audience.",background:e=>e.theme.colors.cardBg,rounded:!0,withShadow:!0,padding:"medium",containerSize:"medium",initial:{opacity:0,y:50},animate:{opacity:1,y:0},transition:{delay:.4,duration:.5},children:Object(u.jsx)(Ce,{children:Object(u.jsx)(fe,{as:"a",href:"https://docs.google.com/forms/d/e/1FAIpQLSdZGSMh_pkPkrPriuXcuAcjUenLnuVlgRz8kjK2MxfNuxkdxQ/viewform?usp=sf_link",target:"_blank",variant:"primary",size:"large",icon:g.e,pill:!0,children:"Get in Touch"})})})]})};const Ye=d.d.main`
  overflow-x: hidden;
`,We=d.d.div`
  text-align: center;
  margin-bottom: 3rem;
  
  h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
    background: ${e=>e.theme.gradients.primary};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  
  .subtitle {
    font-size: 1.5rem;
    opacity: 0.8;
    max-width: 800px;
    margin: 0 auto;
    line-height: 1.6;
  }
`,Re=d.d.div`
  margin-bottom: 2rem;
`,Me=d.d.button`
  width: 100%;
  padding: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${e=>e.theme.colors.cardBg};
  border: none;
  border-radius: 10px 10px ${e=>e.isOpen?"0 0":"10px 10px"};
  font-size: 1.2rem;
  font-weight: 600;
  cursor: pointer;
  color: ${e=>e.theme.colors.darkText};
  transition: all 0.3s ease;
  box-shadow: ${e=>e.theme.shadows.medium};
  
  &:hover {
    background: rgba(0, 255, 136, 0.05);
  }
  
  svg {
    margin-right: 0.5rem;
    color: ${e=>e.theme.colors.primary};
    
    &.dropdown-icon {
      margin-right: 0;
      margin-left: 0.5rem;
      transition: transform 0.3s ease;
      transform: ${e=>e.isOpen?"rotate(180deg)":"rotate(0)"};
    }
  }
`,Le=Object(d.d)(h.a.div)`
  overflow: hidden;
  background: ${e=>e.theme.colors.cardBg};
  border-radius: 0 0 10px 10px;
  box-shadow: ${e=>e.theme.shadows.medium};
  padding: ${e=>e.isOpen?"1.5rem":"0 1.5rem"};
`,Ne=d.d.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 1.5rem;
  
  @media (max-width: ${e=>e.theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`,Ue=d.d.div`
  position: relative;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: ${e=>e.theme.shadows.small};
  cursor: pointer;
  aspect-ratio: 1 / 1;
  background-color: ${e=>e.theme.colors.cardBgDark};
  
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    transition: transform 0.5s ease;
    padding: 0.5rem;
  }
  
  &:hover {
    img {
      transform: scale(1.05);
    }
    
    .design-overlay {
      opacity: 1;
    }
  }
`,qe=d.d.div`
  position: relative;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: ${e=>e.theme.shadows.small};
  cursor: pointer;
  aspect-ratio: 9 / 16;
  background-color: ${e=>e.theme.colors.cardBgDark};
  
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    transition: transform 0.5s ease;
    padding: 0.5rem;
  }
  
  &:hover {
    img {
      transform: scale(1.05);
    }
    
    .design-overlay {
      opacity: 1;
    }
  }
`,He=d.d.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.3) 60%, rgba(0,0,0,0) 100%);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 1.5rem;
  opacity: 0;
  transition: opacity 0.3s ease;
  
  h3 {
    color: white;
    margin-bottom: 0.5rem;
    font-size: 1.25rem;
  }
  
  p {
    color: rgba(255, 255, 255, 0.8);
    font-size: 0.9rem;
    margin: 0;
  }
`,Ve=d.d.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
`,Ge=Object(d.d)(h.a.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.9);
  z-index: ${e=>e.theme.zIndices.modal};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
`,Xe=Object(d.d)(h.a.div)`
  max-width: 90%;
  max-height: 90%;
  position: relative;
  
  img {
    max-width: 100%;
    max-height: 80vh;
    object-fit: contain;
    border-radius: 8px;
  }
`,_e=d.d.button`
  position: absolute;
  top: -40px;
  right: 0;
  background: none;
  border: none;
  color: white;
  font-size: 2rem;
  cursor: pointer;
  z-index: ${e=>e.theme.zIndices.modal+1};
  transition: all 0.3s ease;
  
  &:hover {
    color: ${e=>e.theme.colors.primary};
    transform: rotate(90deg);
  }
`,Je=d.d.div`
  color: white;
  margin-top: 1rem;
  text-align: center;
  
  h3 {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
  }
  
  p {
    font-size: 1rem;
    color: rgba(255, 255, 255, 0.8);
  }
`,Qe=d.d.div`
  margin: 4rem 0;
`,Ke=d.d.h2`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  background: ${e=>e.theme.gradients.primary};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`,Ze=d.d.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  position: relative;
  
  &:before {
    content: '';
    position: absolute;
    top: 3.5rem;
    left: 10%;
    width: 80%;
    height: 4px;
    background: ${e=>e.theme.gradients.primary};
    z-index: 0;
  }
  
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    
    &:before {
      display: none;
    }
  }
  
  @media (max-width: ${e=>e.theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`,et=Object(d.d)(h.a.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  position: relative;
  z-index: 1;
`,tt=d.d.div`
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  background: ${e=>e.theme.gradients.primary};
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
  box-shadow: ${e=>e.theme.shadows.primary};
`,it=d.d.div`
  background: ${e=>e.theme.colors.cardBg};
  border-radius: 15px;
  padding: 2rem;
  width: 100%;
  box-shadow: ${e=>e.theme.shadows.medium};
  height: 100%;
  
  h3 {
    font-size: 1.3rem;
    margin-bottom: 1rem;
    color: ${e=>e.theme.colors.primary};
  }
  
  p {
    font-size: 1rem;
    color: ${e=>e.theme.colors.darkText};
    opacity: 0.8;
    line-height: 1.5;
  }
  
  svg {
    font-size: 2rem;
    margin-bottom: 1rem;
    color: ${e=>e.theme.colors.primaryLight};
  }
`;var rt=function(){const[e,t]=Object(r.useState)(!1),[i,o]=Object(r.useState)(!1),[a,n]=Object(r.useState)(null),s=e=>{n(e),document.body.style.overflow="hidden"},c=()=>{n(null),document.body.style.overflow="auto"},d=[{number:1,title:"Discovery",description:"We learn about your brand values, audience, and design goals",icon:g.i},{number:2,title:"Concept Creation",description:"Develop initial design concepts based on your requirements",icon:g.N},{number:3,title:"Refinement",description:"Refine and polish the chosen design concept with your feedback",icon:g.F},{number:4,title:"Finalization",description:"Deliver final designs in all formats required for your needs",icon:g.n}],l={hidden:{opacity:0,y:30},visible:e=>({opacity:1,y:0,transition:{delay:.2+.2*e,duration:.5}})};return Object(u.jsxs)(Ye,{children:[Object(u.jsxs)(be,{padding:"large",fullWidth:!1,initial:{opacity:0},animate:{opacity:1},transition:{duration:.4},isFirstSection:!0,children:[Object(u.jsxs)(We,{children:[Object(u.jsx)(h.a.h1,{initial:{y:-50,opacity:0},animate:{y:0,opacity:1},transition:{delay:.1,duration:.4},children:"Creative Design Solutions"}),Object(u.jsx)(h.a.p,{className:"subtitle",initial:{y:-30,opacity:0},animate:{y:0,opacity:1},transition:{delay:.2,duration:.4},children:"Crafting visual identities that captivate and convert"})]}),Object(u.jsxs)(h.a.div,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{delay:.3,duration:.5},children:[Object(u.jsxs)(Re,{children:[Object(u.jsxs)(Me,{isOpen:e,onClick:()=>{t(!e)},children:[Object(u.jsxs)("div",{children:[Object(u.jsx)(b.a,{icon:g.hb})," Designer's Portfolio ( For Brands )"]}),Object(u.jsx)(b.a,{icon:g.o,className:"dropdown-icon"})]}),Object(u.jsx)(Le,{initial:{height:0},animate:{height:e?"auto":0},transition:{duration:.3},isOpen:e,children:Object(u.jsx)(Ne,{children:[{src:"/assets/images/dd1.png",alt:"Brand Identity",title:"Jan Bima",description:"Logo & Stationery Design"},{src:"/assets/images/dd5.png",alt:"Brand Identity",title:"LODHA",description:"Industrial Park Map"},{src:"/assets/images/dd4.png",alt:"Brand Identity",title:"Asian Paint",description:"Paint Ezzy Bot"},{src:"/assets/images/dd6.png",alt:"Brand Identity",title:"Asian Paint",description:"Ezzy Bot Design"}].map(((e,t)=>Object(u.jsxs)(Ue,{onClick:()=>s(e),children:[Object(u.jsx)("img",{src:e.src,alt:e.alt}),Object(u.jsxs)(He,{className:"design-overlay",children:[Object(u.jsx)("h3",{children:e.title}),Object(u.jsx)("p",{children:e.description})]})]},t)))})})]}),Object(u.jsxs)(Re,{children:[Object(u.jsxs)(Me,{isOpen:i,onClick:()=>{o(!i)},children:[Object(u.jsxs)("div",{children:[Object(u.jsx)(b.a,{icon:g.M})," Design Portfolio ( For Socials )"]}),Object(u.jsx)(b.a,{icon:g.o,className:"dropdown-icon"})]}),Object(u.jsx)(Le,{initial:{height:0},animate:{height:i?"auto":0},transition:{duration:.3},isOpen:i,children:Object(u.jsx)(Ne,{children:[{src:"/assets/images/d1.png",alt:"Social Media Design",title:"Brand Identity",description:"Logo & Stationery Design"},{src:"/assets/images/d2.png",alt:"Social Media Design",title:"Brand Identity",description:"Logo & Stationery Design"},{src:"/assets/images/d4.png",alt:"Social Media Design",title:"Brand Identity",description:"Logo & Stationery Design"},{src:"/assets/images/d6.png",alt:"Social Media Design",title:"Brand Identity",description:"Logo & Stationery Design"},{src:"/assets/images/d8.png",alt:"Social Media Design",title:"Brand Identity",description:"Logo & Stationery Design"},{src:"/assets/images/d3.png",alt:"Social Media Design",title:"Brand Identity",description:"Logo & Stationery Design"}].map(((e,t)=>Object(u.jsxs)(qe,{onClick:()=>s(e),children:[Object(u.jsx)("img",{src:e.src,alt:e.alt}),Object(u.jsxs)(He,{className:"design-overlay",children:[Object(u.jsx)("h3",{children:e.title}),Object(u.jsx)("p",{children:e.description})]})]},t)))})})]}),Object(u.jsxs)(Qe,{children:[Object(u.jsx)(Ke,{children:"Our Design Process"}),Object(u.jsx)(Ze,{children:d.map(((e,t)=>Object(u.jsxs)(et,{custom:t,initial:"hidden",animate:"visible",variants:l,children:[Object(u.jsx)(tt,{children:e.number}),Object(u.jsxs)(it,{children:[Object(u.jsx)(b.a,{icon:e.icon}),Object(u.jsx)("h3",{children:e.title}),Object(u.jsx)("p",{children:e.description})]})]},t)))})]})]})]}),Object(u.jsx)(be,{title:"Want designs that leave an impact?",description:"Let's work together to create visuals that effectively communicate your brand message and captivate your audience.",background:e=>e.theme.colors.cardBg,rounded:!0,withShadow:!0,padding:"medium",containerSize:"medium",initial:{opacity:0,y:50},animate:{opacity:1,y:0},transition:{delay:.4,duration:.5},children:Object(u.jsx)(Ve,{children:Object(u.jsx)(fe,{as:"a",href:"https://forms.gle/GSFowRYiJRvq2R7SA",target:"_blank",variant:"primary",size:"large",icon:g.e,pill:!0,children:"Get in Touch"})})}),Object(u.jsx)(p.a,{children:a&&Object(u.jsx)(Ge,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},onClick:c,children:Object(u.jsxs)(Xe,{initial:{scale:.8,opacity:0},animate:{scale:1,opacity:1},exit:{scale:.8,opacity:0},transition:{type:"spring",damping:25},onClick:e=>e.stopPropagation(),children:[Object(u.jsx)(_e,{onClick:c,children:Object(u.jsx)(b.a,{icon:g.bb})}),Object(u.jsx)("img",{src:a.src,alt:a.alt}),Object(u.jsxs)(Je,{children:[Object(u.jsx)("h3",{children:a.title}),Object(u.jsx)("p",{children:a.description})]})]})})})]})};const ot=d.d.main`
  overflow-x: hidden;
`,at=d.d.div`
  text-align: center;
  margin-bottom: 3rem;
  
  h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
    background: ${e=>e.theme.gradients.primary};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  
  .subtitle {
    font-size: 1.5rem;
    opacity: 0.8;
    max-width: 800px;
    margin: 0 auto;
    line-height: 1.6;
  }
`,nt=d.d.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1.5rem;
  margin-bottom: 4rem;
  
  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: ${e=>e.theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`,st=Object(d.d)(h.a.div)`
  background: ${e=>e.theme.colors.cardBg};
  border-radius: 15px;
  padding: 2rem 1rem;
  text-align: center;
  box-shadow: ${e=>e.theme.shadows.medium};
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  position: relative;
  overflow: hidden;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 5px;
    background: ${e=>e.theme.gradients.primary};
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.3s ease;
  }
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: ${e=>e.theme.shadows.large};
    
    &:before {
      transform: scaleX(1);
    }
    
    svg {
      color: ${e=>e.theme.colors.primary};
      transform: scale(1.1);
    }
  }
  
  svg {
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
    color: ${e=>e.theme.colors.primaryLight};
    transition: all 0.3s ease;
  }
  
  h3 {
    font-size: 1.25rem;
    margin-bottom: 1rem;
    color: ${e=>e.theme.colors.primary};
  }
  
  p {
    font-size: 0.9rem;
    color: ${e=>e.theme.colors.darkText};
    opacity: 0.8;
    line-height: 1.5;
  }
`,ct=Object(d.d)(h.a.div)`
  background: ${e=>e.theme.colors.cardBg};
  border-radius: 15px;
  padding: 3rem 2rem;
  margin-bottom: 4rem;
  text-align: center;
  box-shadow: ${e=>e.theme.shadows.medium};
  
  svg {
    font-size: 3rem;
    margin-bottom: 1.5rem;
    color: ${e=>e.theme.colors.primary};
  }
  
  h2 {
    font-size: 2rem;
    margin-bottom: 1.5rem;
    background: ${e=>e.theme.gradients.primary};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  
  p {
    font-size: 1.2rem;
    max-width: 800px;
    margin: 0 auto;
    opacity: 0.8;
    line-height: 1.6;
  }
`,dt=d.d.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
`,lt=d.d.div`
  margin: 4rem 0;
`,mt=d.d.h2`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  background: ${e=>e.theme.gradients.primary};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`,ht=d.d.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  position: relative;
  
  &:before {
    content: '';
    position: absolute;
    top: 3.5rem;
    left: 10%;
    width: 80%;
    height: 4px;
    background: ${e=>e.theme.gradients.primary};
    z-index: 0;
  }
  
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    
    &:before {
      display: none;
    }
  }
  
  @media (max-width: ${e=>e.theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`,pt=Object(d.d)(h.a.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  position: relative;
  z-index: 1;
`,bt=d.d.div`
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  background: ${e=>e.theme.gradients.primary};
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
  box-shadow: ${e=>e.theme.shadows.primary};
`,gt=d.d.div`
  background: ${e=>e.theme.colors.cardBg};
  border-radius: 15px;
  padding: 2rem;
  width: 100%;
  box-shadow: ${e=>e.theme.shadows.medium};
  height: 100%;
  
  h3 {
    font-size: 1.3rem;
    margin-bottom: 1rem;
    color: ${e=>e.theme.colors.primary};
  }
  
  p {
    font-size: 1rem;
    color: ${e=>e.theme.colors.darkText};
    opacity: 0.8;
    line-height: 1.5;
  }
  
  svg {
    font-size: 2rem;
    margin-bottom: 1rem;
    color: ${e=>e.theme.colors.primaryLight};
  }
`,ut=d.d.div`
  margin: 4rem 0;
`,xt=d.d.h2`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  background: ${e=>e.theme.gradients.primary};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`,jt=d.d.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: ${e=>e.theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`,yt=Object(d.d)(h.a.div)`
  background: ${e=>e.theme.colors.cardBg};
  border-radius: 15px;
  padding: 2rem;
  text-align: center;
  box-shadow: ${e=>e.theme.shadows.medium};
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: ${e=>e.theme.shadows.large};
  }
  
  svg {
    font-size: 3.5rem;
    margin-bottom: 1.5rem;
    color: ${e=>e.iconColor||e.theme.colors.primary};
  }
  
  h3 {
    font-size: 1.3rem;
    margin-bottom: 1rem;
    color: ${e=>e.theme.colors.primary};
  }
  
  ul {
    list-style: none;
    text-align: left;
    margin-top: 1.5rem;
    padding: 0;
  }
  
  li {
    display: flex;
    align-items: center;
    margin-bottom: 0.5rem;
    color: ${e=>e.theme.colors.darkText};
    font-size: 0.9rem;
    
    svg {
      font-size: 1rem;
      margin-right: 0.5rem;
      margin-bottom: 0;
      color: ${e=>e.theme.colors.primary};
    }
  }
`;var ft=function(){const e=[{icon:g.g,title:"Business Websites",description:"Professional online presence with lead generation features"},{icon:g.F,title:"Portfolio Websites",description:"Showcase your work with stunning visual displays"},{icon:g.W,title:"E-commerce Stores",description:"Secure online shopping experiences with payment integration"},{icon:g.R,title:"Landing Pages",description:"High-converting pages for campaigns and product launches"},{icon:g.q,title:"Custom Solutions",description:"Tailored web applications for unique business needs"}],t=[{number:1,title:"Discovery",description:"We learn about your business goals and target audience",icon:g.H},{number:2,title:"Planning",description:"Develop sitemap, wireframes, and content strategy",icon:g.y},{number:3,title:"Development",description:"Build a responsive, SEO-friendly website with modern technology",icon:g.q},{number:4,title:"Launch & Support",description:"Deploy your site and provide ongoing maintenance and updates",icon:g.R}],i=[{icon:ce.d,title:"Frontend Development",iconColor:"#E44D26",features:["Responsive Web Design","CSS Animations","Interactive Elements","Accessibility Compliance"]},{icon:ce.m,title:"Content Management",iconColor:"#21759B",features:["Custom Themes","Plugin Integration","E-commerce","User-friendly Admin"]},{icon:ce.i,title:"Modern Frameworks",iconColor:"#61DAFB",features:["Single Page Applications","Component-Based Architecture","State Management","Performance Optimization"]},{icon:ce.g,title:"Backend Development",iconColor:"#539E43",features:["API Integration","Database Design","Security Implementation","Scalable Architecture"]}],r={hidden:{y:50,opacity:0},visible:e=>({y:0,opacity:1,transition:{delay:.3+.1*e,duration:.5}})},o={hidden:{opacity:0,y:30},visible:e=>({opacity:1,y:0,transition:{delay:.2+.2*e,duration:.5}})},a={hidden:{opacity:0,y:20},visible:e=>({opacity:1,y:0,transition:{delay:.4+.15*e,duration:.5}})};return Object(u.jsxs)(ot,{children:[Object(u.jsxs)(be,{padding:"large",fullWidth:!1,initial:{opacity:0},animate:{opacity:1},transition:{duration:.4},isFirstSection:!0,children:[Object(u.jsxs)(at,{children:[Object(u.jsx)(h.a.h1,{initial:{y:-50,opacity:0},animate:{y:0,opacity:1},transition:{delay:.1,duration:.4},children:"Website Development & Support"}),Object(u.jsx)(h.a.p,{className:"subtitle",initial:{y:-30,opacity:0},animate:{y:0,opacity:1},transition:{delay:.2,duration:.4},children:"Building digital experiences that drive results"})]}),Object(u.jsx)(nt,{children:e.map(((e,t)=>Object(u.jsxs)(st,{custom:t,initial:"hidden",animate:"visible",variants:r,children:[Object(u.jsx)(b.a,{icon:e.icon}),Object(u.jsx)("h3",{children:e.title}),Object(u.jsx)("p",{children:e.description})]},t)))}),Object(u.jsxs)(lt,{children:[Object(u.jsx)(mt,{children:"Our Development Process"}),Object(u.jsx)(ht,{children:t.map(((e,t)=>Object(u.jsxs)(pt,{custom:t,initial:"hidden",animate:"visible",variants:o,children:[Object(u.jsx)(bt,{children:e.number}),Object(u.jsxs)(gt,{children:[Object(u.jsx)(b.a,{icon:e.icon}),Object(u.jsx)("h3",{children:e.title}),Object(u.jsx)("p",{children:e.description})]})]},t)))})]}),Object(u.jsxs)(ut,{children:[Object(u.jsx)(xt,{children:"Technologies We Use"}),Object(u.jsx)(jt,{children:i.map(((e,t)=>Object(u.jsxs)(yt,{custom:t,initial:"hidden",animate:"visible",variants:a,iconColor:e.iconColor,children:[Object(u.jsx)(b.a,{icon:e.icon}),Object(u.jsx)("h3",{children:e.title}),Object(u.jsx)("ul",{children:e.features.map(((e,t)=>Object(u.jsxs)("li",{children:[Object(u.jsx)(b.a,{icon:g.n}),e]},t)))})]},t)))})]}),Object(u.jsxs)(ct,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{delay:.8,duration:.5},children:[Object(u.jsx)(b.a,{icon:g.E}),Object(u.jsx)("h2",{children:"Ready to establish your digital presence?"}),Object(u.jsx)("p",{children:"Let's create a website that truly represents your brand and drives growth"})]})]}),Object(u.jsx)(be,{title:"For tailored solutions, contact us below",background:e=>e.theme.colors.cardBg,rounded:!0,withShadow:!0,padding:"medium",containerSize:"medium",initial:{opacity:0,y:50},animate:{opacity:1,y:0},transition:{delay:1,duration:.5},children:Object(u.jsx)(dt,{children:Object(u.jsx)(fe,{as:"a",href:"https://forms.gle/GSFowRYiJRvq2R7SA",target:"_blank",variant:"primary",size:"large",icon:g.e,pill:!0,children:"Get in Touch"})})})]})};const wt=d.d.main`
  overflow-x: hidden;
`,vt=d.d.div`
  text-align: center;
  margin-bottom: 3rem;
  
  h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
    background: ${e=>e.theme.gradients.primary};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  
  .subtitle {
    font-size: 1.5rem;
    opacity: 0.8;
    max-width: 800px;
    margin: 0 auto;
    line-height: 1.6;
  }
`,Ot=d.d.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin: 3rem 0;
  
  @media (max-width: ${e=>e.theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`,kt=Object(d.d)(h.a.div)`
  background: ${e=>e.theme.colors.cardBg};
  border-radius: 15px;
  padding: 2.5rem 2rem;
  text-align: center;
  box-shadow: ${e=>e.theme.shadows.medium};
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: ${e=>e.theme.shadows.large};
    
    svg {
      color: ${e=>e.theme.colors.primary};
      transform: scale(1.1);
    }
  }
  
  svg {
    font-size: 3rem;
    margin-bottom: 1.5rem;
    color: ${e=>e.theme.colors.primaryLight};
    transition: all 0.3s ease;
  }
  
  h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: ${e=>e.theme.colors.primary};
  }
  
  p {
    font-size: 1.1rem;
    color: ${e=>e.theme.colors.darkText};
    opacity: 0.8;
    line-height: 1.5;
  }
`,$t=Object(d.d)(h.a.div)`
  background: ${e=>e.theme.colors.cardBg};
  border-radius: 15px;
  padding: 3rem 2rem;
  margin-bottom: 4rem;
  text-align: center;
  box-shadow: ${e=>e.theme.shadows.medium};
  
  svg {
    font-size: 3rem;
    margin-bottom: 1.5rem;
    color: ${e=>e.theme.colors.primary};
  }
  
  h2 {
    font-size: 2rem;
    margin-bottom: 1.5rem;
    background: ${e=>e.theme.gradients.primary};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  
  p {
    font-size: 1.2rem;
    max-width: 800px;
    margin: 0 auto;
    opacity: 0.8;
    line-height: 1.6;
  }
`,zt=d.d.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-top: 2rem;
  
  @media (max-width: ${e=>e.theme.breakpoints.mobile}) {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
`,St=d.d.div`
  margin: 4rem 0;
`,Tt=d.d.h2`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  background: ${e=>e.theme.gradients.primary};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`,Ct=d.d.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  position: relative;
  
  &:before {
    content: '';
    position: absolute;
    top: 3.5rem;
    left: 10%;
    width: 80%;
    height: 4px;
    background: ${e=>e.theme.gradients.primary};
    z-index: 0;
  }
  
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    
    &:before {
      display: none;
    }
  }
  
  @media (max-width: ${e=>e.theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`,Ft=Object(d.d)(h.a.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  position: relative;
  z-index: 1;
`,At=d.d.div`
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  background: ${e=>e.theme.gradients.primary};
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
  box-shadow: ${e=>e.theme.shadows.primary};
`,Dt=d.d.div`
  background: ${e=>e.theme.colors.cardBg};
  border-radius: 15px;
  padding: 2rem;
  width: 100%;
  box-shadow: ${e=>e.theme.shadows.medium};
  height: 100%;
  
  h3 {
    font-size: 1.3rem;
    margin-bottom: 1rem;
    color: ${e=>e.theme.colors.primary};
  }
  
  p {
    font-size: 1rem;
    color: ${e=>e.theme.colors.darkText};
    opacity: 0.8;
    line-height: 1.5;
  }
  
  svg {
    font-size: 2rem;
    margin-bottom: 1rem;
    color: ${e=>e.theme.colors.primaryLight};
  }
`,Bt=[{icon:g.l,title:"Boost Engagement",description:"Leverage creator authenticity to drive meaningful interactions"},{icon:g.gb,title:"Expand Reach",description:"Access established audiences through trusted creators"},{icon:g.u,title:"Increase Conversions",description:"Turn creator influence into measurable sales growth"}],Et=[{number:1,title:"Identify Goals",description:"Define your brand objectives and target audience demographics",icon:g.S},{number:2,title:"Match Creators",description:"We pair you with creators who align with your brand values",icon:g.gb},{number:3,title:"Collaborate",description:"Develop campaign briefs and coordinate content creation",icon:g.s},{number:4,title:"Measure Results",description:"Track engagement, conversions, and ROI of creator campaigns",icon:g.k}];var It=function(){const e={hidden:{opacity:0,y:30},visible:e=>({opacity:1,y:0,transition:{delay:.3+.1*e,duration:.5}})},t={hidden:{opacity:0,y:30},visible:e=>({opacity:1,y:0,transition:{delay:.2+.2*e,duration:.5}})};return Object(u.jsxs)(wt,{children:[Object(u.jsxs)(be,{padding:"large",fullWidth:!1,initial:{opacity:0},animate:{opacity:1},transition:{duration:.4},isFirstSection:!0,children:[Object(u.jsxs)(vt,{children:[Object(u.jsx)(h.a.h1,{initial:{y:-50,opacity:0},animate:{y:0,opacity:1},transition:{delay:.1,duration:.4},children:"Amplify Your Brand Through Creator Collaborations"}),Object(u.jsx)(h.a.p,{className:"subtitle",initial:{y:-30,opacity:0},animate:{y:0,opacity:1},transition:{delay:.2,duration:.4},children:"Bridge your brand with authentic voices that resonate with your target audience"})]}),Object(u.jsx)(Ot,{children:Bt.map(((t,i)=>Object(u.jsxs)(kt,{custom:i,initial:"hidden",animate:"visible",variants:e,children:[Object(u.jsx)(b.a,{icon:t.icon}),Object(u.jsx)("h3",{children:t.title}),Object(u.jsx)("p",{children:t.description})]},i)))}),Object(u.jsxs)($t,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{delay:.8,duration:.5},children:[Object(u.jsx)(b.a,{icon:g.E}),Object(u.jsx)("h2",{children:"Ready to elevate your brand's social presence?"}),Object(u.jsx)("p",{children:"Let's connect you with the perfect creators for your target audience"})]}),Object(u.jsxs)(St,{children:[Object(u.jsx)(Tt,{children:"Our Approach"}),Object(u.jsx)(Ct,{children:Et.map(((e,i)=>Object(u.jsxs)(Ft,{custom:i,initial:"hidden",animate:"visible",variants:t,children:[Object(u.jsx)(At,{children:e.number}),Object(u.jsxs)(Dt,{children:[Object(u.jsx)(b.a,{icon:e.icon}),Object(u.jsx)("h3",{children:e.title}),Object(u.jsx)("p",{children:e.description})]})]},i)))})]})]}),Object(u.jsx)(be,{title:"Enhance your brand presence on social media!",description:"Get started today with our creator outreach services.",background:e=>e.theme.colors.cardBg,rounded:!0,withShadow:!0,padding:"medium",containerSize:"medium",initial:{opacity:0,y:50},animate:{opacity:1,y:0},transition:{delay:.4,duration:.5},children:Object(u.jsxs)(zt,{children:[Object(u.jsx)(fe,{as:"a",href:"https://forms.gle/GSFowRYiJRvq2R7SA",target:"_blank",variant:"primary",size:"large",icon:g.e,pill:!0,children:"Get in Touch"}),Object(u.jsx)(fe,{as:"a",href:"https://forms.gle/rL78x3gcQ2P7q3CT6",target:"_blank",variant:"secondary",size:"large",icon:g.fb,pill:!0,children:"Join as Creator"})]})})]})};const Pt=d.d.main`
  overflow-x: hidden;
`,Yt=d.d.div`
  text-align: center;
  padding: 4rem 2rem;
  
  h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
    background: ${e=>e.theme.gradients.primary};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  
  .subtitle {
    font-size: 1.5rem;
    opacity: 0.8;
    max-width: 800px;
    margin: 0 auto 3rem;
    line-height: 1.6;
  }
`,Wt=d.d.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  max-width: 800px;
  margin: 0 auto;
`,Rt=Object(d.d)(h.a.a)`
  position: relative;
  display: flex;
  align-items: center;
  background: rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  height: 100px;
  border-radius: 15px;
  padding: 2rem;
  text-decoration: none;
  overflow: hidden;
  transition: all 0.3s ease;
  box-shadow: ${e=>e.theme.shadows.medium};
  z-index: 1;
  border: 1px solid rgba(255, 255, 255, 0.1);
  
  svg {
    font-size: 2.5rem;
    margin-right: 2rem;
    color: ${e=>e.theme.colors.primary};
    transition: all 0.3s ease;
    z-index: 2;
  }
  
  &:hover {
    transform: translateX(10px);
    box-shadow: ${e=>e.theme.shadows.large};
    
    svg {
      transform: scale(1.1);
    }
    
    .hover-effect {
      transform: translateX(0);
      opacity: 1;
    }
  }
`,Mt=d.d.span`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${e=>e.gradient||e.theme.gradients.primary};
  opacity: 0;
  transform: translateX(-100%);
  transition: all 0.5s ease;
  z-index: 0;
`,Lt=d.d.span`
  font-size: 1.5rem;
  font-weight: 600;
  color: ${e=>e.theme.colors.primary};
  z-index: 2;
  transition: all 0.3s ease;
  
  ${Rt}:hover & {
    color: white;
  }
`;var Nt=function(){const e=[{title:"Video Editors",icon:g.ib,link:"https://forms.gle/nxonjtpSJvXeVJRs8",gradient:"linear-gradient(135deg, #FF3CAC 0%, #784BA0 50%, #2B86C5 100%)"},{title:"Designers",icon:g.M,link:"https://forms.gle/x7AzJ8wrrRrA1qJv5",gradient:"linear-gradient(135deg, #FF9A8B 0%, #FF6A88 55%, #FF99AC 100%)"},{title:"Web & Software Developers",icon:g.q,link:"https://forms.gle/xHcQhsnFFyGzw2s56",gradient:"linear-gradient(135deg, #13547A 0%, #80D0C7 100%)"},{title:"Creators",icon:g.R,link:"https://forms.gle/fsCXfvzSK61Jvwax6",gradient:"linear-gradient(135deg, #FDFC47 0%, #24FE41 100%)"}],t={hidden:{opacity:0,x:-50},visible:{opacity:1,x:0,transition:{duration:.5}}};return Object(u.jsx)(Pt,{children:Object(u.jsx)(be,{padding:"large",fullWidth:!1,initial:{opacity:0},animate:{opacity:1},transition:{duration:.4},isFirstSection:!0,children:Object(u.jsxs)(Yt,{children:[Object(u.jsx)(h.a.h1,{initial:{y:-50,opacity:0},animate:{y:0,opacity:1},transition:{delay:.1,duration:.4},children:"Join Our Creative Team"}),Object(u.jsx)(h.a.p,{className:"subtitle",initial:{y:-30,opacity:0},animate:{y:0,opacity:1},transition:{delay:.2,duration:.4},children:"Shape the future of digital content creation"}),Object(u.jsx)(Wt,{as:h.a.div,variants:{hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.2}}},initial:"hidden",animate:"visible",children:e.map(((e,i)=>Object(u.jsxs)(Rt,{href:e.link,target:"_blank",rel:"noopener noreferrer",variants:t,children:[Object(u.jsx)(Mt,{gradient:e.gradient,className:"hover-effect"}),Object(u.jsx)(b.a,{icon:e.icon}),Object(u.jsx)(Lt,{children:e.title})]},i)))})]})})})};const Ut=d.d.div`
  padding-top: 80px;
  max-width: 1000px;
  margin: 0 auto;
  
  @media (max-width: ${e=>e.theme.breakpoints.mobile}) {
    padding-top: 70px;
  }
`,qt=Object(d.d)(h.a.div)`
  text-align: center;
  padding: 3rem 1.5rem;
  
  @media (max-width: ${e=>e.theme.breakpoints.mobile}) {
    padding: 2rem 1rem;
  }
`,Ht=d.d.h1`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  background: ${e=>e.theme.gradients.primary};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  line-height: 1.2;
  
  @media (max-width: ${e=>e.theme.breakpoints.mobile}) {
    font-size: 2rem;
  }
`,Vt=d.d.p`
  font-size: 1.2rem;
  max-width: 800px;
  margin: 0 auto;
  opacity: 0.8;
`,Gt=Object(d.d)(h.a.section)`
  background: ${e=>e.theme.colors.cardBg};
  border-radius: 15px;
  padding: 2.5rem;
  margin: 0 1.5rem 3rem;
  box-shadow: ${e=>e.theme.shadows.medium};
  
  @media (max-width: ${e=>e.theme.breakpoints.mobile}) {
    padding: 1.5rem;
    margin: 0 1rem 2rem;
    border-radius: 12px;
  }
`,Xt=d.d.h2`
  font-size: 1.75rem;
  margin-bottom: 1.5rem;
  color: ${e=>e.theme.colors.primary};
  
  @media (max-width: ${e=>e.theme.breakpoints.mobile}) {
    font-size: 1.5rem;
  }
`,_t=d.d.h3`
  font-size: 1.4rem;
  margin: 1.5rem 0 1rem;
  color: ${e=>e.theme.colors.lightText};
  
  @media (max-width: ${e=>e.theme.breakpoints.mobile}) {
    font-size: 1.2rem;
  }
`,Jt=d.d.p`
  margin-bottom: 1rem;
  line-height: 1.6;
`,Qt=d.d.ul`
  margin: 1rem 0 1.5rem;
  padding-left: 1rem;
  
  li {
    margin-bottom: 0.5rem;
    padding-left: 0.5rem;
  }
`,Kt=d.d.p`
  font-style: italic;
  opacity: 0.6;
  margin-top: 2rem;
  text-align: right;
`,Zt=d.d.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  
  svg {
    font-size: 3rem;
    color: ${e=>e.theme.colors.primary};
    margin-right: 1rem;
    
    @media (max-width: ${e=>e.theme.breakpoints.mobile}) {
      font-size: 2.5rem;
    }
  }
`;var ei=function(){return Object(u.jsxs)(Ut,{children:[Object(u.jsxs)(qt,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5},children:[Object(u.jsx)(Zt,{children:Object(u.jsx)(b.a,{icon:g.U})}),Object(u.jsx)(Ht,{children:"Privacy Policy"}),Object(u.jsx)(Vt,{children:"Your privacy is important to us. Here's how we collect, use, and protect your information."})]}),Object(u.jsxs)(Gt,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5,delay:.2},children:[Object(u.jsx)(Xt,{children:"Introduction"}),Object(u.jsx)(Jt,{children:"At YOT Productions, we respect your privacy and are committed to protecting your personal data. This privacy policy will inform you about how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you."}),Object(u.jsx)(Jt,{children:"This privacy policy applies to personal information we collect when you use our website, services, or otherwise interact with us."}),Object(u.jsx)(_t,{children:"Information We Collect"}),Object(u.jsx)(Jt,{children:"We may collect, use, store, and transfer different kinds of personal data about you, including:"}),Object(u.jsxs)(Qt,{children:[Object(u.jsx)("li",{children:"Identity Data: includes first name, last name, username or similar identifier."}),Object(u.jsx)("li",{children:"Contact Data: includes email address, telephone number, and physical address."}),Object(u.jsx)("li",{children:"Technical Data: includes internet protocol (IP) address, browser type and version, time zone setting, browser plug-in types and versions, operating system and platform."}),Object(u.jsx)("li",{children:"Usage Data: includes information about how you use our website and services."})]}),Object(u.jsx)(_t,{children:"How We Use Your Information"}),Object(u.jsx)(Jt,{children:"We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:"}),Object(u.jsxs)(Qt,{children:[Object(u.jsx)("li",{children:"To provide and maintain our services to you."}),Object(u.jsx)("li",{children:"To notify you about changes to our services."}),Object(u.jsx)("li",{children:"To allow you to participate in interactive features of our service when you choose to do so."}),Object(u.jsx)("li",{children:"To provide customer support."}),Object(u.jsx)("li",{children:"To gather analysis or valuable information so that we can improve our services."}),Object(u.jsx)("li",{children:"To monitor the usage of our services."}),Object(u.jsx)("li",{children:"To detect, prevent and address technical issues."})]}),Object(u.jsx)(_t,{children:"Cookies"}),Object(u.jsx)(Jt,{children:"We use cookies and similar tracking technologies to track activity on our website and hold certain information. Cookies are files with a small amount of data which may include an anonymous unique identifier."}),Object(u.jsx)(Jt,{children:"You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our website."}),Object(u.jsx)(Kt,{children:"Last updated: March 10, 2025"})]}),Object(u.jsxs)(Gt,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5,delay:.3},children:[Object(u.jsx)(Xt,{children:"Data Security"}),Object(u.jsx)(Jt,{children:"We have implemented appropriate security measures to prevent your personal data from being accidentally lost, used, or accessed in an unauthorized way, altered, or disclosed. We limit access to your personal data to those employees, agents, contractors, and other third parties who have a business need to know."}),Object(u.jsx)(_t,{children:"Third-Party Links"}),Object(u.jsx)(Jt,{children:"Our website may include links to third-party websites, plug-ins, and applications. Clicking on those links or enabling those connections may allow third parties to collect or share data about you. We do not control these third-party websites and are not responsible for their privacy statements."}),Object(u.jsx)(_t,{children:"Your Rights"}),Object(u.jsx)(Jt,{children:"Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to:"}),Object(u.jsxs)(Qt,{children:[Object(u.jsx)("li",{children:"Request access to your personal data."}),Object(u.jsx)("li",{children:"Request correction of your personal data."}),Object(u.jsx)("li",{children:"Request erasure of your personal data."}),Object(u.jsx)("li",{children:"Object to processing of your personal data."}),Object(u.jsx)("li",{children:"Request restriction of processing your personal data."}),Object(u.jsx)("li",{children:"Request transfer of your personal data."}),Object(u.jsx)("li",{children:"Right to withdraw consent."})]}),Object(u.jsx)(_t,{children:"Contact Us"}),Object(u.jsx)(Jt,{children:"If you have any questions about this privacy policy or our privacy practices, please contact us at:"}),Object(u.jsxs)(Jt,{children:["Email: contact@yotproductions.com",Object(u.jsx)("br",{}),"Phone: +91 97572 71093"]})]})]})};const ti=d.d.div`
  padding-top: 80px;
  max-width: 1000px;
  margin: 0 auto;
  
  @media (max-width: ${e=>e.theme.breakpoints.mobile}) {
    padding-top: 70px;
  }
`,ii=Object(d.d)(h.a.div)`
  text-align: center;
  padding: 3rem 1.5rem;
  
  @media (max-width: ${e=>e.theme.breakpoints.mobile}) {
    padding: 2rem 1rem;
  }
`,ri=d.d.h1`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  background: ${e=>e.theme.gradients.primary};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  line-height: 1.2;
  
  @media (max-width: ${e=>e.theme.breakpoints.mobile}) {
    font-size: 2rem;
  }
`,oi=d.d.p`
  font-size: 1.2rem;
  max-width: 800px;
  margin: 0 auto;
  opacity: 0.8;
`,ai=Object(d.d)(h.a.section)`
  background: ${e=>e.theme.colors.cardBg};
  border-radius: 15px;
  padding: 2.5rem;
  margin: 0 1.5rem 3rem;
  box-shadow: ${e=>e.theme.shadows.medium};
  
  @media (max-width: ${e=>e.theme.breakpoints.mobile}) {
    padding: 1.5rem;
    margin: 0 1rem 2rem;
    border-radius: 12px;
  }
`,ni=d.d.h2`
  font-size: 1.75rem;
  margin-bottom: 1.5rem;
  color: ${e=>e.theme.colors.primary};
  
  @media (max-width: ${e=>e.theme.breakpoints.mobile}) {
    font-size: 1.5rem;
  }
`,si=d.d.h3`
  font-size: 1.4rem;
  margin: 1.5rem 0 1rem;
  color: ${e=>e.theme.colors.lightText};
  
  @media (max-width: ${e=>e.theme.breakpoints.mobile}) {
    font-size: 1.2rem;
  }
`,ci=d.d.p`
  margin-bottom: 1rem;
  line-height: 1.6;
`,di=d.d.ul`
  margin: 1rem 0 1.5rem;
  padding-left: 1rem;
  
  li {
    margin-bottom: 0.5rem;
    padding-left: 0.5rem;
  }
`,li=d.d.p`
  font-style: italic;
  opacity: 0.6;
  margin-top: 2rem;
  text-align: right;
`,mi=d.d.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  
  svg {
    font-size: 3rem;
    color: ${e=>e.theme.colors.primary};
    margin-right: 1rem;
    
    @media (max-width: ${e=>e.theme.breakpoints.mobile}) {
      font-size: 2.5rem;
    }
  }
`;var hi=function(){return Object(u.jsxs)(ti,{children:[Object(u.jsxs)(ii,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5},children:[Object(u.jsx)(mi,{children:Object(u.jsx)(b.a,{icon:g.z})}),Object(u.jsx)(ri,{children:"Terms of Service"}),Object(u.jsx)(oi,{children:"Please read these terms carefully before using our services."})]}),Object(u.jsxs)(ai,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5,delay:.2},children:[Object(u.jsx)(ni,{children:"Agreement to Terms"}),Object(u.jsx)(ci,{children:"These Terms of Service govern your use of the website, services, and products provided by YOT Productions. By accessing or using our services, you agree to be bound by these Terms. If you disagree with any part of the terms, you may not access our services."}),Object(u.jsx)(si,{children:"Services Description"}),Object(u.jsx)(ci,{children:"YOT Productions provides video editing, designing, web support, and creator outreach services to clients. Our services include but are not limited to:"}),Object(u.jsxs)(di,{children:[Object(u.jsx)("li",{children:"Video editing and post-production"}),Object(u.jsx)("li",{children:"Graphic design and branding"}),Object(u.jsx)("li",{children:"Website development and maintenance"}),Object(u.jsx)("li",{children:"Social media content creation"}),Object(u.jsx)("li",{children:"Influencer and creator partnerships"})]}),Object(u.jsx)(si,{children:"User Accounts"}),Object(u.jsx)(ci,{children:"When you create an account with us, you must provide accurate, complete, and up-to-date information. You are responsible for safeguarding the password that you use to access our services and for any activities or actions under your password."}),Object(u.jsx)(ci,{children:"You agree not to disclose your password to any third party. You must notify us immediately upon becoming aware of any breach of security or unauthorized use of your account."})]}),Object(u.jsxs)(ai,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5,delay:.3},children:[Object(u.jsx)(ni,{children:"Intellectual Property"}),Object(u.jsx)(ci,{children:"Our website and its original content, features, and functionality are owned by YOT Productions and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws."}),Object(u.jsx)(si,{children:"Client Content"}),Object(u.jsx)(ci,{children:"If you submit content to us for our services (such as videos, images, or text), you retain ownership of that content. By submitting content to us, you grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, adapt, publish, and distribute such content for the purpose of providing our services to you."}),Object(u.jsx)(ci,{children:"You represent and warrant that you own or have the necessary licenses, rights, consents, and permissions to use and authorize us to use all intellectual property rights in and to any content that you provide."}),Object(u.jsx)(si,{children:"Portfolio Rights"}),Object(u.jsx)(ci,{children:"Unless specified otherwise in a written agreement, YOT Productions reserves the right to showcase work completed for clients in our portfolio, website, social media, or other promotional materials. If you wish to restrict this usage, please specify in writing before the commencement of services."})]}),Object(u.jsxs)(ai,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5,delay:.4},children:[Object(u.jsx)(ni,{children:"Payment and Refunds"}),Object(u.jsx)(ci,{children:"Payment terms will be established in individual service agreements or proposals. Generally, we require payment in advance or according to agreed-upon milestones."}),Object(u.jsx)(si,{children:"Refund Policy"}),Object(u.jsx)(ci,{children:"Refunds are provided at our discretion and will be detailed in individual service agreements. Generally, once work has commenced on a project, refunds may be limited to the portion of work not yet completed."}),Object(u.jsx)(si,{children:"Termination"}),Object(u.jsx)(ci,{children:"We may terminate or suspend access to our services immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms."}),Object(u.jsx)(ci,{children:"All provisions of the Terms which by their nature should survive termination shall survive termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity, and limitations of liability."}),Object(u.jsx)(si,{children:"Contact Us"}),Object(u.jsx)(ci,{children:"If you have any questions about these Terms, please contact us at:"}),Object(u.jsxs)(ci,{children:["Email: contact@yotproductions.com",Object(u.jsx)("br",{}),"Phone: +91 97572 71093"]}),Object(u.jsx)(li,{children:"Last updated: March 10, 2025"})]})]})};function pi(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:".lazy-image";if("IntersectionObserver"in window){const t=new IntersectionObserver((e=>{e.forEach((e=>{if(e.isIntersecting){const i=e.target;i.dataset.src&&(i.src=i.dataset.src,i.removeAttribute("data-src")),i.dataset.srcset&&(i.srcset=i.dataset.srcset,i.removeAttribute("data-srcset")),i.classList.remove("lazy-image"),i.classList.add("loaded"),t.unobserve(i)}}))}));document.querySelectorAll(e).forEach((e=>{t.observe(e)}))}else{document.querySelectorAll(e).forEach((e=>{e.dataset.src&&(e.src=e.dataset.src,e.removeAttribute("data-src")),e.dataset.srcset&&(e.srcset=e.dataset.srcset,e.removeAttribute("data-srcset")),e.classList.remove("lazy-image"),e.classList.add("loaded")}))}}function bi(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"img:not([loading])";if("loading"in HTMLImageElement.prototype){document.querySelectorAll(e).forEach((e=>{e.setAttribute("loading","lazy")}))}}function gi(){"complete"===document.readyState?bi():window.addEventListener("load",(()=>{bi()})),pi()}var ui=i(20);function xi(){const{pathname:e}=Object(s.l)();return Object(r.useEffect)((()=>{window.scrollTo(0,0)}),[e]),null}ui.b.add(ce.o,g.O,g.w,g.J,g.M,g.C,g.ib,g.E,g.g,g.e,g.U,g.z);var ji=function(){return Object(r.useEffect)((()=>{gi();const e=(()=>{const e=()=>{const e=.01*window.innerHeight;document.documentElement.style.setProperty("--vh",`${e}px`)};return e(),window.addEventListener("resize",e),window.addEventListener("orientationchange",e),("ontouchstart"in window||navigator.maxTouchPoints>0)&&document.body.classList.add("touch-device"),()=>{window.removeEventListener("resize",e),window.removeEventListener("orientationchange",e)}})();return document.querySelectorAll('a[href^="#"]').forEach((e=>{e.addEventListener("click",(function(e){e.preventDefault();const t=this.getAttribute("href"),i=document.querySelector(t);i&&i.scrollIntoView({behavior:"smooth"})}))})),e}),[]),Object(u.jsxs)(d.a,{theme:l,children:[Object(u.jsx)(m,{}),Object(u.jsxs)(c.a,{children:[Object(u.jsx)(T,{}),Object(u.jsx)(xi,{}),Object(u.jsxs)(s.c,{children:[Object(u.jsx)(s.a,{path:"/",element:Object(u.jsx)(se,{})}),Object(u.jsx)(s.a,{path:"/video-editing",element:Object(u.jsx)(Pe,{})}),Object(u.jsx)(s.a,{path:"/designing",element:Object(u.jsx)(rt,{})}),Object(u.jsx)(s.a,{path:"/website-support",element:Object(u.jsx)(ft,{})}),Object(u.jsx)(s.a,{path:"/creator-outreach",element:Object(u.jsx)(It,{})}),Object(u.jsx)(s.a,{path:"/careers",element:Object(u.jsx)(Nt,{})}),Object(u.jsx)(s.a,{path:"/privacy-policy",element:Object(u.jsx)(ei,{})}),Object(u.jsx)(s.a,{path:"/terms-of-service",element:Object(u.jsx)(hi,{})})]}),Object(u.jsx)(R,{})]})]})};var yi=e=>{e&&e instanceof Function&&i.e(3).then(i.bind(null,49)).then((t=>{let{getCLS:i,getFID:r,getFCP:o,getLCP:a,getTTFB:n}=t;i(e),r(e),o(e),a(e),n(e)}))};ui.b.add(g.ib,g.M,g.C,g.E,g.e,g.gb,g.Z,g.X,g.t,g.k,g.O,g.w,g.J,g.g,g.K,g.db,g.cb,g.S,g.T,g.W,g.l,g.D,g.H,g.f,g.q,g.R,g.V,g.p,g.o,g.F,g.Y,g.j,g.m,g.bb,g.r,g.eb,g.h,g.y,g.I,g.N,g.G,g.Q,g.x,g.ab,g.a,g.d,g.c,g.b,g.jb,g.i,g.P,ce.e,ce.n,ce.i,ce.g,ce.m,ce.a,ce.d,ce.k,ce.b,ce.f,ce.j,ce.h,ce.c,ce.l),n.a.render(Object(u.jsx)(o.a.StrictMode,{children:Object(u.jsx)(ji,{})}),document.getElementById("root")),yi()}},[[45,1,2]]]);
//# sourceMappingURL=main.74122e73.chunk.js.map