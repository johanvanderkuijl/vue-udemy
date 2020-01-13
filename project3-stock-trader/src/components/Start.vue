<template>
  <div class="col-md-12">
    <div class="card">
      <div class="card-header bg-light">Trade or View your portfolio</div>
      <div class="card-body">
          <p class="card-text">You may save and load your data</p>
          <p class="card-text">Click 'Next Day' to advance one day</p>
          <p class="card-text">Your funds: {{ funds }}</p>
          <router-link to="/stocks" class="btn btn-primary">Show stocks</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    funds() {
      return this.$store.getters.funds;
    }
  }
}
</script>
