import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Contact from "@/components/Contact";

describe("Component Test: Contact Form", () => {
    it("hiển thị đầy đủ thông tin liên hệ và các trường nhập liệu", () => {
        render(<Contact />);

        // 1. Kiểm tra thông tin hiển thị tĩnh
        expect(screen.getByText("nxthanh.nb2002@gmail.com")).toBeInTheDocument();
        expect(screen.getByText("(+84) 377 648 322")).toBeInTheDocument();

        // 2. Kiểm tra các trường input trong form
        expect(screen.getByPlaceholderText(/Nguyễn Văn A/i)).toBeInTheDocument();
        expect(screen.getByPlaceholderText(/name@company.com/i)).toBeInTheDocument();
        expect(screen.getByPlaceholderText(/Thông tin về vị trí tuyển dụng/i)).toBeInTheDocument();
        expect(screen.getByRole("button", { name: /Gửi tin nhắn/i })).toBeInTheDocument();
    });

    it("cho phép người dùng nhập dữ liệu vào form (Kiểm tra Controlled Components / State)", () => {
        render(<Contact />);

        const nameInput = screen.getByPlaceholderText(/Nguyễn Văn A/i) as HTMLInputElement;
        const emailInput = screen.getByPlaceholderText(/name@company.com/i) as HTMLInputElement;
        const messageInput = screen.getByPlaceholderText(/Thông tin về vị trí tuyển dụng/i) as HTMLTextAreaElement;

        // Act: Người dùng gõ text vào các input
        fireEvent.change(nameInput, { target: { value: "Trần Tuyển Dụng" } });
        fireEvent.change(emailInput, { target: { value: "hr@techcompany.com" } });
        fireEvent.change(messageInput, { target: { value: "Chào bạn Thành, mời bạn trao đổi cơ hội việc làm!" } });

        // Assert: Input phản ánh đúng giá trị state hiện tại
        expect(nameInput.value).toBe("Trần Tuyển Dụng");
        expect(emailInput.value).toBe("hr@techcompany.com");
        expect(messageInput.value).toBe("Chào bạn Thành, mời bạn trao đổi cơ hội việc làm!");
    });

    it("sao chép địa chỉ email vào clipboard khi bấm nút Copy", () => {
        // Mock navigator.clipboard API
        const writeTextMock = jest.fn().mockImplementation(() => Promise.resolve());
        Object.assign(navigator, {
            clipboard: {
                writeText: writeTextMock,
            },
        });

        render(<Contact />);

        const copyBtn = screen.getByTitle("Sao chép email");
        fireEvent.click(copyBtn);

        // Kiểm tra xem hàm clipboard đã được gọi đúng email của Thành chưa
        expect(writeTextMock).toHaveBeenCalledWith("nxthanh.nb2002@gmail.com");
    });
});
