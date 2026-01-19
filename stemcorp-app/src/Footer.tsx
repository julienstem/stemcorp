import "./Footer.css"

export function Footer() {
    const currentDate = new Date().getFullYear();
  return (
    <footer className="footer">
      <p>© {currentDate} StemCorp. All rights reserved.</p>
    </footer>
  );
}