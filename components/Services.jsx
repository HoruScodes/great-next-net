import Image from "next/image";
import { Container } from "./Container";
import {
  ArrowPathIcon,
  CheckIcon,
  CloudArrowUpIcon,
  Cog6ToothIcon,
  FingerPrintIcon,
  LockClosedIcon,
  ServerIcon,
  ListBulletIcon,
  ArrowRightCircleIcon,
  CameraIcon,
} from "@heroicons/react/20/solid";

import ServiceImage1 from "@/images/services/fibercable.png";
import ServiceImage2 from "@/images/services/networkcabling.png";
import ServiceImage3 from "@/images/services/plug.png";
import ServiceImage4 from "@/images/services/remote-access.png";
import ServiceImage5 from "@/images/services/security-camera.png";
import ServiceImage6 from "@/images/services/networking.png";

const Services = () => {
  const features = [
    {
      name: "Fiber Optic Cable installation.",
      description:
        "Need fiber optic cabling? We have got you covered. Contact us for installation, termination, splicing, and equipment supply at wholesale rates.",
      image: ServiceImage1,
    },
    {
      name: "Network cabling.",
      description:
        "Upgrade your network with our expert cabling solutions. We install Cat 5e, Cat 6, 6A, and Cat 7 data cables for commercial businesses all over Canada and the USA.",
      image: ServiceImage2,
    },
    {
      name: "Electrical service.",
      description:
        "Your trusted electrical partner for all your needs. From routine maintenance to emergency repairs, our experienced electricians provide top-quality electrical services for homes and businesses. ",
      image: ServiceImage3,
    },
    {
      name: "Telephone lines.",
      description:
        "We provide professional telephone line installation and troubleshooting services for both residential and commercial customers, all over Canada and some parts of the USA.",
      image: ServiceImage4,
    },
    {
      name: "CCTV Camera installation.",
      description:
        "Protect your business with Greatnet's expert CCTV installation. Enjoy free site surveys and personalized security plans designed to meet your specific needs.",
      image: ServiceImage5,
    },
    {
      name: "Structured cabling.",
      description:
        "Future-proof your business with our advanced structured cabling solutions. Our expert installers provide tailored consultations to ensure your network meets the demands. ",
      image: ServiceImage6,
    },
  ];

  return (
    <Container className={"py-20 sm:py-32"}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          {/* <h2 className="text-base font-semibold leading-7 text-indigo-600">
            Everything you need
          </h2> */}
          <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Solutions we offer
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Our team of skilled IT professionals at Great Network delivers
            innovative solutions and exceptional support to help you optimize
            your technology infrastructure and achieve your business goals
          </p>
        </div>
      </div>

      <div className="mx-auto mt-16 max-w-7xl px-6 sm:mt-20 md:mt-24 lg:px-8">
        <dl className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 text-base leading-7 text-gray-600 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
          {features.map((feature) => (
            <div key={feature.name} className="relative pl-9">
              <dt className="inline font-semibold text-gray-900">
                <Image
                  className="h-14 w-14 object-cover"
                  src={feature.image}
                  alt=""
                  width={56}
                  height={56}
                />

                {feature.name}
              </dt>{" "}
              <dd className="inline">{feature.description}</dd>
            </div>
          ))}
        </dl>
      </div>
    </Container>
  );
};

export default Services;
