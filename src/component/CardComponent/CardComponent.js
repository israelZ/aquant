import './CardComponent.css'

function CardComponent(props) {
  let year,month,day
  const parsData=(data)=>{
    const[year,month,dayTime]=data.split('-')
    const day=dayTime.split('T')[0]

    return [year,month,day]
  }

  if (props.publishedAt) {
     [year,month,day]=parsData(props.publishedAt)  
  }
  
  return (
    <div className="card card-item" >
      <img src={props.image} className="card-img-top" alt='...' />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.desc.slice(0,80)}</p>
          {props.publishedAt && <p className="card-text">{`${day}/${month}/${year}`}</p>}
        </div>
    </div>);
}

export default CardComponent;
