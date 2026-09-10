export const Objects = () => {
    const obj = {name: 'john', surname: 'smit'};
	
	return <p>
        <span> name: {obj.name}</span> <br />
        <span> surname: {obj.surname}</span>
	</p>;
}