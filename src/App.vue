<template>
  <div id="app">
    <h1 v-text="title"></h1>
    <small>**输入回车添加**</small>
    <br>
    <input type="text" v-model="newItem" v-on:keyup.enter='addItem'>
    <ul>
      <li v-for="(item,i) in items" v-bind:key="i" v-bind:class='{finished:item.isFinished}'>
        <span v-on:click='toggleFinish(item)'>
          {{i+1+'.'+item.label}}
        </span>
        <button v-on:click='deleteItem(item,i)'>❌</button>
      </li>
    </ul>
    <!-- <button v-on:hellofroma='hellofroma'>show message</button> -->
    <!-- <component-a fathermessage='you die'  v-on:hellofroma='hellofroma'></component-a> -->
  </div>
</template>

<script>
import Store from './store'
import componentA from './components/componentA';
export default {
  data:function () {
    return {
      title:'to_do_list',
      items:Store.fetch(),
      newItem:''
    }
  },
  methods:{
    hellofroma:function(msg){
      alert(msg)
    },
    toggleFinish:function (item) {
      item.isFinished = !item.isFinished;
    },
    addItem:function(){
      this.items.push({
        label:this.newItem,
        isFinished:false
      }),
      this.newItem=''
    },
    deleteItem:function(item,i){
      this.items.splice(i,1);
    }
  },
  watch:{
    items: {
          handler: function (val, oldVal) {
            Store.save(val);
          },
          deep: true
        },
  },
  components:{componentA}
}
</script>

<style>

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
small{
  color: red;
}
ul,li{
  list-style: none;
  text-align: left;
}
ul > li{
  cursor: pointer;
}
.finished{
  /* text-decoration: underline; */
  list-style: none;

}
.finished::before{
  content: '✅';
  color:red;
}
ul>li::before{
  content: '口'
}
li button{
  color: red;
  font-size: 12px;
  height: 20px;
  width: 20px;
  background: white;
  border-radius: 2px;
  border: 0;
  /* vertical-align: middle; */
}
</style>
