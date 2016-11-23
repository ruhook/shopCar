<script>
    import {
        changeF,
        changeC,
        isFlag,
        isClick,
        addCar
    } from '../../vuex/actions.js';
    export default {
        vuex: {
            getters: {
                content: ({
                    index
                }) => index.content,
                car: ({
                    car
                }) => car.content
            },
            actions: {
                changeF,
                changeC,
                isFlag,
                isClick,
                addCar
            }
        },
        methods: {
            save: function(items) {
                window.localStorage.setItem('vuex', JSON.stringify(items))
            },
            fetch: function() {
                return JSON.parse(window.localStorage.getItem(vuex) || '[]')
            }
        },
        watch: {
            car: {
                handler: function() {
                    window.localStorage.setItem('vuex', JSON.stringify(this.car));
                    console.log(this.car)
                }
            },
            deep: true
        }
    }
</script>

<template>
    <div id="demo">
        <h2>{{content.lists.name}}</h2>
        <span>描述:{{content.tit}}</span><br>
        <span>价格:{{content.lists.money}}</span>
        <img :src="content.picflag"/>
        <ul class="feat">
            <li  v-for="items in content.feat" :class="{activeli:$index==content.featflag}" @click="changeF($index)">{{items}}</li>
        </ul>
        
        <ul class="content">
            <li v-for="items in content.content" @click="changeC($index),isFlag()" :class="{activeli:content.flag&&$index==content.conflag}">{{items}}</li>
        </ul>

        <button class="addCar" :class="{activeCar:content.flag}" @click="addCar(content.lists)">加入购物车</button>

        <a v-link="{path: '/shopCar'}" @click="isClick()" class="shopcar">购<br>物<br>车</a>
    </div>
</template>
<style>
    img {
        width: 100%;
        display: block;
    }
</style>