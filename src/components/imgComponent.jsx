import style from '../style/image.module.css'
const ImgComponent = () => {
  return (
    <div  >
    <h1 className={style.h1}>meta</h1>
      <img 
        src="https://i.pinimg.com/564x/85/0f/fd/850ffd8037e66f1deda0c8181d472c7d.jpg"
        alt="..."
      />
    </div>
  );
};
export default ImgComponent;
