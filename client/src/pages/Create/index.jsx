import React from 'react'
import "./Create.scss"
import { useFormik } from "formik"
import axios from "axios"
import * as Yup from "yup"

function Create() {

  const artistShema = Yup.object().shape({
    nameAndSurname: Yup.string().min(1, "Min symbol 1!").max(30, "Max symbol 30!").required("Please write name and Surname!"),
    userName: Yup.string().min(1, "Min symbol 1!").required("Please write surname!"),
    password: Yup.string().min(4, "Min symbol 4!").max(30, "Max symbol 30!").required("Password is Required!"),
    change: Yup.number().required("Please write change!"),
    sold: Yup.number().required("Please write how much sold!"),
    volume: Yup.number().required("Please write Volume!"),
  })

  const formik = useFormik({
    initialValues: {
      nameAndSurname: "",
      userName: "",
      password: "",
      change: "",
      sold: "",
      volume: "",
    },
    validateOnBlur: "",
    validationSchema: artistShema,
    onSubmit: values => {
      console.log(values)
      axios.post("http://localhost:8080/api/create", {
        nameAndSurname: values.nameAndSurname,
        userName: values.userName,
        password: values.password,
        change: values.change,
        sold: values.sold,
        volume: values.volume,
      })
    }
  })

  return (

    <div className='createArtist'>
      <form onSubmit={formik.handleSubmit} className='createArtist__form'>
        {formik.errors.nameAndSurname && formik.touched.nameAndSurname ? (<div className='errorMessage'>{formik.errors.nameAndSurname}</div>) : null}
        <input type="text" name="nameAndSurname" placeholder='Name & Surname' onChange={formik.handleChange} onBlur={formik.handleBlur} />

        {formik.errors.userName && formik.touched.userName ? (<div className='errorMessage'>{formik.errors.userName}</div>) : null}
        <input type="text" name="userName" placeholder='User name' onChange={formik.handleChange} onBlur={formik.handleBlur} />

        {formik.errors.password && formik.touched.password ? (<div className='errorMessage'>{formik.errors.password}</div>) : null}
        <input type="text" name="password" placeholder='Password' onChange={formik.handleChange} onBlur={formik.handleBlur} />

        {formik.errors.change && formik.touched.change ? (<div className='errorMessage'>{formik.errors.change}</div>) : null}
        <input type="text" name="change" placeholder='Change' onChange={formik.handleChange} onBlur={formik.handleBlur} />

        {formik.errors.sold && formik.touched.sold ? (<div className='errorMessage'>{formik.errors.sold}</div>) : null}
        <input type="text" name="sold" placeholder='Sold' onChange={formik.handleChange} onBlur={formik.handleBlur} />

        {formik.errors.volume && formik.touched.volume ? (<div className='errorMessage'>{formik.errors.volume}</div>) : null}
        <input type="text" name="volume" placeholder='Volume' onChange={formik.handleChange} onBlur={formik.handleBlur} />

        <button type='submit'>Create</button>
      </form>
    </div>
  )
}

export default Create