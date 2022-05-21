import Link from "next/link"

type Props = {
    link: string,
}

export default function Button3({link}: Props) {
    return  (
        <Link href={link}>
            <a className="group outline-none relative" >
                <div className="group-hover:bg-white/10 group-focus-visible:bg-white/10 rounded-full group-active:scale-90 ">
                    <div className=" bg-transparent rounded-full ">
                        <div className="relative bg-saturn-logo w-32 h-10 md:w-40 md:h-12 bg-no-repeat bg-contain bg-center">
                        <div className="absolute w-full h-full border-2 border-transparent bg-transparent top-0 group-focus-visible:border-white rounded-full"></div>
                        </div>
                    </div>
                </div>
            </a>
        </Link>
    )
}