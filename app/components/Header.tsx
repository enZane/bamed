import { Link } from "@remix-run/react"

/* This example requires Tailwind CSS v2.0+ */
const navigation = [
    { name: 'Directorio', href: 'directorio' },
    { name: 'Contacto', href: 'contacto' },
    { name: 'Nosotros', href: 'nosotros' },
    { name: 'Clientes', href: 'clientes' },
  ]
  
  export default function Header() {
    return (
      <header className="bg-primary mb-12">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
          <div className="w-full py-6 flex items-center justify-between border-b border-indigo-500 lg:border-none">
            <div className="flex items-center">
              <Link to="/">
                <span className="sr-only">Bamed</span>
                <img
                  className="h-12 w-auto text-white"
                  src="/logo.svg"
                  alt=""
                />
              </Link>
              <div className="hidden ml-10 space-x-8 lg:block">
                {navigation.map((link) => (
                  <Link key={link.name} to={link.href} className="text-base font-medium text-white hover:text-indigo-50">
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
            
          </div>
          <div className="py-4 flex flex-wrap justify-center space-x-6 lg:hidden">
            {navigation.map((link) => (
              <Link key={link.name} to={link.href} className="text-base font-medium text-white hover:text-indigo-50">
                {link.name}
              </Link>
            ))}
          </div>
        </nav>
      </header>
    )
  }
  