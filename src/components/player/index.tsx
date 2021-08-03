import React, { useState, useContext, createContext } from 'react';
import ReactDOM from 'react-dom';

import { Container, Overlay, Inner, Close, Button } from './styles/player';

interface Props {
    children: React.ReactNode;
}
interface ShowPlayerContext {
    showPlayer?: boolean;
    setShowPlayer?: React.Dispatch<React.SetStateAction<boolean>>;
}

export const PlayerContext = createContext<ShowPlayerContext>({});

const Player = ({ children, ...restProps }: Props) => {
    const [showPlayer, setShowPlayer] = useState(false);

    return (
        <PlayerContext.Provider value={{ showPlayer, setShowPlayer }}>
            <Container {...restProps}>{children}</Container>
        </PlayerContext.Provider>
    );
};

Player.Video = ({ ...restProps }) => {
    const { showPlayer, setShowPlayer } = useContext(PlayerContext);

    return showPlayer
        ? ReactDOM.createPortal(
              <Overlay onClick={() => setShowPlayer!(false)}>
                  <Inner>
                      <video id="netflix-player" controls>
                          <source src="/videos/bunny.mp4" type="video/mp4" />
                      </video>
                      <Close />
                  </Inner>
              </Overlay>,
              document.body,
          )
        : null;
};

Player.Button = ({ ...restProps }) => {
    const { showPlayer, setShowPlayer } = useContext(PlayerContext);

    return <Button onClick={() => setShowPlayer!(!showPlayer)}>Play</Button>;
};
export default Player;
