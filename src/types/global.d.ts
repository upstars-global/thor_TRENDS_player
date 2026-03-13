import { ComponentCustomProperties } from 'vue'

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $t: (key: string) => string
    $setLocale: (locale: string) => void
  }
}

// Расширяем интерфейс Window для gc функции
declare global {
  interface Window {
    gc?: () => void;
  }
  
  // Расширяем HTMLVideoElement для data attributes
  interface HTMLVideoElement {
    dataset: DOMStringMap & {
      observed?: string;
    };
  }
  
  // Добавляем типы для performance.memory
  interface Performance {
    memory?: {
      usedJSHeapSize: number;
      totalJSHeapSize: number;
      jsHeapSizeLimit: number;
    };
  }
  
  // Добавляем типы для navigator.connection
  interface Navigator {
    connection?: {
      saveData?: boolean;
      effectiveType?: string;
    };
  }
}