import { getByCategory } from '../../service/article'
import './radioBtnComponent.css'

function RadioBtnComponent(props) {
    const radioBtn = ['business', 'entertainment', 'science', 'sports']

    const handlerSearchRadio = async (e) => {
        if (e.target && e.target.value) {
            const { data } = await getByCategory(e.target.value)
            props.cbUpdate(data.sources)
        }
    }

    return (<div className='container-radio'>
        {radioBtn.map((category,i) => {
            return <div key={i}  className="form-check">
                <input className="form-check-input" type="radio" value={category} name='category' onChange={handlerSearchRadio} />
                <label className="form-check-label">
                    {category}
                </label>
            </div>
        })}

    </div>
    );
}

export default RadioBtnComponent;
