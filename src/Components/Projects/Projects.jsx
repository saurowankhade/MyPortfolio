import ProjectCard from './ProjectCard'
import urjasolar from '../../assets/Projects/urjasolar.png';
import ezlnk from '../../assets/Projects/ezlnk.png';
import imageseeker from '../../assets/Projects/imageseeker.png';
import bonafide from '../../assets/Projects/bonafide.png';
import shreenathsolar from '../../assets/Projects/shreenathsolar.png';
import canvodark from '../../assets/Projects/canvodark.png';
import urjavahini from '../../assets/Projects/urjavahini.png';
import { useEffect, useMemo, useState } from 'react';

const Projects = () => {
  const [sortBy,setSortBy] = useState('All');
  const [projectShow,setProjectShow] = useState([]);
  
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const projectData = [
    {
      name:'UrjaSolar',
      liveLink:'https://urja-solar.vercel.app/',
      sourceLink:'https://github.com/saurowankhade/Solar-Magement-',
      img:urjasolar,
      shortExplain:'UrjaSolar is a web app designed for solar contractors to manage consumer data, track solar installations, and oversee materials. It enables efficient data management, employee verification, and progress tracking, while offering features like data export and reporting.',
      techologies:['React','TailwindCSS','Firebase'],
      platform:'Web'

    },
    {
      name:'EzLnk',
      liveLink:'https://ezlnk.vercel.app/',
      sourceLink:'https://github.com/saurowankhade/ezlnk',
      img:ezlnk,
      shortExplain:'Ezlnk is a URL shortening service that allows users to generate meaningful, short links for easier sharing. It enhances link management, tracking, and user convenience by converting long URLs into concise, memorable, and user-friendly links for better accessibility.',
      techologies:['React','TailwindCSS','Firebase'],
      platform:'Web'
    },
    {
      name:'ImageSeeker',
      liveLink:'http://image-seeker-three.vercel.app/',
      sourceLink:'https://github.com/saurowankhade/ImageSeeker',
      img:imageseeker,
      shortExplain:'ImageSeeker is a React app that allows users to search and display images from an API. It provides an interactive interface for discovering images based on search queries, offering a seamless experience for browsing and viewing diverse visual content.',
      techologies:['React','API'],
      platform:'Web'
    },
    {
      name:'BonafideApp',
      liveLink:'https://github.com/saurowankhade/BonafiteApplicationSystem/',
      sourceLink:'https://github.com/saurowankhade/BonafiteApplicationSystem/',
      img:bonafide,
      shortExplain:'The Bonafide Application System allows students to apply for a certificate by filling out a form. Admins verify the request, approve or reject it, and download the certificate. Rejected students receive an email notification about the decision.',
      techologies:['Java','Android','Firebase'],
      platform:'Mobile'
    },
    {
      name:'UrjVahini',
      liveLink:'https://github.com/saurowankhade/UrjaVahini/',
      sourceLink:'https://github.com/saurowankhade/UrjaVahini/',
      img:urjavahini,
      shortExplain:'UrjaVahini is a mobile app designed for electrical contractors to manage labor work and materials. It tracks project progress, facilitates communication, and allows data export. The app optimizes workflow by streamlining material management and labor task coordination efficiently.',
      techologies:['Java','Android','Firebase'],
      platform:'Mobile'
    },
    {
      name:'ShreenathSolar',
      liveLink:'https://shreenathsolar.vercel.app/',
      sourceLink:'https://github.com/saurowankhade/ShreenathSolar',
      img:shreenathsolar,
      shortExplain:'Shreenath Solar is a simple website designed for a freelance project, built using React and TailwindCSS. It showcases solar products and services, providing an intuitive user interface and responsive design, offering seamless navigation and a clean, professional layout.',
      techologies:['React','TailwindCSS'],
      platform:'Web'
    },
    {
      name:'CanvoDark',
      liveLink:'https://github.com/saurowankhade/ConvoDark',
      sourceLink:'https://github.com/saurowankhade/ConvoDark',
      img:canvodark,
      shortExplain:'CanvoDark is a Chrome extension that enables users to switch any website to dark mode with a single click. It enhances the browsing experience by reducing eye strain and offering a more comfortable, visually appealing interface in low-light environments.',
      techologies:['JavaScript','CSS'],
      platform:'Extension'
    },
  ]

  const filteredProjects = useMemo(() => {
    if (sortBy === 'All') {
      return projectData; // Return the original data when 'All' is selected
    }
    return projectData.filter((project) => project.platform === sortBy);
  }, [projectData, sortBy]);
  
  useEffect(() => {
    setProjectShow(filteredProjects);
  }, [filteredProjects]);

  return (
    <div  className='mt-12'>
          <h1 className="text-xl font-bold pb-2 mb-2">Projects</h1>
       
       <div  className='flex gap-1 md:gap-2 mb-4 justify-evenly overflow-hidden '>
        <p onClick={()=>{setSortBy('All')}} className={`flex gap-2 items-center px-4 cursor-pointer py-1 bg-black hover:border rounded-full ${sortBy === 'All' ? 'border' : ''}`}><svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.68023 6.67999C8.32023 6.67999 8.03223 6.39199 8.03223 6.03199V1.87999C8.03223 1.51999 8.32023 1.23199 8.68023 1.23199H12.9042C13.2642 1.23199 13.5522 1.51999 13.5522 1.87999V6.03199C13.5522 6.39199 13.2642 6.67999 12.9042 6.67999H8.68023Z" fill="white"/>
<path d="M10.5038 9.12801L8.03183 11.792C7.88783 11.936 7.88783 12.2 8.03183 12.344L10.5038 15.008C10.6718 15.176 10.9358 15.176 11.1038 15.008L13.5758 12.344C13.7198 12.2 13.7198 11.936 13.5758 11.792L11.1038 9.12801C10.9358 8.96001 10.6478 8.96001 10.5038 9.12801Z" fill="white"/>
<path d="M3.11212 14.768C4.64969 14.768 5.89613 13.5216 5.89613 11.984C5.89613 10.4465 4.64969 9.20001 3.11212 9.20001C1.57456 9.20001 0.328125 10.4465 0.328125 11.984C0.328125 13.5216 1.57456 14.768 3.11212 14.768Z" fill="white"/>
<path d="M0.664125 2.168L2.80012 0.944004C2.99212 0.824004 3.23213 0.824004 3.44813 0.944004L5.58412 2.168C5.77612 2.288 5.89613 2.504 5.89613 2.72V5.168C5.89613 5.384 5.77612 5.6 5.58412 5.72L3.44813 6.944C3.25613 7.064 3.01612 7.064 2.80012 6.944L0.664125 5.72C0.472125 5.6 0.328125 5.384 0.328125 5.168V2.72C0.328125 2.48 0.472125 2.264 0.664125 2.168Z" fill="white"/>
</svg>
<span className='hidden md:block'>All</span></p>
        <p onClick={()=>{setSortBy('Web')}}  className={`flex items-center gap-2 px-4 cursor-pointer py-1 bg-black hover:border rounded-full  ${sortBy === 'Web'  ? 'border' : ''}`}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 11.6104V11.5768C0.300977 7.63919 1.70732 4.68572 4.15049 2.81849C6.56045 0.917588 9.17178 0.000808916 12.0166 0.000808916C14.9953 -0.0328642 17.7737 0.984934 20.2512 3.02162C22.7618 5.02463 24 8.01176 24 11.8809V12.1188C24 16.0227 22.7618 18.9414 20.2512 20.9444C17.7405 22.9811 14.9621 24 11.9834 24H11.8495C8.93721 23.9663 6.25947 22.9474 3.7831 20.9108C1.30566 18.9077 0.034275 15.8185 0.00107109 11.6094L0 11.6104ZM11.2797 6.2814V0.917588H10.4764C10.3093 1.1218 10.1754 1.3586 10.0415 1.56281C9.90762 1.76702 9.77373 1.97015 9.63985 2.20803C9.50596 2.41224 9.33887 2.6838 9.23819 2.88692C9.1043 3.09114 9.00362 3.29426 8.90293 3.53215C8.70157 3.87214 8.53448 4.21104 8.40059 4.51627C8.2335 4.8215 8.09961 5.12782 7.99893 5.39938C8.20029 5.53516 8.43379 5.70461 8.70157 5.80671C9.00254 5.90882 9.30459 6.01093 9.60557 6.07827C9.94082 6.1467 10.2418 6.18038 10.5096 6.21405C10.8106 6.24772 11.0783 6.28248 11.2797 6.28248V6.2814ZM12.686 0.918674V6.24772C12.8531 6.24772 13.0545 6.2814 13.2548 6.24772C13.4562 6.24772 13.6897 6.21405 13.891 6.17929C14.2595 6.11086 14.6943 6.00984 15.0296 5.90773C15.398 5.77196 15.7322 5.6025 15.9668 5.39829C15.5651 4.41417 15.1303 3.63317 14.6943 2.88584C14.2584 2.13851 13.7571 1.49438 13.2216 0.951261V0.917588H12.686V0.918674ZM9.07109 1.22391V1.19023C8.83652 1.29234 8.60196 1.46179 8.33418 1.5639C8.09961 1.666 7.79863 1.80178 7.56407 1.93756C7.09493 2.17544 6.62686 2.447 6.15772 2.75223C5.72285 3.05746 5.28692 3.39745 4.91953 3.73636C5.05342 3.87214 5.22051 4.00792 5.3544 4.11002C5.48829 4.21213 5.65538 4.34791 5.82354 4.48369C5.95742 4.55212 6.12452 4.65314 6.29268 4.78892C6.45977 4.89102 6.66113 5.0268 6.86143 5.16258C7.1292 4.55103 7.39697 3.9069 7.73223 3.32902C8.06748 2.71747 8.43486 2.14068 8.80332 1.63124C8.83652 1.56281 8.8708 1.49546 8.93721 1.42703C8.97041 1.39336 9.00469 1.29234 9.07109 1.22391ZM19.3129 3.73527V3.7016C18.4764 3.05638 17.7395 2.51326 17.0036 2.17436C16.2678 1.83545 15.5309 1.49546 14.8614 1.22391C15.397 1.76702 15.8661 2.44592 16.1671 3.09114C16.5023 3.77003 16.8365 4.4826 17.1043 5.16149C17.2382 5.09306 17.4053 5.02571 17.6066 4.88994C17.7737 4.78783 18.0083 4.68572 18.2097 4.5847C18.411 4.44893 18.5781 4.31315 18.7784 4.17737C18.9798 4.00792 19.1801 3.87214 19.314 3.73636L19.3129 3.73527ZM18.7441 11.3052H22.5937C22.5937 10.0495 22.3259 8.8612 21.8235 7.63919C21.3544 6.45085 20.685 5.46672 19.8484 4.61838V4.5847C19.6814 4.85626 19.4468 5.09415 19.2122 5.2636C18.9444 5.43305 18.7099 5.56883 18.4421 5.70461C18.275 5.80671 18.1068 5.94249 17.9398 6.00984C17.7727 6.11195 17.5381 6.17929 17.371 6.2814C17.5049 6.55296 17.6388 6.85819 17.7727 7.12974C17.8733 7.43497 18.0404 7.77497 18.1079 8.0802C18.3093 8.62331 18.4432 9.2001 18.5771 9.77797C18.6777 10.2874 18.7441 10.8305 18.7441 11.3052ZM6.62793 6.2814V6.24772C6.36016 6.11195 6.05918 6.00984 5.82461 5.87406C5.59004 5.70461 5.35547 5.53407 5.15518 5.39829C4.95381 5.29619 4.75351 5.16041 4.58642 5.02463C4.41933 4.88885 4.28545 4.75307 4.15156 4.61729C3.28076 5.46564 2.6456 6.41609 2.24394 7.53708C1.80908 8.65699 1.50703 9.91375 1.37314 11.2715H5.49043C5.49043 10.3211 5.62431 9.40431 5.85888 8.48753C6.06025 7.53708 6.36016 6.82451 6.62793 6.2814ZM11.2797 11.2715V7.36763C11.0119 7.4013 10.6767 7.4013 10.3757 7.36763C10.0404 7.33396 9.70625 7.23185 9.40528 7.12974C9.1375 7.06131 8.80225 6.99397 8.53448 6.89186C8.2335 6.82343 7.93145 6.68765 7.69795 6.55187C7.49659 6.89186 7.3295 7.2992 7.19561 7.74021C7.02852 8.14754 6.92784 8.58855 6.82715 8.99589C6.75967 9.40322 6.72647 9.84423 6.69327 10.2179C6.66006 10.5916 6.62579 10.9652 6.62579 11.2705H11.2786L11.2797 11.2715ZM12.686 7.43606V11.2715H17.6398C17.6398 11.0673 17.6398 10.8305 17.6066 10.559C17.5392 10.3211 17.506 10.0159 17.4728 9.7443C17.3721 9.33696 17.2714 8.89596 17.1375 8.48862C17.0036 8.11496 16.8697 7.74129 16.7026 7.43606C16.6352 7.26661 16.5688 7.0624 16.5013 6.92662C16.4006 6.75717 16.2999 6.65506 16.2335 6.55296C15.865 6.82451 15.3627 6.99397 14.7607 7.12974C14.192 7.26552 13.5226 7.4013 12.9195 7.43498H12.685L12.686 7.43606ZM5.48936 12.3914H1.37207C1.37207 12.9682 1.47275 13.6135 1.63984 14.3945C1.80694 15.2091 2.14219 15.9565 2.51064 16.7711C2.67773 17.1785 2.8791 17.5858 3.0794 17.9931C3.31396 18.3668 3.58174 18.7741 3.84951 19.1478C4.05088 19.012 4.25117 18.9099 4.41826 18.8078C4.61963 18.7057 4.85313 18.5699 5.05449 18.4678C5.28906 18.3657 5.52363 18.2636 5.7914 18.1278C6.02597 18.0257 6.32695 17.89 6.62793 17.7542C6.36016 16.9058 6.05918 16.0912 5.85781 15.1744C5.62324 14.2913 5.48936 13.4092 5.48936 12.4251V12.3914ZM11.2797 16.3627V12.3914H6.62686C6.62686 12.663 6.66006 13.0703 6.72754 13.4777C6.76074 13.885 6.86143 14.326 6.92891 14.7681C7.06279 15.2439 7.16348 15.7186 7.29736 16.1259C7.43125 16.5332 7.56514 16.8732 7.69902 17.1785C8.30205 16.9406 8.904 16.7711 9.30566 16.669C9.74053 16.5332 10.1422 16.4311 10.5438 16.3975H10.9123C11.0462 16.3638 11.1801 16.3638 11.2808 16.3638L11.2797 16.3627ZM12.686 12.3914V16.329C12.9206 16.3627 13.1884 16.3975 13.4562 16.4311C13.7571 16.4648 14.1256 16.5332 14.4266 16.6006L14.9289 16.7027C15.096 16.7711 15.2974 16.8048 15.4645 16.8385C15.6658 16.9069 15.8661 16.9406 16.0675 17.0079C16.2346 17.0764 16.4027 17.11 16.5366 17.1774C16.9715 16.0575 17.2393 15.1407 17.4074 14.3597C17.5745 13.6124 17.642 12.9682 17.642 12.4251V12.3914H12.6882H12.686ZM22.5937 12.4251V12.3914H18.7441V12.5957C18.7109 13.2409 18.6103 13.9871 18.4764 14.7681C18.3425 15.5154 18.0415 16.3975 17.6398 17.4837C18.1754 17.7553 18.6777 18.0268 19.0794 18.2984C19.4811 18.5699 19.8495 18.8752 20.1173 19.1467C20.686 18.5699 21.1884 17.7889 21.6232 16.77C22.0581 15.7859 22.3602 14.767 22.5272 13.6808C22.5605 13.4766 22.5605 13.2735 22.5947 13.0693V12.424L22.5937 12.4251ZM11.2797 22.7443V17.4489C10.4432 17.5847 9.73946 17.7542 9.20391 17.89C8.66836 18.0257 8.2667 18.1615 7.99893 18.2973C8.20029 18.8067 8.40059 19.2477 8.60196 19.6551C8.80332 20.0287 9.03682 20.4361 9.23819 20.775C9.30566 20.9108 9.43955 21.0465 9.53916 21.216C9.63985 21.3518 9.70625 21.5212 9.80694 21.657C9.90762 21.8265 10.0083 22.0307 10.1079 22.2338C10.2418 22.4032 10.3425 22.6075 10.4764 22.7432L11.2797 22.7443ZM12.686 22.7443H13.4562C13.7571 22.5064 14.0592 22.1675 14.2927 21.7939C14.5605 21.4202 14.8614 20.9792 15.0628 20.6055C15.2974 20.1645 15.5319 19.7572 15.7322 19.3498C15.9325 18.9425 16.1007 18.5688 16.2346 18.2973C15.8661 18.1615 15.3638 18.0257 14.8625 17.89C14.3612 17.7542 13.6575 17.6184 12.6871 17.4826V22.7443H12.686ZM19.3129 19.9614V19.9277C19.2454 19.8256 19.1115 19.6898 19.0119 19.5877C18.9123 19.4856 18.7441 19.3498 18.5771 19.2477C18.4432 19.1456 18.2761 19.0435 18.0747 18.9425C17.8733 18.8415 17.6056 18.7046 17.3721 18.5688C17.2382 18.8404 17.0036 19.3162 16.6694 19.9603C16.3685 20.6055 15.8329 21.3865 15.1635 22.2349C16 22.0991 16.7369 21.7939 17.4063 21.3865C18.1433 21.0129 18.7784 20.5034 19.314 19.9603L19.3129 19.9614ZM6.86143 18.8752V18.8415C6.62686 18.9773 6.2584 19.1467 5.89102 19.3173C5.48936 19.4867 5.05449 19.6909 4.65283 19.9625C4.8874 20.1667 5.12197 20.3698 5.32227 20.5056C5.52363 20.675 5.75713 20.8108 5.9585 20.9466C6.32695 21.1845 6.76182 21.4224 7.19668 21.6255C7.63154 21.8286 8.16709 22.0328 8.83652 22.237C8.60196 21.9655 8.43486 21.6255 8.26777 21.3539C8.10068 21.0824 7.89932 20.8108 7.73223 20.5393C7.56514 20.2677 7.43125 19.9625 7.29736 19.6909C7.13027 19.4194 6.99639 19.1478 6.8625 18.8762L6.86143 18.8752Z" fill="white"/>
</svg>

<span className='hidden md:block'>Web</span>
</p>
        <p onClick={()=>{setSortBy('Mobile')}}  className={`flex gap-2 items-center px-4 cursor-pointer py-1 bg-black  hover:border rounded-full  ${sortBy === 'Mobile'  && 'border'} `}>
        <svg
  width={24}
  height={24}
  viewBox="0 0 26 38"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M11 31H15M7.4 37H18.6C20.8402 37 21.9604 37 22.816 36.564C23.5686 36.1806 24.1806 35.5686 24.564 34.816C25 33.9604 25 32.8402 25 30.6V7.4C25 5.1598 25 4.03968 24.564 3.18404C24.1806 2.43138 23.5686 1.81946 22.816 1.43598C21.9604 1 20.8402 1 18.6 1H7.4C5.1598 1 4.03968 1 3.18404 1.43598C2.43138 1.81946 1.81946 2.43138 1.43598 3.18404C1 4.03968 1 5.15978 1 7.4V30.6C1 32.8402 1 33.9604 1.43598 34.816C1.81946 35.5686 2.43138 36.1806 3.18404 36.564C4.03968 37 5.15978 37 7.4 37Z"
    stroke="white"
    strokeLinecap="round"
    strokeLinejoin="round"
  />
</svg>

<span className='hidden md:block'>Mobile</span></p>


<p onClick={()=>{setSortBy('Extension')}}  className={`flex gap-2 items-center px-4 cursor-pointer py-1 bg-black  hover:border rounded-full  ${sortBy === 'Extension'  && 'border'} `}>
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.111 22.9999H8.667C8.93222 22.9999 9.18657 22.8946 9.37411 22.707C9.56164 22.5195 9.667 22.2651 9.667 21.9999V19.8999C9.65706 19.5969 9.75204 19.2998 9.93589 19.0587C10.1197 18.8177 10.3812 18.6475 10.676 18.5769C10.8515 18.5462 11.0315 18.5542 11.2036 18.6002C11.3756 18.6463 11.5356 18.7294 11.6722 18.8436C11.8088 18.9579 11.9189 19.1006 11.9947 19.2618C12.0705 19.423 12.1102 19.5988 12.111 19.7769V21.9999C12.111 22.2651 12.2164 22.5195 12.4039 22.707C12.5914 22.8946 12.8458 22.9999 13.111 22.9999H16.445C17.0047 22.9994 17.5413 22.7768 17.9371 22.381C18.3329 21.9853 18.5555 21.4486 18.556 20.8889V17.4439H19.778C20.2463 17.4438 20.709 17.3417 21.1339 17.1446C21.5587 16.9475 21.9355 16.6602 22.2381 16.3028C22.5406 15.9453 22.7617 15.5262 22.8858 15.0746C23.01 14.623 23.0343 14.1498 22.957 13.6879C22.8101 12.9241 22.3993 12.2362 21.7963 11.7448C21.1934 11.2534 20.4368 10.9897 19.659 10.9999H18.559V7.55492C18.5585 6.99521 18.3359 6.45858 17.9401 6.0628C17.5443 5.66703 17.0077 5.44445 16.448 5.44392H13V4.33992C13.0109 3.56175 12.7475 2.80458 12.256 2.20118C11.7645 1.59778 11.0763 1.18666 10.312 1.03992C9.84979 0.962242 9.3762 0.986338 8.92426 1.11053C8.47232 1.23472 8.05292 1.45601 7.6953 1.75897C7.33769 2.06193 7.05048 2.43927 6.85371 2.86465C6.65694 3.29004 6.55534 3.75323 6.556 4.22192V5.44392H3.111C2.55129 5.44445 2.01466 5.66703 1.61888 6.0628C1.22311 6.45858 1.00053 6.99521 1 7.55492V11.9999C1 12.2651 1.10536 12.5195 1.29289 12.707C1.48043 12.8946 1.73478 12.9999 2 12.9999H4.1C4.40309 12.9902 4.70024 13.0854 4.94128 13.2694C5.18232 13.4534 5.35247 13.715 5.423 14.0099C5.45372 14.1853 5.44577 14.3653 5.3997 14.5373C5.35363 14.7094 5.27055 14.8692 5.15626 15.0058C5.04198 15.1424 4.89925 15.2523 4.73805 15.328C4.57686 15.4037 4.40108 15.4432 4.223 15.4439H2C1.73478 15.4439 1.48043 15.5493 1.29289 15.7368C1.10536 15.9244 1 16.1787 1 16.4439V20.8889C1.00053 21.4486 1.22311 21.9853 1.61888 22.381C2.01466 22.7768 2.55129 22.9994 3.111 22.9999ZM3 17.4439H4.222C4.69025 17.4437 5.15282 17.3414 5.57754 17.1443C6.00227 16.9471 6.37895 16.6598 6.6814 16.3024C6.98385 15.9449 7.20481 15.5259 7.32891 15.0744C7.45301 14.6229 7.47727 14.1497 7.4 13.6879C7.25326 12.9236 6.84214 12.2354 6.23874 11.7439C5.63534 11.2524 4.87817 10.989 4.1 10.9999H3V7.55492C3 7.52548 3.01169 7.49725 3.03251 7.47643C3.05333 7.45562 3.08156 7.44392 3.111 7.44392H7.556C7.68732 7.44392 7.81736 7.41806 7.93868 7.3678C8.06001 7.31755 8.17025 7.24389 8.26311 7.15103C8.35596 7.05817 8.42962 6.94793 8.47988 6.8266C8.53013 6.70528 8.556 6.57524 8.556 6.44392V4.22192C8.55595 4.04342 8.59497 3.86708 8.67033 3.70527C8.74569 3.54345 8.85555 3.4001 8.99221 3.28527C9.12886 3.17043 9.289 3.08691 9.46137 3.04055C9.63375 2.99419 9.81418 2.98613 9.99 3.01692C10.285 3.08728 10.5467 3.25739 10.7307 3.49847C10.9148 3.73954 11.0099 4.03679 11 4.33992V6.43992C11 6.70514 11.1054 6.95949 11.2929 7.14703C11.4804 7.33456 11.7348 7.43992 12 7.43992H16.445C16.4744 7.43992 16.5027 7.45162 16.5235 7.47243C16.5443 7.49325 16.556 7.52148 16.556 7.55092V11.9999C16.556 12.2651 16.6614 12.5195 16.8489 12.707C17.0364 12.8946 17.2908 12.9999 17.556 12.9999H19.656C19.9593 12.99 20.2566 13.0851 20.4979 13.2691C20.7391 13.4531 20.9094 13.7148 20.98 14.0099C21.0104 14.1857 21.0021 14.366 20.9556 14.5382C20.9091 14.7104 20.8256 14.8704 20.7108 15.007C20.596 15.1436 20.4528 15.2534 20.2912 15.3289C20.1296 15.4044 19.9534 15.4436 19.775 15.4439H17.556C17.2908 15.4439 17.0364 15.5493 16.8489 15.7368C16.6614 15.9244 16.556 16.1787 16.556 16.4439V20.8889C16.556 20.9184 16.5443 20.9466 16.5235 20.9674C16.5027 20.9882 16.4744 20.9999 16.445 20.9999H14.111V19.7779C14.1111 19.3096 14.0091 18.8468 13.812 18.4219C13.615 17.997 13.3277 17.6202 12.9702 17.3177C12.6126 17.0152 12.1934 16.7942 11.7418 16.6703C11.2901 16.5463 10.8169 16.5223 10.355 16.5999C9.59071 16.7467 8.90248 17.1578 8.41098 17.7612C7.91948 18.3646 7.65609 19.1218 7.667 19.8999V20.9999H3.111C3.08156 20.9999 3.05333 20.9882 3.03251 20.9674C3.01169 20.9466 3 20.9184 3 20.8889V17.4439Z" fill="white"/>
</svg>

<span className='hidden md:block'>Extension</span></p>


       </div>

       <div  className='grid grid-cols-1 sm:grid-cols-2 gap-3'>
       {
        projectShow.map((data)=>(
          <ProjectCard key={data.name} animation={'fade-up'} data={data}/>
        ))
       }
       </div>
      
    </div>
  )
}

export default Projects
