import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Cards from './Cards.jsx'

function Shows2(){
      const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1.4
  }
};

const data =[
            {
                id: 1,
                image:'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRGQqcZYBAJnUDfbHlgXdxzUJckmAIfG2KF1_eUbkqNAQVoY7yR',
                title:'Six',
                price:'From $126.86',
                rating:'4.8'
            },
            {
                id: 2,
                image:'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRP7WKUV6DLPu5cXo-LDZJWGZOT_Ev5yQ13HZzT9XD00tZgvUuq',
                title:'Wicked',
                price:'From $100.20',
                rating:'4.7'
            },
            {
                id: 3,
                image:'https://s1.ticketm.net/tm/en-us/img/static/broadway/just-in-time.jpg',
                title:'Just In Time',
                price:'From $50.40',
                rating:'4.6'
            },
              {
                id: 4,
                image:'https://upload.wikimedia.org/wikipedia/en/e/e2/%26JulietTheatrePoster.jpeg',
                title:'& Juliet',
                price:'From $90.20',
                rating:'4.7'
            },
            {
                id: 5,
                image:'https://thebookofmormonmusical.com/static/5a48ede59105a82e0d7707ece9e10cd9/c22ff/783627326-bom-2025-09-header-tony-768x768.jpg',
                title:'Book Of Mormon',
                price:'From $110.20',
                rating:'4.9'
            },
              {
                id: 6,
                image:'https://deathbecomesher.com/wp-content/uploads/2024/08/DBH_009_W_FULL_WEBSITE_LAUNCH_090324_HERO_ART_MOBILE_V1.jpg',
                title:'Death Becomes Her',
                price:'From $135.32',
                rating:'4.9'
            },
              {
                id: 7,
                image:'https://assets.playbill.com/playbill-covers/_playbillListingTileCover/Art-Playbill-2025-08-28_Web.jpg',
                title:'Art',
                price:'From $105.40',
                rating:'4.8'
            },
              {
                id: 8,
                image:'https://i5.walmartimages.com/seo/Hadestown-Paperback-9780573708855_d6dc6044-5bf8-49a9-86c3-74284bec2351.8ff224370b70f617a359fa81d5f45d75.jpeg',
                title:'Hadestown',
                price:'From $95.49',
                rating:'4.7'
            },
        ]

     const card=   data.map(item => (
            <Cards image={item.image} title={item.title} price={item.price} rating={item.rating}/>
        ))
        
return (
<div className='bg-white pt-10 pb-10 dark:bg-slate-900 h-full pl-3'>
  <h1 className='text-2xl font-bold text-black-500 mb-7 dark:text-white'>Discounted Shows</h1>
        <Carousel responsive={responsive} showDots={false} swipeable={true} autoPlay={true} autoPlaySpeed={3000} infinite={true}>
  {card}
</Carousel>
<div className='flex justify-center items-center pt-10'>
  <img src='https://s0.2mdn.net/simgad/9325878131549526107'/>
</div>

</div>
)
}




export default Shows2