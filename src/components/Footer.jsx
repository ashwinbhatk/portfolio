const Footer = () => {
  return (
    <footer className="py-8 text-center text-sm text-muted-foreground border-t border-border/50 bg-card/30">
      <div className="max-w-6xl mx-auto px-6 sm:px-12 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="flex items-center gap-1">
          Built by <span className="font-semibold text-foreground tracking-wide">Ashwin</span>
        </p>
        <p className="text-xs">
          &copy; {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
