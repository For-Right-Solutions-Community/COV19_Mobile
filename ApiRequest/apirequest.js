
  var httpRequestToken = async (name,password) => {

    const user = {
        "username":name,
        "password":password
    };
  
    fetch('http://192.168.0.5:8080/v2/register', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user)
    })
      .then(res => res.json())
      .then(data => {
        //console.log(data.token);
        return data.token;
        // data should contain a JWT token from your backend
        // which you can save in localStorage or a cookie
      })
      .catch(err => console.log(err));
  
  }

  export function httpRequestListPatient() {
    httpRequestToken("chouchensamih@gmail.com","frs123456").then((resultat)=>{
      fetch('http://192.168.0.5:8080/m/patient', {
        method: 'GET',
        headers: {
          'Authorization': 'Bearer ' + resultat
        }
      })
        .then(res => res.json())
        .then(data => {
          console.log("ccccccccccc"+resultat);
          // data should contain a JWT token from your backend
          // which you can save in localStorage or a cookie
        })
        .catch(err => console.log(err));
    });

  
  }