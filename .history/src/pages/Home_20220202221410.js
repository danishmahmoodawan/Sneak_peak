
import { useState, useEffect } from 'react';
function Home() {
    
  return (
   <> 
    	<div className="container-fluid">
		<div className="row">
			<div className="col-1 white_bg col_sm bg_mob"></div>
			<div className="col-11">
				<section className="first_section">
					<div className="container">
						<div className="row">
							<div className="col-md-1  col_bg col_sm"></div>
								<div className="col-md-4 col-sm-6 adj_col ">
									<h1>INVISIAPES</h1>
									<img src="assets/images/image_1.svg" alt="" />
								</div>
								<div className="col-md-5 col-sm-6 count_call">
								<div className="main_row row_bg">
									<div className="row text-center ">
										<div className="col-3 cent_icon"> <a href="#"><img src="assets/images/plus.svg" alt="" /></a></div>
										<div className="col-6"><h1 className="counted">5</h1></div>
										<div className="col-3 cent_icon"><a href="#"><img src="assets/images/minus.svg" alt="" /></a></div>
									</div>
									<div className="row mb_row text-center">
										<div className="col-12">
											<button type="button" className="btn btn_font mb-2 ">1111</button>
											<button type="button" className="btn btn_font btn_font2 mb-2">MINT</button>
										</div>
									</div>
								</div>
								<div className="row set_row  text-center">
									<div className="col-12"> 
										<a href="#"><img src="assets/images/icon/ICON_INSTA.svg" alt="insta_icon" /></a>
										<a href="#"><img src="assets/images/icon/ICON_MEDIUM.svg" alt="medium_icon" /></a>
										<a href="#"><img src="assets/images/icon/ICON_OS.svg" alt="_icon" /></a>
										<a href="#"><img src="assets/images/icon/ICON_TWITTER.svg" alt="twitter_icon" /></a>
										<a href="#"><img src="assets/images/icon/ICON_DISCORD.svg" alt="discord_icon" /></a>
									</div>
								</div>
							</div>
							<div className="col-md-2 col_sm"></div>
						</div>	
					</div>
				</section>
		
				<section className="second_section">
					<div className="container">
						<div className="row">
							<div className="col-md-1  col_bg"></div>
							<div className="col-md-5 left_col">
								<h2>FAQ</h2> 
								<div className="faq_rec">
									<p>ANSWERS, ANSWERS LOREM IPSUM ANSWERS
										MORE ANSWERS AND ANSWERS, ANSWERS LOREM IPSUM ANSWERS MORE ANSWERS AND MORE</p>
								</div>
								<ul className="faq_ul">
									<li>SOME QUESTION HERE AND SOME QUESTION HERE and some question here</li>
									<li>SOME QUESTION HERE AND SOME QUESTION HERE and some question here</li>
									<li>SOME QUESTION HERE AND SOME QUESTION HERE and some question here</li>
									<li>SOME QUESTION HERE AND SOME QUESTION HERE and some question here</li>
									<li>SOME QUESTION HERE AND SOME QUESTION HERE and some question here</li>
								</ul>
							</div>
							<div className="col-md-4 right_col">
								<h2>ROADMAP</h2>
								<div className="row right_in_row">
									<div className="col-md-12 col-lg-3">
										<h2>20%</h2>
									</div>
									<div className="col-md-12 col-lg-9">
										<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec enim erat. Donec scelerisque dui metus, pretium elementum urna rhoncus commodo. </p>
									</div>
								</div>
								<div className="row right_in_row">
									<div className="col-md-12 col-lg-3">
										<h2>50%</h2>
									</div>
									<div className="col-md-12 col-lg-9">
										<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec enim erat. Donec scelerisque dui metus, pretium elementum urna rhoncus commodo. </p>
									</div>
								</div>
								<div className="row right_in_row">
									<div className="col-md-12 col-lg-3">
										<h2>80%</h2>
									</div>
									<div className="col-md-12 col-lg-9">
										<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec enim erat. Donec scelerisque dui metus, pretium elementum urna rhoncus commodo. </p>
									</div>
								</div>
								<div className="row right_in_row">
									<div className="col-md-12 col-lg-3">
										<h2>100%</h2>
									</div>
									<div className="col-md-12 col-lg-9">
										<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec enim erat. Donec scelerisque dui metus, pretium elementum urna rhoncus commodo. </p>
									</div>
								</div>
							</div>
							<div className="col-md-2">
							</div>
						</div>
					</div>
				</section>

			</div>
		</div>
	</div>
	<section className="third_section">
		<div className="container col_sm"><div className="third_bg"></div></div>
		<div className="container">
			<div className="row">
				<div className="col-md-3 col-lg-5">
					<h2>INVISIAPES</h2>
				</div>
				<div className="col-md-9 col-lg-7 imgs_col">
					<img src="assets/images/image_5.svg" alt="" />
					<img src="assets/images/image_5.svg" alt="" />
					<img src="assets/images/image_5.svg" alt="" />
					<img src="assets/images/image_5.svg" alt="" />
				</div>
			</div>
		</div>
		<div className="container col_sm"><div className="third_bg_after"></div></div>
	</section>

	
	</>
  );
}

export default Home;
