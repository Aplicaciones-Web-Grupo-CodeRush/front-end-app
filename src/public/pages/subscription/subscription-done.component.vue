<script>
export default {
  data() {
    return {
      dialogVisible: false
    }
  },
  methods: {
    openDialog() {
      this.dialogVisible = true;
    },
    closeDialog() {
      this.dialogVisible = false;
    }
  },
  created() {
    this.openDialog();
  }
}
</script>

<template>
  <div class="dialog-container">
    <pv-dialog v-model:visible="dialogVisible" :modal="true" :closable="false" @hide="closeDialog">
      <pv-card class="card-info">
        <template #title>Pay Done</template>
      </pv-card>
      <pv-button @click="closeDialog">Close</pv-button>
    </pv-dialog>
  </div>
</template>

<style scoped>

</style>