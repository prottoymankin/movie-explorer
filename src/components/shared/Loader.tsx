import loading from "../../assets/loading.png";

const Loader = () => {

  return (

    <div className="flex h-100 items-center justify-center">

      <img 
        alt=""
        className="[animation-duration:2s] animate-spin h-10" 
        src={loading} 
      />

    </div>

  );

};

export default Loader;