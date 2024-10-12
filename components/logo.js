import Link from 'next/link'
import Image from 'next/image'
import {Text, useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'

const LogoBox = styled.span`
    font-weight: bold;
    font-size: 18px;
    display: inline-flex;
    align-items: center;
    height: 20px;
    line-height: 20px
    padding: 10px
    

    &:hover img {
        transform: rotate(20deg);
    }
`

const Logo = ( ) => {
    const footPrintImg = `/images/logo${useColorModeValue('', '-dark')}.svg`;
    return (
        <Link href="/">
                <LogoBox>
                    <Image src={footPrintImg} 
                    width={20} 
                    height={20} 
                    alt='logo'
                    style={{ transform: 'scale(4)', transformOrigin: 'center' }}
                    />
                    <Text color={useColorModeValue('gray.800', 'whiteAlpha.900')} fontFamily='M PLUS Rounded 1c' fontWeight="bold" ml={3} marginTop={0}>
                        Kashirin Kito
                    </Text>
                </LogoBox>
        </Link>
    )
}

export default Logo