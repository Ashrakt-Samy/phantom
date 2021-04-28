
function FilterCard() {

    return (
        <div className="card-block col-lg-3 col-md-6 col-12">
            <p className="mb-1">Filter by</p>
            <div className="d-flex justify-content-between align-items-between">
                <label>
                    <input className="radio" type="radio" value="1D" name="filter" />
                    <span>1D</span>
                </label>
                <label>
                    <input className="radio" type="radio" value="1M" name="filter" checked />
                    <span>1M</span>
                </label>
                <label>
                    <input className="radio" type="radio" value="1Y" name="filter" />
                    <span>1Y</span>
                </label>

            </div>
        </div>
    )

}
export default FilterCard;