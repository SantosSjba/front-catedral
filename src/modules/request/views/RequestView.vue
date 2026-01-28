<template>
  <div class="request-view">
    <LogoComponent />
    
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
import { ref, reactive } from "vue";
import LogoComponent from "../components/LogoComponent.vue";
import StepInicio from "../components/steps/StepInicio.vue";
import StepDatosSolicitante from "../components/steps/StepDatosSolicitante.vue";
import StepDatosCelebracion from "../components/steps/StepDatosCelebracion.vue";
import StepMenciones from "../components/steps/StepMenciones.vue";
import StepPago from "../components/steps/StepPago.vue";
import StepResumen from "../components/steps/StepResumen.vue";

const currentStep = ref(0);

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
  currentStep.value = step;
};

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
