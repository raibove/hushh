import "./DashboardCard.css"

function DashboardCard({imageSrc, altText}:any) {
    return (
        <div className="dashboard-card">
            <div className="dashboard-card-img-container">
                <img src={imageSrc} alt={altText} className="dashboard-card-img"/>
            </div>
            <div className="dashboard-card-title">
                <p className="dashboard-card-p">An interview for job?</p>
            </div>
        </div>
    )
}

export default DashboardCard;