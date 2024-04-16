import { StyledTableRow, StyledTableCell } from './myStyledTable';
import { StyledImage } from './myStyledImage';

export interface Pokemon {
    number: string;
    ThumbnailImage: string;
    name: string;
    type: string[];
    abilities: string[];
}

export default function MyTableRow(props: { data: Pokemon; headers: string[] }) {
    return (
        <StyledTableRow>
            {props.headers.map((header, index) => (
                <StyledTableCell key={index}>
                    {(() => {
                        switch (header) {
                            case "Pic":
                                return <StyledImage src={props.data.ThumbnailImage} alt={props.data.name}/>;
                            case "Name":
                                return props.data.name;
                            case "Number":
                                return props.data.number;
                            case "Type":
                                return props.data.type.join(", ");
                            case "Abilities":
                                return props.data.abilities.join(", ");
                            default:
                                return null;
                        }
                    })()}
                </StyledTableCell>
            ))}
        </StyledTableRow>
    );
}
    