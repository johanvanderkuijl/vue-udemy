<template>
  <div class="col-md-6">
    <div class="card">
      <div v-if="stype=='buy'" class="card-header bg-light">{{ stock.name }} (Price: {{ stock.price }} )</div>
      <div v-else class="card-header bg-light">{{ stock.name }} (Price: {{ stock.price }} | Quantity: {{ stock.qty }})</div>
      <div class="card-body">
        <div class="row">
          <div class="col">
            <input type="text" v-model.number.trim="qty" placeholder="quantity" class="form-control" />
          </div>
          <div class="col">
            <p class="text-right">
              <span v-if="stype=='buy'">
                <button
                    @click="buy({stock: stock, qty: qty})" 
                    class="btn btn-success"
                    :disabled="qty <= 0 || !Number.isInteger(qty)"
                >Buy</button>
              </span>
              <span v-else>
                <a href="#" @click="sell({stock: stock, qty: qty})" class="btn btn-danger">Sell</a>
              </span>

            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["stock", "stype"],
  data() {
    return {
      qty: ""
    };
  },
  computed: {
    funds() {
        return this.$store.getters.funds;
    }
  },
  methods: {
    buy(payload) {
      if (payload.stock.price * this.qty <= this.funds ) {
        this.$store.commit("buy", payload);
        this.qty = "";
      } else {
          return(alert('je hebt niet genoeg geld'));
      }

      // if (this.qty < 1) {
      //   alert("Vul een getal van 1 of meer in.")
      // }
      this.qty = "";
    },
    sell(payload) {
      if (this.qty <= payload.stock.qty) {

          this.$store.commit("sell", payload);
      } else {
          console.log('qty too high');
      }
      this.qty = "";
    }
  }
};
</script>
