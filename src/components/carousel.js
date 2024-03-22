import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from 'swiper/modules';
import SwiperCore from 'swiper';
import 'swiper/css';
import 'swiper/css/autoplay';
import projectsData from '../utils/project.json';

SwiperCore.use([Autoplay]);

const Slider = () => {
    return (
        <>
            <div className='swiper'>
                <h2 className='projects'>
                    Projects
                </h2>
                <Swiper
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: true,
                    }}
                    speed={500}
                    loop={true}
                    spaceBetween={50}
                    breakpoints={{
                        320: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 2,
                        },
                    }}
                >
                    {projectsData.map((project) => (
                        <SwiperSlide key={project.id} className='sp'>
                            <div className='back'>
                                <div>
                                    <h3>
                                        {project.title}
                                    </h3>
                                    <a target='_blank' rel="noopener noreferrer" href={project.url}>
                                        Visit Site
                                    </a>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </>
    );
}

export default Slider;
