import ProductFilters from "../../components/ProductFilters";
export default async function Product({ params }: { params: Promise<{ id: string }>; }) {
      const {id}=await params;
  return(<div>
    <h1>product page</h1> 
    <p>Product ID: {id}</p>
    <ProductFilters/>
    </div >
  )
}