new Vue({
        el: '#exercise',
        data: {
            value: 0,

        },
        computed: {
            result: function() {
                console.log('calculated');
                return this.value < 37 ? 'nog niet genoeg' : 'done';
                
            }
        },
        watch: {
            result: function(){
                vm = this;
                setTimeout(function(){
                    vm.value = 0;
                }, 5000)
            }
        }
    });