'use client';

import { useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";
import { IconType } from "react-icons";
import  qs  from "query-string";

interface CategoryBoxProps {

    icon: IconType;
    label: string;
    selected?: boolean;
}

const CategoryBox: React.FC<CategoryBoxProps> = ({
    icon: Icon,
    label,
    selected
}) => {
    const router = useRouter();
    const params = useSearchParams();

    const handleClick = useCallback(() => {
       let currentQuery = {}; 
       if(params){
        currentQuery = qs.parse(params.toString());
       };
       const updateQuery: any = {
        ...currentQuery,
        category: label
       }

       if(params?.get('category') === label) {
        delete updateQuery.category;
       }

       const url = qs.stringifyUrl({
        url: '/',
        query:updateQuery
       },{ skipNull: true });

       router.push(url);
    },[label, params, router])

    return (
        <div
        onClick={handleClick}
        className={`
        flex
        flex-col
        items-center
        justify-center
        gap-2
        p-3
        bg-[#ffff]
        border-b-2
        hover:text-rose-700
        transition
        cursor-pointer
        ${selected ? 'border-b-rose-700':'border-transparent'}
        ${selected ? 'text-rose-500': ' text-neutral-800'}
        `}
        >
         <Icon size={26}/>  
         <div className="font-medium text-sm">
            {label}
        </div> 
        </div>
        
    );
}

export default CategoryBox;