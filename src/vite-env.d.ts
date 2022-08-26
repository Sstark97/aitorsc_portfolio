/// <reference types="vite/client" />
declare module "@containers/*"
declare module "@components/*"
declare module "@pages/*"
declare module "@routes/*"
declare module "@api/*"
declare module "@hooks/*"
declare module '*.svg' {
    import React = require('react');
    export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
    const src: string;
    export default src;
  }
