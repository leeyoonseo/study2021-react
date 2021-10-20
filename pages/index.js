// https://nextjs.org/docs/advanced-features/dynamic-import
import dynamic from 'next/dynamic'

const DynamicComponentWithCustomLoading = dynamic(
  () => import('../components/hello/hello'),
  { ssr: false }
)

function Home() {
  return (
    <div>
      {/* <Header /> */}
      <DynamicComponentWithCustomLoading />
      <p>HOME PAGE is here!</p>
    </div>
  )
}

export default Home