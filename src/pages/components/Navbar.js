import Link from 'next/link'
import Image from 'next/image'
import { Dropdown } from '@nextui-org/react'

export default function Navbar() {
  return (
    <nav>
     <div className='logo'>
        <Image src="/gablogo.png" width={128} height={77} />
     </div>
     <Dropdown>
      <Dropdown.Button flat>
         Die GAB Bildung
     </Dropdown.Button>
     <Dropdown.Menu aria-label="Static Actions">
        <Dropdown.Item key="new">Team</Dropdown.Item>
        <Dropdown.Item key="copy">Leitbild/Philosophie</Dropdown.Item>
        <Dropdown.Item key="edit">Partner</Dropdown.Item>
  
      </Dropdown.Menu>
     </Dropdown>
     <Dropdown>
      <Dropdown.Button flat>
        Ausbildung
     </Dropdown.Button>
     <Dropdown.Menu aria-label="Static Actions">
        <Dropdown.Item key="new">BaE kooperativ</Dropdown.Item>
        <Dropdown.Item key="copy">BaE integrativ</Dropdown.Item>  
      </Dropdown.Menu>
     </Dropdown>
     <Dropdown>
      <Dropdown.Button flat>
        Ausbildung
     </Dropdown.Button>
     <Dropdown.Menu aria-label="Static Actions">
        <Dropdown.Item key="poa">POA Potentialanalyse</Dropdown.Item>
        <Dropdown.Item key="vorbereitung">Prüfungsvorbereitung</Dropdown.Item>  
        <Dropdown.Item key="foerder">Förder-/stützunterricht</Dropdown.Item>  
        <Dropdown.Item key="bewerbung">Bewerbungstraining</Dropdown.Item>  
      </Dropdown.Menu>
     </Dropdown>
     <Dropdown>
      <Dropdown.Button flat>
        Kulturpunkt
     </Dropdown.Button>
     <Dropdown.Menu aria-label="Static Actions">
        <Dropdown.Item key="saal">Der Saal</Dropdown.Item>
        <Dropdown.Item key="vermietung">Vermietung</Dropdown.Item>  

      </Dropdown.Menu>
     </Dropdown>
     <Dropdown>
      <Dropdown.Button flat>
        Aktuelles
     </Dropdown.Button>
     <Dropdown.Menu aria-label="Static Actions">
        <Dropdown.Item key="aktivitaeten"><Link href="/ninjas">POA Aktivitäten</Link></Dropdown.Item>
        <Dropdown.Item key="veranstaltung">Veranstaltungen</Dropdown.Item>  
        <Dropdown.Item key="fotos">Fotos</Dropdown.Item>  

      </Dropdown.Menu>
     </Dropdown>
     <Link href="/components/Kontakt">Kontakt</Link>
    </nav>
  )
}
