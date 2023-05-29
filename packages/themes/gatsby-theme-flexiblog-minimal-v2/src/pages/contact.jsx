import React from 'react'
import { Layout, Stack, Main } from '@layout'
import PageTitle from '@components/PageTitle'
import Divider from '@components/Divider'
import Seo from '@widgets/Seo'
import ContactForm from '@widgets/ContactForm'

export default props => (
  <Layout {...props}>
    <Seo title='Contact' />
    <Divider />
    <Stack>
      <Main>
        <PageTitle
          header="تواصل معي"
          subheader='يمكنك التواصل مع الدكتور محمد شمس عبر ارسال ايميل من خلال النموذج المرافق وسنقوم بالرد عليكم في أسرع وقت'
        />
        <Divider />
        <ContactForm />
      </Main>
    </Stack>
  </Layout>
)
