import { TextField, TextFieldProps } from "@mui/material"
import React from "react"
import { useFormContext, Controller } from "react-hook-form"

export const InputController: React.FC<TextFieldProps> = props => {
  const { control } = useFormContext()

  return (
    <Controller
      control={control}
      name={props.name}
      rules={{ required: props.required }}
      render={({ field, fieldState: { error, invalid } }) => (
        <TextField
          {...props}
          variant="standard"
          {...field}
          label={`${props.required && "*"}${props.label}`}
          required={false}
          sx={{
            width: "100%",
            fontSize: "30px",
            marginBottom: "45px",
            label: {
              color: "#B4B4B4 !important",
              "span": {
                  color: "inherit !important"
              }
            },
          }}
          error={invalid}
          helperText={error?.message}
        />
      )}
    />
  )
}
