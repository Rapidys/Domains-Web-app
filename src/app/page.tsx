import styles from './page.module.css'
import Suggestions from "src/components/carousels/suggestions";
import ProductTable from "src/components/tables/products";
import Filter from "src/components/filter";
import s from './page.module.css'
import {getDomains, getDomainZones, getFilterReferences} from "src/services/domains";
import DomainsContextProvider from "src/context/domainsContext/DomainsContextProvider";
import CartContextProvider from "src/context/cartContext/CartContextProvider";


export default async function Home() {

    const domains = await getDomains()
    const references = await getFilterReferences()
    const domainZones = await getDomainZones()

    return (
    <main className={styles.main}>
        <div className = {'container'}>
            <Suggestions />

            <DomainsContextProvider Products={domains.data} references = {references} domainZones = {domainZones}>
                    <div className={s.product_wrapper}>
                        <div className = {s.filter}>
                            <Filter  onFind = {false}/>
                        </div>
                        <div className={s.domain_list}>
                            <ProductTable />
                        </div>
                    </div>
            </DomainsContextProvider>
        </div>
    </main>
  )
}
