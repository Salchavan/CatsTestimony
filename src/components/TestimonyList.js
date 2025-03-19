import testimonys from '../data/testimonys.json';
import Testimony from './Testimony.js';
import '../css/TestimonyList.css';

function TestimonyList() {
    return (
        <div className='div-testimony-list'>
            {testimonys.map(testimony => (
                <Testimony
                    key={testimony.id}
                    name={testimony.name}
                    city={testimony.city}
                    job={testimony.job}
                    company={testimony.company}
                    text={testimony.text}
                    img={testimony.id}
                />
            ))}
        </div>
    );
}

export default TestimonyList;