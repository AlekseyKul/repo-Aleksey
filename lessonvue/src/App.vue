<template>
  <div>
      <form class="form" @submit.prevent>
          <h4>Create post</h4>
          <input 
          v-bind:value="title" 
          @input="title = $event.target.value"
          class="input" 
          type="text" 
          placeholder="Название">

          <input 
          v-bind:value="body" 
          @input="body = $event.target.value"
          class="input" 
          type="text" 
          placeholder="Описание">
          <button class="btn" @click="creatPost">Create</button>
      </form>
<div class="post" v-for="post in posts" :key="post.id" >
    <div><strong>Nazvanie</strong> {{post.title}}</div>
    <div><strong>Opisanie</strong> {{post.body}}</div>
</div>
  </div> 
</template>

<script>
export default {
    data() {
        return {
            posts:[
                {id: 1, title: 'JavaScript 1', body: 'Описание поста 1'},
                {id: 2, title: 'JavaScript 2', body: 'Описание поста 2'},
                {id: 3, title: 'JavaScript 3', body: 'Описание поста 3'},
            ],
            title: '',
            body: ''

        }
    },
    methods: {
        creatPost(){
            const newPost = {
                id: Date.now(),
                title: this.title,
                body: this.body, 
            }
            this.posts.push(newPost);
            this.title = '';
            this.body = '';
             

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
.post{
    margin: 20px;
    padding: 15px;
    border:  2px solid teal;

}
.form{
    margin: 20px;
    display: flex;
    flex-direction: column;
}
.btn{
    margin-top: 15px;
    align-self: flex-end;
    padding: 10px;
    background: none;
    color: teal;
    border: 1px solid teal;;
}
.input{
    width: 100%;
    border: 1px solid teal;
    padding: 10px;
    margin-top: 15px; 
}

</style>
