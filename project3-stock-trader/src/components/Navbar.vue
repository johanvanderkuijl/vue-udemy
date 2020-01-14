<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <router-link to="/" class="navbar-brand" active-class="active" exact>
      <a>Stock Trader</a>
    </router-link>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link to="/portfolio" class="nav-link" active-class="active">
            <a>Portfolio</a>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/stocks" class="nav-link" active-class="active">
            <a>Stocks</a>
          </router-link>
        </li>
        <li class="nav-item">
          <a href="#" @click="test" class="nav-link">test</a>
        </li>
      </ul>
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" @click="endDay" href="#">Next Day ({{ day }})</a>
        </li>
        <li class="nav-item dropdown" 
            :class="{show: isDropdownOpen}"
            @click="isDropdownOpen = !isDropdownOpen"
            >
          <a
            class="nav-link dropdown-toggle"
            href="#"
            id="navbarDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >Save & Load</a>
          <div class="dropdown-menu" :class="{show: isDropdownOpen}" aria-labelledby="navbarDropdown">
            <a @click="saveData" class="dropdown-item" href="#">Save Data</a>
            <a @click="loadData" class="dropdown-item" href="#">Load Data</a>
          </div>
        </li>
        <span class="navbar-text">Funds: {{ funds | withEuro }}</span>
      </ul>
    </div>
  </nav>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  data() {
      return {
          isDropdownOpen: false
      }
  },
  computed: {
    funds() {
      return this.$store.getters.funds;
    },
    day() {
      return this.$store.getters.day;
    }
  },
  methods: {
    ...mapMutations([
        "saveData",
        "loadData",
        "endDay"
    ]),
    test() {
        console.log(this.$store);
    }
  }
};
</script>

<style scoped>
nav {
  border: 1px solid #aaa;
  margin: 10px;
}
</style>