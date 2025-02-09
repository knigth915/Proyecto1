<template>
    <div class="header">
    <Weather>{{ mensajeRecibido }}</Weather>
    </div>

</template>

<script setup>
import Weather from './Weather.vue';
import { defineProps, ref, watch} from 'vue';
const props = defineProps(['mensaje']);
const mensajeRecibido = ref(props.mensaje);
watch(()=>props.mensaje,(newvalue)=>{
      mensajeRecibido.value = newvalue;
})
</script>

<style scoped>
.header {
    display : flex;
    justify-content: center;
    align-items: center;
    padding-top: 0px 0px;
    /* position: fixed; */
    top: 0;
    right: 0;
    left: 0;
    background-color: rgb(53, 10, 3);
    color: azure;
}
.h1{
  margin: 0;
}
h3 {
    margin: 0;
    padding: 5px 0;
    font-size: 18px;
    font-weight: bold;
    text-align: center;
}

</style>
