import PropTypes from 'prop-types';

const Card = ({course, handleAddToCarts}) => {
    const {img, course_name, credit_hours, price, details} = course
    return (
        <div>
            <div className="w-72 h-96 bg-base-100 shadow-xl rounded-lg">
                <figure className="px-4 py-4">
                    <img src={img} alt="Shoes" className="rounded-sm" />
                </figure>
                <div className="w-full px-4 align-middle space-y-4">
                    <h2 className="text-lg font-semibold h-10">{course_name}</h2>
                    <p className="text-sm font-medium h-12">{details}</p>
                    <div className="flex justify-between py-2">
                        <div>
                            <p className="text-base font-medium">$ Price: {price}</p>
                        </div>
                        <div>
                            <p className="text-base font-medium">Credit: {credit_hours}hr</p>
                        </div>
                    </div>
                </div>
                
                <div className="w-full px-4">
                        <button onClick={() =>handleAddToCarts(course)} className="btn btn-primary bg-blue-500 w-full text-white border-white text">Select</button>
                    </div>
            </div>
        </div>
    );
};

Card.propTypes ={
    course: PropTypes.array,
    handleAddToCarts: PropTypes.array
}

export default Card;