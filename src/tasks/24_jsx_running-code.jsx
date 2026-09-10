export const RunningCode1 = () => {
    const num1 = 3;
	const num2 = 2;
	
	return <div>
		result: {num1 ** num2}
	</div>;
}

export const RunningCode2 = () => {
    const name = 'john';
	const surname = 'smit';
	
	return <div>
		result: {name + ' ' + surname}
	</div>;
}

export const RunningCode3 = () => {
    const num = 4;
	
	return <div>
		result: {Math.sqrt(num)}
	</div>;
}