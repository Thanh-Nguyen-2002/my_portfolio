import React from "react";
import { render, screen } from "@testing-library/react";
import Sidebar from "@/components/Sidebar";

describe("Component Test: Sidebar", () => {
    it("hiển thị đúng họ tên và chức danh Frontend Developer", () => {
        render(<Sidebar />);

        // Tìm họ tên trên màn hình
        const nameHeading = screen.getByRole("heading", { name: /Nguyễn Xuân Thành/i });
        expect(nameHeading).toBeInTheDocument();

        // Tìm chức danh Frontend Developer
        const jobTitles = screen.getAllByText(/Frontend Developer/i);
        expect(jobTitles.length).toBeGreaterThan(0);
    });

    it("hiển thị đầy đủ 5 mục điều hướng chính", () => {
        render(<Sidebar />);

        const navItems = ["Giới thiệu", "Kinh nghiệm", "Kỹ năng", "Dự án", "Liên hệ"];
        navItems.forEach((item) => {
            const linkElement = screen.getByText(item);
            expect(linkElement).toBeInTheDocument();
        });
    });

    it("hiển thị nút Tải CV và nhãn trạng thái sẵn sàng nhận việc", () => {
        render(<Sidebar />);

        const downloadCvBtn = screen.getByRole("link", { name: /Tải CV \(PDF\)/i });
        expect(downloadCvBtn).toBeInTheDocument();
        expect(downloadCvBtn).toHaveAttribute("href", "/CV_Frontend_NguyenXuanThanh.pdf");

        const statusBadge = screen.getByText(/Sẵn sàng nhận việc mới/i);
        expect(statusBadge).toBeInTheDocument();
    });
});
