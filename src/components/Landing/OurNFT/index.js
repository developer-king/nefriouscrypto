import * as React from 'react';

import { SmallTitle, Title } from '../Styles/Sea.styles';
import { WaveDiv, WaveLine } from '../Styles/MintNow.styles';

import { OurNFTDiv, MainDiv, TimerDiv, PadDiv, Number, Unit, BackOverlay } from '../Styles/OurNFT.styles';

import 'swiper/swiper.min.css';
import "swiper/modules/navigation/navigation.min.css";

import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import { Pagination, Navigation } from "swiper";

import NFT183 from '../../../assets/Landing/Nefarious-Crypto-Pirate-Ship-.888.-Creation-183-1-768x768.jpg';
import NFT263 from '../../../assets/Landing/Nefarious-Crypto-Pirate-Ship-.888.-Creation-263-1-768x768.jpg';
import NFT667 from '../../../assets/Landing/Nefarious-Crypto-Pirate-Ship-.888.-Creation-667-1-768x768.jpg';

const OurNFT = () => {
    const nftList = [
        NFT183,
        NFT263,
        NFT667
    ] ;

    return (
        <OurNFTDiv>
            <BackOverlay />
            <MainDiv>
                <SmallTitle > Gallary</SmallTitle>
                <Title style={{color : '#28364B !important'}}>Our NFTs</Title>
                <WaveDiv>
                    {
                        [...Array(5)].map((item, index) => (
                            <WaveLine key={index}/>
                        ))
                    }
                </WaveDiv>

                <Swiper
                    slidesPerView={3}
                    spaceBetween={20}
                    pagination={{
                    clickable: true,
                    }}
                    loop={true}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                >
                    {
                        nftList.map((item, index) => (
                            <SwiperSlide key={index}>
                                <img src={item} />
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
                
                <TimerDiv>
                    <PadDiv>
                        <Number>30</Number>
                        <Unit>Days</Unit>
                    </PadDiv>
                    <PadDiv>
                        <Number>03</Number>
                        <Unit>Hours</Unit>
                    </PadDiv>
                    <PadDiv>
                        <Number>43</Number>
                        <Unit>Minutes</Unit>
                    </PadDiv>
                    <PadDiv>
                        <Number>29</Number>
                        <Unit>Seconds</Unit>
                    </PadDiv>
                </TimerDiv>
            </MainDiv>
        </OurNFTDiv>
    )
}

export default OurNFT;