import React from 'react'
import { FaWindows, FaPlaystation, FaXbox, FaApple, FaLinux, FaAndroid } from "react-icons/fa";
import { BsGlobe, BsNintendoSwitch } from "react-icons/bs";

import { MdPhoneIphone } from 'react-icons/md';
function Platforms({ platformsData }) {
    const platforms = {
        pc: FaWindows,
        nintendo: BsNintendoSwitch,
        playstation: FaPlaystation,
        xbox: FaXbox,
        mac: FaApple,
        linux: FaLinux,
        android: FaAndroid,
        ios:MdPhoneIphone,
        web:BsGlobe
    }

    return (
        <div className='text-white flex'>{platformsData.map((platform) => {
            const PlatformIcon = platforms[platform.platform.slug];
            return PlatformIcon ? (
                <PlatformIcon key={platform.platform.slug} className="w-4 h-6 m-0.5" />
            ) : null;
        })}</div>
    )
}

export default Platforms