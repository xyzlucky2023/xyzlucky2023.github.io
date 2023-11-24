/// <reference types="vite/client" />
/// <reference path="node_modules/vue-i18n/dist/vue-i18n.d.ts" />

declare module '*.vue' {
    import { defineComponent } from 'vue'
    const Component: ReturnType<typeof defineComponent>
    export default Component
}

declare module 'vue-i18n'