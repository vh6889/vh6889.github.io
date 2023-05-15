// Kiểm tra domain
if (window.location.hostname !== 'localhost') {
  // Nếu domain không chính xác, ngừng thực thi các lệnh sau đó
  throw new Error('');
}
// Các lệnh tiếp theo chỉ được thực thi nếu domain chính xác
console.log('Domain hợp lệ. Các lệnh tiếp theo sẽ được thực thi.');
// ...
// Các lệnh khác bạn muốn thực thi
document.addEventListener('DOMContentLoaded', function() {
	var cssLinks = [
    'https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap',
    'http://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,700italic,300,400,700)',
    'src/css/styles.css'
  ];
  function loadCSS(url) {
    var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = url;
    document.getElementById('step1').appendChild(link);
  }
  cssLinks.forEach(function(url) {
    loadCSS(url);
  });
	// Lấy thẻ có class "text1"
	var text1 = document.querySelector('.text1');
	// Kiểm tra xem thẻ có tồn tại hay không
	if (text1) {
	  // Thiết lập nội dung cho thẻ
	  text1.innerHTML = 'Câu chuyện về cách tôi có được vận may và làm giàu thuận lợi';
	}
	var text2 = document.querySelector('.text2');
	if (text2) {
	  text2.innerHTML = 'Thu nhập <b style="color: #C7DCF7;"><u>50tr/tháng</u></b> chỉ là bắt đầu!';
	}
	var text3 = document.querySelector('.text3');
	if (text3) {
	  text3.innerHTML = '<iframe src="https://player.vimeo.com/video/825407141?h=1b402fa142" width="900" height="506" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>';
	}
	var text4 = document.querySelector('.text4');
	if (text4) {
	  var message = 'Bạn xứng đáng có một cuộc sống tốt hơn: không còn nghèo khó, đau khổ, nợ nần!';
	  text4.innerHTML = ''; // Xóa nội dung ban đầu của phần tử
	  var index = 0;

	  setTimeout(function() {
		var typingEffect = setInterval(function() {
		  text4.innerHTML += message[index];
		  index++;
		  if (index >= message.length) {
			clearInterval(typingEffect);
		  }
		}, 50); // Thay số 100 bằng thời gian delay giữa các ký tự (tính bằng mili giây)
	  }, 5 * 1000); // Thay số bằng thời gian chờ trước khi bắt đầu hiệu ứng (tính bằng giây)
	}
	var text5 = document.querySelector('.text5');
	if (text5) {
	  text5.innerHTML = 'Đặt Horus Amulet Ngay';
	}
//bắt đầu xử lý CTA và step 2
  // Giai đoạn 1: Ẩn class calltext và btn_next
   var iframe = document.querySelector('.content-video iframe');
    document.querySelector('.calltext').style.display = 'none';
    document.querySelector('.btn_next').style.display = 'none';
    setTimeout(function() {
        document.querySelector('.calltext').style.display = 'block';
    }, 5 * 1000); // Thay xx bằng số giây mong muốn
    setTimeout(function() {
        document.querySelector('.btn_next').style.display = 'block';
    }, 10 * 1000); // Thay yy bằng số giây mong muốn
  // Xử lý sự kiện khi người dùng click vào class btn_next
  document.querySelector('.btn_next').addEventListener('click', function() {
    // Ẩn toàn bộ nội dung trong step1
    document.getElementById('step1').style.display = 'none';
    // Hiển thị toàn bộ nội dung trong step2
    document.getElementById('step2').style.display = 'block';
	//Tải css ở step2
	//var link = document.createElement('link');
	//	link.type = 'text/css';
	//	link.rel = 'stylesheet';
	//	link.href = 'landing/css/main.css';
	//document.querySelector('#step2').appendChild(link);
	// Bước 1: Xóa toàn bộ nội dung css cũ trong file styles.css
	var styleTag = document.querySelector('#step1 link[href="src/css/styles.css"]');
	if (styleTag) {
	  styleTag.remove();
	}

	// Bước 2: Lấy nội dung css trong file main.css và ghi vào file styles.css
	fetch('landing/css/main.css') // Đường dẫn đến file main.css
	  .then(response => response.text())
	  .then(css => {
		var styleTag = document.createElement('style');
		styleTag.innerHTML = css;
		document.head.appendChild(styleTag);
	  });

  });
	// Lấy phần tử có lớp "loadcontent"
	var loadcontentElement = document.querySelector('.loadcontent');
	// Đoạn mã HTML cần đưa vào
	var htmlContent = '<header class="header"><div class="container"><div class="flex-aic"><a href="#" class="logo">Bùa Hộ Mệnh Ai Cập</a><nav id="nav-js" class="flex nav"><ul id="menu-js" class="flex menu list"><li><a href="#what-is">Về Horus Amulet</a></li><li><a href="#where">Sự linh thiêng</a></li><li><a href="#celebrities">Người nổi tiếng</a></li><li><a href="#reviews">Lời chứng thực</a></li></ul></nav><button id="menu-btn-js" type="button" class="menu-btn"><span></span></button></div></div></header><section id="main" class="flex-aic main"><img src="landing/img/main-img1.jpg" alt="" class="main-img"><img src="landing/img/main-img-mob1.jpg" alt="" class="main-img-mob"><div class="container"><div class="main-wrap"><div class="subtitle">Các tế sư Ai Cập nói điều này về bùa hộ mệnh <br> Horus Amulet:</div><h1 class="h1 title">"Ngôi sao của sự giàu có<br> luôn tỏa sáng quanh bạn..."</h1><div class="main-descr">Horus Amulet được chứng minh là một trong những <span class="yellow-txt">bùa hộ mệnh mạnh nhất</span> mọi thời đại trên khắp thế giới. Người mang theo bùa hộ mệnh Horus Amulet không những giàu có nhanh chóng mà còn giữ được sự giàu có bền vững và luôn gặp nhiều may mắn, thành công trong cuộc sống.</div><a data-get-bead href="#get-bead" class="get-btn">Đặt bùa hộ mệnh</a></div></div></section><div class="d-md-none separator"></div><section id="what-is" class="what-is"><img src="landing/img/what-is.png" alt="" class="what-is-bg"><div class="container"><h2 class="h2">Horus Amulet và huyền thoại về vị thần cai quản bầu trời</h2><div class="what-is-descr"><p>Horus Amulet là bùa hộ mệnh xuất hiện từ thời Ai Cập cổ đại hơn 5000 năm trước. Bùa hộ mệnh này gắn liền với vị thần cai quản bầu trời hùng mạnh nhất trong thần thoại Ai Cập - thần Horus. Truyền thuyết kể lại rằng, vùng sa mạc bao quanh Ai Cập thấm đẫm máu của thần Horus khi con mắt của Người bị hủy hoại trong cuộc chiến với thần Seth tàn bạo trước khi được phục hồi kì diệu bởi thần Hathor.</p><p>Kể từ đó hai mắt của thần Horus đại diện cho sức mạnh của mặt trăng và mặt trời. Biểu tượng con mắt của thần Horus với 6 mảnh ghép trở thành linh vật thiêng liêng minh chứng cho sức mạnh và phước lành từ các vị thần.</p><p><span class="yellow-txt">Bùa hộ mệnh Horus Amulet được làm từ sắt trong sa mạc</span> nơi dòng máu của thần Horus đã đổ xuống - loại sắt này quý hiếm như vàng - là linh nghiệm nhất và được lan truyền qua nhiều thế hệ.</p><p>Horus Amulet hoạt động với đặc trưng của mỗi cá nhân. Có nghĩa là bùa hộ mệnh sẽ kết hợp với dòng của riêng bạn và kích thích những năng lượng tích cực đồng thời bảo vệ bạn khỏi những năng lượng xấu. </p><img src="landing/img/what-is.jpg" alt="" class="rsp-img what-is-img"><p>Mọi người cần rất nhiều thứ: ai đó thiếu tiền, ai đó tìm kiếm tình yêu, ai đó thiếu hạnh phúc, ai đó kém may mắn .... Nhưng nếu không có sự trợ giúp, có thể đó sẽ chỉ mãi là những giấc mơ mà bạn chẳng bao giờ có thể đạt được.</p><p>«Horus Amulet» là cầu nối để truyền tải những mong muốn đó của bạn tới các vị thần. Và khi bạn được ban phước lành, mọi mong ước sẽ trở thành sự thật, bạn sẽ giàu có, thành công và hạnh phúc nhanh hơn bao giờ hết.</p><img src="landing/img/what-is-2.jpg" alt="" class="rsp-img what-is-img hidden"></div></div></section><div class="separator"></div><section id="where" class="where"><img src="landing/img/mask.png" alt="" class="where-bg"><div class="container"><h2 class="h2">Làm thế nào để tạo ra bùa hộ mệnh được chúc phúc của thần linh?</h2><div class="subtitle">Không phải bất kì đồng xu nào mang biểu tượng con mắt của thần Horus cũng linh nghiệm. Từ thởi cổ đại có những bộ lạc bí ẩn trong sa mạc với các tế sư quyền năng - những người được gọi là sứ giả của thần linh - mới được phép thực hiện các nghi lễ. Vào lúc bình minh, khi tia nắng đầu tiên xuất hiện trên sa mạc, các tế sư sẽ đọc tên của chủ nhân bùa hộ mệnh Horus Amulet trong thánh ca gửi tới thần linh. Kể từ khi đó, bùa hộ mệnh bắt đầu hoạt động cho riêng bạn đến hết cuộc đời.</div><div id="where-video-js" class="where-video"><video id="video" loop="loop" controls><source src="landing/video/video.mp4" type="video/mp4"></video><button type="button" class="play-btn"></button></div><a data-get-bead href="#get-bead" class="get-large-btn hidden">Đặt bùa hộ mệnh</a></div></section><div class="separator"></div><section id="celebrities" class="celebrities"><div class="container"><h2 class="h2">Người nổi tiếng có mang theo bùa hộ mệnh Horus Amulet?</h2><div class="subtitle">Ngày nay Horus Amulet đã trở nên phổ biến trên toàn thế giới. Nhiều người nổi tiếng và giàu có tin rằng chính bùa hộ mệnh đã giúp họ đạt được rất nhiều.</div><ul class="flex celebrities-list list"><li class="item item-1"><picture><img src="landing/img/fm1.jpg" alt="" class="rsp-img item-photo"></picture><div class="flex item-wrap"><div class="item-info"><div class="item-post">Doanh nhân thành đạt tại phố Wall - Hoa Kì</div><div class="item-name">Minh Anh</div></div><div class="item-descr">Ở tuổi 34 và sở hữu khối tài sản kếch sù lên tới hơn 30 triệu đô la, Minh Anh cho rằng Horus Amulet có sức mạnh thu hút tiền bạc thật kì diệu. </div></div></li><li class="item item-3"><picture><img src="landing/img/fm2.jpg" alt="" class="rsp-img item-photo"></picture><div class="flex item-wrap"><div class="item-info"><div class="item-post">Người mẫu, dẫn chương trình, ca sĩ hải ngoại nổi tiếng.</div><div class="item-name">Hoàng Quốc Đạt </div></div><div class="item-descr">Trẻ trung, năng động và thành công nhưng Quốc Đạt luôn mang theo bên mình bùa hộ mệnh Horus Amulet. Những vũ điệu sôi động trên sân khấu và chiếc bùa hộ mệnh sáng lấp lánh của anh tạo nên một phong cách hoàn toàn mới mẻ và hấp dẫn.</div></div></li><li class="item item-2"><picture><img src="landing/img/fm3.jpg" alt="" class="rsp-img item-photo"></picture><div class="flex item-wrap"><div class="item-info"><div class="item-post">Ông hoàng trong làng kinh doanh bất động sản</div><div class="item-name">Phan Tuấn </div></div><div class="item-descr">Đức tin vào thần linh là chìa khóa của sự thành công. Mọi rủi ro sẽ không tồn tại và thần sẽ mách bảo ta phải làm gì để giàu có. </div></div></li></ul></div></section><div class="separator"></div><section id="reviews" class="reviews"><div class="container"><h2 class="h2">Phản hồi từ khách hàng</h2><ul id="reviews-carousel" class="flex reviews-list list"><li class="item"><div class="item-wrap"><picture class="item-review"><img src="landing/img/review/1.jpg" alt="" class="rsp-img"></picture></div></li><li class="item"><div class="item-wrap"><picture class="item-review"><img src="landing/img/review/3.jpg" alt="" class="rsp-img"></picture></div></li><li class="item"><div class="item-wrap"><picture class="item-review"><img src="landing/img/review/2.jpg" alt="" class="rsp-img"></picture></div></li></ul></div></section><div class="d-sm-none separator"></div>'; // 
	// Đưa nội dung HTML vào phần tử "loadcontent"
	loadcontentElement.innerHTML = htmlContent;
	//Xử lý slider"
	if (window.innerWidth < 600) {
  var style = document.createElement('style');
  style.innerHTML = `
    .carousel-active {
      display: flex;
      overflow-x: scroll;
      scroll-snap-type: x mandatory;
      scroll-behavior: smooth;
    }

    .reviews-list {
      width: 300%;
      scroll-snap-points-x: repeat(33.33%); /* Đặt các điểm scroll snap */
      scroll-snap-type: mandatory;
    }

    .reviews-list .item {
      flex: 0 0 33.33%;
      scroll-snap-align: start;
    }
  `;
  document.head.appendChild(style);

  var reviewsCarousel = document.getElementById('reviews-carousel');
  reviewsCarousel.classList.add('carousel-active');

  var slideWidth = reviewsCarousel.scrollWidth / 3;
  var currentPosition = 0;
  var interval;

  function startSlider() {
    interval = setInterval(function() {
      currentPosition += slideWidth;
      if (currentPosition >= reviewsCarousel.scrollWidth) {
        currentPosition = 0;
      }
      reviewsCarousel.scrollTo({
        left: currentPosition,
        behavior: 'smooth'
      });
    }, 3000);
  }

  function stopSlider() {
    clearInterval(interval);
  }

  reviewsCarousel.addEventListener('mouseenter', stopSlider);
  reviewsCarousel.addEventListener('mouseleave', startSlider);

  startSlider();

  var touchStartX = 0;

  reviewsCarousel.addEventListener('touchstart', function(e) {
    touchStartX = e.touches[0].clientX;
  });

  reviewsCarousel.addEventListener('touchmove', function(e) {
    var touchEndX = e.touches[0].clientX;
    var touchDiffX = touchStartX - touchEndX;
    reviewsCarousel.scrollLeft += touchDiffX;
    touchStartX = touchEndX;
  });
}


});
 