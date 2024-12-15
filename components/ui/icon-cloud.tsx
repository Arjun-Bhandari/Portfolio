"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import {
  fetchSimpleIcons,
  ICloud,
  renderSimpleIcon,
  SimpleIcon,
} from "react-icon-cloud";

// Dynamically import Cloud with no SSR
const Cloud = dynamic(() => import("react-icon-cloud").then(mod => mod.Cloud), { 
  ssr: false,
  loading: () => (
    <div className="flex h-full w-full items-center justify-center">
      <div className="h-32 w-32 animate-pulse rounded-full bg-gray-200" />
    </div>
  ),
});

export const cloudProps: Omit<ICloud, "children"> = {
  containerProps: {
    style: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      height: "100%",
      position: "relative",
      minHeight: "280px",
    },
  },
  options: {
    reverse: true,
    depth: 1,
    wheelZoom: false,
    imageScale: 2,
    activeCursor: "default",
    tooltip: "native",
    initial: [0.1, -0.1],
    clickToFront: 500,
    tooltipDelay: 0,
    outlineColour: "#0000",
    maxSpeed: 0.04,
    minSpeed: 0.02,
    radiusX: 0.65,
    radiusY: 0.65,
    radiusZ: 0.65,
    stretchX: 1,
    stretchY: 1,
    offsetX: 0,
    offsetY: 0,
    padding: 10,
    freezeActive: true,
    freezeDecel: true,
    shuffleTags: true,
    centreImage: null,
    pinchZoom: false,
    animTiming: "Smooth",
  },
};

export const renderCustomIcon = (icon: SimpleIcon, theme: string) => {
  const bgHex = theme === "light" ? "#f3f2ef" : "#080510";
  const fallbackHex = theme === "light" ? "#6e6e73" : "#ffffff";
  const minContrastRatio = theme === "dark" ? 2 : 1.2;

  return renderSimpleIcon({
    icon,
    bgHex,
    fallbackHex,
    minContrastRatio,
    size: 36,
    aProps: {
      href: undefined,
      target: undefined,
      rel: undefined,
      onClick: (e: React.MouseEvent) => e.preventDefault(),
    },
  });
};

export type DynamicCloudProps = {
  iconSlugs: string[];
};

type IconData = Awaited<ReturnType<typeof fetchSimpleIcons>>;

export function IconCloud({ iconSlugs }: DynamicCloudProps) {
  const [data, setData] = useState<IconData | null>(null);
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    setMounted(true);
    fetchSimpleIcons({ slugs: iconSlugs }).then(setData);
  }, [iconSlugs]);

  const renderedIcons = data
    ? Object.values(data.simpleIcons).map((icon) =>
        renderCustomIcon(icon, theme || "light")
      )
    : null;

  if (!mounted || !renderedIcons) return null;

  return (
    <div className="relative flex h-full w-full items-center justify-center">
      <Cloud {...cloudProps}>
        <>{renderedIcons}</>
      </Cloud>
    </div>
  );
}
