import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

export default function MySelect(props: {
  tags: string[];
  activeTag: string;
  setActiveTag: (tag: string) => void;
}) {
  return (
    <FormControl className="w-full">
      <InputLabel>Choose a tag</InputLabel>
      <Select
        value={props.activeTag}
        onChange={(e) => props.setActiveTag(e.target.value)}
      >
        {props.tags.map((tag, index) => (
          <MenuItem key={index} value={tag}>
            {tag}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
