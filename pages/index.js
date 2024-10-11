import { Container, Box, Heading } from '@chakra-ui/react'

const Page = () => {
    return( 
        <Container>

            <Box display={{md: 'flex'}}>
                <Box flexGrow={1}>
                    <Heading as="h2" variant="page-title" marginTop={5}>
                        Kashirin Kito
                    </Heading>
                    <p>App Developer (TrackTrainTaste)</p>
                </Box>
            </Box>
        </Container>
    )
}

export default Page