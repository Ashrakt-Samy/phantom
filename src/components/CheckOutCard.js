import CheckoutSart from "../Assits/imges/checkoutsart.svg"

function CheckOutCard() {
    return (
        <div className="card-block col-lg-4 col-md-6 col-12 d-flex justify-content-between align-items-between">
            <div>
                <p>Total Checkouts</p>
                <span className="checkoutNumber">72</span>
                <span className="text-muted"> /82</span>
            </div>
            <img className="totalImg" src={CheckoutSart} />
        </div>
    )

}
export default CheckOutCard;