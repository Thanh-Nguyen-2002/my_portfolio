export const data_project_detail = [
    {
        slug: "travel_booking",
        name: "Travel Booking Platform",
        desc: "Hệ sinh thái đặt tour & khách sạn toàn diện gồm: giao diện đặt phòng khách hàng, hệ thống quản trị nội bộ CMS và backend RESTful API bảo mật.",
        tech: ["ReactJS", "Tailwind CSS", "Ant Design", "TanStack Query", "Java Spring Boot", "PostgreSQL", "VNPay", "Cloudinary"],
        image: "/images/banner.jpeg",
        github: "https://github.com/Thanh-Nguyen-2002/travel-booking-cms",
        github2: "https://github.com/Thanh-Nguyen-2002/travel-booking-landingpage",
        knowledgeHtml: `
        <div class="grid md:grid-cols-2 gap-6">
            <!-- 1. Frontend Architecture & Ant Design -->
            <article class="bg-white border border-gray-200 rounded-sm shadow-sm p-6 hover:shadow-md transition">
                <h3 class="text-lg font-bold text-orange-600 mb-2">1. Frontend CMS & UI Components (Ant Design)</h3>
                <dl class="space-y-2 text-sm text-gray-700 leading-relaxed">
                    <div>
                        <dt class="font-semibold text-gray-900">Vấn đề giải quyết:</dt>
                        <dd>Xây dựng bảng dữ liệu quản trị khách sạn, phòng trống và lịch đặt tour với hàng nghìn bản ghi.</dd>
                    </div>
                    <div>
                        <dt class="font-semibold text-gray-900">Giải pháp:</dt>
                        <dd>Ứng dụng Ant Design Table với pagination phân trang từ server, debounce bộ lọc tìm kiếm và custom calendar hiển thị tình trạng phòng còn trống theo thời gian thực.</dd>
                    </div>
                </dl>
            </article>

            <!-- 2. State & Cache với TanStack Query -->
            <article class="bg-white border border-gray-200 rounded-sm shadow-sm p-6 hover:shadow-md transition">
                <h3 class="text-lg font-bold text-orange-600 mb-2">2. Caching & Auto-Invalidation (TanStack Query)</h3>
                <dl class="space-y-2 text-sm text-gray-700 leading-relaxed">
                    <div>
                        <dt class="font-semibold text-gray-900">Vấn đề giải quyết:</dt>
                        <dd>Dữ liệu phòng trống thay đổi liên tục khi có người đặt, tránh tình trạng hiển thị phòng đã hết.</dd>
                    </div>
                    <div>
                        <dt class="font-semibold text-gray-900">Giải pháp:</dt>
                        <dd>Thiết lập query keys có cấu trúc, tự động kích hoạt <code class="px-1.5 py-0.5 bg-gray-100 rounded text-xs font-mono">queryClient.invalidateQueries()</code> ngay khi giao dịch thanh toán thành công để đồng bộ ngay lập tức.</dd>
                    </div>
                </dl>
            </article>

            <!-- 3. Tích hợp VNPay & Chống đặt trùng phòng -->
            <article class="bg-white border border-gray-200 rounded-sm shadow-sm p-6 hover:shadow-md transition">
                <h3 class="text-lg font-bold text-orange-600 mb-2">3. Cổng thanh toán VNPay & Chống Double-Booking</h3>
                <dl class="space-y-2 text-sm text-gray-700 leading-relaxed">
                    <div>
                        <dt class="font-semibold text-gray-900">Vấn đề kỹ thuật hóc búa:</dt>
                        <dd>Hai khách hàng cùng lúc bấm thanh toán cho 1 phòng duy nhất, hoặc mạng rớt giữa chừng khi VNPay gửi kết quả.</dd>
                    </div>
                    <div>
                        <dt class="font-semibold text-gray-900">Giải pháp:</dt>
                        <dd>Khóa tạm thời (Pessimistic / Optimistic Locking) trong thời gian thanh toán. Xác thực chữ ký số HMAC-SHA512 qua Webhook IPN từ VNPay để đảm bảo tiền vào tài khoản mới xác nhận đơn hàng.</dd>
                    </div>
                </dl>
            </article>

            <!-- 4. Backend Spring Boot & Security -->
            <article class="bg-white border border-gray-200 rounded-sm shadow-sm p-6 hover:shadow-md transition">
                <h3 class="text-lg font-bold text-orange-600 mb-2">4. Kiến trúc phân tầng Spring Boot & JWT</h3>
                <dl class="space-y-2 text-sm text-gray-700 leading-relaxed">
                    <div>
                        <dt class="font-semibold text-gray-900">Mô hình kiến trúc:</dt>
                        <dd>Áp dụng Controller - Service - Repository chuẩn mực, phân tách rõ ràng trách nhiệm giữa routing, logic nghiệp vụ và tầng truy vấn dữ liệu.</dd>
                    </div>
                    <div>
                        <dt class="font-semibold text-gray-900">Bảo mật:</dt>
                        <dd>Phân quyền Admin / Customer bằng JWT token qua Spring Security filter chain, tích hợp Cloudinary API lưu trữ ảnh khách sạn tối ưu.</dd>
                    </div>
                </dl>
            </article>
        </div>
        `,
    },
    {
        slug: "e-commerce_platform",
        name: "Centralized Multi-Store E-commerce",
        desc: "Nền tảng thương mại điện tử quản lý tập trung tồn kho và đơn hàng cho chuỗi bán lẻ đa chi nhánh.",
        tech: ["ReactJS", "Tailwind CSS", "TypeScript", "Zustand", "TanStack Query", "React Hook Form", "Zod"],
        image: "/images/ecommerce.png",
        knowledgeHtml: `
        <div class="grid md:grid-cols-2 gap-6">
            <!-- 1. Multi-Step Form với React Hook Form -->
            <article class="bg-white border border-gray-200 rounded-sm shadow-sm p-6 hover:shadow-md transition">
                <h3 class="text-lg font-bold text-orange-600 mb-2">1. Tối ưu Form tạo sản phẩm đa bước</h3>
                <dl class="space-y-2 text-sm text-gray-700 leading-relaxed">
                    <div>
                        <dt class="font-semibold text-gray-900">Vấn đề giải quyết:</dt>
                        <dd>Form đăng sản phẩm gồm 4 bước (thông tin chung, phân loại kích thước/màu sắc, giá kho và hình ảnh) chứa hơn 30 trường dữ liệu.</dd>
                    </div>
                    <div>
                        <dt class="font-semibold text-gray-900">Giải pháp:</dt>
                        <dd>Dùng React Hook Form với uncontrolled inputs, cắt giảm 50% số lần re-render component so với useState thông thường, giúp thao tác gõ phím mượt mà tuyệt đối.</dd>
                    </div>
                </dl>
            </article>

            <!-- 2. Schema Validation với Zod -->
            <article class="bg-white border border-gray-200 rounded-sm shadow-sm p-6 hover:shadow-md transition">
                <h3 class="text-lg font-bold text-orange-600 mb-2">2. Kiểm soát dữ liệu chặt chẽ với Zod Schema</h3>
                <dl class="space-y-2 text-sm text-gray-700 leading-relaxed">
                    <div>
                        <dt class="font-semibold text-gray-900">Vấn đề giải quyết:</dt>
                        <dd>Ngăn chặn người dùng nhập sai định dạng giá bán, số âm hoặc thiếu các trường bắt buộc gây lỗi phía API.</dd>
                    </div>
                    <div>
                        <dt class="font-semibold text-gray-900">Giải pháp:</dt>
                        <dd>Định nghĩa schema với Zod và liên kết trực tiếp qua <code class="px-1.5 py-0.5 bg-gray-100 rounded text-xs font-mono">@hookform/resolvers/zod</code>, sinh thông báo lỗi tiếng Việt trực quan dưới từng trường nhập liệu.</dd>
                    </div>
                </dl>
            </article>

            <!-- 3. Quản lý trạng thái lai (Zustand + TanStack Query) -->
            <article class="bg-white border border-gray-200 rounded-sm shadow-sm p-6 hover:shadow-md transition">
                <h3 class="text-lg font-bold text-orange-600 mb-2">3. Mô hình State kép (Client vs Server State)</h3>
                <dl class="space-y-2 text-sm text-gray-700 leading-relaxed">
                    <div>
                        <dt class="font-semibold text-gray-900">Phân định rõ ràng:</dt>
                        <dd><strong>Zustand:</strong> Quản lý state thuần UI của Client (chi nhánh đang chọn, trạng thái mở/đóng sidebar, giỏ hàng nháp).</dd>
                    </div>
                    <div>
                        <dt class="font-semibold text-gray-900">Server State:</dt>
                        <dd><strong>TanStack Query:</strong> Quản lý dữ liệu từ API (danh sách sản phẩm, tồn kho, báo cáo), tự động cache và cập nhật khi mạng phục hồi.</dd>
                    </div>
                </dl>
            </article>

            <!-- 4. Giao diện Tailwind CSS & Responsive -->
            <article class="bg-white border border-gray-200 rounded-sm shadow-sm p-6 hover:shadow-md transition">
                <h3 class="text-lg font-bold text-orange-600 mb-2">4. Dashboard Responsive với Tailwind CSS</h3>
                <dl class="space-y-2 text-sm text-gray-700 leading-relaxed">
                    <div>
                        <dt class="font-semibold text-gray-900">Mục tiêu:</dt>
                        <dd>Giao diện hiển thị rõ ràng trên cả máy tính bán hàng POS tại quầy lẫn máy tính bảng của quản lý cửa hàng.</dd>
                    </div>
                    <div>
                        <dt class="font-semibold text-gray-900">Giải pháp:</dt>
                        <dd>Xây dựng hệ thống lưới grid linh hoạt, các thẻ tóm tắt doanh thu theo thời gian thực và biểu đồ trực quan hóa dữ liệu.</dd>
                    </div>
                </dl>
            </article>
        </div>
        `,
    },
    {
        slug: "portfolio",
        name: "Personal Portfolio & Tech Blog",
        desc: "Website cá nhân và blog kỹ thuật tối ưu hóa hiệu năng, SEO với Next.js 15 App Router và Tailwind CSS.",
        tech: ["Next.js 15", "Tailwind CSS", "TypeScript", "Lucide Icons", "Framer Motion"],
        image: "/images/protfolio.png",
        linkWebSite: "https://thanh-nguyen-dev.vercel.app/",
        github: "https://github.com/Thanh-Nguyen-2002/my_portfolio",
        knowledgeHtml: `
        <div class="grid md:grid-cols-2 gap-6">
            <!-- 1. Next.js 15 App Router -->
            <article class="bg-white border border-gray-200 rounded-sm shadow-sm p-6 hover:shadow-md transition">
                <h3 class="text-lg font-bold text-orange-600 mb-2">1. Next.js 15 App Router & Server Components</h3>
                <dl class="space-y-2 text-sm text-gray-700 leading-relaxed">
                    <div>
                        <dt class="font-semibold text-gray-900">Tối ưu hiệu năng:</dt>
                        <dd>Tận dụng Server Components để giảm kích thước bundle gửi về trình duyệt, kết hợp Dynamic Segment <code class="px-1.5 py-0.5 bg-gray-100 rounded text-xs font-mono">/project/[slug]</code> cho từng dự án.</dd>
                    </div>
                </dl>
            </article>

            <!-- 2. SEO & Open Graph -->
            <article class="bg-white border border-gray-200 rounded-sm shadow-sm p-6 hover:shadow-md transition">
                <h3 class="text-lg font-bold text-orange-600 mb-2">2. Tối ưu hóa SEO & Open Graph Social Cards</h3>
                <dl class="space-y-2 text-sm text-gray-700 leading-relaxed">
                    <div>
                        <dt class="font-semibold text-gray-900">Mục tiêu:</dt>
                        <dd>Hiển thị ảnh thumbnail, tiêu đề và mô tả chuyên nghiệp khi chia sẻ link CV/Portfolio lên LinkedIn, Facebook, Zalo.</dd>
                    </div>
                </dl>
            </article>

            <!-- 3. Next/Image Optimization -->
            <article class="bg-white border border-gray-200 rounded-sm shadow-sm p-6 hover:shadow-md transition">
                <h3 class="text-lg font-bold text-orange-600 mb-2">3. Tối ưu hình ảnh (Next/Image)</h3>
                <dl class="space-y-2 text-sm text-gray-700 leading-relaxed">
                    <div>
                        <dt class="font-semibold text-gray-900">Lighthouse 95+:</dt>
                        <dd>Tự động nén WebP/AVIF, lazy loading các hình ảnh bên dưới khung nhìn, tránh giật layout (Cumulative Layout Shift - CLS).</dd>
                    </div>
                </dl>
            </article>

            <!-- 4. TypeScript Strict Typing -->
            <article class="bg-white border border-gray-200 rounded-sm shadow-sm p-6 hover:shadow-md transition">
                <h3 class="text-lg font-bold text-orange-600 mb-2">4. TypeScript Strict Typing</h3>
                <dl class="space-y-2 text-sm text-gray-700 leading-relaxed">
                    <div>
                        <dt class="font-semibold text-gray-900">Chất lượng code:</dt>
                        <dd>Xây dựng các interface rõ ràng cho dữ liệu dự án, props component, loại bỏ hoàn toàn các lỗi type ngầm lúc runtime.</dd>
                    </div>
                </dl>
            </article>
        </div>
        `,
    },
    {
        slug: "review_food",
        name: "Review Food Blog",
        desc: "Nền tảng chia sẻ và khám phá ẩm thực Việt Nam với các bài viết, đánh giá và bản đồ món ngon ba miền.",
        tech: ["Next.js", "Tailwind CSS", "TypeScript", "Lucide Icons", "Framer Motion"],
        image: "/images/review_food.png",
        linkWebSite: "https://review-food.vercel.app/",
        knowledgeHtml: `
        <div class="grid md:grid-cols-2 gap-6">
            <!-- 1. Dynamic Routing -->
            <article class="bg-white border border-gray-200 rounded-sm shadow-sm p-6 hover:shadow-md transition">
                <h3 class="text-lg font-bold text-orange-600 mb-2">1. Định tuyến động (Dynamic Routing)</h3>
                <dl class="space-y-2 text-sm text-gray-700 leading-relaxed">
                    <div>
                        <dt class="font-semibold text-gray-900">Ứng dụng:</dt>
                        <dd>Quản lý các danh mục món ăn theo miền Bắc - Trung - Nam và điều hướng đến chi tiết từng bài viết ẩm thực một cách mượt mà.</dd>
                    </div>
                </dl>
            </article>

            <!-- 2. UI/UX với Tailwind CSS -->
            <article class="bg-white border border-gray-200 rounded-sm shadow-sm p-6 hover:shadow-md transition">
                <h3 class="text-lg font-bold text-orange-600 mb-2">2. Thiết kế Mobile-First với Tailwind CSS</h3>
                <dl class="space-y-2 text-sm text-gray-700 leading-relaxed">
                    <div>
                        <dt class="font-semibold text-gray-900">Trải nghiệm người dùng:</dt>
                        <dd>Tối ưu giao diện xem bài review trên điện thoại với hình ảnh ẩm thực bắt mắt, thao tác cuộn mượt mà và các nút tương tác dễ bấm.</dd>
                    </div>
                </dl>
            </article>
        </div>
        `,
    },
];
