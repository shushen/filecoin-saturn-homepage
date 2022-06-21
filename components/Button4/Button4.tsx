type Props = {
    isOpen: boolean,
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
    backdropBlur: boolean
    aria: string

}

export default function Button4({isOpen, setIsOpen, backdropBlur, aria}: Props) {
    return (
        <button 
            onClick={() => setIsOpen(!isOpen)}
            className={`flex items-center justify-center outline-none group relative ${isOpen ? `rotate-45` : ``} `}
            aria-label={aria}
        >
            <div className="relative group-active:scale-125 scale-110 bg-outer-menu-button group-hover:bg-outer-menu-button-hover group-active:bg-outer-menu-button group-focus-visible:bg-outer-menu-button-focus bg-contain bg-no-repeat bg-center h-8 w-8">              
            </div>
            <div className="absolute bg-inner-menu-button group-hover:bg-inner-menu-button-hover group-active:bg-inner-menu-button bg-contain bg-no-repeat bg-center w-8 h-8 scale-75">
            </div>
            <div className={`shadow-colored absolute group-active:scale-[120%] w-full h-full group-active:p-4 rounded-full -z-20 group-focus-visible:bg-white/30 group-hover:bg-white/20 group-active:bg-white/30 will-change-transform ${backdropBlur ? `supports-blur:backdrop-blur-md supports-blur:bg-sat-blue-3/70 bg-sat-blue-3/90 ` : `bg-sat-blue-3/90 `}`}>
            </div>
        </button>
    )
}