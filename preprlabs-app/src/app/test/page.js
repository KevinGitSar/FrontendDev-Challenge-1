import AccessibilityButton from "../components/accessibilityButton";
import Navbar from "../components/navbar";
import Footer from "../components/footer";


export default function test() {
  return (
    <div>
      <Navbar />
      <AccessibilityButton />
      <div className="h-screen">
        <h1 className="mt-36">TITLE PAGE</h1>
      </div>
      <Footer />
    </div>
  )
}
