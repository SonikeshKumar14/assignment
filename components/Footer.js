import Image from "next/image";
const Footer = () => {
    return <div className="w-full flex justify-center" style={{ backgroundImage: "linear-gradient(180deg, #1FB3A5 0%, #18A1A7 100%)", height:'72px' , maxWidth:'100%'}}>
     <Image 
      src="/images/footer.png"
      alt="footer"
       height={64}
       width={1200}
     />

     </div> 
}

export default Footer;