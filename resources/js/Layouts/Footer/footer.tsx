import { Link } from "@inertiajs/react"
import { 
  CTAWrapper,
  FooterDescription,
  InnerBlock, 
  Logo, 
  SectionHeading, 
  SocialMediaItem, 
  SocialMedias, 
  Wrapper } from "./footer.styled"


const Footer = () =>{

  return (
    <Wrapper>
      <InnerBlock>
        <Link href={ route("home") }>
          <Logo xmlns="http://www.w3.org/2000/svg" width="195" height="36" viewBox="0 0 195 36">
            <g id="logo" transform="translate(-101)">
              <text id="PlumeBooks" transform="translate(135 28)" fill="#fff" fontSize="26" fontFamily="NotoSans-Bold, Noto Sans" fontWeight="700"><tspan x="0" y="0">PlumeBooks</tspan></text>
              <path id="plume-book" d="M1.5,6h6A1.5,1.5,0,0,1,9,7.5v21A1.5,1.5,0,0,1,7.5,30h-6A1.5,1.5,0,0,1,0,28.5V7.5A1.5,1.5,0,0,1,1.5,6ZM3,19.5v6a1.5,1.5,0,1,0,3,0v-6a1.5,1.5,0,1,0-3,0ZM12,0h6a1.5,1.5,0,0,1,1.5,1.5v27A1.5,1.5,0,0,1,18,30H12a1.5,1.5,0,0,1-1.5-1.5V1.5A1.5,1.5,0,0,1,12,0Zm1.5,16.5v9a1.5,1.5,0,0,0,3,0v-9a1.5,1.5,0,1,0-3,0ZM22.5,3h6A1.5,1.5,0,0,1,30,4.5v24A1.5,1.5,0,0,1,28.5,30h-6A1.5,1.5,0,0,1,21,28.5V4.5A1.5,1.5,0,0,1,22.5,3ZM24,22.5v3a1.5,1.5,0,0,0,3,0v-3a1.5,1.5,0,0,0-3,0Z" transform="translate(101 3)" fill="#ff4747" fillRule="evenodd" opacity="0.9"/>
            </g>
          </Logo>
        </Link>
        <FooterDescription>PlumeBooks is an online bookstore with a vast collection of books across genres. Our user-friendly platform offers a seamless shopping experience at the best prices. Thank you for choosing PlumeBooks for all your reading needs.</FooterDescription>
      </InnerBlock>
      <InnerBlock>
        <nav>
          <SectionHeading>Follow us</SectionHeading>
          <SocialMedias>
            <SocialMediaItem>
              <a 
                href="#"
                target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                  <path id="facebook-round-svgrepo-com" d="M-127,145a16,16,0,0,0-16,16,16,16,0,0,0,16,16,16,16,0,0,0,16-16A16,16,0,0,0-127,145Zm3.531,13.288-.181,2.394h-2.456v8.313h-3.1v-8.312h-1.656v-2.394h1.656v-1.606a4.331,4.331,0,0,1,.531-2.481,2.943,2.943,0,0,1,2.569-1.206,10.276,10.276,0,0,1,2.962.3l-.412,2.45a5.545,5.545,0,0,0-1.331-.2c-.644,0-1.219.231-1.219.875v1.869Z" transform="translate(143 -145)" fill="#fff"/>
                </svg>
              </a>
            </SocialMediaItem>
            <SocialMediaItem>
              <a 
                href="#"
                target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                  <path id="twitter-round-svgrepo-com" d="M-127,145a16,16,0,0,0-16,16,16,16,0,0,0,16,16,16,16,0,0,0,16-16A16,16,0,0,0-127,145Zm6.387,13.512c.006.137.006.281.006.425a9.293,9.293,0,0,1-9.356,9.356A9.3,9.3,0,0,1-135,166.819a6.507,6.507,0,0,0,.788.044,6.6,6.6,0,0,0,4.081-1.406,3.279,3.279,0,0,1-3.069-2.281,3.352,3.352,0,0,0,.619.056,3.07,3.07,0,0,0,.869-.119,3.287,3.287,0,0,1-2.638-3.225v-.037a3.329,3.329,0,0,0,1.488.412,3.292,3.292,0,0,1-1.462-2.738,3.314,3.314,0,0,1,.444-1.656,9.326,9.326,0,0,0,6.775,3.438,3.244,3.244,0,0,1-.088-.75,3.292,3.292,0,0,1,3.287-3.287,3.293,3.293,0,0,1,2.4,1.037,6.55,6.55,0,0,0,2.088-.8,3.3,3.3,0,0,1-1.444,1.819,6.6,6.6,0,0,0,1.888-.519A6.641,6.641,0,0,1-120.613,158.512Z" transform="translate(143 -145)" fill="#fff"/>
                </svg>
              </a>
            </SocialMediaItem>
            <SocialMediaItem>
              <a 
                href="#"
                target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                  <g id="instagram-round-svgrepo-com" transform="translate(143 -145)">
                    <path id="Path_1" data-name="Path 1" d="M70.906,361.438a2.816,2.816,0,1,0-2.806-2.819A2.823,2.823,0,0,0,70.906,361.438Z" transform="translate(-197.906 -197.625)" fill="#fff"/>
                    <path id="Path_2" data-name="Path 2" d="M170.712,305.212V302.5h-.35l-2.363.006.012,2.712Z" transform="translate(-291.563 -147.656)" fill="#fff"/>
                    <path id="Path_3" data-name="Path 3" d="M20.813,376.344a4.375,4.375,0,1,1-8.425-1.644H10v6.55a1.534,1.534,0,0,0,1.531,1.531h9.813a1.534,1.534,0,0,0,1.531-1.531V374.7H20.487A4.237,4.237,0,0,1,20.813,376.344Z" transform="translate(-143.438 -215.344)" fill="#fff"/>
                    <path id="Path_4" data-name="Path 4" d="M-127,145a16,16,0,0,0-16,16,16,16,0,0,0,16,16,16,16,0,0,0,16-16A16,16,0,0,0-127,145Zm8,14.356v6.55A3.1,3.1,0,0,1-122.094,169h-9.812A3.1,3.1,0,0,1-135,165.906v-9.819a3.1,3.1,0,0,1,3.094-3.094h9.813A3.1,3.1,0,0,1-119,156.087Z" fill="#fff"/>
                  </g>
                </svg>
              </a>
            </SocialMediaItem>
          </SocialMedias>
        </nav>
        <CTAWrapper>
          <Link href={ route("books") }>Get your books now</Link>
        </CTAWrapper>
      </InnerBlock>
    </Wrapper>
  )
}


export default Footer