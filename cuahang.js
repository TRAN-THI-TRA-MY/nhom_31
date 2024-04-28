const product = [
    {
        id: 0,
        image: 'img/bao-20kg-thuc-an-hat-cho-meo-truong-thanh-zoi-cat.jpg',
        title: 'Hạt Zoi Cat',
        price: 120,
    },
    {
        id: 1,
        image: 'img/hat-cho-cho-royal-canin.jpg',
        title: 'Hạt Royal Canin ',
        price: 180,
    },
    {
        id: 2,
        image: 'img/pate-meo-kings-cat.png',
        title: 'Pate Kingscat',
        price: 65,
    },
    {
        id: 3,
        image: 'img/Dog-Chews.jpg',
        title: 'Dog Chews',
        price: 15,
    },
    {
        id: 4,
        image: 'img/thuoc-xit-ngoai-da-diet-ve-ran.jpg',
        title: 'Thuốc diệt ve',
        price: 25,
    },
    {
        id: 5,
        image: 'img/thuoc-tay-giun-san-cho.jpg',
        title: 'Thuốc tẩy giun',
        price: 95,
    },
    {
        id: 6,
        image: 'img/vitamin-paste.jpg',
        title: 'Vitamin Pate',
        price: 165,
    },
    {
        id: 6,
        image: 'img/thuoc-xit-nam.jpg',
        title: 'Thuốc xịt nấm',
        price: 155,
    },
    
    {
        id: 7,
        image: 'img/can-cau-meo-dinh-chuong-long-vu.jpg',
        title: 'Cần câu',
        price: 60,
    },
    {
        id: 8,
        image: 'img/ban-cao-mong-giay-cho-meo.jpg',
        title: 'Bàn cào',
        price: 120,
    },
    {
        id: 9,
        image: 'img/emcamap.png',
        title: 'Ổ nệm ',
        price: 190,
    },
    {
        id: 10,
        image: 'img/con-chuot.jpg',
        title: 'Con chuột',
        price: 25,
    },
    {
        id: 11,
        image: 'img/mu-giang-sinh-cho-meo.jpg',
        title: 'Mũ Giáng sinh ',
        price: 45,
        
    },
    {
        id: 12,
        image: 'img/ao-canh-sat-cho-cho.jpg',
        title: 'Áo cảnh sát',
        price: 110,
        

    },
    {
        id: 13,
        image: 'img/vong-co-chuong-cho-meo.jpg',
        title: 'Vòng cổ',
        price: 30,
        
    },
    {
        id: 14,
        image: 'img/aothun.png',
        title: 'Áo thun',
        price: 80,
        
    }
];
const categories = [...new Set(product.map((item)=>
    {return item}))]
    let i=0;
document.getElementById('root').innerHTML = categories.map((item)=>
{
    var {image, title, price} = item;
    return(
        `<div class='box'>
            <div class='img-box'>
                <img class='images' src=${image}></img>
            </div>
        <div class='bottom'>
        <p style='font-size:16px;'>${title}</p>
        <h2>$ ${price}.00</h2>`+
        "<div class='star-rating star-rated'>"+
             "<div class='empty'>"+
                "<i class='fa-regular fa-star'></i>"+
                "<i class='fa-regular fa-star'></i>"+
                "<i class='fa-regular fa-star'></i>"+
                "<i class='fa-regular fa-star'></i>"+
                "<i class='fa-regular fa-star'></i>"+
                "<span class='rating-value'>0</span>"+
            "</div>"+
            "<div class='fill'>"+
                "<i class='fa-solid fa-star'></i>"+
                "<i class='fa-solid fa-star'></i>"+
                "<i class='fa-solid fa-star'></i>"+
                "<i class='fa-solid fa-star'></i>"+
                "<i class='fa-solid fa-star'></i>"+
        "</div>"+
        "</div>"+

        "<button onclick='addtocart("+(i++)+")'>Thêm vào giỏ</button>"+
        `</div>
        </div>`
    )
}).join('')

