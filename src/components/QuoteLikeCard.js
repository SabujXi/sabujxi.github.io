export default function QuoteLikeCard(props) {
    return <div className="
        
        text-center
        text-siteGreenDeeper
        bg-white text-xl
        p-4 m-2 pl-6 pr-6 rounded-l-xl
        rounded-tr-3xl
        rounded-bl-3xl
        drop-shadow-[11px_7px_4px_rgba(0,0,0,0.25)]
        hover:scale-105
        ease-in-out
        transition-all
        hover:cursor-pointer
        
    ">
        {props.children}
    </div>
}