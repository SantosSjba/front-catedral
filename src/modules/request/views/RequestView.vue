<template>
  <div class="request-view">
    
    <!-- Paso 0: Inicio -->
    <StepInicio 
      v-if="currentStep === 0"
      @nueva-solicitud="goToStep(1)"
      @consultar-solicitud="handleConsultar"
    />

    <!-- Paso 1: Datos del solicitante -->
    <StepDatosSolicitante
      v-if="currentStep === 1"
      :form-data="formData"
      @update:form-data="updateFormData"
      @next="goToStep(2)"
    />

    <!-- Paso 2: Datos de la celebración -->
    <StepDatosCelebracion
      v-if="currentStep === 2"
      :form-data="formData"
      @update:form-data="updateFormData"
      @previous="goToStep(1)"
      @next="goToStep(3)"
    />

    <!-- Paso 3: Menciones -->
    <StepMenciones
      v-if="currentStep === 3"
      :form-data="formData"
      @update:form-data="updateFormData"
      @previous="goToStep(2)"
      @next="goToStep(4)"
    />

    <!-- Paso 4: Pago y subida de voucher -->
    <StepPago
      v-if="currentStep === 4"
      :form-data="formData"
      @update:form-data="updateFormData"
      @previous="goToStep(3)"
      @confirm-payment="goToStep(5)"
    />

    <!-- Paso 5: Resumen y confirmación -->
    <StepResumen
      v-if="currentStep === 5"
      :form-data="formData"
      @inicio="goToStep(0)"
    />
  </div>
</template>

<script setup lang="ts">
import { reactive, onMounted, onUnmounted, watch, computed } from "vue";
import { useRouter, useRoute } from "vue-router";
import StepInicio from "../components/steps/StepInicio.vue";
import StepDatosSolicitante from "../components/steps/StepDatosSolicitante.vue";
import StepDatosCelebracion from "../components/steps/StepDatosCelebracion.vue";
import StepMenciones from "../components/steps/StepMenciones.vue";
import StepPago from "../components/steps/StepPago.vue";
import StepResumen from "../components/steps/StepResumen.vue";

const router = useRouter();
const route = useRoute();

// Mapeo de rutas a pasos
const routeToStepMap: Record<string, number> = {
  '/': 0,
  '/datos-solicitante': 1,
  '/datos-celebracion': 2,
  '/menciones': 3,
  '/pago': 4,
  '/resumen': 5,
};

// Mapeo de pasos a rutas
const stepToRouteMap: Record<number, string> = {
  0: '/',
  1: '/datos-solicitante',
  2: '/datos-celebracion',
  3: '/menciones',
  4: '/pago',
  5: '/resumen',
};

// Obtener el paso actual desde la ruta
const currentStep = computed(() => {
  return routeToStepMap[route.path] ?? 0;
});

// Observar cambios en la ruta y eliminar hash si aparece
watch(() => route.fullPath, (newPath) => {
  if (window.location.hash && window.location.hash !== '#') {
    // Si hay un hash que no sea solo '#', reemplazar la URL sin hash
    const cleanPath = newPath.split('#')[0] || '/';
    if (cleanPath !== route.path) {
      router.replace(cleanPath).catch(() => {});
    }
  }
}, { immediate: true });

const formData = reactive({
  // Datos del solicitante
  tipoDocumento: "",
  numeroDocumento: "",
  nombre: "",
  apellido: "",
  telefono: "",
  email: "",
  
  // Datos de la celebración
  fechaCelebracion: "",
  tipoCelebracion: "",
  misa: "",
  hora: "",
  intencion: "",
  
  // Menciones
  menciones: [] as string[],
  total: 0,
  
  // Pago
  voucher: null as File | null,
});

const goToStep = (step: number) => {
  const targetRoute = stepToRouteMap[step];
  if (targetRoute) {
    router.push(targetRoute).catch(() => {
      // Ignorar errores de navegación si ya estamos en la misma ruta
    });
  }
};

// Limpiar hash de la URL al montar el componente y manejar navegación del navegador
const handlePopState = () => {
  // Usar setTimeout para asegurar que se ejecute después de que el router procese el cambio
  setTimeout(() => {
    // Si hay hash en la URL, reemplazarlo sin hash
    if (window.location.hash && window.location.hash !== '#') {
      const cleanPath = window.location.pathname;
      router.replace(cleanPath).catch(() => {});
    }
    // Si estamos en el paso 0, asegurar que la URL esté limpia
    const step = routeToStepMap[window.location.pathname] ?? 0;
    if (step === 0 && window.location.pathname !== '/') {
      router.replace('/').catch(() => {});
    }
  }, 0);
};

onMounted(() => {
  // Eliminar hash si existe
  if (window.location.hash) {
    router.replace(window.location.pathname).catch(() => {});
  }
  
  // Escuchar cambios en el historial del navegador
  window.addEventListener('popstate', handlePopState);
});

onUnmounted(() => {
  window.removeEventListener('popstate', handlePopState);
});

const updateFormData = (data: Partial<typeof formData>) => {
  Object.assign(formData, data);
};

const handleConsultar = () => {
  // TODO: Implementar consulta de solicitud
  console.log("Consultar solicitud");
};
</script>

<style scoped>
.request-view {
  min-height: 100vh;
  padding: 2rem;
  position: relative;
}

.request-view :deep(.step-inicio) {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: 0;
  width: 100vw;
  height: 100vh;
}

.btn {
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  border: 1px solid transparent;
  transition: background-color 0.2s;
}

.btn--primary {
  background: #2563eb;
  color: #fff;
  border-color: #2563eb;
}

.btn--primary:hover {
  background: #1d4ed8;
}

.btn--secondary {
  background: #fff;
  color: #374151;
  border-color: #d1d5db;
}

.btn--secondary:hover {
  background: #f3f4f6;
}

.btn--purple {
  background: #9333ea;
  color: #fff;
  border-color: #9333ea;
}

.btn--purple:hover {
  background: #7e22ce;
}

.btn--large {
  padding: 1rem 2rem;
  font-size: 1rem;
}
</style>
