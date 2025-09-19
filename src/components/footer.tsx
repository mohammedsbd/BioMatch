export default function Footer() {
    return (
      <footer className="py-16 md:py-32">
        <div className="mx-auto max-w-5xl px-6">
          <span className="text-muted-foreground block text-center text-sm">
            {" "}
            © {new Date().getFullYear()} BioMatch, All rights reserved Built by{" "}
            <a
              href="https://www.linkedin.com/in/mohammed-salih-245307333"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary"
            >
              @ Mohammed Salih
            </a>{" "}
            <a
              href="https://github.com/mohammedsbd"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline underline-offset-2"
            >
              Github
            </a>{" "}
            <a
              href="https://www.linkedin.com/in/mohammed-salih-245307333"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline underline-offset-2"
            >
             LinkedIn
            </a>
          </span>
        </div>
      </footer>
    );
}