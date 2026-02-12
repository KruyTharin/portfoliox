export function Footer() {
  return (
    <footer className="border-t border-border py-16">
      <div className="container px-6">
        <div className="flex items-center justify-center text-center">
          <p className="text-xs text-foreground/40 uppercase tracking-widest font-bold">
            © {new Date().getFullYear()} Tharin Kruy · Full-stack Engineer
          </p>
        </div>
      </div>
    </footer>
  );
}
