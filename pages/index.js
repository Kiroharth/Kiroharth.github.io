import { Container, Box, Heading } from '@chakra-ui/react'

const Page = () => {
    return( 
        <Container>
            <Box borderRadius="lg" bg="red" p={3} mb={6} align="center">
                Hello, I'm Kashirin Kito a developer based in Germany.
            </Box>

            <Box display={{md: 'flex'}}>
                <Box felxGrow={1}>
                    <Heading as="h2" variant="page-title">
                        Kashirin Kito
                    </Heading>
                    <p>App Developer (TrackTrainTaste)</p>
                </Box>
            </Box>
        </Container>
    )
}

export default Page