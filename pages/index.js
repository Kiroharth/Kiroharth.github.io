import { Container, Box, Heading, Image } from '@chakra-ui/react'

const Page = () => {
    return( 
        <Container>

            <Box display={{md: 'flex'}}>
                <Box flexGrow={1}>
                    <Heading as="h2" variant="page-title">
                        Kashirin Kito
                    </Heading>
                    <p>App Developer (TrackTrainTaste)</p>
                </Box>
                <Box flexShrink={0} mt={{base: 4, md: 0, }} ml={{md: 6}} align="center" >
                    <Image 
                    borderColor="whiteAlpha.800" 
                    borderWidth={2} 
                    borderStyle="solid" 
                    maxWidth="100px" 
                    display="inline-block" 
                    borderRadius="full" 
                    src="/images/KashirinKito.jpg" 
                    alt="Profile Picture"
                    />
                </Box>
            </Box>
        </Container>
    )
}

export default Page