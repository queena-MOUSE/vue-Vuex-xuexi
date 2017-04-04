<template lang="html">
  <div id="app">
      <input type="button" name="" value="加加" @click="increment">
      <input type="button" name="" value='减减' @click="decrement">
      <input type="button" name="" value="偶数" @click="odd">
      <div class="">
          现在的数字为：{{count}}

      </div>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
export default{
    computed:mapGetters([
        'count'
    ]),
    methods:mapActions([
        'increment',
        'decrement',
        'odd'
    ])
}
</script>

<style lang="css">
</style>
