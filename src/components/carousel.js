import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css/autoplay"

// Import Swiper styles
import 'swiper/css';

const Slider = () => {
    return (
        <>
            <div className='swiper'>
                <h2 className='projects'>
                    Projects
                </h2>
                <Swiper autoplay={true} slidesPerView={2} loop={true} spaceBetween={50} >
                    <div className='n'>
                        <SwiperSlide className='sp'>
                            <div className='back'>
                                <div>
                                    <h3>
                                        Project 1
                                    </h3>
                                    <a target='_blank' href='https://pizza-murex-seven.vercel.app/'>
                                        Visit Site
                                    </a >
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='sp'>
                            <div className='back'>
                                <div>
                                    <h3>
                                        Project 2
                                    </h3>
                                    <a target='_blank' href='https://calculator-ruby-theta.vercel.app/'>
                                        Visit Site
                                    </a>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='sp'>
                            <div className='back'>
                                <div>
                                    <h3>
                                        Project 3
                                    </h3>
                                    <a target='_blank' href='https://to-do-app-eight-kohl.vercel.app/'>
                                        Visit Site
                                    </a>
                                </div>
                            </div>
                        </SwiperSlide>
                    </div>
                </Swiper>
            </div>
        </>
    );
}

export default Slider