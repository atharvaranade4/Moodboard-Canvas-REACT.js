import React from 'react';
import assets from './assets/Example_1.JPG'

console.log(assets)

export default function Examples (){
    return(
		<section>
			<div class ="examples">
				<p>MoodBoard Examples</p>
				<div class="example-images">
					<img src="./assets/Example_1.JPG" alt="forest" height="300px"/>
					<img src="./assets/Example_2.JPG" alt="forest" height="300px"/>
					<img src="./assets/Example_3.JPG" alt="forest" height="300px"/>
				</div>
			</div>
		</section>
    )    
}