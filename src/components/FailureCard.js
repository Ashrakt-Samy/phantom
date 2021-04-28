import Failure from "../Assits/imges/FailureCart.svg"

function FailureCard() {
    return (
        <div className="card-block col-lg-4 col-md-6 col-12 d-flex justify-content-between align-items-between">
            <div>
                <p>Total Failure</p>
                <span className="failureNumber">10</span>
                <span className="text-muted"> /82</span>
            </div>
            <img className="totalImg" src={Failure} />
        </div>
    )

}
export default FailureCard;