<template>
  <div class="hello">
    <div class="container">
      <div class="columns is-multiline">
        <div class="column is-1">
          <input type="text" class="input" v-model="year" placeholder="ชั้นปีที่">
        </div>
        <div class="column is-1">
          <input type="text" class="input" v-model="term" placeholder="เทอมที่">
        </div>
        <div class="column">
          <input type="text" class="input" v-model="subject" placeholder="ชื่อวิชา">
        </div>
        <div class="column is-2">
          <input type="text" class="input" v-model="unit" placeholder="หน่วยกิต">
        </div>
        <div class="column is-2">
          <input type="text" class="input" v-model="grade" placeholder="เกรดที่ได้รับ">
        </div>
        <div class="column is-half is-offset-one-quarter">
          <input class="button is-success" value="Add" type="submit" @click="add()">
          <input class="button" value="Reset" type="reset">
        </div>
        <table class="table">
          <thead>
            <tr>
              <th>Year</th>
              <th>Term</th>
              <th>Subject</th>
              <th>Unit</th>
              <th>Grade</th>
            </tr>
          </thead>
          <tbody v-for="todo in todos">
            <th>{{todo.text[0]}}</th>
            <th>{{todo.text[1]}}</th>
            <th>{{todo.text[2]}}</th>
            <th>{{todo.text[3]}}</th>
            <th>{{todo.text[4]}}</th>
          </tbody>
        </table>
        <div class="column">
          <button class="button is-outliner" @click="cal">Calculate</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'hello',
  data () {
    return {
      year: '',
      term: '',
      subject: '',
      unit: '',
      grade: '',
      test: [],
      ygrade1: 0,
      ygrade2: 0,
      ygrade3: 0,
      ygrade4: 0,
      yunit1: 0,
      yunit2: 0,
      yunit3: 0,
      yunit4: 0
    }
  },
  computed: {
    ...mapGetters(['todos'])
  },
  methods: {
    add () {
      this.test.push(this.year)
      this.test.push(this.term)
      this.test.push(this.subject)
      this.test.push(this.unit)
      this.test.push(this.grade)
      this.addTodo(this.test)
      this.year = ''
      this.term = ''
      this.subject = ''
      this.unit = ''
      this.grade = ''
      this.test = []
    },
    ...mapActions(['addTodo']),
    cal () {
      if (this.todos[0].text[0] === '1') {
      }
      if (this.todos[0].text[0] === '2') {
      }
      if (this.todos[0].text[0] === '3') {
      }
      if (this.todos[0].text[0] === '4') {
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
