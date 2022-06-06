import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

function Spinner({ fontSize, color }: { fontSize: number; color: string }) {
    const antIcon = <LoadingOutlined style={{ fontSize, color }} spin />;

    return <Spin indicator={antIcon} />;
}

export default Spinner;
