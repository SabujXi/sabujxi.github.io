export default function Header(props) {
    return <>
        <div className="h-[98px] flex flex-row items-center justify-start px-[10px] drop-shadow-[0px_10px_4px_rgba(0,0,0,0.25)] rounded-xl bg-[#5BA77A]">
            <Menu title="Home" />
            <Menu title="Services" />
            <Menu title="Projects" />
            <Menu title="Articles" />
            <Menu title="About" classNamez="ml-auto" />
        </div>
    </>
}

function Menu({ title, classNamez }) {
    return <span className={"text-[28px] px-[10px] text-white " + (classNamez ? classNamez : "")}>
        {title}
    </span>
}