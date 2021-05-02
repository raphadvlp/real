import React from 'react';
import { Banner , Container } from './styled';
import ImgInstitucional from '../../assets/institucional.jpg';


const Page = () => {
    return (
            <>
            <Banner>
                <img src="" />
            </Banner>
            <Container>
                <div className="img-historia space">
                    <img src={ImgInstitucional} />
                </div>

                <div className="img-historia space">
                    <h1>
                        Nossa história
                    </h1>
                   <p>
                   Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                   </p>
                </div>
            </Container> 
            </>   
    );
}

export default Page;
