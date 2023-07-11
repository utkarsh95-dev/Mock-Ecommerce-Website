import '../styles/Jumbotron.css'


const Jumbotron = () => {

const image = (images) =>{ images.map((ele)=>{
    return ele.img;
})}

const obj = image(images);
let imgSource = obj[0];

setInterval(()=>{
    let rand = Math.floor(Math.random()*images.length);
     imgSource = obj[rand]
},2000)

  return (
    <div className="jumbotron-main">
        <img src={imgSource} alt="jumbotron" />

    </div>
  )
}

export default Jumbotron