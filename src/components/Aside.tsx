import { Home as HomeIcon, Search, Mic, Video, Bell, User, Keyboard, Home, Layers2, Laptop2, PlaySquare, History, MonitorPlay, Clock, ThumbsUp, Flame, ShoppingBag, Music2, Clapperboard, Radio, Gamepad2, ScrollText, Trophy, Lightbulb, RadioTower } from 'lucide-react';


export default function Aside(){
    return(
        <aside className='w-56 p-1  snap-y overflow-y-auto hover:overflow-y-scroll h-full '>
              <nav className=''>
                <nav className=''>
                <a href="" className=' flex items-center gap-5 text-xs font-semibold text-zinc-100 h-10 p-3 rounded-xl hover:bg-zinc-800'>
                  <HomeIcon/>
                  <h1>Início</h1>
                </a>
                <a href="" className=' flex items-center gap-5 text-xs font-semibold text-zinc-100 h-10 p-3 rounded-xl hover:bg-zinc-800'>
                <Layers2/>
                <h1>Shorts</h1>
                </a>
                <a href="" className=' flex items-center gap-5 text-xs font-semibold text-zinc-100 h-10 p-3 rounded-xl hover:bg-zinc-800'>
                  <Laptop2/>
                  <h1>Inscrições</h1>
                </a>
                </nav>

                <nav className='mt-2 border-t border-zinc-700'>
                  <a href="" className='flex items-center gap-5 text-xs font-semibold text-zinc-100 h10 p-3 rounded-xl hover:bg-zinc-800'>
                    <MonitorPlay/>
                    <h1>Biblioteca</h1>
                  </a>
                  <a href="" className='flex items-center gap-5 text-xs font-semibold text-zinc-100 h10 p-3 rounded-xl hover:bg-zinc-800'>
                    <History/>
                    <h1> Histórico</h1>
                  </a>
                  <a href="" className='flex items-center gap-5 text-xs font-semibold text-zinc-100 h10 p-3 rounded-xl hover:bg-zinc-800'>
                    <PlaySquare/>
                    <h1>Seus vídeos</h1>
                  </a>
                  <a href="" className='flex items-center gap-5 text-xs font-semibold text-zinc-100 h10 p-3 rounded-xl hover:bg-zinc-800'>
                    <Clock/>
                    <h1>Assistir mais tarde</h1>
                  </a>
                  <a href="" className='flex items-center gap-5 text-xs font-semibold text-zinc-100 h10 p-3 rounded-xl hover:bg-zinc-800'>
                    <ThumbsUp/>
                    <h1>Videos marcados</h1>
                  </a>
                </nav>
                <nav className='mt-2 border-t border-zinc-700'>
                  <h1 className='px-5 pt-5'>Inscrições</h1>
                </nav>
                <nav className='mt-2 border-t border-zinc-700'>
                <h1 className='px-5 pt-5 pb-1'>Explorar</h1>
                  <a href="" className='flex items-center gap-5 text-xs font-semibold text-zinc-100 h10 p-3 rounded-xl hover:bg-zinc-800'>
                    <Flame/>
                    <h1>Em alta</h1>
                  </a>
                  <a href="" className='flex items-center gap-5 text-xs font-semibold text-zinc-100 h10 p-3 rounded-xl hover:bg-zinc-800'>
                    <ShoppingBag/>
                    <h1>Shopping</h1>
                    </a>
                    <a href="" className='flex items-center gap-5 text-xs font-semibold text-zinc-100 h10 p-3 rounded-xl hover:bg-zinc-800'>
                    <Music2/>
                    <h1>Música</h1>
                    </a>
                    <a href="" className='flex items-center gap-5 text-xs font-semibold text-zinc-100 h10 p-3 rounded-xl hover:bg-zinc-800'>
                    <Clapperboard/>
                    <h1>Filmes</h1>
                    </a>
                    <a href="" className='flex items-center gap-5 text-xs font-semibold text-zinc-100 h10 p-3 rounded-xl hover:bg-zinc-800'>
                    <Radio/>
                    <h1>Ao vivo</h1>
                    </a>
                    <a href="" className='flex items-center gap-5 text-xs font-semibold text-zinc-100 h10 p-3 rounded-xl hover:bg-zinc-800'>
                    <Gamepad2/>
                    <h1>Jogos</h1>
                    </a>
                    <a href="" className='flex items-center gap-5 text-xs font-semibold text-zinc-100 h10 p-3 rounded-xl hover:bg-zinc-800'>
                    <ScrollText/>
                    <h1>Notícias</h1>
                    </a>
                    <a href="" className='flex items-center gap-5 text-xs font-semibold text-zinc-100 h10 p-3 rounded-xl hover:bg-zinc-800'>
                    <Trophy/>
                    <h1>Esportes</h1>
                    </a>
                    <a href="" className='flex items-center gap-5 text-xs font-semibold text-zinc-100 h10 p-3 rounded-xl hover:bg-zinc-800'>
                    <Lightbulb/>
                    <h1>Aprender</h1>
                    </a>
                    <a href="" className='flex items-center gap-5 text-xs font-semibold text-zinc-100 h10 p-3 rounded-xl hover:bg-zinc-800'>
                    <RadioTower/>
                    <h1>Podcasts</h1>
                    </a>
                </nav>
              </nav>
          </aside>
    )
}