// /data/project_detail.ts
export const data_project_detail = [
    {
        slug : "Portfolio",
        name: "Protfolio",
        desc: "Website giới thiệu cá nhân với thông tin, dự án, kỹ năng và liên hệ.",
        tech: ["Next.js", "Tailwind CSS", "TypeScript", "Lucide Icons", "Framer Motion"],
        image: "/images/protfolio.png",
        linkWebSite: "https://my-protfolio-nine-mu.vercel.app/",
        knowledgeHtml: `
        <div class="grid md:grid-cols-2 gap-8">
            <!-- 1. App Router -->
            <article class="bg-white border border-gray-200 rounded-2xl shadow-sm p-6 hover:shadow-lg transition">
            <h3 class="text-xl font-semibold text-orange-600 mb-3">1. Next.js App Router</h3>
            <dl class="space-y-3 text-gray-700 leading-relaxed">
                <div>
                <dt class="font-medium text-gray-900">Dùng để:</dt>
                <dd>Xây dựng cấu trúc thư mục định tuyến tự động, quản lý layout, metadata, và server component hiệu quả.</dd>
                </div>
                <div>
                <dt class="font-medium text-gray-900">Giúp gì:</dt>
                <dd>Tăng hiệu suất nhờ SSR/SSG, hỗ trợ SEO tự nhiên.</dd>
                </div>
                <div>
                <dt class="font-medium text-gray-900">Học được:</dt>
                <dd>Hiểu cơ chế routing mới (Next.js 13+), chia layout, dùng dynamic segment <code class="px-1 py-0.5 bg-gray-100 rounded">[slug]</code>, khai báo metadata động.</dd>
                </div>
            </dl>
            </article>

            <!-- 2. SEO -->
            <article class="bg-white border border-gray-200 rounded-2xl shadow-sm p-6 hover:shadow-lg transition">
            <h3 class="text-xl font-semibold text-orange-600 mb-3">2. SEO (Search Engine Optimization)</h3>
            <dl class="space-y-3 text-gray-700 leading-relaxed">
                <div>
                <dt class="font-medium text-gray-900">Dùng để:</dt>
                <dd>Thiết lập thẻ meta, Open Graph, tối ưu nội dung để cải thiện khả năng hiển thị trên Google.</dd>
                </div>
                <div>
                <dt class="font-medium text-gray-900">Giúp gì:</dt>
                <dd>Portfolio dễ được tìm thấy, xem trước đẹp khi chia sẻ link (thumbnail, mô tả).</dd>
                </div>
                <div>
                <dt class="font-medium text-gray-900">Học được:</dt>
                <dd>Cách khai báo <code class="px-1 py-0.5 bg-gray-100 rounded">metadata</code> trong App Router, hiểu về <code class="px-1 py-0.5 bg-gray-100 rounded">openGraph</code>, <code class="px-1 py-0.5 bg-gray-100 rounded">twitter</code>, <code class="px-1 py-0.5 bg-gray-100 rounded">canonical</code>, các yếu tố SEO trong SPA.</dd>
                </div>
            </dl>
            </article>

            <!-- 3. Dynamic Router -->
            <article class="bg-white border border-gray-200 rounded-2xl shadow-sm p-6 hover:shadow-lg transition">
            <h3 class="text-xl font-semibold text-orange-600 mb-3">3. Dynamic Router</h3>
            <dl class="space-y-3 text-gray-700 leading-relaxed">
                <div>
                <dt class="font-medium text-gray-900">Dùng để:</dt>
                <dd>Hiển thị nội dung động theo slug, ví dụ: <code class="px-1 py-0.5 bg-gray-100 rounded">/projects/[slug]</code>.</dd>
                </div>
                <div>
                <dt class="font-medium text-gray-900">Giúp gì:</dt>
                <dd>Tái sử dụng layout/component cho nhiều trang mà không lặp lại logic.</dd>
                </div>
                <div>
                <dt class="font-medium text-gray-900">Học được:</dt>
                <dd>Truyền <code class="px-1 py-0.5 bg-gray-100 rounded">params</code>, tạo dynamic route trong <code class="px-1 py-0.5 bg-gray-100 rounded">app/</code>.</dd>
                </div>
            </dl>
            </article>

            <!-- 4. Next/Image -->
            <article class="bg-white border border-gray-200 rounded-2xl shadow-sm p-6 hover:shadow-lg transition">
            <h3 class="text-xl font-semibold text-orange-600 mb-3">4. Next.js Image Component</h3>
            <dl class="space-y-3 text-gray-700 leading-relaxed">
                <div>
                <dt class="font-medium text-gray-900">Dùng để:</dt>
                <dd>Tối ưu hình ảnh với lazy loading, responsive sizes, cache tự động.</dd>
                </div>
                <div>
                <dt class="font-medium text-gray-900">Giúp gì:</dt>
                <dd>Cải thiện tốc độ tải trang, tăng điểm Lighthouse.</dd>
                </div>
                <div>
                <dt class="font-medium text-gray-900">Học được:</dt>
                <dd>Dùng thuộc tính <code class="px-1 py-0.5 bg-gray-100 rounded">fill</code>, <code class="px-1 py-0.5 bg-gray-100 rounded">sizes</code>, xử lý ảnh từ <code class="px-1 py-0.5 bg-gray-100 rounded">public/</code> hoặc remote host.</dd>
                </div>
            </dl>
            </article>

            <!-- 5. TypeScript -->
            <article class="bg-white border border-gray-200 rounded-2xl shadow-sm p-6 hover:shadow-lg transition">
            <h3 class="text-xl font-semibold text-orange-600 mb-3">5. TypeScript</h3>
            <dl class="space-y-3 text-gray-700 leading-relaxed">
                <div>
                <dt class="font-medium text-gray-900">Dùng để:</dt>
                <dd>Quản lý kiểu dữ liệu chặt chẽ cho component, props</dd>
                </div>
                <div>
                <dt class="font-medium text-gray-900">Giúp gì:</dt>
                <dd>Giảm lỗi runtime, refactor an toàn khi mở rộng.</dd>
                </div>
                <div>
                <dt class="font-medium text-gray-900">Học được:</dt>
                <dd>Định nghĩa <code class="px-1 py-0.5 bg-gray-100 rounded">interface</code>/<code class="px-1 py-0.5 bg-gray-100 rounded">type</code>, dùng Generic, typing trong React.</dd>
                </div>
            </dl>
            </article>

            <!-- 6. Tailwind CSS -->
            <article class="bg-white border border-gray-200 rounded-2xl shadow-sm p-6 hover:shadow-lg transition">
            <h3 class="text-xl font-semibold text-orange-600 mb-3">6. Tailwind CSS</h3>
            <dl class="space-y-3 text-gray-700 leading-relaxed">
                <div>
                <dt class="font-medium text-gray-900">Dùng để:</dt>
                <dd>Thiết kế giao diện nhanh, responsive.</dd>
                </div>
                <div>
                <dt class="font-medium text-gray-900">Giúp gì:</dt>
                <dd>Tạo layout đẹp, sạch, linh hoạt mà không cần CSS rời.</dd>
                </div>
                <div>
                <dt class="font-medium text-gray-900">Học được:</dt>
                <dd>Tổ chức class hiệu quả, tạo component tái sử dụng, tư duy utility-first.</dd>
                </div>
            </dl>
            </article>

            <!-- 7. Framer Motion -->
            <article class="bg-white border border-gray-200 rounded-2xl shadow-sm p-6 hover:shadow-lg transition">
            <h3 class="text-xl font-semibold text-orange-600 mb-3">7. Framer Motion</h3>
            <dl class="space-y-3 text-gray-700 leading-relaxed">
                <div>
                <dt class="font-medium text-gray-900">Dùng để:</dt>
                <dd>Tạo hiệu ứng khi cuộn/hover (fade, slide, zoom,...).</dd>
                </div>
                <div>
                <dt class="font-medium text-gray-900">Giúp gì:</dt>
                <dd>Giao diện sống động, trải nghiệm tương tác tốt hơn.</dd>
                </div>
                <div>
                <dt class="font-medium text-gray-900">Học được:</dt>
                <dd>Dùng <code class="px-1 py-0.5 bg-gray-100 rounded">motion.div</code>, <code class="px-1 py-0.5 bg-gray-100 rounded">initial</code>/<code class="px-1 py-0.5 bg-gray-100 rounded">animate</code>.</dd>
                </div>
            </dl>
            </article>

            <!-- 8. Chia nhỏ Component -->
            <article class="bg-white border border-gray-200 rounded-2xl shadow-sm p-6 hover:shadow-lg transition">
            <h3 class="text-xl font-semibold text-orange-600 mb-3">8. Chia nhỏ Component</h3>
            <dl class="space-y-3 text-gray-700 leading-relaxed">
                <div>
                <dt class="font-medium text-gray-900">Dùng để:</dt>
                <dd>Tách UI thành các phần nhỏ: Sidebar, About, Projects, Contact.</dd>
                </div>
                <div>
                <dt class="font-medium text-gray-900">Giúp gì:</dt>
                <dd>Code dễ đọc, dễ bảo trì, tái sử dụng cao.</dd>
                </div>
                <div>
                <dt class="font-medium text-gray-900">Học được:</dt>
                <dd>Tư duy component-based, quản lý state/props hợp lý, tối ưu re-render.</dd>
                </div>
            </dl>
            </article>
            <!-- 9. dangerouslySetInnerHTML -->
                <article class="bg-white border border-gray-200 rounded-2xl shadow-sm p-6 hover:shadow-lg transition">
                <h3 class="text-xl font-semibold text-orange-600 mb-3">
                    9. dangerouslySetInnerHTML (Render HTML động trong React)
                </h3>
                <dl class="space-y-3 text-gray-700 leading-relaxed">
                    <div>
                    <dt class="font-medium text-gray-900">Dùng để:</dt>
                    <dd>
                        Cho phép React render nội dung HTML trực tiếp từ chuỗi (string), thay vì chỉ hiển thị text thuần.
                        Thường được dùng khi cần hiển thị dữ liệu có định dạng sẵn từ <strong>CMS, Markdown, hoặc file HTML</strong>.
                    </dd>
                    </div>
                    <div>
                    <dt class="font-medium text-gray-900">Giúp gì:</dt>
                    <dd>
                        Giúp tái sử dụng dữ liệu mô tả hoặc bài viết có chứa thẻ HTML mà không cần viết lại component.
                        Tiện lợi khi lưu nội dung phức tạp trong cơ sở dữ liệu (như <code class="px-1 py-0.5 bg-gray-100 rounded">&lt;h3&gt;</code>,
                        <code class="px-1 py-0.5 bg-gray-100 rounded">&lt;p&gt;</code>, <code class="px-1 py-0.5 bg-gray-100 rounded">&lt;ul&gt;</code>...).
                    </dd>
                    </div>
                    <div>
                    <dt class="font-medium text-gray-900">Học được:</dt>
                    <dd>
                        Biết khi nào nên (và không nên) dùng
                        <code class="px-1 py-0.5 bg-gray-100 rounded">dangerouslySetInnerHTML</code>.
                        Nắm được cơ chế DOM rendering trong React, và cách kiểm soát dữ liệu “unsafe HTML” an toàn.
                    </dd>
                    </div>
                </dl>
            </article>

        </div>
        `,
    },
];
