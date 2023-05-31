import { Carousel } from 'antd';
// import { contentStyle } from '../CarouselStyle';
const Carousels = ({datas}) => {

  return (
  <>
    <Carousel autoplay>
      {datas.map (item => {
        const {id, url} = item;
          const contentStyle = {
          height: '100vh',
          color: '#fff',
          lineHeight: '160px',
          textAlign: 'center',
          background : `url(${url})`,
          fontSize : '30px'
          };
      return (
        <div key={id}>
         <h3 style={contentStyle}>{id} {/* kamel albomId karanq dnenq bayc indz tvuma id-in aveli chishta */ } </h3> 
        </div>
     
      )
    
      })
    }
    </Carousel>
  </>
  );
};
  export default Carousels;


