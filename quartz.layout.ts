import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// Components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [],
  footer: Component.Footer({
    links: {
      Chat: "https://t.me/greyhatchat",
      "Telegram blog": "https://t.me/mirea",
    },
  }),
}

// Components for pages that display a single page (e.g., a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs(),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()), // Spacer only for mobile
    Component.Search(),
    Component.Darkmode(),
    Component.Explorer(), // Removed DesktopOnly so it shows on all devices
  ],
  right: [
    Component.Graph(),
    Component.TableOfContents(), // Removed DesktopOnly so TOC shows on all devices
    Component.Backlinks(),
  ],
}

// Components for pages that display lists of pages (e.g., tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs(),
    Component.ArticleTitle(),
    Component.ContentMeta(),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()), // Spacer only for mobile
    Component.Search(),
    Component.Darkmode(),
    Component.Explorer(), // Removed DesktopOnly so it shows on all devices
  ],
  right: [],
}
