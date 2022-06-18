import Button from "app/core/components/Button"
import Card from "app/core/components/Card"
import { BlitzPage } from "blitz"

const RenderComponent: BlitzPage = () => {
  return (
    <div className="flex justify-center h-[100vh] items-center bg-black">
      <Card title="Pengeluaran" content="100.000 Rp">
        <Button>asd</Button>
      </Card>
    </div>
  )
}

export default RenderComponent
