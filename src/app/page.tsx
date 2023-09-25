import styles from './page.module.css'
import Suggestions from "src/components/carousels/suggestions";
import ProductTable, {data} from "src/components/tables/products";
import axios, {AxiosResponse} from "axios";
import Filter from "src/components/filter";
import s from './page.module.css'

async function getData():Promise<AxiosResponse>{
    return await axios.get<data>('http://localhost:3000/api/domains?page=1')
}
export default async function Home() {

    const domains = await getData()



    return (
    <main className={styles.main}>
        <div className = {'container'}>
            <Suggestions />

            <div className={s.product_wrapper}>
                <div className = {s.filter}>
                    <Filter />
                </div>
                <div className={s.domain_list}>
                    <ProductTable data={domains.data} />
                </div>
            </div>
        </div>
    </main>
  )
}
