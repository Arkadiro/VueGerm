<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Http</h1>
                <div class="form-group">
                  <label>Username</label>
                  <input class="form-control" type="text" v-model="user.username">
                </div>
                <div class="form-group">
                  <label>Mail</label>
                  <input class="form-control" type="text" v-model="user.email">
                </div>
                <button class="btn btn-primary" @click="submit">Submit</button>
                <hr>
                <button class="btn btn-primary" @click="fetchData">Get Data</button>
                <br><br>
                <ul class="list-group">
                  <li class="list-group-item" v-for="u in users">{{u.username}} - {{u.email}}</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
      data(){
        return {
          user: {
            username: '',
            email:'',
          },
          users:[],
          resource:{}
        }
      },
      methods: {
        submit(){
          // this.$http.post('data.json', this.user) 
          //   .then(res =>{console.log(res)}, error => {console.log(error)}
          //   );
          this.resource.save({}, this.user);
        },
        fetchData(){
          let vm = this;
          this.$http.get('data.json')
            .then(res => {
              return res.json();
            })
            .then(data =>{
              const resultArr =[];
              for(let key in data){
                 resultArr.push(data[key]);
              }
              this.users = resultArr;
            })
        },
      },
      created(){
          this.resource = this.$resource('data.json');
        }
    }
</script>

<style>
</style>
