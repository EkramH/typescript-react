import Container from "@/ui/Container";
import BatteryReplacement from "@/components/serviceSection/BatteryReplacement";

const ServiceSection = () => {
  return (
    <Container className="my-40">
      <div className="text-center flex flex-col justify-between items-center">
        <h1>
          <span className="text-primary">Services</span> that we provide.
        </h1>
        <p className="max-w-[80ch] mt-10 mb-20">
          We provide various computer repair services and solutions for our new
          and regular customers. Feel free to find out more below.
        </p>
      </div>
      <div className="grid grid-cols-12 gap-5">
        <BatteryReplacement />
        <div className="bg-red-400 h-[415px] rounded-2xl col-span-6 lg:col-span-5"></div>
        <div className="bg-red-400 h-[415px] rounded-2xl col-span-6 lg:col-span-7"></div>
        <div className="bg-red-400 h-[415px] rounded-2xl col-span-12"></div>
        <div className="bg-red-400 h-[415px] rounded-2xl col-span-12 lg:col-span-4"></div>
        <div className="bg-red-400 h-[415px] rounded-2xl col-span-12 md:col-span-6 lg:col-span-4"></div>
        <div className="bg-red-400 h-[415px] rounded-2xl col-span-12 md:col-span-6 lg:col-span-4"></div>
      </div>
    </Container>
  );
};

export default ServiceSection;
