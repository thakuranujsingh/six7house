import { Box } from "@mui/system"
import React from "react"
import { useForm, FormProvider, useFormContext } from "react-hook-form"
import { InputController } from "../inputController/inputController"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { Button } from "@mui/material"

const schema = yup
  .object()
  .shape({
    name: yup.string().required().max(100),
    email: yup.string().required().email(),
  })
  .required()

export const NewsLetterForm: React.FC = () => {
  const methods = useForm({
    resolver: yupResolver(schema),
    mode: "onBlur",
  })
  const onSubmit = data => console.log(data)

  return (
    <Box
      sx={{
        padding: "100px 0 140px",
      }}
    >
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "277px 1fr",
              gridGap: "56px",
              position: "relative",
              ".MuiInput-root":{
                  color: "#fff",
                  "&:before": {
                      borderBottomColor: "#B4B4B4"
                  }
              }
            }}
          >
            <InputController label="Name" name="name" required />
            <InputController label="Email" name="email" type="email" required />
            <Button
                sx={{ 
                    color: "#fff",
                    fontSize: "24px",
                    position: "absolute",
                    right: 0,
                    top: "30px"
                }}
                type="submit"
            >
                Subscribe
            </Button>
          </Box>
          
          
        </form>
      </FormProvider>
    </Box>
  )
}
