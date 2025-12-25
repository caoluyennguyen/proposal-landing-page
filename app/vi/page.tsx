import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Section } from "@/components/section"
import { OptionCard } from "@/components/option-card"
import { Button } from "@/components/ui/button"
import { Check, Clock, Banknote } from "lucide-react"
import { AnimatedSection } from "@/components/animated-section"
import { StaggeredCards } from "@/components/staggered-cards"
import { Snowfall } from "@/components/snowfall"

export default function VietnamesePage() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      {/* <Snowfall /> */}
      <Header lang="vi" />

      <main className="flex-1">
        <section className="relative py-20 md:py-28 bg-gradient-to-b from-muted/50 to-background dark:from-muted/20 overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <AnimatedSection delay={0}>
              <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4 text-balance">
                Thiết kế lại website doanh nghiệp
              </h1>
            </AnimatedSection>
            <AnimatedSection delay={100}>
              <p className="text-lg md:text-xl text-primary font-medium mb-4">
                Giải pháp rõ ràng – Nhiều lựa chọn – Phạm vi minh bạch
              </p>
            </AnimatedSection>
            <AnimatedSection delay={200}>
              <p className="text-muted-foreground max-w-2xl mx-auto mb-8 text-pretty">
                Giúp doanh nghiệp lựa chọn phương án phù hợp nhất để làm mới website, nâng cấp hình ảnh và tối ưu chi
                phí.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={300}>
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/25"
              >
                Vui lòng tham khảo phương án phù hợp
              </Button>
            </AnimatedSection>
          </div>
        </section>

        {/* Giải pháp & Các mức thiết kế */}
        <Section id="solutions" title="Các mức thiết kế website">
          <StaggeredCards className="grid md:grid-cols-3 gap-6">
            <OptionCard
              title="Redesign giao diện (UI)"
              badge="Tiết kiệm"
              costLevel="low"
              details={[
                "Làm mới giao diện website",
                "Giữ nguyên cấu trúc và nội dung hiện tại",
                "Phù hợp khi chỉ cần cải thiện hình ảnh",
              ]}
            />
            <OptionCard
              title="Redesign + cấu trúc"
              badge="Cân bằng"
              costLevel="mid"
              details={[
                "Thiết kế lại giao diện",
                "Sắp xếp lại bố cục, menu và luồng nội dung",
                "Cải thiện trải nghiệm người dùng",
              ]}
            />
            <OptionCard
              title="Làm mới website hoàn toàn"
              badge="Cao Cấp"
              costLevel="high"
              details={[
                "Thiết kế và xây dựng website mới",
                "Cấu trúc rõ ràng, dễ mở rộng",
                "Phù hợp website doanh nghiệp nhiều nội dung",
              ]}
            />
          </StaggeredCards>
        </Section>

        <Section id="options" title="Mức độ thiết kế UI/UX" className="bg-muted/30 dark:bg-muted/10">
          <StaggeredCards className="grid md:grid-cols-3 gap-6">
            <OptionCard
              title="Đẹp – gọn – hiện đại"
              badge="Tiết kiệm"
              costLevel="low"
              details={["Layout phổ biến, dễ sử dụng", "Ít animation", "Tối ưu chi phí và thời gian"]}
            />
            <OptionCard
              title="Thiết kế theo thương hiệu"
              badge="Cân bằng"
              costLevel="mid"
              details={["Màu sắc và font theo brand", "Layout riêng cho các trang chính", "Animation nhẹ"]}
            />
            <OptionCard
              title="Thiết kế cao cấp"
              badge="Cao cấp"
              costLevel="high"
              details={["UI/UX design riêng (Figma)", "Micro-interactions", "Chuẩn brand guideline"]}
            />
          </StaggeredCards>
        </Section>

        {/* Nguồn nội dung text & hình ảnh */}
        <Section title="Nguồn nội dung text & hình ảnh">
          <StaggeredCards className="grid md:grid-cols-3 gap-6">
            <OptionCard
              title="Khách hàng cung cấp"
              badge="Tiết kiệm"
              costLevel="low"
              details={["Text và hình ảnh do khách hàng cung cấp", "Developer triển khai hiển thị"]}
            />
            <OptionCard
              title="Hỗ trợ chỉnh sửa"
              badge="Cân bằng"
              costLevel="mid"
              details={["Chỉnh sửa và sắp xếp nội dung", "Hình ảnh free cơ bản"]}
            />
            <OptionCard
              title="Trọn gói nội dung"
              badge="Cao cấp"
              costLevel="high"
              details={["Viết lại nội dung", "Hình ảnh chuyên nghiệp", "Tối ưu thông điệp ngành"]}
            />
          </StaggeredCards>
        </Section>

        <Section title="Phạm vi bàn giao" className="bg-muted/30 dark:bg-muted/10">
          <StaggeredCards className="grid md:grid-cols-3 gap-6">
            <OptionCard
              title="Bàn giao & deploy"
              badge="Tiết kiệm"
              costLevel="low"
              details={["Bàn giao toàn bộ source code", "Deploy lên hosting khách cung cấp"]}
            />
            <OptionCard
              title="Bảo hành kỹ thuật ngắn hạn"
              badge="Cân bằng"
              costLevel="mid"
              details={["Bàn giao toàn bộ source code", "Deploy lên hosting khách cung cấp", "Bảo hành 7–14 ngày"]}
            />
            <OptionCard
              title="Hỗ trợ sau bàn giao"
              badge="Cao cấp"
              costLevel="high"
              details={["Bàn giao toàn bộ source code", "Deploy lên hosting khách cung cấp", "Bảo hành trong 1 tháng"]}
            />
          </StaggeredCards>
        </Section>

        {/* Phạm vi công việc */}
        <Section id="scope" title="Phạm vi công việc">
          <AnimatedSection className="max-w-2xl mx-auto">
            <div className="bg-card border border-border rounded-xl p-8 transition-all duration-300 hover:shadow-lg hover:border-primary/30">
              <ul className="space-y-4">
                {[
                  "Thiết kế & xây dựng website mới",
                  "Khoảng 27–30 trang",
                  "Thanh tìm kiếm nội dung",
                  "SEO cơ bản",
                  "Responsive cho mọi thiết bị",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-foreground group">
                    <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-110">
                      <Check className="h-4 w-4 text-primary" />
                    </div>
                    <span className="transition-colors duration-300 group-hover:text-primary">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>
        </Section>

        <Section id="timeline" title="Thời gian & Chi phí" className="bg-muted/30 dark:bg-muted/10">
          <StaggeredCards className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto" staggerDelay={150}>
            <div className="bg-card border border-border rounded-xl p-8 text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-primary/30 group">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-110">
                <Clock className="h-6 w-6 text-primary transition-transform duration-300 group-hover:rotate-12" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Thời gian hoàn thành</h3>
              <p className="text-2xl font-bold text-primary">≤ 14 ngày</p>
              <p className="text-sm text-muted-foreground mt-2">sau khi thống nhất phạm vi</p>
            </div>
            <div
              id="pricing"
              className="bg-card border border-border rounded-xl p-8 text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-primary/30 group"
            >
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-110">
                <Banknote className="h-6 w-6 text-primary transition-transform duration-300 group-hover:rotate-12" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Chi phí dự kiến</h3>
              <p className="text-2xl font-bold text-primary">Khoảng từ 2.4 triệu VNĐ</p>
              <p className="text-sm text-muted-foreground mt-2">tùy theo lựa chọn</p>
            </div>
          </StaggeredCards>
        </Section>
      </main>

      <Footer lang="vi" />
    </div>
  )
}
