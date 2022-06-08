export function Footer() {
    return <div className="
        flex
        flex-col
        md:flex-row
        justify-between
        items-start
        bg-siteGreen
        p-4
        rounded-2xl
    ">
        <div>
            <div className="text-xl text-white">Md. Sabuj Sarker</div>
            <div className="text-gray-200">
                md.sabuj.sarker@gmail.com
                <br />
                +8801868363600
            </div>
        </div>
        <div className="
            w-full
            md:w-2
            h-full
            bg-white
            inline-block
        ">

        </div>
        <div>
            <div className="text-xl text-white">Available for Hire</div>
            <div className="text-gray-200">
                Consultancy, Remote Job, Contract, Freelancing.
            </div>
        </div>
    </div>
}