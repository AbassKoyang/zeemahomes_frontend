import Image from 'next/image'
import { ArrowRight01Icon } from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'
import { Button } from '@/components/ui/button'

const page = () => {
  return (
    <div className='relative w-full py-14 overflow-hidden'>
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-1 gap-10 lg:gap-16">
            <div className="col-span-1">
                <h1 className='text-3xl lg:text-6xl font-semibold font-lato text-secondary uppercase'>about us: <span className='text-primary'>zeema</span></h1>
                <div className="w-full h-[200px] lg:h-[300px] relative border-5 border-primary mt-3">
                    <Image src='/about-us-1.jpeg' alt='About Us' fill className='object-cover' />
                </div>
            </div>
            <div className="col-span-1">
                <p className='text-sm lg:text-base text-muted-foreground font-lato'>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. <br/>Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. <br/>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim...<br/>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim...
                    <br/>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim...
                </p>
            </div>
        </div>

        <div className="py-20 grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-1 gap-10 lg:gap-16">
            <div className="col-span-1 flex items-center justify-center">
                <div className="p-7 lg:pl-12 border border-border rounded-[16px] bg-white h-fit">
                    <h2 className="text-3xl md:text-4xl font-semibold text-secondary tracking-tight font-lato">
                    Our Story
                    </h2>
                    <p className='text-sm lg:text-base text-muted-foreground font-lato mt-3'>
                        RealPro is proud to be a trusted leader in real estate, offering comprehensive solutions and professional services in the property industry. With over 10 years of experience, we continue to grow and innovate, upholding a tradition of quality and reliability.
                    </p>
                    <p className='text-sm lg:text-base text-muted-foreground font-lato mt-3'>
                        At RealPro, we are committed to putting clients first, dedicated to helping them find their dream homes or valuable investment opportunities. Our team of seasoned experts is always ready to share deep market insights and knowledge to provide clients with the best options available.
                    </p>
                    <p className='text-sm lg:text-base text-muted-foreground font-lato mt-3'>
                        RealPro is more than just a real estate company – we are a reliable partner, walking with you every step of the way in building your home and growing your investments with confidence.
                    </p>
                    <Button 
                        className="mt-5 w-fit bg-primary hover:bg-primary/90 text-white h-12 lg:h-16 px-5 lg:px-10 rounded-[6px] text-sm lg:text-lg font-semibold group transition-all shadow-lg shadow-primary/20 font-lato"
                        >
                        Work With Us
                        <HugeiconsIcon icon={ArrowRight01Icon} className="ml-2 size-4 lg:size-6 transition-transform group-hover:translate-x-1" />
                    </Button>
                </div>
            </div>
            <div className="col-span-1">
                <div className="w-full lg:w-[532px] h-[400px] lg:h-[520px] relative">
                    <Image src='/about-us-2.png' alt='About Us' fill className='object-start size-full' />
                </div>
            </div>
        </div>

        <div className="w-full py-20">
            <h2 className="text-center text-3xl md:text-4xl font-semibold text-secondary tracking-tight font-lato">
                    Our Vision
            </h2>
            <div className="w-full flex flex-col lg:flex-row gap-10 items-center justify-between mt-[40px] lg:px-10">
                <div className="flex flex-col items-center">
                    <div className="size-[120px] rounded-[10px] border border-border flex items-center justify-center bg-white">
                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
                            <g clip-path="url(#clip0_269_868)">
                                <path d="M25 14.6973C20.9616 14.6973 17.6758 11.4114 17.6758 7.37305C17.6758 3.33467 20.9616 0.0488281 25 0.0488281C29.0384 0.0488281 32.3242 3.33467 32.3242 7.37305C32.3242 11.4114 29.0384 14.6973 25 14.6973Z" fill="#09A9F8"/>
                                <path d="M0.979134 41.8945C-1.03932 38.397 0.163704 33.9094 3.66136 31.8896C7.23079 29.8305 11.6773 31.1273 13.6663 34.5703C15.69 38.0732 14.4906 42.5505 10.9856 44.5753C7.47386 46.6004 3.0015 45.3952 0.979134 41.8945Z" fill="#09A9F8"/>
                                <path d="M39.0143 44.5753C35.5116 42.5518 34.3087 38.0752 36.3335 34.5703C38.3225 31.1274 42.7689 29.8304 46.3385 31.8896C49.836 33.9095 51.0392 38.397 49.0207 41.8946C47.0009 45.3908 42.531 46.6033 39.0143 44.5753Z" fill="#09A9F8"/>
                                <path d="M5.98545 26.9129L3.06152 26.7526C3.44199 19.8232 7.14425 13.4088 12.9635 9.59216L14.5714 12.0412C9.52599 15.3501 6.31729 20.9104 5.98545 26.9129Z" fill="#09A9F8"/>
                                <path d="M44.0142 26.9128C43.6823 20.9103 40.4736 15.35 35.4282 12.0412L37.0361 9.59216C42.8555 13.4088 46.5576 19.8232 46.9381 26.7526L44.0142 26.9128Z" fill="#09A9F8"/>
                                <path d="M25.0001 49.9512C21.5153 49.9512 18.1837 49.1587 15.0952 47.598L16.417 44.983C21.7671 47.6896 28.233 47.6896 33.5831 44.983L34.9049 47.598C31.8165 49.1587 28.4849 49.9512 25.0001 49.9512Z" fill="#09A9F8"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_269_868">
                                <rect width="50" height="50" fill="white"/>
                                </clipPath>
                            </defs>
                            </svg>
                    </div>
                    <div className="max-w-[350px] mt-[30px]">
                        <h4 className='text-xl font-bold text-secondary font-lato text-center'>Creating Lifelong Partnerships</h4>
                        <p className='text-sm text-muted-foreground font-lato mt-3 text-center'>Fostering trust and strong relationships for long-term success in real estate.</p>
                    </div>
                </div>
                <div className="flex flex-col items-center">
                    <div className="size-[120px] rounded-[10px] border border-border flex items-center justify-center bg-white">
                        <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none">
                        <path d="M39.6353 15.6985C39.2054 15.2686 39.2054 14.5716 39.6353 14.1418L44.505 9.272C44.9349 8.84211 45.6319 8.84211 46.0618 9.272C46.4917 9.70188 46.4917 10.3989 46.0618 10.8287L41.192 15.6985C40.7621 16.1284 40.0652 16.1284 39.6353 15.6985Z" fill="#09A9F8"/>
                        <path d="M5.34954 22.2744C4.91966 22.7042 4.91966 23.4012 5.34954 23.8311C5.77942 24.261 6.47639 24.261 6.90628 23.8311L19.8382 10.8992C20.2681 10.4693 20.2681 9.77235 19.8382 9.34247C19.4083 8.91259 18.7113 8.91259 18.2814 9.34247L5.34954 22.2744Z" fill="#09A9F8"/>
                        <path d="M5.45164 13.4546C5.02176 13.8845 5.02176 14.5815 5.45164 15.0114C5.88153 15.4412 6.5785 15.4412 7.00838 15.0114L11.1063 10.9134C11.5362 10.4835 11.5362 9.78656 11.1063 9.35668C10.6764 8.9268 9.97946 8.9268 9.54958 9.35668L5.45164 13.4546Z" fill="#09A9F8"/>
                        <path d="M5.32241 32.5757C4.89253 32.1459 4.89253 31.4489 5.32241 31.019L26.9282 9.41317C27.3581 8.98329 28.0551 8.98329 28.485 9.41317C28.9149 9.84306 28.9149 10.54 28.485 10.9699L6.87915 32.5757C6.44927 33.0056 5.75229 33.0056 5.32241 32.5757Z" fill="#09A9F8"/>
                        <path d="M33.0723 11.9874C32.6424 12.4173 32.6424 13.1143 33.0723 13.5441C33.5021 13.974 34.1991 13.974 34.629 13.5441L37.264 10.9091C37.6939 10.4792 37.6939 9.78224 37.264 9.35236C36.8341 8.92248 36.1372 8.92248 35.7073 9.35236L33.0723 11.9874Z" fill="#09A9F8"/>
                        <path d="M5.35676 41.2595C4.92688 40.8296 4.92688 40.1327 5.35676 39.7028L16.016 29.0435C16.4459 28.6136 17.1429 28.6136 17.5728 29.0435C18.0027 29.4734 18.0027 30.1704 17.5728 30.6002L6.9135 41.2595C6.48362 41.6894 5.78665 41.6894 5.35676 41.2595Z" fill="#09A9F8"/>
                        <path d="M5.33057 48.4466C4.90069 48.8765 4.90069 49.5734 5.33057 50.0033C5.76045 50.4332 6.45743 50.4332 6.88731 50.0033L19.2665 37.6241C19.6964 37.1943 19.6964 36.4973 19.2665 36.0674C18.8366 35.6375 18.1396 35.6375 17.7097 36.0674L5.33057 48.4466Z" fill="#09A9F8"/>
                        <path d="M42.4521 20.0425C42.0222 20.4724 42.0222 21.1694 42.4521 21.5992C42.882 22.0291 43.5789 22.0291 44.0088 21.5992L54.4722 11.1358C54.9021 10.706 54.9021 10.009 54.4722 9.5791C54.0423 9.14922 53.3454 9.14922 52.9155 9.5791L42.4521 20.0425Z" fill="#09A9F8"/>
                        <path d="M42.4009 30.3685C41.971 29.9386 41.971 29.2416 42.4009 28.8117L52.9538 18.2589C53.3836 17.829 54.0806 17.829 54.5105 18.2589C54.9404 18.6888 54.9404 19.3858 54.5105 19.8156L43.9577 30.3685C43.5278 30.7984 42.8308 30.7984 42.4009 30.3685Z" fill="#09A9F8"/>
                        <path d="M43.2268 36.7036C42.7969 37.1335 42.7969 37.8304 43.2268 38.2603C43.6567 38.6902 44.3537 38.6902 44.7835 38.2603L54.5309 28.5129C54.9608 28.083 54.9608 27.3861 54.5309 26.9562C54.1011 26.5263 53.4041 26.5263 52.9742 26.9562L43.2268 36.7036Z" fill="#09A9F8"/>
                        <path d="M45.97 44.235C45.5401 43.8051 45.5401 43.1081 45.97 42.6782L53.1208 35.5274C53.5507 35.0975 54.2477 35.0975 54.6776 35.5274C55.1075 35.9573 55.1075 36.6542 54.6776 37.0841L47.5267 44.235C47.0969 44.6649 46.3999 44.6649 45.97 44.235Z" fill="#09A9F8"/>
                        <path d="M48.1747 48.5676C47.7448 48.9975 47.7448 49.6945 48.1747 50.1244C48.6046 50.5542 49.3016 50.5542 49.7315 50.1244L54.5619 45.294C54.9918 44.8641 54.9918 44.1671 54.5619 43.7372C54.132 43.3073 53.435 43.3073 53.0051 43.7372L48.1747 48.5676Z" fill="#09A9F8"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M23.5526 19.2592C25.2832 17.5285 27.6305 16.5562 30.0781 16.5562C32.5257 16.5562 34.873 17.5285 36.6036 19.2592C38.3343 20.9899 39.3066 23.3372 39.3066 25.7847C39.3066 28.2323 38.3343 30.5796 36.6036 32.3103C34.873 34.041 32.5257 35.0132 30.0781 35.0132C27.6305 35.0132 25.2832 34.041 23.5526 32.3103C21.8219 30.5796 20.8496 28.2323 20.8496 25.7847C20.8496 23.3372 21.8219 20.9899 23.5526 19.2592ZM30.0781 19.8586C28.5064 19.8586 26.999 20.4829 25.8877 21.5943C24.7763 22.7057 24.1519 24.213 24.1519 25.7847C24.1519 27.3564 24.7763 28.8638 25.8877 29.9752C26.999 31.0865 28.5064 31.7109 30.0781 31.7109C31.6498 31.7109 33.1572 31.0865 34.2685 29.9752C35.3799 28.8638 36.0043 27.3564 36.0043 25.7847C36.0043 24.213 35.3799 22.7057 34.2685 21.5943C33.1572 20.4829 31.6498 19.8586 30.0781 19.8586Z" fill="#09A9F8"/>
                        <path d="M22.6502 43.0506C24.6202 41.0806 27.2921 39.9739 30.0781 39.9739C32.8641 39.9739 35.536 41.0806 37.506 43.0506C39.2549 44.7995 40.3235 47.1017 40.5413 49.5457C40.6222 50.454 41.4242 51.1247 42.3325 51.0438C43.2408 50.9628 43.9115 50.1609 43.8306 49.2525C43.5443 46.0401 42.1399 43.0143 39.8411 40.7155C37.2518 38.1262 33.74 36.6715 30.0781 36.6715C26.4163 36.6715 22.9044 38.1262 20.3151 40.7155C18.0164 43.0143 16.6119 46.0401 16.3257 49.2525C16.2447 50.1609 16.9155 50.9628 17.8238 51.0438C18.7321 51.1247 19.534 50.454 19.615 49.5457C19.8328 47.1017 20.9013 44.7995 22.6502 43.0506Z" fill="#09A9F8"/>
                        </svg>
                    </div>
                    <div className="max-w-[350px] mt-[30px]">
                        <h4 className='text-xl font-bold text-secondary font-lato text-center'>Creating Lifelong Partnerships</h4>
                        <p className='text-sm text-muted-foreground font-lato mt-3 text-center'>Fostering trust and strong relationships for long-term success in real estate.</p>
                    </div>
                </div>
                <div className="flex flex-col items-center">
                    <div className="size-[120px] rounded-[10px] border border-border flex items-center justify-center bg-white">
                       <svg xmlns="http://www.w3.org/2000/svg" width="43" height="43" viewBox="0 0 43 43" fill="none">
                        <path d="M20.9872 28.1672L14.8333 22.0133M20.9872 28.1672C23.8525 27.0774 26.6013 25.703 29.1923 24.0646M20.9872 28.1672V38.4236C20.9872 38.4236 27.2026 37.2954 29.1923 34.321C31.4077 30.9979 29.1923 24.0646 29.1923 24.0646M14.8333 22.0133C15.9249 19.1814 17.2994 16.4668 18.9359 13.9108C21.326 10.0892 24.6541 6.94266 28.6036 4.77044C32.5531 2.59822 36.9926 1.47255 41.5 1.50051C41.5 7.08 39.9 16.8851 29.1923 24.0646M14.8333 22.0133H4.57692C4.57692 22.0133 5.70513 15.7979 8.67949 13.8082C12.0026 11.5928 18.9359 13.8082 18.9359 13.8082M5.60256 31.2441C2.52564 33.8287 1.5 41.5005 1.5 41.5005C1.5 41.5005 9.1718 40.4749 11.7564 37.3979C13.2128 35.6749 13.1923 33.0287 11.5718 31.4287C10.7745 30.6677 9.72419 30.228 8.62252 30.1939C7.52084 30.1598 6.44539 30.5338 5.60256 31.2441Z" stroke="#09A9F8" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    <div className="max-w-[350px] mt-[30px]">
                        <h4 className='text-xl font-bold text-secondary font-lato text-center'>Creating Lifelong Partnerships</h4>
                        <p className='text-sm text-muted-foreground font-lato mt-3 text-center'>Fostering trust and strong relationships for long-term success in real estate.</p>
                    </div>
                </div>
            </div>
        </div>

        <div className="py-20 grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-1 gap-10 lg:gap-16">

            <div className="col-span-1">
                <div className="w-full h-[420px] lg:h-[600px] relative">
                    <Image src='/about-us-3.png' alt='About Us' fill className='object-start size-full' />
                </div>
            </div>

            <div className="col-span-1 flex items-center justify-center">
                <div className="p-7 lg:p-12 border border-border rounded-[16px] bg-white h-fit">
                    <h2 className="text-3xl md:text-4xl font-semibold text-secondary tracking-tight font-lato">
                    Our Mission
                    </h2>
                    <p className='text-sm lg:text-base text-muted-foreground font-lato mt-3'>
                       At RealPro, our mission is to be a trusted partner in every real estate journey. We are committed to providing expert guidance and optimal solutions to help clients realize their dreams of an ideal home or a rewarding investment opportunity.
                    </p>
                    <p className='text-sm lg:text-base text-muted-foreground font-lato mt-3'>
                        We prioritize our clients at every step and strive to create sustainable value for both the community and the real estate market. RealPro is not just about building properties – we build trust, peace of mind, and a prosperous future for all our clients.
                    </p>
                    <Button 
                        className="mt-5 w-fit bg-primary hover:bg-primary/90 text-white h-12 lg:h-16 px-5 lg:px-10 rounded-[6px] text-sm lg:text-lg font-semibold group transition-all shadow-lg shadow-primary/20 font-lato"
                        >
                        Work With Us
                        <HugeiconsIcon icon={ArrowRight01Icon} className="ml-2 size-4 lg:size-6 transition-transform group-hover:translate-x-1" />
                    </Button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default page