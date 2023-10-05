/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable react/no-unknown-property */
import { BiSearchAlt2 } from 'react-icons/bi';
import { FaSearch, FaQuoteRight } from 'react-icons/fa';
import { GoHeart } from 'react-icons/go';
import { GiBlackBook } from 'react-icons/gi';
import { FaPersonCircleQuestion } from 'react-icons/fa6';
import { PiGraduationCapFill } from 'react-icons/pi';
import Course from './components/Course.jsx';
import Lnrearth from './components/lnr-earth.svg'
import { useRef, useState } from 'react';
import OwlCarousel from 'react-owl-carousel';
// import ReactOwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

function App() {

  // const [active, setActive] = useState(0);
  const RefCarousel = useRef(null);

  return (
    <div className='overflow-auto'>

      <div className='h-screen w-screen bg-[url("https://masterstudy.stylemixthemes.com/tech-elementor/wp-content/uploads/sites/39/2023/05/01.jpg")]  bg-cover '>
        <div className="h-full w-full bg-[#042D8982] flex flex-col items-center justify-center gap-y-[25px] relative" >
          <div className='absolute top-0 px-[160px] p-[20px] border-b-[1px] border-[#7985a080] w-full text-white flex justify-between items-center'>
            <img src='https://masterstudy.stylemixthemes.com/tech-elementor/wp-content/uploads/sites/39/2023/06/logo.svg' />
            <div className='text-[14px] font-bold flex items-center transition-[.35s] duration-[.35s]'>
              <h2 className='hover:text-[#00c691] px-[14px] cursor-pointer'>HOME</h2>
              <h2 className='hover:text-[#00c691] px-[14px] cursor-pointer'>COURSES</h2>
              <h2 className='hover:text-[#00c691] px-[14px] cursor-pointer'>ADD COURSES</h2>
              <h2 className='hover:text-[#00c691] px-[14px] cursor-pointer'>DEMOS</h2>
              <h2 className='hover:text-[#00c691] px-[14px] cursor-pointer'>PAGES</h2>
              <div className='w-0 h-[35px] border-r-[1px] border-[#ffffff60]' />
              <div className='hover:bg-[#00c691] rounded-full p-[13px] flex ml-[14px] transition-all duration-[.5s] '>
                <GoHeart className=' text-[20px] text-white cursor-pointer font-bold mt-[2px] ' />
              </div>
              <h2 className='hover:text-[#00c691] px-[14px] cursor-pointer'>SIGN UP</h2>
              <h2 className=' bg-gradient-to-r from-[#00B282] to-[#00c691] from-50% to-50% bg-[length:300%_100%] bg-[right_bottom] hover:bg-[left_bottom] transition-[all_0.55s] duration-[.5s] rounded-[5px] h-[40px] px-[20px] cursor-pointer items-center justify-center flex'>LOG IN</h2>
              <div className=' rounded-full p-[14px] flex mx-[14px] bg-gradient-to-r to-transparent from-[#00c691] from-50% to-50% bg-[length:200%_100%] bg-[right_bottom] hover:bg-[left_bottom] transition-all duration-[.6s] cursor-pointer '>
                <FaSearch className=' text-[15px] text-white cursor-pointer ' />
              </div>
            </div>
          </div>

          <h1 className="text-[48px] text-[#fff] font-bold w-[800px] text-center">Learn your way with MasterStudy to Programming</h1>
          <h4 className="text-[24px] text-[#fff] font-medium" >More than 2500 Online Courses</h4>
          <div className="w-[480px] h-[60px] flex bg-white rounded-[8px] items-center">
            <input className="w-[440px] h-[60px] p-[20px]  bg-white rounded-[8px] border-0 outline-none " placeholder="Search Courses..." />
            <BiSearchAlt2 className='text-[26px] text-[#808c98] hover:text-[#0693e3] cursor-pointer' />
          </div>
        </div>
      </div>

      <div  className='h-[480px] w-screen flex flex-col items-center justify-center gap-y-[30px]' >
        <h1 className='text-[36px] font-bold text-[#273044]'>How it works?</h1>

        <div className='flex gap-x-[30px] items-center justify-center text-center'>
          <div className='w-[360px] h-[265px] flex flex-col items-center justify-center gap-y-[20px]'>
            <img src='https://masterstudy.stylemixthemes.com/tech-elementor/wp-content/uploads/sites/39/2021/02/25-layers.png' />
            <h2 className='text-[#273044] text-[21px] leading-[34px] font-[700] '>Sign up</h2>
            <p className='text-[15px] leading-[27px] font-[400] text-[rgba(39,48,68,0.7)]'>Our services and collections adhere to cutting-edge solutions in the design world.</p>
          </div>

          <div className='w-[360px] h-[265px] flex flex-col items-center justify-center gap-y-[20px]'>
            <img src='https://masterstudy.stylemixthemes.com/tech-elementor/wp-content/uploads/sites/39/2021/02/21-layers-123x123-1.png' />
            <h2 className='text-[#273044] text-[21px] leading-[34px] font-[700] '>Select course</h2>
            <p className='text-[15px] leading-[27px] font-[400] text-[rgba(39,48,68,0.7)]'>We have everything for effective learning and delivery of assignments by students.</p>
          </div>

          <div className='w-[360px] h-[265px] flex flex-col items-center justify-center gap-y-[20px]'>
            <img src='https://masterstudy.stylemixthemes.com/tech-elementor/wp-content/uploads/sites/39/2021/02/28-layers.png' />
            <h2 className='text-[#273044] text-[21px] leading-[34px] font-[700] '>Start Learning</h2>
            <p className='text-[15px] leading-[27px] font-[400] text-[rgba(39,48,68,0.7)]'>After completing the course, you will receive a certificate confirming your knowledge.</p>
          </div>
        </div>
      </div>

      <div className=' w-full bg-[#EFF4FA] p-[40px] px-[60px] flex flex-col gap-y-[25px]' >

        <h1 className='text-[36px] font-bold text-[#001931] leading-[58px] px-[15px]'>Top Courses</h1>
        
        <div className='overflow-auto flex snap-x mx-[-60px]'>
          <button className='shrink-0 w-[60px] h-full snap-start text-transparent cursor-default' >a</button>
          <Course 
            image={'https://masterstudy.stylemixthemes.com/tech-elementor/wp-content/uploads/sites/39/2021/02/Python-300x225.jpg'}
            topic={' Python '}
            heading={'Learn Python Programming Masterclass'}
            star={'5.0'}
            price={'Free'}
          />
          <Course 
            image={'https://masterstudy.stylemixthemes.com/tech-elementor/wp-content/uploads/sites/39/2023/03/Group-8943-300x225.png'}
            topic={' Environmental Sciences '}
            heading={'Basics of MasterStudy'}
            star={'5.0'}
            price={'$64.99'}
          />
          <Course 
            image={'https://masterstudy.stylemixthemes.com/tech-elementor/wp-content/uploads/sites/39/2021/02/Beginers-300x225.jpg'}
            topic={' Docker '}
            heading={'Coding Beginners. Get Started With Web'}
            star={'4.5'}
            price={'$19.99'}
          />
          <Course 
            image={'https://masterstudy.stylemixthemes.com/tech-elementor/wp-content/uploads/sites/39/2021/02/Graphic-300x225.jpg'}
            topic={' React Native '}
            heading={'Virtual Reality (VR) Development With Unity'}
            star={'4.0'}
            price={'$75.99'}
          />
          <Course 
            image={'https://masterstudy.stylemixthemes.com/tech-elementor/wp-content/uploads/sites/39/2021/12/Robotic-300x225.jpg'}
            topic={' C++ '}
            heading={'Robotic Drives & Physics. Learn by building'}
            star={'4.0'}
            price={'$9.99'}
          />
          <Course 
            image={'https://masterstudy.stylemixthemes.com/tech-elementor/wp-content/uploads/sites/39/2021/02/Python-300x225.jpg'}
            topic={' Python '}
            heading={'Learn Python Programming Masterclass'}
            star={'5.0'}
            price={'Free'}
          />
          <Course 
            image={'https://masterstudy.stylemixthemes.com/tech-elementor/wp-content/uploads/sites/39/2021/02/Python-300x225.jpg'}
            topic={' Python '}
            heading={'Learn Python Programming Masterclass'}
            star={'5.0'}
            price={'Free'}
          />
          <Course 
            image={'https://masterstudy.stylemixthemes.com/tech-elementor/wp-content/uploads/sites/39/2023/03/Group-8943-300x225.png'}
            topic={' Environmental Sciences '}
            heading={'Basics of MasterStudy'}
            star={'5.0'}
            price={'$64.99'}
          />
          <Course 
            image={'https://masterstudy.stylemixthemes.com/tech-elementor/wp-content/uploads/sites/39/2021/02/Beginers-300x225.jpg'}
            topic={' Docker '}
            heading={'Coding Beginners. Get Started With Web'}
            star={'4.5'}
            price={'$19.99'}
          />
          <button className='shrink-0 w-[60px] h-full snap-start text-transparent cursor-default' >a</button>
        </div>
      </div>

      <div className='h-[518px] w-full flex flex-col justify-center items-center gap-y-[15px]'>

        <div className='flex flex-col gap-y-[20px] text-center'>
          <h1 className='text-[36px] leading-[46px] text-[#273044] font-[700]'>What will you learn</h1>
          <p className='w-[580px] text-center leading-[30px] text-[16px] text-[#273044] font-[400]'>Art party meggings subway tile, selfies helvetica tofu before they sold out slow-carb chillwave humblebrag vape heirloom meh shaman.</p>
        </div>

        <div className='flex items-center justify-center w-full'>

          <div className='p-[15px] hover:translate-y-[-10px] transition-[0.3s_ease] duration-[0.3s]'>
            <div className='shrink-0 w-[160px] h-[170px] p-[15px] py-[25px] flex flex-col justify-between items-center rounded-[20px] shadow-[0_5px_20px_rgba(0,0,0,.1)] cursor-pointer '>
              <img src='https://masterstudy.stylemixthemes.com/tech-elementor/wp-content/uploads/sites/39/2023/05/angular.png' />
              <h6 className='text-[15px] font-[700]'>Angular</h6>
            </div>
          </div>

          <div className='p-[15px] hover:translate-y-[-10px] transition-[0.3s_ease] duration-[0.3s]'>
            <div className='shrink-0 w-[160px] h-[170px] p-[15px] py-[25px] flex flex-col justify-between items-center rounded-[20px] shadow-[0_5px_20px_rgba(0,0,0,.1)] cursor-pointer '>
              <img src='https://masterstudy.stylemixthemes.com/tech-elementor/wp-content/uploads/sites/39/2023/05/docker.png' />
              <h6 className='text-[15px] font-[700]'>Docker</h6>
            </div>
          </div>

          <div className='p-[15px] hover:translate-y-[-10px] transition-[0.3s_ease] duration-[0.3s]'>
            <div className='shrink-0 w-[160px] h-[170px] p-[15px] py-[25px] flex flex-col justify-between items-center rounded-[20px] shadow-[0_5px_20px_rgba(0,0,0,.1)] cursor-pointer '>
              <img src='https://masterstudy.stylemixthemes.com/tech-elementor/wp-content/uploads/sites/39/2023/05/python.png' />
              <h6 className='text-[15px] font-[700]'>Python</h6>
            </div>
          </div>

          <div className='p-[15px] hover:translate-y-[-10px] transition-[0.3s_ease] duration-[0.3s]'>
            <div className='shrink-0 w-[160px] h-[170px] p-[15px] py-[25px] flex flex-col justify-between items-center rounded-[20px] shadow-[0_5px_20px_rgba(0,0,0,.1)] cursor-pointer '>
              <img src='https://masterstudy.stylemixthemes.com/tech-elementor/wp-content/uploads/sites/39/2023/05/swift.png' />
              <h6 className='text-[15px] font-[700]'>Swift</h6>
            </div>
          </div>

          <div className='p-[15px] hover:translate-y-[-10px] transition-[0.3s_ease] duration-[0.3s]'>
            <div className='shrink-0 w-[160px] h-[170px] p-[15px] py-[25px] flex flex-col justify-between items-center rounded-[20px] shadow-[0_5px_20px_rgba(0,0,0,.1)] cursor-pointer '>
              <img src='https://masterstudy.stylemixthemes.com/tech-elementor/wp-content/uploads/sites/39/2023/05/nodejs.png' />
              <h6 className='text-[15px] font-[700]'>Node JS</h6>
            </div>
          </div>

          <div className='p-[15px] hover:translate-y-[-10px] transition-[0.3s_ease] duration-[0.3s]'>
            <div className='shrink-0 w-[160px] h-[170px] p-[15px] py-[25px] flex flex-col justify-between items-center rounded-[20px] shadow-[0_5px_20px_rgba(0,0,0,.1)] cursor-pointer '>
              <img src='https://masterstudy.stylemixthemes.com/tech-elementor/wp-content/uploads/sites/39/2023/05/reactjs.png' />
              <h6 className='text-[15px] font-[700]'>React Native</h6>
            </div>
          </div>

        </div>

      </div>

      <div className=' w-full bg-[#EFF4FA] p-[40px] px-[60px] flex flex-col gap-y-[25px]' >

        <h1 className='text-[36px] font-bold text-[#001931] leading-[58px] px-[15px]'>Recent Courses</h1>
        
        <div className='overflow-auto flex snap-x mx-[-60px]'>
          <button className='shrink-0 w-[60px] h-full snap-start text-transparent cursor-default' >a</button>
          <Course 
            image={'https://masterstudy.stylemixthemes.com/tech-elementor/wp-content/uploads/sites/39/2021/02/Python-300x225.jpg'}
            topic={' Python '}
            heading={'Learn Python Programming Masterclass'}
            star={'5.0'}
            price={'Free'}
          />
          <Course 
            image={'https://masterstudy.stylemixthemes.com/tech-elementor/wp-content/uploads/sites/39/2023/03/Group-8943-300x225.png'}
            topic={' Environmental Sciences '}
            heading={'Basics of MasterStudy'}
            star={'5.0'}
            price={'$64.99'}
          />
          <Course 
            image={'https://masterstudy.stylemixthemes.com/tech-elementor/wp-content/uploads/sites/39/2021/02/Beginers-300x225.jpg'}
            topic={' Docker '}
            heading={'Coding Beginners. Get Started With Web'}
            star={'4.5'}
            price={'$19.99'}
          />
          <Course 
            image={'https://masterstudy.stylemixthemes.com/tech-elementor/wp-content/uploads/sites/39/2021/02/Graphic-300x225.jpg'}
            topic={' React Native '}
            heading={'Virtual Reality (VR) Development With Unity'}
            star={'4.0'}
            price={'$75.99'}
          />
          <Course 
            image={'https://masterstudy.stylemixthemes.com/tech-elementor/wp-content/uploads/sites/39/2021/12/Robotic-300x225.jpg'}
            topic={' C++ '}
            heading={'Robotic Drives & Physics. Learn by building'}
            star={'4.0'}
            price={'$9.99'}
          />
          <Course 
            image={'https://masterstudy.stylemixthemes.com/tech-elementor/wp-content/uploads/sites/39/2021/02/Python-300x225.jpg'}
            topic={' Python '}
            heading={'Learn Python Programming Masterclass'}
            star={'5.0'}
            price={'Free'}
          />
          <Course 
            image={'https://masterstudy.stylemixthemes.com/tech-elementor/wp-content/uploads/sites/39/2021/02/Python-300x225.jpg'}
            topic={' Python '}
            heading={'Learn Python Programming Masterclass'}
            star={'5.0'}
            price={'Free'}
          />
          <Course 
            image={'https://masterstudy.stylemixthemes.com/tech-elementor/wp-content/uploads/sites/39/2023/03/Group-8943-300x225.png'}
            topic={' Environmental Sciences '}
            heading={'Basics of MasterStudy'}
            star={'5.0'}
            price={'$64.99'}
          />
          <Course 
            image={'https://masterstudy.stylemixthemes.com/tech-elementor/wp-content/uploads/sites/39/2021/02/Beginers-300x225.jpg'}
            topic={' Docker '}
            heading={'Coding Beginners. Get Started With Web'}
            star={'4.5'}
            price={'$19.99'}
          />
          <button className='shrink-0 w-[60px] h-full snap-start text-transparent cursor-default' >a</button>
        </div>
      </div>

      <div className='mt-[75px] mb-[75px] flex gap-x-[30px] px-[30px]'>

        <div className='w-[50%]'>
          <div className='py-[75px] pb-[58px] flex flex-col items-center justify-center bg-[#042d89] rounded-[15px] text-white text-center'>

            <h1 className='font-[400] text-[40px] leading-[46px] mb-[20px] '>School Achievements</h1>
            <p className='font-[400] w-[465px] text-[18px] leading-[24px] mb-[30px]'>Nullam leo ligula, dictum id eleifend interdum, Malesuada vulputate magna</p>

            <div className='mt-[45px] mb-[10px] grid grid-cols-2 gap-x-[120px] gap-y-[80px] ' > 

              <div className='flex gap-x-[20px]'>
                <div className='w-[77px] h-[77px] flex items-center justify-center rounded-[15px] bg-[#00c691]'>
                  <img src={Lnrearth} className='w-[50px] h-[50px] text-white' />
                </div>
                <div>
                  <h1 className='font-[700] text-[36px] leading-[46px]'>94,532</h1>
                  <p className='font-[400] text-[14px] leading-[22px] opacity-60 hover:opacity-100 transition-[0.3s_ease] duration-[0.3s]'>Foreign followers</p>
                </div>
              </div>
              
              <div className='flex gap-x-[20px]'>
                <div className='w-[77px] h-[77px] flex items-center justify-center rounded-[15px] bg-[#00c691]'>
                  <GiBlackBook className='w-[50px] h-[50px] text-white' />
                </div>
                <div>
                  <h1 className='font-[700] text-[36px] leading-[46px]'>11,233</h1>
                  <p className='font-[400] text-[14px] leading-[22px] opacity-60 hover:opacity-100 transition-[0.3s_ease] duration-[0.3s]'>Classes complete</p>
                </div>
              </div>
              
              <div className='flex gap-x-[20px]'>
                <div className='w-[77px] h-[77px] flex items-center justify-center rounded-[15px] bg-[#00c691]'>
                  <FaPersonCircleQuestion className='w-[50px] h-[50px] text-white' />
                </div>
                <div>
                  <h1 className='font-[700] text-[36px] leading-[46px]'>82,673</h1>
                  <p className='font-[400] text-[14px] leading-[22px] opacity-60 hover:opacity-100 transition-[0.3s_ease] duration-[0.3s]'>Students enrolled</p>
                </div>
              </div>
              
              <div className='flex gap-x-[20px]'>
                <div className='w-[77px] h-[77px] flex items-center justify-center rounded-[15px] bg-[#00c691]'>
                  <PiGraduationCapFill className='w-[50px] h-[50px] text-white' />
                </div>
                <div>
                  <h1 className='font-[700] text-[36px] leading-[46px]'>37,497</h1>
                  <p className='font-[400] text-[14px] leading-[22px] opacity-60 hover:opacity-100 transition-[0.3s_ease] duration-[0.3s]'>Certified teachers</p>
                </div>
              </div>

            </div>
          </div>
        </div>

        <div className='w-[50%]'>
          <div className='pt-[75px] pb-[60px] flex flex-col items-center justify-center bg-[#eff4fa] rounded-[15px] text-center text-[#273044] '>
            <h1 className='text-[40px] font-[700] leading-[46px]'>Testimonials</h1>
            <FaQuoteRight className='text-[40px] mt-[30px] text-[#00c691]' />  
            <div className='mt-[20px] w-full'>
              <OwlCarousel className='owl-theme' items={1} dots={true} ref={RefCarousel}>
                <div className='item flex flex-col justify-center items-center'>
                  <p className='mb-[20px] w-[575px] text-[24px] leading-[36px] font-[400]'>It is no exaggeration to say this MasterStudy experience was transformative–both professionally and personally. This workshop will long remain a high point of my life.</p>
                  <h4 className='font-[700] leading-[34px] text-[28px]'>Anna Doe</h4>
                  <p className='font-[400] leading-[22px] text-[14px]'>Founder, Great Wall Ltd.</p>
                </div>
                <div className='item flex flex-col justify-center items-center'>
                  <p className='mb-[20px] w-[575px] text-[24px] leading-[36px] font-[400]'>This is due to their excellent service, competitive pricing and customer support. That’s becoming so distant and digital, it’s throughly refreshing to get such a personal touch.</p>
                  <h4 className='font-[700] leading-[34px] text-[28px]'>Nataly Lee</h4>
                  <p className='font-[400] leading-[22px] text-[14px]'>General Developer, Stylemix Themes</p>
                </div>
                <div className='item flex flex-col justify-center items-center'>
                  <p className='mb-[20px] w-[575px] text-[24px] leading-[36px] font-[400]'>The response to your MasterStudy has been really overwhelming! Those who participated in the workshop are spreading the word here on campus and the “buzz” is on.</p>
                  <h4 className='font-[700] leading-[34px] text-[28px]'>Linda Green</h4>
                  <p className='font-[400] leading-[22px] text-[14px]'>SEO, Froust Inc</p>
                </div>
                <div className='item flex flex-col justify-center items-center'>
                  <p className='mb-[20px] w-[575px] text-[24px] leading-[36px] font-[400]'>It is no exaggeration to say this MasterStudy experience was transformative–both professionally and personally. This workshop will long remain a high point of my life.</p>
                  <h4 className='font-[700] leading-[34px] text-[28px]'>Brook Key</h4>
                  <p className='font-[400] leading-[22px] text-[14px]'>Product Manager, Apple Inc</p>
                </div>

              </OwlCarousel>
              
            </div>

            {/* <div className='flex gap-x-[30px] mt-[35px] items-center'>

              <div className={`  ${ (active==1) && 'border-[2px] border-[#00c691] p-[3px] rounded-full scale-[120%] m-[-5px]'} transition-all duration-[0.3s]`} onClick={()=>{setActive(1); setTimeout(()=>RefCarousel.current.to(0,0.8), 500);}}>
                <img src='https://masterstudy.stylemixthemes.com/tech-elementor/wp-content/uploads/sites/39/elementor/thumbs/Fotolia_79069030_Subscription_Monthly_XXL-959x959-1-q5hbgvpysz2qb9zlwl09ouedr6kmvsr22ktqt2f7fc.jpg' className='h-[48px] w-[48px] rounded-full' />
              </div>

              <div className={`  ${ (active==2) && 'border-[2px] border-[#00c691] p-[3px] rounded-full scale-[120%] m-[-5px]'} transition-all duration-[0.3s]`} onClick={()=>{setActive(2); setTimeout(()=>RefCarousel.current.to(1,0.8), 500);}}>
                <img src='https://masterstudy.stylemixthemes.com/tech-elementor/wp-content/uploads/sites/39/elementor/thumbs/Fotolia_70423620_Subscription_Monthly_M-667x999-1-q5hbgwnszt40mvy8r3ew9c5uckg03huseph8acdt94.jpg' className='h-[48px] w-[48px] rounded-full' />
              </div>

              <div className={`  ${ (active==3) && 'border-[2px] border-[#00c691] p-[3px] rounded-full scale-[120%] m-[-5px]'} transition-all duration-[0.3s]`} onClick={()=>{setActive(3); setTimeout(()=>RefCarousel.current.to(2,0.8), 500);}}>
                <img src='https://masterstudy.stylemixthemes.com/tech-elementor/wp-content/uploads/sites/39/elementor/thumbs/Learning-Network-Webinars-for-Music-Teachers-1000x500-1-q5hbgyjhdh6la3vig485eborjc6qiw292ys78wb0wo.jpg' className='h-[48px] w-[48px] rounded-full' />
              </div>

              <div className={`  ${ (active==4) && 'border-[2px] border-[#00c691] p-[3px] rounded-full scale-[120%] m-[-5px]'} transition-all duration-[0.3s]`} onClick={()=>{setActive(4); setTimeout(()=>RefCarousel.current.to(3,0.8), 500);}}>
                <img src='https://masterstudy.stylemixthemes.com/tech-elementor/wp-content/uploads/sites/39/elementor/thumbs/dreamstime_xxl_14978071-999x999-1-998x998-1-q6qs7g9gijmsbho1h6sr2xsx48q0lp9t68471xc860.jpg' className='h-[48px] w-[48px] rounded-full' />
              </div>  

            </div> */}
          </div>
        </div>
      </div>

      <div className='pt-[20px] flex gap-x-[80px] justify-center'>
        <div className='relative'>
          <div className='bg-[#00c691] rounded-full h-[450px] w-[450px] absolute top-[30px] left-[40px] z-[-1]' />
          <img src='//masterstudy.stylemixthemes.com/tech-elementor/wp-content/uploads/sites/39/revslider/slider-1/Изображение_31.png' className=' shrink-0 h-[713px] w-[460px] ' />
        </div>
        <div>
          <h1 className='text-[46px] text-[#273044] leading-[57px] font-[700]'>Learning <span className='text-[#00c691]'>anytime</span><br/> from anywhere</h1>
          <p className='mt-[30px] w-[472px] text-[#273044] leading-[30px] text-[16px]'>Increase the mobility level with MasterStudy LMS App. Take your courses in your pocket and access them whenever you want without any limits. Make your learning more engaging and productive using modern LMS app. </p>
          <div className='mt-[30px] flex gap-x-[20px]'>
            <img src='//stylemixthemes.com/masterstudy/tech/wp-content/uploads/sites/21/2021/02/Изображение_23.png' className='h-[50px] w-[167px]'/>
            <img src='//stylemixthemes.com/masterstudy/tech/wp-content/uploads/sites/21/2021/02/Изображение_22.png' className='h-[50px] w-[167px]'/>
          </div>
        </div>
      </div>

      <div className='relative w-full h-[393px] flex justify-center items-center bg-cover mt-[-50px] z-10 bg-[url("https://masterstudy.stylemixthemes.com/tech-elementor/wp-content/uploads/sites/39/2023/05/group-1915x404.jpg")] '>
        <div className='p-[10px] text-white text-center flex flex-col items-center justify-center gap-y-[30px]'>
          <h2 className='w-[460px] text-[36px] leading-[46px] font-[700]'>It’s time to <span className='text-[#00c691]'>start</span> investing in yourself</h2>
          <p className='text-[18px] mt-[5px] font-[400] leading-[30px] w-[580px]'>Online courses open the opportunity for learning to almost anyone, regardless of their scheduling commitments.</p>
          <button className='bg-[#00c691] rounded-[5px] h-[55px] w-[186px] flex items-center justify-center text-[15px] font-[600]'>GET STARTED</button>
        </div>
      </div>

    </div>
  )
}

export default App
