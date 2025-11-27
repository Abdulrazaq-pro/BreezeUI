// @ts-nocheck
import * as __fd_glob_16 from "../content/docs/getting-started/introduction.mdx?collection=docs"
import * as __fd_glob_15 from "../content/docs/getting-started/installation.mdx?collection=docs"
import * as __fd_glob_14 from "../content/docs/getting-started/changelog.mdx?collection=docs"
import * as __fd_glob_13 from "../content/docs/everything-by-breezeui/template.mdx?collection=docs"
import * as __fd_glob_12 from "../content/docs/everything-by-breezeui/block.mdx?collection=docs"
import * as __fd_glob_11 from "../content/docs/components/sidebar.mdx?collection=docs"
import * as __fd_glob_10 from "../content/docs/components/pnf.mdx?collection=docs"
import * as __fd_glob_9 from "../content/docs/components/logo-cloud.mdx?collection=docs"
import * as __fd_glob_8 from "../content/docs/components/hero.mdx?collection=docs"
import * as __fd_glob_7 from "../content/docs/components/footer.mdx?collection=docs"
import * as __fd_glob_6 from "../content/docs/components/features.mdx?collection=docs"
import * as __fd_glob_5 from "../content/docs/components/cta.mdx?collection=docs"
import * as __fd_glob_4 from "../content/docs/components/contact.mdx?collection=docs"
import * as __fd_glob_3 from "../content/docs/components/alert.mdx?collection=docs"
import * as __fd_glob_2 from "../content/docs/index.mdx?collection=docs"
import { default as __fd_glob_1 } from "../content/docs/meta.json?collection=docs"
import { default as __fd_glob_0 } from "../content/docs/meta copy.json?collection=docs"
import { server } from 'fumadocs-mdx/runtime/server';
import type * as Config from '../source.config';

const create = server<typeof Config, import("fumadocs-mdx/runtime/types").InternalTypeConfig & {
  DocData: {
  }
}>({"doc":{"passthroughs":["extractedReferences"]}});

export const docs = await create.docs("docs", "content/docs", {"meta copy.json": __fd_glob_0, "meta.json": __fd_glob_1, }, {"index.mdx": __fd_glob_2, "components/alert.mdx": __fd_glob_3, "components/contact.mdx": __fd_glob_4, "components/cta.mdx": __fd_glob_5, "components/features.mdx": __fd_glob_6, "components/footer.mdx": __fd_glob_7, "components/hero.mdx": __fd_glob_8, "components/logo-cloud.mdx": __fd_glob_9, "components/pnf.mdx": __fd_glob_10, "components/sidebar.mdx": __fd_glob_11, "everything-by-breezeui/block.mdx": __fd_glob_12, "everything-by-breezeui/template.mdx": __fd_glob_13, "getting-started/changelog.mdx": __fd_glob_14, "getting-started/installation.mdx": __fd_glob_15, "getting-started/introduction.mdx": __fd_glob_16, });