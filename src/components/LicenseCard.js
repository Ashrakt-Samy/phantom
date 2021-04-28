import EyeIcon from '../Assits/imges/eyeIcon.svg'
function LicenseCard() {

    return (
        <div className="card-Large w-100 d-flex justify-content-between align-items-between">
            <div className="w-100">
                <p className="text-muted">License key</p>
                <div className="w-100 d-flex justify-content-between align-items-center">
                    <p>XXXX - XXXX - XXXX - XXXX</p>
                    <img width="30" height="30" className="licenseImg" src={EyeIcon} />
                </div>

                <div className='w-100 d-flex mt-3 justify-content-between align-items-center flex-wrap'>
                    <button className="mainBtn btn col-md-7 col-12 d-flex justify-content-between">
                        <span>Renew Now</span>
                        <span className="font-weight-bold">Stripe</span>
                    </button>
                    <button className="minirBtn btn col-4">
                        <span>Deactivat</span>
                    </button>
                </div>
                <div className="hint">
                    <span>Next Renewer On </span>
                    <span className="font-weight-bold">22 Mar 2021</span>
                </div>
            </div>
        </div>
    )

}
export default LicenseCard;