import Navbar from './components/Navbar';import Hero from './components/Hero';
import {Background,Cursor} from './components/Effects';
import {About,Expertise,Projects,Journey,Achievements,Contact} from './components/Sections';
import {useActive,useTheme} from './hooks';
const IDS=['home','about','expertise','projects','journey','achievements','contact'];
export default function App(){
  const toggle=useTheme(),a=useActive(IDS);
  return <><Background/><Cursor/><Navbar active={a==='achievements'?'journey':a} onTheme={toggle}/>
    <main><Hero/><About/><Expertise/><Projects/><Journey/><Achievements/><Contact/></main><footer>© 2026 May Myat Noe Lwin</footer></>;
}
