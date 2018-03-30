<template>
  <div>
    <button v-on:click='showMessage'>click me to show message</button>
  </div>
</template>

<script>
export default {
  name: 'componentA',
  methods:{
      showMessage:function(){
        // alert('component A Message:'+this.fathermessage);
        this.$emit('hellofroma','hellofroma')
      }
  },
  props:['fathermessage']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
