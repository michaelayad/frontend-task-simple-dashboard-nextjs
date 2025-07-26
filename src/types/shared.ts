import type { JSX } from "react";

export type Route = {
    path: string;
    element: JSX.Element;
    layout?: JSX.Element;
}

export type NavItem = {
    name: string;
    path: string;
    icon: string;
}