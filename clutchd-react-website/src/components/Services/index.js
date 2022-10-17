import React from 'react'
import Icon1 from '../../images/svg1.svg'
import Icon2 from '../../images/svg4.svg'
import Icon3 from '../../images/svg5.svg'
import { ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP } from './ServicesElements'

const Services = () => {
  return (
    <ServicesContainer id="services">
        <ServicesH1>Our Services</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon1}/>
                    <ServicesH2>Twitch Partner</ServicesH2>
                    <ServicesP>We will grow your channel so you become a Twitch Partner!</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon2}/>
                    <ServicesH2>Host Giveaways</ServicesH2>
                    <ServicesP>Cant fork over a giveaway due to finances? We got you covered!</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon3}/>
                    <ServicesH2>Collaborate</ServicesH2>
                    <ServicesP>Need some gaming buddies? So do other Clutchd Members!</ServicesP>
                </ServicesCard>
            </ServicesWrapper>

    </ServicesContainer>
    
    

  )
}

export default Services