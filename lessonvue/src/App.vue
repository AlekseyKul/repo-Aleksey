<template>
  <div class="app">
      <post-form/>
      <post-list 
      :posts="posts"
      @create='createPost'
      />


  </div> 
</template>

<script>
import PostForm from './components/PostForm.vue';
import PostList from './components/PostList.vue';
export default {
    components:{
        PostForm, PostList
    },
    data() {
        return {
            posts:[
                {id: 1, title: 'JavaScript 1', body: 'Описание поста 1'},
                {id: 2, title: 'JavaScript 2', body: 'Описание поста 2'},
                {id: 3, title: 'JavaScript 3', body: 'Описание поста 3'},
            ],


        }
    },
    methods: {
        creatPost(){

             

        },


    },

}



</script>

<style>
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}



</style>
