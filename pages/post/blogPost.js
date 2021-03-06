import Format from "../../layout/format";
import Author from "../../components/child/author";
import Image from "next/image";
import RelatedPage from "../../components/child/relatedPage";

export const blogPost = () => {
  return (
    <Format>
      <section className="container mx-auto md:px-2 py-16 w-3/4">
        <div className="flex justify-center">
          <Author></Author>
        </div>

        <div className="post py-10">
          <h1 className="font-bold text-4xl text-center pb-5">
            rtyuikl;/ll.kjk,hjmghnfgdfsdw tjyvhj htr4dtyjf uy d
          </h1>

          <p className="text-gray-500 text-xl text-center">
            wh d4 5shrtfxs5 rd5 6dhry6 
            hret a
          </p>

          <div className="py-10">
            <Image
              src={"/images/fluency/fluency.jpg"}
              width={900}
              height={600}
              alt={"Fluency"}
            />
          </div>

          <div className="content text-gray-600 text-lg flex flex-col gap-4">
            <p>
              wh d4 5shrtfxs5 rd5 6dhry6 dyty6 je 5yhsrre4y46 hrtgrrtw re5y
              hre5y4 hret a
            </p>
            <p>
              wh d4 5shrtfxs5 rd5 6dhry6 dyty6 je 5yhsrre4y46 hrtgrrtw re5y
              hre5y4 hret adyty6 je 5yhsrre4y46 hrtgrrtw re5y hre5y4a uwihs fuiweah uis di wlauirof m;oaij reiofk  ;roij rgzdkf nvir go;zdf m;re g;dfk nvori rgio;df noiraj rikfd roiaj gio;df rea jrgiof ;oeiaj gridfk iao ifef wsudi fewuH HEWULH Pwo eoi; w 8EIOSD ;EOW; w98eido f ewU RHIURH RI EOS  OE8RAG HLZHG URIIH RIUFJ LI HRJDFB FLAIEUI HUGN
            </p>
            <p>
              wh d4 5shrtfxs5 rd5 6dhry6 dyty6 je 5yhsrre4y46 hrtgrrtw re5y
              hre5y4 hret a
            </p>
            <p>
              wh d4 5shrtfxs5 rd5 6dhry6 dyty6 je 5yhsrre4y46 hrtgrrtw re5y
              hre5y4 hret a
            </p>
          </div>
        </div>

        <RelatedPage></RelatedPage>
      </section>
    </Format>
  );
};

export default blogPost;
