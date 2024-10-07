import { Github } from 'lucide-react';

const Footer = () => {
    return (
        <div className='flex justify-evenly'>
            <p className='text-[25px] font-bold'>
                Image Gallery
            </p>
            <div>
                <Github/>
            </div>
        </div>
    )
}

export default Footer;