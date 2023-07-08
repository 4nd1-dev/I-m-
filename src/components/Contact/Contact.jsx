import {TitleSection} from '../TitleSection'

export function Contact(){
  return (
    <section id='contact' className="w-full h-full py-32 px-10 bg-gradient-to-b from-black via-gray-950 via-70% to-zinc-950 flex flex-col justify-center items-center gap-24">
      <TitleSection title="Contact" quote="Keep In Touch"/>
      
      <form className="w-full h-full max-w-[1000px] flex flex-col justify-center items-center gap-5 accent-primary text-white text-md font-normal caret-primary">
        <div className="w-full flex gap-5 justify-center items-center">
        <input 
          className="w-full bg-transparent border border-gray-600 rounded px-2 py-3 focus:border-primary focus:placeholder-primary transition-all" 
          type="text" 
          placeholder="Nombre"
        />
        
        <input 
          className="w-full bg-transparent border border-gray-600 rounded px-2 py-3 focus:border-primary focus:placeholder-primary transition-all" 
          type="text" 
          placeholder="Apellidos"
        />
        </div>
        
        <textarea 
          className="w-full h-full bg-transparent border border-gray-600 rounded px-2 py-3 resize-y focus:border-primary focus:placeholder-primary transition-all" 
          placeholder="Comments"
        />
      </form>
    </section>
  )
}