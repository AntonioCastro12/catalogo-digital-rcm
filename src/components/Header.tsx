import { useRef, useState, type KeyboardEvent } from 'react';
import { Menu, X } from 'lucide-react';
import { QuoteButton } from './UI';
import { navigation, type TabId } from '../data/navigation';

export function Logo() {
  return <a className="logo" href="#inicio" aria-label="RCM CodeDev, inicio"><img className="brand-logo" src="/images/rcm-logo.jpg" alt="" width="641" height="641"/><span>RCM <b>CodeDev</b><small>DESARROLLO WEB</small></span></a>;
}

export default function Header({ activeTab, onSelect }: { activeTab: TabId; onSelect: (id: TabId) => void }) {
  const [open, setOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  function handleKey(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    let next = index;
    if (event.key === 'ArrowRight') next = (index + 1) % navigation.length;
    else if (event.key === 'ArrowLeft') next = (index - 1 + navigation.length) % navigation.length;
    else if (event.key === 'Home') next = 0;
    else if (event.key === 'End') next = navigation.length - 1;
    else return;
    event.preventDefault();
    onSelect(navigation[next].id);
    tabs.current[next]?.focus();
  }
  return <header><div className="header-inner"><Logo/>
    <span className="mobile-current-tab">{navigation.find(item => item.id === activeTab)?.label}</span>
    <button ref={menuButton} className="menu-toggle icon-button" aria-label={open ? 'Cerrar menú' : 'Abrir menú'} aria-expanded={open} aria-controls="main-navigation" onClick={() => setOpen(!open)}>{open ? <X/> : <Menu/>}</button>
    <nav id="main-navigation" className={open ? 'open' : ''} aria-label="Navegación principal" onKeyDown={event => { if (event.key === 'Escape') { setOpen(false); menuButton.current?.focus(); } }}>
      <div className="navigation-tabs" role="tablist" aria-label="Secciones del catálogo">
        {navigation.map(({ id, label }, index) => <button key={id} ref={element => { tabs.current[index] = element; }} id={`tab-${id}`} role="tab" aria-selected={activeTab === id} aria-controls={`panel-${id}`} tabIndex={activeTab === id ? 0 : -1} onKeyDown={event => handleKey(event, index)} onClick={() => { onSelect(id); setOpen(false); if (open) menuButton.current?.focus(); }}>{label}</button>)}
      </div>
    </nav>
    <QuoteButton className="button small header-quote">Cotizar proyecto</QuoteButton>
  </div></header>;
}

