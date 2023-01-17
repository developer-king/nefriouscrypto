import * as React from 'react' ;

import Header from 'src/components/Layouts/Header';

import { 
    MintButton,
    MintNowDiv, TitleParagraph,
    RopeLine,
    WhatWeDoDiv, BackOverlay,
    WaveLine, WaveDiv,TopDiv,
    MainDiv, StrongBackOverlay
} from '../Styles/MintNow.styles';

const MintNow = () => {
    return (
        <TopDiv>
            <StrongBackOverlay/>
            <MainDiv>
                <MintNowDiv>
                    <TitleParagraph >
                        NFT PIRATE SHIP LIFE
                        COLLECTION
                    </TitleParagraph>
                    <MintButton>Mint Now</MintButton>
                </MintNowDiv>
                <RopeLine />
                <BackOverlay>
                    <WhatWeDoDiv >
                        What we do 
                        <WaveDiv>
                            {
                                [...Array(5)].map((item, index) => (
                                    <WaveLine key={index}/>
                                ))
                            }
                        </WaveDiv>
                    </WhatWeDoDiv>
                </BackOverlay>
            </MainDiv>
            <Header />
        </TopDiv>
    )
}

export default MintNow;