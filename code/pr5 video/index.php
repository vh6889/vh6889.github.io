<html lang="VN">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
	<link rel="shortcut icon" href="src/images/favicon.png" type="image/x-icon">
    <meta content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" name="viewport">
    <title>Live stream</title>
	<script src="src/js/main.js" defer></script>
	<script src="landing/js/jquery-1.12.4.min.js" type="text/javascript"></script>
	<script src="landing/js/dr-dtime.min.js" type="text/javascript"></script>
</head>
<body>
	<div id="step1">
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
	</div>
	<div id="step2">
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
			<div class="loadcontent">

			</div>
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
									<img data-src="images/track.png" src="img/track.png" class="img-responsive">
								</div>
								<div class="f-row">
									<div id="track-order-name">Một khách hàng tên Yến (sdt: 0883211xxx) tại Vũng Tàu vừa đặt mua 01 sản phẩm.</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
         </div>
        <div class="separator"></div>
        <script type="text/javascript" src="js/track.order.js"></script>
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
</html>