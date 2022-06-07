export default function Header(props) {
    return <>
        <div className="h-20 flex  items-center justify-start px-3 drop-shadow-[0px_10px_4px_rgba(0,0,0,0.25)] rounded-xl bg-siteGreen">
            <Menu title="Home" />
            <Menu title="Services" />
            <Menu title="Projects" />
            <Menu title="Articles" />
            <Menu title="About" classNamez="ml-auto" />
        </div>
    </>
}

function Menu({ title, classNamez }) {
    return <span className={"text-white text-3xl px-3 " + (classNamez ? classNamez : "")}>
        {title}
    </span>
}