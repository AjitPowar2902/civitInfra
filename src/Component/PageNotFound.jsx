import React from 'react'
import '../index.css'
import { Link,useNavigate } from "react-router-dom";
import pagenotfound from '../Images/404_Space.gif';

export default function PageNotFound() {
	const navigate =  useNavigate()
	navigate('/');
  return (
    <>
      <section class="page_404">
	<div class="container">
		<div class="row">	
		<div class="col-sm-12 ">
		<div class="col-sm-12 col-sm-offset-1  text-center">
		<div >
			<img  class="four_zero_four_bg_404" src={pagenotfound}></img>
			<h1 class="text-center "></h1>
		
		
		</div>
		
		<div class="contant_box_404">
		<h4>
		Look like you're lost
		</h4>
		
		<p>the page you are looking for not avalible!</p>
		<Link className="link_404" to="/">Go to Home</Link>
	</div>
		</div>
		</div>
		</div>
	</div>
</section>
    </>
  )
}
