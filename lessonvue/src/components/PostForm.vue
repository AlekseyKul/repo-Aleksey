<template>
        <form class="form" @submit.prevent>
          <h4>Create post</h4>
          <my-input
          v-model="post.title"
          type="text" 
          placeholder="Название"
          ></my-input>

          <my-input 
          v-model="post.body"
          type="text" 
          placeholder="Описание"
          ></my-input>
          <my-button class="btn" @click="creatPost">Create</my-button>
      </form>
</template>

<script>
// import MyButton from './UI/MyButton.vue';
export default {
//   components: { MyButton },
    data() {
        return {
            post:{
                title: '',
                body: ''


            }
        }
    },
    methods:{
        creatPost(){
            this.post.id = Date.now(); 

            this.$emit('create',this.post);
            this.post = {
                title: '',
                body:''
            };

        }
    }

}
</script>

<style scoped>
.form{
    margin: 20px;
    display: flex;
    flex-direction: column;
}
.btn{
    margin-top: 15px;
    align-self: flex-end;

}
 


</style>