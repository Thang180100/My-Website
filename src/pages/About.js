import React from 'react';
import showroom from '../assets/showroom.jpeg'
import '../styles/About.css'

function About() {
    return (
        <div className='about'>
            <div
                className='aboutTop'
                style={{ backgroundImage: `url(${showroom})` }}
            >
            </div>
            <div className='aboutBottom'>
                <h1> GIỚI THIỆU MAZDA TẠI VIỆT NAM </h1>
                <p> Năm 2011, Thaco hợp tác với tập đoàn Mazda Nhật Bản xây dựng nhà máy sản xuất và lắp ráp xe Mazda tại khu Kinh tế mở Chu Lai,
                    Quảng Nam với công suất 10.000 xe/năm. Mẫu xe đầu tiên được sản xuất là Mazda2, tiếp đó là ba mẫu xe Mazda CX-5,
                    Mazda6 và Mazda3 nối bước nhau tạo nên dấu ấn mạnh trên thị trường Việt Nam. Mazda đánh dấu sự trở lại Việt Nam với doanh số bước đầu rất khiêm tốn ở mức 606 xe. Bước sang 2012, doanh số xe Mazda đạt 900 xe và năm 2013 bùng nổ mạnh mẽ với doanh số đạt hơn 4.000 xe,
                    tăng gấp 5 lần so với năm 2012. Năm 2014, Mazda lập kỷ lục doanh số khi bán ra 9.438 xe, đứng vị trí thứ 2 trong nhóm các thương hiệu Nhật có doanh số cao nhất và vươn lên vị trí thứ 4 trong VAMA chỉ chưa đầy 3 năm trở lại Việt Nam.
                    Đây một tín hiệu đầy lạc quan cho thấy khách hàng Việt Nam vẫn liên tục dành sự yêu mến nồng nhiệt cho thương hiệu xe hơi lâu đời đến từ Nhật Bản.
                    Trong đó, những mẫu xe bán chạy như Mazda3, Mazda6, CX-5, BT-50,..đều đang chiếm lĩnh vị trí hàng đầu các phân khúc tại Việt Nam.
                    Bên cạnh hoạt động kinh doanh trong nước, Thaco cũng đẩy mạnh việc xuất khẩu xe Mazda sang các thị trường Lào, Campuchia, Myanma…
                    nhằm mở rộng thị trường tại khu vực Đông Nam Á, đóng góp vào sự phát triển chung của nền kinh tế Việt Nam. Ngoài sự đa dạng hóa các dòng xe tại hầu hết các phân khúc trên thị trường,
                    yếu tố quan trọng khác giúp Mazda tăng trưởng ổn định là đưa ra nhiều lựa chọn mẫu xe. Cụ thể, tại Việt Nam,
                    Mazda sở hữu 6 mẫu xe trải đều các phân khúc từ B,C,D, CUV, SUV, pick-up, mỗi mẫu xe có từ 2-3 lựa chọn phiên bản kiểu dáng, động cơ… Nhờ đó,
                    phần lớn những mẫu xe Mazda đều có doanh số cao và luôn lọt vào danh sách xe bán chạy nhất tại Việt Nam.
                </p>
            </div>
        </div>
    );
}

export default About;