<template>
  <div style="height:100vh">
    ShareView {{$route.query.redirectUrl}}
    <iframe width="100%" height="100%" :src="$route.query.redirectUrl"></iframe>
  </div>
</template>

<script>
export default {
  name: 'customName',
  data () {
    return {
    }
  },
  created(){
    console.log(this.$route.query)
  },

  methods: {}
}
</script>
