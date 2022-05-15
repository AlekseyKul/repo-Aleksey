<template>
<div class="post" >
    <div>
        <div><strong>Nazvanie</strong> {{post.title}}</div>
        <div><strong>Opisanie</strong> {{post.body}}</div>
    </div>
    <div class="post__btns">
        <my-button @click="$emit('remove', post)"> Del</my-button>
    </div>

</div>
</template>

<script>
import MyButton from './UI/MyButton.vue'
export default {
  components: { MyButton },
    props:{
        post:{
            type: Object,
            required: true
        }

    }

}
</script>

<style scoped>
.post{
    margin: 20px;
    padding: 15px;
    border:  2px solid teal;
    display: flex;
    align-items: center;
    justify-content: space-between;

}

</style>