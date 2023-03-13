import React from "react";
import styled from "styled-components/macro";
import { Menu, Search, User } from "react-feather";

import { QUERIES } from "../../constants";

import MaxWidthWrapper from "../MaxWidthWrapper";
import Logo from "../Logo";
import Button from "../Button";

const Header = () => {
  return (
    <header>
      <SuperHeader>
        <Row>
          <ActionGroup>
            <button>
              <Search size={24} />
            </button>
            <button>
              <Menu size={24} />
            </button>
          </ActionGroup>
          <ActionGroup>
            <button>
              <User size={24} />
            </button>
          </ActionGroup>
        </Row>
      </SuperHeader>
      <MainHeader>
        <ActionGroupLaptop>
          <button>
            <Search size={24} />
          </button>
          <button>
            <Menu size={24} />
          </button>
        </ActionGroupLaptop>
        <Logo />
        <SubscribeGroup>
          <Button>Subscribe</Button>
          <TextLink href="/">Already a subscriber?</TextLink>
        </SubscribeGroup>
      </MainHeader>
    </header>
  );
};

const SuperHeader = styled.div`
  padding: 16px 0;
  background: var(--color-gray-900);
  color: white;

  @media ${QUERIES.laptopAndUp} {
    display: none;
  }
`;

const Row = styled(MaxWidthWrapper)`
  display: flex;
  justify-content: space-between;
`;

const ActionGroup = styled.div`
  display: flex;
  gap: 24px;

  /*
    FIX: Remove the inline spacing that comes with
    react-feather icons.
  */

  svg {
    display: block;
  }
`;

const ActionGroupLaptop = styled.div`
  display: none;

  @media ${QUERIES.laptopAndUp} {
    display: flex;
    gap: 24px;

    /*
      FIX: Remove the inline spacing that comes with
      react-feather icons.
    */
    svg {
      display: block;
    }
  }
`;

const MainHeader = styled(MaxWidthWrapper)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 32px;
  margin-bottom: 48px;

  @media ${QUERIES.laptopAndUp} {
    justify-content: space-between;
  }
`;

const SubscribeGroup = styled.div`
  display: none;

  @media ${QUERIES.laptopAndUp} {
    display: flex;
    flex-direction: column;
    align-self: flex-end;
    align-items: center;
    gap: 8px;
  }
`;

const TextLink = styled.a`
  font-style: italic;
  text-decoration: underline;
  cursor: pointer;
  font-weight: 400;
`;

export default Header;
