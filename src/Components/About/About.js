import React from 'react';
import bannerImg from '../../img/banner-img.webp';

const About = () => {
    return (
        <div className='mb-10 container mx-auto p-8 rounded-lg shadow-lg'>
            <img className='mx-auto' src={bannerImg} alt="MSI Modern 15 A5M AMD Ryzen 5 5500U 15.6 Inch FHD IPS Display Carbon Gray Laptop" />
            <h2 className='text-2xl text-violet-700 mt-4 mb-2'>MSI Modern 15 A5M Ryzen 5 5500U 512GB SSD 15.6" FHD Laptop</h2>
            <p className='leading-7 text-slate-700'>
                The MSI Modern 15 A5M features AMD Ryzen 5 5500U Processor (8M Cache, 2.1GHz up to 4.0GHz, 6 cores) and 8GB DDR4 3200Mhz RAM. The AMD Ryzen 5000 Series Mobile Processor power the next generation of multithreaded tasks and provides lightning-fast responsiveness and efficient battery life for your passions at works that keep you productive and entertained anytime, anywhere. It has 2 SO-DIMM slots that support up to DDR4-3200 Memory Type and has a 64GB Max Capacity. It has 512GB NVMe SSD and also comes with extra room for an upgrade with 2x M.2 SSD slot (NVMe PCIe Gen3). The MSI Modern 15 A5M is integrated with AMD Radeon Graphics and it has a 15.6" FHD (1920x1080), IPS-Level display. It has a single color Backlight Keyboard. The optimized 1.5mm key travel and the responsive feedback of each keystroke on the Modern series make the typing experience more ergonomic. The backlit keyboard illuminates the keys brilliantly so you can easily record your passionate things in dimly lit situations. The laptop is equipped with 802.11 ax Wi-Fi 6 + Bluetooth v5.1 for better communication options. It is equipped with two USB-A, which makes connecting devices easier. With the micro SD card reader and HDMI output, you can capture vivid pictures without any hassle and enjoy the various experiences in life. It has been crafted in a 1.6kg ultra-light and ultra-slim 18.9 mm aluminum chassis, the Modern Series is made portable and stylish wherever you go. With extreme mobility easily keep up with your fast-paced lifestyle. The MSI Modern 15 A5M comes with 2 years of warranty.
            </p>
        </div>
    );
};

export default About;