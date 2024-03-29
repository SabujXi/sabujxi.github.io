import Link from "next/link"

export default function Header(props) {
    return <>
        <div {...props} className="h-full
        bg-siteGreen
        px-3
        py-3
        rounded-xl
        drop-shadow-[0px_10px_4px_rgba(0,0,0,0.25)]
        flex
        items-start
        md:items-center
        justify-start
        flex-col
        md:flex-row
        ">
            <Menu title="Home" link="/" />
            <Menu title="Services" link="/services" />
            <Menu title="Projects" link="/projects" />
            <Menu title="Articles" link="/articles" />
            <Menu title="About" link="/about" classNamez="md:ml-auto" />
        </div>
    </>
}

function Menu({ title, link, classNamez }) {
    return <span className={"text-white text-3xl px-3 py-2 md:py-0 border-b-2 inline-block md:border-b-0 border-white w-full md:w-fit hover:scale-105 " + (classNamez ? classNamez : "")}>
        { link &&
            <Link href={link} className="no-underline">
                {title}
            </Link> 
        }
        {!link && <>{title}</>}
    </span>
}