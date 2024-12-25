
export default function Checkout() {
  return <>
 <main className="container px-4 mx-auto overflow-hidden">
  <section className="lg:mx-24 lg:px-8 px-2 py-12">
    <h2 className="mb-8 text-3xl font-semibold text-gray-500">Checkout</h2>
    <form className="select-none">
      <div className="mb-6">
        <div className="flex justify-between mb-3">
          <label className="text-sm font-medium" htmlFor="phone">Phone</label>
        </div>
        <input type="tel" id="phone" placeholder="Phone Number..." className="h-[45px] w-full rounded-lg border border-solid border-gray-300 px-4 focus:shadow-input-focus focus:outline-none font-medium py-2" defaultValue />
      </div><div className="mb-6">
        <div className="flex justify-between mb-3">
          <label className="text-sm font-medium" htmlFor="city">City</label>
        </div><div className="flex">
          <input type="text" id="city" placeholder="Write Your City..." className="h-[45px] w-full rounded-lg border border-solid border-gray-300 px-4 focus:shadow-input-focus focus:outline-none font-medium py-2" defaultValue /></div>
      </div>
      <div className="mb-6">
        <div className="flex justify-between mb-3">
          <label className="text-sm font-medium" htmlFor="address">Details</label>
        </div>
        <div className="flex">
          <textarea id="address" placeholder="Write Your Address Here..." cols={30} rows={3} maxLength={200} className="focus:shadow-input-focus focus:outline-none w-full px-4 py-2 font-medium border border-gray-300 border-solid rounded-lg" defaultValue={""} />
        </div>
      </div>
      <div className="flex flex-col gap-6">
        <div className="flex items-center mb-4">
          <input id="cash" type="radio" className="w-5 h-5" defaultValue="cash" />
          <label htmlFor="cash" className="ms-2 text-lg font-bold text-teal-600">Cash Payment</label>
        </div>
        <div className="flex items-center">
          <input id="online" type="radio" className="w-5 h-5" />
          <label htmlFor="online" className="ms-2 text-lg font-bold text-teal-600">Online Payment</label>
        </div>
        <button disabled type="submit" className="hover:bg-teal-700 focus:ring-teal-300 disabled:opacity-65 disabled:cursor-not-allowed flex-1 w-full px-4 py-2 mx-auto mt-5 font-semibold text-center text-white transition-all duration-300 bg-teal-500 rounded-lg cursor-pointer">Continue with</button>
      </div>
    </form>
  </section>
</main>

    </>
  
}
