import React from 'react'
import Image from "next/image";
import {ReactNode} from 'react';
import {TextGeneratorFn,NextBreadcrumbsProps,BreadCrumb as Bcrumb} from "breadcrumbs-next";



function BreadCrumb() {
  const onClickHandle = () => {
    window.history.back();
  }

  return (
    <div className="w-full h-15 flex justify-start p-5 bg-gray-900 items-center font-bold">
        <Image className="relative left-0" onClick={onClickHandle} width={40} height={40} src="/ep_back.svg" alt="ico" />
        
    </div>
  )
}

export default BreadCrumb