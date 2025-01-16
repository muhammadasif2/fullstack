import Link from "next/link";

export default function Navbar() {
  return (
    <nav style={{ padding: "10px", background: "#eee" }}>
      <Link href="/" style={{ marginRight: "15px" }}>
        Home
      </Link>
      <Link href="/about" style={{ marginRight: "15px" }}>
        About
      </Link>
      <Link href="/contact">Contact</Link>
      <Link href="/counter">Counter</Link>
      <Link href="/posts">Posts</Link>
    </nav>
  );
}
