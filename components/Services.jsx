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
      name: "Push to deploy.",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit aute id magna.",
      image: ServiceImage1,
    },
    {
      name: "SSL certificates.",
      description:
        "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.",
      image: ServiceImage2,
    },
    {
      name: "Simple queues.",
      description:
        "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus.",
      image: ServiceImage3,
    },
    {
      name: "Advanced security.",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit aute id magna.",
      image: ServiceImage4,
    },
    {
      name: "Powerful API.",
      description:
        "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.",
      image: ServiceImage5,
    },
    {
      name: "Database backups.",
      description:
        "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. ",
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
            Services
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
            impedit perferendis suscipit eaque, iste dolor cupiditate
            blanditiis.
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
