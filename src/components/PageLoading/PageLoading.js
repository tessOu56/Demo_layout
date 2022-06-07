
import styled from "styled-components";
import Logo from '../../statics/footer-logo.png';

const FullScreen = styled.div`
    position:fixed:
    z-index:3;
    background-color:white;
    width:100vw;
    height:100vh;
    display:grid;
    grid-template-rows: 30% 40% 30% ;
`;

const Content = styled.div`
    width:300px;
    margin:auto;
`;

const LogoBox = styled.img`
    width:100%;
`;

const Animation = styled.div`
    width:100%;
    height:0px;
    margin:0px;
    &::before {
        content:'';
        position: absolute;
        top: 0;
        left: 5px;
        width: 50px;
        height: 2px;
        border-radius:30px;
        background-color:var(--primary-color);
        animation: smoothline 1s 0.5s linear infinite alternate ;
    }
    @keyframes smoothline {
        from { width: 50px; left:5px ; }
        50% { width:150px } 
        to { width: 50px; left:250px ; }
    }
`;

export default () => { 
    return (
        <FullScreen>
            <div></div>
            <Content>
                <LogoBox src={Logo}/>
                <Animation />
            </Content>
            <div></div>
        </FullScreen> 
    )
};