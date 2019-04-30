<template>
  <q-page>
    <div class="q-pa-md row justify-center">
      <div style="width: 100%; max-width: 900px">
        <q-btn color="red" :to="{ name: 'log' }">LOG</q-btn>
        <q-btn :to="{ name: 'list' }">LIST</q-btn>
      </div>
    </div>
  </q-page>
</template>

<style></style>

<script>
export default {
  name: "PageIndex"
};
</script>
