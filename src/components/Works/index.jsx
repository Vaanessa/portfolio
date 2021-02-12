import './style.css';

const Works = () => {
    return (
        <div className="works">
            <h1>Experencies</h1>
            <p>Company: KYH</p>
            <p>Role: Student front-end developer</p>
            <p>Date: 2020 - on going</p>
            <br/>
            <p>Min github</p>

            <div className="logo">
<a href ="https://github.com/Vaanessa" target="_blank">
                <img src={`${process.env.PUBLIC_URL}/img/github.png`} alt="github"/>
            </a>
    </div>

            <p>Jag har lite erfarenhet inom:

Frontend: HTML, CSS, Javascript, jQuery, och React.</p>

        </div>
    );
};

export default Works;
