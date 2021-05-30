import * as Yup from 'yup'

export const initialValuesForm = {
  postcode: ''
}

export const postcodeScheme = Yup.object().shape({
  postcode: Yup.string()
  .min(2, 'Too short')
  .max(7, 'Too long')
  .required('Required postcode')
})
