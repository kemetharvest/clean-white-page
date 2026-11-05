import { useState, type FormEvent } from "react";
import { ArrowLeft, CheckCircle2, FlaskConical, Info, RotateCcw, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function DemoForm() {
  const [complete, setComplete] = useState(false);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    event.currentTarget.reset();
    setComplete(true);
  }

  return (
    <div dir="rtl" className="demo-page min-h-svh bg-background text-foreground">
      <header className="border-b border-border">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-5 py-5 sm:px-8">
          <div className="flex items-center gap-3 font-bold">
            <span className="flex size-10 items-center justify-center rounded-md bg-primary text-primary-foreground"><FlaskConical aria-hidden="true" className="size-5" /></span>
            مساحة التجربة
          </div>
          <span className="text-xs font-medium text-muted-foreground">نموذج مستقل</span>
        </div>
      </header>

      <main className="mx-auto max-w-lg px-5 py-10 sm:px-8 sm:py-16">
        <div className="mb-7">
          <span className="text-sm font-bold text-primary">للتجربة فقط</span>
          <h1 className="mt-3 text-3xl font-bold leading-snug sm:text-4xl">نموذج بيانات تجريبية</h1>
          <p className="mt-3 text-base leading-7 text-muted-foreground">هوية محايدة، وبيانات وهمية. هذه الصفحة لا تتبع أي بنك أو جهة رسمية.</p>
        </div>

        <div id="demo-notice" className="mb-8 flex items-start gap-3 rounded-md border border-border bg-secondary p-4 text-sm leading-6">
          <Info aria-hidden="true" className="mt-1 size-4 shrink-0 text-primary" />
          <p>استخدم بيانات وهمية فقط. لا تدخل رقمًا قوميًّا أو كلمة مرور أو أي بيانات شخصية. لن يتم حفظ أو إرسال أي مدخلات.</p>
        </div>

        {complete ? (
          <section role="status" className="py-5 text-center">
            <CheckCircle2 aria-hidden="true" className="mx-auto mb-5 size-12 text-primary" />
            <h2 className="text-2xl font-bold">اكتملت التجربة</h2>
            <p className="mt-3 text-sm leading-7 text-muted-foreground">تم مسح الحقول دون حفظ أو إرسال البيانات.</p>
            <Button className="mt-7 h-12 w-full" onClick={() => setComplete(false)}><RotateCcw />تجربة جديدة</Button>
          </section>
        ) : (
          <form onSubmit={submit} autoComplete="off" aria-describedby="demo-notice" className="space-y-6">
            <div className="space-y-2.5">
              <Label htmlFor="demo-alias">اسم شخصية وهمية</Label>
              <Input id="demo-alias" placeholder="مثال: مستكشف النجوم" required maxLength={60} autoComplete="off" className="h-12 bg-background text-base" />
            </div>
            <div className="space-y-2.5">
              <Label htmlFor="demo-project">اسم مشروع خيالي</Label>
              <Input id="demo-project" placeholder="مثال: حديقة القمر" required maxLength={80} autoComplete="off" className="h-12 bg-background text-base" />
            </div>
            <div className="space-y-2.5">
              <Label htmlFor="demo-color">لون مفضل للتجربة</Label>
              <Input id="demo-color" placeholder="مثال: أخضر" required maxLength={30} autoComplete="off" className="h-12 bg-background text-base" />
            </div>
            <div className="flex gap-3 pt-2">
              <Button type="submit" className="h-12 flex-1 text-base font-bold">إكمال التجربة<ArrowLeft aria-hidden="true" /></Button>
              <Button type="reset" variant="outline" className="h-12 px-4" aria-label="مسح الحقول" title="مسح الحقول"><RotateCcw aria-hidden="true" /></Button>
            </div>
          </form>
        )}

        <div className="mt-8 flex items-center justify-center gap-2 border-t border-border pt-6 text-xs text-muted-foreground"><ShieldCheck aria-hidden="true" className="size-4" />بلا حسابات · بلا حفظ · بلا إرسال</div>
      </main>
      <footer className="px-5 pb-7 text-center text-xs text-muted-foreground">مساحة التجربة — نموذج توضيحي غير رسمي</footer>
    </div>
  );
}