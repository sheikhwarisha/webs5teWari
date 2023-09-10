
import { getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-auth.js";
  import {
    getDatabase,
    set,
    ref,
    onValue , // onChildAdded, onChildRemoved, onChildChanged, on, get,
  } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-database.js";
  const auth = getAuth();
  const database = getDatabase();
const signup = () => {
     console.log(auth);
    let username  = document.getElementById("username")
    let email = document.getElementById("email")
    let password = document.getElementById("password")
    createUserWithEmailAndPassword(auth, email.value, password.value)
        .then((resolve) => {
           localStorage.setItem('username',username);
          console.log(resolve)
          // let adminname = "Sanail"
          // let adminemail = "sanail@gmail.com";
          // let adminepassword = "Sanail1234";
          // if (username.value || email.value || password.value === adminname || adminemail || adminepassword ) {
          //   alert("successfully Admin Signup")
            window.location.href = "login.html"
          // }
          // else{   
          //   //krna kia h .. login ho rha h ?
          //   alert("successfully Student Signup")
          // }
            let userId = auth.currentUser.uid;
            // console.log(userId);
           let userref = ref(database ,`Users/${userId}`  )
            // "(" + username.value +")"
           let usersObj = {
            username: username.value,
            email: email.value,
            password: password.value,
          };
          set(userref ,usersObj);   
        })
        .catch((reject) => {
            alert(reject)
        })
}
let signup_btn = document.getElementById("signup-btn")
if(signup_btn){
signup_btn.addEventListener("click",signup)
}

const login= (e) => {
  e.preventDefault()
  let email = document.getElementById("loginemail");
  let password = document.getElementById("loginpassword");
  signInWithEmailAndPassword(auth, email.value, password.value)
    .then((userCredential) => {
        let userId = userCredential.user.uid
      // alert("successfully Login");
      // let userId = auth.currentUser.uid;
      // let usernameRef = ref(database, "users/" + userId);
      let usernameRef = ref(database,`Users/${userId}`);
      onValue(usernameRef ,(data)=> {
        console.log(data.val())
        if(data.val().email == "hafee123@gmail.com"){
          if(data.val().isAdmin == true){
            window.location.href = "admin.html"
            
            console.log("admin")
          }
        }else{
          // window.location.href = "portal.html"
          console.log("normal")
        }
          // let userData = data.val().username;
          // document.getElementById("username").innerHTML = userData;
      })
    })
    .catch((reject) => {
      alert(reject);
    });
};
 
let login_btn = document.getElementById("login_btn");
if (login_btn) {
  login_btn.addEventListener("click",login);
}


// function logout (){
//   signOut(auth).then(()=>{
//   window.location.href="signup.html"
//   })
//   } 
  let logout =  document.getElementById("logoutbutton")
 if (logout)  {
    logout.addEventListener("click",logout)
  }
 