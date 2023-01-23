import React from 'react'
import "./Modal.scss"
import { useFormik } from "formik"
import * as Yup from "yup"
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'

function Modal({ modal, id, setModal }) {
    let [nftIds, setNftIds] = useState("")

    // useEffect(() => {

    // }, [nftIds])

    const artistShema = Yup.object().shape({
        name: Yup.string().min(1, "Min symbol 1!").max(30, "Max symbol 30!").required("Please write name!"),
        price: Yup.number("Pleas write number").required("Please write price!"),
        bid: Yup.number("Pleas write number").required("Password is Highest Bid!"),
    })
    const formik = useFormik({
        initialValues: {
            name: "",
            price: "",
            bid: "",
        },
        validateOnBlur: "",
        validationSchema: artistShema,
        onSubmit: values => {
            axios.post("http://localhost:8080/api/nft/create", {
                artistId: id,
                name: values.name,
                price: values.price,
                bid: values.bid,
            })
                .then(() => {
                    axios.get("http://localhost:8080/api/nft").then(res =>
                        res.data.map(value => {
                            setNftIds(value._id)
                        })
                    )
                })
                .then(() => {
                    axios.post(`http://localhost:8080/api/artist/nfts/${id}`, {
                        data: nftIds
                    })
                    console.log("data is send")
                })
                .catch((i) => console.log(i, "data is not send"))

        }
    })


    return (
        <div className={`${modal ? "modal" : "unModal"}`}>
            <div className='modal_bg'></div>
            <div className='modalPage'>
                <span onClick={() => setModal(false)}>⨉</span>
                <div className="modalPage__top">
                    <h4><p>Create</p> a new NFT</h4>
                </div>
                <form onSubmit={formik.handleSubmit} className="modalPage__content">
                    {formik.errors.name && formik.touched.name ? (<div className='errorMessage'>{formik.errors.name}</div>) : null}
                    <input type="text" name="name" placeholder='Name' onChange={formik.handleChange} onBlur={formik.handleBlur} />

                    {formik.errors.price && formik.touched.price ? (<div className='errorMessage'>{formik.errors.price}</div>) : null}
                    <input type="text" name="price" placeholder='Price' onChange={formik.handleChange} onBlur={formik.handleBlur} />

                    {formik.errors.bid && formik.touched.bid ? (<div className='errorMessage'>{formik.errors.bid}</div>) : null}
                    <input type="text" name="bid" placeholder='Highest Bid' onChange={formik.handleChange} onBlur={formik.handleBlur} />
                    <button type='submit' onClick={() => {
                    }} >Create</button>
                </form>
            </div>
        </div>
    )
}

export default Modal


// sozdat nft i otravit ego id k serveru