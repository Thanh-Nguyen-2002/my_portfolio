import SectionTitle from "./SectionTitle";

export default function Contact() {
    return (
        <section id="contact" className="bg-white shadow-md rounded-2xl p-6 md:p-8">
            <SectionTitle title="Get In Touch" />
            <p className="text-sm md:text-base mb-6">
                Tôi luôn sẵn sàng thảo luận về dự án mới và cơ hội hợp tác. Liên hệ với tôi qua email hoặc
                social media.
            </p>

            <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-3 text-sm md:text-base">
                    <p>
                        <strong>Email:</strong> alex@example.com
                    </p>
                    <p>
                        <strong>Phone:</strong> +84 123 456 789
                    </p>
                    <p>
                        <strong>Location:</strong> Ho Chi Minh City, Vietnam
                    </p>
                </div>

                <div className="flex flex-col gap-3 justify-center">
                    <button className="bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition">
                        Send Message
                    </button>
                    <button className="border border-orange-500 text-orange-600 py-2 rounded-lg hover:bg-orange-50 transition">
                        Download CV
                    </button>
                </div>
            </div>
        </section>
    );
}