var cart =[];

function addtocart(a){
    cart.push({...categories[a]});
    displaycart();
}
function delElement(a){
    cart.splice(a, 1);
    displaycart();
}

function displaycart(){
    let j = 0, total=0;
    document.getElementById("count").innerHTML=cart.length;
    if(cart.length==0){
        document.getElementById('cartItem').innerHTML = "Giỏ hàng trống";
        document.getElementById("total").innerHTML = "$ "+0+".00";
    }
    else{
        document.getElementById("cartItem").innerHTML = cart.map((items)=>
        {
            var {image, title, price} = items;
            total=total+price;
            document.getElementById("total").innerHTML = "$ "+total+".00";
            return(
                `<div class='cart-item'>
                <div class='row-img'>
                    <img class='rowimg' src=${image}>
                </div>
                <p style='font-size:12px;'>${title}</p>
                <h2 style='font-size: 15px;'>$ ${price}.00</h2>`+
                "<i class='fa-solid fa-trash' onclick='delElement("+ (j++) +")'></i></div>"
            );
        }).join('');
    }

    
}

// form login
function redirectToLoginPage() {
    // Chuyển hướng người dùng đến trang đăng nhập
    window.location.href = "dangnhap.html";
}
function redirectToHomePage() {
    // Chuyển hướng người dùng đến trang đăng nhập
    window.location.href = "index.html";
}
document.getElementById('doan').addEventListener('click', function(event) {
    event.preventDefault(); // Ngăn chặn hành động mặc định của thẻ a
    var product0 = document.getElementById('root').querySelectorAll('.box')[0];
    if (product0) {
        const headerHeight = 72; // Chiều cao của thanh header
        const productTop = product0.getBoundingClientRect().top;
        const scrollPosition = productTop - headerHeight;
        window.scrollBy({ top: scrollPosition, behavior: 'smooth' });
    }
});


document.getElementById('thuoc').addEventListener('click', function(event) {
    event.preventDefault(); // Ngăn chặn hành động mặc định của thẻ a
    var product4 = document.getElementById('root').querySelectorAll('.box')[4];
    if (product4) {
        const headerHeight = 72; // Chiều cao của thanh header
        const productTop = product4.getBoundingClientRect().top;
        const scrollPosition = productTop - headerHeight;
        window.scrollBy({ top: scrollPosition, behavior: 'smooth' });
    }
});
document.getElementById('dochoi').addEventListener('click', function(event) {
    event.preventDefault(); // Ngăn chặn hành động mặc định của thẻ a
    var product8 = document.getElementById('root').querySelectorAll('.box')[8];
    if (product8) {
        const headerHeight = 72; // Chiều cao của thanh header
        const productTop = product8.getBoundingClientRect().top;
        const scrollPosition = productTop - headerHeight;
        window.scrollBy({ top: scrollPosition, behavior: 'smooth' });
    }
});

document.getElementById('quanao').addEventListener('click', function(event) {
    event.preventDefault(); // Ngăn chặn hành động mặc định của thẻ a
    var product12 = document.getElementById('root').querySelectorAll('.box')[12];
    if (product12) {
        const headerHeight = 72; // Chiều cao của thanh header
        const productTop = product12.getBoundingClientRect().top;
        const scrollPosition = productTop - headerHeight;
        window.scrollBy({ top: scrollPosition, behavior: 'smooth' });
    }
});


// Hiển thị thông báo xử lý đơn hàng
function showProcessingMessage() {
    alert("Cửa hàng Meimei Pet đang xử lý đơn hàng của bạn. Vui lòng chờ trong giây lát.");
}

