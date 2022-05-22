import type { NextPage } from "next";
import Link from "next/link";

interface HelpNavigationCardProps {
    link: string,
    icon: React.ReactNode,
    title: string
}

const HelpNavigationCard: NextPage<HelpNavigationCardProps> = ({ link, icon, title }) => {
    return (
        <li>
            <Link href={ link } passHref>
                <a>
                    { icon }

                    { title }
                </a>
            </Link>
        </li>
    )
}

export default HelpNavigationCard