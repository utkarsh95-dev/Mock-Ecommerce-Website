
const MyOrderItems = (props) => {
  return (
    <div className="my-order-main" style={{
        display:"flex",
        alignItems:"center",
        justifyContent:"space-between",
        height:"40px",
        width:"400px",
        marginLeft:"35px",
        marginTop:"10px",
        marginBottom:"20px",
    }}>

        <div className="my-order-pic" style={{
            width:"30px",
            height:"30px",
            borderRadius:"50%",
            overflow:"hidden",
        }}>
        <img src={props.data.img} alt="product" style={{
            objectFit:"contain",
            objectPosition:"center",
            overflow:"hidden",
            height:"100%",
            width:"100%"
        }}/>
        </div>
        <p style={{fontSize:"12px"}}><b>{props.data.title}</b></p>
        <p style={{
          marginLeft:"30px",
          fontSize:"12px",
          color:"#555",
        }}><b>price: ${props.data.price}</b></p>
    </div>
  )
}

export default MyOrderItems