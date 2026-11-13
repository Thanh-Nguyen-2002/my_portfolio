import { data_project_detail } from "@/data/project_detail";

describe("Unit Test: data_project_detail", () => {
    it("phải chứa đầy đủ 4 dự án thực chiến", () => {
        expect(data_project_detail).toBeDefined();
        expect(data_project_detail.length).toBe(4);
    });

    it("dự án travel_booking phải có đầy đủ thông tin kỹ thuật chuyên sâu", () => {
        const travelProject = data_project_detail.find((p) => p.slug === "travel_booking");
        expect(travelProject).toBeDefined();
        expect(travelProject?.name).toBe("Travel Booking Platform");
        expect(travelProject?.deepDives.length).toBeGreaterThan(0);
        expect(travelProject?.responsibilities.length).toBeGreaterThan(0);
        expect(travelProject?.tech).toContain("ReactJS");
        expect(travelProject?.tech).toContain("TanStack Query");
    });

    it("mọi dự án phải có slug không trùng lặp và đường dẫn hình ảnh hợp lệ", () => {
        const slugs = data_project_detail.map((p) => p.slug);
        const uniqueSlugs = new Set(slugs);
        expect(uniqueSlugs.size).toBe(slugs.length);

        data_project_detail.forEach((project) => {
            expect(project.image).toMatch(/^\/images\//);
            expect(project.desc.length).toBeGreaterThan(10);
        });
    });
});
