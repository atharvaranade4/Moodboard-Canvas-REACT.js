import React from 'react';
import assets from './assets/Example_1.JPG'

console.log(assets)

export default function Examples (){
    return(
		<section>
			<div className ="examples">
				<h3>Examples</h3>
				<div className="example-images">
					<img src= {require('./assets/Example_1.JPG')} alt="forest" height="300px"/>
					<img src={require('./assets/Example_2.JPG')} alt="forest" height="300px"/>
					<img src={require('./assets/Example_3.JPG')} alt="forest" height="300px"/>
				</div>
			</div>
		</section>
    )    
}