
import { useState, useEffect } from 'react';
function Home() {
    
  return (
   <> 
    <section className="first_section">
	<div className="container">
		<div className="row mt-5 mb-5">
			<div className="col-12 text-center">
				<h1>TITLE HERE</h1> </div>
		</div>
		<div className="container">
			<div className="row text-center">
				<div className="col-md-6 col-sm-6 adj_col "> <img className="mb-3" src="assets/images/image1.svg" alt=""/>
				 <img className="mt-3" src="assets/images/image2.svg" alt=" /"> </div>
				<div className="col-md-6 col-sm-6">
					<div className="main_row row_bg count_call">
						<div className="row text-center mt-5 mb-5">
							<h2>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. </h2> </div>
						<div className="row mb_row text-center">
							<div className="col-12 mb-3">
								<button type="button" className="btn btn_font mb-2 d-block ">1111</button>
								<button type="button" className="btn btn_font mb-2 d-block">MINT</button>
							</div>
						</div>
						<div className="row">
							<div className="col-3 cent_icon">
								<a href="#"><img src="assets/images/plus.svg" alt="" /></a>
							</div>
							<div className="col-6 p-0">
								<h1 className="counted">5</h1></div>
							<div className="col-3 cent_icon">
								<a href="#"><img src="assets/images/minus.svg" alt=""></a>
							</div>
						</div>
						<div className="row">
							<div className="col-12 mt-5 mb-3 mint_cw">
								<button type="button" className="btn bg-btnn btn_font mb-2 d-block">MINT</button>
							</div>
						</div>
					</div>
					<div className="row set_row  count_head">
						<div className="col-12 text-center">
							<button type="button" className="btn bg-none counted mb-2">SNEAK PEEK</button>
						</div>
					</div>
				</div>
</section>

<section className="second_section">
	<div className="container-fluid">
		<div className="col_img "><img src="assets/images/image_bg_1.svg" alt="featured image"> <img className="ml-2 mr-2" src="assets/images/image_bg_2.svg" alt="featured image"> <img src="assets/images/image_bg_3.svg" alt=" featured image"> </div>
	</div>
</section>
<section className="third_section">
	<div className="container text-center">
		<h1 className=" faq_heading">RARITY</h1>
		<div className="row mt-3 mb-3">
			<div className="col-md-4 col-sm-12">
				<div className="box_image"> <img src="assets/images/image_common.svg" alt="Flying Kites">
					<div className="text_image">
						<h3 className="text_set">COMMON</h3> </div>
				</div>
				<div className="text_captioned ">
					<h3 className="text_set_cap">3000/16000 ( 20% )</h3> </div>
			</div>
			<div className="col-md-4 col-sm-12">
				<div className="box_image"> <img src="assets/images/image_common.svg" alt="Flying Kites">
					<div className="text_image">
						<h3 className="text_set uncomon">UNCOMMON</h3> </div>
				</div>
				<div className="text_captioned text-center">
					<h3 className="text_set_cap">3000/16000 ( 20% )</h3> </div>
			</div>
			<div className="col-md-4 col-sm-12">
				<div className="box_image"> <img src="assets/images/image_common.svg" alt="Flying Kites">
					<div className="text_image">
						<h3 className="text_set rare">RARE</h3> </div>
				</div>
				<div className="text_captioned text-center">
					<h3 className="text_set_cap">3000/16000 ( 20% )</h3> </div>
			</div>
		</div>
		<div className="row mt-3 mb-3">
			<div className="col-md-4 col-sm-12">
				<div className="box_image"> <img src="assets/images/image_common.svg" alt="Flying Kites">
					<div className="text_image">
						<h3 className="text_set uniq">UNIQUE</h3> </div>
				</div>
				<div className="text_captioned ">
					<h3 className="text_set_cap">3000/16000 ( 20% )</h3> </div>
			</div>
			<div className="col-md-4 col-sm-12">
				<div className="box_image"> <img src="assets/images/image_common.svg" alt="Flying Kites">
					<div className="text_image">
						<h3 className="text_set epic">EPIC</h3> </div>
				</div>
				<div className="text_captioned text-center">
					<h3 className="text_set_cap">3000/16000 ( 20% )</h3> </div>
			</div>
			<div className="col-md-4 col-sm-12">
				<div className="box_image"> <img src="assets/images/image_common.svg" alt="Flying Kites">
					<div className="text_image">
						<h3 className="text_set legnd">LEGEND</h3> </div>
				</div>
				<div className="text_captioned text-center">
					<h3 className="text_set_cap">3000/16000 ( 20% )</h3> </div>
			</div>
		</div>
	</div>
</section>
<section className="faq_sec">
	<div className="container text-center">
		<h1 className="rarity">FAQ</h1>
		<div className="row mt-3 mb-3">
			<div className="col-md-12 col-sm-12">
				<!-- accori-->
				<div id="accordion">
					<div className="card">
						<div className="card-header" id="headingOne">
							<h5 className="mb-0">
			  <button className="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
					SOME QUESTION SOME TEXT SOME QUESTION ?
					<i className="fas fa-sort-down"></i>  </button>
			</h5> </div>
						<div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
							<div className="card-body"> SOME ANSWER SOME ANSWER, SOME TEXT, SOME ANSWERS, SOME TEXT, SOME ANSWERS, SOME TEXT </div>
						</div>
					</div>
					<div className="card">
						<div className="card-header" id="headingTwo">
							<h5 className="mb-0">
			  <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
					SOME QUESTION SOME TEXT SOME QUESTION ?
					<i className="fas fa-sort-down"></i>  </button>
			</h5> </div>
						<div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
							<div className="card-body"> SOME ANSWER SOME ANSWER, SOME TEXT, SOME ANSWERS, SOME TEXT, SOME ANSWERS, SOME TEXT </div>
						</div>
					</div>
					<div className="card">
						<div className="card-header" id="headingThree">
							<h5 className="mb-0">
			  <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
					SOME QUESTION SOME TEXT SOME QUESTION ?
					<i className="fas fa-sort-down"></i>	  </button>
			</h5> </div>
						<div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
							<div className="card-body"> SOME ANSWER SOME ANSWER, SOME TEXT, SOME ANSWERS, SOME TEXT, SOME ANSWERS, SOME TEXT </div>
						</div>
					</div>
					<div className="card">
						<div className="card-header" id="headingThre">
							<h5 className="mb-0">
					<button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThre" aria-expanded="false" aria-controls="collapseThree">
						  SOME QUESTION SOME TEXT SOME QUESTION ?
						  <i className="fas fa-sort-down"></i></button>
				  </h5> </div>
						<div id="collapseThre" className="collapse" aria-labelledby="headingThre" data-parent="#accordion">
							<div className="card-body"> SOME ANSWER SOME ANSWER, SOME TEXT, SOME ANSWERS, SOME TEXT, SOME ANSWERS, SOME TEXT </div>
						</div>
					</div>
					<div className="card">
						<div className="card-header" id="headingThreew">
							<h5 className="mb-0">
						<button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThreew" aria-expanded="false" aria-controls="collapseThree">
							  SOME QUESTION SOME TEXT SOME QUESTION ?
							  <i className="fas fa-sort-down"></i>	</button>
					  </h5> </div>
						<div id="collapseThreew" className="collapse" aria-labelledby="headingThreew" data-parent="#accordion">
							<div className="card-body"> SOME ANSWER SOME ANSWER, SOME TEXT, SOME ANSWERS, SOME TEXT, SOME ANSWERS, SOME TEXT </div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
<section className="footer_sec">
	<div className="container text-center">
		<h1 className="rarity mt-4 mb-4">TITLE</h1>
		<div className="row">
			<div className="col-md-12">
				<button type="button" className="btn bg-btnn btn_font mb-2 d-block btn_contract">CONTRACT ADDRESS</button>
			</div>
		</div>
		<div className="row   text-center">
			<div className="col-md-12 image_oc">
				<a href="#"><img src="assets/images/icon/ICON_INSTA.svg" alt="insta_icon"></a>
				<a href="#"><img src="assets/images/icon/ICON_MEDIUM.svg" alt="medium_icon"></a>
				<a href="#"><img src="assets/images/icon/ICON_OS.svg" alt="_icon"></a>
				<a href="#"><img src="assets/images/icon/ICON_TWITTER.svg" alt="twitter_icon"></a>
				<a href="#"><img src="assets/images/icon/ICON_DISCORD.svg" alt="discord_icon"></a>
			</div>
		</div>
</section>

	
	</>
  );
}

export default Home;