/*document.querySelectorAll('.box').forEach((box, index) => {
    const emptyStars = box.querySelectorAll('.empty i');

    emptyStars.forEach((star, starIndex) => {
        star.addEventListener('click', () => {
            // Loại bỏ lớp fill cho tất cả các ngôi sao trong phần tử box hiện tại
            const fillStars = box.querySelectorAll('.fill i');
            fillStars.forEach((fillStar) => {
                fillStar.classList.remove('fill');
                fillStar.classList.add('empty');
            });

            // Thêm lớp fill cho các ngôi sao từ 0 đến starIndex (bao gồm starIndex) trong phần tử box hiện tại
            for (let i = 0; i <= starIndex; i++) {
                emptyStars[i].classList.add('fill');
                emptyStars[i].classList.remove('empty');
            }
        });
    });
});*/
/*document.querySelectorAll('.box').forEach((box, index) => {
    const emptyStars = box.querySelectorAll('.empty i');
    const ratingValue = box.querySelector('.rating-value');
    let totalClicks = 0; // Biến đếm số lần click
    let totalRating = 0; // Tổng điểm đã đánh giá

    emptyStars.forEach((star, starIndex) => {
        star.addEventListener('click', () => {
            // Tăng biến đếm số lần click
            totalClicks++;

            for (let i = 0; i <= starIndex; i++) {
                emptyStars[i].classList.add('fill');
                emptyStars[i].classList.remove('empty');
            }
        
            // Đếm số ngôi sao fill được click
            let filledStars = 0;
            for (let i = 0; i <= starIndex; i++) {
                if (emptyStars[i].classList.contains('fill')) {
                    filledStars++;
                }
            }

            // Tính toán tổng điểm đã đánh giá
            totalRating = filledStars;

            // Tính toán điểm trung bình và cập nhật giá trị của rating-value
            const averageRating = totalRating / totalClicks;
            ratingValue.textContent = averageRating.toFixed(1);
        });
    });
});*/

document.querySelectorAll('.box').forEach((box, index) => {
    const emptyStars = box.querySelectorAll('.empty i');
    const ratingValue = box.querySelector('.rating-value');
    let totalRating = 0; // Tổng số ngôi sao fill từ tất cả các lần click trước đó
    let totalClicks = 0; // Tổng số lần click

    emptyStars.forEach((emptyStar, starIndex) => {
        emptyStar.addEventListener('click', () => {
            // Đánh dấu ngôi sao fill cho lần click hiện tại và tất cả các lần click trước đó
            emptyStars.forEach((star, i) => {
                if (i <= starIndex) {
                    star.classList.add('fill');
                    star.classList.remove('empty');
                } else {
                    star.classList.remove('fill');
                    star.classList.add('empty');
                }
            });

            // Đếm số ngôi sao fill từ tất cả các lần click trước đó
            let filledStars = 0;
            emptyStars.forEach((star) => {
                if (star.classList.contains('fill')) {
                    filledStars++;
                }
            });

            // Tính điểm trung bình và cập nhật giá trị của rating-value
            totalRating += filledStars; // Tổng số ngôi sao fill từ tất cả các lần click trước đó
            totalClicks++; // Tổng số lần click
            const averageRating = totalRating / totalClicks; // Tính điểm trung bình
            ratingValue.textContent = averageRating.toFixed(1);
        });
    });
});


// ẩn hiện giở hàng
const overlay = document.getElementById('overlay');
        const sidebar = document.getElementById('sidebar');
        const cartIcon = document.getElementById('cartIcon');
    
        cartIcon.addEventListener('click', function() {
            overlay.style.display = 'block';
            sidebar.style.display = 'block';
        });

        overlay.addEventListener('click', function() {
            overlay.style.display = 'none';
            sidebar.style.display = 'none';
        });
        document.querySelector('.close-cart').addEventListener('click', function() {
            document.getElementById('sidebar').style.display = 'none'; // Ẩn phần tử sidebar khi nhấn vào nút đóng
            document.getElementById('overlay').style.display = 'none'; // Ẩn cả overlay
        });
    
