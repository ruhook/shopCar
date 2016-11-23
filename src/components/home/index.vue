<script type="text/javascript">
    import Home from './home.vue'
    export default {
        name: 'Home',
        vuex: {
            getters: {
                stack: ({
                    router
                }) => router.stack
            }
        },
        components: {
            'r-home': Home
        }
    }
</script>

<template>
	<div :transition="stack.pageDir" class="div">
		<r-home></r-home>
	</div>
</template>

<style>
    .div {
        width: 100%;
        height: 100%;
        position: absolute;
    }
</style>