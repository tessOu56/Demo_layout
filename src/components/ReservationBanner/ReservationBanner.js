import React from "react";
import styled from "styled-components";
import Banner from '../../statics/img2.png';
import { QUERY_MD , QUERY_LG , QUERY_MAX_W } from '../../constants/Style';
import { StyleButton } from '../../components';

const Wrapper = styled.div`  
    width:100%;  
    padding: ${ props => props.padding || '100px 0px'};
    background-image: url(${props => props.bg || Banner});
    background-color: var(--font-primary-color);
    background-size: cover;
    background-repeat: no-repeat;
    ${ QUERY_LG }{
        padding: ${ props => props.padding || '60px 10px 40px'};
    }
    ${ QUERY_MD }{
        padding: ${ props => props.padding || '40px 10px 20px'};
    }
`;

const ContentBox = styled.div`
    width: 100%;
    max-width: ${ QUERY_MAX_W };
    margin:0 auto ;
    text-align: center;
    color:white;
    ${ QUERY_LG }{
        padding: 0 50px;
    }
    ${ QUERY_MD }{
        padding: 0 20px;
    }
`;

const Title = styled.p`
    font-size: 12px;
    font-weight:400;
    padding: 10px 0;
    margin:auto;
    letter-spacing: 3px;
    line-height: 1.2em;
    text-transform: uppercase;
`;

const Slogan = styled(Title)`
    font-size: 32px;
    font-weight:500;
    letter-spacing:3px;
    line-height: 1.5em;
    text-transform: capitalize;
    ${ QUERY_MD }{
        font-size: 20px;
        letter-spacing:1px;
    }
`;

const PointWord = styled(Slogan).attrs({
    as: 'span'
})`
    display:inline-block;
    width:fit-content;
    color: var(--secondary-color);
    padding: 0 6px;
    ${ QUERY_MD }{
        display:block;
        width: 100%;
        padding: 3px 0;
        font-size: 32px;
        letter-spacing:3px;
    }
`;

const Description = styled(Title)`
    max-width:1000px;
    letter-spacing: 2px;
    line-height: 1.8em;
    text-transform: capitalize;
`;

const StyledButton = styled(StyleButton)`
    width: fit-content;
    margin: 30px auto;
    padding: 20px 40px ;
    ${ QUERY_LG }{
        margin: 30px auto 0;
    }
    ${ QUERY_MD }{
        margin: 20px auto 0;
    }
`;

// const PoitedFn = (desc) => <PointWord> { desc } </PointWord> ;

export default ({ data={} , child , handleSelect = f => f , ...props }) => {

    return (

        <Wrapper { ...props }>
        {
            child || 
            <ContentBox>
                <Title>
                    { data.title || `We are open for everybody`  }
                </Title>
                {
                    ( data.slogan && <Slogan> { data.slogan } </Slogan> ) ||
                    <Slogan>
                        You can reserve for yourself and your team 
                        <PointWord>working space</PointWord>by taking a subscription for any period and getting a discount for an additional week of coworking.
                    </Slogan>
                }
                {
                    data.desc && <Description> { data.desc } </Description>
                }
                {
                    data.nobtn ||
                    <StyledButton name="Make a reservation" handleSelect={ () => handleSelect('contact') }/>
                }
                
            </ContentBox>
        }
        </Wrapper>

    )
}