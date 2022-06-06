import Typography from '../Typography/typography.component';
import { Container } from './empty.styles';

const EmptyDevice = () => {
    return (
        <Container>
            <Typography fontSize="24" fontWeight='600'>There is no device registered</Typography>
        </Container>
    )
}

export default EmptyDevice;