<html lang="VN">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
	<link rel="shortcut icon" href="src/images/favicon.png" type="image/x-icon">
    <meta content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" name="viewport">
    <title>Live stream</title>
	<script src="src/js/main.js" defer></script>
</head>
<div id="step1">
	<body class="step1">
		<section class="main-content">
            <div class="container">
                <div class="content-title">
                    <div class="content-title-txt">
                        <span class="bigtitle text1"></span>
                    </div>
                </div>
				<div class="attrack text2"></div>
				<div class="clear"></div>
                <div class="content-video text3">
                </div>
				<div class="clear"></div>
				<div class="calltext text4"> </div>
				<a class="btn_next text5"> </a>
            </div>
        </section>
	</body>
</div>
<div id="step2">
	<body class="step2">
		<?php
			include('post/includes/functions.php');
			/* Param render footer js */
			$_footer_js = '';
			/* Parse url parameters to $_url_params */
			parse_str($_SERVER['QUERY_STRING'], $_url_params);
			/* Set cookie name for client browser */
			$ukey = isset($_GET['ukey']) ? trim($_GET['ukey']) : '';
			$cookie_name = str_replace('.', '_', _LANDING_URL) . $ukey;
			if ($_POST) {
				if (isset($_POST['order_name']) && $_POST['order_name']!='' && 
					isset($_POST['order_phone']) && $_POST['order_phone']!='') {
					/*** process after form submit ***/
					$txt_order = ''; // to day orders text file.
					if (file_exists(dirname(__FILE__) . 'post/orders/' . date('d-m-Y', time()) . '.txt'))
						$txt_order = file_get_contents(dirname(__FILE__) . 'post/orders/' . date('d-m-Y', time()) . '.txt');
					$data = $_url_params;
					$data['key'] = _KEY;
					$data['landing'] = _LANDING_URL;
					$data['order_name'] = $_POST['order_name'];
					$data['order_phone'] = $_POST['order_phone'];
					$request = json_decode(request_post_api(_SAVE_ORDER_URL, $data), true);
					$directUrl = 'post/error.php';
					if ($request['success']) {
						$_success_string = implode('|', $request['order']);
						$_url_params[base64_encode('success')] = base64_encode($_success_string);
						$directUrl = 'post/success.php';
						$ads_name = $request['offer_name'];
						$tracking_id = $_REQUEST[$request['tracking_token']];
						/* Write order info to ./orders/.txt file */
						if (!preg_match("#phone\: " . $_REQUEST['order_phone'] . " \|#si", $txt_order) && $_REQUEST['order_phone']) {
							@file_put_contents(dirname(__FILE__) . 'post/orders/' . date('d-m-Y', time()) . '.txt', "name: " . $_REQUEST['order_name'] . " | phone: " . $_REQUEST['order_phone'] . " | ads_name:" . $ads_name . " | tracking_id: " . $tracking_id . "\n", FILE_APPEND);
						}
					} else if ($request['error']) {
						$_url_params['order_name'] = $_POST['order_name'];
						$_url_params['order_phone'] = $_POST['order_phone'];
						$_url_params['error'] = $request['error'];
					}
					header('Location: ' . $directUrl . '?' . http_build_query($_url_params));
					exit();
					/*** end form submit ***/
				} else {
					$_footer_js = '<script type="text/javascript">alert("Tên và số điện thoại : không được để trống");</script>';
				}
			} else if (!isset($_COOKIE[$cookie_name])) {
				/* increase landing visit number */
				$_landing_stats = json_decode(landing_visit_counter($_url_params), true);

				/* Set cookie in 1 hour */
				if ($_landing_stats['offer_name']) {
					// $cookie_name = $_landing_stats['landing_stats']['ukey'] ? 'ft_offer_name'.$_landing_stats['landing_stats']['ukey'] : 'ft_offer_name';
					setcookie($cookie_name, time() + 3600, '/');
					setcookie("ft_tracking_token", $_landing_stats['tracking_token'], time() + 3600, '/');
					setcookie("ft_offer_id", $_landing_stats['landing_stats']['offer'], time() + 3600, '/');
				}
			}
		?>
		<div class="wrapper">
			<header class="header">
				<div class="container">
					<div class="flex-aic">
						<a href="#" class="logo">Bùa Hộ Mệnh Ai Cập</a>
						<nav id="nav-js" class="flex nav">
							<ul id="menu-js" class="flex menu list">
								<li><a href="#what-is">Về Horus Amulet</a></li>
								<li><a href="#where">Sự linh thiêng</a></li>
								<li><a href="#celebrities">Người nổi tiếng</a></li>
								<li><a href="#reviews">Lời chứng thực</a></li>
							</ul>
						</nav>
						<button id="menu-btn-js" type="button" class="menu-btn"><span></span></button>
					</div>
				</div>
			</header>
			<section id="main" class="flex-aic main">
				<img src="landing/img/main-img1.jpg" alt="" class="main-img">
				<img src="landing/img/main-img-mob1.jpg" alt="" class="main-img-mob">
				<div class="container">
					<div class="main-wrap">
						<div class="subtitle">Các tế sư Ai Cập nói điều này về bùa hộ mệnh <br> Horus Amulet:</div>
						<h1 class="h1 title">"Ngôi sao của sự giàu có<br> luôn tỏa sáng quanh bạn..."</h1>
						<div class="main-descr">Horus Amulet được chứng minh là một trong những <span class="yellow-txt">bùa hộ mệnh mạnh nhất</span> mọi thời đại trên khắp thế giới. Người mang theo bùa hộ mệnh Horus Amulet không những giàu có nhanh chóng mà còn giữ được sự giàu có bền vững và luôn gặp nhiều may mắn, thành công trong cuộc sống.
						</div>
						<a data-get-bead href="#get-bead" class="get-btn">Đặt bùa hộ mệnh</a>
					</div>
				</div>
			</section>
			<div class="d-md-none separator"></div>
			<section id="what-is" class="what-is">
				<img src="landing/img/what-is.png" alt="" class="what-is-bg">
				<div class="container">
					<h2 class="h2">Horus Amulet và huyền thoại về vị thần cai quản bầu trời</h2>
					<div class="what-is-descr">
						<p>Horus Amulet là bùa hộ mệnh xuất hiện từ thời Ai Cập cổ đại hơn 5000 năm trước. Bùa hộ mệnh này gắn liền với vị thần cai quản bầu trời hùng mạnh nhất trong thần thoại Ai Cập - thần Horus. Truyền thuyết kể lại rằng, vùng sa mạc bao quanh Ai Cập thấm đẫm máu của thần Horus khi con mắt của Người bị hủy hoại trong cuộc chiến với thần Seth tàn bạo trước khi được phục hồi kì diệu bởi thần Hathor.
						</p>
						<p>
							Kể từ đó hai mắt của thần Horus đại diện cho sức mạnh của mặt trăng và mặt trời. Biểu tượng con mắt của thần Horus với 6 mảnh ghép trở thành linh vật thiêng liêng minh chứng cho sức mạnh và phước lành từ các vị thần.
						</p>
						<p>
							<span class="yellow-txt">Bùa hộ mệnh Horus Amulet được làm từ sắt trong sa mạc</span> nơi dòng máu của thần Horus đã đổ xuống - loại sắt này quý hiếm như vàng - là linh nghiệm nhất và được lan truyền qua nhiều thế hệ.
						</p>
						<p>Horus Amulet hoạt động với đặc trưng của mỗi cá nhân. Có nghĩa là bùa hộ mệnh sẽ kết hợp với dòng của riêng bạn và kích thích những năng lượng tích cực đồng thời bảo vệ bạn khỏi những năng lượng xấu. </p>
						<img src="landing/img/what-is.jpg" alt="" class="rsp-img what-is-img">
						<p>Mọi người cần rất nhiều thứ: ai đó thiếu tiền, ai đó tìm kiếm tình yêu, ai đó thiếu hạnh phúc, ai đó kém may mắn .... Nhưng nếu không có sự trợ giúp, có thể đó sẽ chỉ mãi là những giấc mơ mà bạn chẳng bao giờ có thể đạt được.
						</p>
						<p>«Horus Amulet» là cầu nối để truyền tải những mong muốn đó của bạn tới các vị thần. Và khi bạn được ban phước lành, mọi mong ước sẽ trở thành sự thật, bạn sẽ giàu có, thành công và hạnh phúc nhanh hơn bao giờ hết.
						</p>
						<img src="landing/img/what-is-2.jpg" alt="" class="rsp-img what-is-img hidden">
					</div>
				</div>
			</section>
			<div class="separator"></div>
			<section id="where" class="where">
				<img src="landing/img/mask.png" alt="" class="where-bg">
				<div class="container">
					<h2 class="h2">Làm thế nào để tạo ra bùa hộ mệnh được chúc phúc của thần linh?</h2>
					<div class="subtitle">Không phải bất kì đồng xu nào mang biểu tượng con mắt của thần Horus cũng linh nghiệm. Từ thởi cổ đại có những bộ lạc bí ẩn trong sa mạc với các tế sư quyền năng - những người được gọi là sứ giả của thần linh - mới được phép thực hiện các nghi lễ. Vào lúc bình minh, khi tia nắng đầu tiên xuất hiện trên sa mạc, các tế sư sẽ đọc tên của chủ nhân bùa hộ mệnh Horus Amulet trong thánh ca gửi tới thần linh. Kể từ khi đó, bùa hộ mệnh bắt đầu hoạt động cho riêng bạn đến hết cuộc đời.
					</div>
					<div id="where-video-js" class="where-video">
						<video id="video" loop="loop" controls>
							<source src="video/video.mp4" type="video/mp4">
						</video>
						<button type="button" class="play-btn"></button>
					</div>
					<a data-get-bead href="#get-bead" class="get-large-btn hidden">Đặt bùa hộ mệnh</a>
				</div>
			</section>
			<div class="separator"></div>
			<section id="celebrities" class="celebrities">
				<div class="container">
					<h2 class="h2">Người nổi tiếng có mang theo bùa hộ mệnh Horus Amulet?</h2>
					<div class="subtitle">Ngày nay Horus Amulet đã trở nên phổ biến trên toàn thế giới. Nhiều người nổi tiếng và giàu có tin rằng chính bùa hộ mệnh đã giúp họ đạt được rất nhiều.
					</div>
					<ul class="flex celebrities-list list">
						<li class="item item-1">
							<picture><img src="landing/img/fm1.jpg" alt="" class="rsp-img item-photo"></picture>
							<div class="flex item-wrap">
								<div class="item-info">
									<div class="item-post">Doanh nhân thành đạt tại phố Wall - Hoa Kì</div>
									<div class="item-name">Minh Anh</div>
								</div>
								<div class="item-descr">Ở tuổi 34 và sở hữu khối tài sản kếch sù lên tới hơn 30 triệu đô la, Minh Anh cho rằng Horus Amulet có sức mạnh thu hút tiền bạc thật kì diệu. </div>
							</div>
						</li>
						<li class="item item-3">
							<picture><img src="landing/img/fm2.jpg" alt="" class="rsp-img item-photo"></picture>
							<div class="flex item-wrap">
								<div class="item-info">
									<div class="item-post">Người mẫu, dẫn chương trình, ca sĩ hải ngoại nổi tiếng.</div>
									<div class="item-name">Hoàng Quốc Đạt </div>
								</div>
								<div class="item-descr">Trẻ trung, năng động và thành công nhưng Quốc Đạt luôn mang theo bên mình bùa hộ mệnh Horus Amulet. Những vũ điệu sôi động trên sân khấu và chiếc bùa hộ mệnh sáng lấp lánh của anh tạo nên một phong cách hoàn toàn mới mẻ và hấp dẫn.
								</div>
							</div>
						</li>
						<li class="item item-2">
							<picture><img src="landing/img/fm3.jpg" alt="" class="rsp-img item-photo"></picture>
							<div class="flex item-wrap">
								<div class="item-info">
									<div class="item-post">Ông hoàng trong làng kinh doanh bất động sản</div>
									<div class="item-name">Phan Tuấn </div>
								</div>
								<div class="item-descr">Đức tin vào thần linh là chìa khóa của sự thành công. Mọi rủi ro sẽ không tồn tại và thần sẽ mách bảo ta phải làm gì để giàu có. </div>
							</div>
						</li>
					</ul>
				</div>
			</section>
			<div class="separator"></div>
			<section id="reviews" class="reviews">
				<div class="container">
					<h2 class="h2">Phản hồi từ khách hàng</h2>
					<ul id="reviews-carousel" class="flex reviews-list list">
						<li class="item">
							<div class="item-wrap">
								<picture class="item-review"><img src="landing/img/review/1.jpg" alt="" class="rsp-img"></picture>
							</div>
						</li>
						<li class="item">
							<div class="item-wrap">
								<picture class="item-review"><img src="landing/img/review/3.jpg" alt="" class="rsp-img"></picture>
							</div>
						</li>
						<li class="item">
							<div class="item-wrap">
								<picture class="item-review"><img src="landing/img/review/2.jpg" alt="" class="rsp-img"></picture>
							</div>
						</li>
					</ul>
				</div>
			</section>
			<div class="d-sm-none separator"></div>
			<section id="get-bead" class="get-bead">
				<div class="container">
					<div class="get-bead-wrap">
						<h2 class="h1 title">
							Nhận ngay bùa hộ mệnh của riêng bạn <br /> </br>
						</h2>
						<span class="old_price">Giá thường: <span class="price_land_curr">1,250,000<sup> đ</sup></span></span>
						<span class="new_price"> Nay chỉ còn: <span class="yellow-txt">
								<span class="price"><span class="price_land_s1">690,000</span></span>
								<span class="price_land_curr"><sup>đ</sup></span>
							</span> </span>
						<div class="subtitle">Giảm giá 45% đến hết ngày <script>
								dtime_nums(-1, true)
							</script>
						</div>
						<form action="index.php?<?= $_SERVER['QUERY_STRING'] ?>" method="POST" class="get-bead-form order_form orderformcdn">
							<select name="country" id='country' class="country_select">
								<option value='258'>Deutschland</option>
								<option value='291'>საქართველო</option>
								<option value='298'>Latvija</option>
								<option value='310'>Polska</option>
								<option value='321'>Lietuva</option>
								<option value='346'>Moldova</option>
								<option value='481' selected="selected">Việt Nam</option>
							</select>
							<input type="text" name="order_name" required="" placeholder="Họ và tên"> <br>
							<input type="tel" name="order_phone" required="" placeholder="Số điện thoại">
							<button type="submit" class="get-btn submit">ĐẶT HÀNG</button>
						</form>
						<div id="track-order" class="track-order">
							<div class="track-flex">
								<div class="f-row">
									<img data-src="images/track.png" src="landing/img/track.png" class="img-responsive">
								</div>
								<div class="f-row">
									<div id="track-order-name">Một khách hàng tên Yến (sdt: 0883211xxx) tại Vũng Tàu vừa đặt mua 01 sản phẩm.</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<div class="separator"></div>
			<script type="text/javascript" src="landing/js/track.order.js"></script>
			<footer class="footer">
				<div class="container">
					<div class="social">
						<div class="copyright">
							<img src="landing/img/rekv_ALL.png" style="display:block;margin:0 auto">
							© 2019 Horus Amulet. All rights reserved
							<br>
							|
							<a href="privacypolicy.html" target="_blank" style="text-decoration:none;">Privacy Policy</a>
							|
							<a href="termofuse.html" target="_blank" style="text-decoration:none;">Term Of Use</a>
							|
							<a href="disclaimer.html" target="_blank" style="text-decoration:none;">Disclaimer</a>
						</div>
					</div>
				</div>
			</footer>
			<?php echo $_footer_js; ?>
		</div>
	</body>
</div>
</html>