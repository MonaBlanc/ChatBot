import "./AnimatedBot.css";

export default function AnimatedBot(props) {
    const mascot = props.mascot;
    console.log(mascot);
    console.log(props);
    
    return (
        <>

            <img className="bot" src={require('../../../assets/img/happy.png')} alt="bot" />
        </>
    )
}
