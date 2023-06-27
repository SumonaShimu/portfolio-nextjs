import Link from 'next/link'
import { BsArrowUpRight } from "react-icons/bs";
interface ButtonLinkProps {
    href: string;
    target?: string;
    placeholder: string;
}
const ButtonLink: React.FC<ButtonLinkProps> = ({
    href,
    target,
    placeholder,
}) => {
    return (
        <Link
            href={href}
            target={target}
            className="flex items-center gap-2 linear-flow group"
        >
            <span>{placeholder}</span>{" "}
            <span className="inline-block group-hover:translate-x-2 group-hover:-translate-y-2 duration-500">
                <BsArrowUpRight />
            </span>
        </Link>
    )
}

export default ButtonLink