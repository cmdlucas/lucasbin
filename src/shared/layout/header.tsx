import React, { FC, useState } from 'react';
import { generalSkin } from '../primitive-ui/skin';
import { HMFContainer } from '../primitive-ui/container';
import { Flex } from '../primitive-ui/flexbox';
import styled from 'styled-components';
import Logo from '../icon/logo';
import MenuBar from '../icon/menubar';
import NavMenu from './navmenu';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const HeaderHolder = styled.header((props) => ({
  top: 0,
  left: 0,
  zIndex: 12000,
  width: '100%',
  position: 'fixed',
}));

const HeaderSkin = styled.div((props) => ({
  ...generalSkin(props.theme),
  height: '76px',
  borderBottom: `1px solid ${props.theme.main.borderColor}`,
}));

const HeaderContainer = styled(HMFContainer)(() => ({
  height: '100%',
  '@media only screen and (max-width: 768px)': {
    padding: '0px 8px',
  },
}));

const HeaderFlex = styled(Flex)(() => ({}));

const LeftHeaderColumn = styled(Flex)(() => ({
  flexGrow: 1,
}));

const RightHeaderColumn = styled(Flex)(() => ({
  justifyContent: 'flex-end',
}));

export const Header: FC = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <HeaderHolder>
        <HeaderSkin>
          <HeaderContainer>
            <HeaderFlex>
              <LeftHeaderColumn>
                <Logo />
              </LeftHeaderColumn>
              <RightHeaderColumn>
                <MenuBar open={open} onClick={() => setOpen(!open)} />
              </RightHeaderColumn>
            </HeaderFlex>
          </HeaderContainer>
        </HeaderSkin>
      </HeaderHolder>
      <NavMenu
        open={open}
        setOpen={() => {
          setOpen(!open);
        }}
      />
    </>
  );
};

export default React.memo(Header);
