import PropTypes from 'prop-types';

const Carts = ({carts, totalCredit, remainingCredit}) => {
    return (
        <div className="w-full h-auto bg-base-100 shadow-xl rounded-lg">
            <div>
                <p className="px-4 py-4 border-b-2 text-lg font-bold text-blue-700">Credit Hour Remaining {remainingCredit} hr</p>
            </div>
            <h1 className="px-4 py-1 text-xl font-bold">Course Name</h1>
            <div className="px-4 py-4">
                {
                    carts.map((course, idx) => <ol key={idx}>{course.course_name}</ol>)
                }
            </div>
            <div className="px-4 py-4 border-t-2">
                <p className="text-base font-medium">Total Credit Hour: {totalCredit}</p>
            </div>
        </div>
    );
};

Carts.propTypes = {
    carts: PropTypes.array,
    totalCredit: PropTypes.number,
    remainingCredit: PropTypes.number
}

export default Carts;