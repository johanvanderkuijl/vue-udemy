<template>
    <div class="component">
        <h1>The User Component</h1>
        <p>I'm {{ name }}!</p>
        <button @click="changeName">Change name</button>
        <button @click="changeNameToNumber">Change name to number</button>
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-6">
                <!-- resetFn is a pointer to a function thas is passed as prop -->
                <app-user-detail 
                    :name="name" 
                    @nameWasReset="name = $event"
                    :resetFn="resetName"
                    :age="age"
                    ></app-user-detail>
            </div>

            <div class="col-xs-12 col-sm-6">
                <app-user-edit 
                    :age="age"
                    :increaseAgeFn="increaseAge"   
                ></app-user-edit>
            </div>

            <div class="col-xs-12 col-sm-6">
                emitter:
                <app-user-edit 
                    :age="age"
                    @iWasEmitted="age = $event"   
                ></app-user-edit>
            </div>
        </div>
    </div>
</template>

<script>
    import UserDetail from './UserDetail.vue';
    import UserEdit from './UserEdit.vue';

    export default {
        data: function() {
            return {
                name: 'Max',
                age: 20
            }
        },
        methods: {
            changeName: function () {
                this.name = 'Anna';
            },
            changeNameToNumber: function () {
                this.name = 1;
            },
            resetName() {
                this.name = 'Max';
            },
            increaseAge() {
                this.age++;
            }
        },
        components: {
            appUserDetail: UserDetail,
            appUserEdit: UserEdit
        }
    }
</script>

<style scoped>
    div {
        background-color: lightblue;
    }
</style>
