import logo from '../../assets/error-B1_ZqxX0.svg'

export default function ServerError() {

  return <>
    <div className="lg:px-10 py-8 container px-5 mx-auto">
      <div className="lg:gap-5 flex flex-col justify-center w-full h-screen gap-10">
        <div><img src={logo} alt="error-img" />
        </div>
      </div>
    </div>

  </>
}