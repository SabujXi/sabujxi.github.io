export default function SkillCard(props) {
    return <>
    <div className="bg-siteGreen rounded-2xl p-4 h-full">
        <Skill name="Software Architect" />
        <Skill name="Software Engineer" />
        <Skill name="Programmer" />
        <Skill name="Business Consultant" />
        <Skill name="Trainer" />
        <Skill name="Photographer" />
    </div>
    </>
}

function Skill({ name }) {
    return <div className="text-siteGreenDeeper bg-white text-2xl p-2 m-2 rounded-l-xl rounded-tr-[4rem] drop-shadow-[11px_7px_4px_rgba(0,0,0,0.25)] whitespace-nowrap hover:scale-105 ease-in-out transition-all">
        <span className="bg-green-400 h-4 w-8 inline-block"></span>
        <span className="pl-4">{name}</span>
    </div>
}