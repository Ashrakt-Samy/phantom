import Transfer from "../Assits/imges/Transfer.svg"
import ArrowRight from "../Assits/imges/ArrowRight.svg"
function TransferCard() {
    return (
        <div className="cardEntity ">
            <div className="d-flex align-items-center mb-2">
                <img src={Transfer} />
                <span>Transfare</span>
            </div>
            <div className="d-flex justify-content-between w-100">
                <div>
                    <p className="text-muted">Current Email</p>
                    <p>anthony2142@email.com</p>
                </div>
                <button className="actionBtn btn col-auto">
                    <span>Transfer to</span>
                    <img src={ArrowRight} ></img>
                </button>
            </div>
        </div>
    )

}

export default TransferCard;