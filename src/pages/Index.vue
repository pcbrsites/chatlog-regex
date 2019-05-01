<template>
  <q-page>
    <div class="q-pa-md row justify-center">
      <!-- <div style="width: 100%; max-width: 900px"> -->
      <q-btn black color="grey" :to="{ name: 'list' }" class="full-width q-mt-md">
        <q-icon left size="3em" name="list"/>
        <div>LISTA (JSON)</div>
      </q-btn>
      <br>
      <q-btn black color="red" :to="{ name: 'log' }" class="full-width q-mt-md">
        <q-icon left size="3em" name="error"/>
        <div>LOG</div>
      </q-btn>
      <!-- <q-btn color="red" :to="{ name: 'log' }">LOG</q-btn> -->
      <!-- <q-btn :to="{ name: 'list' }">LIST</q-btn> -->
      <!-- </div> -->
    </div>
  </q-page>
</template>

<style></style>

<script>
export default {
  name: "PageIndex"
};
</script>
