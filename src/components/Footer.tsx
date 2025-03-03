import React from "react";
import styled from "styled-components";

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

const Footer: React.FC = () => (
    <FooterWrapper>
        <Paragraph>
            Made with <Highlight>React</Highlight> and{" "}
            <Highlight>Styled Components</Highlight>
        </Paragraph>
    </FooterWrapper>
);

export default Footer;
