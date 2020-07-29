export class API {
    static loginUser(body) {
        return  fetch(`https://internshiptask12345.herokuapp.com/v1/api/user/login/`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
              
            },
            body: JSON.stringify(body)

          }).then( response => response.json() )
          .then( res => console.log(res))
    }

    static registerUser(body) {
        return  fetch(`https://internshiptask12345.herokuapp.com/v1/api/user/signup/`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
              
            },
            body: JSON.stringify(body)

          }).then( response => response.json() )
          .then( console.log('Registered Successfully!'))
    }

}