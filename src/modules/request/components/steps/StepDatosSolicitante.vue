<template>
  <div class="step-form">
    <h2 class="step-form__title">Datos del solicitante</h2>
    
    <div class="step-form__content">
      <div class="form-row">
        <div class="form-group">
          <label>Tipo de documento</label>
          <select v-model="localData.tipoDocumento" class="form-input">
            <option value="">Seleccione Tipo de documento</option>
            <option value="dni">DNI</option>
            <option value="pasaporte">Pasaporte</option>
            <option value="cedula">Cédula</option>
          </select>
        </div>
        
        <div class="form-group">
          <label>Número de documento</label>
          <input 
            v-model="localData.numeroDocumento"
            type="text"
            class="form-input"
            placeholder="Ingrese Numero de documento"
          />
        </div>
      </div>

      <div class="form-row">
        <div class="form-group">
          <label>Nombre</label>
          <input 
            v-model="localData.nombre"
            type="text"
            class="form-input"
            placeholder="Nombre"
          />
        </div>
        
        <div class="form-group">
          <label>Apellido</label>
          <input 
            v-model="localData.apellido"
            type="text"
            class="form-input"
            placeholder="Apellido"
          />
        </div>
      </div>

      <div class="form-row">
        <div class="form-group">
          <label>Teléfono</label>
          <input 
            v-model="localData.telefono"
            type="tel"
            class="form-input"
            placeholder="Numero de telefono"
          />
        </div>
        
        <div class="form-group">
          <label>Correo electrónico</label>
          <input 
            v-model="localData.email"
            type="email"
            class="form-input"
            placeholder="Ingrese tu correo electronico"
          />
        </div>
      </div>
    </div>

    <div class="step-form__footer">
      <button class="btn btn--purple" @click="handleNext">Siguiente paso</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";

interface Props {
  formData: {
    tipoDocumento: string;
    numeroDocumento: string;
    nombre: string;
    apellido: string;
    telefono: string;
    email: string;
  };
}

const props = defineProps<Props>();

const emit = defineEmits<{
  'update:form-data': [data: Partial<Props['formData']>];
  'next': [];
}>();

const localData = ref({ ...props.formData });

watch(localData, (newData) => {
  emit('update:form-data', newData);
}, { deep: true });

const handleNext = () => {
  emit('next');
};
</script>

<style scoped>
.step-form {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
}

.step-form__title {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 2rem;
  color: #1f2937;
}

.step-form__content {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.form-group label {
  font-size: 0.875rem;
  font-weight: 500;
  color: #374151;
}

.form-input {
  padding: 0.75rem;
  border: 1px solid #d1d5db;
  border-radius: 0.375rem;
  font-size: 1rem;
}

.form-input:focus {
  outline: none;
  border-color: #2563eb;
  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
}

.step-form__footer {
  display: flex;
  justify-content: flex-end;
  margin-top: 2rem;
}

.btn--purple {
  background: #9333ea;
  color: #fff;
  border-color: #9333ea;
  padding: 0.75rem 1.5rem;
}

.btn--purple:hover {
  background: #7e22ce;
}
</style>
