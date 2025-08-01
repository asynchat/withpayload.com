import { Container } from "@/components/ui/Container";

export const Footer = () => {
  return (
    <footer className="bg-white border-t">
      <Container>
        <div className="container mx-auto px-4 py-6 flex flex-col sm:flex-row items-center justify-center">
          <div className="text-sm text-gray-500">
            © 2025 {process.env.NEXT_PUBLIC_SITE_COMPANY} - All rights reserved. <a href="https://beian.miit.gov.cn/">{process.env.NEXT_PUBLIC_SITE_BEIAN_CODE}</a>
          </div>
        </div>
      </Container>
    </footer>
  );
};
