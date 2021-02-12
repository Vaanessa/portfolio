import './style.css';

const Contact = () => {
    return ( 
    

        <div className="contact">
            <h1> Contact me</h1>

            <h4>Name</h4>
            <p>Vanessa Martinez</p>

            <h4>Phone</h4>
            <p>073993831</p>

            <h4>email</h4>
            <p>vanessa.martinez@student.kyh.se</p>

        <br/>

<p>Här kan ni nå mig på Linkedin</p>
    <div className="logo">

            <a href="https://www.linkedin.com/in/vanessa-m-736956176/" target="_blank">
                <img src={`${process.env.PUBLIC_URL}/img/linkedin.png`} alt="linkedin"/>
            </a>
            
            </div>
    </div>

    
    ); 
};

export default Contact;