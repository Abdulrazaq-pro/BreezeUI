// @ts-nocheck
import { browser } from 'fumadocs-mdx/runtime/browser';
import type * as Config from '../source.config';

const create = browser<typeof Config, import("fumadocs-mdx/runtime/types").InternalTypeConfig & {
  DocData: {
  }
}>();
const browserCollections = {
  docs: create.doc("docs", {"index.mdx": () => import("../content/docs/index.mdx?collection=docs"), "components/alert.mdx": () => import("../content/docs/components/alert.mdx?collection=docs"), "components/contact.mdx": () => import("../content/docs/components/contact.mdx?collection=docs"), "components/cta.mdx": () => import("../content/docs/components/cta.mdx?collection=docs"), "components/features.mdx": () => import("../content/docs/components/features.mdx?collection=docs"), "components/footer.mdx": () => import("../content/docs/components/footer.mdx?collection=docs"), "components/hero.mdx": () => import("../content/docs/components/hero.mdx?collection=docs"), "components/logo-cloud.mdx": () => import("../content/docs/components/logo-cloud.mdx?collection=docs"), "components/pnf.mdx": () => import("../content/docs/components/pnf.mdx?collection=docs"), "components/sidebar.mdx": () => import("../content/docs/components/sidebar.mdx?collection=docs"), "everything-by-breezeui/block.mdx": () => import("../content/docs/everything-by-breezeui/block.mdx?collection=docs"), "everything-by-breezeui/template.mdx": () => import("../content/docs/everything-by-breezeui/template.mdx?collection=docs"), "getting-started/changelog.mdx": () => import("../content/docs/getting-started/changelog.mdx?collection=docs"), "getting-started/installation.mdx": () => import("../content/docs/getting-started/installation.mdx?collection=docs"), "getting-started/introduction.mdx": () => import("../content/docs/getting-started/introduction.mdx?collection=docs"), }),
};
export default browserCollections;