import SectionTitle from "./SectionTitle";

export default function About() {
    return (
        <section id="about" className="bg-white shadow-md rounded-2xl p-6 md:p-8">
            <SectionTitle title="About Me" />
            <p className="mb-4 text-sm md:text-base">
                Xin chào! Tôi là Alex, một Frontend Developer với đam mê tạo ra những giao diện web đẹp
                mắt và thân thiện với người dùng. Tôi có hơn 3 năm kinh nghiệm với React, Vue.js, Node.js.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center font-medium">
                {[
                    { label: "Projects", value: "50+" },
                    { label: "Clients", value: "20+" },
                    { label: "Years", value: "3+" },
                    { label: "Passion", value: "100%" },
                ].map((item) => (
                    <div key={item.label}>
                        <p className="text-2xl md:text-3xl text-orange-600 font-bold">{item.value}</p>
                        <p>{item.label}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
