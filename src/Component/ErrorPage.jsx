import React from 'react'
import '../index.css'
import { Link,useNavigate } from "react-router-dom";
import ErrorPage from '../Images/ErrorPage.gif';

export default function PageNotFound() {
	const navigate =  useNavigate()
	navigate('/');
  return (
    <>
      <section class="page_Error">
	<div class="container">
		<div class="row">	
		<div class="col-sm-12 ">
		<div class="col-sm-12 col-sm-offset-1  text-center">
		<div >
			<img  class="four_zero_four_bg_Error" src={ErrorPage}></img>
			<h1 class="text-center "></h1>
		</div>
		<div class="contant_box_Error">
		<h4>
		Error 502: Something went wrong...
		</h4>
		<p>Our engineers are currently fixing something.</p>
        <p> We expect them to be done soon.</p>
		<Link className="link_Error" to="/">Go to Home Page</Link>
	</div>
		</div>
		</div>
		</div>
	</div>
</section>
    </>
  )
}
