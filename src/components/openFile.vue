<template>
  <span>
    <input
      ref="file"
      type="file"
      name="file"
      id="file"
      @change="onFileText( $event.target.name, $event.target.files)"
      style="display:none"
    >
    <q-btn @click="launchFilePicker()" icon="attach_file" flat>{{label}}</q-btn>
  </span>
</template>
<script>
export default {
  props: {
    label: {
      type: String,
      default: "ARQUIVO"
    }
  },
  methods: {
    launchFilePicker() {
      this.$refs.file.click();
    },
    onFileText(name, files) {
      console.log(name, files);
      const reader = new FileReader();
      reader.onload = event => this.$emit("load", event.target.result);
      reader.readAsText(files[0]);
    }
  }
};
</script>