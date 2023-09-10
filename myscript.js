
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-auth.js";
import {
    getDatabase,
    set,
    ref,
    push,
    onValue, // onChildAdded, onChildRemoved, onChildChanged, on, get,
} from "https://www.gstatic.com/firebasejs/9.0.0/firebase-database.js";
const auth = getAuth();
const database = getDatabase();

    const subMitBtn = () => {
    
        const classTimingSelect = document.getElementById("classTimingSelect");
        const scheduleSelect = document.getElementById("scheduleSelect");
        const teacherNameSelect = document.getElementById("teacherNameSelect");
        const sectionNameSelect = document.getElementById("sectionNameSelect");
        const courseNameSelect = document.getElementById("courseNameSelect");
        const batchNumberInput = document.getElementById("batchNumberInput");
        
        let usersObj = {
            classTimingSelect: classTimingSelect.value,
            scheduleSelect: scheduleSelect.value,
            teacherNameSelect: teacherNameSelect.value,
            sectionNameSelect:sectionNameSelect.value,
            courseNameSelect:courseNameSelect.value,
            batchNumberInput:batchNumberInput.value,
       };
    
        let refer = ref(database , "Student")
        usersObj.id = push(refer).key
    
        var x = localStorage.getItem("username")
    
                let userref = ref(database ,`Student/${x}`  )
               set(userref ,usersObj)
    
               .then( (succ) =>{
                console.log(succ)
               })
               .catch((reject) => {
                alert(reject)
            })
    }
    
    let submitBtn = document.getElementById("create")
    if (submitBtn) {
        submitBtn.addEventListener("click", subMitBtn)
        alert("present")
    }
    
 
  





