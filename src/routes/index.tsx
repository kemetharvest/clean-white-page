import { createFileRoute } from "@tanstack/react-router";
import { DemoForm } from "@/components/demo-form";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "مساحة التجربة | بيانات وهمية فقط" },
    { name: "description", content: "صفحة تجريبية محايدة بمدخلات وهمية لا يتم حفظها أو إرسالها." },
    { property: "og:title", content: "مساحة التجربة | بيانات وهمية فقط" },
    { property: "og:description", content: "نموذج تجريبي مستقل لا يتبع أي جهة رسمية ولا يحفظ المدخلات." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary" },
  ] }),
  component: DemoForm,
});
