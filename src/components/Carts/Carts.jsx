const Carts = ({carts}) => {
    return (
        <div className="w-full h-auto bg-base-100 shadow-xl rounded-lg">
            <div>
                <p className="px-4 py-4 border-b-2">Credit Hour Remaining</p>
            </div>
            <h1 className="px-4 py-1 text-xl font-bold">Course Name:</h1>
            <div className="px-4 py-4">
                {
                    carts.map((course) => <ol>{course.course_name}</ol>)
                }
            </div>
        </div>
    );
};
// Carts.propTypes

export default Carts;