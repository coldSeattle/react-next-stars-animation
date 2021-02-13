import styled from '@emotion/styled';
import { css } from '@emotion/css';
import { keyframes } from '@emotion/react';
import { FC, ReactElement } from 'react';

const Home: FC = (): ReactElement => {
    return (
        <Main>
            <ContainerWithBG>
                <ImgBG src="/background.jpg" />
                <StarsContainer>
                    <Star
                        className={css`
                            animation: ${bounce} 5s linear infinite;
                            animation-delay: 2s;
                        `}
                    >
                        <img src="/star.svg" />
                        <Score>-5</Score>
                    </Star>
                    <Star
                        className={css`
                            animation: ${bounce} 5s linear infinite;
                            animation-delay: 1.2s;
                        `}
                    >
                        <img src="/star.svg" />
                        <Score>3</Score>
                    </Star>
                </StarsContainer>
            </ContainerWithBG>
        </Main>
    );
};

export default Home;

const Main = styled.div`
    width: 100vw;
    height: 100vh;
    position: relative;
`;

const ContainerWithBG = styled.div`
    display: flex;
    width: 100vw;
    height: 100vh;
    position: absolute;
`;

const ImgBG = styled.img`
    width: 100vw;
    height: 100vh;
    position: absolute;
    z-index: -1;
`;

const StarsContainer = styled.div`
    border: 10px solid #ff0000;
    width: 63vw;
    height: 100vh;
    margin: auto;
    display: flex;
    flex-wrap: wrap;
    overflow: hidden;
`;

const bounce = keyframes`
  0% {
    transform: translate(0, 0);
  }

  100% {
    transform: translate(0, 100vw);
  }
`;

const Star = styled.object`
    display: flex;
    justify-content: center;
    align-items: center;
    img {
        max-width: 15vw;
        height: auto;
    }
    min-width: 15vw;
    width: 15vw;
    height: 15vw;
    margin: 3px;
    margin-top: -13.375rem;
    margin-left: 6.72rem;
`;

const Score = styled.p`
    display: inline-block;
    position: absolute;
    font-size: 3.625rem;
    font-weight: bold;
    line-height: 293px;
    color: #000000;
    position: absolute;
    margin: 0;
    padding: 0;
`;
