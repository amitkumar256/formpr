import React , {useState} from "react";
import Link from "next/link";
import Image from "next/image";


const Socialpg = ({
  text1,
  type,
  visibleInputs,
  inputValues
}) => {
  return (
    <div className="grid grid-cols-3 gap-y-3 sm:gap-y-6 tracking-[-0.5px] leading-[17px] sm:gap-x-14  pt-4 sm:pt-8 mx-2 sm:mx-6 ">
      
      {visibleInputs.includes('mail') && (
      <div className="flex flex-col  items-center">
          <Link target="_blank" href={`mailto:${inputValues.mail}`}>
          <Image
            src={`/assets/images/social/${type}/email.png`}
            alt="gmail Logo"
            width={60}
            height={60}
          />
        </Link>
        <p className={`text-[10px] sm:text-xs ${text1} `}>Mail</p>
      </div>
      )}
      {visibleInputs.includes('whatsapp') && (
        <div className="flex flex-col items-center">
          <Link target="_blank" href={`https://wa.me/${inputValues.whatsapp}`}>
            <Image
              src={`/assets/images/social/${type}/watsp.png`}
              alt="WhatsApp Logo"
              width={60}
              height={60}
            />
          </Link>
          <p className={`text-[10px] sm:text-xs ${text1}  `}>Whatsapp</p>
        </div>
      )}
      {visibleInputs.includes('linkedin') && (
      <div className="flex flex-col  items-center">
          <Link target="_blank" href={`${inputValues.linkedin}`}>
          <Image
            src={`/assets/images/social/${type}/linked.png`}
            alt="linkedin Logo"
            width={60}
            height={60}
          />
        </Link>
        <p className={`text-[10px] sm:text-xs ${text1}`}>LinkedIn</p>
      </div>
      )}
      {visibleInputs.includes('instagram') && (
      <div className="flex flex-col  items-center">
          <Link target="_blank" href={`${inputValues.instagram}`}>
          <Image
            src={`/assets/images/social/${type}/insta.png`}
            alt="instagram Logo"
            width={60}
            height={60}
          />
        </Link>
        <p className={`text-[10px] sm:text-xs ${text1}`}>Instagram</p>
      </div>
      )}
      {visibleInputs.includes('facebook') && (
      <div className="flex flex-col  items-center">
          <Link target="_blank" href={`${inputValues.facebook}`}>
          <Image
            src={`/assets/images/social/${type}/facebook.png`}
            alt="facebook Logo"
            width={60}
            height={60}
          />
        </Link>
        <p className={`text-[10px] sm:text-xs ${text1}`}>Facebook</p>
      </div>
      )}
      {visibleInputs.includes('youtube') && (
      <div className="flex flex-col  items-center">
          <Link target="_blank" href={`${inputValues.youtube}`}>
          <Image
            src={`/assets/images/social/${type}/Youtube.png`}
            alt="Youtube Logo"
            width={60}
            height={60}
          />
        </Link>
        <p className={`text-[10px] sm:text-xs ${text1}`}>Youtube</p>
      </div>
      )}
      {visibleInputs.includes('twitter') && (
      <div className="flex flex-col  items-center">
          <Link target="_blank" href={`${inputValues.twitter}`}>
          <Image
            src={`/assets/images/social/${type}/Twitter.png`}
            alt="Twitter Logo"
            width={60}
            height={60}
          />
        </Link>
        <p className={`text-[10px] sm:text-xs ${text1}`}>Twitter</p>
      </div>
      )}
      {visibleInputs.includes('reddit') && (
      <div className="flex flex-col  items-center">
          <Link target="_blank" href={`${inputValues.reddit}`}>
          <Image
            src={`/assets/images/social/${type}/Reddit.png`}
            alt="Reddit Logo"
            width={60}
            height={60}
          />
        </Link>
        <p className={`text-[10px] sm:text-xs ${text1}`}>Reddit</p>
      </div>
      )}
      {visibleInputs.includes('behance') && (
      <div className="flex flex-col  items-center">
        <Link target="_blank" href={`${inputValues.behance}`}>
          <Image
            src={`/assets/images/social/${type}/Behance.png`}
            alt="Behance Logo"
            width={60}
            height={60}
          />
        </Link>
        <p className={`text-[10px] sm:text-xs ${text1}`}>Behance</p>
      </div>
      )}
      {/*
      <div className="flex flex-col  items-center">
        <Link href={"#"}>
          <Image
            className="grayscale"
            src={`/assets/images/social/${type}/pdf.png`}
            alt="deck Logo"
            width={60}
            height={60}
          />
        </Link>
        <p className={`text-[10px] ${text1}`}>Download PDF</p>
      </div>
      */}
    </div>
  );
};

export default Socialpg;