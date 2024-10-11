import Link from 'next/link'
import Image from 'next/image'
import {Text, useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'

const LogoBox = styled.span`
    font-weight: bold;
    font-size: 18px;
    display: inline-flex;
    align-itmes: center;
    height: 50px;
    line-height: 20px
    padding: 10px

    &:hover img {
        transform: rotate(20deg);
    }
`

const Logo = ( ) => {
    const footPrintImg = `/Images/Logo${useColorModeValue('', '-dark')}.png`
    return (
        <Link href="/">
                <LogoBox>
                    <Image src={footPrintImg} width={50} height={50} alt='logo' />
                    <Text color={useColorModeValue('gray.800', 'whiteAlpha.900')} fontFamily='M PLUS Rounded 1c' fontWeight="bold" ml={3} marginTop={3.5}>
                        Kashirin Kito
                    </Text>
                </LogoBox>
        </Link>
    )
}

export default Logo