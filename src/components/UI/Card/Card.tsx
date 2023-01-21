import { CSSProperties, ReactNode } from 'react';
import './Card.css';

interface Props {
	backColor: string;
	heightpx?: number;
	children: ReactNode;
}

const Card = ({ backColor, heightpx, children }: Props) => {
	const styles: CSSProperties = { backgroundColor: backColor, height: heightpx };
	return (
		<div className='card' style={styles}>
			{children}
		</div>
	);
};

export default Card;
