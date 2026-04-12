import { Link } from "react-router-dom";

const Header = () => (
  <header className="border-b border-border bg-card">
    <div className="container mx-auto flex items-center justify-between px-6 py-4">
      <Link to="/" className="text-xl font-bold text-foreground tracking-tight">
        AP Digital
      </Link>
      <a
        href="https://calendly.com/apdigital-core/30min"
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition hover:opacity-90"
      >
        Book a Call
      </a>
    </div>
  </header>
);

export default Header;
