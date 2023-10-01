const OneSkillComponent = ({ title, img }) => {

    return (
        <div className="skillSection">
            <div className="icon">
                <img src={img} alt="" />
            </div>
            <div className="title">
                <p>{title}</p>
            </div>
        </div>
    )
}

export default OneSkillComponent;