import QuoteLikeCard from "./QuoteLikeCard"

export default function SkillsCard(props) {
    return <>
    <div className="bg-siteGreen rounded-2xl p-4 h-full">
        <QuoteLikeCard>
            Hi, I am Md. Sabuj Sarker.
            <br />
            I am a very passionate person about technology &amp; and science.
            <br />
            Talking about profession, I am an experienced Software Engineer, Automation Engineer,
            Software Quality Assurance expert, Project Manager, Trainer, Public Speaker, Content Writer,
            and the team player.
            <br />
            So, if you are looking for an expert programmer, full stack web designer, mission critical software developer,
            or someone who can solve your modern technology problems and help thrive your business - I am at your service.
            <br />
            I am inviting you to check out my projects, services, blogs, articles, stories and hey, let's connect at md.sabuj.sarker@gmail.com
        </QuoteLikeCard>
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
    return <div className="text-siteGreenDeeper bg-white text-2xl p-2 m-2 rounded-l-xl rounded-tr-[4rem] drop-shadow-[11px_7px_4px_rgba(0,0,0,0.25)] whitespace-nowrap hover:scale-105 ease-in-out transition-all hover:cursor-pointer">
        <span className="bg-green-400 h-4 w-8 inline-block"></span>
        <span className="pl-4">{name}</span>
    </div>
}