import { CSSProperties } from 'react';
import './Low.css';
interface Props {
	classColorName: string;
}
const Low = ({ classColorName }: Props) => {
	const styles: CSSProperties = { display: 'inline-block' };
	return (
		<div className={classColorName} style={styles}>
			<svg
				width='32'
				height='32'
				viewBox='0 0 32 32'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
			>
				<path
					d='M19.8917 6.91939C19.8917 4.77378 18.1456 3.02771 16 3.02771C13.8544 3.02771 12.1083 4.77378 12.1083 6.91939V18.7916C10.8785 19.8943 10.1625 21.4704 10.1625 23.1347C10.1625 26.3545 12.7816 28.9723 16 28.9723C19.2184 28.9723 21.8375 26.3545 21.8375 23.1347C21.8375 21.4717 21.1215 19.893 19.8917 18.7916V6.91939ZM16 26.3778C14.2124 26.3778 12.7569 24.9236 12.7569 23.1347C12.7569 22.0814 13.2771 21.089 14.1489 20.478L14.7028 20.0902V6.91939C14.7028 6.20462 15.2852 5.62217 16 5.62217C16.7148 5.62217 17.2972 6.20462 17.2972 6.91939V20.0915L17.8511 20.4793C18.7229 21.0877 19.2431 22.0814 19.2431 23.1347C19.2431 24.9236 17.7876 26.3778 16 26.3778Z'
					fill='currentcolor'
				/>
				<circle cx='16' cy='23.176' r='1.75506' fill='currentcolor' />
			</svg>
		</div>
	);
};

export default Low;
