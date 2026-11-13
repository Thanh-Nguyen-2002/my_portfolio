export interface DeepDive {
    title: string;
    problem: string;
    solution: string;
    result: string;
    tags?: string[];
}

export interface TechGroup {
    category: string;
    items: string[];
}

export interface ProjectDetailItem {
    slug: string;
    name: string;
    tag: string;
    desc: string;
    role: string;
    timeline: string;
    teamSize: string;
    tech: string[];
    image: string;
    linkWebSite?: string;
    github?: string;
    github2?: string;
    responsibilities: string[];
    architecture: {
        summary: string;
        layers: {
            title: string;
            description: string;
        }[];
    };
    deepDives: DeepDive[];
    techStackGroups: TechGroup[];
    learnings: string[];
}

export const data_project_detail: ProjectDetailItem[] = [
    {
        slug: "travel_booking",
        name: "Travel Booking Platform",
        tag: "Full-Stack Flagship Project",
        desc: "Hệ sinh thái đặt phòng tour & khách sạn toàn diện gồm: giao diện đặt phòng cho khách hàng, hệ thống quản trị nội bộ CMS và backend RESTful API bảo mật với VNPay.",
        role: "Full-Stack Developer (Phụ trách chính toàn bộ Frontend CMS & Tích hợp API Backend)",
        timeline: "03 Tháng (Dự án tâm huyết hoàn thiện end-to-end)",
        teamSize: "Dự án cá nhân (Tự chủ 100% từ thiết kế đến triển khai)",
        tech: [
            "ReactJS",
            "Tailwind CSS",
            "Ant Design",
            "TanStack Query",
            "Java Spring Boot",
            "PostgreSQL",
            "VNPay Sandbox",
            "Cloudinary",
        ],
        image: "/images/banner.jpeg",
        github: "https://github.com/Thanh-Nguyen-2002/travel-booking-cms",
        github2: "https://github.com/Thanh-Nguyen-2002/travel-booking-landingpage",
        responsibilities: [
            "Xây dựng toàn bộ giao diện bảng điều khiển quản trị (CMS Dashboard) bằng ReactJS & Ant Design: Quản lý danh mục khách sạn, tạo/sửa phòng, theo dõi lịch đặt và thống kê doanh thu.",
            "Thiết kế giao diện đặt phòng phía khách hàng (Client Landing Page) với bộ lọc tìm kiếm thông minh: Lọc theo địa điểm, khoảng giá, ngày nhận/trả phòng và số lượng khách.",
            "Tích hợp luồng thanh toán trực tuyến qua cổng VNPay: Tạo URL thanh toán bảo mật, xử lý Callback Redirect và xác thực chữ ký số HMAC-SHA512 qua Webhook IPN.",
            "Ứng dụng TanStack Query (React Query) để quản lý cache dữ liệu phòng trống, tự động vô hiệu hóa cache (auto-invalidation) ngay khi thanh toán thành công.",
            "Thiết lập hệ thống phân quyền (RBAC) với JWT Token: Bọc Protected Routes ở phía Frontend và cấu hình Spring Security Filter ở phía Backend.",
        ],
        architecture: {
            summary: "Kiến trúc client-server chuẩn mực với luồng dữ liệu 1 chiều, tách bạch giữa giao diện quản trị CMS, giao diện người dùng và hệ thống API Backend.",
            layers: [
                {
                    title: "Tầng Trình diễn (Frontend Presentation Layer)",
                    description: "ReactJS kết hợp Tailwind CSS & Ant Design cung cấp các UI component chuyên sâu (Data Table, Form, DateRangePicker).",
                },
                {
                    title: "Tầng Trạng thái & Cache (State & Query Cache)",
                    description: "TanStack Query quản lý việc fetching, đồng bộ và cache dữ liệu API; ngăn ngừa các request dư thừa.",
                },
                {
                    title: "Tầng Xử lý Nghiệp vụ & API (Backend Services)",
                    description: "Java Spring Boot áp dụng mô hình Controller - Service - Repository phân tầng, bảo mật qua Spring Security & JWT.",
                },
                {
                    title: "Tầng Lưu trữ & Dịch vụ ngoài (Database & Third-party)",
                    description: "PostgreSQL lưu trữ dữ liệu quan hệ; Cổng VNPay xử lý thanh toán điện tử; Cloudinary lưu trữ và phân phối hình ảnh qua CDN.",
                },
            ],
        },
        deepDives: [
            {
                title: "Chống đặt trùng phòng (Double-Booking Prevention) & Race Conditions",
                problem: "Trong các đợt cao điểm hoặc khuyến mãi, hai khách hàng có thể cùng lúc nhấn thanh toán cho một phòng duy nhất. Nếu chỉ kiểm tra trạng thái lúc nhấn nút, cả hai đều có thể chuyển sang cổng thanh toán dẫn đến lỗi xung đột dữ liệu nghiêm trọng.",
                solution: "Thiết lập cơ chế khóa giữ chỗ tạm thời (Temporary Hold Lock) trong 10 phút ngay khi người dùng bắt đầu tiến hành thanh toán. Tại Backend áp dụng Pessimistic Locking (SELECT ... FOR UPDATE) trong transaction cập nhật đơn. Trước khi redirect sang VNPay, client luôn verify lại tính khả dụng của phòng.",
                result: "Loại bỏ hoàn toàn 100% nguy cơ double-booking; đơn phòng chỉ được xác nhận chính thức khi webhook IPN từ VNPay xác thực chữ ký số hợp lệ và báo tiền đã vào tài khoản.",
                tags: ["Concurreny", "Pessimistic Lock", "VNPay Webhook", "Transaction"],
            },
            {
                title: "Tối ưu hóa Bảng dữ liệu lớn trên CMS với Server-Side Pagination & Debounce Filter",
                problem: "Dữ liệu lịch sử đặt phòng và danh sách phòng lên tới hàng nghìn bản ghi. Nếu load toàn bộ dữ liệu về trình duyệt sẽ gây đơ giao diện, tốn băng thông và làm chậm First Contentful Paint.",
                solution: "Sử dụng Ant Design Table kết hợp phân trang trực tiếp từ server (page, pageSize, sortBy). Với các ô tìm kiếm khách hàng/phòng, áp dụng custom hook useDebounce (350ms) để gom các thao tác gõ phím trước khi kích hoạt API call, tránh spam request.",
                result: "Thời gian phản hồi khi chuyển trang luôn duy trì < 150ms; giảm thiểu hơn 80% số lượng request tìm kiếm thừa gửi lên server.",
                tags: ["Ant Design", "Debounce 350ms", "Server Pagination", "Performance"],
            },
            {
                title: "Đồng bộ trạng thái Cache & Invalidation tự động với TanStack Query",
                problem: "Khi nhân viên CMS vừa cập nhật trạng thái phòng từ 'Trống' sang 'Đang bảo trì' hoặc 'Đã xác nhận đặt', dữ liệu trên bảng danh sách phải được làm mới ngay lập tức mà không bắt người dùng phải reload (F5) lại cả trang.",
                solution: "Cấu trúc Query Keys phân tầng có hệ thống ['rooms', { status, page }]. Sau mỗi thao tác Mutation (tạo, cập nhật trạng thái), tự động kích hoạt queryClient.invalidateQueries({ queryKey: ['rooms'] }) để ngầm kéo dữ liệu mới nhất dưới nền.",
                result: "Dữ liệu luôn đồng bộ theo thời gian thực mà không gây giật màn hình; trải nghiệm thao tác của nhân viên quản trị mượt mà và liền mạch.",
                tags: ["TanStack Query", "Query Keys", "Auto Invalidation", "Cache Sync"],
            },
        ],
        techStackGroups: [
            {
                category: "Giao diện (Frontend)",
                items: ["ReactJS", "Tailwind CSS", "Ant Design", "Lucide React", "Axios Interceptor"],
            },
            {
                category: "Quản lý dữ liệu & Cache",
                items: ["TanStack Query (React Query)", "React Hook Form", "Local Storage JWT"],
            },
            {
                category: "Backend & Cơ sở dữ liệu",
                items: ["Java Spring Boot", "Spring Security", "PostgreSQL", "Spring Data JPA / Hibernate", "JWT Authentication"],
            },
            {
                category: "Dịch vụ ngoài & Triển khai",
                items: ["VNPay Sandbox (HMAC-SHA512)", "Cloudinary Media API", "Vercel Deployment", "Render Backend"],
            },
        ],
        learnings: [
            "Hiểu sâu sắc cách xử lý bất đồng bộ, race conditions và tính toàn vẹn dữ liệu trong các luồng giao dịch thanh toán trực tuyến.",
            "Nắm vững kỹ năng tối ưu hóa bảng dữ liệu lớn trong giao diện doanh nghiệp với Ant Design và TanStack Query.",
            "Tự tin giải thích kiến trúc phân tầng, phân quyền RBAC và giao tiếp API bảo mật trong các buổi phỏng vấn kỹ thuật.",
        ],
    },
    {
        slug: "e-commerce_platform",
        name: "Centralized Multi-Store E-commerce",
        tag: "Enterprise POS & CRM Management",
        desc: "Nền tảng thương mại điện tử quản lý tập trung đơn hàng, khách hàng (CRM) và điều phối tồn kho cho chuỗi cửa hàng bán lẻ đa chi nhánh.",
        role: "Frontend Developer (Phụ trách module Quản lý Đơn hàng, Khách hàng & Form sản phẩm)",
        timeline: "Dự án thực tế doanh nghiệp",
        teamSize: "2 Thành viên (1 FE, 1 BE) - Phụ trách độc lập toàn bộ Frontend",
        tech: [
            "ReactJS",
            "Tailwind CSS",
            "TypeScript",
            "Zustand",
            "TanStack Query",
            "React Hook Form",
            "Zod Schema",
        ],
        image: "/images/ecommerce.png",
        responsibilities: [
            "Phát triển hệ thống Dashboard quản trị đơn hàng tập trung từ các chi nhánh bán lẻ: Bộ lọc trạng thái đơn, hình thức thanh toán và tra cứu theo mã vận đơn.",
            "Xây dựng Form tạo mới và chỉnh sửa sản phẩm đa bước (Multi-step Form) với hơn 30 trường dữ liệu (thông tin chung, biến thể màu/size, giá nhập/xuất, kho hàng).",
            "Thiết kế phân hệ quản lý thông tin khách hàng (CRM): Tra cứu lịch sử mua sắm, điểm tích lũy thành viên và xuất báo cáo dữ liệu.",
            "Tích hợp Optimistic Updates trong các thao tác xử lý giao dịch tại quầy POS, mang lại phản hồi giao diện tức thì cho thu ngân.",
            "Làm việc trực tiếp 1-1 với Backend Developer để thống nhất Swagger API contracts, định dạng dữ liệu JSON request/response và chuẩn hóa mã lỗi HTTP.",
        ],
        architecture: {
            summary: "Mô hình State kép phân định rõ ràng giữa Client State và Server State, giúp giao diện chạy mượt mà ngay cả khi xử lý khối lượng lớn đơn hàng đồng thời.",
            layers: [
                {
                    title: "Tầng Giao diện (Tailwind CSS & TypeScript)",
                    description: "Hệ thống UI Component sắc sảo (Data Grid, Filter Bar, Dynamic Modal) chuẩn responsive trên cả màn hình máy tính bàn và tablet POS.",
                },
                {
                    title: "Tầng Client State (Zustand)",
                    description: "Quản lý các trạng thái thuần UI của người dùng: Chi nhánh đang chọn, trạng thái mở/đóng drawer, danh sách bộ lọc tạm thời.",
                },
                {
                    title: "Tầng Server State (TanStack Query)",
                    description: "Quản lý toàn bộ dữ liệu từ API: Danh sách đơn hàng, tồn kho chi nhánh, thông tin khách hàng; tự động caching và retry khi mạng chập chờn.",
                },
                {
                    title: "Tầng Xác thực & Kiểm soát (React Hook Form & Zod)",
                    description: "Kiểm soát tính hợp lệ của dữ liệu đầu vào ngay tại client trước khi gửi payload lên server.",
                },
            ],
        },
        deepDives: [
            {
                title: "Tối ưu hóa hiệu năng Form nhập liệu lớn bằng React Hook Form (Uncontrolled Inputs)",
                problem: "Form đăng sản phẩm gồm 4 bước với hơn 30 trường dữ liệu và nhiều mảng biến thể lồng nhau (nested attributes). Nếu quản lý bằng useState thông thường, mỗi ký tự người dùng gõ vào một ô input sẽ kích hoạt re-render toàn bộ cả form cha lẫn các bước xung quanh, gây giật lag nghiêm trọng.",
                solution: "Tái cấu trúc form sử dụng react-hook-form với cơ chế Uncontrolled Components kết hợp useFieldArray. Chỉ re-render duy nhất ô input đang được tương tác thay vì toàn bộ component tree.",
                result: "Cắt giảm hơn 70% số lượng re-render thừa; thao tác nhập liệu và thêm biến thể sản phẩm đạt tốc độ 60fps mượt mà tuyệt đối.",
                tags: ["React Hook Form", "Uncontrolled", "useFieldArray", "Render Optimization"],
            },
            {
                title: "Kiểm soát tính toàn vẹn dữ liệu Client-Side với Zod Schema",
                problem: "Dữ liệu sản phẩm phức tạp dễ gặp lỗi giá bán âm, thiếu mã SKU phân loại, hoặc định dạng số lượng không đúng dẫn đến API trả về 400 Bad Request và làm mất dữ liệu đã nhập của người dùng.",
                solution: "Định nghĩa Zod Schema phân tầng nghiêm ngặt với các quy tắc kiểm tra kiểu dữ liệu, min/max, định dạng chuỗi và custom refinement (ví dụ: giá bán lẻ phải >= giá nhập). Liên kết trực tiếp qua @hookform/resolvers/zod.",
                result: "Bắt toàn bộ lỗi sai ngay tại client và hiển thị thông báo tiếng Việt trực quan dưới từng trường nhập liệu; giảm thiểu 95% request lỗi gửi lên backend.",
                tags: ["Zod", "Schema Validation", "Type Safety", "Client Verification"],
            },
            {
                title: "Phân định rõ ràng Client State (Zustand) và Server State (TanStack Query)",
                problem: "Lạm dụng một Global Store duy nhất (như Redux hay Zustand) để lưu trữ cả dữ liệu API lẫn trạng thái giao diện thường dẫn đến việc phải tự viết boilerplate code quản lý cờ loading/error và xóa cache thủ công, dễ gây lỗi dữ liệu không đồng nhất.",
                solution: "Phân chia rõ trách nhiệm: Zustand chỉ quản lý Client State (chi nhánh đang chọn, modal open/close, giỏ hàng POS nháp). Toàn bộ dữ liệu server (đơn hàng, tồn kho, sản phẩm) được giao cho TanStack Query quản lý cache và tự động refresh.",
                result: "Loại bỏ hoàn toàn hơn 300 dòng boilerplate code quản lý state; dữ liệu giữa các tab làm việc song song luôn được đồng bộ chính xác.",
                tags: ["Zustand", "TanStack Query", "Architecture", "Clean Code"],
            },
        ],
        techStackGroups: [
            {
                category: "Giao diện (Frontend)",
                items: ["ReactJS", "TypeScript", "Tailwind CSS", "Lucide Icons", "Ant Design"],
            },
            {
                category: "Form & Validation",
                items: ["React Hook Form", "Zod", "@hookform/resolvers/zod"],
            },
            {
                category: "Quản lý State & Dữ liệu",
                items: ["Zustand", "TanStack Query", "Axios Interceptor", "Optimistic Updates"],
            },
            {
                category: "Quy trình & Hợp tác",
                items: ["Swagger / OpenAPI", "Postman API Testing", "Git Flow", "Agile / Scrum"],
            },
        ],
        learnings: [
            "Hiểu sâu bản chất về quản lý re-render trong React khi xây dựng các form nhập liệu quy mô lớn của doanh nghiệp.",
            "Thành thạo mô hình phân định Client State vs Server State, không bị phụ thuộc máy móc vào Redux.",
            "Có kinh nghiệm thực chiến quý báu khi làm việc độc lập 1 FE cùng 1 BE trong việc thiết kế và tối ưu luồng dữ liệu hệ thống.",
        ],
    },
    {
        slug: "portfolio",
        name: "Personal Portfolio & Tech Platform",
        tag: "Next.js 15 App Router & Performance Showcase",
        desc: "Nền tảng hồ sơ năng lực cá nhân và blog kỹ thuật chuyên sâu, xây dựng trên nền Next.js 15 App Router, Tailwind CSS và tối ưu hóa SEO toàn diện.",
        role: "Solo Creator & Frontend Engineer",
        timeline: "Dự án cá nhân liên tục cập nhật",
        teamSize: "1 Thành viên (Tự thiết kế UI/UX và lập trình)",
        tech: [
            "Next.js 15",
            "React 19",
            "Tailwind CSS",
            "TypeScript",
            "Framer Motion",
            "Lucide Icons",
        ],
        image: "/images/protfolio.png",
        linkWebSite: "https://thanh-nguyen-dev.vercel.app/",
        github: "https://github.com/Thanh-Nguyen-2002/my_portfolio",
        responsibilities: [
            "Thiết kế toàn bộ layout và phong cách giao diện theo phong cách Modern Technical Dashboard (bo góc sắc sảo rounded-sm), xóa bỏ hoàn toàn cảm giác website mẫu đại trà.",
            "Xây dựng Dynamic Routing /project/[slug] tận dụng React Server Components (RSC) trong Next.js 15 để kết xuất các bài viết case study chi tiết với tốc độ tức thì.",
            "Cấu hình hệ thống OpenGraph Metadata tự động để khi chia sẻ link lên LinkedIn, Facebook, Zalo hiển thị đầy đủ thẻ hình ảnh preview và mô tả chuyên nghiệp.",
            "Tối ưu hóa tài nguyên hình ảnh với Next/Image (nén định dạng WebP/AVIF, lazy loading chống giật layout CLS).",
            "Xây dựng form tương tác liên hệ trực tiếp kết hợp chức năng sao chép thông tin email/số điện thoại 1-click.",
        ],
        architecture: {
            summary: "Kiến trúc Next.js 15 App Router hiện đại tận dụng tối đa React Server Components để đạt điểm hiệu năng cao nhất trên môi trường production.",
            layers: [
                {
                    title: "Tầng Server Components (Next.js 15 SSR & SSG)",
                    description: "Kết xuất trước mã HTML tĩnh ở server, giúp bot tìm kiếm dễ dàng đọc dữ liệu và giảm tối đa First Load JS.",
                },
                {
                    title: "Tầng Client Components (Interactive Island)",
                    description: "Chỉ hydrate JavaScript cho các thành phần tương tác: Sidebar drawer mở rộng trên mobile, nút copy clipboard, nút chuyển tab.",
                },
                {
                    title: "Tầng Thiết kế & Giao diện (Tailwind CSS v4)",
                    description: "Sử dụng utility-first CSS tinh gọn, tối ưu kích thước file CSS production dưới 15kB.",
                },
            ],
        },
        deepDives: [
            {
                title: "Tối ưu hóa hiệu năng Core Web Vitals với React Server Components",
                problem: "Các website portfolio truyền thống thường tải một cục bundle JavaScript quá lớn khiến trình duyệt trên điện thoại bị đơ trong vài giây đầu, làm giảm điểm trải nghiệm người dùng và SEO.",
                solution: "Áp dụng kiến trúc Next.js 15 App Router: Tách biệt hoàn toàn các phần hiển thị dữ liệu tĩnh (Hero, Projects, Case Study) thành Server Components, chỉ chèn 'use client' ở các nút tương tác nhỏ.",
                result: "Kích thước First Load JS chia sẻ chỉ ~160kB; tốc độ tải trang First Contentful Paint < 0.8s, đạt điểm Lighthouse 95+.",
                tags: ["Next.js 15", "RSC", "Core Web Vitals", "Lighthouse 95+"],
            },
            {
                title: "Cấu hình bảo mật hình ảnh SVG & Khắc phục lỗi Image Optimizer",
                problem: "Bộ tối ưu hóa ảnh Next/Image mặc định chặn các định dạng SVG để phòng chống lỗ hổng bảo mật XSS, dẫn đến lỗi 500 khi nén avatar vector.",
                solution: "Cấu hình dangerouslyAllowSVG kèm Content Security Policy nghiêm ngặt trong next.config.ts, đồng thời đặt cờ unoptimized trên thẻ Image của avatar để trình duyệt đọc trực tiếp file vector.",
                result: "Ảnh đại diện vector hiển thị sắc nét ở mọi độ phân giải màn hình máy tính và điện thoại mà không hề bị lỗi server.",
                tags: ["Next.js Config", "SVG Security", "CSP", "Image Optimization"],
            },
            {
                title: "Hệ thống Metadata tự động & OpenGraph Social Cards",
                problem: "Khi chia sẻ link portfolio lên mạng xã hội hoặc gửi tin nhắn cho nhà tuyển dụng, nếu thiếu OpenGraph link sẽ chỉ hiện URL trơ trọi, thiếu tính thẩm mỹ và độ tin cậy.",
                solution: "Định nghĩa metadataBase kết hợp cấu hình đầy đủ các trường openGraph và twitter card trong layout.tsx, liên kết trực tiếp với ảnh preview độ phân giải 1200x630px.",
                result: "Mọi tin nhắn gửi link portfolio qua Zalo, Messenger, LinkedIn đều hiển thị thẻ xem trước có ảnh banner, tên và chức danh chuyên nghiệp.",
                tags: ["SEO", "OpenGraph", "Social Cards", "Next.js Metadata"],
            },
        ],
        techStackGroups: [
            {
                category: "Framework & Ngôn ngữ",
                items: ["Next.js 15 (App Router)", "React 19", "TypeScript", "Node.js"],
            },
            {
                category: "Giao diện & Hiệu ứng",
                items: ["Tailwind CSS", "Lucide React", "Framer Motion", "Rounded-sm Design"],
            },
            {
                category: "DevOps & Triển khai",
                items: ["Vercel Edge Network", "GitHub CI/CD", "Turbopack", "ESLint 9"],
            },
        ],
        learnings: [
            "Nắm vững tư duy phân tách giữa Server Components và Client Components trong hệ sinh thái Next.js hiện đại.",
            "Hiểu sâu về tối ưu hóa SEO kỹ thuật, OpenGraph metadata và tiêu chuẩn Core Web Vitals.",
            "Rèn luyện kỹ năng xây dựng giao diện sắc sảo, có phong cách riêng biệt thay vì dùng thư viện mẫu có sẵn.",
        ],
    },
    {
        slug: "review_food",
        name: "Review Food Community Platform",
        tag: "Content Platform & Interactive UI",
        desc: "Nền tảng chia sẻ và khám phá ẩm thực Việt Nam với các bài viết đánh giá, hệ thống chấm điểm và bản đồ món ngon ba miền.",
        role: "Frontend Developer (Dự án học tập & phát triển độc lập)",
        timeline: "Dự án cá nhân thực hành",
        teamSize: "1 Thành viên",
        tech: [
            "Next.js",
            "Tailwind CSS",
            "TypeScript",
            "Lucide Icons",
            "Framer Motion",
        ],
        image: "/images/review_food.png",
        linkWebSite: "https://review-food.vercel.app/",
        responsibilities: [
            "Xây dựng giao diện trang chủ giới thiệu và khám phá các món ăn đặc sản ba miền Bắc - Trung - Nam với bố cục phân loại trực quan.",
            "Thiết kế trang chi tiết bài viết review ẩm thực với hệ thống chấm điểm đánh giá (Rating Stars), mô tả hương vị và thông tin mức giá tham khảo.",
            "Tối ưu hóa bố cục hiển thị chuẩn Mobile-First bằng Tailwind CSS để người dùng lướt xem bài review trên điện thoại một cách thoải mái nhất.",
            "Tạo hiệu ứng tương tác mượt mà (micro-interactions) khi hover thẻ món ăn và chuyển trang bằng Framer Motion.",
        ],
        architecture: {
            summary: "Kiến trúc hiển thị nội dung phân cấp (Category - Post - Detail) tối ưu hóa trải nghiệm đọc trên thiết bị di động.",
            layers: [
                {
                    title: "Tầng Điều hướng (Dynamic Routing)",
                    description: "Next.js App Router quản lý cấu trúc phân loại bài viết theo miền và danh mục món ăn.",
                },
                {
                    title: "Tầng Trình diễn (Responsive Mobile-First UI)",
                    description: "Giao diện lưới card món ăn co giãn linh hoạt theo kích thước màn hình với Tailwind CSS.",
                },
            ],
        },
        deepDives: [
            {
                title: "Kiến trúc điều hướng linh hoạt với Dynamic Segments",
                problem: "Nền tảng có hàng chục bài viết thuộc nhiều miền và danh mục món ăn khác nhau, cần đường dẫn URL thân thiện cho SEO (Clean URL) và tải nhanh.",
                solution: "Cấu trúc routing linh hoạt trong Next.js App Router theo slug, kết hợp truyền dữ liệu tĩnh giúp bài viết được kết xuất tức thì khi người dùng click vào.",
                result: "Điều hướng giữa các bài review diễn ra ngay lập tức, không có độ trễ tải trang.",
                tags: ["Dynamic Routing", "Clean URL", "SEO Friendly", "Next.js"],
            },
            {
                title: "Tối ưu trải nghiệm tải ảnh ẩm thực phong phú",
                problem: "Một trang blog review ẩm thực chứa rất nhiều hình ảnh đồ ăn có độ phân giải cao, dễ gây nặng trang và giật khung hình khi cuộn.",
                solution: "Ứng dụng Next.js Image với cơ chế Lazy Loading, tự động xác định kích thước placeholder để ngăn hiện tượng nhảy giật khung hình (CLS - Cumulative Layout Shift).",
                result: "Trải nghiệm cuộn trang mượt mà, ảnh chỉ được tải khi người dùng cuộn đến vị trí tương ứng.",
                tags: ["Image Lazy Load", "CLS Prevention", "Mobile Experience"],
            },
        ],
        techStackGroups: [
            {
                category: "Giao diện (Frontend)",
                items: ["Next.js", "TypeScript", "Tailwind CSS", "Lucide Icons"],
            },
            {
                category: "Hiệu ứng & Trải nghiệm",
                items: ["Framer Motion", "CSS Grid", "Responsive Design"],
            },
        ],
        learnings: [
            "Hiểu sâu về thiết kế giao diện theo tư duy Mobile-First cho các ứng dụng hướng tới người dùng đại chúng.",
            "Nắm vững kỹ thuật xử lý hình ảnh và lazy loading để duy trì trải nghiệm cuộn trang mượt mà.",
        ],
    },
];
