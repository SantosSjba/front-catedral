<template>
  <div>
    <LogoComponent />
    <h1 class="titulo">Bienvenido 2:</h1>
    <Button label="Primary" />
    <Button label="Secondary" severity="secondary" />
    <Button label="Success" severity="success" />
    <Button label="Info" severity="info" />
    <Button label="Warn" severity="warn" />
    <Button label="Help" severity="help" />
    <Button label="Danger" severity="danger" />
    <Button label="Contrast" severity="contrast" />
    <!-- <div>{{ misas }}</div> -->
     <Card>
      <template #title>Simple Card</template>
      <template #content>
        <p class="m-0">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore
          sed consequuntur error repudiandae numquam deserunt quisquam repellat
          libero asperiores earum nam nobis, culpa ratione quam perferendis
          esse, cupiditate neque quas!
        </p>
      </template>
    </Card>
    <Card style="width: 25rem; overflow: hidden">
        <template #header>
            <img alt="user header" src="https://primefaces.org/cdn/primevue/images/usercard.png" />
        </template>
        <template #title>Advanced Card</template>
        <template #subtitle>Card subtitle</template>
        <template #content>
            <p class="m-0">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque
                quas!
            </p>
        </template>
        <template #footer>
            <div class="flex gap-4 mt-1">
                <Button label="Cancel" severity="secondary" variant="outlined" class="w-full" />
                <Button label="Save" class="w-full" />
            </div>
        </template>
    </Card>
    <div v-if="loading">Cargando...</div>
    <div>
      <p v-for="misa in misas">
        {{ misa.titulo }}
      </p>
    </div>
    
  </div>
</template>
<script setup lang="ts">
import { onMounted, ref } from "vue";
import LogoComponent from "../components/LogoComponent.vue";
import { getListMisasAction } from "../actions/listMisas.action";
import type { Misa } from "../interfaces/listMisas.interface";
import Button from "primevue/button";
import Card from "primevue/card";

const loading = ref(true);
const error = ref<string | null>(null);
const misas = ref<Misa[]>([]);

onMounted(async () => {
  try {
    loading.value = true;
    error.value = "";
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
</style>
