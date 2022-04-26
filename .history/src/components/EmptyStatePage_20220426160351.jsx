import {Page, Layout, EmptyState} from '@shopify/polaris'

const img = 'https://cdn.shopify.com/s/files/1/0757/9955/files/empty-state.svg'

export function EmptyStatePage() {
  return (
    <Page>
      <Layout>
        <Layout.Section>
          <EmptyState
            heading="Discount your products temporarily"
            action={{
              content: 'Select products',
              onAction: () => setOpen(true),
            }}
            image={img}
            imageContained>
            <p>Select products to change their price temporarily.</p>
          </EmptyState>
        </Layout.Section>
      </Layout>
    </Page>
  )
}
