<template>
  <div>
    <LogoComponent />
    <h1 class="titulo">Bienvenido</h1>

    <div v-if="loading">Cargando...</div>
    <div>
      <p v-for="misa in misas" :key="misa.idmisa">{{ misa.titulo }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import LogoComponent from "../components/LogoComponent.vue";
import { getListMisasAction } from "../actions/listMisas.action";
import type { Misa } from "../interfaces/listMisas.interface";

const loading = ref(true);
const error = ref<string | null>(null);
const misas = ref<Misa[]>([]);

onMounted(async () => {
  try {
    loading.value = true;
    error.value = null;
    misas.value = await getListMisasAction();
  } catch (e) {
    error.value = "Error al cargar las misas";
  } finally {
    loading.value = false;
  }
});
</script>

<style scoped>
.titulo {
  color: red;
}

.m-0 {
  margin: 0;
}

.card {
  max-width: 25rem;
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  overflow: hidden;
  padding: 1rem;
  margin-bottom: 1rem;
}

.card--advanced {
  padding: 0;
}

.card-header {
  overflow: hidden;
}

.card-header-img {
  width: 100%;
  display: block;
  object-fit: cover;
}

.card--advanced .card-title,
.card--advanced .card-subtitle,
.card--advanced .card-content {
  padding-inline: 1rem;
}

.card--advanced .card-title {
  margin-top: 1rem;
  margin-bottom: 0.25rem;
}

.card-subtitle {
  margin: 0 0 0.5rem;
  font-size: 0.875rem;
  color: #6b7280;
}

.card--advanced .card-content {
  padding-bottom: 1rem;
}

.card-footer {
  display: flex;
  gap: 1rem;
  padding: 1rem;
  border-top: 1px solid #e5e7eb;
}

.card-footer .btn {
  flex: 1;
}

.btn {
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  border: 1px solid transparent;
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
</style>
