import leftBrace from "../assets/left_brace.png"
import rightBrace from "../assets/right_brace.png"
import react from "../assets/reactjs.svg"
import html from "../assets/html.svg"
import python from "../assets/python.svg"
import tailwind from "../assets/tailwind.svg"
import js from "../assets/js.svg"
import css from "../assets/css2.svg"
import scss from "../assets/scss.svg"
import github from "../assets/github.svg"
import wp from  "../assets/wordpress.svg"
import canva from "../assets/canva.svg"
import figma from "../assets/figma.svg"

const icons = [
 { text:"React", src: react},
 { text:"TailwindCSS", src: tailwind},
 { text:"JavaScript", src: js},
 { text:"Figma", src:figma},
 { text:"Canva", src:canva},
 { text:"GitHub", src:github},
 { text:"WordPress", src:wp},
 { text:"HTML5", src:html},
 { text:"CSS3", src:css},
 { text:"SCSS", src:scss},
 { text:"Python", src:python},
]
export default function Stack() {
  return (
    <div
    className='font-mono items-left  h-screen flex flex-col w-full md:w-[80vw] mx-auto gap-8 md:gap-10 px-8 py-6 md:p-0 my-20 md:my-50'
  >
    <span className="flex justify-start items-center gap-4 my-8 " >
      <img src={leftBrace} alt="" className="h-10 md:h-14"/>
      
      <h2 className='text-left text-textblack text-3xl md:text-5xl '>My Tools</h2>
      <img src={rightBrace} alt="" className="h-10 md:h-14"/>
    </span>

      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-8 md:gap-12 my-4  ">
        {icons.map((icon, i)=>(
          <div key={i} className="border-textblack border-[1px] rounded-2xl px-4 py-4 gap-4 flex flex-col justify-between items-center" >
            <img src={icon.src} alt="" className="h-8 md:h-10"/>
            <p className="text-sm">{icon.text}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
