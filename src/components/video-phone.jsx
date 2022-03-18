import React from 'react';
import ReactPlayer from 'react-player/youtube';
import styled from 'styled-components';

const Center = styled('div')`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2rem 0;
`;

const Phone = styled('div')`
  padding: 2vh;
  border-radius: 7vh;
  position: relative;
  z-index: 1;
  box-shadow: 0 10px 20px 0 rgba(0,0,0,.04),0 40px 60px 0 rgba(0,0,0,.1);
  background-color: var(--color-darkest);
  transform: translateY(0px) rotate(-2deg) translateZ(0px);
`;

const Content = styled('div')`
  aspect-ratio: 498/1080;
  height: 80vh;
  background: var(--color-black);
  border: 1px solid rgba(0,0,0,.05);
  border-radius: 5vh;
  overflow: hidden;
  transform: translateZ(0);
`;

export default function VideoPhone({ url }) {
  return (
    <Center>
      <Phone>
        <Content>
          <ReactPlayer
            url={url}
            width="100%"
            height="100%"
            playing={true}
          // css={{
          //   position: 'absolute',
          //   top: 0,
          //   left: 0,
          //   right: 0,
          // }}
          // // config={{
          //   youtube: {
          //     playerVars: {
          //       modestbranding: 1,
          //       controls: 0,
          //       showinfo: 0,
          //       fs: 0,
          //       autoplay: 1,
          //     }
          //   }
          // }}
          />
        </Content>
      </Phone>
    </Center>
  )
}
