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
	 // Thêm lớp "step2" vào phần tử gốc của step2
	document.querySelector('.step2').classList.add('step2');
	var link = document.createElement('link');
		link.type = 'text/css';
		link.rel = 'stylesheet';
		link.href = 'landing/css/main.css';
	document.querySelector('#step2').appendChild(link);
	// Tải JavaScript của step2
	 var script1 = document.createElement('script');
	  script1.src = 'landing/js/jquery-1.12.4.min.js';
	  script1.type = 'text/javascript';
	document.querySelector('#step2').appendChild(script1);
	 var script2 = document.createElement('script');
	  script2.src = 'landing/js/script.js';
	  script2.type = 'text/javascript';
	document.querySelector('#step2').appendChild(script2);
	 var script3 = document.createElement('script');
	  script3.src = 'landing/js/dr-dtime.min.js';
	  script3.type = 'text/javascript';
	  document.querySelector('#step2').appendChild(script3);
  });
});