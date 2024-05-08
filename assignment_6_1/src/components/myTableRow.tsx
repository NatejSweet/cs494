import { StyledTableRow, StyledTableCell } from './myStyledTable';
import { StyledImage } from './myStyledImage';
import { Pokemon } from '../types/Pokemon';

export default function MyTableRow(props: { data: Pokemon; headers: string[] }) {
    return (
        <StyledTableRow>
            {props.headers.map((header, index) => (
                <StyledTableCell key={index}>
                    {(() => {
                        switch (header) {
                            case "Image":
                                return <StyledImage src={props.data.thumbnailImage} alt={props.data.name}/>;
                            case "Name":
                                return props.data.name;
                            case "Number":
                                return props.data.num;
                            case "Type":
                                return props.data.type.join(", ");
                            case "Abilities":
                                return props.data.abilities.join(", ");
                            case "Weakness":
                                return props.data.weakness.join(", ");
                            case "Height":
                                return props.data.height;
                            case "Weight":
                                return props.data.weight;
                            
                            default:
                                return null;
                        }
                    })()}
                </StyledTableCell>
            ))}
        </StyledTableRow>
    );
}
    