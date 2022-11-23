import { FormControl, FormLabel, Input, Text } from "@chakra-ui/react";

export const AppInput = ({
  label,
  name,
  onChange,
  value,

  ...rest
}) => {
  return (
    <FormControl>
      <FormLabel htmlFor={label}>{label}</FormLabel>
      <Input name={name} onChange={onChange} defaultValue={value} {...rest} />
    </FormControl>
  );
};
export default AppInput;
