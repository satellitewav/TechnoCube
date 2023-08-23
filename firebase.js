//firebase needs thses to figure out on how we r connecting to database
//configuring the app on the front end to link with our firebase which we created on website
var firebaseConfig = {
    apiKey: "AIzaSyDnQHFpWws9W0eMf9rdE_VteAvzvPmQJcA",
    authDomain: "teknocube-6efab.firebaseapp.com",
    projectId: "teknocube-6efab",
    storageBucket: "teknocube-6efab.appspot.com",
    messagingSenderId: "591998472017",
    appId: "1:591998472017:web:908836c19bc3ce70ac0d70",
    measurementId: "G-R0BHE0GQ18"
};

// Initialize Firebase

var app = firebase.initializeApp(firebaseConfig);
        db = firebase.firestore(app);
        firebase.firestore().settings({
            cacheSizeBytes: firebase.firestore.CACHE_SIZE_UNLIMITED
        });

const analytics = firebase.analytics();

db.collection("players3").orderBy("score", "desc").limit(5)
.get()
.then(querySnapshot=>{
        querySnapshot.forEach(doc=>{
            let data = doc.data();
            let row  = `<tr>
                            <td>${data.name}</td>
                            <td>${data.score}</td>
                      </tr>`;
            let table = document.getElementById('myTable')
            table.innerHTML += row
        })
})
.catch(err=>{
    console.log(`Error: ${err}`)
}); 


function display(){
          document.getElementById('table').style.display = "block";
}

window.addEventListener("scroll", (e) => {
    e.preventDefault();
    window.scrollTo(0, 0);
  });