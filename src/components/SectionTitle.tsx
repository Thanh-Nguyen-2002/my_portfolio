interface SectionTitleProps {
    title: string;
}

export default function SectionTitle({ title }: SectionTitleProps) {
    return (
        <h2 className="text-xl md:text-2xl font-semibold mb-4 text-orange-600 border-l-4 border-orange-500 pl-3">
            {title}
        </h2>
    );
}
