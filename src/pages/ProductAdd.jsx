import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from "yup"
import { Button, FormField, Label } from 'semantic-ui-react'
import KodlamaIoTextInput from '../utilities/KodlamaIoTextInput'

export default function ProductAdd() {

    const initialValues = {productName:"", unitPrice:10}

    const schema = Yup.object({
        productName: Yup.string().required("Ürün adı zorunlu"),
        unitPrice: Yup.number().required("Ürün fiyatı zorunlu"),
    })

    return (
        <div>
            <Formik
            initialValues = {initialValues}
            validationSchema = {schema}
            onSubmit = {(values) => {
                console.log(values)
            }}
            >
                <Form className="ui form">
                <KodlamaIoTextInput name="productName" placeholder="Ürün adı"></KodlamaIoTextInput>
                <KodlamaIoTextInput name="unitPrice" placeholder="Ürün fiyatı"></KodlamaIoTextInput>
                <Button color="green" type="submit"> OK </Button>
                </Form>

            </Formik>
        </div>
    );
}
