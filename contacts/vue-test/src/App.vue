<template>
<div>
  <div>
    <table>
      <tr>
        <td>Имя</td>
        <td>Телефон</td>
      </tr>
    </table>
        <table>
      <tr>
        <td>{{name}}</td>
        <td>{{namber}}</td>
      </tr>
    </table>
  </div>
  <div class="form">
    <form @submit.prevent>
      <h4>Добавление пользователя</h4>
      <input :value="name" @input="name = $event.target.value" type="text" placeholder="Name">
      <input :value="namber" @input="namber = $event.target.value" type="text" placeholder="Phone">
      <button @click="addUser">Добавить</button>
    </form>
  </div>


</div>

</template>

<script>


export default {
  data() {
    return {
      name: "Alex",
      namber: "+78998878992",
      id: 3,
    }
  },
  methods:{
    addUser()
    {
      // var id = 1;
      const newUsers = {
        name: this.name,
        namber: this.namber
      }
      localStorage.setItem(this.id, JSON.stringify(newUsers));
      this.id += 1;
      console.log(this.id)
      


    }

  }
}

</script>


<style>

</style>
