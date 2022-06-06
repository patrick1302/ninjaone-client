import Spinner from '../Spinner/spinner.component';
import { Container } from './loading.styles';

const Loading = () => {
  return <Container><Spinner fontSize={40} color="#000" /></Container>;
};

export default Loading;
