new Vue({
    el: '#exercise',
    data: {
        keyValue: '',
        enterValue: ''
    },
    methods: {
        alertMe: function () {
            console.log("alert");
            alert('hi');
        },
        // keyDown: function (event) {
        //     // console.log(event.target.value);
        //     this.keyValue = event.target.value;
        // },
        enterDown: function (event) {
            this.enterValue = event.target.value;
        }
    }
});