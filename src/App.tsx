import { useEffect, useLayoutEffect, useState, type ReactNode } from 'react';
import { MotionConfig } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import { WhatsAppButton } from './components/UI';
import Services from './sections/Services';
import About from './sections/About';
import Invitations from './sections/Invitations';
import NFC from './sections/NFC';
import BusinessSolutions, { Development } from './sections/BusinessSolutions';
import Process from './sections/Process';
import Portfolio from './sections/Portfolio';
import Contact from './sections/Contact';
import Footer from './components/Footer';
import { navigation, tabFromHash, type TabId } from './data/navigation';

const panels: Record<TabId, ReactNode> = {
  inicio: <><Hero/><About/></>,
  servicios: <Services/>,
  invitaciones: <Invitations/>,
  soluciones: <BusinessSolutions/>,
  nfc: <NFC/>,
  desarrollo: <><Development/><Process/></>,
  proyectos: <Portfolio/>,
  contacto: <Contact/>,
};

export default function App() {
  const [activeTab, setActiveTab] = useState<TabId>(tabFromHash);
  useEffect(() => {
    const update = () => setActiveTab(tabFromHash());
    window.addEventListener('hashchange', update);
    return () => window.removeEventListener('hashchange', update);
  }, []);
  useLayoutEffect(() => { window.scrollTo({ top: 0, behavior: 'instant' }); }, [activeTab]);
  function selectTab(id: TabId) {
    if (window.location.hash !== `#${id}`) window.location.hash = id;
    setActiveTab(id);
  }
  return <MotionConfig reducedMotion="user">
    <a className="skip-link" href={`#panel-${activeTab}`} onClick={event => { event.preventDefault(); document.getElementById(`panel-${activeTab}`)?.focus(); }}>Saltar al contenido</a>
    <Header activeTab={activeTab} onSelect={selectTab}/>
    <main className={`catalog-content ${activeTab === 'inicio' ? 'home-content' : ''}`}>
      {navigation.map(({ id }) => <div key={id} id={`panel-${id}`} role="tabpanel" aria-labelledby={`tab-${id}`} tabIndex={0} hidden={activeTab !== id}>{panels[id]}</div>)}
    </main>
    <Footer/><WhatsAppButton/>
  </MotionConfig>;
}
