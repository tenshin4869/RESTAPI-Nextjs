import Image from "next/image";
import Layout from "../components/Layout";

function Contact() {
  return (
    <Layout title="Contact">
      <div className="bg-white text-center shadow-xl p-8 w-80 rounded">
        <div className="mt-4">
          <p className="font-bold">Contact info</p>
        </div>
        <div className="flex justify-center mt-4">
          <Image
            className="rounded-full"
            src="/icon.jpg"
            width={60}
            height={60}
            alt="Icon"
          />
        </div>
        <div className="mt-4">
          <p className="font-bold">Address</p>
          <p className="text-xs mt-2 text-gray-600">city A</p>
          <p className="font-bold mt-3">E-mail</p>
          <p className="text-xs mt-2 text-gray-600">aaaaa@gmail.com</p>
          <p className="font-bold mt-3">Phone</p>
          <p className="text-xs mt-2 text-gray-600">ooo-ooo-ooo</p>
        </div>
      </div>
    </Layout>
  );
}

export default Contact;
