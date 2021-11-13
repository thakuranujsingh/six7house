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
    firstName: yup.string().required().max(100),
    lastName: yup.string().required().max(100),
    email: yup.string().required().email(),
    message: yup.string().required().max(700),
  })
  .required()

export const ContactUs: React.FC = () => {
  const methods = useForm({
    resolver: yupResolver(schema),
    mode: "onBlur",
  })
  const onSubmit = data => console.log(data)

  return (
    <Box
      sx={{
        paddingTop: "50px",
      }}
    >
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "0.6fr 1fr",
              gridGap: "56px",
            }}
          >
            <InputController label="First name" name="firstName" required />
            <InputController label="Last name" name="lastName" required />
          </Box>
          <InputController label="Email" name="email" type="email" required />
          <InputController name="message" label="message" required />
          <Button
            sx={{ marginTop: "16px" }}
            variant="contained"
            color="primary"
            type="submit"
          >
            Sent Message
          </Button>
        </form>
      </FormProvider>
    </Box>
  )
}
