<template>
        <form class="form" @submit.prevent>
          <h4>Create post</h4>
          <input 
          v-model="post.title"
          class="input" 
          type="text" 
          placeholder="Название">

          <input 
          v-model="post.body"
          class="input" 
          type="text" 
          placeholder="Описание">
          <button class="btn" @click="creatPost">Create</button>
      </form>
</template>

<script>
export default {
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

            this.$emit('create',this.post)
            this.post = {
                title: '',
                body:''
            }

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