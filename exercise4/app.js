new Vue({
  el: '#exercise',
  data: {
    effectClass: "",
    one: "one",
    two: "two",
    userClass: "",
    chooseClass: "one",
    chooseBoolean: true,
    myclass: "one",
    mybool: true,
    myStyle: "",
    progress: 0,
    
    userClassMax: "",
    isVisible: true,
  },
  computed: {
    calculateClass: function() {
      console.log(this.myclass);
      return {myclass: this.mybool};
      },
    myStyleObject: function() {
      return {
        backgroundColor: this.myStyle,
        width: '150px'
      }
    },
    progressStyle: function() {
      return {width: this.progress + 'px'}
    } 
  },
  watch: {
  },
  methods: {
    startEffect: function() {
      console.log('startEffect');
      this.effectClass = "highlight"
      vm = this;
      setInterval(() => {
        if (vm.effectClass == "highlight")
          vm.effectClass = "shrink";
        else
          vm.effectClass = "highlight";
        console.log("interval")
      }, 1000);
    },
    startProgress: function() {
      // add widht each half second by changing progress
      vm = this;
      interval = setInterval(() => {
        console.log('interval')
        if (vm.progress < 100)
          vm.progress += 10;
        else
          clearInterval(vm.interval)
      }, 500);
    }
  }
});
