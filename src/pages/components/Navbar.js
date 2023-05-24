import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
  return (
    <nav>
     <div className='logo'>
        <Image src="/gablogo.png" width={128} height={77} />
     </div>
     <Link href="/">Die GAB Bildung</Link>
     <Link href="/about">Ausbildung</Link>
     <Link href="/ninjas">Projekte</Link>
     <Link href="/components/Content">Kulturpunkt</Link>
     <Link href="/about">Aktuelles</Link>
     <Link href="/components/Kontakt">Kontakt</Link>
    </nav>
  )
}
