import styled from 'styled-components'

export default function Mission() {
    return(
        <StyledMission>
            <div className={"header"}>
             <div className={"break"}></div>   
            <div className={"missionContainer"}>
                <h3 className={"story"}>
                OUR STORY
                </h3>
                <h1 className={"statement"}>
                Field Market is a woman-focused social enterprise based in Kenya combining <span className={"red"}>development research and technology solutions</span> to address<br/> the <span className={"blue"}>digital information gap</span> facing women in trade.
                </h1>
                <p className={"para"}>
                We build, implement, and scale mobile trade and market information solutions for small and medium enterprises (SMEs) across East Africa. Since 2020, we have directly reached over 5,000 business operators in “low technology” environments in Kenya, Uganda, Rwanda, and Tanzania and indirectly empowered many more traders as partners in program design and technical implementation.
                </p>
                <p className={"bold"}>
                Field Market brings proven expertise in information technology solutions, research, mobile data collection, evaluation, and trade insights.
                </p>
            </div>
            <div className={"footer"}>
                <div className={"footerContainer"}>
                <h2 className={"button"}>
                OUR MISSION
                </h2>
                <h3 className={"footerState"}>
                To address information barriers in “low technology” environments through scalable and sustainable technology and research solutions.
                </h3>
                </div>
            </div>
            </div>
        </StyledMission>
    )
}

const StyledMission = styled.div`
width: 100%;
height: auto;
.missionContainer{
    display: flex;
flex-direction: column;
align-items: center;
    height: 71.5vh;
    background: rgb(29, 26, 26);
    text-align:center;
    color:white;
}
/* .break{
    height:6.5vh;
    background: rgba(255, 255, 255, 0.4);
} */
.header{
    height:93vh;
    background: url("/images/banner.jpg");
}
.story{
    margin-top:7%;
    border-bottom: solid 3px #edd97f;
}
.statement{
    width: 75%;
    font-family: "Alegreya Sans SC", sans-serif; 
    margin-bottom: 4%;
}
.para{
    width: 75%;
}
.bold{
    width:75%;
    font-weight: bolder;
}
.red{
    color:brown;
}
.blue{
    color: #568dfc;
}
.footer{
    height: 21.5vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #008b57;
    font-weight: bolder;
    .footerContainer{
        width:75%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .button{
        height: 2vh;
        width: 25%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: "Alegreya Sans SC", sans-serif;
        padding:2%;
        margin-right: 5%;
        background: white;
        color: brown;
    }
    .footerState{
        font-size: 1.5rem;
        color: white;
    }
}
`