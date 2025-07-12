// lib/metadata/metadata-builder.ts

import { ICompany } from "@/types/company-type";

export interface IMetaData {
  title: string;
  description: string;
  openGraph: {
    title: string;
    description: string;
    images: {
      url: string;
      width: number;
      height: number;
      alt: string;
    }[];
  };
  twitter: {
    card: string;
    title: string;
    description: string;
    images: any[];
  };
  icons: {
    icon: string;
  };
  metadataBase: URL;
}

export function buildMetadata(info: ICompany | null): IMetaData {
  return {
    title: info?.name ?? "منو دیجیتال",
    description: `آدرس: ${info?.address_line ?? "نداریم!"}`,
    openGraph: {
      title: info?.name ?? "منو دیجیتال",
      description: info?.description ?? "",
      images: [
        {
          url: "https://menu.dashboard.loyaltyhub.ir/icon512_rounded.png",
          width: 800,
          height: 600,
          alt: info?.name ?? "لوگو شرکت",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: info?.name ?? "منو دیجیتال",
      description: info?.description ?? "",
      images: ["https://menu.dashboard.loyaltyhub.ir/icon512_rounded.png"],
    },
    icons: {
      icon: "https://menu.dashboard.loyaltyhub.ir/icon512_rounded.png",
    },
    metadataBase: new URL("https://menu.dashboard.loyaltyhub.ir"),
  };
}

export function injectMetadata(metadata: IMetaData) {
  // Title
  if (metadata.title) {
    document.title = metadata.title;
  }

  // Description
  updateOrCreateMeta("name", "description", metadata.description);

  // Open Graph
  if (metadata.openGraph) {
    updateOrCreateMeta("property", "og:title", metadata.openGraph.title);
    updateOrCreateMeta(
      "property",
      "og:description",
      metadata.openGraph.description
    );
    if (metadata.openGraph.images?.[0]?.url) {
      updateOrCreateMeta(
        "property",
        "og:image",
        metadata.openGraph.images[0].url
      );
    }
  }

  // Twitter
  if (metadata.twitter) {
    updateOrCreateMeta("name", "twitter:card", metadata.twitter.card);
    updateOrCreateMeta("name", "twitter:title", metadata.twitter.title);
    updateOrCreateMeta(
      "name",
      "twitter:description",
      metadata.twitter.description
    );
    if (metadata.twitter.images?.[0]) {
      updateOrCreateMeta("name", "twitter:image", metadata.twitter.images[0]);
    }
  }

  // Icons
  if (metadata.icons?.icon) {
    updateOrCreateLink("icon", metadata.icons.icon);
  }

  // Optional: set base
  if (metadata.metadataBase) {
    let base = document.querySelector("base") || document.createElement("base");
    base.setAttribute("href", metadata.metadataBase.toString());
    document.head.appendChild(base);
  }
}

// Helpers
function updateOrCreateMeta(attr: string, name: string, content?: string) {
  if (!content) return;
  let meta = document.querySelector(`meta[${attr}="${name}"]`);
  if (!meta) {
    meta = document.createElement("meta");
    meta.setAttribute(attr, name);
    document.head.appendChild(meta);
  }
  meta.setAttribute("content", content);
}

function updateOrCreateLink(rel: string, href: string) {
  let link = document.querySelector(`link[rel="${rel}"]`);
  if (!link) {
    link = document.createElement("link");
    link.setAttribute("rel", rel);
    document.head.appendChild(link);
  }
  link.setAttribute("href", href);
}
