import React from "react";
import styled from "styled-components";
import { Social_Icons } from "../../constant/socials";

const FooterWrapper = styled.footer`
    width: 100%;
    padding: 20px 40px;
    background: #1a202c;
    color: #e5e7eb;
    text-align: center;
`;

const Paragraph = styled.p`
    font-size: 1rem;
`;

const Highlight = styled.span`
    font-weight: 600;
    background: linear-gradient(to right, #a855f7, #f97316);
    -webkit-background-clip: text;
    color: transparent;
`;

const SocialIconsWrapper = styled.div`
    display: flex;
    justify-content: center;
    padding-bottom: 10px;
`;

const SocialIconLink = styled.a`
    margin: 0 10px;
    z-index: 0;
`;

const SocialIconImage = styled.img`
    height: 30px;
    width: 30px;
`;

const Footer: React.FC = () => (
    <FooterWrapper>
        <SocialIconsWrapper>
            {Social_Icons.map((social) => (
                <SocialIconLink href={social.link} key={social.alt}>
                    <SocialIconImage src={social.image} alt={social.alt} />
                </SocialIconLink>
            ))}
        </SocialIconsWrapper>
        <Paragraph>
            Made with ❤️ using <Highlight>React</Highlight>{" "}
        </Paragraph>
    </FooterWrapper>
);

export default Footer;
