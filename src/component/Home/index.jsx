import Layout from "../shared/layout"
import Hero from "../Hero"
import Gallary from "../Gallary"
import Product from "../product"
const Home = () => {
    return (
        <Layout>
            <div className="w-full">
                <Hero />
                <Gallary />
                <Product />
            </div>
        </Layout>

    )
}
export default Home