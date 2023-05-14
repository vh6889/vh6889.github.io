//tracker 
var options = {
    rateMin: 20, // giay
    rateMax: 30, //giay
    elementName: "#track-order",
    elementText: "#track-order-name",
    showTime: 6000
}

var trackName = ["Giang","Lâm","Điệp","Hải","Hùng","Hạnh","Cung","Huyền","Dung","Trinh","Phong","Thảo","Tuấn","Giang","Bạch","Cường","Dương","Vinh","Thọ","Long","Hoa","Lung","Khánh","Trường","Quốc","Anh","Trưởng","Phong","Vy","Trung","Sơn","Chung","Hoàng","Mai","Trẩm","Yến","Việt","Dũng","Hòa","Phan","Đồng","Hà","Minh","Thơ","Tín","Nghĩa","Lê","Hợp","Phúc","Cao","Hương","Công","Xuân"];
var trackMap = ["Tp. Hà Nội","Tp. Hồ Chí Minh","Tp. Đà Nẵng","Tuyên Quang","Thái Nguyên","Cà Mau","Hải Dương","Đồng Tháp","Vũng Tàu","Tp. Hải Phòng","Bắc Giang","Bắc Ninh","Long An","Trà Vinh","Quy Nhơn","An Giang","Bến Tre","Bình Định","Bình Dương","Bình Phước","Đồng Nai","Gia Lai","Quảng Nam","Quảng Ngãi","Quảng Trị"];
var headPhone = ["03","05","07","08","09"];
var number = ["01","02","03"];

function getNextRate() {

    return Math.floor(Math.random() * (options.rateMax*1000 - options.rateMin*1000 + 1)) + options.rateMin*1000;
}

$(document).ready(function(){
    setTimeout(function trackorder(){

        var randName  = trackName[Math.floor(Math.random() * trackName.length)];
        var randMap   = trackMap[Math.floor(Math.random() * trackMap.length)];
        var randPhone = headPhone[Math.floor(Math.random() * headPhone.length)]+Math.floor(10000 + Math.random() * 90000)+'xxx';
        var randNumber = number[Math.floor(Math.random() * number.length)];

        $(options.elementText).html('Một khách hàng có số điện thoại: <b>'+randPhone+'</b><br> vừa đặt mua '+randNumber+' bùa hộ mệnh');
        $(options.elementName).css({"right": "12px", "opacity": "1"});
        setTimeout(function(){
            $(options.elementName).css({"right": "-100%", "opacity": "0"});
        },options.showTime);

        setTimeout(trackorder, getNextRate());
    }, getNextRate());
});