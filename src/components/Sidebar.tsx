import { Shell } from 'lucide-react';
import { PanelRightOpen } from 'lucide-react';
import { PanelLeftOpen } from 'lucide-react';
import { Airplay } from 'lucide-react';
import { ChartColumnStacked } from 'lucide-react';
import { useState } from 'react';

const Sidebar = () => {
    const [openPanel,setOpenPanel] = useState<Boolean>(true)
    return (
        <div className="flex flex-col justify-between min-h-screen min-w-[30px]">
            <div className="flex flex-col gap-2">
               <div className="flex justify-evenly">
                    <Shell/>
                    <p>Image Gallery</p>

               </div>
               <div>

               </div>
            </div>
            <div>
                {/* user details */}
            </div>
        </div>
    )
}

export default Sidebar;