import React from "react";
import styled from "styled-components";
import avatar from "../../assets/avatar.svg";
import { ActionButton } from '../elements/Buttons/ActionButton';

const Profile = () => {
  return (
    <ProfileContainer>
      <ProfileBox>
        <StyledDivFlex flexGrow="2">
          <div>
            <StyledDivFlex justCont="space-between" margin="0 0 20px 0">
              <StyledImg src={avatar} alt="Avatar" />
              <StyledDivFlexColumn
                margin="0"
                justCont="space-between"
                width="100%"
              >
                <div>
                  <h1>John Doe</h1>
                  <StyledH4>Developer</StyledH4>
                  <StyledH5>Mentor</StyledH5>
                </div>
                <StyledDivFlex margin="0" justCont="space-between">
                  <div>
                    <i className="fas fa-link"></i>{" "}
                    <StyledA
                      href="http://"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      thisismywebsite
                    </StyledA>
                  </div>
                  <div>
                    <i className="fab fa-github"></i>{" "}
                    <StyledA
                      href="http://"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      John Doe
                    </StyledA>
                  </div>
                </StyledDivFlex>
              </StyledDivFlexColumn>
            </StyledDivFlex>
            <div>
              <p>
                I am awesome developer with skyrocket experience in machine
                learning. Actually I am an Super inteligent quantum computer and
                I sold the world
              </p>
              <ActionButton
                float="right"
                margin={"1em 0 1em 2em"}
                name={"Send Message"}
              />
            </div>
          </div>
          <div>
            <div>
              This will be skills area
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi
                iste voluptas esse, dolorum
              </p>
            </div>
          </div>
        </StyledDivFlex>
      </ProfileBox>
    </ProfileContainer>
  );
};

export default Profile;

const ProfileContainer = styled.div`
  margin: 100px auto;
  max-width: 1000px;
`;
const ProfileBox = styled.div`
  padding: 20px;
  margin: 10px auto;
  background-color: #f1f6f9;
`;
const StyledImg = styled.img`
  display: block;
  padding-right: 20px;
`;
const StyledDivFlex = styled.div`
  display: flex;
  margin: ${props => props.margin || "10px"};
  flex-grow: ${({ flexGrow }) => flexGrow || 0};
  justify-content: ${({ justCont }) => justCont || "start"};
  width: ${({ width }) => width || "auto"};
`;
const StyledDivFlexColumn = styled(StyledDivFlex)`
  flex-direction: column;
`;
const StyledH4 = styled.h4`
  color: var(--SecondaryDarker);
`;
const StyledH5 = styled.h5`
  color: var(--SecondaryBasic);
`;
const StyledA = styled.a`
  margin: ${props => props.margin || "0"};
  text-decoration: none;
  color: #000;
`;
