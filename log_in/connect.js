var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json())
const cors = require('cors')

app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(cors())

var {conn, sql} = require('./connect');
const { ConnectionPool } = require('mssql');

app.get('', function(req, res){
    res.send('Hellooo');
})


app.get('/signup', (req, res) => {
    res.send(`
    <form class="modal-content animate" method="post">
    <div class="container">
        <div class="close-box">
            <span onclick="document.getElementById('id02').style.display='none'" class="close" title="Close Modal">&times;</span>
        </div>
        <h1>Register <br></h1>
        <p><br> Please fill in this form to create an account <br><br></p>
        <hr>
        <label for="firstname"><b>Firstname</b></label>
        <input type="text" placeholder="Enter firstname" id="firstname" name="firstname" required>
        <label for="lastname"><b>Lastname</b></label>
        <input type="text" placeholder="Enter lastname" id="lastname" name="lastname" required>
        <label for="email"><b>Email</b></label>
        <input type="text" placeholder="Enter email" id="email" name="email" required>
        <label for="phone"><b>Mobile phone</label>
        <input type="tel" placeholder="Enter your mobile phone" id="phone" name="phone"  required>
        <label for="psw"><b>Password</b></label>
        <input type="password" placeholder="Enter password" id="password" name="psw" required>
        <label for="psw-repeat"><b>Repeat password</b></label>
        <input type="password" placeholder="Repeat password here" id="confirm-password" name="psw-repeat" onkeyup='checkPsw();' required>
        <span id="message"></span>
        <hr>
        <p><br>By creating an account you agree to our <a href="#">Term & Privacy <br><br></a></p>
        <button type="submit" >Register</button>
    </div>
</form>
    `);
  });

  // app.get('/signin', (req, res) => {
  //   res.send(`
  //     <form action="/signed_in" method="POST">
  //       <input type="text" name="email" placeholder="Email" required><br>
  //       <input type="text" name="psw" placeholder="Password" required><br>
  //       <button type="submit">Sign Up</button>
  //     </form>
  //   `);
  // });

app.post('/register', async (req, res) => {
    try {
      // Connect to the database
      const pool = await conn;
  
      const request = pool.request();
      request.input('firstname', sql.NVarChar(40), req.body.firstname);
      request.input('lastname', sql.NVarChar(40), req.body.lastname);
      request.input('email', sql.NVarChar(40), req.body.email);
      request.input('phone_num', sql.NVarChar(40), req.body.phone);
      request.input('pass', sql.NVarChar(40), req.body.psw);
      const result = await request.query('INSERT INTO register(firstname, lastname, email, phone_num, pass) VALUES (@firstname, @lastname, @email, @phone_num, @pass)');
  
      res.send('Customer registered successfully!');
    } catch (error) {
      console.error('Error during customer registration:', error);
      res.status(500).send('An error occurred during registration.');
    }
});

// app.post('/signed_in', async (req, res) => {
//   try{
//     const pool = await conn;
//     const request = pool.request();
//     request.input('email', sql.NVarChar(40), req.body.email);
//     request.input('pass', sql.NVarChar(40), req.body.psw);
//     const result = await request.query('Select * from register where email = @email AND pass = @pass')

//     res.send('Log in successfully!');
//   } catch (error){
//     console.error('Error during login:', error);
//     res.status(500).send('An error occurred during log in.');
//   }
// })


app.listen(3000, function(){
    console.log("Dang chay tai port 3000");
} )