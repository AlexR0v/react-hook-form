import { Typography } from '@material-ui/core'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useHistory } from 'react-router'
import { useData } from './components/DataContext'
import { Form } from './components/Form'
import { Input } from './components/Input'
import { MainContainer } from './components/MainContainer'
import { PrimaryButton } from './components/PrimaryButton'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

const schema = yup.object().shape({
  firstName: yup
    .string()
    .matches(/^([^0-9]*)$/, 'First name should not contain numbers')
    .required('First name is a required field'),
  lastName: yup
    .string()
    .matches(/^([^0-9]*)$/, 'Last name should not contain numbers')
    .required('Last name is a required field'),
})

const Step1 = () => {
  const { setValues, data } = useData()
  const { register, handleSubmit, errors } = useForm({
    defaultValues: { firstName: data.firstName, lastName: data.lastName },
    mode: 'onBlur',
    resolver: yupResolver(schema),
  })
  const history = useHistory()

  console.log(data)

  const onSubmit = (data) => {
    history.push('./step2')
    setValues(data)
  }

  return (
    <MainContainer>
      <Typography
        component='h2'
        variant='h5'
      >Step1</Typography>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          ref={register}
          id='firstName'
          type='text'
          label='First Name'
          name='firstName'
          error={!!errors.firstName}
          helperText={errors?.firstName?.message}
        />
        <Input
          ref={register}
          id='lastName'
          type='text'
          label='Last Name'
          name='lastName'
          error={!!errors.lastName}
          helperText={errors?.lastName?.message}
        />
        <PrimaryButton>Next</PrimaryButton>
      </Form>

    </MainContainer>
  )
}

export default Step1
