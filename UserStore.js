class UserStore {
    constructor(){
     if(! UserStore.instance){
       this.userList = [];

       Object.freeze(this);

       UserStore.instance = this;
     }
  
     return UserStore.instance;
    }
  
    set setData(data) {

        for (var i = this.userList.length; i > 0; i--) {
            this.userList.pop();
        }

        data.forEach(element => {
            

            this.userList.push(element);
        }); 
    }

}


  class User {
    constructor(id,avatar_url,login,html_url){
        this.id = id,
        this.avatar = avatar_url,
        this.login = login,
        this.url = html_url
     }
  }

  
  
  
