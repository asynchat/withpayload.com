import { Container } from "@/components/ui/Container";

export const Footer = () => {
  return (
    <footer className="bg-white border-t">
      <Container>
        <div className="container mx-auto px-4 py-6 flex flex-col sm:flex-row items-center justify-center">
          <div className="text-sm text-gray-500">
            © 2025 torchdb.com - All rights reserved. <a href="https://beian.miit.gov.cn/">粤ICP备19100219号-2</a>
          </div>
        </div>
      </Container>
    </footer>
  );
};
