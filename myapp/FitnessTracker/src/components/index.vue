
<template src="./index.html"> </template>


<script>

export default {
  
data: function () {
    return {
        username: '',
        password: '',
        users: []
     }
},   
methods: {
  login: function() {
  Vue.http.get('/api/users/' + this.username + "/" + this.password).then((response) => {   

      if(response.body.length > 0){ // if it returns a record then match found... set cookie.
            this.$cookie.set('loginAuth', this.username + "_auth", 1); // set cookie to log in
            
   Vue.route.router.go('/home');
     
      }
    }, function (error) {
        console.log("Error", error.status);        // handle error
    });
  }
}
  };
</script>

