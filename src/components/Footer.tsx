export default function Footer() {
  return (
    <footer className="border-t border-slate-100">
      <div className="container py-8 flex flex-col items-center gap-3 text-center text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} Khadka Tours & Travels. All rights reserved.</p>
        <p className="text-xs text-muted-foreground/80">Driver service • Van rental • Hiace • Private cars across Nepal</p>
      </div>
    </footer>
  );
}
