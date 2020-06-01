import Link from 'next/link'

export default function Header() {
  return (
    <>
      <header className="header">
        <nav className="nav flex flex-row" role="navigation" aria-label="main navigation">
          <h1 className="flex-grow">👋 Welcome</h1>
          <Link href="/">
            <a>andremalan.com</a>
          </Link>
        </nav>
      </header>
      <style jsx>{`
        header {
          width: 100%;
          height: 100px;
          border-bottom: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        nav {
          width: calc(100% - 40px);
          max-width: 1200px;
          font-weight: bold;
          font-size: 1.3rem;
        }
        nav a {
          margin-right: 20px;
          text-decoration: none;
        }
        nav a:hover {
          text-decoration: underline;
        }
      `}</style>
    </>
  )
}
