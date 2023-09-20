"use client";

import { useComponentDidMount } from "@/hooks/useComponentDidMount";
import { initFlowbite as _initFlowbite } from "flowbite";

export function InitFlowbite() {
  useComponentDidMount(() => {
    _initFlowbite();
  });

  return (<></>);
}