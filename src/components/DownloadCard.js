import Laptop from "../Assits/imges/Laptop.svg"
import AppleLogo from "../Assits/imges/AppleLogo.svg"
import Windows from "../Assits/imges/Windows.svg"

function DownloadCard() {
    return (
        <div className="cardEntity d-flex justify-content-between align-items-center">
            <div className="desckTopApp text-center col-md-4 col-6" >
                <img src={Laptop} />
                <div className="text-center">Desktop App</div>
            </div>
            <div className="col-md-8 col-12">
                <button className="downLoadBtn w-100 btn d-flex justify-content-center align-items-center">
                    <img src={AppleLogo} ></img>
                    <span>Download for MacOS</span>

                </button>
                <button className="downLoadBtn w-100 btn mt-2 d-flex justify-content-center align-items-center">
                    <img src={Windows} ></img>
                    <span>Download for Windows</span>
                </button>
            </div>

        </div>
    )

}
export default DownloadCard;