import Discord from "../Assits/imges/Discord.svg"
function DiscordCard() {
    return (
        <div className="cardEntity d-flex justify-content-between align-items-center ">
            <div>
                <div className="d-flex align-items-center">
                    <img src={Discord} />
                    <span>Discord ID</span>
                </div>
                <p className="mt-1">anthony#2142</p>
            </div>
            <button className="minirBtn btn col-4">
                <span>Unbind</span>
            </button>
        </div>
    )

}
export default DiscordCard;