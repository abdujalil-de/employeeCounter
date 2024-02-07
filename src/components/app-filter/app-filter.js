import './app-filter.css';


const AppFilter = () => {
    return (
        <div className="btn-group">
            <button 
                className="btn btn-light"
                type="button">
                All employes
            </button>
            <button 
                className="btn btn-outline-light"
                type="button">
                To promotion
            </button>
            <button 
                className="btn btn-outline-light"
                type="button">
                Salary more than 1000 USD
            </button>

        </div>
    );
};

export default AppFilter ;



//btn-group is bootstrap class and all the other to  