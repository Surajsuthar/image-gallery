import Image from "next/image"
export default function Logo() {
    return (
        <Image
            height={30}
            width={30}
            src="/logo.svg"
            alt="logo"
        />
    )
}