import React from 'react'
import { Formik, Form, Field } from 'formik'
import * as Yup from "yup"
import { Button } from 'semantic-ui-react'

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
                   <Field name="productName" placeholder="Ürün adı"></Field>
                   <Field name="unitPrice" placeholder="Ürün fiyatı"></Field>
                   <Button color="green" type="submit"> OK </Button>
                </Form>

            </Formik>
        </div>
    )
}
