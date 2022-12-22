class Authentication{

    setLoggedUser(username){
          sessionStorage.setItem('authenticatedUser',username)
    }

    getLoggedUser(){
        let username = sessionStorage.getItem('authenticatedUser');
        return username;
    }

    isUserLoggedIn(){
         let user = this.getLoggedUser();
         if(user === null){
             return false
         }else{
             return true
         }
    }

    removeUser(){
        sessionStorage.removeItem('authenticatedUser');
    }

}

export default new Authentication();