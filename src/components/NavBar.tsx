import Image from 'next/image';
import { Home as HomeIcon, Search, Mic, Video, Bell, User, Keyboard, Home, Layers2, Laptop2, PlaySquare, History, MonitorPlay, Clock, ThumbsUp, Flame, ShoppingBag, Music2, Clapperboard, Radio, Gamepad2, ScrollText, Trophy, Lightbulb, RadioTower } from 'lucide-react';

export default function NavBar(){
    return(
        <div className="">
        <nav className="flex justify-between items-center">
            <div>{/* parte esquerda */}
            <Image src="/youtube.png" alt="logo Youtube" className="pl-2" width={120} height={100}/>
            </div>
              <div className='flex items-center gap-5'>{/* parte centro */}
                <div className='flex justify-between items-center w-[500px] h-10 rounded-3xl bg-zinc-900 ring-1 ring-zinc-600'>
                  <div className='flex justify-between w-[450px]'>
                  <input type="text"  placeholder='Pesquisa' className='bg-inherit outline-0 w-full h-full rounded-3xl font-light p-3'/>
                  <Keyboard className='m-2'/>
                </div>
                <div className=' flex items-center justify-center rounded-r-3xl bg-zinc-700 h-full w-16'>
                <Search className='text-xl cursor-pointer'/>
                </div>
                </div>
                <Mic className='w-10 h-10 bg-zinc-700 rounded-full p-2 cursor-pointer hover:bg-zinc-600'/>
              </div>
              <div className='flex justify-center gap-6 p-5'>{/* parte direita */}
              <Video className=' hover:bg-zinc-700 w-10 h-10 rounded-full p-2 cursor-pointer'/>
              <Bell  className=' hover:bg-zinc-700 w-10 h-10 rounded-full p-2 cursor-pointer'/>
              <User  className=' hover:bg-zinc-700 w-10 h-10 rounded-full p-2 cursor-pointer'/>
              </div>
        </nav>
      </div>
    )
}