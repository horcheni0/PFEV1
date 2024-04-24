import React from 'react'
import './CSS/Login.css'
import img3 from '../Component/Assets/img3.jpg'

const Loginsignup = () => {
	
  return (
    <body class="form-v6">
	<div class="page-content">
		<div class="form-v6-content">
			<div class="form-left">
				<img src={img3} alt="" />
			</div>
			<form class="form-detail" >
				<h2>Register Form</h2>
				<div class="form-row">
					<input type="text"  placeholder="Your Name"/><br /><br />
				</div>
				<div class="form-row">
					<input type="text"  placeholder="Email Address"/><br /><br />
				</div>
				<div class="form-row">
					<input type="password" placeholder="Password" /><br /><br />
				</div>
				<div class="form-row">
					<input type="password"  placeholder="Comfirm Password"/><br /><br />
				</div>
				<div class="form-row-last">
					<input type="submit" name="register" class="register" value="Register"/>
				</div>
			</form>
		</div>
	</div>
</body>

  )
}

export default Loginsignup
