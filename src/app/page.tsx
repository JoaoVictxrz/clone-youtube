import NavBar from '@/components/NavBar';
import Image from 'next/image';
import logoYoutube from './img/youtube.png'
import Aside from '@/components/Aside';
import InicialPage from '@/components/Inicial-page/InicialPage';

export default function home(){
  return(

    <div className="w-auto h-auto p-2"> {/* div da tela inteira do Yt */}
      {/* Navbar de cima do Yt */}
      <NavBar />
      <div> {/* Sub-menu do Yt*/}
      </div>
      <div> {/* pagina inicial do yt*/}
        <div className=' flex flex-1'>
          <Aside />
          <InicialPage />
          </div>
        </div>
      </div>

  )

}