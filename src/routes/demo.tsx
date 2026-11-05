import { createFileRoute } from "@tanstack/react-router";
import { DemoForm } from "@/components/demo-form";

export const Route = createFileRoute("/demo")({
  head: () => ({ meta: [
    { title: "النموذج المستقل | مساحة التجربة" },
    { name: "description", content: "نموذج مستقل بهوية محايدة وحقول وهمية دون حفظ أو إرسال المدخلات." },
    { property: "og:title", content: "النموذج المستقل | مساحة التجربة" },
    { property: "og:description", content: "تجربة مستقلة ببيانات وهمية فقط، بلا حفظ أو إرسال." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary" },
  ] }),
  component: DemoForm,
});