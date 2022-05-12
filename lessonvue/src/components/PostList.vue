<template>
  <div class="post" v-for="post in posts" :key="post.id" >
    <div><strong>Nazvanie</strong> {{post.title}}</div>
    <div><strong>Opisanie</strong> {{post.body}}</div>
</div>
</template>

<script>
export default {
    props:{
        posts:{
            type: Array,
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

}

</style>