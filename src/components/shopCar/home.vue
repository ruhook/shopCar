<script>
    import {
        add,
        ruc,
        rm
    } from '../../vuex/actions.js';
    export default {
        vuex: {
            getters: {
                car: ({
                    car
                }) => car.content
            },
            actions: {
                add,
                ruc,
                rm
            }
        },
        computed: {
            total: function() {
                var total = 0;
                for (var i in this.car) {
                    total += this.car[i].money * this.car[i].num;
                }
                return total;
            }
        }
    }
</script>
<template>
    <div id="demo" v-if="car.length">
        <li v-for="items in car" track-by="$index">
        {{items.name}}
        {{items.money}}
        {{items.feat}}
        {{items.content}}
        <button @click="ruc($index)">-</button>
        {{items.num}}  
        <button @click="add($index)">+</button>
        <button @click="rm($index)">移除</button>
        </li><br>
        {{total}}
    </div>
    <span v-else>
        购物车空空如也
    </span>
</template>

<style>

</style>